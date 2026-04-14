"""
============================================================
Twine Pulse — Company Seed Data
============================================================
PURPOSE:
  This file contains all the company data that gets loaded
  into Databricks. It is completely separate from the loading
  script (seed_data.py) so that adding a new company is as
  simple as copying the template at the bottom of this file,
  filling it in, and running the seed script again.

HOW TO ADD A NEW COMPANY:
  1. Scroll to the bottom of this file
  2. Copy the "NEW COMPANY TEMPLATE" section
  3. Paste it inside the COMPANIES list (before the closing ] )
  4. Fill in all the fields
  5. Save the file
  6. Run:  python db/seed_data.py
  That's it — the script will detect the new entry and add it.

HOW TO UPDATE AN EXISTING COMPANY:
  1. Find the company below (search by ticker, e.g. "PRAX")
  2. Edit the field you want to change
  3. Save the file
  4. Run:  python db/seed_data.py  (it will update, not duplicate)

DATA SOURCES:
  - Stock data: as of March 2026 (update manually or via future API integration)
  - Pipeline data: sourced from FDA.gov, company investor pages, ClinicalTrials.gov
  - Leadership: sourced from company websites and LinkedIn
  - Blue Matter connections: internal Blue Matter knowledge
============================================================
"""

COMPANIES = [

    # ==========================================================
    # 1. PRAXIS PRECISION MEDICINES (PRAX)
    # ==========================================================
    {
        "ticker": "PRAX",
        "name": "Praxis Precision Medicines",
        "summary": "Praxis Precision Medicines is a clinical-stage biopharmaceutical company translating genetic insights into therapies for CNS disorders characterized by neuronal excitation-inhibition imbalance.",
        "headquarters": "Boston, MA",
        "founded": "2015",
        "employees": "~168",
        "approved_products": "None (clinical-stage company with no marketed products)",
        "pipeline_products": "Ulixacaltamide | Phase 3 (NDA filed February 2026) | Essential Tremor | FDA: ~Q4 2026",
        "recent_news": "NDA filed February 2026 for ulixacaltamide for essential tremor",
        "stock_price": 310.71,
        "market_cap": 6568919897.0,
        "pe_ratio": "-23.07",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 356.0,
        "year_low": 26.7,
        "leadership": {
            "ceo": {"name": "Marcio Souza", "linkedin": "https://www.linkedin.com/in/marcio-souza-2b02837"},
            "cfo": {"name": "Tim Kelly", "linkedin": "https://www.linkedin.com/in/tim-kelly-02481"},
            "cso": {"name": "Steven Petrou", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/steven-petrou-3a84885"},
            "other": {"name": "Megan Sniecinski", "title": "Chief Commercial Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Ulixacaltamide",
                "phase": "Phase 3 (NDA filed February 2026)",
                "indication": "Essential Tremor (most common movement disorder; ~10M US patients)",
                "expected_fda_date": "~Q4 2026 / Early 2027",
                "sentiment": "Positive",
                "sentiment_reason": "NDA submitted mid-Feb 2026; standard review ~12 months; strong Phase 3 data",
                "mechanism": "Nav1.8 sodium channel inhibitor"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 2. NOVO NORDISK (NVO)
    # ==========================================================
    {
        "ticker": "NVO",
        "name": "Novo Nordisk",
        "summary": "Novo Nordisk is a leading global healthcare company founded in 1923, specializing in treatments for diabetes, obesity, and other serious chronic diseases. Headquartered in Bagsværd, Denmark.",
        "headquarters": "Bagsværd, Denmark",
        "founded": "1923",
        "employees": "~78,000",
        "approved_products": "Ozempic (semaglutide) 2017 - T2D; Wegovy (semaglutide) 2021 - Obesity; Rybelsus (oral semaglutide) 2019 - T2D; Victoza (liraglutide) 2010 - T2D",
        "pipeline_products": "CagriSema | Phase 3 (NDA submitted Dec 2025) | Obesity and T2D | FDA: Late 2026",
        "recent_news": "CagriSema NDA submitted December 2025; Phase 3 REDEFINE results mixed vs expectations",
        "stock_price": 38.58,
        "market_cap": 171482726385.0,
        "pe_ratio": "10.78",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 82.57,
        "year_low": 35.85,
        "leadership": {
            "ceo": {"name": "Maziar Mike Doustdar", "linkedin": "https://www.linkedin.com/in/doustdar"},
            "cfo": {"name": "Karsten Munk Knudsen", "linkedin": "https://www.linkedin.com/in/karstenmunkknudsen"},
            "cso": {"name": "Martin Holst Lange", "title": "EVP Development", "linkedin": "https://www.linkedin.com/in/martin-holst-lange-21662612"},
            "other": {"name": "David Moore", "title": "EVP North America Operations", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "https://www.linkedin.com/company/novo-nordisk",
        "pipeline_drugs": [
            {
                "drug_name": "CagriSema (cagrilintide + semaglutide)",
                "phase": "Phase 3 (NDA submitted Dec 2025)",
                "indication": "Obesity and Type 2 Diabetes",
                "expected_fda_date": "Late 2026",
                "sentiment": "Mixed",
                "sentiment_reason": "NDA submitted Dec 2025; decision anticipated H2 2026; Phase 3 REDEFINE results below expectations vs Zepbound",
                "mechanism": "Dual amylin/GLP-1 receptor agonist combination"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Milena Sullivan", "bm_title": "Partner", "linkedin_url": "", "connection_type": "Former employee at Bristol-Myers Squibb; NVO connections", "connection_degree": "2nd degree", "notes": "Former Associate Director, US Federal Policy at BMS"},
            {"bm_employee_name": "D Erica Pascual", "bm_title": "Associate Principal", "linkedin_url": "", "connection_type": "Former client relationship - NVO was client at Hall & Partners", "connection_degree": "Direct client", "notes": "Managed NVO account at Hall & Partners"},
            {"bm_employee_name": "Minsu Kim", "bm_title": "Senior Consultant", "linkedin_url": "", "connection_type": "Former intern at Novo Nordisk", "connection_degree": "Direct", "notes": "Market Access Strategic Execution intern, 2019"},
            {"bm_employee_name": "Alejandro Zuniga", "bm_title": "Former Manager (now at NVO)", "linkedin_url": "", "connection_type": "Now employed at Novo Nordisk", "connection_degree": "Direct", "notes": "Moved FROM Blue Matter TO Novo Nordisk February 2024"}
        ]
    },

    # ==========================================================
    # 3. REPLIMUNE (REPL)
    # ==========================================================
    {
        "ticker": "REPL",
        "name": "Replimune Group",
        "summary": "Replimune Group is a clinical-stage biotechnology company developing novel oncolytic immunotherapies based on a proprietary RPx platform using an engineered HSV-1 backbone.",
        "headquarters": "Woburn, Massachusetts",
        "founded": "2015",
        "employees": "~479",
        "approved_products": "None (clinical-stage company with no approved products)",
        "pipeline_products": "Vusolimogene oderparepvec (RP1) | Phase 1/2 (BLA resubmitted) | Advanced melanoma | FDA: April 10, 2026",
        "recent_news": "BLA resubmitted after July 2025 CRL; PDUFA date April 10, 2026",
        "stock_price": 8.07,
        "market_cap": 666360882.0,
        "pe_ratio": "-2.05",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 13.24,
        "year_low": 2.68,
        "leadership": {
            "ceo": {"name": "Sushil Patel", "linkedin": "https://www.linkedin.com/in/sushil-patel1"},
            "cfo": {"name": "Emily Hill", "linkedin": "https://www.linkedin.com/in/emily-hill-3b03876"},
            "cso": {"name": "Konstantinos Xynos", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/konstantinos-xynos-28048a28"},
            "other": {"name": "Christopher Sarchi", "title": "Chief Commercial Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Vusolimogene oderparepvec (RP1)",
                "phase": "Phase 1/2 (BLA resubmitted; seeking accelerated approval)",
                "indication": "Advanced PD-1-refractory melanoma (in combination with nivolumab)",
                "expected_fda_date": "April 10, 2026 (PDUFA date)",
                "sentiment": "Mixed",
                "sentiment_reason": "Resubmission after July 2025 Complete Response Letter; accelerated approval pathway",
                "mechanism": "Oncolytic immunotherapy (engineered HSV-1 with GALV-GP-R- and hGM-CSF)"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 4. CELCUITY (CELC)
    # ==========================================================
    {
        "ticker": "CELC",
        "name": "Celcuity Inc.",
        "summary": "Celcuity Inc. is a clinical-stage biotechnology company developing targeted therapies that inhibit the PI3K/AKT/mTOR (PAM) pathway for solid tumors including breast and prostate cancers.",
        "headquarters": "Minneapolis, MN",
        "founded": "2011",
        "employees": "51-200",
        "approved_products": "None (clinical-stage company with no approved products)",
        "pipeline_products": "Gedatolisib | Phase 3 (NDA under FDA review) | HR+/HER2- advanced breast cancer | FDA: July 17, 2026",
        "recent_news": "FDA accepted NDA with Priority Review; PDUFA date July 17, 2026",
        "stock_price": 115.0,
        "market_cap": 5321194785.0,
        "pe_ratio": "-31.25",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 120.31,
        "year_low": 7.58,
        "leadership": {
            "ceo": {"name": "Brian Sullivan", "linkedin": "https://www.linkedin.com/in/brian-sullivan-6202621"},
            "cfo": {"name": "Vicky Hahne", "linkedin": "https://www.linkedin.com/in/vicky-hahne-04406a63"},
            "cso": {"name": "Lance Laing", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "Igor Gorbatchevsky", "title": "Chief Medical Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Gedatolisib",
                "phase": "Phase 3 (NDA under FDA review; Priority Review)",
                "indication": "HR+/HER2- PIK3CA wild-type advanced breast cancer (post-CDK4/6 inhibitor failure)",
                "expected_fda_date": "July 17, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review granted; strong Phase 3 VIKTORIA-1 data; first-in-class PAM inhibitor",
                "mechanism": "Pan-PI3K/mTOR inhibitor"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 5. GILEAD SCIENCES (GILD)
    # ==========================================================
    {
        "ticker": "GILD",
        "name": "Gilead Sciences",
        "summary": "Gilead Sciences is an American biopharmaceutical company focused on researching and developing antiviral drugs for HIV/AIDS, hepatitis B, hepatitis C, influenza, COVID-19, oncology, and inflammation.",
        "headquarters": "Foster City, California",
        "founded": "1987",
        "employees": "~17,000",
        "approved_products": "Biktarvy 2018 - HIV; Descovy 2016 - HIV PrEP; Veklury/Remdesivir 2020 - COVID-19; Epclusa 2016 - Hepatitis C; Trodelvy 2020 - TNBC; Yescarta 2017 - Lymphoma",
        "pipeline_products": "Anitocabtagene autoleucel (anito-cel) | Phase 2 (BLA accepted) | R/R Multiple Myeloma | FDA: December 23, 2026",
        "recent_news": "BLA accepted by FDA for anito-cel; PDUFA date December 23, 2026",
        "stock_price": 143.96,
        "market_cap": 178714823200.0,
        "pe_ratio": "17.66",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 157.29,
        "year_low": 93.37,
        "leadership": {
            "ceo": {"name": "Daniel O'Day", "linkedin": "https://www.linkedin.com/in/gilead-daniel-o-day"},
            "cfo": {"name": "Andrew Dickinson", "linkedin": "https://www.linkedin.com/in/andrew-dickinson-0547a190"},
            "cso": {"name": "Dietmar Berger", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/dietmar-berger-5927235"},
            "other": {"name": "Flavius Martin", "title": "EVP Research", "linkedin": "https://www.linkedin.com/in/flaviusmartin"}
        },
        "salesforce_id": "",
        "linkedin_url": "https://www.linkedin.com/company/gilead-sciences",
        "pipeline_drugs": [
            {
                "drug_name": "Anitocabtagene autoleucel (anito-cel)",
                "phase": "Phase 2 Pivotal iMMagine-1 (BLA accepted by FDA)",
                "indication": "Relapsed or Refractory Multiple Myeloma (4th-line)",
                "expected_fda_date": "December 23, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "BLA accepted; differentiated CAR-T targeting BCMA with GPRC5D; strong response rates in iMMagine-1",
                "mechanism": "Autologous BCMA-targeted CAR-T cell therapy"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Nikhil Bhat", "bm_title": "Partner", "linkedin_url": "", "connection_type": "Former employee at Gilead Sciences", "connection_degree": "Direct", "notes": "Associate Director, Business Analytics, 2013"},
            {"bm_employee_name": "Abhishek Khatri", "bm_title": "Principal", "linkedin_url": "", "connection_type": "Former employee at Gilead Sciences", "connection_degree": "Direct", "notes": "12+ years, multiple Director roles in Commercial"},
            {"bm_employee_name": "Alejandro Zuniga", "bm_title": "Former Manager (now at NVO)", "linkedin_url": "", "connection_type": "Former contractor at Gilead", "connection_degree": "Direct", "notes": "Previously contractor at Gilead before Blue Matter"}
        ]
    },

    # ==========================================================
    # 6. GSK (GSK)
    # ==========================================================
    {
        "ticker": "GSK",
        "name": "GSK plc",
        "summary": "GSK plc is a global biopharma company focused on developing vaccines and specialty medicines in respiratory/immunology/inflammation, oncology, HIV, and infectious diseases.",
        "headquarters": "Brentford, London, UK",
        "founded": "2000",
        "employees": "~67,000",
        "approved_products": "Shingrix 2017 - Shingles; Arexvy 2023 - RSV; Dovato 2019 - HIV; Nucala 2015 - Severe asthma; Trelegy Ellipta 2017 - COPD/Asthma",
        "pipeline_products": "Linerixibat | Phase 3 (NDA under FDA review) | Cholestatic pruritus in PBC | FDA: March 24, 2026",
        "recent_news": "Linerixibat PDUFA March 24, 2026; Orphan Drug designation",
        "stock_price": 54.51,
        "market_cap": 109307565325.0,
        "pe_ratio": "14.69",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 61.7,
        "year_low": 32.38,
        "leadership": {
            "ceo": {"name": "Luke Miels", "linkedin": "https://www.linkedin.com/in/luke-miels"},
            "cfo": {"name": "Julie Brown", "linkedin": "https://www.linkedin.com/in/julie-brown-4492579"},
            "cso": {"name": "Tony Wood", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/dr-tony-wood"},
            "other": {"name": "Deborah Waterhouse", "title": "EVP Specialty Medicines", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "https://www.linkedin.com/company/gsk",
        "pipeline_drugs": [
            {
                "drug_name": "Linerixibat (GSK2330672)",
                "phase": "Phase 3 (NDA under FDA review)",
                "indication": "Cholestatic pruritus (debilitating itch) in Primary Biliary Cholangitis (PBC)",
                "expected_fda_date": "March 24, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "Orphan Drug designation; strong unmet need in PBC; positive Phase 3 GLISTEN data",
                "mechanism": "Ileal bile acid transporter (IBAT) inhibitor"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Emily Hua", "bm_title": "President & Co-Founder", "linkedin_url": "", "connection_type": "Former employee at GlaxoSmithKline", "connection_degree": "Direct", "notes": "Research Analyst at GSK"},
            {"bm_employee_name": "Pankaj Oza", "bm_title": "Managing Partner", "linkedin_url": "", "connection_type": "Former employee at GSK", "connection_degree": "Direct", "notes": "UK Commercial at GSK"},
            {"bm_employee_name": "Kathryn Acheson", "bm_title": "Manager", "linkedin_url": "", "connection_type": "Former employee at GSK", "connection_degree": "Direct", "notes": "Future Leaders Programme, Consumer Healthcare R&D"},
            {"bm_employee_name": "James Eddy", "bm_title": "Network Contact (at AstraZeneca)", "linkedin_url": "", "connection_type": "Blue Matter professional network; appeared in BM materials", "connection_degree": "Network", "notes": "Current Director at AstraZeneca Oncology R&D Strategy"}
        ]
    },

    # ==========================================================
    # 7. ASCENDIS PHARMA (ASND)
    # ==========================================================
    {
        "ticker": "ASND",
        "name": "Ascendis Pharma",
        "summary": "Ascendis Pharma is a global biopharmaceutical company applying its innovative TransCon technology platform to develop best-in-class therapies in endocrinology, rare diseases, and oncology.",
        "headquarters": "Copenhagen (Hellerup), Denmark",
        "founded": "2007",
        "employees": "~1,189",
        "approved_products": "SKYTROFA (lonapegsomatropin) 2021 - Pediatric GHD; YORVIPATH (palopegteriparatide) 2023 - Hypoparathyroidism; YUVIWEL (navepegritide) 2026 - Achondroplasia",
        "pipeline_products": "Navepegritide alfa (TransCon CNP) | BLA APPROVED Feb 28, 2026 | Achondroplasia",
        "recent_news": "Navepegritide alfa (Yuviwel) FDA approved February 28, 2026 for achondroplasia",
        "stock_price": 240.65,
        "market_cap": 14771172083.0,
        "pe_ratio": "-54.32",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 248.6,
        "year_low": 124.06,
        "leadership": {
            "ceo": {"name": "Jan Møller Mikkelsen", "linkedin": "https://www.linkedin.com/in/jan-m%C3%B8ller-mikkelsen-6a1237187"},
            "cfo": {"name": "Scott Smith", "linkedin": ""},
            "cso": {"name": "Kennett Sprogøe", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/kennett-sprog%C3%B8e-712811"},
            "other": {"name": "Aimee D. Shu", "title": "Chief Commercial Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Navepegritide alfa (TransCon CNP / Yuviwel)",
                "phase": "BLA APPROVED February 28, 2026",
                "indication": "Achondroplasia (most common form of short-limb dwarfism in children)",
                "expected_fda_date": "APPROVED February 28, 2026",
                "sentiment": "Positive",
                "sentiment_reason": "FDA approval received Feb 28, 2026 - first once-weekly CNP treatment for achondroplasia",
                "mechanism": "TransCon C-type natriuretic peptide (CNP) — sustained CNP release to stimulate bone growth"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 8. ARGENX (ARGX)
    # ==========================================================
    {
        "ticker": "ARGX",
        "name": "argenx SE",
        "summary": "argenx SE is a commercial-stage global biopharma company focused on developing differentiated antibody therapies for severe autoimmune diseases using its Immunology Innovation Program.",
        "headquarters": "Amsterdam, Netherlands",
        "founded": "2008",
        "employees": "~1,600",
        "approved_products": "VYVGART (efgartigimod) 2021 - gMG; VYVGART 2023 - CIDP; VYVGART Hytrulo (SC) 2023 - gMG and CIDP",
        "pipeline_products": "Efgartigimod alfa — seronegative gMG | Phase 3 (sBLA; Priority Review) | AChR-Ab seronegative gMG | FDA: May 10, 2026",
        "recent_news": "sBLA accepted with Priority Review; PDUFA May 10, 2026 for seronegative gMG expansion",
        "stock_price": 717.8,
        "market_cap": 44419904520.0,
        "pe_ratio": "37.17",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 934.62,
        "year_low": 510.06,
        "leadership": {
            "ceo": {"name": "Tim Van Hauwermeiren (Karen Massey incoming May 2026)", "linkedin": "https://www.linkedin.com/in/tim-van-hauwermeiren-476a3521"},
            "cfo": {"name": "Karl Gubitz", "linkedin": "https://www.linkedin.com/in/karl-g-7713166"},
            "cso": {"name": "Peter Ulrichts", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/peterulrichts"},
            "other": {"name": "Luc Truyen", "title": "Chief Medical Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Efgartigimod alfa (Vyvgart) — seronegative gMG",
                "phase": "Phase 3 (sBLA under FDA review; Priority Review)",
                "indication": "AChR-Ab seronegative generalized Myasthenia Gravis (MuSK+, LRP4+, triple seronegative)",
                "expected_fda_date": "May 10, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review; extends existing VYVGART franchise to seronegative patients; large underserved population",
                "mechanism": "FcRn antagonist — reduces IgG antibody levels including pathogenic autoantibodies"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 9. ACHIEVE LIFE SCIENCES (ACHV)
    # ==========================================================
    {
        "ticker": "ACHV",
        "name": "Achieve Life Sciences",
        "summary": "Achieve Life Sciences is a late-stage specialty pharmaceutical company focused on developing and commercializing cytisinicline for the treatment of nicotine dependence in smoking and vaping cessation.",
        "headquarters": "Bothell, WA",
        "founded": "2015",
        "employees": "11-50",
        "approved_products": "None (cytisinicline NDA pending FDA review with PDUFA June 20, 2026)",
        "pipeline_products": "Cytisinicline | Phase 3 (NDA under FDA review) | Smoking/vaping cessation | FDA: June 20, 2026",
        "recent_news": "FDA accepted cytisinicline NDA; PDUFA date June 20, 2026",
        "stock_price": 4.27,
        "market_cap": 227309129.0,
        "pe_ratio": "-3.26",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 6.03,
        "year_low": 1.84,
        "leadership": {
            "ceo": {"name": "Richard Stewart", "linkedin": "https://www.linkedin.com/in/rick-stewart-9597654"},
            "cfo": {"name": "Mark Oki", "linkedin": "https://www.linkedin.com/in/mark-oki-b0b2974"},
            "cso": {"name": "Mark Rubinstein", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "Jaime Xinos", "title": "Chief Commercial Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Cytisinicline",
                "phase": "Phase 3 (NDA under FDA review)",
                "indication": "Nicotine dependence / Smoking and vaping cessation",
                "expected_fda_date": "June 20, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "NDA accepted; first natural alkaloid NRT alternative; positive Phase 3 ORCA-3 data",
                "mechanism": "Partial nicotinic acetylcholine receptor agonist (natural alkaloid from Cytisus laburnum)"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 10. MINERALYS THERAPEUTICS (MLYS)
    # ==========================================================
    {
        "ticker": "MLYS",
        "name": "Mineralys Therapeutics",
        "summary": "Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines targeting hypertension, CKD, OSA, and other diseases driven by dysregulated aldosterone.",
        "headquarters": "Radnor, PA",
        "founded": "2019",
        "employees": "~50-75",
        "approved_products": "None (clinical-stage company, no marketed products)",
        "pipeline_products": "Lorundrostat | Phase 3 (NDA filed) | Uncontrolled/treatment-resistant hypertension | FDA: 2026",
        "recent_news": "NDA filed late 2025; FDA review anticipated 2026",
        "stock_price": 26.59,
        "market_cap": 1762806838.0,
        "pe_ratio": "-9.14",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 47.65,
        "year_low": 10.44,
        "leadership": {
            "ceo": {"name": "Jon Congleton", "linkedin": "https://www.linkedin.com/in/joncongleton"},
            "cfo": {"name": "Adam Levy", "linkedin": ""},
            "cso": {"name": "David Rodman", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/david-rodman-190a9a15"},
            "other": {"name": "Eric Warren", "title": "Chief Commercial Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Lorundrostat",
                "phase": "Phase 3 (NDA filed; FDA review 2026)",
                "indication": "Uncontrolled hypertension (uHTN) and treatment-resistant hypertension (rHTN)",
                "expected_fda_date": "2026 (NDA filed late 2025)",
                "sentiment": "Positive",
                "sentiment_reason": "Strong Phase 2 Target-HTN data; large unmet need in treatment-resistant hypertension",
                "mechanism": "Selective aldosterone synthase inhibitor (CYP11B2 inhibitor)"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 11. TAKEDA PHARMACEUTICAL (TAK)
    # ==========================================================
    {
        "ticker": "TAK",
        "name": "Takeda Pharmaceutical",
        "summary": "Takeda Pharmaceutical is a global biopharmaceutical leader focused on gastrointestinal/inflammation, oncology, rare diseases, plasma-derived therapies, and neuroscience.",
        "headquarters": "Tokyo, Japan",
        "founded": "1781",
        "employees": "~49,000",
        "approved_products": "Entyvio (vedolizumab) 2014 - UC/Crohn's; Vyvanse 2007 - ADHD; Takhzyro 2018 - Hereditary angioedema; Adcetris 2011 - Hodgkin lymphoma",
        "pipeline_products": "Oveporexton (TAK-861) | Phase 3 (NDA; Priority Review) | Narcolepsy Type 1 | FDA: Q3 2026; Rusfertide | Phase 3 (NDA; Priority Review) | Polycythemia Vera | FDA: Q3 2026",
        "recent_news": "Two drugs under Priority Review — oveporexton for narcolepsy and rusfertide for polycythemia vera",
        "stock_price": 17.88,
        "market_cap": 56486367228.0,
        "pe_ratio": "77.74",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 18.82,
        "year_low": 12.99,
        "leadership": {
            "ceo": {"name": "Christophe Weber", "linkedin": "https://www.linkedin.com/in/christophe-weber-takeda"},
            "cfo": {"name": "Milano Furuta", "linkedin": "https://www.linkedin.com/in/milano-furuta-8b7b953"},
            "cso": {"name": "Andy Plump", "title": "President R&D", "linkedin": "https://www.linkedin.com/in/andy-plump"},
            "other": {"name": "Julie Kim", "title": "President US Business Unit", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Oveporexton (TAK-861)",
                "phase": "Phase 3 (NDA under FDA review; Priority Review + Breakthrough Therapy)",
                "indication": "Narcolepsy Type 1 (NT1) — excessive daytime sleepiness and cataplexy",
                "expected_fda_date": "Q3 2026 (PDUFA goal date)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review + Breakthrough Therapy; strong Phase 3 data; significant unmet need in NT1",
                "mechanism": "Orexin 2 receptor agonist (OX2R agonist)"
            },
            {
                "drug_name": "Rusfertide",
                "phase": "Phase 3 (NDA under FDA review; Priority Review + Breakthrough Therapy + Orphan Drug)",
                "indication": "Polycythemia Vera (PV) — uncontrolled hematocrit despite phlebotomy and/or standard therapy",
                "expected_fda_date": "Q3 2026 (PDUFA goal date)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review + Breakthrough Therapy; addresses unmet need in phlebotomy-dependent PV patients",
                "mechanism": "Hepcidin mimetic peptide — reduces iron absorption to control erythrocytosis"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 12. ELI LILLY (LLY)
    # ==========================================================
    {
        "ticker": "LLY",
        "name": "Eli Lilly and Company",
        "summary": "Eli Lilly is an American multinational pharmaceutical company focused on diabetes, obesity, oncology, immunology, and neuroscience, with blockbuster GLP-1 franchise in Mounjaro and Zepbound.",
        "headquarters": "Indianapolis, Indiana",
        "founded": "1876",
        "employees": "~47,000",
        "approved_products": "Mounjaro (tirzepatide) 2022 - T2D; Zepbound (tirzepatide) 2023 - Obesity; Verzenio 2017 - Breast cancer; Trulicity 2014 - T2D; Taltz 2016 - Psoriasis; Jardiance 2014 - T2D/HF",
        "pipeline_products": "Orforglipron | Phase 3 (NDA under FDA review) | Obesity/T2D | FDA: April 10, 2026",
        "recent_news": "Orforglipron NDA under review; oral GLP-1 rival to Wegovy/Ozempic; PDUFA April 2026",
        "stock_price": 990.33,
        "market_cap": 934234737810.0,
        "pe_ratio": "43.10",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 1133.95,
        "year_low": 623.78,
        "leadership": {
            "ceo": {"name": "David A. Ricks", "linkedin": "https://www.linkedin.com/in/davearicks"},
            "cfo": {"name": "Lucas Montarce", "linkedin": "https://www.linkedin.com/in/lucas-montarce"},
            "cso": {"name": "Daniel Skovronsky", "title": "Chief Scientific & Medical Officer", "linkedin": "https://www.linkedin.com/in/danielskovronsky"},
            "other": {"name": "Jacob Van Naarden", "title": "President Lilly Oncology", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "https://www.linkedin.com/company/eli-lilly-and-company",
        "pipeline_drugs": [
            {
                "drug_name": "Orforglipron",
                "phase": "Phase 3 (NDA under FDA review)",
                "indication": "Obesity / Overweight; Type 2 Diabetes (separate NDA planned)",
                "expected_fda_date": "April 10, 2026 (PDUFA date; obesity indication)",
                "sentiment": "Positive",
                "sentiment_reason": "First oral small-molecule GLP-1 agonist; no peptide injection; strong weight loss data vs. semaglutide",
                "mechanism": "Oral non-peptide GLP-1 receptor agonist"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "D Erica Pascual", "bm_title": "Associate Principal", "linkedin_url": "", "connection_type": "Former client relationship - Lilly was client at Hall & Partners", "connection_degree": "Direct client", "notes": ""},
            {"bm_employee_name": "Shaleen Multani", "bm_title": "Consultant", "linkedin_url": "", "connection_type": "Former employee at Eli Lilly", "connection_degree": "Direct", "notes": "Portfolio Project Manager and Senior Associate Manager"},
            {"bm_employee_name": "Shan Ahmad", "bm_title": "Senior Consultant", "linkedin_url": "", "connection_type": "Former graduate consultant at Eli Lilly", "connection_degree": "Direct", "notes": "Thesis project, 2017-2018"}
        ]
    },

    # ==========================================================
    # 13. JOHNSON & JOHNSON (JNJ)
    # ==========================================================
    {
        "ticker": "JNJ",
        "name": "Johnson & Johnson",
        "summary": "Johnson & Johnson is an American multinational corporation focused on pharmaceuticals (Innovative Medicine) and medical technologies, developing treatments for complex diseases.",
        "headquarters": "New Brunswick, New Jersey",
        "founded": "1886",
        "employees": "~138,000",
        "approved_products": "Darzalex 2015 - Multiple myeloma; Stelara 2009 - Psoriasis/Crohn's/UC; Tremfya 2017 - Psoriasis; Erleada 2018 - Prostate cancer; Carvykti 2022 - Multiple myeloma",
        "pipeline_products": "Icotrokinra (JNJ-2113) | Phase 3 (NDA submitted July 2025) | Moderate-to-severe plaque psoriasis | FDA: Mid-2026",
        "recent_news": "Icotrokinra NDA submitted July 21, 2025; ~12-month review expected mid-2026",
        "stock_price": 240.4,
        "market_cap": 579339704214.0,
        "pe_ratio": "21.80",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 251.71,
        "year_low": 141.5,
        "leadership": {
            "ceo": {"name": "Joaquin Duato", "linkedin": "https://www.linkedin.com/in/joaquinduato"},
            "cfo": {"name": "Joseph J. Wolk", "linkedin": "https://www.linkedin.com/in/josephwolk"},
            "cso": {"name": "John C. Reed", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/johncreedjnj"},
            "other": {"name": "Vanessa Broadhurst", "title": "EVP Global Corporate Affairs", "linkedin": "https://www.linkedin.com/in/vanessabroadhurst"}
        },
        "salesforce_id": "",
        "linkedin_url": "https://www.linkedin.com/company/johnson-&-johnson",
        "pipeline_drugs": [
            {
                "drug_name": "Icotrokinra (JNJ-2113 / Icotyde)",
                "phase": "Phase 3 (NDA submitted July 2025)",
                "indication": "Moderate-to-severe plaque psoriasis (adults and adolescents ≥12 years)",
                "expected_fda_date": "Mid-2026 (~12-month standard review)",
                "sentiment": "Positive",
                "sentiment_reason": "Novel oral IL-23 peptide inhibitor; potential first-in-class oral biologic-level efficacy for psoriasis",
                "mechanism": "Oral peptide IL-23 receptor antagonist"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Minsu Kim", "bm_title": "Senior Consultant", "linkedin_url": "", "connection_type": "J&J mentioned in BM professional network", "connection_degree": "Network", "notes": "J&J connections noted in BM employee profile"}
        ]
    },

    # ==========================================================
    # 14. BRISTOL MYERS SQUIBB (BMY)
    # ==========================================================
    {
        "ticker": "BMY",
        "name": "Bristol Myers Squibb",
        "summary": "Bristol Myers Squibb is a global biopharmaceutical company that discovers, develops, and delivers innovative medicines for cancer, immunology, and cardiovascular disease.",
        "headquarters": "Princeton, New Jersey",
        "founded": "1989",
        "employees": "~34,000",
        "approved_products": "Eliquis 2012 - Atrial fibrillation; Opdivo 2014 - Various cancers; Revlimid 2006 - Multiple myeloma; Orencia 2005 - RA; Reblozyl 2019 - Anemia; Camzyos 2022 - HCM",
        "pipeline_products": "Iberdomide | Phase 3 (NDA under review; Priority Review + Breakthrough Therapy) | R/R Multiple Myeloma | FDA: August 17, 2026",
        "recent_news": "Iberdomide PDUFA August 17, 2026; Priority Review + Breakthrough Therapy designation",
        "stock_price": 60.29,
        "market_cap": 122778999674.0,
        "pe_ratio": "17.53",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 63.33,
        "year_low": 42.52,
        "leadership": {
            "ceo": {"name": "Christopher Boerner, PhD", "linkedin": ""},
            "cfo": {"name": "David Elkins", "linkedin": "https://www.linkedin.com/in/david-elkins-b8981377"},
            "cso": {"name": "Robert Plenge, MD, PhD", "title": "Chief Scientific Officer", "linkedin": "http://www.linkedin.com/in/robert-plenge-86560535"},
            "other": {"name": "Cristian Massacesi, MD", "title": "Chief Medical Officer Oncology", "linkedin": "https://www.linkedin.com/in/cristian-massacesi"}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Iberdomide",
                "phase": "Phase 3 (NDA under FDA review; Priority Review + Breakthrough Therapy)",
                "indication": "Relapsed/Refractory Multiple Myeloma (in combination with daratumumab + dexamethasone)",
                "expected_fda_date": "August 17, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review + Breakthrough Therapy; next-gen CELMoD with superior efficacy vs. lenalidomide/pomalidomide",
                "mechanism": "Cereblon E3 ligase modulator (CELMoD) — targeted protein degradation of Ikaros and Aiolos"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Pankaj Oza", "bm_title": "Managing Partner", "linkedin_url": "", "connection_type": "Former employee at Bristol-Myers Squibb", "connection_degree": "Direct", "notes": "UK/European Marketing at BMS"},
            {"bm_employee_name": "Milena Sullivan", "bm_title": "Partner", "linkedin_url": "", "connection_type": "Former employee at Bristol-Myers Squibb", "connection_degree": "Direct", "notes": "Associate Director, US Federal Policy at BMS"},
            {"bm_employee_name": "Kristin Talsky", "bm_title": "Associate Principal", "linkedin_url": "", "connection_type": "BMS in professional network", "connection_degree": "Network", "notes": "BMS mentioned in published research"},
            {"bm_employee_name": "Matthew Thaxter", "bm_title": "Senior Consultant", "linkedin_url": "", "connection_type": "BMS in professional coverage", "connection_degree": "Network", "notes": "Broad pharma coverage including BMS from GlobalData background"}
        ]
    },

    # ==========================================================
    # 15. ASTRAZENECA (AZN)
    # ==========================================================
    {
        "ticker": "AZN",
        "name": "AstraZeneca",
        "summary": "AstraZeneca is a British-Swedish multinational biopharmaceutical company specializing in oncology, rare diseases, cardiovascular, renal & metabolism, and respiratory & immunology.",
        "headquarters": "Cambridge, UK",
        "founded": "1999",
        "employees": "~89,900",
        "approved_products": "Tagrisso 2015 - EGFR+ NSCLC; Farxiga 2014 - T2D/HF/CKD; Imfinzi 2017 - Lung/bladder cancer; Enhertu 2019 - HER2+ breast cancer; Calquence 2017 - CLL",
        "pipeline_products": "Baxdrostat | NDA under review (Priority Review) | Uncontrolled hypertension | FDA: Q2 2026; Camizestrant | NDA under review | HR+/HER2- mBC | FDA: Mid-2026",
        "recent_news": "Two drugs under FDA Priority Review; ODAC meeting for camizestrant April 30, 2026",
        "stock_price": 194.22,
        "market_cap": 301096066614.0,
        "pe_ratio": "29.65",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 212.71,
        "year_low": 122.48,
        "leadership": {
            "ceo": {"name": "Pascal Soriot", "linkedin": ""},
            "cfo": {"name": "Aradhana Sarin", "linkedin": "https://www.linkedin.com/in/aradhanasarin"},
            "cso": {"name": "Susan Galbraith", "title": "EVP Oncology R&D", "linkedin": "https://www.linkedin.com/in/susan-galbraith-584a195"},
            "other": {"name": "Pam Cheng", "title": "EVP Operations & IT", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Baxdrostat",
                "phase": "Phase 3 (NDA under FDA review; Priority Review)",
                "indication": "Uncontrolled hypertension (uHTN) and treatment-resistant hypertension (rHTN)",
                "expected_fda_date": "Q2 2026 (Priority Review; PDUFA April–June 2026)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review; aldosterone synthase inhibitor targets root cause of resistant hypertension",
                "mechanism": "Selective aldosterone synthase inhibitor (CYP11B2 inhibitor)"
            },
            {
                "drug_name": "Camizestrant (AZD9833)",
                "phase": "Phase 3 (NDA under FDA review; ODAC April 30, 2026)",
                "indication": "HR+/HER2- locally advanced or metastatic breast cancer with emergent ESR1 mutations",
                "expected_fda_date": "Mid-2026 (ODAC meeting set April 30, 2026)",
                "sentiment": "Mixed",
                "sentiment_reason": "ODAC advisory committee meeting indicates FDA scrutiny; next-gen SERD but competitive market",
                "mechanism": "Next-generation oral selective estrogen receptor degrader (SERD)"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Ellanor Whiteley", "bm_title": "Associate Principal", "linkedin_url": "", "connection_type": "Former employee at AstraZeneca", "connection_degree": "Direct", "notes": "Research Scientist 2015-2019; PhD funded by AstraZeneca"},
            {"bm_employee_name": "Ida Viken", "bm_title": "Senior Consultant", "linkedin_url": "", "connection_type": "Master thesis research at AstraZeneca", "connection_degree": "Direct", "notes": "BioPharmaceutical R&D, Gothenburg"},
            {"bm_employee_name": "James Eddy", "bm_title": "Network Contact (at AstraZeneca)", "linkedin_url": "", "connection_type": "Current AstraZeneca employee; Blue Matter network", "connection_degree": "Direct", "notes": "Current Director, Oncology R&D Strategy at AstraZeneca"}
        ]
    },

    # ==========================================================
    # 16. NUVALENT (NUVL)
    # ==========================================================
    {
        "ticker": "NUVL",
        "name": "Nuvalent Inc.",
        "summary": "Nuvalent is a clinical-stage biopharmaceutical company focused on creating precisely targeted therapies for patients with cancer, particularly kinase targets in NSCLC.",
        "headquarters": "Cambridge, Massachusetts",
        "founded": "2017",
        "employees": "~228",
        "approved_products": "None (clinical-stage company with no marketed products)",
        "pipeline_products": "Zidesamtinib | Phase 1/2 registrational (NDA under FDA review) | ROS1+ NSCLC | FDA: September 18, 2026",
        "recent_news": "FDA accepted NDA for zidesamtinib; PDUFA September 18, 2026; Breakthrough Therapy",
        "stock_price": 99.41,
        "market_cap": 7274992797.0,
        "pe_ratio": "-17.14",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 113.02,
        "year_low": 55.53,
        "leadership": {
            "ceo": {"name": "James Porter, PhD", "linkedin": "https://www.linkedin.com/in/james-porter-301b6112"},
            "cfo": {"name": "Alex Balcom, MBA, CPA", "linkedin": "https://www.linkedin.com/in/alex-balcom-mba-cpa-312b5720"},
            "cso": {"name": "Henry Pelish, PhD", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/henry-pelish"},
            "other": {"name": "Christopher Turner, MD", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/christopher-d-turner-918a2a8a"}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Zidesamtinib",
                "phase": "Phase 1/2 registrational (NDA under FDA review; Breakthrough Therapy)",
                "indication": "TKI-pretreated advanced ROS1-positive non-small cell lung cancer (NSCLC)",
                "expected_fda_date": "September 18, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "Breakthrough Therapy; designed to overcome resistance to earlier ROS1 TKIs; strong response rates",
                "mechanism": "Next-generation ROS1/NTRK TKI — designed to overcome crizotinib and lorlatinib resistance"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 17. SUMMIT THERAPEUTICS (SMMT)
    # ==========================================================
    {
        "ticker": "SMMT",
        "name": "Summit Therapeutics Inc.",
        "summary": "Summit Therapeutics is a biopharmaceutical oncology company focused on developing patient-friendly therapies, including ivonescimab, a PD-1/VEGF bispecific for NSCLC.",
        "headquarters": "Miami, Florida",
        "founded": "2003",
        "employees": "~265",
        "approved_products": "None in Summit's territories (ivonescimab approved in China 2024 by NMPA)",
        "pipeline_products": "Ivonescimab | Phase 3 (BLA submitted; FDA accepted) | EGFR-mutated advanced NSCLC | FDA: November 14, 2026",
        "recent_news": "BLA submitted and accepted by FDA; PDUFA November 14, 2026",
        "stock_price": 15.11,
        "market_cap": 11248533730.0,
        "pe_ratio": "-10.49",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 36.91,
        "year_low": 13.83,
        "leadership": {
            "ceo": {"name": "Robert W. Duggan (Co-CEO)", "linkedin": "https://www.linkedin.com/in/robertwduggan"},
            "cfo": {"name": "Manmeet Soni", "linkedin": "https://www.linkedin.com/in/manmeetsoni"},
            "cso": {"name": "Allen S. Yang", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "Dr. Maky Zanganeh", "title": "Co-CEO", "linkedin": "https://www.linkedin.com/in/dr-maky-zanganeh-b9b9548"}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Ivonescimab",
                "phase": "Phase 3 (BLA submitted; FDA accepted for review)",
                "indication": "EGFR-mutated advanced nonsquamous NSCLC after TKI progression",
                "expected_fda_date": "November 14, 2026 (PDUFA date based on HARMONi trial)",
                "sentiment": "Positive",
                "sentiment_reason": "BLA accepted; HARMONi trial showed superior PFS vs. pembrolizumab; strong China data",
                "mechanism": "Bispecific antibody targeting PD-1 and VEGF simultaneously"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 18. BEONE MEDICINES / BEIGENE (BGNE)
    # ==========================================================
    {
        "ticker": "BGNE",
        "name": "BeOne Medicines (formerly BeiGene)",
        "summary": "BeOne Medicines is a global oncology company focused on hematology and solid tumors, with approved BTK inhibitor BRUKINSA and anti-PD-1 TEVIMBRA.",
        "headquarters": "Basel, Switzerland (operational: Cambridge, MA and Beijing, China)",
        "founded": "2010",
        "employees": "~12,000",
        "approved_products": "BRUKINSA (zanubrutinib) 2019 - MCL/CLL/SLL/WM/FL; TEVIMBRA (tislelizumab) 2024 - Gastric/esophageal cancer",
        "pipeline_products": "Sonrotoclax (BGB-11417) | Phase 1/2 → NDA under review (Priority Review) | R/R Mantle Cell Lymphoma | FDA: ~April–May 2026",
        "recent_news": "Sonrotoclax Priority Review NDA accepted; PDUFA April-May 2026 range",
        "stock_price": 184.71,
        "market_cap": 20209121100.0,
        "pe_ratio": "-22.55",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 248.16,
        "year_low": 126.97,
        "leadership": {
            "ceo": {"name": "John V. Oyler", "linkedin": "https://www.linkedin.com/in/john-v-oyler-a811986"},
            "cfo": {"name": "Aaron Rosenberg", "linkedin": "https://www.linkedin.com/in/arosenberg22"},
            "cso": {"name": "Lai Wang", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "Xiaodong Wang", "title": "Co-Founder & Chairman", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Sonrotoclax (BGB-11417)",
                "phase": "Phase 1/2 → NDA under FDA review (Priority Review)",
                "indication": "Relapsed/Refractory Mantle Cell Lymphoma (post-BTK inhibitor)",
                "expected_fda_date": "~April–May 2026 (Priority Review)",
                "sentiment": "Mixed",
                "sentiment_reason": "Priority Review but competitive BCL-2 inhibitor space (vs. venetoclax); post-BTK resistance data still emerging",
                "mechanism": "Next-generation BCL-2 inhibitor"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Tjarda Kasteel", "bm_title": "Associate Principal (AIM, a Blue Matter company)", "linkedin_url": "", "connection_type": "Former employee at BeiGene", "connection_degree": "Direct", "notes": "Senior Director, Country Manager Netherlands, 2021-2022"}
        ]
    },

    # ==========================================================
    # 19. ORCA BIO (ORCA)
    # ==========================================================
    {
        "ticker": "ORCA",
        "name": "Orca Bio",
        "summary": "Orca Bio is a late-stage biotechnology company developing high-precision allogeneic cell therapies to treat blood cancers (AML, ALL, MDS) and autoimmune diseases.",
        "headquarters": "Menlo Park, CA",
        "founded": "2016",
        "employees": "~289",
        "approved_products": "None (all investigational)",
        "pipeline_products": "Orca-T | Phase 3 (BLA under FDA review) | Hematological malignancies (AML, ALL, MDS) | FDA: April 6, 2026",
        "recent_news": "BLA under FDA review with PDUFA April 6, 2026; Orphan Drug + Priority Review + RMAT",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "N/A",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Nathaniel (Nate) Fernhoff", "linkedin": "https://www.linkedin.com/in/nathaniel-fernhoff-7552b416"},
            "cfo": {"name": "Josh Murray", "linkedin": "https://www.linkedin.com/in/josh-murray-737a8513"},
            "cso": {"name": "James Scott McClellan", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/james-scott-mcclellan-ab738a91"},
            "other": {"name": "Jeroen Bekaert", "title": "Chief Operating Officer", "linkedin": "https://www.linkedin.com/in/jeroenbekaert"}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Orca-T",
                "phase": "Phase 3 (BLA under FDA review; Orphan Drug + Priority Review + RMAT)",
                "indication": "Hematological malignancies undergoing allo-HSCT: AML, ALL, MDS",
                "expected_fda_date": "April 6, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "RMAT + Priority Review + Orphan Drug; potentially superior to standard allo-HSCT with less GVHD",
                "mechanism": "High-precision allogeneic T-cell immunotherapy — sorted regulatory T-cells to reduce GVHD"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 20. TRAVERE THERAPEUTICS (TVTX)
    # ==========================================================
    {
        "ticker": "TVTX",
        "name": "Travere Therapeutics",
        "summary": "Travere Therapeutics is a biopharmaceutical company focused on identifying, developing, and delivering life-changing therapies for rare kidney and metabolic diseases.",
        "headquarters": "San Diego, California",
        "founded": "2008",
        "employees": "~385-450",
        "approved_products": "FILSPARI (sparsentan) 2023/2024 - IgA Nephropathy; THIOLA/THIOLA EC (tiopronin) - Cystinuria",
        "pipeline_products": "Sparsentan (Filspari) FSGS expansion | Phase 3 (sNDA under review) | FSGS | FDA: April 13, 2026",
        "recent_news": "sNDA under review for FSGS expansion of sparsentan; PDUFA April 13, 2026",
        "stock_price": 27.24,
        "market_cap": 2512659822.0,
        "pe_ratio": "-47.79",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 42.13,
        "year_low": 12.91,
        "leadership": {
            "ceo": {"name": "Eric Dube, Ph.D.", "linkedin": "https://www.linkedin.com/in/eric-dube-phd"},
            "cfo": {"name": "Christopher Cline, CFA", "linkedin": "https://www.linkedin.com/in/chrisclinecfa"},
            "cso": {"name": "William Rote, Ph.D.", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/williamrote"},
            "other": {"name": "Jula Inrig, M.D.", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/jula-inrig-41a58021"}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Sparsentan (Filspari) — FSGS expansion",
                "phase": "Phase 3 (sNDA under review for full approval and FSGS indication)",
                "indication": "Focal Segmental Glomerulosclerosis (FSGS); already approved for IgAN under accelerated approval",
                "expected_fda_date": "April 13, 2026 (PDUFA date for FSGS sNDA)",
                "sentiment": "Positive",
                "sentiment_reason": "Expanding to FSGS after IgAN approval; dual endothelin/angiotensin receptor antagonist addresses key disease drivers",
                "mechanism": "Dual endothelin type A (ETA) and angiotensin II type 1 (AT1) receptor antagonist"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 21. VERA THERAPEUTICS (VERA)
    # ==========================================================
    {
        "ticker": "VERA",
        "name": "Vera Therapeutics",
        "summary": "Vera Therapeutics is a clinical-stage biotechnology company focused on developing transformative treatments for serious immunological diseases, particularly IgA nephropathy.",
        "headquarters": "Brisbane, California",
        "founded": "2016",
        "employees": "~224",
        "approved_products": "None (clinical-stage company with no approved products)",
        "pipeline_products": "Atacicept | Phase 3 (BLA under FDA review) | IgA Nephropathy (IgAN) | FDA: July 7, 2026",
        "recent_news": "BLA accepted with Priority Review + Breakthrough Therapy; PDUFA July 7, 2026",
        "stock_price": 39.07,
        "market_cap": 2787865832.0,
        "pe_ratio": "-8.38",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 56.05,
        "year_low": 18.53,
        "leadership": {
            "ceo": {"name": "Marshall Fordyce, M.D.", "linkedin": "https://www.linkedin.com/in/marshall-fordyce-m-d-05751846"},
            "cfo": {"name": "Sean P. Grant", "linkedin": "https://www.linkedin.com/in/grantsean"},
            "cso": {"name": "Robert M. Brenner, M.D.", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/robert-brenner-aa58b55"},
            "other": {"name": "Matt Skelton", "title": "Chief Commercial Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Atacicept",
                "phase": "Phase 3 (BLA under FDA review; Priority Review + Breakthrough Therapy)",
                "indication": "IgA Nephropathy (IgAN)",
                "expected_fda_date": "July 7, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review + Breakthrough Therapy; dual APRIL/BAFF blockade addresses galactose-deficient IgA1 root cause",
                "mechanism": "Fusion protein blocking both APRIL and BAFF (B-cell survival/differentiation factors)"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 22. ARVINAS (ARVN)
    # ==========================================================
    {
        "ticker": "ARVN",
        "name": "Arvinas Inc.",
        "summary": "Arvinas is a clinical-stage biotechnology company pioneering targeted protein degradation therapeutics using its proprietary PROTAC platform, focusing on oncology and neurodegeneration.",
        "headquarters": "New Haven, Connecticut",
        "founded": "2013",
        "employees": "~430",
        "approved_products": "None (no currently approved or marketed products)",
        "pipeline_products": "Vepdegestrant (ARV-471) | Phase 3 (NDA under FDA review) | ESR1-mutant ER+/HER2- mBC | FDA: ~June 5, 2026",
        "recent_news": "NDA submitted H2 2025; PDUFA ~June 5, 2026 per Prime Therapeutics",
        "stock_price": 13.6,
        "market_cap": 873450426.0,
        "pe_ratio": "-11.93",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 18.45,
        "year_low": 5.9,
        "leadership": {
            "ceo": {"name": "Randy Teel, Ph.D.", "linkedin": "https://www.linkedin.com/in/randyteel"},
            "cfo": {"name": "Andrew Saik", "linkedin": "https://www.linkedin.com/in/andrewsaik"},
            "cso": {"name": "Noah Berkowitz", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/noah-berkowitz-15b19212"},
            "other": {"name": "John Houston, Ph.D.", "title": "Co-Founder & Executive Chairman", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Vepdegestrant (ARV-471)",
                "phase": "Phase 3 (NDA under FDA review; submitted H2 2025)",
                "indication": "ESR1-mutant, ER+/HER2- advanced/metastatic breast cancer (post-CDK4/6 inhibitor failure)",
                "expected_fda_date": "~June 5, 2026 (PDUFA date)",
                "sentiment": "Mixed",
                "sentiment_reason": "NDA submitted but Phase 3 VERITAC-2 results showed narrower than expected benefit in ESR1-mutant subgroup vs. fulvestrant",
                "mechanism": "PROTAC estrogen receptor degrader (ERD) — targeted degradation of ER via E3 ubiquitin ligase"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 23. VIRIDIAN THERAPEUTICS (VRDN)
    # ==========================================================
    {
        "ticker": "VRDN",
        "name": "Viridian Therapeutics",
        "summary": "Viridian Therapeutics is a biopharmaceutical company focused on developing best-in-class medicines for serious and rare diseases, particularly autoimmune conditions like thyroid eye disease.",
        "headquarters": "Waltham, Massachusetts",
        "founded": "2007",
        "employees": "~143",
        "approved_products": "None (veligrotug BLA under FDA Priority Review for TED)",
        "pipeline_products": "Veligrotug | Phase 3 (BLA under FDA review) | Thyroid Eye Disease (TED) | FDA: June 30, 2026",
        "recent_news": "BLA accepted with Priority Review for veligrotug; PDUFA June 30, 2026",
        "stock_price": 28.34,
        "market_cap": 2404623522.0,
        "pe_ratio": "-8.69",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 34.29,
        "year_low": 9.9,
        "leadership": {
            "ceo": {"name": "Steve Mahoney", "linkedin": "https://www.linkedin.com/in/steve-mahoney-92216b13"},
            "cfo": {"name": "Seth Harmon", "linkedin": "https://www.linkedin.com/in/seth-harmon-0a12b34"},
            "cso": {"name": "Radhika Tripuraneni", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/radhikatripmd"},
            "other": {"name": "Tony Casciano", "title": "Chief Commercial Officer", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Veligrotug (VRDN-001)",
                "phase": "Phase 3 (BLA under FDA review; Priority Review)",
                "indication": "Thyroid Eye Disease (TED) — both active and chronic phases",
                "expected_fda_date": "June 30, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "Priority Review; subcutaneous administration advantage over IV teprotumumab; both acute and chronic TED data",
                "mechanism": "Anti-IGF-1R monoclonal antibody (subcut) — inhibits insulin-like growth factor 1 receptor in orbital fibroblasts"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 24. DENALI THERAPEUTICS (DNLI)
    # ==========================================================
    {
        "ticker": "DNLI",
        "name": "Denali Therapeutics",
        "summary": "Denali Therapeutics is a biotechnology company developing biotherapeutics engineered to cross the blood-brain barrier for neurodegenerative diseases, lysosomal storage disorders, and other serious diseases.",
        "headquarters": "South San Francisco, California",
        "founded": "2015",
        "employees": "~503",
        "approved_products": "None",
        "pipeline_products": "Tividenofusp alfa | Phase 2/3 (BLA accepted) | Hunter syndrome (MPS II) | FDA: April 5, 2026",
        "recent_news": "BLA accepted with Fast Track + RMAT + Orphan Drug designations; PDUFA April 5, 2026",
        "stock_price": 19.69,
        "market_cap": 3074758187.0,
        "pe_ratio": "-6.74",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 23.77,
        "year_low": 10.57,
        "leadership": {
            "ceo": {"name": "Ryan Watts, Ph.D.", "linkedin": "https://www.linkedin.com/in/ryan-watts-0385b9b0"},
            "cfo": {"name": "Alexander Schuth, M.D.", "linkedin": "https://www.linkedin.com/in/alexander-schuth-9800141"},
            "cso": {"name": "Peter Chin, M.D.", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/peter-chin"},
            "other": {"name": "Joe Lewcock, Ph.D.", "title": "SVP Research", "linkedin": "https://www.linkedin.com/in/joe-lewcock-2858154"}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Tividenofusp alfa",
                "phase": "Phase 2/3 (BLA accepted; Fast Track + RMAT + Orphan Drug + RPD)",
                "indication": "Hunter syndrome (Mucopolysaccharidosis Type II, MPS II) — enzyme replacement delivered across the BBB",
                "expected_fda_date": "April 5, 2026 (PDUFA date)",
                "sentiment": "Positive",
                "sentiment_reason": "RMAT + Fast Track + Orphan; first CNS-penetrating ERT for MPS II using Denali's ATV platform",
                "mechanism": "ETV:IDS fusion protein — engineered transferrin variant enables blood-brain barrier crossing for iduronate-2-sulfatase delivery"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 25. REGENERON PHARMACEUTICALS (REGN)
    # ==========================================================
    {
        "ticker": "REGN",
        "name": "Regeneron Pharmaceuticals",
        "summary": "Regeneron Pharmaceuticals is a leading biotechnology company that discovers, invents, develops, manufactures, and commercializes medicines for eye diseases, allergic and inflammatory diseases, cancer, and rare diseases.",
        "headquarters": "Tarrytown, New York",
        "founded": "1988",
        "employees": "~15,410",
        "approved_products": "EYLEA 2011 - Wet AMD/DME/DR/RVO; Dupixent 2017 - Atopic dermatitis/asthma/CRSwNP; Libtayo 2018 - Advanced CSCC/NSCLC; Praluent 2015 - Hypercholesterolemia; Kevzara 2017 - RA",
        "pipeline_products": "DB-OTO | Phase 1/2 (BLA filing planned 2026) | Congenital hearing loss (OTOF mutations) | FDA: H1 2026",
        "recent_news": "BLA submission expected H1 2026 for DB-OTO; CNPV + Fast Track + Orphan Drug + RMAT + RPD",
        "stock_price": 759.86,
        "market_cap": 78951475228.0,
        "pe_ratio": "18.31",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 821.11,
        "year_low": 476.49,
        "leadership": {
            "ceo": {"name": "Leonard S. Schleifer", "linkedin": "https://www.linkedin.com/in/leonard-schleifer-regeneron"},
            "cfo": {"name": "Christopher Fenimore", "linkedin": "https://www.linkedin.com/in/christopher-fenimore-a0ab1b8"},
            "cso": {"name": "George D. Yancopoulos", "title": "President & Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/george-yancopoulos-452a4141"},
            "other": {"name": "Marion McCourt", "title": "Chief Commercial Officer", "linkedin": "https://www.linkedin.com/in/marion-mccourt-280b28b3"}
        },
        "salesforce_id": "",
        "linkedin_url": "https://www.linkedin.com/company/regeneron-pharmaceuticals",
        "pipeline_drugs": [
            {
                "drug_name": "DB-OTO",
                "phase": "Phase 1/2 (BLA filing planned H1 2026; CNPV + Fast Track + Orphan Drug + RMAT + RPD)",
                "indication": "Congenital hearing loss due to OTOF gene mutations (otoferlin deficiency)",
                "expected_fda_date": "H1 2026 (BLA submission expected; review ~6 months under CNPV)",
                "sentiment": "Positive",
                "sentiment_reason": "Multiple FDA designations; potentially curative single-dose gene therapy; strong Phase 1/2 data",
                "mechanism": "Adeno-associated virus (AAV) gene therapy — delivers functional OTOF gene to inner ear hair cells"
            }
        ],
        "bm_connections": [
            {"bm_employee_name": "Pavan Eckhart", "bm_title": "Former Blue Matter Network (now at Ionis)", "linkedin_url": "", "connection_type": "Former Regeneron Field Access Specialist; Blue Matter network contact", "connection_degree": "Network", "notes": "Former Regeneron employee; in Blue Matter professional network"}
        ]
    },


    # ==========================================================
    # --- IBB TOP 50 EXPANSION (added March 2026) ---
    # These entries are pre-populated with known company info.
    # Fields marked "UPDATE:" should be refreshed with current
    # data. Pipeline and leadership can be added over time.
    # ==========================================================

    # ==========================================================
    # 26. VERTEX PHARMACEUTICALS (VRTX)
    # ==========================================================
    {
        "ticker": "VRTX",
        "name": "Vertex Pharmaceuticals",
        "summary": "Vertex Pharmaceuticals is a global biotechnology company focused on developing and commercializing transformative medicines for serious diseases, including cystic fibrosis, sickle cell disease, and pain.",
        "headquarters": "Boston, Massachusetts",
        "founded": "1989",
        "employees": "~5,000",
        "approved_products": "Trikafta/Kaftrio (elexacaftor/tezacaftor/ivacaftor) 2019 - CF; Symdeko 2018 - CF; Orkambi 2015 - CF; Kalydeco 2012 - CF; Casgevy (with CRISPR Tx) 2023 - Sickle cell/Beta-thal; Journavx (suzetrigine) 2025 - Acute pain",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Reshma Kewalramani, MD", "linkedin": ""},
            "cfo": {"name": "Charlie Wagner", "linkedin": ""},
            "cso": {"name": "David Altshuler, MD, PhD", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 27. AMGEN (AMGN)
    # ==========================================================
    {
        "ticker": "AMGN",
        "name": "Amgen Inc.",
        "summary": "Amgen is a leading global biotechnology company focused on human therapeutics in oncology, inflammation, bone health, cardiovascular disease, and neuroscience, with a large biosimilars portfolio.",
        "headquarters": "Thousand Oaks, California",
        "founded": "1980",
        "employees": "~24,000",
        "approved_products": "Enbrel (etanercept) 1998 - RA/psoriasis; Prolia (denosumab) 2010 - Osteoporosis; Xgeva 2010 - Bone metastases; Repatha (evolocumab) 2015 - Hypercholesterolemia; Aimovig 2018 - Migraine prevention; Lumakras (sotorasib) 2021 - KRAS G12C NSCLC; Otezla (apremilast) 2014 - Psoriasis/PsA",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Robert A. Bradway", "linkedin": ""},
            "cfo": {"name": "Peter H. Griffith", "linkedin": ""},
            "cso": {"name": "Jay Bradner, MD", "title": "EVP Research", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 28. ALNYLAM PHARMACEUTICALS (ALNY)
    # ==========================================================
    {
        "ticker": "ALNY",
        "name": "Alnylam Pharmaceuticals",
        "summary": "Alnylam Pharmaceuticals is a biopharmaceutical company focused on developing and commercializing novel therapeutics based on RNA interference (RNAi) for serious and rare diseases.",
        "headquarters": "Cambridge, Massachusetts",
        "founded": "2002",
        "employees": "~3,000",
        "approved_products": "ONPATTRO (patisiran) 2018 - hATTR polyneuropathy; GIVLAARI (givosiran) 2019 - AHP; OXLUMO (lumasiran) 2020 - PH1; LEQVIO (inclisiran, with Novartis) 2021 - LDL cholesterol; AMVUTTRA (vutrisiran) 2022 - hATTR polyneuropathy",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Yvonne Greenstreet, MBBCh", "linkedin": ""},
            "cfo": {"name": "Jeff Poulton", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 29. INSMED (INSM)
    # ==========================================================
    {
        "ticker": "INSM",
        "name": "Insmed Incorporated",
        "summary": "Insmed is a global biopharmaceutical company focused on developing and commercializing therapies for patients with rare diseases and serious conditions with significant unmet medical needs, including pulmonary and inflammatory diseases.",
        "headquarters": "Bridgewater, New Jersey",
        "founded": "1988",
        "employees": "~1,600",
        "approved_products": "ARIKAYCE (amikacin liposome inhalation suspension) 2018 - Mycobacterium avium complex (MAC) lung disease",
        "pipeline_products": "Brensocatib | Phase 3 (NDA filed) | Non-cystic fibrosis bronchiectasis | UPDATE with FDA date",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Will Lewis", "linkedin": ""},
            "cfo": {"name": "Sara Bonstein", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Brensocatib",
                "phase": "Phase 3 (NDA filed)",
                "indication": "Non-cystic fibrosis bronchiectasis (NCFB)",
                "expected_fda_date": "UPDATE: Add PDUFA date",
                "sentiment": "Positive",
                "sentiment_reason": "Significant unmet need; positive Phase 3 ASPEN data; DPP1 inhibitor first-in-class for bronchiectasis",
                "mechanism": "Dipeptidyl peptidase 1 (DPP1) inhibitor — reduces neutrophil serine protease activity"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 30. BIOGEN (BIIB)
    # ==========================================================
    {
        "ticker": "BIIB",
        "name": "Biogen Inc.",
        "summary": "Biogen is a global biopharmaceutical company specializing in the discovery, development, and delivery of transformative therapies in neurology, neuropsychiatry, and rare neurological diseases.",
        "headquarters": "Cambridge, Massachusetts",
        "founded": "1978",
        "employees": "~7,000",
        "approved_products": "Leqembi (lecanemab) 2023 - Early Alzheimer's disease; Spinraza (nusinersen) 2016 - SMA; Skyclarys (omaveloxolone) 2023 - Friedreich's ataxia; Tysabri (natalizumab) 2004 - MS; Vumerity (diroximel fumarate) 2019 - MS; Tecfidera (dimethyl fumarate) 2013 - MS",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Christopher Viehbacher", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "Priya Singhal, MD", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 31. NATERA (NTRA)
    # ==========================================================
    {
        "ticker": "NTRA",
        "name": "Natera, Inc.",
        "summary": "Natera is a diagnostics and life sciences company specializing in cell-free DNA testing for oncology (circulating tumor DNA) and reproductive health (prenatal testing), with a focus on improving clinical outcomes through genetics.",
        "headquarters": "Austin, Texas",
        "founded": "2004",
        "employees": "~5,000",
        "approved_products": "Signatera (ctDNA personalized cancer monitoring) - multiple tumor types; Panorama (NIPT prenatal screening); Constellation (carrier screening); Vistara (single-gene disorder NIPT)",
        "pipeline_products": "Expanding Signatera into adjuvant treatment decision-making across multiple cancer indications",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Steve Chapman", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 32. UNITED THERAPEUTICS (UTHR)
    # ==========================================================
    {
        "ticker": "UTHR",
        "name": "United Therapeutics Corporation",
        "summary": "United Therapeutics is a biotechnology company focused on the development and commercialization of innovative products to address the unmet medical needs of patients with chronic and life-threatening conditions, particularly pulmonary arterial hypertension.",
        "headquarters": "Silver Spring, Maryland",
        "founded": "1996",
        "employees": "~2,200",
        "approved_products": "Tyvaso DPI (inhaled treprostinil) 2022 - PAH/PH-ILD; Remodulin (treprostinil) 2002 - PAH; Orenitram (treprostinil) 2013 - PAH; Unituxin (dinutuximab) 2015 - Pediatric neuroblastoma",
        "pipeline_products": "UPDATE: Organ manufacturing / xenotransplantation pipeline",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Martine Rothblatt, PhD", "linkedin": ""},
            "cfo": {"name": "Michael Benkowitz", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 33. MODERNA (MRNA)
    # ==========================================================
    {
        "ticker": "MRNA",
        "name": "Moderna, Inc.",
        "summary": "Moderna is a biotechnology company focused on developing transformative medicines based on messenger RNA (mRNA) technology, with a diverse pipeline spanning infectious diseases, oncology, rare diseases, and cardiovascular conditions.",
        "headquarters": "Cambridge, Massachusetts",
        "founded": "2010",
        "employees": "~5,000",
        "approved_products": "Spikevax (mRNA-1273) 2021 - COVID-19 vaccine; mResvia (mRNA-1345) 2024 - RSV in adults 60+",
        "pipeline_products": "Personalized cancer vaccine (mRNA-4157/V940, with Merck) | Phase 3 | Adjuvant melanoma | UPDATE with FDA timeline",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Stéphane Bancel", "linkedin": ""},
            "cfo": {"name": "Jamey Mock", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "mRNA-4157/V940 (Personalized Cancer Vaccine, with Merck)",
                "phase": "Phase 3 (KEYNOTE-942 extension)",
                "indication": "Adjuvant treatment of high-risk melanoma (post-resection, with pembrolizumab)",
                "expected_fda_date": "UPDATE: BLA filing expected 2025-2026",
                "sentiment": "Positive",
                "sentiment_reason": "Phase 2b showed 49% reduction in recurrence/death vs. pembro alone; first personalized mRNA cancer vaccine",
                "mechanism": "Individualized neoantigen mRNA cancer vaccine — primes immune system against patient-specific tumor mutations"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 34. ILLUMINA (ILMN)
    # ==========================================================
    {
        "ticker": "ILMN",
        "name": "Illumina, Inc.",
        "summary": "Illumina is the world leader in DNA sequencing and array-based technologies, providing genomic tools and services to genomics, clinical, and agricultural markets. Not a drug company — its instruments and services power drug discovery and diagnostics.",
        "headquarters": "San Diego, California",
        "founded": "1998",
        "employees": "~9,000",
        "approved_products": "NovaSeq X sequencing platform; NextSeq 2000; MiSeq; iSeq 100; Oncology sequencing panels (TruSight Oncology)",
        "pipeline_products": "N/A — Illumina is an instrument/diagnostics company, not a drug developer",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Jacob Thaysen, PhD", "linkedin": ""},
            "cfo": {"name": "Scott Herren", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 35. INCYTE CORPORATION (INCY)
    # ==========================================================
    {
        "ticker": "INCY",
        "name": "Incyte Corporation",
        "summary": "Incyte is a biopharmaceutical company focused on the discovery, development, and commercialization of proprietary therapeutics in oncology and inflammation, with a portfolio anchored by JAK inhibitor Jakafi.",
        "headquarters": "Wilmington, Delaware",
        "founded": "1991",
        "employees": "~1,900",
        "approved_products": "Jakafi (ruxolitinib) 2011 - Myelofibrosis, PV, acute GVHD; Opzelura (ruxolitinib cream) 2021 - Atopic dermatitis, 2022 - Vitiligo; Zynyz (retifanlimab) 2023 - Merkel cell carcinoma, MSI-H endometrial",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Herve Hoppenot", "linkedin": ""},
            "cfo": {"name": "Christiana Stamoulis", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 36. REVOLUTION MEDICINES (RVMD)
    # ==========================================================
    {
        "ticker": "RVMD",
        "name": "Revolution Medicines, Inc.",
        "summary": "Revolution Medicines is a clinical-stage oncology company focused on developing targeted therapies against RAS and other signaling nodes in cancer, with a pipeline of RAS(ON) inhibitors.",
        "headquarters": "Redwood City, California",
        "founded": "2014",
        "employees": "~700",
        "approved_products": "None (clinical-stage company)",
        "pipeline_products": "RMC-6236 (pan-RASMULTI) | Phase 1/2 | KRAS-mutant pancreatic/lung cancer | UPDATE with FDA timeline",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Mark A. Goldsmith, MD, PhD", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "RMC-6236 (pan-RASMULTI inhibitor)",
                "phase": "Phase 1/2 (registrational trials planned)",
                "indication": "KRAS-mutant pancreatic ductal adenocarcinoma (PDAC) and non-small cell lung cancer (NSCLC)",
                "expected_fda_date": "UPDATE: NDA filing timeline TBD",
                "sentiment": "Positive",
                "sentiment_reason": "Novel RAS(ON) multi-selective inhibitor; addresses largest unmet need in oncology (KRAS mutations); strong early data",
                "mechanism": "RAS(ON) inhibitor — selectively targets GTP-bound (active) RAS including KRAS G12X, G13X, and other mutations"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 37. ROIVANT SCIENCES (ROIV)
    # ==========================================================
    {
        "ticker": "ROIV",
        "name": "Roivant Sciences Ltd.",
        "summary": "Roivant Sciences is a biopharmaceutical company that develops medicines and builds platform technologies to accelerate drug development, primarily through subsidiaries (Vants) that focus on specific therapeutic areas.",
        "headquarters": "Basel, Switzerland (operational: New York, NY)",
        "founded": "2014",
        "employees": "~600 (Roivant entity); subsidiaries separate",
        "approved_products": "Through subsidiaries: Vtama (tapinarof) 2022 (Dermavant) - Plaque psoriasis, AD; Myfembree (relugolix combination) 2021 (Myovant) - Uterine fibroids, endometriosis",
        "pipeline_products": "UPDATE: Add current Roivant pipeline across subsidiaries",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Matt Gline", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 38. NEUROCRINE BIOSCIENCES (NBIX)
    # ==========================================================
    {
        "ticker": "NBIX",
        "name": "Neurocrine Biosciences, Inc.",
        "summary": "Neurocrine Biosciences is a neuroscience-focused biopharmaceutical company with a portfolio of treatments for neurological, endocrine, and psychiatric conditions, anchored by tardive dyskinesia drug Ingrezza.",
        "headquarters": "San Diego, California",
        "founded": "1992",
        "employees": "~2,700",
        "approved_products": "Ingrezza (valbenazine) 2017 - Tardive dyskinesia; Orilissa (elagolix) 2018 - Endometriosis; Oriahnn (elagolix) 2020 - Uterine fibroids; Ongentys (opicapone, with Bial) 2020 - Parkinson's",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Kevin C. Gorman, PhD", "linkedin": ""},
            "cfo": {"name": "Matthew C. Abernethy", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 39. GENMAB (GMAB)
    # ==========================================================
    {
        "ticker": "GMAB",
        "name": "Genmab A/S",
        "summary": "Genmab is an international biotechnology company focused on the creation and development of differentiated antibody therapeutics for the treatment of cancer and other serious diseases.",
        "headquarters": "Copenhagen, Denmark",
        "founded": "1999",
        "employees": "~2,300",
        "approved_products": "Darzalex (daratumumab, with J&J) 2015 - Multiple myeloma; Kesimpta (ofatumumab, with Novartis) 2020 - Relapsing MS; Tepkinly (epcoritamab, with AbbVie) 2023 - Relapsed/refractory DLBCL",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Jan G.J. van de Winkel, PhD", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 40. BRIDGEBIO PHARMA (BBIO)
    # ==========================================================
    {
        "ticker": "BBIO",
        "name": "BridgeBio Pharma, Inc.",
        "summary": "BridgeBio Pharma is a biopharmaceutical company founded to discover, create, test, and deliver transformative medicines to treat patients who suffer from genetic diseases and cancers.",
        "headquarters": "Palo Alto, California",
        "founded": "2015",
        "employees": "~700",
        "approved_products": "Attruby (acoramidis) 2023 - ATTR cardiomyopathy (transthyretin amyloid cardiomyopathy)",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Neil Kumar, PhD", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 41. IONIS PHARMACEUTICALS (IONS)
    # ==========================================================
    {
        "ticker": "IONS",
        "name": "Ionis Pharmaceuticals, Inc.",
        "summary": "Ionis Pharmaceuticals is a pioneer in RNA-targeted medicine using its antisense oligonucleotide (ASO) platform, with a broad pipeline across neurological, cardiometabolic, and rare diseases.",
        "headquarters": "Carlsbad, California",
        "founded": "1989",
        "employees": "~2,000",
        "approved_products": "Spinraza (nusinersen, with Biogen) 2016 - SMA; Tegsedi (inotersen) 2018 - hATTR polyneuropathy; Waylivra (volanesorsen) 2019 (EU) - FCS; Wainua (eplontersen, with AstraZeneca) 2023 - hATTR polyneuropathy",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Brett Monia, PhD", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 42. MEDPACE HOLDINGS (MEDP)
    # ==========================================================
    {
        "ticker": "MEDP",
        "name": "Medpace Holdings, Inc.",
        "summary": "Medpace is a scientifically-driven, full-service clinical contract research organization (CRO) specializing in Phase I-IV clinical development for small and mid-size biopharmaceutical and medical device companies. Note: Medpace is a CRO, not a drug developer.",
        "headquarters": "Cincinnati, Ohio",
        "founded": "1992",
        "employees": "~5,500",
        "approved_products": "N/A — Medpace is a CRO (clinical trial services company, not a drug maker)",
        "pipeline_products": "N/A — CRO services company",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "August J. Troendle", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "N/A", "title": "N/A", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 43. EXELIXIS (EXEL)
    # ==========================================================
    {
        "ticker": "EXEL",
        "name": "Exelixis, Inc.",
        "summary": "Exelixis is an oncology-focused biotechnology company committed to the discovery, development, and commercialization of new medicines for difficult-to-treat cancers, anchored by cabozantinib.",
        "headquarters": "Alameda, California",
        "founded": "1994",
        "employees": "~1,000",
        "approved_products": "Cabometyx (cabozantinib) 2016 - Renal cell carcinoma, hepatocellular carcinoma, thyroid cancer; Cometriq (cabozantinib capsules) 2012 - Medullary thyroid cancer",
        "pipeline_products": "UPDATE: Add current pipeline details including XL092 combinations",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Michael M. Morrissey, PhD", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 44. BIOMARIN PHARMACEUTICAL (BMRN)
    # ==========================================================
    {
        "ticker": "BMRN",
        "name": "BioMarin Pharmaceutical Inc.",
        "summary": "BioMarin Pharmaceutical is a global biopharmaceutical company focused on developing and commercializing innovative therapies for patients with rare and serious diseases, with expertise in enzyme replacement therapies and gene therapies.",
        "headquarters": "San Rafael, California",
        "founded": "1997",
        "employees": "~3,200",
        "approved_products": "Voxzogo (vosoritide) 2021 - Achondroplasia; Brineura (cerliponase alfa) 2017 - CLN2 Batten disease; Naglazyme (galsulfase) 2005 - MPS VI; Aldurazyme (with Sanofi) 2003 - MPS I; Palynziq (pegvaliase) 2018 - PKU; Roctavian (valoctocogene) 2023 - Hemophilia A (EU)",
        "pipeline_products": "UPDATE: Add current pipeline details",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Alexander Hardy", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 45. MADRIGAL PHARMACEUTICALS (MDGL)
    # ==========================================================
    {
        "ticker": "MDGL",
        "name": "Madrigal Pharmaceuticals, Inc.",
        "summary": "Madrigal Pharmaceuticals is a biopharmaceutical company focused on the development of innovative therapies for metabolic and liver diseases, with its landmark approval of Rezdiffra for MASH.",
        "headquarters": "Conshohocken, Pennsylvania",
        "founded": "2016",
        "employees": "~600",
        "approved_products": "Rezdiffra (resmetirom) 2024 - MASH (metabolic dysfunction-associated steatohepatitis) with moderate-to-advanced liver fibrosis; FIRST-EVER FDA-approved treatment for MASH",
        "pipeline_products": "Rezdiffra label expansion; combination studies in MASH",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Bill Sibold", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 46. VAXCYTE (PCVX)
    # ==========================================================
    {
        "ticker": "PCVX",
        "name": "Vaxcyte, Inc.",
        "summary": "Vaxcyte is a clinical-stage vaccine company working to prevent or modify diseases caused by bacterial pathogens through the development of novel, highly differentiated conjugate vaccines.",
        "headquarters": "San Carlos, California",
        "founded": "2018",
        "employees": "~350",
        "approved_products": "None (clinical-stage vaccine company)",
        "pipeline_products": "VAX-24 (24-valent pneumococcal conjugate vaccine) | Phase 3 | Invasive pneumococcal disease | UPDATE with FDA timeline",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Grant Pickering", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Medical Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "VAX-24",
                "phase": "Phase 3",
                "indication": "Prevention of invasive pneumococcal disease (24-valent; broader than existing Prevnar 20)",
                "expected_fda_date": "UPDATE: NDA filing timeline TBD (~2026-2027)",
                "sentiment": "Positive",
                "sentiment_reason": "24-valent coverage exceeds Pfizer's Prevnar 20; strong Phase 3 immunogenicity data; growing pneumococcal vaccine market",
                "mechanism": "Conjugate vaccine — 24 pneumococcal polysaccharide serotypes conjugated to carrier protein to elicit immune response"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 47. ARROWHEAD PHARMACEUTICALS (ARWR)
    # ==========================================================
    {
        "ticker": "ARWR",
        "name": "Arrowhead Pharmaceuticals, Inc.",
        "summary": "Arrowhead Pharmaceuticals develops medicines that treat intractable diseases by silencing the genes that cause them, using RNA interference (RNAi) to create subcutaneously administered therapies.",
        "headquarters": "Pasadena, California",
        "founded": "2003",
        "employees": "~700",
        "approved_products": "None (NDA filed for plozasiran; pipeline company)",
        "pipeline_products": "Plozasiran | Phase 3 (NDA filed) | Severe hypertriglyceridemia | UPDATE with PDUFA date",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Christopher R. Anzalone, PhD", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Plozasiran (ARO-APOC3)",
                "phase": "Phase 3 (NDA filed)",
                "indication": "Familial chylomicronemia syndrome (FCS) and severe hypertriglyceridemia",
                "expected_fda_date": "UPDATE: Add PDUFA date",
                "sentiment": "Positive",
                "sentiment_reason": "Significant unmet need in FCS; strong Phase 3 data; twice-yearly subcutaneous dosing advantage",
                "mechanism": "RNAi — silences APOC3 gene to reduce triglyceride-rich lipoprotein levels"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 48. CYTOKINETICS (CYTK)
    # ==========================================================
    {
        "ticker": "CYTK",
        "name": "Cytokinetics, Incorporated",
        "summary": "Cytokinetics is a specialized biopharmaceutical company focused on muscle biology and the mechanics of muscle contraction to develop potential treatments for diseases affected by impaired cardiac muscle performance.",
        "headquarters": "South San Francisco, California",
        "founded": "1997",
        "employees": "~700",
        "approved_products": "None (NDA under FDA review for aficamten)",
        "pipeline_products": "Aficamten | Phase 3 (NDA under FDA review) | Obstructive hypertrophic cardiomyopathy (oHCM) | UPDATE with PDUFA date",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Robert I. Blum", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "Aficamten",
                "phase": "Phase 3 (NDA under FDA review)",
                "indication": "Symptomatic obstructive hypertrophic cardiomyopathy (oHCM)",
                "expected_fda_date": "UPDATE: Add PDUFA date (~2026)",
                "sentiment": "Positive",
                "sentiment_reason": "Strong SEQUOIA-HCM Phase 3 data; once-daily oral; potential competitor to Bristol Myers' Camzyos",
                "mechanism": "Cardiac myosin inhibitor — reduces hypercontractility in obstructive HCM by modulating myosin-actin cross-bridge formation"
            }
        ],
        "bm_connections": []
    },

    # ==========================================================
    # 49. HALOZYME THERAPEUTICS (HALO)
    # ==========================================================
    {
        "ticker": "HALO",
        "name": "Halozyme Therapeutics, Inc.",
        "summary": "Halozyme is a biopharma company developing its proprietary ENHANZE drug delivery technology (rHuPH20 enzyme) that enables subcutaneous delivery of large-molecule biologics. It licenses this platform to partners for royalties. Note: Halozyme is primarily a platform/royalty company.",
        "headquarters": "San Diego, California",
        "founded": "1999",
        "employees": "~500",
        "approved_products": "ENHANZE (rHuPH20) platform — powers SC formulations of: Darzalex SC (J&J), Phesgo (Roche), Herceptin SC (Roche), Rituxan Hycela (Roche), Tecentriq SC (Roche), Opdivo SC (BMS), Xtandi SC (Pfizer)",
        "pipeline_products": "ENHANZE pipeline with multiple pharma partners across oncology and rare disease",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Helen Torley, MBChB, MRCP", "linkedin": ""},
            "cfo": {"name": "UPDATE", "linkedin": ""},
            "cso": {"name": "UPDATE", "title": "Chief Scientific Officer", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [],
        "bm_connections": []
    },

    # ==========================================================
    # 50. BIONTECH (BNTX)
    # ==========================================================
    {
        "ticker": "BNTX",
        "name": "BioNTech SE",
        "summary": "BioNTech is a German biotechnology company focused on developing and manufacturing mRNA-based therapeutics and vaccines, including Comirnaty (COVID-19 vaccine with Pfizer) and a broad oncology pipeline.",
        "headquarters": "Mainz, Germany",
        "founded": "2008",
        "employees": "~5,500",
        "approved_products": "Comirnaty (BNT162b2, with Pfizer) 2021 - COVID-19 mRNA vaccine",
        "pipeline_products": "BNT111 (mRNA melanoma vaccine) | Phase 2 | Adjuvant melanoma; BNT122 (individualized neoantigen therapy, with Genentech) | Phase 2 | Multiple solid tumors",
        "recent_news": "UPDATE: Add most recent news",
        "stock_price": 0.0,
        "market_cap": 0.0,
        "pe_ratio": "UPDATE",
        "stock_change": 0.0,
        "stock_change_pct": 0.0,
        "year_high": 0.0,
        "year_low": 0.0,
        "leadership": {
            "ceo": {"name": "Uğur Şahin, MD", "linkedin": ""},
            "cfo": {"name": "Jens Holstein", "linkedin": ""},
            "cso": {"name": "Özlem Türeci, MD", "title": "Chief Medical Officer & Co-Founder", "linkedin": ""},
            "other": {"name": "UPDATE", "title": "UPDATE", "linkedin": ""}
        },
        "salesforce_id": "",
        "linkedin_url": "",
        "pipeline_drugs": [
            {
                "drug_name": "BNT111 (mRNA-based melanoma vaccine)",
                "phase": "Phase 2",
                "indication": "Adjuvant treatment of stage III/IV melanoma (with cemiplimab)",
                "expected_fda_date": "UPDATE: Phase 3 planning stage",
                "sentiment": "Positive",
                "sentiment_reason": "mRNA vaccine platform applied to oncology; building on COVID-19 mRNA success; strong early data in melanoma",
                "mechanism": "mRNA-encoded fixed neoantigen vaccine — delivers melanoma-associated antigens to prime T-cell immune response"
            }
        ],
        "bm_connections": []
    },

]  # end COMPANIES list


# ============================================================
# ➕ NEW COMPANY TEMPLATE
# ============================================================
# To add a new company:
#   1. Copy everything between the --- lines below
#   2. Paste it INSIDE the COMPANIES list above (before the closing ] )
#   3. Fill in the fields — delete any you don't know yet (optional ones are marked)
#   4. Save the file and run:  python db/seed_data.py
#
# REQUIRED fields: ticker, name, summary, headquarters, founded, employees,
#                  approved_products, pipeline_products, recent_news,
#                  stock_price, market_cap, pe_ratio, year_high, year_low, leadership
# OPTIONAL fields: salesforce_id, linkedin_url, stock_change, stock_change_pct
#
# ---- COPY FROM HERE ----
#
# {
#     "ticker": "XXXX",                          # Stock ticker (e.g. "MRNA")
#     "name": "Company Full Name",
#     "summary": "2-3 sentence overview of what this company does.",
#     "headquarters": "City, State/Country",
#     "founded": "YYYY",
#     "employees": "~000",
#     "approved_products": "Product A (year) - indication; Product B (year) - indication",
#     "pipeline_products": "Drug Name | Phase X | Indication | FDA: Expected date",
#     "recent_news": "Most recent notable news item",
#     "stock_price": 0.0,
#     "market_cap": 0.0,
#     "pe_ratio": "0.00",
#     "stock_change": 0.0,
#     "stock_change_pct": 0.0,
#     "year_high": 0.0,
#     "year_low": 0.0,
#     "leadership": {
#         "ceo": {"name": "First Last", "linkedin": "https://www.linkedin.com/in/..."},
#         "cfo": {"name": "First Last", "linkedin": ""},
#         "cso": {"name": "First Last", "title": "Chief Scientific Officer", "linkedin": ""},
#         "other": {"name": "First Last", "title": "Chief Commercial Officer", "linkedin": ""}
#     },
#     "salesforce_id": "",          # Optional — fill in after Salesforce integration
#     "linkedin_url": "",           # Optional — company LinkedIn page URL
#     "pipeline_drugs": [
#         {
#             "drug_name": "Drug Name",
#             "phase": "Phase X (status)",
#             "indication": "Disease or condition being treated",
#             "expected_fda_date": "Q0 YYYY or Month YYYY",
#             "sentiment": "Positive",     # Positive / Mixed / Negative
#             "sentiment_reason": "Why this sentiment — key data points or risks",
#             "mechanism": "How the drug works (mechanism of action)"
#         }
#         # Add more drugs here by copying the block above
#     ],
#     "bm_connections": [
#         {
#             "bm_employee_name": "First Last",
#             "bm_title": "Their Title at Blue Matter",
#             "linkedin_url": "",
#             "connection_type": "Former employee / Client relationship / Network",
#             "connection_degree": "Direct / 2nd degree / Network",
#             "notes": "Any additional context about the connection"
#         }
#         # Add more connections here by copying the block above
#     ]
# },
#
# ---- COPY TO HERE ----
