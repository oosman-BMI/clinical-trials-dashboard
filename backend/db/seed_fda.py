"""
============================================================
Twine Pulse — FDA Approvals Seed Script
============================================================
PURPOSE:
  Reads all FDA approval records out of the frontend app.js
  file and loads them into the fda_approvals table in
  Databricks. Covers 2020–2026 (~300+ approvals).

HOW TO RUN:
  First time (full load):
    python db/seed_fda.py

  After adding new entries to app.js (new year's approvals):
    python db/seed_fda.py
    (Skips records already in the database — safe to re-run.)

  To refresh all records (e.g. after editing descriptions):
    python db/seed_fda.py --refresh

  Preview without writing:
    python db/seed_fda.py --dry-run

HOW TO ADD NEW FDA APPROVALS:
  Option A — Edit app.js (recommended, keeps frontend in sync):
    1. Open frontend/app.js
    2. Find the "approvals:" array
    3. Add a new line following this exact format:
         { year:2026, brand_name:"DrugName", generic_name:"generic-name",
           company:"Company Name", therapeutic_area:"Therapeutic Area",
           indication:"What it treats", designations:["Priority Review"],
           description:"Brief description." },
    4. Save and run:  python db/seed_fda.py

  Option B — Add directly to Databricks:
    Run a manual INSERT in Databricks SQL Editor:
      INSERT INTO twinepulse.main.fda_approvals
        (year, brand_name, generic_name, company, therapeutic_area,
         indication, designations_json, description)
      VALUES (2026, 'DrugName', 'generic', 'Company', 'Area',
              'Indication', '["Priority Review"]', 'Description');

DATA SOURCE:
  frontend/app.js  →  const FDA_DATA = { approvals: [...] }
  This data was compiled from FDA.gov and company press releases.
============================================================
"""

import os
import re
import sys
import json
from dotenv import load_dotenv
from databricks import sql

# ============================================================
# Configuration
# ============================================================
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

HOSTNAME  = os.getenv("DATABRICKS_SERVER_HOSTNAME")
HTTP_PATH = os.getenv("DATABRICKS_HTTP_PATH")
TOKEN     = os.getenv("DATABRICKS_TOKEN")
CATALOG   = os.getenv("DATABRICKS_CATALOG", "twinepulse")
SCHEMA    = os.getenv("DATABRICKS_SCHEMA", "main")
T         = f"{CATALOG}.{SCHEMA}"

# Path to app.js (one level up from /backend/db/ → /frontend/app.js)
APP_JS_PATH = os.path.join(
    os.path.dirname(__file__), "..", "..", "frontend", "app.js"
)

DRY_RUN = "--dry-run" in sys.argv
REFRESH = "--refresh" in sys.argv


# ============================================================
# Parse FDA data from app.js
# ============================================================

def parse_fda_approvals_from_js(filepath):
    """
    Reads the frontend/app.js file and extracts every FDA approval
    record from the FDA_DATA.approvals array.

    Each record looks like this in the file (one per line):
      { year:2020, brand_name:"Tepezza", generic_name:"teprotumumab-trbw",
        company:"Horizon Therapeutics", therapeutic_area:"Ophthalmology",
        indication:"...", designations:["Priority Review", "Orphan Drug"],
        description:"First and only FDA-approved..." },

    Returns a list of dicts with keys:
      year, brand_name, generic_name, company, therapeutic_area,
      indication, designations (list), description
    """
    if not os.path.exists(filepath):
        raise FileNotFoundError(
            f"Could not find app.js at: {filepath}\n"
            f"Make sure you are running this script from the /backend folder."
        )

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all lines that look like FDA approval entries
    # Each entry starts with { year: and contains brand_name:
    entry_lines = [
        line.strip()
        for line in content.splitlines()
        if re.search(r'\{\s*year:\s*\d+', line) and 'brand_name:' in line
    ]

    approvals = []
    skipped   = 0

    for line in entry_lines:
        try:
            record = parse_fda_line(line)
            if record:
                approvals.append(record)
        except Exception as e:
            skipped += 1
            # Don't crash on a bad line — just skip it and note it
            brand = re.search(r'brand_name:"([^"]*)"', line)
            name  = brand.group(1) if brand else "unknown"
            print(f"  ⚠️  Could not parse entry for '{name}': {e}")

    if skipped:
        print(f"  Note: {skipped} entries could not be parsed and were skipped.")

    return approvals


def parse_fda_line(line):
    """
    Parse a single FDA approval entry line into a Python dict.
    Uses individual regex patterns for each field.
    """

    def extract(pattern, text, default=""):
        """Extract first group from regex, return default if not found."""
        m = re.search(pattern, text)
        return m.group(1).strip() if m else default

    # --- Required fields ---
    year_str = extract(r'year:\s*(\d+)', line)
    if not year_str:
        return None  # Not a valid entry
    year = int(year_str)

    brand_name       = extract(r'brand_name:\s*"([^"]*)"', line)
    generic_name     = extract(r'generic_name:\s*"([^"]*)"', line)
    company          = extract(r'company:\s*"([^"]*)"', line)
    therapeutic_area = extract(r'therapeutic_area:\s*"([^"]*)"', line)
    description      = extract(r'description:\s*"([^"]*)"', line)

    # --- Optional fields ---
    indication = extract(r'indication:\s*"([^"]*)"', line)

    # --- Designations array ---
    # Looks like: designations:["Priority Review", "Orphan Drug"]
    designations = []
    desig_match = re.search(r'designations:\s*\[([^\]]*)\]', line)
    if desig_match:
        inner = desig_match.group(1)
        # Extract each quoted string from the array
        designations = re.findall(r'"([^"]+)"', inner)

    if not brand_name:
        return None  # Skip malformed entries

    return {
        "year":             year,
        "brand_name":       brand_name,
        "generic_name":     generic_name,
        "company":          company,
        "therapeutic_area": therapeutic_area,
        "indication":       indication,
        "designations":     designations,
        "description":      description
    }


# ============================================================
# Database helpers
# ============================================================

def db_query(cur, sql_str, params=None):
    cur.execute(sql_str, params or [])
    if cur.description is None:
        return []
    cols = [c[0] for c in cur.description]
    return [dict(zip(cols, row)) for row in cur.fetchall()]

def db_execute(cur, sql_str, params=None):
    if DRY_RUN:
        return
    cur.execute(sql_str, params or [])


# ============================================================
# Load into Databricks
# ============================================================

def seed_fda(cur, approvals):
    """
    Load FDA approvals into Databricks.
    Skips existing records unless --refresh is used.
    """
    added   = 0
    skipped = 0
    updated = 0

    for record in approvals:
        brand = record["brand_name"]
        year  = record["year"]

        # Check if this approval is already in the database
        existing = db_query(cur,
            f"SELECT approval_id FROM {T}.fda_approvals "
            f"WHERE brand_name = %s AND year = %s",
            [brand, year]
        )

        desig_json = json.dumps(record["designations"])

        if existing and not REFRESH:
            skipped += 1
            continue

        if existing and REFRESH:
            # Update existing record
            db_execute(cur, f"""
                UPDATE {T}.fda_approvals SET
                    generic_name      = %s,
                    company           = %s,
                    therapeutic_area  = %s,
                    indication        = %s,
                    designations_json = %s,
                    description       = %s
                WHERE brand_name = %s AND year = %s
            """, [
                record["generic_name"],
                record["company"],
                record["therapeutic_area"],
                record["indication"],
                desig_json,
                record["description"],
                brand,
                year
            ])
            updated += 1

        else:
            # Insert new record
            db_execute(cur, f"""
                INSERT INTO {T}.fda_approvals (
                    year, brand_name, generic_name, company,
                    therapeutic_area, indication, designations_json, description
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """, [
                year,
                brand,
                record["generic_name"],
                record["company"],
                record["therapeutic_area"],
                record["indication"],
                desig_json,
                record["description"]
            ])
            added += 1

    return added, updated, skipped


# ============================================================
# Main
# ============================================================

def main():
    if DRY_RUN:
        print("\n🔍 DRY RUN MODE — No data will be written to Databricks\n")
    if REFRESH:
        print("\n🔄 REFRESH MODE — All existing FDA records will be updated\n")

    # --- Parse FDA data from app.js ---
    print(f"Reading FDA data from: {os.path.abspath(APP_JS_PATH)}")
    approvals = parse_fda_approvals_from_js(APP_JS_PATH)
    print(f"Found {len(approvals)} FDA approval records\n")

    if not approvals:
        print("❌ No records found. Check that app.js has not been moved or renamed.")
        return

    # --- Summary by year ---
    from collections import Counter
    by_year = Counter(r["year"] for r in approvals)
    for yr in sorted(by_year):
        print(f"  {yr}: {by_year[yr]} approvals")
    print()

    if DRY_RUN:
        print("✅ Dry run complete. Run without --dry-run to load data.")
        return

    # --- Connect and load ---
    print(f"Connecting to Databricks: {HOSTNAME}")
    with sql.connect(
        server_hostname=HOSTNAME,
        http_path=HTTP_PATH,
        access_token=TOKEN
    ) as conn:
        with conn.cursor() as cur:
            print("Connected.\n")

            added, updated, skipped = seed_fda(cur, approvals)

            print(f"✅ FDA seed complete!")
            print(f"   Added:   {added} records")
            print(f"   Updated: {updated} records")
            print(f"   Skipped: {skipped} records (already exist; use --refresh to update)")
            print(f"\nAll records are in: {T}.fda_approvals")
            print()
            print("Verify in Databricks:")
            print("  SELECT year, COUNT(*) as count")
            print("  FROM twinepulse.main.fda_approvals")
            print("  GROUP BY year ORDER BY year")


if __name__ == "__main__":
    main()
