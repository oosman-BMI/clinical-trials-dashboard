# Twine Pulse — Project Folder Guide

This folder contains the full source code for the Twine Pulse application.
Below is a plain-English explanation of what each folder and file does.

---

## Folder Structure

```
twine-pulse/
│
├── backend/                      ← The "engine" of the app (Python)
│   ├── api_server.py             ← Main backend — handles all API requests
│   ├── requirements.txt          ← List of Python libraries the app needs
│   ├── Dockerfile                ← Instructions for packaging the app for AWS
│   ├── .env.example              ← Template for your credentials file (.env)
│   └── db/
│       ├── create_tables.py      ← Run ONCE to set up all Databricks tables
│       ├── companies_seed.py     ← All company data (50 companies) — edit to add more
│       ├── seed_data.py          ← Run to load company data into Databricks
│       └── seed_fda.py           ← Run to load FDA approval history into Databricks
│
├── frontend/                     ← The "screen" of the app (what users see)
│   ├── index.html                ← The main web page
│   ├── app.js                    ← All interactive logic and embedded company data
│   └── style.css                 ← Visual styling and layout
│
├── data/
│   └── system_context.txt        ← Company summaries fed to the AI assistant
│
├── scripts/
│   └── deploy.sh                 ← AWS deployment script (run after getting access)
│
├── docs/                         ← Documentation (see parent folder for Word docs)
│
├── .gitignore                    ← Files that should NEVER be committed to Git
└── README.md                     ← This file
```

---

## What Does Each Piece Do?

| File/Folder | Plain English |
|---|---|
| `api_server.py` | The brain of the app. Receives requests from the browser, reads/writes to Databricks, calls Claude AI, and sends data back. |
| `requirements.txt` | A shopping list of Python tools the app needs. Run `pip install -r requirements.txt` to install them all. |
| `Dockerfile` | A recipe that packages the app so AWS can run it in the cloud. |
| `.env.example` | A template showing what credentials are needed. Copy this to `.env` and fill it in — never share the `.env` file. |
| `create_tables.py` | Creates all 8 database tables in Databricks. Run once when setting up the database for the first time. |
| `companies_seed.py` | The data file containing all 50 tracked companies. Edit this to add new companies or update existing ones. |
| `seed_data.py` | Loads company data from `companies_seed.py` into Databricks. Safe to re-run. |
| `seed_fda.py` | Loads FDA approval history into Databricks from the data embedded in `app.js`. |
| `index.html` | The webpage structure and layout. |
| `app.js` | Everything that happens on screen: tabs, charts, data display, chat, notes. |
| `style.css` | Colors, fonts, and visual design. |
| `system_context.txt` | A text file with all company summaries. The AI assistant reads this to answer questions accurately. |
| `deploy.sh` | Step-by-step AWS deployment — builds the Docker image, pushes to ECR, updates ECS, and syncs the frontend to S3. |
| `.gitignore` | Tells Git which files to never commit. Protects credentials from accidental exposure. |

---

## API Endpoints

The backend exposes the following endpoints:

| Endpoint | Method | What It Does |
|---|---|---|
| `/api/health` | GET | Quick check that the server is running |
| `/api/companies` | GET | Returns all 50 tracked companies with pipeline and BM connections |
| `/api/companies/{ticker}` | GET | Returns full data for one company (e.g. `/api/companies/GILD`) |
| `/api/companies/{ticker}/stock/refresh` | POST | Refreshes stock price from Yahoo Finance |
| `/api/fda-approvals` | GET | Returns FDA approval history. Add `?year=2024` to filter by year |
| `/api/notes/{ticker}` | GET | Returns all notes for a company (for the logged-in user) |
| `/api/notes` | POST | Creates a new note |
| `/api/notes/{note_id}` | PUT | Updates a note |
| `/api/notes/{note_id}` | DELETE | Deletes a note |
| `/api/chat` | POST | Sends a message to the AI assistant |
| `/api/chat/clear` | DELETE | Clears the conversation history |
| `/api/edits` | GET | Returns the full audit log of all data changes |
| `/api/edits/{ticker}` | GET | Returns audit log for one company |
| `/api/additions` | GET | Returns companies added via AI chat |
| `/api/clinicaltrials` | GET | Fetches live trial data from ClinicalTrials.gov |

---

## Setup Order (When You Have Access)

Once your tech team provides AWS and Databricks credentials:

```
1. Copy .env.example → .env and fill in all values
2. pip install -r requirements.txt
3. python db/create_tables.py          ← Creates all 8 Databricks tables
4. python db/seed_data.py              ← Loads 50 companies into Databricks
5. python db/seed_fda.py               ← Loads FDA approval history
6. python api_server.py                ← Starts the backend (test locally)
7. Open frontend/index.html in browser ← Test the full app locally
8. ./scripts/deploy.sh                 ← Deploy to AWS (fill in config first)
```

---

## Adding a New Company

1. Open `backend/db/companies_seed.py`
2. Scroll to the bottom — find the **NEW COMPANY TEMPLATE** section
3. Copy the template block and paste it inside the `COMPANIES` list
4. Fill in the company details
5. Run: `python db/seed_data.py`

The new company will appear in the app immediately. No code changes needed.

---

## Build Status

| Component | Status |
|---|---|
| Folder structure | ✅ Complete |
| Databricks table schemas (`create_tables.py`) | ✅ Complete |
| Company seed data — 50 companies (`companies_seed.py`) | ✅ Complete |
| Seed loading script (`seed_data.py`) | ✅ Complete |
| FDA approvals seed script (`seed_fda.py`) | ✅ Complete |
| Backend API — Databricks edition (`api_server.py`) | ✅ Complete |
| Frontend (`app.js`, `index.html`, `style.css`) | ✅ Complete |
| Docker container (`Dockerfile`, `requirements.txt`) | ✅ Complete |
| Credentials template (`.env.example`) | ✅ Complete |
| Security (`gitignore`) | ✅ Complete |
| AWS deployment script (`deploy.sh`) | ✅ Complete |
| Data Architecture documentation | ✅ Complete |
| Claude Code Build Guide documentation | ✅ Complete |
| **AWS + Databricks access** | ⏳ Waiting on tech team |
| Run scripts against live Databricks | ⏳ Blocked on access |
| AWS deployment | ⏳ Blocked on access |
