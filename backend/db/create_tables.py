"""
============================================================
Twine Pulse — Databricks Table Creation Script
============================================================
PURPOSE:
  Run this script ONCE after your tech team sets up the
  Databricks workspace and schema. It creates all the tables
  the application needs.

HOW TO RUN:
  1. Make sure your .env file is filled in with Databricks credentials
  2. Open a terminal in the /backend folder
  3. Run:  python db/create_tables.py

WHAT IT CREATES:
  - companies              : Core company profiles (manually maintained)
  - pipeline_drugs         : Drug pipeline entries per company
  - blue_matter_connections: BM employee connections per company
  - fda_approvals          : FDA approval history (2020-2026)
  - notes                  : User-written notes per company
  - chat_history           : AI chat conversation history per user
  - data_edits             : Audit log of all data changes
  - company_additions      : Companies added via AI chat
============================================================
"""

import os
from dotenv import load_dotenv
from databricks import sql

# Load credentials from .env file
load_dotenv()

HOSTNAME  = os.getenv("DATABRICKS_SERVER_HOSTNAME")
HTTP_PATH = os.getenv("DATABRICKS_HTTP_PATH")
TOKEN     = os.getenv("DATABRICKS_TOKEN")
CATALOG   = os.getenv("DATABRICKS_CATALOG", "twinepulse")
SCHEMA    = os.getenv("DATABRICKS_SCHEMA", "main")

def run():
    print(f"Connecting to Databricks: {HOSTNAME}")
    with sql.connect(
        server_hostname=HOSTNAME,
        http_path=HTTP_PATH,
        access_token=TOKEN
    ) as conn:
        with conn.cursor() as cur:

            # --- Make sure catalog and schema exist ---
            cur.execute(f"CREATE CATALOG IF NOT EXISTS {CATALOG}")
            cur.execute(f"CREATE SCHEMA IF NOT EXISTS {CATALOG}.{SCHEMA}")
            print(f"Schema ready: {CATALOG}.{SCHEMA}")

            # ------------------------------------------
            # 1. COMPANIES
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.companies (
                    ticker          STRING NOT NULL,
                    name            STRING NOT NULL,
                    summary         STRING,
                    headquarters    STRING,
                    founded         STRING,
                    employees       STRING,
                    approved_products STRING,
                    pipeline_products STRING,
                    recent_news     STRING,
                    stock_price     DOUBLE,
                    market_cap      DOUBLE,
                    pe_ratio        STRING,
                    stock_change    DOUBLE,
                    stock_change_pct DOUBLE,
                    year_high       DOUBLE,
                    year_low        DOUBLE,
                    leadership_json STRING,   -- JSON: CEO, CFO, CSO, Other
                    salesforce_id   STRING,   -- For future Salesforce integration
                    linkedin_url    STRING,   -- Company LinkedIn page
                    created_at      TIMESTAMP DEFAULT current_timestamp(),
                    updated_at      TIMESTAMP DEFAULT current_timestamp(),
                    CONSTRAINT pk_companies PRIMARY KEY (ticker)
                )
                USING DELTA
                COMMENT 'Core company profiles — manually maintained, source of truth for all company data'
            """)
            print("  ✓ companies")

            # ------------------------------------------
            # 2. PIPELINE DRUGS
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.pipeline_drugs (
                    drug_id           BIGINT GENERATED ALWAYS AS IDENTITY,
                    ticker            STRING NOT NULL,
                    drug_name         STRING NOT NULL,
                    phase             STRING,
                    indication        STRING,
                    expected_fda_date STRING,
                    sentiment         STRING,   -- Positive / Mixed / Negative
                    sentiment_reason  STRING,
                    mechanism         STRING,
                    created_at        TIMESTAMP DEFAULT current_timestamp(),
                    updated_at        TIMESTAMP DEFAULT current_timestamp(),
                    CONSTRAINT pk_pipeline PRIMARY KEY (drug_id)
                )
                USING DELTA
                COMMENT 'Pipeline drug entries per company — linked to companies table via ticker'
            """)
            print("  ✓ pipeline_drugs")

            # ------------------------------------------
            # 3. BLUE MATTER CONNECTIONS
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.blue_matter_connections (
                    connection_id     BIGINT GENERATED ALWAYS AS IDENTITY,
                    ticker            STRING NOT NULL,
                    bm_employee_name  STRING NOT NULL,
                    bm_title          STRING,
                    linkedin_url      STRING,
                    connection_type   STRING,   -- e.g. Former employee, Client relationship
                    connection_degree STRING,   -- e.g. Direct, 2nd degree
                    notes             STRING,
                    created_at        TIMESTAMP DEFAULT current_timestamp(),
                    CONSTRAINT pk_connections PRIMARY KEY (connection_id)
                )
                USING DELTA
                COMMENT 'Blue Matter employee connections to tracked companies — manually maintained and enriched via LinkedIn'
            """)
            print("  ✓ blue_matter_connections")

            # ------------------------------------------
            # 4. FDA APPROVALS
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.fda_approvals (
                    approval_id       BIGINT GENERATED ALWAYS AS IDENTITY,
                    approval_year     INT NOT NULL,
                    brand_name        STRING NOT NULL,
                    generic_name      STRING,
                    company           STRING,
                    therapeutic_area  STRING,
                    indication        STRING,
                    designations      STRING,   -- Comma-separated list
                    description       STRING,
                    nct_id            STRING,   -- ClinicalTrials.gov ID if available
                    created_at        TIMESTAMP DEFAULT current_timestamp(),
                    CONSTRAINT pk_fda PRIMARY KEY (approval_id)
                )
                USING DELTA
                COMMENT 'FDA drug approvals 2020-present — sourced from FDA.gov and embedded app data'
            """)
            print("  ✓ fda_approvals")

            # ------------------------------------------
            # 5. USER NOTES
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.notes (
                    note_id       STRING NOT NULL,   -- UUID generated by the app (e.g. "a1b2c3d4-...")
                    user_id       STRING NOT NULL,   -- From Cognito login
                    ticker        STRING NOT NULL,
                    content       STRING NOT NULL,
                    created_at    DOUBLE NOT NULL,   -- Unix timestamp (seconds since 1970)
                    updated_at    DOUBLE NOT NULL,
                    CONSTRAINT pk_notes PRIMARY KEY (note_id)
                )
                USING DELTA
                COMMENT 'User-written notes per company — private to each user'
            """)
            print("  ✓ notes")

            # ------------------------------------------
            # 6. CHAT HISTORY
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.chat_history (
                    chat_id     BIGINT GENERATED ALWAYS AS IDENTITY,
                    user_id     STRING NOT NULL,
                    role        STRING NOT NULL,   -- user or assistant
                    content     STRING NOT NULL,
                    created_at  DOUBLE NOT NULL,   -- Unix timestamp
                    CONSTRAINT pk_chat PRIMARY KEY (chat_id)
                )
                USING DELTA
                COMMENT 'AI chat conversation history per user — used to maintain context across sessions'
            """)
            print("  ✓ chat_history")

            # ------------------------------------------
            # 7. DATA EDITS (Audit Log)
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.data_edits (
                    edit_id       BIGINT GENERATED ALWAYS AS IDENTITY,
                    user_id       STRING NOT NULL,
                    edit_type     STRING NOT NULL,   -- add_company, update_field, add_drug, add_connection
                    target_ticker STRING NOT NULL,
                    target_name   STRING,
                    field_path    STRING,
                    old_value     STRING,
                    new_value     STRING NOT NULL,
                    source        STRING DEFAULT 'ai_chat',
                    ai_summary    STRING,
                    version       INT DEFAULT 1,
                    created_at    DOUBLE NOT NULL,   -- Unix timestamp
                    CONSTRAINT pk_edits PRIMARY KEY (edit_id)
                )
                USING DELTA
                COMMENT 'Full audit log of all data changes made via AI chat or manual edits'
            """)
            print("  ✓ data_edits")

            # ------------------------------------------
            # 8. COMPANY ADDITIONS (via AI Chat)
            # ------------------------------------------
            cur.execute(f"""
                CREATE TABLE IF NOT EXISTS {CATALOG}.{SCHEMA}.company_additions (
                    addition_id   BIGINT GENERATED ALWAYS AS IDENTITY,
                    user_id       STRING NOT NULL,
                    ticker        STRING NOT NULL,
                    company_json  STRING NOT NULL,   -- Full company object as JSON
                    ai_summary    STRING,
                    version       INT DEFAULT 1,
                    created_at    DOUBLE NOT NULL,   -- Unix timestamp
                    updated_at    DOUBLE NOT NULL,
                    CONSTRAINT pk_additions PRIMARY KEY (addition_id),
                    CONSTRAINT uq_user_ticker UNIQUE (user_id, ticker)
                )
                USING DELTA
                COMMENT 'Companies added dynamically via AI chat — supplements the main companies table'
            """)
            print("  ✓ company_additions")

    print("\nAll tables created successfully!")
    print(f"Tables are in: {CATALOG}.{SCHEMA}")

if __name__ == "__main__":
    run()
