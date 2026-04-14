"""
============================================================
Twine Pulse — Databricks Seed Script
============================================================
PURPOSE:
  Loads all company data from companies_seed.py into the
  Databricks tables created by create_tables.py.

HOW TO RUN:
  First time (full load):
    python db/seed_data.py

  After adding a new company to companies_seed.py:
    python db/seed_data.py
    (It will skip companies already in the database and only
     add the new one — safe to run multiple times.)

  To force-refresh ALL company data (e.g. after updating stock prices):
    python db/seed_data.py --refresh

  To preview what would happen without writing anything:
    python db/seed_data.py --dry-run

WHAT IT LOADS:
  ✓ companies              (core company profiles)
  ✓ pipeline_drugs         (pipeline drugs per company)
  ✓ blue_matter_connections (BM employee connections)

  ✗ fda_approvals          (loaded separately — see note below)
  ✗ notes / chat_history   (user-generated, never seeded)

NOTE ON FDA APPROVALS:
  The FDA approvals table is populated from the data embedded
  in frontend/app.js. A separate script (seed_fda.py, coming in
  Step 4) will extract and load that data. The live
  ClinicalTrials.gov API handles real-time trial data.

ADDING NEW COMPANIES:
  Just add a new entry to companies_seed.py and run this
  script again. No code changes needed here.
============================================================
"""

import os
import sys
import json
from dotenv import load_dotenv
from databricks import sql

# Import company data from the data file in the same folder
sys.path.insert(0, os.path.dirname(__file__))
from companies_seed import COMPANIES

# ============================================================
# Load credentials
# ============================================================
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

HOSTNAME  = os.getenv("DATABRICKS_SERVER_HOSTNAME")
HTTP_PATH = os.getenv("DATABRICKS_HTTP_PATH")
TOKEN     = os.getenv("DATABRICKS_TOKEN")
CATALOG   = os.getenv("DATABRICKS_CATALOG", "twinepulse")
SCHEMA    = os.getenv("DATABRICKS_SCHEMA", "main")
T         = f"{CATALOG}.{SCHEMA}"

# ============================================================
# Parse command-line flags
# ============================================================
DRY_RUN = "--dry-run" in sys.argv     # Preview only — no writes
REFRESH = "--refresh" in sys.argv     # Force update all companies

def log(msg):
    print(msg)

def warn(msg):
    print(f"  ⚠️  {msg}")


# ============================================================
# Database helpers
# ============================================================

def db_query(cur, sql_str, params=None):
    """Run a SELECT and return results as list of dicts."""
    cur.execute(sql_str, params or [])
    if cur.description is None:
        return []
    col_names = [col[0] for col in cur.description]
    return [dict(zip(col_names, row)) for row in cur.fetchall()]

def db_execute(cur, sql_str, params=None):
    """Run a write statement (INSERT / UPDATE / DELETE)."""
    if DRY_RUN:
        return  # Skip all writes in dry-run mode
    cur.execute(sql_str, params or [])


# ============================================================
# Seed a single company
# ============================================================

def seed_company(cur, company):
    """
    Upsert one company into Databricks.

    Logic:
      - Check if the ticker already exists in the companies table
      - If it does AND we are not in --refresh mode: skip it
      - If it does AND we are in --refresh mode: update it
      - If it doesn't exist: insert it
    Then always re-seed pipeline_drugs and bm_connections for
    that company (delete + re-insert = always up to date).
    """
    ticker = company["ticker"]
    name   = company["name"]

    # --- Check if company already exists ---
    existing = db_query(cur,
        f"SELECT ticker FROM {T}.companies WHERE ticker = %s",
        [ticker]
    )

    leadership_json = json.dumps(company.get("leadership", {}))

    if existing and not REFRESH:
        log(f"  ⏭  {ticker} ({name}) already exists — skipping. Use --refresh to update.")
        return

    if existing and REFRESH:
        # UPDATE the company record
        log(f"  🔄  Updating {ticker} ({name})...")
        db_execute(cur, f"""
            UPDATE {T}.companies SET
                name             = %s,
                summary          = %s,
                headquarters     = %s,
                founded          = %s,
                employees        = %s,
                approved_products = %s,
                pipeline_products = %s,
                recent_news      = %s,
                stock_price      = %s,
                market_cap       = %s,
                pe_ratio         = %s,
                stock_change     = %s,
                stock_change_pct = %s,
                year_high        = %s,
                year_low         = %s,
                leadership_json  = %s,
                salesforce_id    = %s,
                linkedin_url     = %s
            WHERE ticker = %s
        """, [
            name,
            company.get("summary", ""),
            company.get("headquarters", ""),
            company.get("founded", ""),
            company.get("employees", ""),
            company.get("approved_products", ""),
            company.get("pipeline_products", ""),
            company.get("recent_news", ""),
            company.get("stock_price", 0.0),
            company.get("market_cap", 0.0),
            company.get("pe_ratio", ""),
            company.get("stock_change", 0.0),
            company.get("stock_change_pct", 0.0),
            company.get("year_high", 0.0),
            company.get("year_low", 0.0),
            leadership_json,
            company.get("salesforce_id", ""),
            company.get("linkedin_url", ""),
            ticker
        ])
    else:
        # INSERT as new company
        log(f"  ➕  Adding {ticker} ({name})...")
        db_execute(cur, f"""
            INSERT INTO {T}.companies (
                ticker, name, summary, headquarters, founded, employees,
                approved_products, pipeline_products, recent_news,
                stock_price, market_cap, pe_ratio, stock_change, stock_change_pct,
                year_high, year_low, leadership_json, salesforce_id, linkedin_url
            ) VALUES (
                %s, %s, %s, %s, %s, %s,
                %s, %s, %s,
                %s, %s, %s, %s, %s,
                %s, %s, %s, %s, %s
            )
        """, [
            ticker,
            name,
            company.get("summary", ""),
            company.get("headquarters", ""),
            company.get("founded", ""),
            company.get("employees", ""),
            company.get("approved_products", ""),
            company.get("pipeline_products", ""),
            company.get("recent_news", ""),
            company.get("stock_price", 0.0),
            company.get("market_cap", 0.0),
            company.get("pe_ratio", ""),
            company.get("stock_change", 0.0),
            company.get("stock_change_pct", 0.0),
            company.get("year_high", 0.0),
            company.get("year_low", 0.0),
            leadership_json,
            company.get("salesforce_id", ""),
            company.get("linkedin_url", "")
        ])

    # --- Pipeline drugs ---
    # Delete existing pipeline drugs for this company, then re-insert.
    # This ensures any edits you make in companies_seed.py are reflected.
    pipeline_drugs = company.get("pipeline_drugs", [])
    if pipeline_drugs or REFRESH:
        db_execute(cur,
            f"DELETE FROM {T}.pipeline_drugs WHERE ticker = %s",
            [ticker]
        )
        for drug in pipeline_drugs:
            db_execute(cur, f"""
                INSERT INTO {T}.pipeline_drugs (
                    ticker, drug_name, phase, indication,
                    expected_fda_date, sentiment, sentiment_reason, mechanism
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """, [
                ticker,
                drug.get("drug_name", ""),
                drug.get("phase", ""),
                drug.get("indication", ""),
                drug.get("expected_fda_date", ""),
                drug.get("sentiment", ""),
                drug.get("sentiment_reason", ""),
                drug.get("mechanism", "")
            ])
        count = len(pipeline_drugs)
        if not DRY_RUN:
            log(f"       Pipeline drugs loaded: {count}")

    # --- Blue Matter connections ---
    bm_connections = company.get("bm_connections", [])
    if bm_connections or REFRESH:
        db_execute(cur,
            f"DELETE FROM {T}.blue_matter_connections WHERE ticker = %s",
            [ticker]
        )
        for conn in bm_connections:
            db_execute(cur, f"""
                INSERT INTO {T}.blue_matter_connections (
                    ticker, bm_employee_name, bm_title, linkedin_url,
                    connection_type, connection_degree, notes
                ) VALUES (%s, %s, %s, %s, %s, %s, %s)
            """, [
                ticker,
                conn.get("bm_employee_name", ""),
                conn.get("bm_title", ""),
                conn.get("linkedin_url", ""),
                conn.get("connection_type", ""),
                conn.get("connection_degree", ""),
                conn.get("notes", "")
            ])
        count = len(bm_connections)
        if not DRY_RUN and count > 0:
            log(f"       BM connections loaded:  {count}")


# ============================================================
# Validate company data before loading
# ============================================================

REQUIRED_FIELDS = [
    "ticker", "name", "summary", "headquarters", "founded",
    "employees", "approved_products", "pipeline_products",
    "recent_news", "stock_price", "market_cap", "pe_ratio",
    "year_high", "year_low", "leadership"
]

def validate_company(company):
    """
    Check that a company dict has all required fields.
    Returns list of missing fields (empty list = all good).
    """
    missing = []
    for field in REQUIRED_FIELDS:
        if field not in company or company[field] is None or company[field] == "":
            missing.append(field)
    # Check leadership sub-fields
    leadership = company.get("leadership", {})
    for role in ["ceo", "cfo", "cso", "other"]:
        if role not in leadership:
            missing.append(f"leadership.{role}")
    return missing


# ============================================================
# Main
# ============================================================

def main():
    if DRY_RUN:
        log("\n🔍 DRY RUN MODE — No data will be written to Databricks\n")
    if REFRESH:
        log("\n🔄 REFRESH MODE — All existing companies will be updated\n")

    log(f"Companies to process: {len(COMPANIES)}")
    log(f"Target: {T}")
    log("")

    # --- Validate all companies before connecting ---
    log("Validating company data...")
    validation_errors = []
    for company in COMPANIES:
        ticker = company.get("ticker", "UNKNOWN")
        missing = validate_company(company)
        if missing:
            validation_errors.append(f"  {ticker}: missing fields → {', '.join(missing)}")

    if validation_errors:
        log("⚠️  Validation warnings (these companies may load with empty fields):")
        for err in validation_errors:
            log(err)
        log("")

    # --- Connect and load ---
    log(f"Connecting to Databricks: {HOSTNAME}")
    with sql.connect(
        server_hostname=HOSTNAME,
        http_path=HTTP_PATH,
        access_token=TOKEN
    ) as conn:
        with conn.cursor() as cur:
            log("Connected.\n")

            added   = 0
            updated = 0
            skipped = 0

            for company in COMPANIES:
                ticker = company.get("ticker", "")
                existing = db_query(cur,
                    f"SELECT ticker FROM {T}.companies WHERE ticker = %s",
                    [ticker]
                )

                if DRY_RUN:
                    status = "would update" if (existing and REFRESH) else \
                             "would skip"   if existing else \
                             "would add"
                    drugs  = len(company.get("pipeline_drugs", []))
                    conns  = len(company.get("bm_connections", []))
                    log(f"  [{status}] {ticker} — {company.get('name', '')} "
                        f"({drugs} drugs, {conns} BM connections)")
                    continue

                if existing and not REFRESH:
                    skipped += 1
                elif existing and REFRESH:
                    updated += 1
                else:
                    added += 1

                seed_company(cur, company)

            log("")
            if DRY_RUN:
                log("✅ Dry run complete — no data was written.")
            else:
                log(f"✅ Seed complete!")
                log(f"   Added:   {added} companies")
                log(f"   Updated: {updated} companies")
                log(f"   Skipped: {skipped} companies (already exist; use --refresh to update)")
                log(f"\nAll data is now in: {T}")
                log("")
                log("Next steps:")
                log("  1. Verify in Databricks:  SELECT * FROM twinepulse.main.companies")
                log("  2. Run api_server.py to test the backend")
                log("  3. Run seed_fda.py to load FDA approval history")


if __name__ == "__main__":
    main()
