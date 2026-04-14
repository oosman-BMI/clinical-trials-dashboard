#!/usr/bin/env python3
"""
============================================================
Twine Pulse Backend — Databricks Edition (port 8000)
============================================================
WHAT THIS FILE DOES:
  This is the "engine" of the application. It runs as a server
  that the frontend (browser) talks to. It handles:
    - Notes:           Save, edit, and delete notes per company
    - Chat:            AI research assistant powered by Claude
    - Data Edits:      Full audit log of all AI-driven changes
    - Company Additions: Add new companies via AI chat
    - Clinical Trials: Live data proxy to ClinicalTrials.gov

CHANGES FROM ORIGINAL (prototype → production):
  - Replaced local SQLite database with Databricks cloud database
  - Credentials loaded from a .env file (never hardcoded)
  - Context file path updated for new folder structure
  - No more db.commit() calls — Databricks Delta tables auto-commit
  - Note IDs now use UUIDs (unique identifiers) generated in Python
    because Databricks doesn't easily return auto-generated IDs
  - All SQL placeholders changed from ? to %s (Databricks style)
  - Column names updated to match Databricks table schema
============================================================
"""

import json
import httpx
import os
import time
import re
import traceback
import uuid
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from anthropic import Anthropic
from databricks import sql as databricks_sql
from dotenv import load_dotenv

# ============================================================
# STEP 1: Load credentials from the .env file
# ============================================================
# The .env file lives in the same /backend folder as this file.
# It contains secret keys that should never be shared or committed to git.
# If you haven't created .env yet, copy .env.example and fill it in.
load_dotenv()

DATABRICKS_HOSTNAME  = os.getenv("DATABRICKS_SERVER_HOSTNAME")
DATABRICKS_HTTP_PATH = os.getenv("DATABRICKS_HTTP_PATH")
DATABRICKS_TOKEN     = os.getenv("DATABRICKS_TOKEN")
CATALOG              = os.getenv("DATABRICKS_CATALOG", "twinepulse")
SCHEMA               = os.getenv("DATABRICKS_SCHEMA", "main")

# Shortcut: instead of typing twinepulse.main every time, use T.tablename
T = f"{CATALOG}.{SCHEMA}"

# Path to the AI context file (one folder up, inside /data)
CONTEXT_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "system_context.txt")

# ============================================================
# STEP 2: Database connection helpers
# ============================================================
# We create ONE connection to Databricks when the app starts,
# and reuse it for all requests. Creating a new connection each
# time would be slow (takes ~1-2 seconds per connection).

_connection = None

def get_connection():
    """
    Return the shared Databricks connection.
    If it doesn't exist yet, create it using credentials from .env.
    """
    global _connection
    if _connection is None:
        _connection = databricks_sql.connect(
            server_hostname=DATABRICKS_HOSTNAME,
            http_path=DATABRICKS_HTTP_PATH,
            access_token=DATABRICKS_TOKEN
        )
    return _connection


def db_query(sql_str, params=None):
    """
    Run a SELECT query and return results as a list of dictionaries.

    Why dictionaries? The original SQLite code used sqlite3.Row which
    lets you do row["column_name"]. Databricks returns plain tuples,
    so this helper converts them to dicts so the rest of the code works
    the same way.

    Example:
        rows = db_query(
            "SELECT note_id, content FROM twinepulse.main.notes WHERE user_id = %s",
            [user_id]
        )
        print(rows[0]["content"])  # works just like before
    """
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute(sql_str, params or [])
        if cur.description is None:
            return []
        col_names = [col[0] for col in cur.description]
        return [dict(zip(col_names, row)) for row in cur.fetchall()]


def db_execute(sql_str, params=None):
    """
    Run an INSERT, UPDATE, or DELETE statement.

    Note: Databricks Delta tables auto-commit every write, so there is
    no need to call .commit() like in SQLite. Writes take effect immediately.
    """
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute(sql_str, params or [])


# ============================================================
# STEP 3: Load the AI system context (company data)
# ============================================================
# This is the text file that gets fed to Claude so it knows
# about all 25 tracked companies, their pipelines, leadership, etc.
SYSTEM_CONTEXT = ""
if os.path.exists(CONTEXT_PATH):
    with open(CONTEXT_PATH, "r") as f:
        SYSTEM_CONTEXT = f.read()

# ============================================================
# STEP 4: Claude AI tool definitions
# ============================================================
# These define the "tools" Claude can use to update the dashboard.
# When a user says "add Pfizer" or "update Novo Nordisk's CEO",
# Claude calls these tools and the results get saved to Databricks.
# This section is UNCHANGED from the original prototype.

TOOL_DEFINITIONS = [
    {
        "name": "add_company",
        "description": "Add a new pharma/biotech company to the Twine Pulse dashboard. Use this when users ask to add a company that isn't currently tracked. You MUST do thorough research first and fill in ALL fields with real, accurate data. Do NOT use placeholder values. Research the company's actual stock price, market cap, leadership names with real LinkedIn URLs, actual pipeline drugs with real FDA dates, and genuine Blue Matter connections if any exist.",
        "input_schema": {
            "type": "object",
            "properties": {
                "id": {"type": "string", "description": "Stock ticker symbol (e.g. 'CORT')"},
                "name": {"type": "string", "description": "Full company name"},
                "ticker": {"type": "string", "description": "Stock ticker (same as id)"},
                "summary": {"type": "string", "description": "2-3 sentence company overview including focus areas, stage, and headquarters"},
                "headquarters": {"type": "string", "description": "City, State/Country"},
                "founded": {"type": "string", "description": "Year founded"},
                "employees": {"type": "string", "description": "Approximate employee count"},
                "approved_products": {"type": "string", "description": "Semicolon-separated list of approved products with year and indication, or 'None' if clinical-stage"},
                "pipeline_products": {"type": "string", "description": "Key pipeline products with phase, indication, and expected dates"},
                "recent_news": {"type": "string", "description": "Most recent notable news (1-2 items)"},
                "stock": {
                    "type": "object",
                    "description": "Current stock data",
                    "properties": {
                        "price": {"type": "number"},
                        "marketCap": {"type": "number"},
                        "pe": {"type": "string"},
                        "change": {"type": "number"},
                        "changePercent": {"type": "number"},
                        "yearHigh": {"type": "number"},
                        "yearLow": {"type": "number"}
                    },
                    "required": ["price", "marketCap", "pe", "change", "changePercent", "yearHigh", "yearLow"]
                },
                "leadership": {
                    "type": "object",
                    "properties": {
                        "ceo": {"type": "object", "properties": {"name": {"type": "string"}, "linkedin": {"type": "string"}}, "required": ["name", "linkedin"]},
                        "cfo": {"type": "object", "properties": {"name": {"type": "string"}, "linkedin": {"type": "string"}}, "required": ["name", "linkedin"]},
                        "cso": {"type": "object", "properties": {"name": {"type": "string"}, "title": {"type": "string"}, "linkedin": {"type": "string"}}, "required": ["name", "title", "linkedin"]},
                        "other": {"type": "object", "properties": {"name": {"type": "string"}, "title": {"type": "string"}, "linkedin": {"type": "string"}}, "required": ["name", "title", "linkedin"]}
                    },
                    "required": ["ceo", "cfo", "cso", "other"]
                },
                "pipeline_drugs": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string"},
                            "phase": {"type": "string"},
                            "indication": {"type": "string"},
                            "expected_fda_date": {"type": "string"},
                            "sentiment": {"type": "string", "enum": ["Positive", "Mixed", "Negative"]},
                            "sentiment_reason": {"type": "string"},
                            "mechanism": {"type": "string"}
                        },
                        "required": ["name", "phase", "indication", "expected_fda_date", "sentiment", "sentiment_reason", "mechanism"]
                    }
                },
                "blue_matter_connections": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string"},
                            "title": {"type": "string"},
                            "linkedin_url": {"type": "string"},
                            "connection_type": {"type": "string"},
                            "connection_degree": {"type": "string"}
                        }
                    }
                }
            },
            "required": ["id", "name", "ticker", "summary", "headquarters", "founded", "employees",
                         "approved_products", "pipeline_products", "recent_news", "stock",
                         "leadership", "pipeline_drugs", "blue_matter_connections"]
        }
    },
    {
        "name": "update_company_field",
        "description": "Update a specific field for an existing company in the dashboard. Use this when users provide corrections or new information about a tracked company.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {"type": "string", "description": "Company ticker to update"},
                "field": {"type": "string", "description": "Field to update: summary, headquarters, founded, employees, approved_products, pipeline_products, recent_news, leadership.ceo.name, leadership.ceo.linkedin, etc."},
                "new_value": {"type": "string", "description": "The new value for the field"},
                "reason": {"type": "string", "description": "Brief explanation of why this update is being made"}
            },
            "required": ["ticker", "field", "new_value", "reason"]
        }
    },
    {
        "name": "add_pipeline_drug",
        "description": "Add a new pipeline drug to an existing company's profile.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {"type": "string", "description": "Company ticker"},
                "drug": {
                    "type": "object",
                    "properties": {
                        "name": {"type": "string"},
                        "phase": {"type": "string"},
                        "indication": {"type": "string"},
                        "expected_fda_date": {"type": "string"},
                        "sentiment": {"type": "string", "enum": ["Positive", "Mixed", "Negative"]},
                        "sentiment_reason": {"type": "string"},
                        "mechanism": {"type": "string"}
                    },
                    "required": ["name", "phase", "indication", "expected_fda_date", "sentiment", "sentiment_reason", "mechanism"]
                },
                "reason": {"type": "string"}
            },
            "required": ["ticker", "drug", "reason"]
        }
    },
    {
        "name": "add_connection",
        "description": "Add a Blue Matter connection to a company.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {"type": "string"},
                "connection": {
                    "type": "object",
                    "properties": {
                        "name": {"type": "string"},
                        "title": {"type": "string"},
                        "linkedin_url": {"type": "string"},
                        "connection_type": {"type": "string"},
                        "connection_degree": {"type": "string"}
                    },
                    "required": ["name", "title", "connection_type"]
                },
                "reason": {"type": "string"}
            },
            "required": ["ticker", "connection", "reason"]
        }
    }
]

# ============================================================
# STEP 5: Claude AI system prompt
# ============================================================
# This is the instruction set that tells Claude who it is,
# what it knows, and how to behave. UNCHANGED from original.

SYSTEM_PROMPT = f"""You are Twine Pulse AI, an intelligent research assistant embedded in the Twine Pulse pharmaceutical intelligence dashboard built for Blue Matter Consulting.

Your role:
- Help users research pharma companies, drug pipelines, FDA approvals, market trends, and stakeholder relationships
- You have full knowledge of all tracked companies, their leadership, stock data, pipeline drugs, sentiment, and Blue Matter employee connections
- When users ask to ADD a new company or UPDATE existing data, USE THE PROVIDED TOOLS to make actual data changes to the dashboard
- Be precise with data — cite specific numbers, dates, and names from your context
- You can help users draft outreach strategies, prepare for meetings, analyze competitive dynamics, and identify relationship pathways
- Keep responses concise and data-driven — this is a professional pharma consulting tool

CRITICAL RULES FOR DATA EDITING:
1. When a user asks to add a company (e.g., "add Corcept Therapeutics"), you MUST use the add_company tool with REAL data. Research thoroughly from your knowledge.
2. When a user provides new information about an existing company, use update_company_field, add_pipeline_drug, or add_connection tools.
3. After using a tool, confirm what was added/changed in your response to the user.
4. NEVER use placeholder or dummy data. All values must be factual.
5. For stock data, use the most recent data you know. For LinkedIn URLs, provide real URLs if you know them, or empty strings if unsure.
6. When adding companies, research their complete profile including actual leadership team, real pipeline drugs with real FDA dates, genuine Blue Matter connections if any.

You have access to the following Twine Pulse database:

{SYSTEM_CONTEXT}

Currently tracked companies (by ticker): PRAX, NVO, REPL, CELC, GILD, GSK, ASND, ARGX, ACHV, MLYS, TAK, LLY, JNJ, BMY, AZN, NUVL, SMMT, BGNE, ORCA, TVTX, VERA, ARVN, VRDN, DNLI, REGN

Blue Matter Consulting employees (for connection matching):
- Emily Hua (President & Co-Founder) — former GSK
- Pankaj Oza (Managing Partner) — former GSK, BMS
- Nikhil Bhat (Partner) — former Gilead
- Milena Sullivan (Partner) — former BMS, connections to NVO
- Abhishek Khatri (Principal) — former Gilead
- D Erica Pascual (Associate Principal) — former Hall & Partners (clients: Lilly, NVO, Merck, Pfizer, Janssen)
- Minsu Kim (Senior Consultant) — former NVO intern, J&J connections
- Alejandro Zuniga (Former BM, now at NVO) — former Gilead contractor
- Kathryn Acheson (Manager) — former GSK
- James Eddy (Network contact at AstraZeneca)
- Tharani Balasubramaniam (Associate Consultant) — former BMS intern
- Lauren Vieira (Associate Consultant)
- Tiffany Lin (former BM, now at Novartis)

When users share new information or corrections, confirm what you've noted and explain how it changes the picture. Maintain a consultative, knowledgeable tone appropriate for pharma strategy professionals at Blue Matter Consulting."""


# ============================================================
# STEP 6: FastAPI app setup
# ============================================================
# lifespan = code that runs when the server starts and stops.
# On startup: connect to Databricks. On shutdown: close connection.

@asynccontextmanager
async def lifespan(app):
    """Connect to Databricks on startup; close connection on shutdown."""
    print("Starting Twine Pulse API...")
    print(f"Connecting to Databricks: {DATABRICKS_HOSTNAME}")
    get_connection()  # Creates the connection at startup
    print("Databricks connection established.")
    yield
    # Shutdown: close the connection cleanly
    global _connection
    if _connection:
        _connection.close()
        print("Databricks connection closed.")

app = FastAPI(lifespan=lifespan)

# CORS = Cross-Origin Resource Sharing.
# This tells the server to accept requests from the frontend (browser).
# In production, replace "*" with your actual app URL for security.
cors_origins = os.getenv("CORS_ORIGINS", "*").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Claude AI client (reads ANTHROPIC_API_KEY from .env automatically)
ai_client = Anthropic()


# ============================================================
# STEP 7: Request models
# ============================================================
# These define what shape of data the API expects to receive.

class NoteCreate(BaseModel):
    company_ticker: str
    content: str

class NoteUpdate(BaseModel):
    content: str

class ChatMessage(BaseModel):
    message: str


# ============================================================
# STEP 8: Company data endpoints
# ============================================================
# These serve company profiles, pipeline drugs, and BM connections
# from Databricks to the frontend. The frontend calls /api/companies
# on startup to build the dashboard.

def _format_company(co, pipeline_rows, connection_rows):
    """
    Convert Databricks row dicts into the shape the frontend expects.
    The frontend was originally built around a JavaScript data structure,
    so we map our Databricks column names to those field names here.
    """
    leadership = json.loads(co.get("leadership_json") or "{}")

    pipeline = [
        {
            "drugName":       d.get("drug_name", ""),
            "phase":          d.get("phase", ""),
            "indication":     d.get("indication", ""),
            "expectedFDADate":d.get("expected_fda_date", ""),
            "sentiment":      d.get("sentiment", ""),
            "sentimentReason":d.get("sentiment_reason", ""),
            "mechanism":      d.get("mechanism", "")
        }
        for d in pipeline_rows
    ]

    connections = [
        {
            "name":            c.get("bm_employee_name", ""),
            "title":           c.get("bm_title", ""),
            "linkedinUrl":     c.get("linkedin_url", ""),
            "connectionType":  c.get("connection_type", ""),
            "connectionDegree":c.get("connection_degree", ""),
            "notes":           c.get("notes", "")
        }
        for c in connection_rows
    ]

    ticker = co.get("ticker", "")
    return {
        "id":               ticker,
        "ticker":           ticker,
        "name":             co.get("name", ""),
        "summary":          co.get("summary", ""),
        "headquarters":     co.get("headquarters", ""),
        "founded":          co.get("founded", ""),
        "employees":        co.get("employees", ""),
        "approved_products":co.get("approved_products", ""),
        "pipeline_products":co.get("pipeline_products", ""),
        "recent_news":      co.get("recent_news", ""),
        "stock": {
            "price":         co.get("stock_price", 0.0),
            "marketCap":     co.get("market_cap", 0.0),
            "pe":            co.get("pe_ratio", "N/A"),
            "change":        co.get("stock_change", 0.0),
            "changePercent": co.get("stock_change_pct", 0.0),
            "yearHigh":      co.get("year_high", 0.0),
            "yearLow":       co.get("year_low", 0.0),
            "history":       []          # populated by /stock/refresh if needed
        },
        "leadership":            leadership,
        "pipeline_drugs":        pipeline,        # matches frontend field name
        "blue_matter_connections": connections    # matches frontend field name
    }


@app.get("/api/companies")
def get_companies():
    """
    Return all tracked companies with their pipeline and BM connections.
    The frontend calls this on startup to populate the full dashboard.
    """
    try:
        companies = db_query(f"SELECT * FROM {T}.companies ORDER BY name")
        result = []
        for co in companies:
            ticker = co.get("ticker", "")
            pipeline    = db_query(
                f"SELECT * FROM {T}.pipeline_drugs WHERE ticker = %s ORDER BY created_at",
                [ticker]
            )
            connections = db_query(
                f"SELECT * FROM {T}.blue_matter_connections WHERE ticker = %s",
                [ticker]
            )
            result.append(_format_company(co, pipeline, connections))
        return result
    except Exception as e:
        traceback.print_exc()
        return {"error": str(e)}


@app.get("/api/companies/{ticker}")
def get_company(ticker: str):
    """
    Return full data for one company by ticker (e.g. GET /api/companies/GILD).
    """
    try:
        ticker = ticker.upper()
        rows = db_query(f"SELECT * FROM {T}.companies WHERE ticker = %s", [ticker])
        if not rows:
            return {"error": f"Company '{ticker}' not found"}
        pipeline    = db_query(
            f"SELECT * FROM {T}.pipeline_drugs WHERE ticker = %s ORDER BY created_at",
            [ticker]
        )
        connections = db_query(
            f"SELECT * FROM {T}.blue_matter_connections WHERE ticker = %s",
            [ticker]
        )
        return _format_company(rows[0], pipeline, connections)
    except Exception as e:
        traceback.print_exc()
        return {"error": str(e)}


@app.post("/api/companies/{ticker}/stock/refresh")
def refresh_stock(ticker: str):
    """
    Pull the latest stock price from Yahoo Finance and update Databricks.
    Call this to refresh stale stock data for one company.
    Example: POST /api/companies/GILD/stock/refresh
    """
    try:
        import yfinance as yf
        ticker = ticker.upper()
        info       = yf.Ticker(ticker).info
        price      = float(info.get("currentPrice") or info.get("regularMarketPrice") or 0)
        market_cap = float(info.get("marketCap") or 0)
        pe         = str(info.get("trailingPE") or info.get("forwardPE") or "N/A")
        change     = float(info.get("regularMarketChange") or 0)
        change_pct = float(info.get("regularMarketChangePercent") or 0)
        year_high  = float(info.get("fiftyTwoWeekHigh") or 0)
        year_low   = float(info.get("fiftyTwoWeekLow") or 0)

        db_execute(f"""
            UPDATE {T}.companies
            SET stock_price      = %s,
                market_cap       = %s,
                pe_ratio         = %s,
                stock_change     = %s,
                stock_change_pct = %s,
                year_high        = %s,
                year_low         = %s,
                updated_at       = current_timestamp()
            WHERE ticker = %s
        """, [price, market_cap, pe, change, change_pct, year_high, year_low, ticker])

        return {
            "ticker": ticker, "price": price, "marketCap": market_cap,
            "pe": pe, "change": change, "changePercent": change_pct,
            "yearHigh": year_high, "yearLow": year_low, "refreshed": True
        }
    except Exception as e:
        traceback.print_exc()
        return {"error": str(e), "refreshed": False}


@app.get("/api/fda-approvals")
def get_fda_approvals(year: int = None):
    """
    Return FDA approval history from Databricks.
    Optional filter: GET /api/fda-approvals?year=2024
    """
    try:
        if year:
            rows = db_query(
                f"SELECT * FROM {T}.fda_approvals WHERE approval_year = %s ORDER BY brand_name",
                [year]
            )
        else:
            rows = db_query(
                f"SELECT * FROM {T}.fda_approvals ORDER BY approval_year DESC, brand_name"
            )
        return rows
    except Exception as e:
        traceback.print_exc()
        return {"error": str(e)}


# ============================================================
# STEP 9: Notes endpoints
# ============================================================
# Notes are private to each user (identified by X-Visitor-Id header).
# In production this will be replaced with the Cognito user token.

@app.get("/api/notes/{company_ticker}")
def get_notes(company_ticker: str, request: Request):
    """Get all notes for a specific company for the current user."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    rows = db_query(
        f"SELECT note_id, content, created_at, updated_at "
        f"FROM {T}.notes "
        f"WHERE user_id = %s AND ticker = %s "
        f"ORDER BY updated_at DESC",
        [user_id, company_ticker]
    )
    # Return as list — each note has id, content, and timestamps
    return [{"id": r["note_id"], "content": r["content"],
             "created_at": r["created_at"], "updated_at": r["updated_at"]}
            for r in rows]


@app.post("/api/notes", status_code=201)
def create_note(note: NoteCreate, request: Request):
    """
    Create a new note.

    Why UUID? Databricks doesn't easily return the ID of a newly
    inserted row (unlike SQLite's cur.lastrowid). So we generate
    a unique ID in Python before inserting, then return it directly.
    A UUID looks like: "3f7a1b2c-4d5e-6789-abcd-ef0123456789"
    """
    user_id = request.headers.get("X-Visitor-Id", "default")
    now = time.time()
    note_id = str(uuid.uuid4())  # Generate a unique ID

    db_execute(
        f"INSERT INTO {T}.notes (note_id, user_id, ticker, content, created_at, updated_at) "
        f"VALUES (%s, %s, %s, %s, %s, %s)",
        [note_id, user_id, note.company_ticker, note.content, now, now]
    )
    return {"id": note_id, "content": note.content, "created_at": now, "updated_at": now}


@app.put("/api/notes/{note_id}")
def update_note(note_id: str, note: NoteUpdate, request: Request):
    """Update the content of an existing note."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    now = time.time()
    db_execute(
        f"UPDATE {T}.notes SET content = %s, updated_at = %s "
        f"WHERE note_id = %s AND user_id = %s",
        [note.content, now, note_id, user_id]
    )
    return {"id": note_id, "content": note.content, "updated_at": now}


@app.delete("/api/notes/{note_id}")
def delete_note(note_id: str, request: Request):
    """Delete a note."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    db_execute(
        f"DELETE FROM {T}.notes WHERE note_id = %s AND user_id = %s",
        [note_id, user_id]
    )
    return {"deleted": note_id}


@app.get("/api/notes-all")
def get_all_notes(request: Request):
    """Get the 50 most recent notes across all companies for the current user."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    rows = db_query(
        f"SELECT ticker, content, updated_at FROM {T}.notes "
        f"WHERE user_id = %s ORDER BY updated_at DESC LIMIT 50",
        [user_id]
    )
    return [{"company_ticker": r["ticker"], "content": r["content"],
             "updated_at": r["updated_at"]} for r in rows]


# ============================================================
# STEP 9: Data edit history endpoints
# ============================================================
# Every time the AI makes a change (add company, update field, etc.)
# it gets logged here. This is the audit trail.

@app.get("/api/edits")
def get_edits(request: Request):
    """Get the 100 most recent edits made by the current user."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    rows = db_query(
        f"SELECT edit_id, edit_type, target_ticker, target_name, field_path, "
        f"old_value, new_value, source, ai_summary, created_at, version "
        f"FROM {T}.data_edits "
        f"WHERE user_id = %s ORDER BY created_at DESC LIMIT 100",
        [user_id]
    )
    # Rename columns to match what the frontend expects
    result = []
    for r in rows:
        result.append({
            "id": r["edit_id"],
            "edit_type": r["edit_type"],
            "target_id": r["target_ticker"],
            "target_name": r["target_name"],
            "field_path": r["field_path"],
            "old_value": r["old_value"],
            "new_value": r["new_value"],
            "source": r["source"],
            "ai_summary": r["ai_summary"],
            "created_at": r["created_at"],
            "version": r["version"]
        })
    return result


@app.get("/api/edits/{target_id}")
def get_edits_for_company(target_id: str, request: Request):
    """Get all edits for a specific company (by ticker)."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    rows = db_query(
        f"SELECT edit_id, edit_type, target_ticker, target_name, field_path, "
        f"old_value, new_value, source, ai_summary, created_at, version "
        f"FROM {T}.data_edits "
        f"WHERE user_id = %s AND target_ticker = %s ORDER BY created_at DESC",
        [user_id, target_id]
    )
    result = []
    for r in rows:
        result.append({
            "id": r["edit_id"],
            "edit_type": r["edit_type"],
            "target_id": r["target_ticker"],
            "target_name": r["target_name"],
            "field_path": r["field_path"],
            "old_value": r["old_value"],
            "new_value": r["new_value"],
            "source": r["source"],
            "ai_summary": r["ai_summary"],
            "created_at": r["created_at"],
            "version": r["version"]
        })
    return result


@app.get("/api/additions")
def get_additions(request: Request):
    """Get all companies that were added via AI chat by the current user."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    rows = db_query(
        f"SELECT addition_id, ticker, company_json, ai_summary, created_at, updated_at, version "
        f"FROM {T}.company_additions "
        f"WHERE user_id = %s ORDER BY created_at DESC",
        [user_id]
    )
    results = []
    for r in rows:
        results.append({
            "id": r["addition_id"],
            "ticker": r["ticker"],
            "company_data": json.loads(r["company_json"]),  # Parse JSON string back to object
            "ai_summary": r["ai_summary"],
            "created_at": r["created_at"],
            "updated_at": r["updated_at"],
            "version": r["version"]
        })
    return results


# ============================================================
# STEP 10: Tool call processor
# ============================================================
# When Claude decides to use a tool (add a company, update a field, etc.)
# this function handles the actual database writes.

def process_tool_call(tool_name, tool_input, user_id):
    """
    Execute a tool call from Claude and save the result to Databricks.
    Returns: (result_text_for_claude, list_of_frontend_events)
    """
    now = time.time()
    data_events = []

    # ---- Tool: add_company ----
    if tool_name == "add_company":
        ticker = tool_input.get("id", "")
        name = tool_input.get("name", "")
        company_json = json.dumps(tool_input)

        # Check if this company was already added by this user
        existing = db_query(
            f"SELECT addition_id, version FROM {T}.company_additions "
            f"WHERE user_id = %s AND ticker = %s",
            [user_id, ticker]
        )

        if existing:
            # Update the existing record
            new_version = existing[0]["version"] + 1
            db_execute(
                f"UPDATE {T}.company_additions "
                f"SET company_json = %s, ai_summary = %s, updated_at = %s, version = %s "
                f"WHERE addition_id = %s",
                [company_json, f"Updated {name} ({ticker})", now, new_version, existing[0]["addition_id"]]
            )
            db_execute(
                f"INSERT INTO {T}.data_edits "
                f"(user_id, edit_type, target_ticker, target_name, field_path, old_value, "
                f"new_value, source, ai_summary, created_at, version) "
                f"VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                [user_id, "update_company", ticker, name, "full_profile", "",
                 company_json, "ai_chat", f"Updated full profile for {name}", now, new_version]
            )
            result_text = f"Updated {name} ({ticker}) to version {new_version} in the dashboard."
        else:
            # Insert as a new company addition
            db_execute(
                f"INSERT INTO {T}.company_additions "
                f"(user_id, ticker, company_json, ai_summary, created_at, updated_at, version) "
                f"VALUES (%s, %s, %s, %s, %s, %s, %s)",
                [user_id, ticker, company_json, f"Added {name} ({ticker})", now, now, 1]
            )
            db_execute(
                f"INSERT INTO {T}.data_edits "
                f"(user_id, edit_type, target_ticker, target_name, field_path, old_value, "
                f"new_value, source, ai_summary, created_at, version) "
                f"VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                [user_id, "add_company", ticker, name, "full_profile", "",
                 company_json, "ai_chat", f"Added new company: {name}", now, 1]
            )
            result_text = f"Successfully added {name} ({ticker}) to the dashboard."

        data_events.append({"action": "add_company", "ticker": ticker, "company_data": tool_input})
        return result_text, data_events

    # ---- Tool: update_company_field ----
    elif tool_name == "update_company_field":
        ticker = tool_input.get("ticker", "")
        field  = tool_input.get("field", "")
        new_value = tool_input.get("new_value", "")
        reason    = tool_input.get("reason", "")

        # Get the current version number for this field
        version_rows = db_query(
            f"SELECT MAX(version) as max_v FROM {T}.data_edits "
            f"WHERE user_id = %s AND target_ticker = %s AND field_path = %s",
            [user_id, ticker, field]
        )
        new_version = (version_rows[0]["max_v"] or 0) + 1 if version_rows else 1

        db_execute(
            f"INSERT INTO {T}.data_edits "
            f"(user_id, edit_type, target_ticker, target_name, field_path, old_value, "
            f"new_value, source, ai_summary, created_at, version) "
            f"VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
            [user_id, "update_field", ticker, ticker, field, "",
             new_value, "ai_chat", reason, now, new_version]
        )
        data_events.append({"action": "update_field", "ticker": ticker,
                             "field": field, "new_value": new_value})
        return f"Updated {field} for {ticker} (v{new_version}): {reason}", data_events

    # ---- Tool: add_pipeline_drug ----
    elif tool_name == "add_pipeline_drug":
        ticker = tool_input.get("ticker", "")
        drug   = tool_input.get("drug", {})
        reason = tool_input.get("reason", "")
        drug_json = json.dumps(drug)

        version_rows = db_query(
            f"SELECT MAX(version) as max_v FROM {T}.data_edits "
            f"WHERE user_id = %s AND target_ticker = %s AND edit_type = 'add_drug'",
            [user_id, ticker]
        )
        new_version = (version_rows[0]["max_v"] or 0) + 1 if version_rows else 1

        db_execute(
            f"INSERT INTO {T}.data_edits "
            f"(user_id, edit_type, target_ticker, target_name, field_path, old_value, "
            f"new_value, source, ai_summary, created_at, version) "
            f"VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
            [user_id, "add_drug", ticker, ticker, "pipeline_drugs", "",
             drug_json, "ai_chat", f"Added pipeline drug: {drug.get('name', '')}", now, new_version]
        )
        data_events.append({"action": "add_pipeline_drug", "ticker": ticker, "drug": drug})
        return f"Added {drug.get('name', 'drug')} to {ticker}'s pipeline.", data_events

    # ---- Tool: add_connection ----
    elif tool_name == "add_connection":
        ticker     = tool_input.get("ticker", "")
        connection = tool_input.get("connection", {})
        reason     = tool_input.get("reason", "")
        conn_json  = json.dumps(connection)

        version_rows = db_query(
            f"SELECT MAX(version) as max_v FROM {T}.data_edits "
            f"WHERE user_id = %s AND target_ticker = %s AND edit_type = 'add_connection'",
            [user_id, ticker]
        )
        new_version = (version_rows[0]["max_v"] or 0) + 1 if version_rows else 1

        db_execute(
            f"INSERT INTO {T}.data_edits "
            f"(user_id, edit_type, target_ticker, target_name, field_path, old_value, "
            f"new_value, source, ai_summary, created_at, version) "
            f"VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
            [user_id, "add_connection", ticker, ticker, "blue_matter_connections", "",
             conn_json, "ai_chat", f"Added BM connection: {connection.get('name', '')}", now, new_version]
        )
        data_events.append({"action": "add_connection", "ticker": ticker, "connection": connection})
        return f"Added Blue Matter connection {connection.get('name', '')} to {ticker}.", data_events

    return "Unknown tool.", []


# ============================================================
# STEP 11: AI Chat endpoint
# ============================================================
# This is the main chat endpoint. When a user sends a message,
# it: loads their history + notes, sends everything to Claude,
# streams the response back in real-time, and saves it all to Databricks.

@app.post("/api/chat")
async def chat(msg: ChatMessage, request: Request):
    """
    Stream an AI chat response. Uses Server-Sent Events (SSE) so the
    frontend can display the response word-by-word as it arrives.
    """
    user_id = request.headers.get("X-Visitor-Id", "default")
    now = time.time()

    # Load the last 20 messages of this user's chat history for context
    history_rows = db_query(
        f"SELECT role, content FROM {T}.chat_history "
        f"WHERE user_id = %s ORDER BY created_at DESC LIMIT 20",
        [user_id]
    )
    history_rows.reverse()  # Put oldest first so the conversation flows correctly

    # Load user's notes to include in Claude's context
    notes_rows = db_query(
        f"SELECT ticker, content FROM {T}.notes "
        f"WHERE user_id = %s ORDER BY updated_at DESC LIMIT 30",
        [user_id]
    )

    # Load any companies this user has added via chat
    additions_rows = db_query(
        f"SELECT ticker FROM {T}.company_additions "
        f"WHERE user_id = %s ORDER BY created_at DESC LIMIT 20",
        [user_id]
    )

    # Build context additions for Claude's system prompt
    notes_context = ""
    if notes_rows:
        note_lines = [f"  - {r['ticker']}: {r['content']}" for r in notes_rows]
        notes_context = "\n\nUser's personal notes:\n" + "\n".join(note_lines)

    additions_context = ""
    if additions_rows:
        add_tickers = [r["ticker"] for r in additions_rows]
        additions_context = f"\n\nUser has added these companies to their dashboard: {', '.join(add_tickers)}"

    full_system = SYSTEM_PROMPT + notes_context + additions_context

    # Build the message list for Claude
    messages = []
    for r in history_rows:
        messages.append({"role": r["role"], "content": r["content"]})
    messages.append({"role": "user", "content": msg.message})

    # Save the user's message to Databricks immediately
    db_execute(
        f"INSERT INTO {T}.chat_history (user_id, role, content, created_at) "
        f"VALUES (%s, %s, %s, %s)",
        [user_id, "user", msg.message, now]
    )

    def generate():
        """
        Generator function that yields Server-Sent Events (SSE).
        SSE is how we stream Claude's response to the browser in real-time
        — the user sees words appearing as they're generated, not all at once.
        """
        all_data_events = []
        full_response_parts = []

        try:
            # Call Claude (non-streaming first pass to check for tool use)
            response = ai_client.messages.create(
                model="claude-sonnet-4-5",
                max_tokens=4096,
                system=full_system,
                tools=TOOL_DEFINITIONS,
                messages=messages,
            )

            # Tool use loop: Claude may call multiple tools before responding
            current_messages = list(messages)
            max_iterations = 5
            iteration = 0

            while response.stop_reason == "tool_use" and iteration < max_iterations:
                iteration += 1
                assistant_content = response.content
                tool_results = []

                for block in assistant_content:
                    if block.type == "text" and block.text.strip():
                        full_response_parts.append(block.text)
                        yield f"data: {json.dumps({'type': 'text', 'content': block.text})}\n\n"
                    elif block.type == "tool_use":
                        # Claude wants to use a tool — process it and save to Databricks
                        result_text, data_events = process_tool_call(
                            block.name, block.input, user_id
                        )
                        all_data_events.extend(data_events)

                        # Tell the frontend about the data change (updates the dashboard live)
                        for evt in data_events:
                            yield f"data: {json.dumps({'type': 'data_edit', 'event': evt})}\n\n"

                        tool_results.append({
                            "type": "tool_result",
                            "tool_use_id": block.id,
                            "content": result_text
                        })

                # Send tool results back to Claude for its next response
                current_messages.append({"role": "assistant", "content": assistant_content})
                current_messages.append({"role": "user", "content": tool_results})

                response = ai_client.messages.create(
                    model="claude-sonnet-4-5",
                    max_tokens=4096,
                    system=full_system,
                    tools=TOOL_DEFINITIONS,
                    messages=current_messages,
                )

            # Stream the final text response to the browser
            for block in response.content:
                if block.type == "text" and block.text.strip():
                    full_response_parts.append(block.text)
                    yield f"data: {json.dumps({'type': 'text', 'content': block.text})}\n\n"

            # Save Claude's full response to Databricks
            assistant_response = "\n".join(full_response_parts)
            if assistant_response.strip():
                db_execute(
                    f"INSERT INTO {T}.chat_history (user_id, role, content, created_at) "
                    f"VALUES (%s, %s, %s, %s)",
                    [user_id, "assistant", assistant_response, time.time()]
                )

            yield f"data: {json.dumps({'type': 'done'})}\n\n"

        except Exception as e:
            traceback.print_exc()
            yield f"data: {json.dumps({'type': 'error', 'content': str(e)})}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")


@app.delete("/api/chat/clear")
def clear_chat(request: Request):
    """Delete all chat history for the current user."""
    user_id = request.headers.get("X-Visitor-Id", "default")
    db_execute(
        f"DELETE FROM {T}.chat_history WHERE user_id = %s",
        [user_id]
    )
    return {"cleared": True}


# ============================================================
# STEP 12: Clinical Trials proxy endpoint
# ============================================================
# This pulls live data from ClinicalTrials.gov (a public US government API).
# The backend acts as a "proxy" — the frontend asks our server, which
# then asks ClinicalTrials.gov, and passes the data back.
# This avoids CORS issues and lets us filter/format the data.
# UNCHANGED from original.

@app.get("/api/clinicaltrials")
async def search_clinical_trials(
    sponsor: str = "",
    condition: str = "",
    phase: str = "3",
    status: str = "rec,act",
    page_size: int = 20
):
    """Proxy to ClinicalTrials.gov API v2 — search Phase 2/3 studies."""
    base_url = "https://clinicaltrials.gov/api/v2/studies"
    params = {
        "pageSize": min(page_size, 100),
        "fields": "NCTId,BriefTitle,OverallStatus,Phase,LeadSponsorName,PrimaryCompletionDate,CompletionDate,Condition",
    }
    agg_parts = []
    if phase:
        agg_parts.append(f"phase:{phase}")
    if status:
        for s in status.split(","):
            agg_parts.append(f"status:{s.strip()}")
    if agg_parts:
        params["aggFilters"] = ",".join(agg_parts)
    if sponsor:
        params["query.spons"] = sponsor
    if condition:
        params["query.cond"] = condition

    try:
        async with httpx.AsyncClient(timeout=15.0) as http:
            resp = await http.get(base_url, params=params)
            resp.raise_for_status()
            data = resp.json()
            studies = []
            for s in data.get("studies", []):
                proto      = s.get("protocolSection", {})
                ident      = proto.get("identificationModule", {})
                status_mod = proto.get("statusModule", {})
                design     = proto.get("designModule", {})
                spons_mod  = proto.get("sponsorCollaboratorsModule", {})
                cond_mod   = proto.get("conditionsModule", {})
                studies.append({
                    "nctId":             ident.get("nctId", ""),
                    "title":             ident.get("briefTitle", ""),
                    "status":            status_mod.get("overallStatus", ""),
                    "phase":             ",".join(design.get("phases", [])),
                    "sponsor":           spons_mod.get("leadSponsor", {}).get("name", ""),
                    "primaryCompletion": status_mod.get("primaryCompletionDateStruct", {}).get("date", ""),
                    "completion":        status_mod.get("completionDateStruct", {}).get("date", ""),
                    "conditions":        cond_mod.get("conditions", [])
                })
            return {"studies": studies, "totalCount": data.get("totalCount", 0)}
    except Exception as e:
        return {"error": str(e), "studies": [], "totalCount": 0}


# ============================================================
# STEP 13: Health check
# ============================================================
# A simple endpoint your team can use to verify the server is running.
# Example: curl https://twinepulse.company.com/api/health

@app.get("/api/health")
def health():
    return {"status": "ok", "database": "databricks", "catalog": T}


# ============================================================
# Run locally (for testing before deploying to AWS)
# ============================================================
# To start the server: python api_server.py
# Then open: http://localhost:8000/api/health

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
