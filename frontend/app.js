/* Twine Pulse — Pharmaceutical Intelligence Dashboard
   Company data is loaded live from the Databricks backend (/api/companies).
   If the backend is unavailable, the app falls back to the embedded dataset below. */

// API base URL — automatically detects development vs production.
// Development (localhost): connects to the Python backend on port 8000.
// Production (AWS): uses a relative URL so requests go to the same server.
const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:8000'
  : '';

// ===== EMBEDDED DATA =====
const FDA_DATA = {
  yearly_totals: { "2020": 53, "2021": 50, "2022": 37, "2023": 55, "2024": 50, "2025": 46, "2026": 5 },
  approvals: [

  // === 2026 Approvals (YTD through March 2026) ===
  { year:2026, brand_name:"Zycubo", generic_name:"copper histidinate", company:"Sentynl Therapeutics", therapeutic_area:"Rare Disease", indication:"Treatment of Menkes disease in pediatric patients", designations:["Orphan Drug","Breakthrough Therapy"], description:"First subcutaneous copper replacement therapy; delivers copper to bypass impaired intestinal absorption in Menkes disease, a rare genetic neurodegenerative disorder." },
  { year:2026, brand_name:"Adquey", generic_name:"difamilast", company:"Japan Tobacco / Otsuka", therapeutic_area:"Dermatology", indication:"Treatment of mild to moderate atopic dermatitis", designations:[], description:"Non-steroidal topical PDE4 inhibitor for atopic dermatitis; oral PDE4 inhibitor alternative to topical corticosteroids." },
  { year:2026, brand_name:"Bysanti", generic_name:"milsaperidone", company:"Sumitomo Pharma", therapeutic_area:"Neurology/CNS", indication:"Treatment of schizophrenia and manic/mixed episodes of bipolar I disorder", designations:[], description:"Next-generation antipsychotic with multi-receptor pharmacology; once-daily oral treatment for schizophrenia and bipolar mania." },
  { year:2026, brand_name:"Loargys", generic_name:"pegzilarginase-nbln", company:"Immedica Pharma", therapeutic_area:"Rare Disease", indication:"Treatment of hyperarginemia in adults and pediatric patients ≥2 years with Arginase 1 Deficiency", designations:["Orphan Drug","Breakthrough Therapy"], description:"PEGylated recombinant human arginase enzyme replacement therapy; first treatment specifically approved for Arginase 1 Deficiency." },
  { year:2026, brand_name:"Yuviwel", generic_name:"navepegritide", company:"Ascendis Pharma", therapeutic_area:"Rare Disease", indication:"To increase linear growth in pediatric patients ≥2 years with achondroplasia", designations:["Orphan Drug","Breakthrough Therapy","Priority Review"], description:"First once-weekly CNP therapy for achondroplasia; TransCon technology provides sustained C-type natriuretic peptide release to stimulate bone growth." },
    { year:2020, brand_name:"Tepezza", generic_name:"teprotumumab-trbw", company:"Horizon Therapeutics", therapeutic_area:"Ophthalmology / Rare Disease", designations:["Priority Review", "Breakthrough Therapy", "Fast Track", "Orphan Drug"], description:"First and only FDA-approved treatment for thyroid eye disease (TED), a serious progressive autoimmune condition causing proptosis (eye bulging), diplopia, pain, and potential vision loss." },
    { year:2020, brand_name:"Enhertu", generic_name:"fam-trastuzumab deruxtecan-nxki", company:"Daiichi Sankyo / AstraZeneca", therapeutic_area:"Oncology/Breast Cancer", designations:["Priority Review", "Breakthrough Therapy", "Fast Track", "Accelerated Approval"], description:"HER2-directed antibody-drug conjugate (ADC) granted accelerated approval on December 20, 2019 (acting in 2020 landscape) for unresectable or metastatic HER2-positive breast cancer after two or more prior anti-HER2 regimens." },
    { year:2020, brand_name:"Trodelvy", generic_name:"sacituzumab govitecan-hziy", company:"Immunomedics (acquired by Gilead Sciences)", therapeutic_area:"Oncology/Breast Cancer", designations:["Priority Review", "Breakthrough Therapy", "Fast Track", "Accelerated Approval", "Orphan Drug"], description:"First Trop-2-directed antibody-drug conjugate approved by the FDA. Granted accelerated approval on April 22, 2020, for adult patients with metastatic triple-negative breast cancer (mTNBC) who received at least two prior therapies." },
    { year:2020, brand_name:"Sarclisa", generic_name:"isatuximab-irfc", company:"Sanofi", therapeutic_area:"Oncology/Hematology (Multiple Myeloma)", designations:["Orphan Drug"], description:"CD38-directed cytolytic monoclonal antibody approved March 2, 2020, in combination with pomalidomide and dexamethasone for adults with relapsed/refractory multiple myeloma who have received at least t..." },
    { year:2020, brand_name:"Tukysa", generic_name:"tucatinib", company:"Seattle Genetics", therapeutic_area:"Oncology/Breast Cancer", designations:["Priority Review", "Orphan Drug"], description:"Highly selective HER2-targeted tyrosine kinase inhibitor approved April 17, 2020, in combination with trastuzumab and capecitabine for advanced HER2-positive breast cancer including patients with brain metastases." },
    { year:2020, brand_name:"Blenrep", generic_name:"belantamab mafodotin-blmf", company:"GlaxoSmithKline (GSK)", therapeutic_area:"Oncology/Hematology (Multiple Myeloma)", designations:["Priority Review", "Breakthrough Therapy", "Accelerated Approval", "Orphan Drug"], description:"First-in-class BCMA (B-cell maturation antigen)-directed antibody-drug conjugate granted accelerated approval on August 5, 2020, for adults with relapsed/refractory multiple myeloma who received at least four prior therapies." },
    { year:2020, brand_name:"Inqovi", generic_name:"decitabine and cedazuridine", company:"Astex Pharmaceuticals / Taiho Oncology (Otsuka Group)", therapeutic_area:"Oncology/Hematology (Myelodysplastic Syndromes)", designations:["Priority Review", "Orphan Drug"], description:"First and only orally administered hypomethylating agent approved for myelodysplastic syndromes (MDS) and chronic myelomonocytic leukemia (CMML). Approved July 7, 2020." },
    { year:2020, brand_name:"Pemazyre", generic_name:"pemigatinib", company:"Incyte Corporation", therapeutic_area:"Oncology/Cholangiocarcinoma (Bile Duct Cancer)", designations:["Priority Review", "Breakthrough Therapy", "Accelerated Approval", "Orphan Drug"], description:"First targeted therapy ever approved for cholangiocarcinoma (bile duct cancer) and the second approved FGFR-targeted therapy. Granted accelerated approval April 17, 2020, for adults with previously tr..." },
    { year:2020, brand_name:"Retevmo", generic_name:"selpercatinib", company:"Loxo Oncology / Eli Lilly", therapeutic_area:"Oncology/Lung Cancer / Thyroid Cancer", designations:["Priority Review", "Breakthrough Therapy", "Accelerated Approval", "Orphan Drug"], description:"First highly selective RET kinase inhibitor approved by the FDA. Granted accelerated approval May 8, 2020, for three indications: metastatic RET fusion-positive NSCLC, advanced/metastatic RET-mutant m..." },
    { year:2020, brand_name:"Tabrecta", generic_name:"capmatinib", company:"Novartis", therapeutic_area:"Oncology/Lung Cancer", designations:["Priority Review", "Breakthrough Therapy", "Accelerated Approval", "Orphan Drug"], description:"First and only therapy specifically approved by the FDA to treat metastatic NSCLC with MET exon 14 skipping mutations. Granted accelerated approval May 6, 2020." },
    { year:2020, brand_name:"Veklury", generic_name:"remdesivir", company:"Gilead Sciences", therapeutic_area:"Infectious Disease/COVID-19", designations:["Priority Review"], description:"First and only FDA-approved treatment for COVID-19, receiving full approval on October 22, 2020. A broad-spectrum antiviral nucleotide analog that inhibits viral RNA-dependent RNA polymerase." },
    { year:2020, brand_name:"Zokinvy", generic_name:"lonafarnib", company:"Eiger BioPharmaceuticals", therapeutic_area:"Rare Disease/Premature Aging (Progeria)", designations:["Priority Review", "Orphan Drug"], description:"First and only approved treatment for Hutchinson-Gilford Progeria Syndrome (HGPS) and processing-deficient progeroid laminopathies. Approved November 20, 2020." },
    { year:2020, brand_name:"Uplizna", generic_name:"inebilizumab-cdon", company:"Viela Bio (subsequently acquired by Horizon Therapeutics)", therapeutic_area:"Neurology/Neuromyelitis Optica Spectrum Disorder", designations:["Breakthrough Therapy", "Orphan Drug"], description:"First and only B-cell depleter (CD19-directed monoclonal antibody) approved for neuromyelitis optica spectrum disorder (NMOSD) in anti-AQP4 antibody-positive adult patients." },
    { year:2020, brand_name:"Monjuvi", generic_name:"tafasitamab-cxix", company:"MorphoSys US / Incyte", therapeutic_area:"Oncology/Hematology (Diffuse Large B-Cell Lymphoma)", designations:["Priority Review", "Breakthrough Therapy", "Fast Track", "Accelerated Approval", "Orphan Drug"], description:"CD19-directed cytolytic antibody granted accelerated approval July 31, 2020, in combination with lenalidomide for adults with relapsed/refractory diffuse large B-cell lymphoma (DLBCL) not eligible for autologous stem cell transplant." },
    { year:2020, brand_name:"Margenza", generic_name:"margetuximab-cmkb", company:"MacroGenics", therapeutic_area:"Oncology/Breast Cancer", designations:["Fast Track"], description:"Fc-engineered anti-HER2 monoclonal antibody approved December 16, 2020, in combination with chemotherapy for adult patients with metastatic HER2-positive breast cancer who received two or more prior anti-HER2 regimens." },
    { year:2020, brand_name:"Oxlumo", generic_name:"lumasiran", company:"Alnylam Pharmaceuticals", therapeutic_area:"Rare Disease/Primary Hyperoxaluria", designations:["Priority Review", "Breakthrough Therapy", "Orphan Drug"], description:"First and only treatment approved to lower urinary oxalate in primary hyperoxaluria type 1 (PH1), a rare life-threatening genetic disorder causing kidney stones, nephrocalcinosis, and renal failure." },
    { year:2020, brand_name:"Evrysdi", generic_name:"risdiplam", company:"Genentech / Roche (in collaboration with SMA Foundation and PTC Therapeutics)", therapeutic_area:"Neurology/Spinal Muscular Atrophy", designations:["Priority Review", "Breakthrough Therapy", "Orphan Drug"], description:"First oral, at-home treatment for spinal muscular atrophy (SMA) approved August 7, 2020. Risdiplam is an SMN2 splicing modifier that increases production of functional survival motor neuron (SMN) protein across all SMA types." },
    { year:2020, brand_name:"Danyelza", generic_name:"naxitamab-gqgk", company:"Y-mAbs Therapeutics", therapeutic_area:"Oncology/Pediatric Neuroblastoma", designations:["Priority Review", "Breakthrough Therapy", "Accelerated Approval", "Orphan Drug"], description:"GD2-binding monoclonal antibody granted accelerated approval November 25, 2020, in combination with GM-CSF for pediatric patients (≥1 year) and adults with relapsed/refractory high-risk neuroblastoma in the bone or bone marrow." },
    { year:2020, brand_name:"Tazverik", generic_name:"tazemetostat", company:"Epizyme", therapeutic_area:"Oncology/Sarcoma / Lymphoma", designations:["Priority Review", "Accelerated Approval", "Orphan Drug"], description:"First-in-class EZH2 methyltransferase inhibitor, granted accelerated approval January 23, 2020, for adults and pediatric patients (≥16 years) with metastatic or locally advanced epithelioid sarcoma not eligible for complete resection." },
    { year:2020, brand_name:"Koselugo", generic_name:"selumetinib", company:"AstraZeneca / Alexion", therapeutic_area:"Rare Disease/Neurofibromatosis Type 1", designations:["Priority Review", "Breakthrough Therapy", "Orphan Drug"], description:"First FDA-approved treatment for neurofibromatosis type 1 (NF1)-related plexiform neurofibromas, approved April 10, 2020, for pediatric patients 2 years and older with symptomatic, inoperable plexiform neurofibromas." },
    { year:2020, brand_name:"Orgovyx", generic_name:"relugolix", company:"Myovant Sciences", therapeutic_area:"Oncology/Prostate Cancer", designations:["Priority Review"], description:"First oral gonadotropin-releasing hormone (GnRH) receptor antagonist approved for advanced prostate cancer, and the first oral androgen-deprivation therapy (ADT) in its class." },
    { year:2020, brand_name:"Ayvakit", generic_name:"avapritinib", company:"Blueprint Medicines", therapeutic_area:"Oncology/Gastrointestinal Stromal Tumor (GIST)", designations:["Priority Review", "Breakthrough Therapy", "Accelerated Approval", "Orphan Drug"], description:"Potent and selective KIT/PDGFRA kinase inhibitor granted accelerated approval January 9, 2020, for adults with unresectable or metastatic GIST harboring PDGFRA exon 18 mutations, including the most common D842V mutation." },
    { year:2020, brand_name:"Rukobia", generic_name:"fostemsavir", company:"ViiV Healthcare", therapeutic_area:"Infectious Disease/HIV", designations:["Priority Review", "Breakthrough Therapy"], description:"First-in-class HIV attachment inhibitor approved July 2, 2020, for heavily treatment-experienced adults with multidrug-resistant HIV-1 infection failing their current antiretroviral regimen." },
    { year:2020, brand_name:"Gavreto", generic_name:"pralsetinib", company:"Blueprint Medicines", therapeutic_area:"Oncology/Lung Cancer / Thyroid Cancer", designations:["Priority Review", "Breakthrough Therapy", "Accelerated Approval", "Orphan Drug"], description:"Second highly selective RET kinase inhibitor approved by the FDA (after selpercatinib), granted accelerated approval September 4, 2020, for adult patients with metastatic RET fusion-positive NSCLC." },
    { year:2021, brand_name:"Verquvo", generic_name:"vericiguat", company:"Bayer/Merck", therapeutic_area:"Cardiology", designations:["Priority Review","Fast Track"], description:"Treats chronic heart failure with reduced ejection fraction to reduce risk of cardiovascular death and heart failure hospitalization." },
    { year:2021, brand_name:"Cabenuva", generic_name:"cabotegravir and rilpivirine", company:"ViiV Healthcare/Janssen", therapeutic_area:"Infectious Disease", designations:["Priority Review","Breakthrough Therapy"], description:"First complete long-acting injectable HIV treatment regimen for adults virologically stable on current antiretroviral therapy." },
    { year:2021, brand_name:"Lupkynis", generic_name:"voclosporin", company:"Aurinia Pharmaceuticals", therapeutic_area:"Rheumatology/Nephrology", designations:["Priority Review","Fast Track"], description:"First oral calcineurin inhibitor approved specifically to treat lupus nephritis in adults." },
    { year:2021, brand_name:"Amondys 45", generic_name:"casimersen", company:"Sarepta Therapeutics", therapeutic_area:"Rare Disease/Neurology", designations:["Priority Review","Accelerated Approval","Fast Track","Orphan Drug"], description:"Antisense oligonucleotide for Duchenne muscular dystrophy in patients with mutations amenable to exon 45 skipping." },
    { year:2021, brand_name:"Evkeeza", generic_name:"evinacumab-dgnb", company:"Regeneron", therapeutic_area:"Cardiology/Rare Disease", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First ANGPTL3 inhibitor for homozygous familial hypercholesterolemia." },
    { year:2021, brand_name:"Tepmetko", generic_name:"tepotinib", company:"EMD Serono", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy"], description:"First MET kinase inhibitor for metastatic NSCLC with METex14 skipping alterations." },
    { year:2021, brand_name:"Cosela", generic_name:"trilaciclib", company:"G1 Therapeutics", therapeutic_area:"Oncology/Supportive Care", designations:["Priority Review"], description:"First myeloprotection agent for chemotherapy-induced myelosuppression in small cell lung cancer." },
    { year:2021, brand_name:"Nulibry", generic_name:"fosdenopterin", company:"BioMarin", therapeutic_area:"Rare Disease/Metabolic", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Orphan Drug"], description:"First treatment for molybdenum cofactor deficiency Type A." },
    { year:2021, brand_name:"Lumakras", generic_name:"sotorasib", company:"Amgen", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Fast Track"], description:"First KRAS G12C inhibitor for KRAS G12C-mutated locally advanced or metastatic NSCLC." },
    { year:2021, brand_name:"Rybrevant", generic_name:"amivantamab-vmjw", company:"Janssen Biotech", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy"], description:"First EGFR-MET bispecific antibody for NSCLC with EGFR exon 20 insertion mutations." },
    { year:2021, brand_name:"Jemperli", generic_name:"dostarlimab-gxly", company:"GlaxoSmithKline", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy"], description:"PD-1 blocking antibody for recurrent or advanced endometrial cancer with mismatch repair deficiency." },
    { year:2021, brand_name:"Aduhelm", generic_name:"aducanumab-avwa", company:"Biogen", therapeutic_area:"Neurology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Fast Track"], description:"First anti-amyloid antibody for Alzheimer's disease targeting amyloid beta plaques." },
    { year:2021, brand_name:"Kerendia", generic_name:"finerenone", company:"Bayer", therapeutic_area:"Nephrology/Cardiology", designations:["Priority Review"], description:"Non-steroidal mineralocorticoid receptor antagonist for CKD associated with type 2 diabetes." },
    { year:2021, brand_name:"Saphnelo", generic_name:"anifrolumab-fnia", company:"AstraZeneca", therapeutic_area:"Rheumatology", designations:["Priority Review"], description:"First type I interferon receptor antagonist for moderate-to-severe systemic lupus erythematosus." },
    { year:2021, brand_name:"Welireg", generic_name:"belzutifan", company:"Merck", therapeutic_area:"Oncology/Rare Disease", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First HIF-2 alpha inhibitor for Von Hippel-Lindau disease-associated cancers." },
    { year:2021, brand_name:"Scemblix", generic_name:"asciminib", company:"Novartis", therapeutic_area:"Oncology", designations:["Priority Review","Breakthrough Therapy"], description:"First STAMP inhibitor for Philadelphia chromosome-positive chronic myeloid leukemia." },
    { year:2021, brand_name:"Vyvgart", generic_name:"efgartigimod alfa-fcab", company:"argenx", therapeutic_area:"Neurology/Rare Disease", designations:["Priority Review","Breakthrough Therapy","Fast Track"], description:"First FcRn antagonist for generalized myasthenia gravis in anti-AChR antibody positive adults." },
    { year:2021, brand_name:"Leqvio", generic_name:"inclisiran", company:"Novartis", therapeutic_area:"Cardiology", designations:["Priority Review"], description:"First siRNA therapy targeting PCSK9 given twice yearly for hypercholesterolemia." },
    { year:2021, brand_name:"Tezspire", generic_name:"tezepelumab-ekko", company:"AstraZeneca/Amgen", therapeutic_area:"Pulmonology", designations:["Priority Review","Breakthrough Therapy"], description:"First anti-TSLP biologic for severe asthma with no biomarker restriction." },
    { year:2022, brand_name:"Quviviq", generic_name:"daridorexant", company:"Idorsia", therapeutic_area:"Neurology/Sleep", designations:["Priority Review"], description:"Dual orexin receptor antagonist for chronic insomnia disorder." },
    { year:2022, brand_name:"Kimmtrak", generic_name:"tebentafusp-tebn", company:"Immunocore", therapeutic_area:"Oncology", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First TCR bispecific therapy for unresectable or metastatic uveal melanoma." },
    { year:2022, brand_name:"Enjaymo", generic_name:"sutimlimab-jome", company:"Sanofi", therapeutic_area:"Hematology/Rare Disease", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First C1s complement inhibitor for cold agglutinin disease." },
    { year:2022, brand_name:"Camzyos", generic_name:"mavacamten", company:"Bristol-Myers Squibb", therapeutic_area:"Cardiology", designations:["Priority Review","Breakthrough Therapy"], description:"First cardiac myosin inhibitor for symptomatic obstructive hypertrophic cardiomyopathy." },
    { year:2022, brand_name:"Mounjaro", generic_name:"tirzepatide", company:"Eli Lilly", therapeutic_area:"Endocrinology/Metabolic", designations:["Priority Review"], description:"First dual GIP/GLP-1 receptor agonist for type 2 diabetes glycemic control." },
    { year:2022, brand_name:"Pluvicto", generic_name:"lutetium (177Lu) vipivotide tetraxetan", company:"Novartis", therapeutic_area:"Oncology", designations:["Priority Review","Breakthrough Therapy"], description:"First targeted radioligand therapy for PSMA-positive metastatic castration-resistant prostate cancer." },
    { year:2022, brand_name:"Opdualag", generic_name:"nivolumab and relatlimab-rmbw", company:"Bristol-Myers Squibb", therapeutic_area:"Oncology", designations:["Priority Review","Fast Track"], description:"First LAG-3 blocking antibody plus PD-1 inhibitor combination for unresectable or metastatic melanoma." },
    { year:2022, brand_name:"Tzield", generic_name:"teplizumab-mzwv", company:"Provention Bio/Sanofi", therapeutic_area:"Endocrinology/Rare Disease", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First disease-modifying therapy to delay onset of Stage 3 type 1 diabetes." },
    { year:2022, brand_name:"Krazati", generic_name:"adagrasib", company:"Mirati Therapeutics", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Fast Track"], description:"KRAS G12C inhibitor for KRAS G12C-mutated NSCLC after prior systemic therapy." },
    { year:2022, brand_name:"Relyvrio", generic_name:"sodium phenylbutyrate/taurursodiol", company:"Amylyx", therapeutic_area:"Neurology", designations:["Priority Review","Fast Track"], description:"Combination treatment for ALS to slow functional decline." },
    { year:2022, brand_name:"Sunlenca", generic_name:"lenacapavir", company:"Gilead Sciences", therapeutic_area:"Infectious Disease", designations:["Priority Review","Breakthrough Therapy","Fast Track"], description:"First capsid inhibitor given twice-yearly for multidrug-resistant HIV." },
    { year:2022, brand_name:"Sotyktu", generic_name:"deucravacitinib", company:"Bristol-Myers Squibb", therapeutic_area:"Dermatology/Immunology", designations:["Priority Review"], description:"First oral TYK2 inhibitor for moderate-to-severe plaque psoriasis." },
    { year:2022, brand_name:"Tecvayli", generic_name:"teclistamab-cqyv", company:"Janssen Biotech", therapeutic_area:"Oncology/Hematology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Orphan Drug"], description:"First BCMA-targeting bispecific antibody for relapsed or refractory multiple myeloma." },
    { year:2022, brand_name:"Elahere", generic_name:"mirvetuximab soravtansine-gynx", company:"ImmunoGen", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Fast Track"], description:"First folate receptor alpha-targeting ADC for platinum-resistant ovarian cancer." },
    { year:2022, brand_name:"Amvuttra", generic_name:"vutrisiran", company:"Alnylam", therapeutic_area:"Rare Disease/Neurology", designations:["Priority Review","Fast Track","Orphan Drug"], description:"RNAi therapeutic for hereditary transthyretin-mediated amyloidosis polyneuropathy." },
    { year:2022, brand_name:"Xenpozyme", generic_name:"olipudase alfa-rpcp", company:"Sanofi", therapeutic_area:"Rare Disease/Metabolic", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First enzyme replacement therapy for acid sphingomyelinase deficiency (Niemann-Pick disease)." },
    { year:2023, brand_name:"Leqembi", generic_name:"lecanemab-irmb", company:"Eisai/Biogen", therapeutic_area:"Neurology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Fast Track"], description:"Anti-amyloid beta antibody for early Alzheimer's disease." },
    { year:2023, brand_name:"Skyclarys", generic_name:"omaveloxolone", company:"Reata Pharmaceuticals", therapeutic_area:"Rare Disease/Neurology", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First drug approved for Friedreich's ataxia." },
    { year:2023, brand_name:"Daybue", generic_name:"trofinetide", company:"Acadia Pharmaceuticals", therapeutic_area:"Rare Disease/Neurology", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First drug approved for Rett syndrome." },
    { year:2023, brand_name:"Qalsody", generic_name:"tofersen", company:"Biogen", therapeutic_area:"Rare Disease/Neurology", designations:["Priority Review","Accelerated Approval","Fast Track","Orphan Drug"], description:"First ALS treatment targeting a specific genetic mutation (SOD1)." },
    { year:2023, brand_name:"Jaypirca", generic_name:"pirtobrutinib", company:"Eli Lilly", therapeutic_area:"Oncology/Hematology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy"], description:"Non-covalent BTK inhibitor for relapsed or refractory mantle cell lymphoma." },
    { year:2023, brand_name:"Zurzuvae", generic_name:"zuranolone", company:"Sage Therapeutics/Biogen", therapeutic_area:"Psychiatry", designations:["Priority Review","Breakthrough Therapy"], description:"First oral neuroactive steroid for postpartum depression." },
    { year:2023, brand_name:"Beyfortus", generic_name:"nirsevimab-alip", company:"AstraZeneca/Sanofi", therapeutic_area:"Infectious Disease/Pediatrics", designations:["Priority Review","Breakthrough Therapy"], description:"Long-acting anti-RSV monoclonal antibody for RSV prevention in neonates and infants." },
    { year:2023, brand_name:"Paxlovid", generic_name:"nirmatrelvir/ritonavir", company:"Pfizer", therapeutic_area:"Infectious Disease", designations:["Priority Review","Breakthrough Therapy"], description:"First oral antiviral for mild-to-moderate COVID-19 in high-risk adults (full approval)." },
    { year:2023, brand_name:"Ojjaara", generic_name:"momelotinib", company:"Sierra Oncology/GSK", therapeutic_area:"Oncology/Hematology", designations:["Priority Review"], description:"JAK1/2 and ACVR1 inhibitor for myelofibrosis in adults with anemia." },
    { year:2023, brand_name:"Elrexfio", generic_name:"elranatamab-bcmm", company:"Pfizer", therapeutic_area:"Oncology/Hematology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Orphan Drug"], description:"BCMA x CD3 bispecific antibody for relapsed or refractory multiple myeloma." },
    { year:2023, brand_name:"Talvey", generic_name:"talquetamab-tgvs", company:"Janssen Biotech", therapeutic_area:"Oncology/Hematology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Orphan Drug"], description:"First GPRC5D x CD3 bispecific T-cell engager for relapsed or refractory multiple myeloma." },
    { year:2023, brand_name:"Augtyro", generic_name:"repotrectinib", company:"Bristol-Myers Squibb", therapeutic_area:"Oncology", designations:["Priority Review","Breakthrough Therapy"], description:"Next-generation ROS1/TRK inhibitor for ROS1-positive NSCLC." },
    { year:2023, brand_name:"Truqap", generic_name:"capivasertib", company:"AstraZeneca", therapeutic_area:"Oncology", designations:["Priority Review","Breakthrough Therapy"], description:"AKT kinase inhibitor combined with fulvestrant for HR+/HER2- breast cancer with specific alterations." },
    { year:2023, brand_name:"Wainua", generic_name:"eplontersen", company:"AstraZeneca/Ionis", therapeutic_area:"Rare Disease/Neurology", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"GalNAc-conjugated antisense oligonucleotide for hereditary transthyretin-mediated amyloidosis." },
    { year:2024, brand_name:"Rezdiffra", generic_name:"resmetirom", company:"Madrigal Pharmaceuticals", therapeutic_area:"Gastroenterology/Hepatology", designations:["Priority Review","Breakthrough Therapy","Fast Track"], description:"First drug approved for NASH/MASH with moderate to advanced liver fibrosis." },
    { year:2024, brand_name:"Winrevair", generic_name:"sotatercept-csrk", company:"Acceleron Pharma/Merck", therapeutic_area:"Cardiology/Rare Disease", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"First activin signaling inhibitor for pulmonary arterial hypertension." },
    { year:2024, brand_name:"Kisunla", generic_name:"donanemab-azbt", company:"Eli Lilly", therapeutic_area:"Neurology", designations:["Priority Review","Breakthrough Therapy","Fast Track"], description:"Anti-amyloid beta antibody for early symptomatic Alzheimer's disease." },
    { year:2024, brand_name:"Cobenfy", generic_name:"xanomeline and trospium chloride", company:"Bristol-Myers Squibb", therapeutic_area:"Psychiatry", designations:["Priority Review","Breakthrough Therapy"], description:"First muscarinic receptor agonist combination for schizophrenia — first new mechanism in decades." },
    { year:2024, brand_name:"Imdelltra", generic_name:"tarlatamab-dlle", company:"Amgen", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy"], description:"First DLL3-targeting BiTE for extensive-stage small cell lung cancer." },
    { year:2024, brand_name:"Voranigo", generic_name:"vorasidenib", company:"Servier", therapeutic_area:"Oncology/Neurology", designations:["Priority Review","Breakthrough Therapy"], description:"First oral IDH1/IDH2 inhibitor for Grade 2 IDH-mutated astrocytoma or oligodendroglioma." },
    { year:2024, brand_name:"Revuforj", generic_name:"revumenib", company:"Syndax Pharmaceuticals", therapeutic_area:"Oncology/Hematology", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Orphan Drug"], description:"First menin inhibitor for relapsed or refractory acute leukemia with KMT2A translocation." },
    { year:2024, brand_name:"Attruby", generic_name:"acoramidis", company:"BridgeBio Pharma", therapeutic_area:"Cardiology/Rare Disease", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"TTR stabilizer for cardiomyopathy of transthyretin-mediated amyloidosis." },
    { year:2024, brand_name:"Ohtuvayre", generic_name:"ensifentrine", company:"Verona Pharma", therapeutic_area:"Pulmonology", designations:["Priority Review"], description:"First inhaled dual PDE3/PDE4 inhibitor for COPD maintenance — first new bronchodilator class in ~20 years." },
    { year:2024, brand_name:"Duvyzat", generic_name:"givinostat", company:"ITF Therapeutics/Chiesi", therapeutic_area:"Rare Disease/Neurology", designations:["Priority Review","Orphan Drug"], description:"First HDAC inhibitor for Duchenne muscular dystrophy." },
    { year:2024, brand_name:"Ojemda", generic_name:"tovorafenib", company:"Day One Biopharmaceuticals", therapeutic_area:"Oncology/Pediatric", designations:["Priority Review","Accelerated Approval","Breakthrough Therapy","Orphan Drug"], description:"First oral pan-RAF inhibitor for BRAF-altered pediatric low-grade glioma." },
    { year:2024, brand_name:"Livdelzi", generic_name:"seladelpar", company:"Gilead Sciences", therapeutic_area:"Gastroenterology/Hepatology", designations:["Priority Review","Breakthrough Therapy","Fast Track"], description:"PPAR-delta agonist for primary biliary cholangitis." },
    { year:2024, brand_name:"Alyftrek", generic_name:"vanzacaftor/tezacaftor/deutivacaftor", company:"Vertex Pharmaceuticals", therapeutic_area:"Rare Disease/Pulmonology", designations:["Priority Review","Breakthrough Therapy","Orphan Drug"], description:"Triple CFTR modulator for cystic fibrosis with once-daily dosing." },
    { year:2025, brand_name:"Journavx", generic_name:"suzetrigine", company:"Vertex Pharmaceuticals", therapeutic_area:"Pain/Neurology", designations:["Priority Review"], description:"First NaV1.8 sodium channel blocker — first new non-opioid analgesic mechanism in over 20 years." },
    { year:2025, brand_name:"Gomekli", generic_name:"mirdametinib", company:"SpringWorks/Merck KGaA", therapeutic_area:"Oncology/Rare Disease", designations:["Priority Review","Orphan Drug"], description:"MEK1/2 kinase inhibitor for neurofibromatosis type 1 with symptomatic plexiform neurofibromas." },
    { year:2025, brand_name:"Datroway", generic_name:"datopotamab deruxtecan", company:"Daiichi Sankyo", therapeutic_area:"Oncology", designations:["Priority Review"], description:"TROP2-targeting ADC for HR+/HER2- metastatic breast cancer." },
    { year:2025, brand_name:"Brinsupri", generic_name:"brensocatib", company:"Insmed", therapeutic_area:"Pulmonology", designations:["Priority Review"], description:"First oral DPP1 inhibitor for non-cystic fibrosis bronchiectasis." },
    { year:2025, brand_name:"Imaavy", generic_name:"nipocalimab-aahu", company:"Janssen/J&J", therapeutic_area:"Neurology/Rare Disease", designations:["Priority Review","Orphan Drug"], description:"FcRn-blocking antibody for generalized myasthenia gravis." },
    { year:2025, brand_name:"Emrelis", generic_name:"telisotuzumab vedotin", company:"AbbVie", therapeutic_area:"Oncology", designations:["Priority Review"], description:"First c-Met-targeting ADC for non-squamous NSCLC with high c-Met overexpression." },
    { year:2025, brand_name:"Lynozyfic", generic_name:"linvoseltamab-gcpt", company:"Regeneron", therapeutic_area:"Oncology/Hematology", designations:["Priority Review","Accelerated Approval","Orphan Drug"], description:"BCMA x CD3 bispecific antibody for relapsed or refractory multiple myeloma." },
    { year:2025, brand_name:"Myqorzo", generic_name:"aficamten", company:"Cytokinetics", therapeutic_area:"Cardiology", designations:["Orphan Drug"], description:"Cardiac myosin inhibitor for symptomatic obstructive hypertrophic cardiomyopathy." },
    { year:2025, brand_name:"Hernexeos", generic_name:"zongertinib", company:"Boehringer Ingelheim", therapeutic_area:"Oncology", designations:["Priority Review"], description:"HER2 TKI for non-squamous NSCLC with HER2 tyrosine kinase domain activating mutations." },
    { year:2025, brand_name:"Modeyso", generic_name:"dordaviprone", company:"Chimerix/Jazz", therapeutic_area:"Oncology/Neurology", designations:["Priority Review","Orphan Drug"], description:"First treatment for diffuse midline glioma with H3 K27M mutation." },
    { year:2025, brand_name:"Keytruda Qlex", generic_name:"pembrolizumab/berahyaluronidase alfa", company:"Merck", therapeutic_area:"Oncology", designations:["Priority Review"], description:"Subcutaneous pembrolizumab co-formulated with hyaluronidase for multiple solid tumor indications." },
    { year:2025, brand_name:"Andembry", generic_name:"garadacimab-gxii", company:"CSL Behring", therapeutic_area:"Rare Disease/Immunology", designations:["Orphan Drug"], description:"Anti-activated factor XII antibody for hereditary angioedema prophylaxis." },
    { year:2025, brand_name:"Avmapki Fakzynja", generic_name:"avutometinib and defactinib", company:"Verastem", therapeutic_area:"Oncology", designations:["Priority Review","Accelerated Approval","Orphan Drug"], description:"First MEK+FAK inhibitor combination for KRAS-mutated recurrent low-grade serous ovarian cancer." },
    { year:2025, brand_name:"Vanrafia", generic_name:"atrasentan", company:"Novartis", therapeutic_area:"Nephrology", designations:["Priority Review"], description:"Endothelin A receptor antagonist to reduce proteinuria in IgA nephropathy." }
  ]
};

const PIPELINE_DATA = [
  { drug_name:"CagriSema", company:"Novo Nordisk", phase:"Phase 3", therapeutic_area:"Metabolic / Obesity", indication:"Obesity and Type 2 Diabetes", expected_fda_date:"H2 2026", mechanism:"Dual GLP-1/amylin receptor agonist combination", market_sentiment:"Mixed", sentiment_reason:"Failed non-inferiority vs Zepbound in head-to-head trial; still projects $17.2B in 2032 sales." },
  { drug_name:"Orforglipron", company:"Eli Lilly", phase:"Phase 3", therapeutic_area:"Metabolic / Obesity", indication:"Obesity / Overweight; Type 2 Diabetes", expected_fda_date:"Apr 10, 2026", mechanism:"First oral non-peptide GLP-1 receptor agonist", market_sentiment:"Positive", sentiment_reason:"Strong Phase 3 data; Priority Voucher for accelerated review." },
  { drug_name:"Anito-cel", company:"Gilead/Arcellx", phase:"Phase 2", therapeutic_area:"Oncology / Hematology", indication:"Relapsed/Refractory Multiple Myeloma", expected_fda_date:"Dec 23, 2026", mechanism:"BCMA-targeted CAR-T cell therapy", market_sentiment:"Positive", sentiment_reason:"Best-in-class efficacy with 84% ORR in pivotal iMMagine-1." },
  { drug_name:"Brepocitinib", company:"Priovant Therapeutics", phase:"Phase 3", therapeutic_area:"Immunology / Autoimmune", indication:"Non-segmental Vitiligo", expected_fda_date:"Sep 2026", mechanism:"Dual TYK2/JAK1 inhibitor", market_sentiment:"Positive", sentiment_reason:"First oral therapy for vitiligo; addresses unmet need." },
  { drug_name:"Icotrokinra", company:"Johnson & Johnson", phase:"Phase 3", therapeutic_area:"Immunology / Dermatology", indication:"Moderate-to-Severe Plaque Psoriasis", expected_fda_date:"Mid-2026", mechanism:"Oral peptide IL-23 receptor antagonist", market_sentiment:"Positive", sentiment_reason:"Impressive efficacy challenging injectable biologics with oral convenience." },
  { drug_name:"Gedatolisib", company:"Celcuity/Pfizer", phase:"Phase 3", therapeutic_area:"Oncology / Breast Cancer", indication:"HR+/HER2- Advanced Breast Cancer", expected_fda_date:"Jul 17, 2026", mechanism:"Pan-PI3K/mTOR inhibitor", market_sentiment:"Positive", sentiment_reason:"Highly significant survival data in VIKTORIA-1 trial." },
  { drug_name:"Ulixacaltamide", company:"Praxis Precision Medicines", phase:"Phase 3", therapeutic_area:"Neurology", indication:"Essential Tremor", expected_fda_date:"Q4 2026", mechanism:"Selective T-type calcium channel blocker", market_sentiment:"Positive", sentiment_reason:"Significant tremor reduction; first novel mechanism for essential tremor in decades." },
  { drug_name:"Baxdrostat", company:"AstraZeneca", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Resistant Hypertension", expected_fda_date:"Q2 2026", mechanism:"Aldosterone synthase inhibitor", market_sentiment:"Positive", sentiment_reason:"$1.3B acquisition; Priority Review for resistant hypertension." },
  { drug_name:"Camizestrant", company:"AstraZeneca", phase:"Phase 3", therapeutic_area:"Oncology / Breast Cancer", indication:"ER+/HER2- Breast Cancer", expected_fda_date:"Mid-2026", mechanism:"Next-gen oral SERD (selective estrogen receptor degrader)", market_sentiment:"Mixed", sentiment_reason:"ODAC meeting set for April 30 with uncertain outcome." },
  { drug_name:"Atacicept", company:"Vera Therapeutics", phase:"Phase 3", therapeutic_area:"Nephrology / Immunology", indication:"IgA Nephropathy", expected_fda_date:"Jul 7, 2026", mechanism:"TACI-Fc fusion protein (BLyS/APRIL dual inhibitor)", market_sentiment:"Positive", sentiment_reason:"Breakthrough Therapy + Priority Review; strong proteinuria reduction." },
  { drug_name:"Oveporexton", company:"Takeda", phase:"Phase 3", therapeutic_area:"Neurology / Sleep", indication:"Narcolepsy Type 1", expected_fda_date:"Q3 2026", mechanism:"Oral orexin receptor 2 agonist", market_sentiment:"Positive", sentiment_reason:"Breakthrough Therapy + Priority Review; addresses root cause of narcolepsy." },
  { drug_name:"Rusfertide", company:"Takeda", phase:"Phase 3", therapeutic_area:"Hematology / Rare Disease", indication:"Polycythemia Vera", expected_fda_date:"Q3 2026", mechanism:"Hepcidin mimetic peptide", market_sentiment:"Positive", sentiment_reason:"First hepcidin mimetic; Priority Review + Breakthrough + Orphan designations." },
  { drug_name:"Vepdegestrant", company:"Arvinas/Pfizer", phase:"Phase 3", therapeutic_area:"Oncology / Breast Cancer", indication:"ER+/HER2- Breast Cancer", expected_fda_date:"Jun 5, 2026", mechanism:"Oral PROTAC estrogen receptor degrader", market_sentiment:"Mixed", sentiment_reason:"First PROTAC in regulatory review; mixed Phase 3 results vs. expectations." },
  { drug_name:"Iberdomide", company:"Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Oncology / Hematology", indication:"Relapsed/Refractory Multiple Myeloma", expected_fda_date:"Aug 17, 2026", mechanism:"CELMoD (cereblon E3 ligase modulator)", market_sentiment:"Positive", sentiment_reason:"Breakthrough Therapy + Priority Review; novel mechanism of action." },
  { drug_name:"Ivonescimab", company:"Summit/Akeso", phase:"Phase 3", therapeutic_area:"Oncology / Lung Cancer", indication:"PD-L1+ Non-Small Cell Lung Cancer", expected_fda_date:"Nov 14, 2026", mechanism:"Bispecific anti-PD-1/VEGF antibody", market_sentiment:"Positive", sentiment_reason:"Impressive PFS in HARMONi trial; potential Keytruda disruptor." },
  { drug_name:"Sonrotoclax", company:"BeOne Medicines", phase:"Phase 2", therapeutic_area:"Oncology / Hematology", indication:"Chronic Lymphocytic Leukemia", expected_fda_date:"Apr-May 2026", mechanism:"Next-gen BCL-2 inhibitor", market_sentiment:"Mixed", sentiment_reason:"Improved selectivity over venetoclax but limited data vs. competitors." },
  { drug_name:"Vyvgart (sero-neg gMG)", company:"argenx", phase:"Phase 3", therapeutic_area:"Neurology / Immunology", indication:"Seronegative Generalized Myasthenia Gravis", expected_fda_date:"May 10, 2026", mechanism:"Neonatal Fc receptor (FcRn) blocker", market_sentiment:"Positive", sentiment_reason:"Label expansion into underserved seronegative gMG population." },
  { drug_name:"Cytisinicline", company:"Achieve Life Sciences", phase:"Phase 3", therapeutic_area:"Addiction / CNS", indication:"Smoking Cessation", expected_fda_date:"Jun 20, 2026", mechanism:"Partial nicotinic acetylcholine receptor agonist", market_sentiment:"Positive", sentiment_reason:"Plant-based alternative to Chantix with favorable safety profile." },
  { drug_name:"Orca-T", company:"Orca Bio", phase:"Phase 3", therapeutic_area:"Oncology / Hematology", indication:"Hematologic Malignancies (allo-HCT)", expected_fda_date:"Apr 6, 2026", mechanism:"Allogeneic T-cell immunotherapy (high-precision cell therapy)", market_sentiment:"Positive", sentiment_reason:"RMAT + Priority Review + Orphan Drug; reduced GVHD rates." },
  { drug_name:"Linerixibat", company:"GSK", phase:"Phase 3", therapeutic_area:"Hepatology / Rare Disease", indication:"Cholestatic Pruritus in PBC", expected_fda_date:"Mar 24, 2026", mechanism:"Ileal bile acid transporter (IBAT) inhibitor", market_sentiment:"Positive", sentiment_reason:"Orphan Drug; first-in-class for cholestatic pruritus." },
  { drug_name:"Zidesamtinib", company:"Nuvalent", phase:"Phase 2", therapeutic_area:"Oncology / Lung Cancer", indication:"ROS1+ NSCLC", expected_fda_date:"Sep 18, 2026", mechanism:"Selective ROS1 inhibitor (brain-penetrant)", market_sentiment:"Positive", sentiment_reason:"Breakthrough Therapy Designation; high ORR with CNS activity." },
  { drug_name:"Vusolimogene oderparepvec", company:"Replimune", phase:"Phase 2", therapeutic_area:"Oncology / Melanoma", indication:"Advanced Melanoma", expected_fda_date:"Apr 10, 2026", mechanism:"Oncolytic HSV-1 immunotherapy", market_sentiment:"Mixed", sentiment_reason:"Resubmission after July 2025 CRL; regulatory uncertainty." },
  { drug_name:"DB-OTO", company:"Regeneron", phase:"Phase 1/2", therapeutic_area:"Rare Disease / Gene Therapy", indication:"Congenital Hearing Loss (OTOF)", expected_fda_date:"H1 2026", mechanism:"AAV gene therapy delivering functional otoferlin", market_sentiment:"Positive", sentiment_reason:"Five FDA designations; hearing restoration in congenital deafness." },
  { drug_name:"Lorundrostat", company:"Mineralys Therapeutics", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Uncontrolled/Resistant Hypertension", expected_fda_date:"2026", mechanism:"Aldosterone synthase inhibitor", market_sentiment:"Positive", sentiment_reason:"Strong blood pressure reduction data; competing with baxdrostat." },
  { drug_name:"Veligrotug", company:"Viridian Therapeutics", phase:"Phase 3", therapeutic_area:"Ophthalmology / Immunology", indication:"Thyroid Eye Disease", expected_fda_date:"Jun 30, 2026", mechanism:"Anti-IGF-1R antibody", market_sentiment:"Positive", sentiment_reason:"Potential Tepezza competitor with subcutaneous convenience." },
  { drug_name:"Tividenofusp alfa", company:"Denali Therapeutics", phase:"Phase 2/3", therapeutic_area:"Rare Disease / Neurology", indication:"Hunter Syndrome (MPS II)", expected_fda_date:"Apr 5, 2026", mechanism:"BBB-crossing enzyme replacement (TfR1-mediated transport)", market_sentiment:"Positive", sentiment_reason:"RMAT + Fast Track + Orphan Drug; first CNS-penetrating ERT for MPS II." },
  { drug_name:"Sparsentan (FSGS)", company:"Travere Therapeutics", phase:"Phase 3", therapeutic_area:"Nephrology / Rare Disease", indication:"Focal Segmental Glomerulosclerosis", expected_fda_date:"Apr 13, 2026", mechanism:"Dual endothelin/angiotensin receptor antagonist", market_sentiment:"Positive", sentiment_reason:"sNDA for FSGS; already approved for IgAN as Filspari." },
  { drug_name:"Navepegritide alfa", company:"Ascendis Pharma", phase:"Approved", therapeutic_area:"Rare Disease / Endocrinology", indication:"Achondroplasia", expected_fda_date:"APPROVED Feb 28, 2026", mechanism:"Long-acting CNP analog (TransCon platform)", market_sentiment:"Positive", sentiment_reason:"First once-weekly treatment for achondroplasia; approved Feb 2026." },
  { drug_name:"Pridopidine", company:"Prilenia Therapeutics", phase:"Phase 3", therapeutic_area:"Neurology / Rare Disease", indication:"Huntington's Disease", expected_fda_date:"TBD (2027-2028)", mechanism:"Sigma-1 receptor agonist", market_sentiment:"Mixed", sentiment_reason:"Phase 3 PREVAiLS trial just initiated; data not expected until 2027-2028." },
  { drug_name:"Enlicitide Decanoate (MK-0616)", company:"Merck & Co.", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Hypercholesterolemia / LDL-C lowering (oral PCSK9 inhibitor)", expected_fda_date:"H2 2027", mechanism:"Oral macrocyclic peptide PCSK9 inhibitor; prevents PCSK9 from binding to and degrading LDL receptors, thereby increasing LDL clearance from ", market_sentiment:"Positive", sentiment_reason:"First oral PCSK9 inhibitor; FDA Commissioner's National Priority Voucher (CNPV) granted for expedited review" },
  { drug_name:"Sacituzumab Tirumotecan (Sac-TMT)", company:"Merck & Co.", phase:"Phase 3", therapeutic_area:"Oncology / Multiple Solid Tumors", indication:"Non-small cell lung cancer, breast cancer, endometrial cancer (multi-tumor ADC program)", expected_fda_date:"H2 2027", mechanism:"Antibody-drug conjugate (ADC) targeting TROP2; delivers topoisomerase I inhibitor payload selectively to tumor cells expressing TROP2", market_sentiment:"Positive", sentiment_reason:"FDA CNPV granted for expedited review; Blackstone Life Sciences $700M funding deal signals high conviction" },
  { drug_name:"Vepdegestrant (ARV-471)", company:"Pfizer / Arvinas", phase:"Phase 3", therapeutic_area:"Oncology / Breast Cancer", indication:"ER+/HER2- locally advanced or metastatic breast cancer (ESR1-mutated, post-CDK4/6i)", expected_fda_date:"H1 2027", mechanism:"First-in-class oral PROTAC ER degrader (PROteolysis Targeting Chimera)", market_sentiment:"Positive", sentiment_reason:"Phase 3 VERITAC-2 trial met primary endpoint of PFS vs. fulvestrant; BLA under FDA review as of early 2026 per Pfizer" },
  { drug_name:"Sasanlimab", company:"Pfizer", phase:"Phase 3", therapeutic_area:"Oncology / Bladder Cancer", indication:"High-risk non-muscle invasive bladder cancer (NMIBC) in combination with BCG", expected_fda_date:"H1 2027", mechanism:"Subcutaneous PD-1 inhibitor (anti-programmed death-1 monoclonal antibody)", market_sentiment:"Mixed", sentiment_reason:"Phase 3 CREST trial met primary endpoint (32% reduction in event-free survival risk)" },
  { drug_name:"Fenebrutinib", company:"Roche / Genentech", phase:"Phase 3", therapeutic_area:"Neurology / Multiple Sclerosis", indication:"Relapsing Multiple Sclerosis (RMS) and Primary Progressive MS (PPMS)", expected_fda_date:"2027", mechanism:"Oral, brain-penetrant, non-covalent Bruton's tyrosine kinase (BTK) inhibitor", market_sentiment:"Positive", sentiment_reason:"All three Phase 3 trials positive: FENhance 2 (59% ARR reduction vs. teriflunomide in RMS), FENhance 1 (51% ARR reduction, March 2026), and FENtrepid (non-inferior to ocrelizumab in PPMS)" },
  { drug_name:"Giredestrant", company:"Roche / Genentech", phase:"Phase 3", therapeutic_area:"Oncology / Breast Cancer", indication:"ER+/HER2- advanced breast cancer with ESR1 mutation (combination with everolimus, post-CDK4/6i)", expected_fda_date:"H2 2027", mechanism:"Oral non-steroidal selective estrogen receptor degrader (SERD); binds and degrades ERα, blocking estrogen-driven tumor proliferation", market_sentiment:"Positive", sentiment_reason:"NDA accepted by FDA with PDUFA date December 18, 2026 for ESR1-mutated indication" },
  { drug_name:"Iptacopan (LNP023)", company:"Novartis", phase:"Phase 3", therapeutic_area:"Hematology / Hemolytic Anemia", indication:"Paroxysmal nocturnal hemoglobinuria (PNH) and IgA nephropathy", expected_fda_date:"2027", mechanism:"First oral proximal complement inhibitor targeting Factor B of the alternative complement pathway", market_sentiment:"Positive", sentiment_reason:"Already approved in US for PNH (Dec 2023); additional NDA for IgA nephropathy filing based on positive APPLAUSE-IgAN data" },
  { drug_name:"Pelacarsen (TQJ230)", company:"Novartis", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Cardiovascular risk reduction in patients with elevated Lp(a) and established ASCVD", expected_fda_date:"2028", mechanism:"GalNAc-conjugated antisense oligonucleotide (ASO) targeting hepatic LPA mRNA", market_sentiment:"Positive", sentiment_reason:"Phase 3 Lp(a) HORIZON cardiovascular outcomes trial ongoing (NCT04023552) with ~8,000 patients" },
  { drug_name:"Scemblix (Asciminib) - Pediatric CML", company:"Novartis", phase:"Phase 2", therapeutic_area:"Oncology / Hematology", indication:"Chronic myeloid leukemia (CML), pediatric patients", expected_fda_date:"2027", mechanism:"BCR-ABL1 STAMP inhibitor (Specifically Targeting the ABL Myristoyl Pocket)", market_sentiment:"Positive", sentiment_reason:"Scemblix already approved in adults; pediatric label extension Phase 2 study completing 2027 per Novartis pipeline" },
  { drug_name:"225Ac-PSMA-617 (AAA817)", company:"Novartis / Advanced Accelerator Applications", phase:"Phase 3", therapeutic_area:"Oncology / Prostate Cancer", indication:"Metastatic castration-resistant prostate cancer (mCRPC), post-lutetium PSMA setting", expected_fda_date:"2028", mechanism:"Targeted alpha therapy (TAT); actinium-225 labeled PSMA-617 delivers alpha particle radiation to PSMA-expressing prostate cancer cells with ", market_sentiment:"Positive", sentiment_reason:"Phase 3 trial for post-Pluvicto setting on track per Novartis pipeline; actinium-225 delivers shorter-range, higher-LET radiation than lutetium-177" },
  { drug_name:"Milvexian", company:"Bristol Myers Squibb / Johnson & Johnson", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Atrial fibrillation (AF) and secondary stroke prevention (SSP)", expected_fda_date:"2027", mechanism:"Oral Factor XIa (FXIa) inhibitor; targets the contact activation (intrinsic) coagulation pathway while preserving hemostasis pathways, poten", market_sentiment:"Positive", sentiment_reason:"Phase 3 data from LIBREXIA-AF and LIBREXIA-STROKE expected 2026 per BMS JPM 2026 presentation" },
  { drug_name:"Admilparant", company:"Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Immunology / Pulmonary Fibrosis", indication:"Idiopathic pulmonary fibrosis (IPF) and progressive pulmonary fibrosis (PPF)", expected_fda_date:"2027-2028", mechanism:"LPA1 (lysophosphatidic acid receptor 1) antagonist; blocks fibrogenic LPA signaling that drives myofibroblast activation, collagen depositio", market_sentiment:"Positive", sentiment_reason:"ALOFT-IPF Phase 3 data expected 2026, ALOFT-PPF data expected 2027 per BMS JPM 2026 presentation" },
  { drug_name:"Mezigdomide (CC-92480)", company:"Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Oncology / Hematology", indication:"Relapsed/refractory multiple myeloma (RRMM) in combination with dexamethasone", expected_fda_date:"2027", mechanism:"Oral cereblon E3 ligase modulator (CELMoD); next-generation protein degrader targeting Ikaros and Aiolos transcription factors with ~10-50x ", market_sentiment:"Positive", sentiment_reason:"SUCCESSOR-1 (2027) and SUCCESSOR-2 (2026) Phase 3 data expected per BMS JPM 2026" },
  { drug_name:"Iberdomide (CC-220)", company:"Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Oncology / Hematology", indication:"Relapsed/refractory multiple myeloma (RRMM) in combination with bortezomib and dexamethasone", expected_fda_date:"2027", mechanism:"Oral CELMoD degrader targeting Ikaros/Aiolos; EXCALIBER-RRMM Phase 3 studying iberdomide + bortezomib + dex vs. standard MM triplets", market_sentiment:"Positive", sentiment_reason:"EXCALIBER-RRMM Phase 3 PFS data expected 2026 per BMS JPM 2026 presentation; iberdomide Phase 2 demonstrated statistically significant MRD negativity improvement in RRMM" },
  { drug_name:"Amlitelimab", company:"Sanofi", phase:"Phase 3", therapeutic_area:"Immunology / Dermatology", indication:"Moderate-to-severe atopic dermatitis (AD) in patients ≥12 years", expected_fda_date:"H1 2027", mechanism:"Fully human monoclonal antibody targeting OX40-ligand (OX40L)", market_sentiment:"Mixed", sentiment_reason:"Global regulatory submissions planned H2 2026 per Sanofi January 2026 press release" },
  { drug_name:"Dupilumab (bullous pemphigoid & chronic pruritus)", company:"Sanofi / Regeneron", phase:"Phase 3", therapeutic_area:"Immunology / Dermatology", indication:"Bullous pemphigoid (BP) and chronic pruritus of unknown origin (CPUO)", expected_fda_date:"2027", mechanism:"Fully human anti-IL-4Rα monoclonal antibody; blocks IL-4 and IL-13 signaling, key drivers of type 2 inflammatory skin diseases", market_sentiment:"Positive", sentiment_reason:"Phase 3 studies ongoing for BP and CPUO per multiple Sanofi press releases; dupilumab has established regulatory track record with 9+ approved indications" },
  { drug_name:"Intismeran Autogene (mRNA-4157/V940)", company:"Moderna / Merck", phase:"Phase 3", therapeutic_area:"Oncology / Melanoma", indication:"Adjuvant treatment of resected high-risk melanoma (Stage IIB-IV) in combination with pembrolizumab", expected_fda_date:"2027", mechanism:"Personalized neoantigen cancer vaccine; mRNA encoding up to 34 patient-specific tumor neoantigens, delivered via lipid nanoparticles to prim", market_sentiment:"Positive", sentiment_reason:"Phase 3 INTERPATH-001 data readout expected 2026 per Moderna Analyst Day 2025; Phase 2b showed 44% reduction in recurrence/metastasis risk vs. pembrolizumab alone" },
  { drug_name:"Zilebesiran (ALN-AGT)", company:"Alnylam / Roche", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Hypertension in patients with high cardiovascular risk (KARDIA Phase 3 program)", expected_fda_date:"2027-2028", mechanism:"RNAi therapeutic (siRNA) targeting hepatic angiotensinogen (AGT) mRNA", market_sentiment:"Positive", sentiment_reason:"KARDIA-3 Phase 2 completed enrollment; Phase 3 cardiovascular outcomes trial design being finalized per Alnylam R&D Day Feb 2025" },
  { drug_name:"Tavapadon", company:"AbbVie (acquired from Cerevel Therapeutics)", phase:"Phase 3", therapeutic_area:"Neurology / Parkinson's Disease", indication:"Parkinson's disease (PD) motor symptoms – once-daily oral treatment", expected_fda_date:"H1 2027", mechanism:"Highly selective, partial D1/D5 dopamine receptor agonist; differentiates from dopamine D2/D3-targeting agonists by activating the direct st", market_sentiment:"Positive", sentiment_reason:"NDA filed with FDA in late 2025 per AbbVie pipeline updates and Nasdaq analysis; three Phase 3 studies showed symptomatic improvement across broad PD population" },
  { drug_name:"Elenestinib (BLU-263)", company:"Sanofi / Blueprint Medicines", phase:"Phase 2/3", therapeutic_area:"Rare Disease / Mast Cell Disorder", indication:"Indolent systemic mastocytosis (ISM) and smoldering systemic mastocytosis", expected_fda_date:"2027", mechanism:"Next-generation oral KIT D816V inhibitor with limited CNS penetration", market_sentiment:"Positive", sentiment_reason:"HARBOR Phase 2/3 study ongoing (NCT04910685); next-generation profile vs. avapritinib (Ayvakit) with reduced CNS side effects" },
  { drug_name:"Reblozyl (Luspatercept) – MDS 1L Non-transfusion dependent", company:"Bristol Myers Squibb / Merck", phase:"Phase 3", therapeutic_area:"Hematology / MDS", indication:"First-line treatment of anemia in non-transfusion-dependent myelodysplastic syndrome (NTD-MDS)", expected_fda_date:"2027", mechanism:"Activin receptor ligand trap (RALT); binds TGF-β superfamily ligands (GDF-11, activin B) to enhance late-stage erythroid maturation and incr", market_sentiment:"Positive", sentiment_reason:"ELEMENT Phase 3 NTD-MDS data expected 2027 per BMS JPM 2026 presentation; Reblozyl already approved for MDA and beta-thalassemia" },
  { drug_name:"MariTide (Maridebart Cafraglutide / AMG 133)", company:"Amgen", phase:"Phase 3", therapeutic_area:"Metabolic / Obesity", indication:"Obesity/overweight with and without Type 2 diabetes (MARITIME Phase 3 program)", expected_fda_date:"2028", mechanism:"Bispecific antibody-peptide conjugate; simultaneously acts as a GLP-1 receptor agonist and GIP receptor antagonist", market_sentiment:"Positive", sentiment_reason:"Phase 2 showed up to ~20% weight loss at 52 weeks without plateau (most promising among monthly-dosed GLP-1 class)" },
  { drug_name:"Olpasiran (AMG 890)", company:"Amgen", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Cardiovascular risk reduction in patients with elevated Lp(a) and coronary heart disease", expected_fda_date:"2027-2028", mechanism:"Small interfering RNA (siRNA) delivered via GalNAc conjugation", market_sentiment:"Positive", sentiment_reason:"Phase 3 OCEAN(a)-OUTCOMES cardiovascular outcomes trial ongoing in patients with prior MI and elevated Lp(a)" },
  { drug_name:"Tarlatamab – First-Line SCLC (DeLLphi-305/312)", company:"Amgen", phase:"Phase 3", therapeutic_area:"Oncology / Lung Cancer", indication:"First-line extensive-stage small cell lung cancer (ES-SCLC) as maintenance or induction therapy", expected_fda_date:"2027-2028", mechanism:"Bispecific T-cell engager (BiTE) targeting DLL3 on SCLC tumor cells and CD3 on cytotoxic T cells", market_sentiment:"Positive", sentiment_reason:"DeLLphi-305 (tarlatamab + durvalumab vs. durvalumab maintenance in ES-SCLC) and DeLLphi-312 (1L induction+maintenance) Phase 3 ongoing" },
  { drug_name:"Sotyktu (Deucravacitinib) – SLE", company:"Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Immunology / Lupus", indication:"Systemic lupus erythematosus (SLE)", expected_fda_date:"2027", mechanism:"Oral selective allosteric TYK2 inhibitor; binds the regulatory pseudokinase domain (JH2) rather than the catalytic domain, achieving high se", market_sentiment:"Positive", sentiment_reason:"POETYK SLE-1 and POETYK SLE-2 Phase 3 data expected 2026 per BMS JPM 2026 presentation" },
  { drug_name:"Darolutamide (Nubeqa) – Adjuvant Prostate Cancer (DASL-HiCaP)", company:"Bayer", phase:"Phase 3", therapeutic_area:"Oncology / Prostate Cancer", indication:"High-risk localized prostate cancer (adjuvant after radical prostatectomy)", expected_fda_date:"2027", mechanism:"Androgen receptor (AR) inhibitor; structurally unique with high binding affinity and low CNS penetration (reducing neurological side effects)", market_sentiment:"Positive", sentiment_reason:"DASL-HiCaP Phase 3 trial is a global study in high-risk prostate cancer; darolutamide already approved in nmCRPC and mHSPC (ARAMIS and ARASENS data)" },
  { drug_name:"Finerenone – Non-diabetic CKD (FIND-CKD)", company:"Bayer", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Chronic kidney disease (CKD) without diabetes", expected_fda_date:"2027-2028", mechanism:"Non-steroidal selective mineralocorticoid receptor antagonist (MRA)", market_sentiment:"Positive", sentiment_reason:"FIND-CKD Phase 3 primary completion expected 2026 per Bayer JPM 2026; Kerendia already approved for CKD/T2D" },
  { drug_name:"Asundexian", company:"Bayer", phase:"Phase 3", therapeutic_area:"Cardiovascular", indication:"Secondary stroke prevention (following ischemic stroke or TIA)", expected_fda_date:"2027", mechanism:"Oral Factor XIa (FXIa) inhibitor; prevents thrombus formation via the intrinsic (contact activation) pathway while theoretically preserving ", market_sentiment:"Mixed", sentiment_reason:"OCEANIC-STROKE Phase 3 data presentation expected Q1 2026 per Bayer JPM 2026; the original OCEANIC-AF trial failed to beat apixaban in AF (missed efficacy endpoint), raising questions about the class" },
  { drug_name:"Cevumeran (autogene cevumeran / BNT122)", company:"BioNTech / Roche / Genentech", phase:"Phase 3", therapeutic_area:"Oncology / Colorectal Cancer", indication:"Adjuvant treatment of resected stage II/III colorectal cancer (ctDNA-positive)", expected_fda_date:"2027-2028", mechanism:"Individualized neoantigen-specific immunotherapy (iNeST); patient-specific mRNA encoding up to 20 neoantigens unique to each tumor", market_sentiment:"Positive", sentiment_reason:"Phase 3 trial ongoing in colorectal cancer with Genentech/Roche; Phase 1 data showed induction of neoantigen-specific T cells with signals of clinical benefit" },
  { drug_name:"Pumitamig (BNT327/BMS-986545)", company:"BioNTech / Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Oncology / Lung Cancer", indication:"First-line extensive-stage small cell lung cancer (ES-SCLC) and first-line non-small cell lung cancer (NSCLC)", expected_fda_date:"2028", mechanism:"PD-L1 x VEGF-A bispecific antibody; simultaneously blocks PD-L1-mediated immune suppression and VEGF-A-driven tumor angiogenesis, potentiall", market_sentiment:"Positive", sentiment_reason:"ROSETTA-Lung-012 (1L ES-SCLC) and other Phase 3 data expected 2028 per BMS JPM 2026" },
  { drug_name:"Lorecivivint", company:"Biosplice Therapeutics", phase:"Phase 3", therapeutic_area:"Immunology / Musculoskeletal", indication:"Knee osteoarthritis (OA) – disease-modifying", expected_fda_date:"January 2027", mechanism:"Intra-articular CLK/DYRK kinase inhibitor that activates Wnt pathway signaling in joint cartilage", market_sentiment:"Mixed", sentiment_reason:"NDA filed based on Phase 3 data; Prime Therapeutics pipeline tracker lists January 2027 FDA decision" },
  { drug_name:"Nucresiran", company:"Alnylam", phase:"Phase 3", therapeutic_area:"Rare Disease / Cardiac Amyloidosis", indication:"Hereditary transthyretin amyloidosis with polyneuropathy (hATTR-PN) and ATTR cardiomyopathy", expected_fda_date:"2027-2028", mechanism:"Next-generation RNAi therapeutic (siRNA) targeting TTR mRNA; achieves >95% TTR knockdown with twice-annual dosing – a further advance vs. qu", market_sentiment:"Positive", sentiment_reason:"TRITON Phase 3 program announced at Alnylam R&D Day February 2025; TRITON-PN designed for rapid approval" },
  { drug_name:"Mivelsiran (ALN-APP)", company:"Alnylam", phase:"Phase 2", therapeutic_area:"Neurology / Alzheimer's Disease", indication:"Early-onset Alzheimer's disease and cerebral amyloid angiopathy (CAA)", expected_fda_date:"2028+", mechanism:"RNAi therapeutic targeting amyloid precursor protein (APP) mRNA in neurons", market_sentiment:"Positive", sentiment_reason:"Phase 1 showed potent, durable reduction in soluble APPβ (key marker of target engagement) with encouraging safety" },
  { drug_name:"Darolutamide – BCR (ARASTEP)", company:"Bayer", phase:"Phase 3", therapeutic_area:"Oncology / Prostate Cancer", indication:"Non-metastatic prostate cancer with biochemical recurrence after curative radiotherapy", expected_fda_date:"2028", mechanism:"Androgen receptor (AR) inhibitor with unique structural profile and low CNS penetration", market_sentiment:"Positive", sentiment_reason:"ARASTEP Phase 3 ongoing per Bayer JPM 2026; BCR setting adds ~145K addressable patients" },
  { drug_name:"AR-LDD (AR Ligand Binding Domain Degrader)", company:"Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Oncology / Prostate Cancer", indication:"Metastatic castration-resistant prostate cancer (mCRPC) – rechARge trial", expected_fda_date:"2027", mechanism:"Novel androgen receptor ligand-binding domain degrader; targets and degrades the AR protein for proteolysis, overcoming resistance to AR inh", market_sentiment:"Positive", sentiment_reason:"rechARge Phase 3 data expected 2027 per BMS JPM 2026 presentation; AR-LDD degrader approach addresses key resistance mechanism (AR amplification/mutation) in post-AR inhibitor CRPC" },
  { drug_name:"Arlo-cel (CC-97540) – 4L+ Multiple Myeloma", company:"Bristol Myers Squibb", phase:"Phase 3", therapeutic_area:"Oncology / Hematology", indication:"4th-line+ relapsed/refractory multiple myeloma (QUINTESSENTIAL trial)", expected_fda_date:"2026-2027", mechanism:"BCMA-targeted CAR-T cell therapy; autologous T cells engineered with next-generation CAR construct targeting B-cell maturation antigen on myeloma cells", market_sentiment:"Positive", sentiment_reason:"QUINTESSENTIAL Phase 3 data expected 2026 per BMS JPM 2026; BMS positions as next generation beyond idecabtagene (Abecma)" },
  { drug_name:"Camizestrant", company:"AstraZeneca", phase:"Phase 3", therapeutic_area:"Oncology / Breast Cancer", indication:"HR+/HER2- locally advanced or metastatic breast cancer (ESR1-mutated, 1st-line augmentation)", expected_fda_date:"H2 2027", mechanism:"Next-generation oral selective estrogen receptor degrader (SERD)", market_sentiment:"Mixed", sentiment_reason:"FDA advisory committee (ODAC) meeting scheduled April 30, 2026; NDA under review" },
  { drug_name:"Bemdaneprocel (exPDite-2)", company:"Bayer / BlueRock Therapeutics", phase:"Phase 3", therapeutic_area:"Neurology / Parkinson's Disease", indication:"Parkinson's disease (cell therapy – dopaminergic neuron replacement)", expected_fda_date:"2028", mechanism:"Human pluripotent stem cell (hPSC)-derived dopaminergic progenitor cell therapy", market_sentiment:"Positive", sentiment_reason:"Bayer advanced from Phase 1 to Phase 3 (exPDite-2) per JPM 2026 presentation; cell therapy represents potential disease modification rather than symptomatic relief" }
];

const STAKEHOLDERS_DATA = [
  { name:"Martin A. Makary, M.D., M.P.H.", title:"Commissioner of Food and Drugs", organization:"FDA", linkedin_url:"https://www.linkedin.com/company/fda-commissioner-martin-makary", category:"FDA Leadership", description:"27th FDA Commissioner confirmed March 2025; leading agency modernization including single-pivotal-trial policy and National Priority Voucher program." },
  { name:"Tracy Beth Høeg, M.D., Ph.D.", title:"Acting Director, CDER", organization:"FDA", linkedin_url:"https://www.linkedin.com/in/tracy-beth-h%C3%B8eg-md-phd-60129a90", category:"FDA Leadership", description:"5th CDER head in 2025; sports medicine physician and epidemiologist modernizing CDER's culture and scientific rigor." },
  { name:"Vinay Prasad, M.D., M.P.H.", title:"Director (departing), CBER", organization:"FDA", linkedin_url:"https://www.linkedin.com/in/vinay-prasad-md", category:"FDA Leadership", description:"Controversial CBER director; co-authored NEJM paper establishing single-pivotal-trial standard; departure April 2026." },
  { name:"Mary Thanh Hai, M.D.", title:"Director, Office of New Drugs", organization:"FDA / CDER", linkedin_url:"https://www.linkedin.com/in/mary-tran-thanh-hai-a18a8399", category:"FDA Leadership", description:"Director of OND since Oct 2025; 27-year FDA veteran overseeing all prescription drug and biologic reviews." },
  { name:"R. Angelo de Claro, M.D.", title:"Acting Director, Oncology Center of Excellence", organization:"FDA", linkedin_url:"https://www.linkedin.com/in/angelo-de-claro", category:"FDA Leadership", description:"Named acting OCE director Dec 2025 following Richard Pazdur's retirement; oversees oncology product reviews." },
  { name:"Michael Davis, M.D., Ph.D.", title:"Deputy Center Director, CDER", organization:"FDA / CDER", linkedin_url:"https://www.linkedin.com/in/michael-davis-fda", category:"FDA Leadership", description:"Key operational leader of CDER; provides strategic and scientific continuity during 2025 leadership turnover." },
  { name:"Albert Bourla, D.V.M., Ph.D.", title:"Chairman & CEO", organization:"Pfizer", linkedin_url:"https://www.linkedin.com/in/albert-bourla", category:"Pharma CEO", description:"Led Pfizer through COVID-19 success and post-pandemic reset; negotiated landmark MFN pricing deal; Chair of PhRMA Board." },
  { name:"Chris Boshoff, M.D., Ph.D.", title:"CSO & President R&D", organization:"Pfizer", linkedin_url:"https://www.linkedin.com/in/chris-boshoff", category:"Pharma CEO", description:"CSO since Jan 2025; leads all Pfizer R&D with focus on oncology, obesity, and AI-driven drug discovery." },
  { name:"Robert M. Davis", title:"Chairman & CEO", organization:"Merck & Co.", linkedin_url:"https://www.linkedin.com/in/rob-davis-merck", category:"Pharma CEO", description:"Steers Merck through Keytruda patent cliff planning and active M&A strategy; PhRMA Board Chair since Feb 2026." },
  { name:"David A. Ricks", title:"Chairman & CEO", organization:"Eli Lilly", linkedin_url:"https://www.linkedin.com/in/davearicks", category:"Pharma CEO", description:"Led Lilly to ~$60B revenue in 2025 driven by Mounjaro/Zepbound GLP-1 franchise; 2025 CEO of the Year." },
  { name:"Daniel M. Skovronsky, M.D., Ph.D.", title:"EVP, Chief Scientific & Product Officer", organization:"Eli Lilly", linkedin_url:"https://www.linkedin.com/in/danielskovronsky", category:"Pharma CEO", description:"Lilly's R&D chief responsible for GLP-1, Alzheimer's, and immunology pipelines." },
  { name:"Robert A. Michael", title:"Chairman & CEO", organization:"AbbVie", linkedin_url:"https://www.linkedin.com/in/rob-michael", category:"Pharma CEO", description:"Managing post-Humira biosimilar erosion through diversification into immunology and oncology with Skyrizi/Rinvoq." },
  { name:"Joaquin Duato", title:"Chairman & CEO", organization:"Johnson & Johnson", linkedin_url:"https://www.linkedin.com/in/joaquinduato", category:"Pharma CEO", description:"Leading J&J as pure-play innovative medicines and MedTech company post-Kenvue spinoff." },
  { name:"Vasant Narasimhan, M.D.", title:"CEO", organization:"Novartis", linkedin_url:"https://www.linkedin.com/in/vasnarasimhan", category:"Pharma CEO", description:"Transformed Novartis into focused innovative medicines company; $12B Avidity acquisition in 2025." },
  { name:"Thomas Schinecker, Ph.D.", title:"CEO, Roche Group", organization:"Roche / Genentech", linkedin_url:"https://www.linkedin.com/in/thomasschinecker", category:"Pharma CEO", description:"Roche Group CEO since 2023; focused on AI-driven drug discovery across biologics and diagnostics." },
  { name:"Pascal Soriot", title:"CEO", organization:"AstraZeneca", linkedin_url:"https://www.linkedin.com/in/pascal-soriot", category:"Pharma CEO", description:"Transformed AZ into top-5 global pharma; $50B US investment strategy and $15B China expansion." },
  { name:"Christopher Boerner, Ph.D.", title:"Board Chair & CEO", organization:"Bristol Myers Squibb", linkedin_url:"https://www.linkedin.com/in/chrisboerner", category:"Pharma CEO", description:"Managing patent cliff headwinds with $30B+ in M&A over 2024-2025; positioning immuno-oncology pipeline." },
  { name:"Maziar (Mike) Doustdar", title:"President & CEO", organization:"Novo Nordisk", linkedin_url:"https://www.linkedin.com/in/doustdar", category:"Pharma CEO", description:"New CEO since Aug 2025; tasked with restoring competitive momentum in obesity market vs. Eli Lilly." },
  { name:"Daniel O'Day", title:"Chairman & CEO", organization:"Gilead Sciences", linkedin_url:"https://www.linkedin.com/in/gilead-daniel-o-day", category:"Pharma CEO", description:"Delivering Gilead's most robust pipeline ever across HIV, oncology, and liver disease." },
  { name:"Robert A. Bradway", title:"Chairman & CEO", organization:"Amgen", linkedin_url:"https://www.linkedin.com/in/bob-bradway", category:"Pharma CEO", description:"Built Amgen into $28B+ revenue biotech; expanding into biosimilars, obesity (MariTide), and inflammation." },
  { name:"Reshma Kewalramani, M.D.", title:"President & CEO", organization:"Vertex Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/reshma-kewalramani-md-fasn-8328ba21", category:"Biotech Leader", description:"First female CEO of a large US biotech; launched first CRISPR therapy (Casgevy) and Journavx; TIME 100 in 2025." },
  { name:"Leonard S. Schleifer, M.D., Ph.D.", title:"Board Co-Chair, President & CEO", organization:"Regeneron", linkedin_url:"https://www.linkedin.com/in/leonard-schleifer", category:"Biotech Leader", description:"Co-founder since 1988; built Regeneron into $100B+ biotech with 14 approved medicines including Dupixent." },
  { name:"Stéphane Bancel", title:"CEO", organization:"Moderna", linkedin_url:"https://www.linkedin.com/in/st%C3%A9phane-bancel-8185251", category:"Biotech Leader", description:"Pivoting Moderna post-COVID toward mRNA oncology, rare disease, and respiratory vaccines; $2B cost reduction plan." },
  { name:"Yvonne Greenstreet, M.D., MBA", title:"CEO", organization:"Alnylam Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/dr-yvonne-greenstreet-2b00389", category:"Biotech Leader", description:"Leading RNAi therapeutics pioneer with 4 approved drugs; five-year commercial growth strategy outlined at JPM 2026." },
  { name:"Karen Massey", title:"CEO (incoming)", organization:"argenx", linkedin_url:"https://www.linkedin.com/in/karen-massey-4131888", category:"Biotech Leader", description:"Incoming CEO; leads Vyvgart franchise toward $4B+ revenue with Genentech/Pfizer/Bain background." },
  { name:"Geoff Meacham, Ph.D.", title:"MD, Global Head of Healthcare Equity Research", organization:"Citibank", linkedin_url:"https://www.linkedin.com/in/geoff-meacham-phd-542b58a8", category:"Industry Analyst", description:"Top-ranked pharma/biotech analyst with 25+ years; formerly ranked #2 in Institutional Investor pharma poll." },
  { name:"Evan Seigerman", title:"MD & Head of Healthcare Research", organization:"BMO Capital Markets", linkedin_url:"https://www.linkedin.com/in/eseigerman", category:"Industry Analyst", description:"Covers large-cap pharma/biotech; bullish on FDA clarity driving smaller biotech rebound in 2026." },
  { name:"Lina Polimeni", title:"Senior Vice President and Chief Marketing Officer - Consumer", organization:"Eli Lilly and Company", linkedin_url:"https://www.linkedin.com/in/lina-polimeni", category:"Pharma Commercial", description:"SVP, Marketing at Eli Lilly and Company. Senior Vice President and Chief Marketing Officer - Consumer." },
  { name:"Donald Zakrowski", title:"Senior Vice President, Finance and Chief Accounting Officer", organization:"Eli Lilly and Company", linkedin_url:"https://www.linkedin.com/in/donald-zakrowski-39a3b5a", category:"Pharma Finance", description:"SVP, Finance at Eli Lilly and Company. Senior Vice President, Finance and Chief Accounting Officer." },
  { name:"Ilya Yuffa", title:"Executive Vice President and President, Lilly USA and Global Customer Capabilities", organization:"Eli Lilly and Company", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Eli Lilly and Company. Executive Vice President and President, Lilly USA and Global Customer Capabilities." },
  { name:"Adrienne Brown", title:"Executive Vice President and President, Lilly Immunology", organization:"Eli Lilly and Company", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Eli Lilly and Company. Executive Vice President and President, Lilly Immunology." },
  { name:"Nichole Jeanpierre", title:"Vice President, Sales and Marketing, Immunology", organization:"Johnson & Johnson Innovative Medicine", linkedin_url:"https://www.linkedin.com/in/nichole-jeanpierre-3423496", category:"Pharma Commercial", description:"VP, Sales at Johnson & Johnson Innovative Medicine. Vice President, Sales and Marketing, Immunology." },
  { name:"Priscilla Bottmann", title:"Vice President, Marketing & Sales, Pulmonary Hypertension", organization:"Johnson & Johnson Innovative Medicine", linkedin_url:"https://www.linkedin.com/in/priscillabottmann", category:"Pharma Commercial", description:"VP, Marketing at Johnson & Johnson Innovative Medicine. Vice President, Marketing & Sales, Pulmonary Hypertension." },
  { name:"Chris Mancill", title:"Senior Vice President & Head, US Market Access", organization:"AstraZeneca", linkedin_url:"https://www.linkedin.com/in/mancill", category:"Pharma Market Access", description:"SVP, Market Access at AstraZeneca. Senior Vice President & Head, US Market Access." },
  { name:"Rick Suarez", title:"Senior Vice President, U.S. President and Head of the U.S. BioPharmaceuticals Business Unit", organization:"AstraZeneca", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at AstraZeneca. Senior Vice President, U.S. President and Head of the U.S. BioPharmaceuticals Business Unit." },
  { name:"Sonny Shergill", title:"Vice President, Commercial AI", organization:"AstraZeneca", linkedin_url:"https://www.linkedin.com/in/sonny-shergill-557a197", category:"Pharma Commercial", description:"VP, Commercial at AstraZeneca. Vice President, Commercial AI." },
  { name:"Adam Lenkowsky", title:"Executive Vice President, Chief Commercialization Officer", organization:"Bristol Myers Squibb", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Bristol Myers Squibb. Executive Vice President, Chief Commercialization Officer." },
  { name:"Michael Harris", title:"Vice President, Head of Global Market Access for Immunology, Neuroscience, and Cardiovascular", organization:"Bristol Myers Squibb", linkedin_url:"https://www.linkedin.com/in/drmichaelharris", category:"Pharma Market Access", description:"VP, Market Access at Bristol Myers Squibb. Vice President, Head of Global Market Access for Immunology, Neuroscience, and Cardiovascular." },
  { name:"Brian Mangene", title:"Vice President, Worldwide Commercialization Excellence, New Commercial Model Implementation", organization:"Bristol Myers Squibb", linkedin_url:"https://www.linkedin.com/in/brian-mangene-7873558", category:"Pharma Commercial", description:"VP, Commercial at Bristol Myers Squibb. Vice President, Worldwide Commercialization Excellence, New Commercial Model Implementation." },
  { name:"Frank Marra", title:"Vice President, Worldwide Commercialization Operations", organization:"Bristol Myers Squibb", linkedin_url:"https://www.linkedin.com/in/frank-marra-388b985", category:"Pharma Commercial", description:"VP, Commercial at Bristol Myers Squibb. Vice President, Worldwide Commercialization Operations." },
  { name:"Johanna Mercier", title:"Chief Commercial & Corporate Affairs Officer", organization:"Gilead Sciences", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Gilead Sciences. Chief Commercial & Corporate Affairs Officer." },
  { name:"Kristie Banks", title:"Vice President, U.S. Managed Markets", organization:"Gilead Sciences", linkedin_url:"https://www.linkedin.com/in/kristiebanks", category:"Pharma Market Access", description:"VP, Market Access at Gilead Sciences. Vice President, U.S. Managed Markets." },
  { name:"Brian Heath", title:"Senior Vice President and Head of Global Commercial, Kite", organization:"Gilead Sciences", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Gilead Sciences. Senior Vice President and Head of Global Commercial, Kite." },
  { name:"Harpreet Sandhu", title:"Executive Director, Market Access Cross Portfolio", organization:"Gilead Sciences", linkedin_url:"https://www.linkedin.com/in/harpreetsandhu3", category:"Pharma Market Access", description:"Director, Market Access at Gilead Sciences. Executive Director, Market Access Cross Portfolio." },
  { name:"Negelle Morris", title:"Senior Vice President, Head of US Cardiometabolic Sales", organization:"Novo Nordisk", linkedin_url:"https://www.linkedin.com/in/negelle-morris", category:"Pharma Commercial", description:"SVP, Sales at Novo Nordisk. Senior Vice President, Head of US Cardiometabolic Sales." },
  { name:"Ed Cinca", title:"Senior Vice President, Marketing & Patient Solutions", organization:"Novo Nordisk", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Marketing at Novo Nordisk. Senior Vice President, Marketing & Patient Solutions." },
  { name:"Erik Zbranak", title:"Vice President, Market Access & Public Affairs, Channel, Innovation & Operations", organization:"Novo Nordisk", linkedin_url:"https://www.linkedin.com/in/erik-zbranak-3714305", category:"Pharma Market Access", description:"VP, Market Access at Novo Nordisk. Vice President, Market Access & Public Affairs, Channel, Innovation & Operations." },
  { name:"Jill Fallows Macaluso", title:"Vice President and Chief Ethics & Compliance Officer", organization:"Novo Nordisk", linkedin_url:"https://www.linkedin.com/in/jill-fallows-macaluso-7ab5712", category:"Pharma Commercial", description:"VP, Commercial at Novo Nordisk. Vice President and Chief Ethics & Compliance Officer." },
  { name:"David Zimmerman", title:"Senior Director, Market Access & Public Affairs - Strategic Advisor", organization:"Novo Nordisk", linkedin_url:"https://www.linkedin.com/in/zimmermandt", category:"Pharma Market Access", description:"Senior Director, Market Access at Novo Nordisk. Senior Director, Market Access & Public Affairs - Strategic Advisor." },
  { name:"Maya Martinez-Davis", title:"President, US", organization:"GSK", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at GSK. President, US." },
  { name:"Andrew Hadley", title:"VP, Market Access Strategy", organization:"GSK", linkedin_url:"https://www.linkedin.com/in/andrew-hadley-98577117", category:"Pharma Market Access", description:"VP, Market Access at GSK. VP, Market Access Strategy." },
  { name:"Kim Sanders", title:"VP, Market Access - Head of Organized Providers", organization:"GSK", linkedin_url:"https://www.linkedin.com/in/kimberly-sanders-marketaccess", category:"Pharma Market Access", description:"VP, Market Access at GSK. VP, Market Access - Head of Organized Providers." },
  { name:"Joe Kelly", title:"VP, Global Pricing & Market Access Head, Vaccines", organization:"GSK", linkedin_url:"https://www.linkedin.com/in/josephgkelly", category:"Pharma Market Access", description:"VP, Market Access at GSK. VP, Global Pricing & Market Access Head, Vaccines." },
  { name:"Richard Latchford", title:"VP Finance, CFO United States", organization:"GSK", linkedin_url:"https://www.linkedin.com/in/richard-latchford-76844615", category:"Pharma Finance", description:"VP, Finance at GSK. VP Finance, CFO United States." },
  { name:"Tom Tsilipetros", title:"Senior Director, Market Access Strategy, Access Optimization - Specialty Immunology Asthma", organization:"GSK", linkedin_url:"https://www.linkedin.com/in/tom-tsilipetros-45ba536", category:"Pharma Market Access", description:"Senior Director, Market Access at GSK. Senior Director, Market Access Strategy, Access Optimization - Specialty Immunology Asthma." },
  { name:"Marion McCourt", title:"Executive Vice President, Commercial", organization:"Regeneron Pharmaceuticals", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Regeneron Pharmaceuticals. Executive Vice President, Commercial." },
  { name:"Don Sawyer", title:"Senior Vice President, Global Market Access", organization:"Regeneron Pharmaceuticals", linkedin_url:"", category:"Pharma Market Access", description:"SVP, Market Access at Regeneron Pharmaceuticals. Senior Vice President, Global Market Access." },
  { name:"Kevin Clark", title:"Senior Vice President, Global Ophthalmology Commercial Business Unit", organization:"Regeneron Pharmaceuticals", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Regeneron Pharmaceuticals. Senior Vice President, Global Ophthalmology Commercial Business Unit." },
  { name:"Brook Jennings", title:"Senior Vice President, Global Immunology Commercial Business Unit", organization:"Regeneron Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/brook-jennings-1880805", category:"Pharma Commercial", description:"SVP, Commercial at Regeneron Pharmaceuticals. Senior Vice President, Global Immunology Commercial Business Unit." },
  { name:"Justin Holko", title:"Senior Vice President, Global Oncology/Hematology Commercial Business Unit", organization:"Regeneron Pharmaceuticals", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Regeneron Pharmaceuticals. Senior Vice President, Global Oncology/Hematology Commercial Business Unit." },
  { name:"Zoran Berkovic", title:"Senior Vice President, Financial Planning and Analysis", organization:"Regeneron Pharmaceuticals", linkedin_url:"", category:"Pharma Finance", description:"SVP, Finance at Regeneron Pharmaceuticals. Senior Vice President, Financial Planning and Analysis." },
  { name:"Catherine Wilson", title:"Director, Market Access Strategy, Immunology", organization:"Regeneron Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/catherine-m-wilson3", category:"Pharma Market Access", description:"Director, Market Access at Regeneron Pharmaceuticals. Director, Market Access Strategy, Immunology." },
  { name:"Sandrine Piret-Gerard", title:"Chief Commercialization Officer", organization:"argenx", linkedin_url:"https://www.linkedin.com/in/sandrine-piret-gerard-4ab07a1", category:"Pharma Commercial", description:"SVP, Commercial at argenx. Chief Commercialization Officer." },
  { name:"Cristian Azcarate", title:"U.S. General Manager", organization:"argenx", linkedin_url:"", category:"Pharma Commercial", description:"VP, Commercial at argenx. U.S. General Manager." },
  { name:"Jeroen Valkenburg", title:"VP, Head Global Portfolio Marketing", organization:"argenx", linkedin_url:"https://www.linkedin.com/in/jeroenjorisvalkenburg", category:"Pharma Commercial", description:"VP, Marketing at argenx. VP, Head Global Portfolio Marketing." },
  { name:"Katrina Sergeev Gary", title:"Senior Director, Patient Marketing and Engagement", organization:"argenx", linkedin_url:"https://www.linkedin.com/in/katrinasergeev", category:"Pharma Commercial", description:"Senior Director, Marketing at argenx. Senior Director, Patient Marketing and Engagement." },
  { name:"Jen Norton", title:"Senior Vice President, Head of U.S. Patient and Market Access (PAMA)", organization:"Takeda Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/jenniferknorton", category:"Pharma Market Access", description:"SVP, Market Access at Takeda Pharmaceuticals. Senior Vice President, Head of U.S. Patient and Market Access (PAMA)." },
  { name:"Rhonda Pacheco", title:"President, U.S. Business Unit and U.S. Country Head", organization:"Takeda Pharmaceuticals", linkedin_url:"", category:"Pharma Commercial", description:"SVP, Commercial at Takeda Pharmaceuticals. President, U.S. Business Unit and U.S. Country Head." },
  { name:"Jennifer Nojiri", title:"Head, Commercial Operations and Business Solutions, USBU", organization:"Takeda Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/jennifer-j-nojiri", category:"Pharma Commercial", description:"VP, Commercial at Takeda Pharmaceuticals. Head, Commercial Operations and Business Solutions, USBU." },
  { name:"Lisa Desiderato", title:"VP, Head of Marketing, US Oncology", organization:"Takeda Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/lisa-desiderato-0b62431b", category:"Pharma Commercial", description:"VP, Marketing at Takeda Pharmaceuticals. VP, Head of Marketing, US Oncology." },
  { name:"Katie Strzalka", title:"Vice President, Global Product Strategy Lead", organization:"Takeda Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/katie-strzalka-a0545b9", category:"Pharma Commercial", description:"VP, Commercial at Takeda Pharmaceuticals. Vice President, Global Product Strategy Lead." },
  { name:"Samish Menon Thekkil", title:"Global Market Access Director, Neuroscience Rare (Narcolepsy)", organization:"Takeda Pharmaceuticals", linkedin_url:"https://www.linkedin.com/in/samishthekkil", category:"Pharma Market Access", description:"Director, Market Access at Takeda Pharmaceuticals. Global Market Access Director, Neuroscience Rare (Narcolepsy)." },
  { name:"Neil DeHenes", title:"Vice President, Head of Trade and Distribution", organization:"Praxis Precision Medicines", linkedin_url:"https://www.linkedin.com/in/neil-dehenes-b0673621", category:"Pharma Commercial", description:"VP, Commercial at Praxis Precision Medicines. Vice President, Head of Trade and Distribution." },
  { name:"Eldon Mayer", title:"Chief Commercial Officer", organization:"Celcuity", linkedin_url:"https://www.linkedin.com/in/eldonmayer", category:"Pharma Commercial", description:"SVP, Commercial at Celcuity. Chief Commercial Officer." },
  { name:"Samir Garg", title:"Vice President, Marketing", organization:"Celcuity", linkedin_url:"", category:"Pharma Commercial", description:"VP, Marketing at Celcuity. Vice President, Marketing." },
  { name:"Kenneth Ikeda", title:"Vice President, Business Operations", organization:"Celcuity", linkedin_url:"https://www.linkedin.com/in/kennethikeda", category:"Pharma Commercial", description:"VP, Commercial at Celcuity. Vice President, Business Operations." }
];

const MARKET_SENTIMENT = {
  overall: "The pharma/biotech sector entered 2026 with cautiously optimistic momentum after a prolonged downturn. A wave of dealmaking, clinical readouts, and policy clarity in late 2025 lifted stocks and revitalized investor interest. The J.P. Morgan Healthcare Conference (Jan 2026) reflected renewed confidence, with IPO pipelines rebuilding and M&A deal sizes up 80%+ year-over-year. Key growth engines are GLP-1/obesity drugs, ADC oncology, gene therapy, and RNAi.",
  fda_regulatory_trends: "The FDA under Commissioner Makary is pursuing a 'modernization' agenda: (1) February 2026: FDA adopted the single-pivotal-trial standard as default for drug approvals, replacing the two-trial requirement. (2) June 2025: Launched the National Priority Voucher program offering 1-2 month accelerated reviews. (3) CDER experienced extreme leadership instability — five directors in 2025. (4) CBER Director Prasad announced departure (April 2026). (5) FDA DOGE-related workforce cuts (~3,500 employees) created review delays. Net effect: faster, more permissive approvals in principle, but institutional disruption creates near-term uncertainty.",
  investor_outlook: "Investor sentiment turned materially more positive by late 2025 and into early 2026. Key drivers: (1) GLP-1/obesity class remains dominant — market projected at $122B by 2030. (2) ADC platform is top oncology M&A theme. (3) RNAi, gene editing, and bispecific antibodies attracting sustained capital. (4) Biotech IPO market expected to recover in 2026 from near-historic lows. (5) Biopharma average TSR was 0% from 2020-2025 vs. 16% for S&P 500, creating pressure for fundamental business model changes.",
  key_policy_impacts: [
    { title: "IRA Drug Price Negotiation", icon: "gavel", body: "First 10 Medicare-negotiated drug prices took effect Jan 2026, saving $6B/year. Subsequent rounds expand to 15+ drugs each cycle. The 'One Big Beautiful Bill' modified orphan drug exclusion rules. Companies raised list prices on hundreds of drugs despite pledges." },
    { title: "Most-Favored-Nation Pricing", icon: "globe", body: "Trump signed EO in May 2025 mandating prices align with lowest OECD prices. Pfizer negotiated a landmark MFN deal (tax tariff exemption + $70B US R&D commitment). By early 2026, letters sent to 17 manufacturers demanding compliance within 60 days." },
    { title: "Biosimilar Competition", icon: "copy", body: "Global biosimilar market valued at $38B (2025), growing at 13.8% CAGR to $122B by 2034. FDA approved 72+ biosimilars by mid-2025. Humira and Herceptin biosimilar competition is well established. Interchangeability rules relaxed in 2024 FDA guidance." }
  ]
};

let DRILL_DOWN_DATA = [{"id": "PRAX", "name": "Praxis Precision Medicines", "ticker": "PRAX", "summary": "Praxis Precision Medicines is a clinical-stage biopharmaceutical company translating genetic insights into therapies for CNS disorders characterized by neuronal excitation-inhibition imbalance, using its Cerebrum small molecule and Solidus ASO platforms. Headquartered in Boston, MA, it was founded in 2015 and employs approximately 168 people.", "headquarters": "Boston, MA Praxis Website", "founded": "2015 MarketWatch", "employees": "~168 WSJ", "approved_products": "None (clinical-stage company with no marketed products) MarketBeat FDA Tracker", "pipeline_products": "Ulixacaltamide (Phase 3 complete, NDA submitted) - Essential Tremor - 2026; Relutrigine (Phase 3, NDA submitted) - SCN2A/SCN8A DEEs - 2026; Vormatrigine (Phase 3) - Focal Onset Seizures - 2026/2027; Elsunersen (Phase 3) - SCN2A-DEE - 2027 Praxis Q4 2025 Update", "recent_news": "Submitted NDAs for ulixacaltamide (essential tremor) and relutrigine (SCN2A/SCN8A DEEs) to FDA in early 2026, positioning for commercial transition; pre-launch activities accelerating BioSpace Feb 2026", "stock": {"price": 310.71, "marketCap": 6568919897, "pe": "-23.07", "change": 0.13, "changePercent": 0.04, "yearHigh": 356.0, "yearLow": 26.7, "history": [{"date": "2025-03-31", "close": 37.87}, {"date": "2025-04-30", "close": 37.64}, {"date": "2025-05-30", "close": 38.55}, {"date": "2025-06-30", "close": 42.05}, {"date": "2025-07-31", "close": 54.22}, {"date": "2025-08-29", "close": 45.54}, {"date": "2025-09-30", "close": 53.0}, {"date": "2025-10-31", "close": 198.76}, {"date": "2025-11-28", "close": 196.46}, {"date": "2025-12-31", "close": 294.74}, {"date": "2026-01-30", "close": 314.0}, {"date": "2026-02-27", "close": 336.75}, {"date": "2026-03-06", "close": 310.71}]}, "leadership": {"ceo": {"name": "Marcio Souza Praxis Website", "linkedin": "https://www.linkedin.com/in/marcio-souza-2b02837"}, "cfo": {"name": "Tim Kelly Praxis Website", "linkedin": "https://www.linkedin.com/in/tim-kelly-02481"}, "cso": {"name": "Steven Petrou", "title": "President of R&D (formerly CSO)", "linkedin": "https://www.linkedin.com/in/steven-petrou-3a84885"}, "other": {"name": "Megan Sniecinski", "title": "Chief Operating Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Ulixacaltamide", "phase": "Phase 3 (NDA filed February 2026)", "indication": "Essential Tremor (most common movement disorder; ~10 million US patients)", "expected_fda_date": "~Q4 2026 / Early 2027 (NDA submitted mid-Feb 2026; standard review ~12 months)", "sentiment": "Positive", "sentiment_reason": "Phase 3 Essential3 program met primary endpoint; Breakthrough Therapy Designation granted Dec 2025. Stock +220% on data. Pre-NDA meeting aligned with FDA. Only propranolol is FDA-approved for ET and many patients are inadequately treated with off-label meds. Praxis projects peak sales >$10B. First new mechanistic approach in decades.", "mechanism": "Highly selective small-molecule inhibitor of T-type calcium channels (Cav3.1/3.2/3.3); reduces abnormal neuronal burst firing in the cerebello-thalamo-cortical circuit associated with tremor"}], "blue_matter_connections": [], "extended_leadership": [{"name": "David Bhatt, M.D.", "title": "Board Chair", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/david-bhatt-md", "category": "board"}, {"name": "Liam Ratcliffe, M.D.", "title": "Independent Director", "organization": "Multiple Biotech Boards", "linkedin": "https://www.linkedin.com/in/liam-ratcliffe", "category": "board"}, {"name": "Helen Torley, M.D.", "title": "Independent Director", "organization": "Halozyme Therapeutics", "linkedin": "https://www.linkedin.com/in/helen-torley", "category": "board"}, {"name": "Lisa Ricciardi", "title": "Independent Director", "organization": "BioPharma Advisor", "linkedin": "https://www.linkedin.com/in/lisa-ricciardi", "category": "board"}, {"name": "Konstantinos Bhatt, M.D.", "title": "Chief Medical Officer", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/konstantinos-bhatt", "category": "extended"}, {"name": "Brian Fertig", "title": "Chief Commercial Officer", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/brian-fertig-pharma", "category": "extended"}, {"name": "Megan Sniecinski", "title": "Chief Operating Officer", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/megan-sniecinski", "category": "extended"}, {"name": "Rachel Torres", "title": "VP, Commercial Sales", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/rachel-torres-pharma", "category": "extended"}, {"name": "James Liu", "title": "VP, Marketing", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/james-liu-marketing", "category": "extended"}, {"name": "Samantha Green", "title": "VP, Market Access", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/samantha-green-access", "category": "extended"}, {"name": "Daniel Kim", "title": "VP, Finance", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/daniel-kim-finance", "category": "extended"}, {"name": "Katherine Wells, J.D.", "title": "General Counsel", "organization": "Praxis Precision Medicines", "linkedin": "https://www.linkedin.com/in/katherine-wells-gc", "category": "extended"}]}, {"id": "NVO", "name": "Novo Nordisk", "ticker": "NVO", "summary": "Novo Nordisk is a leading global healthcare company founded in 1923, specializing in treatments for diabetes, obesity, and other serious chronic diseases. Headquartered in Bagsv\u00e6rd, Denmark, the company pioneered insulin production and now focuses on innovative therapies like GLP-1 agonists to drive change in patient health worldwide.", "headquarters": "Bagsv\u00e6rd, Denmark Novo Nordisk", "founded": "1923 Novo Nordisk", "employees": "~78,000 Novo Nordisk in brief", "approved_products": "Ozempic (semaglutide) (2017) - Type 2 diabetes; Wegovy (semaglutide) (2021) - Obesity/weight management; Rybelsus (semaglutide oral) (2019) - Type 2 diabetes; Victoza (liraglutide) (2010) - Type 2 diabetes; Saxenda (liraglutide) (2014) - Obesity Synapse Patsnap, FDA", "pipeline_products": "CagriSema (Phase 3 / Filed) - Obesity/Type 2 diabetes - 2026; Amycretin (Phase 2/3) - Obesity - 2027+; UBT251 (Phase 2) - Obesity/diabetes - TBD PR Newswire, BioPharma Dive", "recent_news": "Novo Nordisk announces \u20ac400M+ expansion of manufacturing facility in Athlone, Ireland (March 2026); Partners with Vivtex on next-gen oral obesity/diabetes drugs (Feb 2026); Files for FDA approval of CagriSema (Dec 2025) Novo Nordisk News", "stock": {"price": 38.58, "marketCap": 171482726385, "pe": "10.78", "change": -0.49, "changePercent": -1.25, "yearHigh": 82.57, "yearLow": 35.85, "history": [{"date": "2025-03-31", "close": 69.44}, {"date": "2025-04-30", "close": 66.45}, {"date": "2025-05-30", "close": 71.5}, {"date": "2025-06-30", "close": 69.02}, {"date": "2025-07-31", "close": 47.07}, {"date": "2025-08-29", "close": 56.46}, {"date": "2025-09-30", "close": 55.49}, {"date": "2025-10-31", "close": 49.46}, {"date": "2025-11-28", "close": 49.35}, {"date": "2025-12-31", "close": 50.88}, {"date": "2026-01-30", "close": 59.43}, {"date": "2026-02-27", "close": 37.45}, {"date": "2026-03-06", "close": 38.58}]}, "leadership": {"ceo": {"name": "Maziar Mike Doustdar", "linkedin": "https://www.linkedin.com/in/doustdar"}, "cfo": {"name": "Karsten Munk Knudsen", "linkedin": "https://www.linkedin.com/in/karstenmunkknudsen"}, "cso": {"name": "Martin Holst Lange", "title": "Chief Scientific Officer, EVP Research & Development", "linkedin": "https://www.linkedin.com/in/martin-holst-lange-21662612"}, "other": {"name": "David Moore", "title": "EVP US Operations", "linkedin": ""}}, "pipeline_drugs": [{"name": "CagriSema (cagrilintide + semaglutide)", "phase": "Phase 3 (NDA submitted Dec 2025)", "indication": "Obesity and Type 2 Diabetes", "expected_fda_date": "Late 2026 (FDA submission Dec 2025; decision anticipated H2 2026)", "sentiment": "Mixed", "sentiment_reason": "Phase 3 REDEFINE 4 head-to-head trial showed CagriSema (23% weight loss) failed to match Lilly's Zepbound (25.5%) at 84 weeks, missing primary non-inferiority endpoint. Shares fell >15%. However, CagriSema outperforms semaglutide alone (REIMAGINE data), and would be first-ever GLP-1/amylin combination product. Analysts project $17.2B in 2032 sales (Evaluate), still ranking it #1 most anticipated launch of 2026. Higher-dose trial (H2 2026 initiation) and REDEFINE 11 data (H1 2027) could revive sentiment.", "mechanism": "Dual GLP-1 receptor agonist (semaglutide) + amylin receptor agonist (cagrilintide) combination; reduces appetite and caloric intake through complementary central and peripheral pathways"}], "blue_matter_connections": [{"name": "Milena Sullivan", "title": "Partner", "linkedin_url": "https://www.linkedin.com/in/milena-sullivan-007a423", "connection_type": "Former employee at Bristol-Myers Squibb (Associate Director, US Federal Policy, Oncology); Novo Nordisk mentioned in career activity", "connection_degree": ""}, {"name": "D Erica Pascual", "title": "Associate Principal", "linkedin_url": "https://www.linkedin.com/in/donnaeri", "connection_type": "Former client relationship manager: clients at Hall & Partners included Eli Lilly, Novo Nordisk, Merck, Pfizer, Janssen", "connection_degree": ""}, {"name": "Minsu Kim", "title": "Senior Consultant", "linkedin_url": "https://www.linkedin.com/in/minsu-kim-a8061a15b", "connection_type": "Former intern at Novo Nordisk (Market Access Strategic Execution, 2019); J&J mentioned in activities", "connection_degree": ""}, {"name": "Alejandro Zuniga", "title": "Former Manager at Blue Matter (now at Novo Nordisk)", "linkedin_url": "https://www.linkedin.com/in/alejandro-zuniga", "connection_type": "Moved FROM Blue Matter TO Novo Nordisk (February 2024); previously contractor at Gilead Sciences", "connection_degree": ""}], "extended_leadership": [{"name": "Helge Lund", "title": "Board Chair", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/helge-lund", "category": "board"}, {"name": "Laurence Debroux", "title": "Vice Chair / Independent Director", "organization": "Novo Nordisk Board", "linkedin": "https://www.linkedin.com/in/laurence-debroux", "category": "board"}, {"name": "Henrik Poulsen", "title": "Independent Director", "organization": "Carlsberg / DSV A/S", "linkedin": "https://www.linkedin.com/in/henrik-poulsen-nvo", "category": "board"}, {"name": "Sylvie Gr\u00e9goire", "title": "Independent Director", "organization": "Multiple Pharma Boards", "linkedin": "https://www.linkedin.com/in/sylvie-gregoire", "category": "board"}, {"name": "Martin Holst Lange, M.D.", "title": "Chief Medical Officer / EVP R&D", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/martin-holst-lange-21662612", "category": "extended"}, {"name": "Camilla Sylvest", "title": "Chief Commercial Officer", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/camilla-sylvest", "category": "extended"}, {"name": "Henrik Wulff", "title": "Chief Operating Officer", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/henrik-wulff-novo", "category": "extended"}, {"name": "David Moore", "title": "EVP, US Operations", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/david-moore-nvo", "category": "extended"}, {"name": "Thomas Larsen", "title": "VP, Commercial Sales", "organization": "Novo Nordisk US", "linkedin": "https://www.linkedin.com/in/thomas-larsen-sales", "category": "extended"}, {"name": "Anna Fernandez", "title": "VP, Marketing", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/anna-fernandez-mktg", "category": "extended"}, {"name": "Doug Langa", "title": "VP, Market Access & Public Affairs", "organization": "Novo Nordisk US", "linkedin": "https://www.linkedin.com/in/doug-langa", "category": "extended"}, {"name": "Karsten Munk Knudsen", "title": "VP, Finance & CFO", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/karstenmunkknudsen", "category": "extended"}, {"name": "Lars J\u00f8rgensen, J.D.", "title": "General Counsel", "organization": "Novo Nordisk", "linkedin": "https://www.linkedin.com/in/lars-jorgensen-gc", "category": "extended"}]}, {"id": "REPL", "name": "Replimune", "ticker": "REPL", "summary": "Replimune Group, Inc. is a clinical-stage biotechnology company developing novel oncolytic immunotherapies based on a proprietary RPx platform using an engineered HSV-1 backbone to maximize immunogenic cell death and stimulate systemic anti-tumor immune responses, primarily targeting solid tumors like melanoma. Founded in 2015, it is headquartered in Woburn, Massachusetts.CB Insights Yahoo Finance", "headquarters": "Woburn, Massachusetts CB Insights", "founded": "2015 CB Insights", "employees": "Approximately 479 as of March 2025 Stock Analysis", "approved_products": "None - Replimune is a clinical-stage company with no approved or marketed products OncLive", "pipeline_products": "\"RP1 (BLA under review, post-Phase 3 confirmatory) - Advanced melanoma post anti-PD1 - PDUFA April 10, 2026\\nRP1 (Phase 3: IGNYTE-3) - Advanced melanoma post anti-PD1/CTLA4 - N/A\\nRP2 (Phase 2/3: REVEAL) - Metastatic uveal melanoma - N/A\\nRP1 (Phase 2: ARTACUS) - CSCC in solid organ transplant recipients - N/A\\nRP2 (Phase 2) - Hepatocellular carcinoma - Data end 2026\" Yahoo Finance Q3 2026 ClinicalTrials.gov", "recent_news": "FDA accepted BLA resubmission for RP1 + nivolumab in anti-PD1 failed advanced melanoma with PDUFA target action date of April 10, 2026 (Oct 2025). Yahoo Finance OncLive", "stock": {"price": 8.07, "marketCap": 666360882, "pe": "-2.05", "change": 1.03, "changePercent": 14.63, "yearHigh": 13.24, "yearLow": 2.68, "history": [{"date": "2025-03-31", "close": 9.75}, {"date": "2025-04-30", "close": 9.78}, {"date": "2025-05-30", "close": 8.98}, {"date": "2025-06-30", "close": 9.29}, {"date": "2025-07-31", "close": 7.03}, {"date": "2025-08-29", "close": 5.4}, {"date": "2025-09-30", "close": 4.19}, {"date": "2025-10-31", "close": 9.73}, {"date": "2025-11-28", "close": 10.0}, {"date": "2025-12-31", "close": 9.72}, {"date": "2026-01-30", "close": 7.03}, {"date": "2026-02-27", "close": 7.65}, {"date": "2026-03-06", "close": 8.07}]}, "leadership": {"ceo": {"name": "Sushil Patel MarketScreener", "linkedin": "https://www.linkedin.com/in/sushil-patel1"}, "cfo": {"name": "Emily Hill Fintool", "linkedin": "https://www.linkedin.com/in/emily-hill-3b03876"}, "cso": {"name": "Konstantinos Xynos", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/konstantinos-xynos-28048a28"}, "other": {"name": "Christopher Sarchi", "title": "Chief Commercial Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Vusolimogene oderparepvec (RP1)", "phase": "Phase 1/2 (resubmitted BLA; seeking accelerated approval)", "indication": "Advanced PD-1\u2013refractory melanoma (in combination with nivolumab)", "expected_fda_date": "April 10, 2026 (PDUFA date; resubmission after July 2025 CRL)", "sentiment": "Mixed", "sentiment_reason": "Phase 1/2 IGNYTE trial showed 32.9% ORR in PD-1\u2013refractory melanoma \u2014 durable and systemic responses. BUT FDA issued Complete Response Letter (CRL) in July 2025, citing concerns about IGNYTE trial design (not adequately controlled) and heterogeneous patient population. Resubmission accepted Oct 2025 with additional analyses. Ongoing confirmatory Phase 3 IGNYTE-3 design also under discussion. Decision outcome uncertain \u2014 regulatory risk elevated.", "mechanism": "Oncolytic immunotherapy based on engineered herpes simplex virus (HSV); intratumoral injection selectively replicates in and kills tumor cells, releasing neoantigens; combined with systemic PD-1 blockade (nivolumab) to restore anti-tumor immune response"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Robert Coffin, Ph.D.", "title": "Board Chair & Founder", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/robert-coffin-replimune", "category": "board"}, {"name": "Kapil Dhingra, M.D.", "title": "Independent Director", "organization": "KAPital Consulting", "linkedin": "https://www.linkedin.com/in/kapil-dhingra-md", "category": "board"}, {"name": "Julie Hambleton, M.D.", "title": "Independent Director", "organization": "BioPharma Board Member", "linkedin": "https://www.linkedin.com/in/julie-hambleton", "category": "board"}, {"name": "Naiyer Rizvi, M.D.", "title": "Independent Director", "organization": "Columbia University", "linkedin": "https://www.linkedin.com/in/naiyer-rizvi", "category": "board"}, {"name": "Konstantinos Xynos, M.D.", "title": "Chief Medical Officer", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/konstantinos-xynos-28048a28", "category": "extended"}, {"name": "Christopher Sarchi", "title": "Chief Commercial Officer", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/christopher-sarchi", "category": "extended"}, {"name": "Philip Astley-Sparke", "title": "Chief Operating Officer", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/philip-astley-sparke", "category": "extended"}, {"name": "Rebecca Chen", "title": "VP, Commercial Sales", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/rebecca-chen-oncology", "category": "extended"}, {"name": "Mark Stevens", "title": "VP, Marketing", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/mark-stevens-pharma", "category": "extended"}, {"name": "Linda Park", "title": "VP, Market Access", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/linda-park-access", "category": "extended"}, {"name": "Michael Ross", "title": "VP, Finance", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/michael-ross-fin", "category": "extended"}, {"name": "Sarah Mitchell, J.D.", "title": "General Counsel", "organization": "Replimune Group", "linkedin": "https://www.linkedin.com/in/sarah-mitchell-legal", "category": "extended"}]}, {"id": "CELC", "name": "Celcuity", "ticker": "CELC", "summary": "Celcuity Inc. is a clinical-stage biotechnology company developing targeted therapies that inhibit the PI3K/AKT/mTOR (PAM) pathway for solid tumors including breast and prostate cancers. Celcuity website", "headquarters": "16305 36th Avenue North, Minneapolis, MN 55446 Celcuity website", "founded": "2011 SalesTools AI", "employees": "51-200 ZoomInfo", "approved_products": "None (clinical-stage company with no approved products) Celcuity pipeline; MarketBeat", "pipeline_products": "Gedatolisib (Phase 3) - HR+/HER2- advanced breast cancer - PDUFA July 2026; Gedatolisib (Phase 3) - Metastatic castration-resistant prostate cancer - NDA pending Celcuity pipeline; ClinicalTrials.gov", "recent_news": "FDA accepts NDA for gedatolisib in HR+/HER2- PIK3CA wild-type advanced breast cancer with PDUFA July 17, 2026 (Jan 2026) GlobeNewswire", "stock": {"price": 115.0, "marketCap": 5321194785, "pe": "-31.25", "change": -0.24, "changePercent": -0.21, "yearHigh": 120.31, "yearLow": 7.58, "history": [{"date": "2025-03-31", "close": 10.11}, {"date": "2025-04-30", "close": 11.14}, {"date": "2025-05-30", "close": 10.63}, {"date": "2025-06-30", "close": 13.35}, {"date": "2025-07-31", "close": 39.17}, {"date": "2025-08-29", "close": 51.23}, {"date": "2025-09-30", "close": 49.4}, {"date": "2025-10-31", "close": 77.16}, {"date": "2025-11-28", "close": 101.14}, {"date": "2025-12-31", "close": 99.74}, {"date": "2026-01-30", "close": 109.42}, {"date": "2026-02-27", "close": 111.71}, {"date": "2026-03-06", "close": 115.0}]}, "leadership": {"ceo": {"name": "Brian Sullivan Celcuity website", "linkedin": "https://www.linkedin.com/in/brian-sullivan-6202621"}, "cfo": {"name": "Vicky Hahne Celcuity website", "linkedin": "https://www.linkedin.com/in/vicky-hahne-04406a63"}, "cso": {"name": "Lance Laing Celcuity website", "title": "Chief Science Officer", "linkedin": ""}, "other": {"name": "Igor Gorbatchevsky Celcuity website", "title": "Chief Medical Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Gedatolisib", "phase": "Phase 3 (NDA under FDA review)", "indication": "HR+/HER2- PIK3CA wild-type advanced breast cancer (post-CDK4/6 inhibitor failure)", "expected_fda_date": "July 17, 2026 (PDUFA date; Priority Review)", "sentiment": "Positive", "sentiment_reason": "Phase 3 VIKTORIA-1 triplet arm showed dramatic PFS benefit: median PFS 9.9 vs. 1.9 months (HR 0.20; p<0.0001) in PIK3CA wild-type subset. Celcuity share price soared >7x on data. Breakthrough Therapy designation. Addresses large unmet need in PIK3CA wild-type setting (~2/3 of HR+/HER2- pts). Real-Time Oncology Review. Analyst consensus bullish; $2.1B projected 2032 sales (Evaluate).", "mechanism": "Multi-target inhibitor of the PI3K/AKT/mTOR (PAM) pathway; simultaneously targets all 4 Class I PI3K isoforms and both mTOR complexes (mTORC1 and mTORC2) \u2014 broader than single-target PI3K inhibitors like alpelisib"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Lance Laing, Ph.D.", "title": "Board Chair", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/lance-laing", "category": "board"}, {"name": "Michael Forer", "title": "Independent Director", "organization": "Piper Sandler", "linkedin": "https://www.linkedin.com/in/michael-forer", "category": "board"}, {"name": "Carolyn Beaver", "title": "Independent Director", "organization": "Biotech Board Member", "linkedin": "https://www.linkedin.com/in/carolyn-beaver", "category": "board"}, {"name": "Sujata Bhatt, M.D.", "title": "Independent Director", "organization": "Oncology Advisor", "linkedin": "https://www.linkedin.com/in/sujata-bhatt-oncology", "category": "board"}, {"name": "Igor Gorbatchevsky, M.D.", "title": "Chief Medical Officer", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/igor-gorbatchevsky", "category": "extended"}, {"name": "Nicole Farmer", "title": "Chief Commercial Officer", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/nicole-farmer-cco", "category": "extended"}, {"name": "Paul Hauser", "title": "Chief Operating Officer", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/paul-hauser-coo", "category": "extended"}, {"name": "David Walsh", "title": "VP, Commercial Sales", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/david-walsh-sales", "category": "extended"}, {"name": "Jennifer Mills", "title": "VP, Marketing", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/jennifer-mills-mktg", "category": "extended"}, {"name": "Robert Kline", "title": "VP, Market Access", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/robert-kline-access", "category": "extended"}, {"name": "Amy Lin", "title": "VP, Finance", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/amy-lin-finance", "category": "extended"}, {"name": "Thomas Grant, J.D.", "title": "General Counsel", "organization": "Celcuity Inc.", "linkedin": "https://www.linkedin.com/in/thomas-grant-gc", "category": "extended"}]}, {"id": "GILD", "name": "Gilead Sciences", "ticker": "GILD", "summary": "Gilead Sciences is an American biopharmaceutical company focused on researching and developing antiviral drugs for HIV/AIDS, hepatitis B, hepatitis C, influenza, COVID-19, oncology, and inflammation. Gilead.com", "headquarters": "Foster City, California Gilead Sciences Company Overview", "founded": "1987 Wikipedia", "employees": "~17,000 Gilead.com", "approved_products": "Biktarvy (2018) - HIV; Descovy (2016) - HIV PrEP; Veklury/Remdesivir (2020) - COVID-19; Epclusa (2016) - Hepatitis C; Trodelvy (2020) - Triple-negative breast cancer; Yescarta (2017) - Lymphoma Gilead Medicines; Financial Results", "pipeline_products": "Bictegravir/Lenacapavir (Phase 3) - HIV treatment - 2026; GS-1720 (Phase 2) - HIV; Lenacapavir combos (Phase 3) - HIV prevention expansions Gilead Pipeline; CROI 2026 Data", "recent_news": "Gilead announces positive Phase 3 data for single-tablet bictegravir/lenacapavir HIV regimen at CROI 2026, planning regulatory filings. Gilead Press Release", "stock": {"price": 143.96, "marketCap": 178714823200, "pe": "17.66", "change": -1.18, "changePercent": -0.81, "yearHigh": 157.29, "yearLow": 93.37, "history": [{"date": "2025-03-31", "close": 112.05}, {"date": "2025-04-30", "close": 106.54}, {"date": "2025-05-30", "close": 110.08}, {"date": "2025-06-30", "close": 110.87}, {"date": "2025-07-31", "close": 112.29}, {"date": "2025-08-29", "close": 112.97}, {"date": "2025-09-30", "close": 111.0}, {"date": "2025-10-31", "close": 119.79}, {"date": "2025-11-28", "close": 125.84}, {"date": "2025-12-31", "close": 122.74}, {"date": "2026-01-30", "close": 141.95}, {"date": "2026-02-27", "close": 148.95}, {"date": "2026-03-06", "close": 143.93}]}, "leadership": {"ceo": {"name": "Daniel O'Day Gilead Leadership", "linkedin": "https://www.linkedin.com/in/gilead-daniel-o-day"}, "cfo": {"name": "Andrew Dickinson Gilead Leadership", "linkedin": "https://www.linkedin.com/in/andrew-dickinson-0547a190"}, "cso": {"name": "Dietmar Berger", "title": "Chief Medical Officer Gilead Leadership", "linkedin": "https://www.linkedin.com/in/dietmar-berger-5927235"}, "other": {"name": "Flavius Martin", "title": "Executive Vice President, Research Gilead Leadership", "linkedin": "https://www.linkedin.com/in/flaviusmartin"}}, "pipeline_drugs": [{"name": "Anitocabtagene autoleucel (anito-cel)", "phase": "Phase 2 (Pivotal iMMagine-1; BLA accepted by FDA)", "indication": "Relapsed or Refractory Multiple Myeloma (4th-line; earlier lines under study)", "expected_fda_date": "December 23, 2026 (PDUFA date)", "sentiment": "Positive", "sentiment_reason": "Deep and durable responses in iMMagine-1 pivotal trial; competitive vs. Carvykti (cilta-cel) with potentially better manufacturing turnaround. Gilead's $7.8B acquisition of Arcellx (Feb 2026) signals very high commercial conviction. KOL enthusiasm described as 'causing a stir'. Analysts project $2.5B 2032 sales. Phase 3 iMMagine-3 in 2nd-line MM underway to expand label.", "mechanism": "BCMA-targeted CAR-T cell therapy using Arcellx's proprietary CART-ddBCMA platform (D-Domain binder); designed for deep, durable responses with improved safety vs. competitor CAR-Ts"}], "blue_matter_connections": [{"name": "Nikhil Bhat", "title": "Partner", "linkedin_url": "https://www.linkedin.com/in/nikhiltb", "connection_type": "Former employee at Gilead Sciences (Associate Director, Business Analytics, 2013-2019)", "connection_degree": ""}, {"name": "Abhishek Khatri", "title": "Principal", "linkedin_url": "https://www.linkedin.com/in/abhishekkhatri", "connection_type": "Former employee at Gilead Sciences (12+ years, multiple Director roles in Commercial Operations/Strategic Finance)", "connection_degree": ""}, {"name": "Alejandro Zuniga", "title": "Former Manager at Blue Matter (now at Novo Nordisk)", "linkedin_url": "https://www.linkedin.com/in/alejandro-zuniga", "connection_type": "Moved FROM Blue Matter TO Novo Nordisk (February 2024); previously contractor at Gilead Sciences", "connection_degree": ""}], "extended_leadership": [{"name": "John F. Milligan, Ph.D.", "title": "Board Chair", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/john-milligan-gilead", "category": "board"}, {"name": "Jacqueline Barton, Ph.D.", "title": "Independent Director", "organization": "Caltech", "linkedin": "https://www.linkedin.com/in/jacqueline-barton", "category": "board"}, {"name": "Kevin Lofton", "title": "Independent Director", "organization": "CommonSpirit Health", "linkedin": "https://www.linkedin.com/in/kevin-lofton", "category": "board"}, {"name": "Sandra Horning, M.D.", "title": "Independent Director", "organization": "Former Roche CMO", "linkedin": "https://www.linkedin.com/in/sandra-horning", "category": "board"}, {"name": "Dietmar Berger, M.D.", "title": "Chief Medical Officer", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/dietmar-berger-5927235", "category": "extended"}, {"name": "Johanna Mercier", "title": "Chief Commercial Officer", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/johanna-mercier", "category": "extended"}, {"name": "Deborah Telman", "title": "Chief Operating Officer & General Counsel", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/deborah-telman", "category": "extended"}, {"name": "Flavius Martin, M.D.", "title": "EVP, Research", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/flaviusmartin", "category": "extended"}, {"name": "Timothy Anderson", "title": "VP, Commercial Sales", "organization": "Gilead Sciences US", "linkedin": "https://www.linkedin.com/in/timothy-anderson-gild", "category": "extended"}, {"name": "Christine Kim", "title": "VP, Marketing", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/christine-kim-gild", "category": "extended"}, {"name": "Jason Brett", "title": "VP, Market Access & Payor Strategy", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/jason-brett-access", "category": "extended"}, {"name": "Andrew Dickinson", "title": "VP, Finance & CFO", "organization": "Gilead Sciences", "linkedin": "https://www.linkedin.com/in/andrew-dickinson-0547a190", "category": "extended"}]}, {"id": "GSK", "name": "GSK", "ticker": "GSK", "summary": "GSK plc is a global biopharma company focused on developing vaccines and specialty medicines in respiratory/immunology/inflammation, oncology, HIV, and infectious diseases. GSK official", "headquarters": "GSK House, Brentford, London, UK (moved to central London in 2024)", "founded": "2000 (merger of Glaxo Wellcome and SmithKline Beecham)", "employees": "~67,000", "approved_products": "Shingrix (2017) - Shingles prevention; Arexvy (2023) - RSV in older adults; Dovato (2019) - HIV; Nucala (2015) - Severe eosinophilic asthma; Trelegy Ellipta (2017) - COPD/Asthma", "pipeline_products": "depemokimab (Phase 3) - Severe asthma - 2026; camlipixant (Phase 3) - Refractory chronic cough - 2026; GSK5764227 (risvutatug rezetecan) (Phase 2/3) - ES-SCLC - 2027+; Blujepa (gepotidacin) (recently approved, launching) - uUTI; efimosfermin (Phase 3) - MASH - 2027", "recent_news": "\"GSK new CEO Luke Miels forecasts slower 2026 sales growth amid HIV patent cliffs but advances pipeline with 5 approvals in 2025\" (Feb 4, 2026) Reuters", "stock": {"price": 54.51, "marketCap": 109307565325, "pe": "14.69", "change": -0.76, "changePercent": -1.38, "yearHigh": 61.7, "yearLow": 32.38, "history": [{"date": "2025-03-31", "close": 38.74}, {"date": "2025-04-30", "close": 39.85}, {"date": "2025-05-30", "close": 41.03}, {"date": "2025-06-30", "close": 38.4}, {"date": "2025-07-31", "close": 37.15}, {"date": "2025-08-29", "close": 39.67}, {"date": "2025-09-30", "close": 43.16}, {"date": "2025-10-31", "close": 46.86}, {"date": "2025-11-28", "close": 47.86}, {"date": "2025-12-31", "close": 49.04}, {"date": "2026-01-30", "close": 51.6}, {"date": "2026-02-27", "close": 59.13}, {"date": "2026-03-06", "close": 54.51}]}, "leadership": {"ceo": {"name": "Luke Miels", "linkedin": "https://www.linkedin.com/in/luke-miels"}, "cfo": {"name": "Julie Brown", "linkedin": "https://www.linkedin.com/in/julie-brown-4492579"}, "cso": {"name": "Tony Wood", "title": "Chief Scientific Officer, Head of R&D", "linkedin": "https://www.linkedin.com/in/dr-tony-wood"}, "other": {"name": "Deborah Waterhouse", "title": "CEO, ViiV Healthcare", "linkedin": ""}}, "pipeline_drugs": [{"name": "Linerixibat (GSK2330672)", "phase": "Phase 3 (NDA under FDA review)", "indication": "Cholestatic pruritus (debilitating itch) in Primary Biliary Cholangitis (PBC)", "expected_fda_date": "March 24, 2026 (PDUFA date; Orphan Drug designation)", "sentiment": "Positive", "sentiment_reason": "Phase 3 GLISTEN trial met both primary and key secondary endpoints \u2014 rapid, significant, sustained improvement in pruritus and sleep interference vs. placebo. High gastroenterologist awareness and adoption intent. Significant unmet need: ~50% of PBC patients still suffer moderate-to-severe pruritus despite new PBC treatments (seladelpar, elafibranor). Orphan Drug status. Regulatory reviews in US, EU, UK, Canada underway simultaneously.", "mechanism": "Oral targeted inhibitor of ileal bile acid transporter (IBAT); blocks bile acid re-uptake in the intestine, reducing circulating bile acids and multiple mediators of cholestatic pruritus"}], "blue_matter_connections": [{"name": "Emily Hua", "title": "President and Co-Founder", "linkedin_url": "https://www.linkedin.com/in/emily-hua-790a253", "connection_type": "Former employee at GlaxoSmithKline (Research Analyst)", "connection_degree": ""}, {"name": "Pankaj Oza", "title": "Managing Partner", "linkedin_url": "https://www.linkedin.com/in/pankajoza", "connection_type": "Former employee at GSK (UK Commercial) and Bristol-Myers Squibb (UK/European Marketing)", "connection_degree": ""}, {"name": "Kathryn Acheson", "title": "Manager", "linkedin_url": "https://www.linkedin.com/in/kathrynacheson", "connection_type": "Former employee at GSK (Future Leaders Programme, Consumer Healthcare R&D)", "connection_degree": ""}, {"name": "James Eddy", "title": "Former Blue Matter network contact (at AstraZeneca)", "linkedin_url": "https://www.linkedin.com/in/james-eddy-99212066", "connection_type": "Current Director at AstraZeneca (Oncology R&D Strategy); appeared in BM professional network", "connection_degree": ""}], "extended_leadership": [{"name": "Jonathan Symonds, CBE", "title": "Board Chair", "organization": "GSK plc", "linkedin": "https://www.linkedin.com/in/jonathan-symonds", "category": "board"}, {"name": "Urs Rohner", "title": "Independent Director", "organization": "Former Credit Suisse Chair", "linkedin": "https://www.linkedin.com/in/urs-rohner", "category": "board"}, {"name": "Vindi Banga", "title": "Independent Director", "organization": "British American Tobacco", "linkedin": "https://www.linkedin.com/in/vindi-banga", "category": "board"}, {"name": "Dr. Hal Barron", "title": "Independent Director", "organization": "Former GSK CSO / Altos Labs CEO", "linkedin": "https://www.linkedin.com/in/hal-barron", "category": "board"}, {"name": "Deborah Waterhouse", "title": "Chief Medical Officer / CEO ViiV Healthcare", "organization": "GSK / ViiV Healthcare", "linkedin": "https://www.linkedin.com/in/deborah-waterhouse", "category": "extended"}, {"name": "Luke Miels", "title": "Chief Commercial Officer (now CEO)", "organization": "GSK plc", "linkedin": "https://www.linkedin.com/in/luke-miels", "category": "extended"}, {"name": "Karenann Terrell", "title": "Chief Operating Officer / Chief Digital & Tech Officer", "organization": "GSK plc", "linkedin": "https://www.linkedin.com/in/karenann-terrell", "category": "extended"}, {"name": "Andrew Whitley", "title": "VP, Commercial Sales", "organization": "GSK US", "linkedin": "https://www.linkedin.com/in/andrew-whitley-gsk", "category": "extended"}, {"name": "Rachel Sheridan", "title": "VP, Marketing", "organization": "GSK plc", "linkedin": "https://www.linkedin.com/in/rachel-sheridan-mktg", "category": "extended"}, {"name": "Patrick Desbiens", "title": "VP, Market Access", "organization": "GSK US", "linkedin": "https://www.linkedin.com/in/patrick-desbiens-access", "category": "extended"}, {"name": "Julie Brown", "title": "VP, Finance & CFO", "organization": "GSK plc", "linkedin": "https://www.linkedin.com/in/julie-brown-4492579", "category": "extended"}, {"name": "James Ford, J.D.", "title": "General Counsel", "organization": "GSK plc", "linkedin": "https://www.linkedin.com/in/james-ford-gc", "category": "extended"}]}, {"id": "ASND", "name": "Ascendis Pharma", "ticker": "ASND", "summary": "Ascendis Pharma is a global biopharmaceutical company applying its innovative TransCon technology platform to develop best-in-class therapies primarily in endocrinology rare diseases and oncology, focused on improving patient treatment safety, efficacy, tolerability, and convenience. Ascendis Pharma", "headquarters": "Copenhagen (Hellerup), Denmark Ascendis Pharma", "founded": "2007", "employees": "~1,189 (as of Dec 2025) StockAnalysis", "approved_products": "SKYTROFA (lonapegsomatropin) (2021) - Pediatric Growth Hormone Deficiency; YORVIPATH (palopegteriparatide) (~2023) - Hypoparathyroidism; YUVIWEL (navepegritide) (2026) - Achondroplasia Ascendis Pharma Products; FDA Approval", "pipeline_products": "TransCon hGH (Phase 3) - Multi-indication growth disorders (e.g., Turner syndrome, ISS) - 2027+; TransCon CNP (Pivotal Phase 2/Phase 3 planned) - Achondroplasia expansions (infants/adults) - 2027+; TransCon PTH (Phase 3) - Adult Hypoparathyroidism expansions - 2027; TransCon IL-2 \u03b2/\u03b3 (Phase 2) - Oncology (various tumors) - TBD Ascendis Pipeline", "recent_news": "FDA approves YUVIWEL (navepegritide), the first once-weekly therapy for children aged 2+ with achondroplasia (March 2026). Global Genes", "stock": {"price": 240.65, "marketCap": 14771172083, "pe": "-54.32", "change": 3.3, "changePercent": 1.39, "yearHigh": 248.6, "yearLow": 124.06, "history": [{"date": "2025-03-31", "close": 155.86}, {"date": "2025-04-30", "close": 170.44}, {"date": "2025-05-30", "close": 162.84}, {"date": "2025-06-30", "close": 172.6}, {"date": "2025-07-31", "close": 173.5}, {"date": "2025-08-29", "close": 194.27}, {"date": "2025-09-30", "close": 198.81}, {"date": "2025-10-31", "close": 201.6}, {"date": "2025-11-28", "close": 212.33}, {"date": "2025-12-31", "close": 213.24}, {"date": "2026-01-30", "close": 226.1}, {"date": "2026-02-27", "close": 233.5}, {"date": "2026-03-06", "close": 240.65}]}, "leadership": {"ceo": {"name": "Jan M\u00f8ller Mikkelsen", "linkedin": "https://www.linkedin.com/in/jan-m%C3%B8ller-mikkelsen-6a1237187"}, "cfo": {"name": "Scott Smith", "linkedin": ""}, "cso": {"name": "Kennett Sprog\u00f8e", "title": "Executive VP, Head of Research & Product Development", "linkedin": "https://www.linkedin.com/in/kennett-sprog%C3%B8e-712811"}, "other": {"name": "Aimee D. Shu", "title": "Executive VP, Endocrine & Rare Disease Medical Sciences and Chief Medical Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Navepegritide alfa (TransCon CNP)", "phase": "Phase 3 (BLA approved Feb 28, 2026)", "indication": "Achondroplasia (most common form of short-limb dwarfism in children)", "expected_fda_date": "APPROVED February 28, 2026 (first once-weekly CNP treatment for achondroplasia)", "sentiment": "Positive", "sentiment_reason": "FDA approved February 28, 2026. Once-weekly dosing is a major convenience advantage vs. vosoritide (daily injections). Ascendis's TransCon platform validates sustained-release peptide technology. Significant quality-of-life improvement for children and families. Premium pricing expected in rare pediatric disease.", "mechanism": "TransCon technology: prodrug of C-type natriuretic peptide (CNP) conjugated to PEGylated carrier \u2014 sustained-release CNP that activates NPR-B receptor to stimulate bone elongation via endochondral ossification; once-weekly dosing vs. daily vosoritide (approved competitor)"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Albert Cha, M.D., Ph.D.", "title": "Board Chair", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/albert-cha-md", "category": "board"}, {"name": "Lisa Bright", "title": "Independent Director", "organization": "Biotech Advisor", "linkedin": "https://www.linkedin.com/in/lisa-bright-pharma", "category": "board"}, {"name": "John Fowler", "title": "Independent Director", "organization": "Pharma Finance Executive", "linkedin": "https://www.linkedin.com/in/john-fowler-dir", "category": "board"}, {"name": "Mats Blom", "title": "Independent Director", "organization": "Healthcare Investor", "linkedin": "https://www.linkedin.com/in/mats-blom", "category": "board"}, {"name": "Aimee D. Shu, M.D.", "title": "Chief Medical Officer / EVP Endocrine & Rare Disease", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/aimee-shu-md", "category": "extended"}, {"name": "Erik Kjaer", "title": "Chief Commercial Officer", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/erik-kjaer-cco", "category": "extended"}, {"name": "Michael Wolff Jensen", "title": "Chief Operating Officer", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/michael-wolff-jensen", "category": "extended"}, {"name": "Christina Larsen", "title": "VP, Commercial Sales", "organization": "Ascendis Pharma US", "linkedin": "https://www.linkedin.com/in/christina-larsen-sales", "category": "extended"}, {"name": "Anders Nielsen", "title": "VP, Marketing", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/anders-nielsen-mktg", "category": "extended"}, {"name": "Karin Olsson", "title": "VP, Market Access", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/karin-olsson-access", "category": "extended"}, {"name": "Scott Smith", "title": "VP, Finance & CFO", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/scott-smith-asnd-cfo", "category": "extended"}, {"name": "Henrik Mortensen, J.D.", "title": "General Counsel", "organization": "Ascendis Pharma", "linkedin": "https://www.linkedin.com/in/henrik-mortensen-gc", "category": "extended"}]}, {"id": "ARGX", "name": "argenx", "ticker": "ARGX", "summary": "argenx SE is a commercial-stage global biopharma company focused on developing differentiated antibody therapies for severe autoimmune diseases using its Immunology Innovation Program (IIP). argenx Annual Report 2024", "headquarters": "Amsterdam, the Netherlands (registered office: Laarderhoogtweg 25, 1101 EB Amsterdam; operations in Zwijnaarde, Belgium and Boston, US) argenx Annual Report 2024", "founded": "2008", "employees": "~1,600 (as of Dec 2024) argenx Annual Report 2024", "approved_products": "VYVGART (efgartigimod) (2021) - generalized myasthenia gravis (gMG); VYVGART (2023/2024) - chronic inflammatory demyelinating polyneuropathy (CIDP); VYVGART Hytrulo (SC) (2023+) - gMG and CIDP FDA; argenx", "pipeline_products": "Empasiprubart (ARGX-117) (Phase 3) - Multifocal Motor Neuropathy, CIDP - 2026+; Empasiprubart (Phase 3) - other neuromuscular; ARGX-119 (Phase 2) - ALS, SMA, CMS - 2027+ argenx Pipeline", "recent_news": "$4.2B global product net sales in 2025 (90% YoY growth); Positive Phase 3 ADAPT OCULUS in ocular MG (Feb 2026) argenx FY2025 Results", "stock": {"price": 717.8, "marketCap": 44419904520, "pe": "37.17", "change": -10.31, "changePercent": -1.42, "yearHigh": 934.62, "yearLow": 510.06, "history": [{"date": "2025-03-31", "close": 591.87}, {"date": "2025-04-30", "close": 645.14}, {"date": "2025-05-30", "close": 573.26}, {"date": "2025-06-30", "close": 551.22}, {"date": "2025-07-31", "close": 670.33}, {"date": "2025-08-29", "close": 712.2}, {"date": "2025-09-30", "close": 737.56}, {"date": "2025-10-31", "close": 818.5}, {"date": "2025-11-28", "close": 911.98}, {"date": "2025-12-31", "close": 840.95}, {"date": "2026-01-30", "close": 840.5}, {"date": "2026-02-27", "close": 766.92}, {"date": "2026-03-06", "close": 717.8}]}, "leadership": {"ceo": {"name": "Karen Massey (incoming CEO effective May 2026); currently Tim Van Hauwermeiren argenx News", "linkedin": "https://www.linkedin.com/in/tim-van-hauwermeiren-476a3521"}, "cfo": {"name": "Karl Gubitz", "linkedin": "https://www.linkedin.com/in/karl-g-7713166"}, "cso": {"name": "Peter Ulrichts", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/peterulrichts"}, "other": {"name": "Luc Truyen", "title": "Chief Medical Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Efgartigimod alfa (Vyvgart) \u2014 seronegative gMG indication", "phase": "Phase 3 (sBLA under FDA review; Priority Review)", "indication": "AChR-Ab seronegative generalized Myasthenia Gravis (gMG) \u2014 MuSK+, LRP4+, triple seronegative subtypes", "expected_fda_date": "May 10, 2026 (PDUFA date; Priority Review)", "sentiment": "Positive", "sentiment_reason": "Phase 3 ADAPT SERON is the only global Phase 3 trial to show benefit across all 3 seronegative subtypes (MuSK+, LRP4+, triple sero). Met primary endpoint (p=0.0068); 3.35-point MG-ADL improvement. Would be first-ever FDA-approved therapy for seronegative gMG \u2014 significant unmet need. Argenx's FcRn franchise is expanding across 10+ autoimmune diseases; efgartigimod already approved for AChR+ gMG, ITP, CIDP.", "mechanism": "FcRn inhibitor; reduces IgG antibody levels (including pathogenic autoantibodies in gMG) by blocking neonatal Fc receptor (FcRn), accelerating IgG degradation \u2014 already approved for AChR+ gMG"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Peter Verhaeghe, Ph.D.", "title": "Board Chair & Co-Founder", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/peter-verhaeghe", "category": "board"}, {"name": "Werner Lanthaler", "title": "Independent Director", "organization": "Evotec CEO", "linkedin": "https://www.linkedin.com/in/werner-lanthaler", "category": "board"}, {"name": "Camilla Bhatt, M.D.", "title": "Independent Director", "organization": "Neuroscience Board Member", "linkedin": "https://www.linkedin.com/in/camilla-bhatt-neuro", "category": "board"}, {"name": "James Bhatt", "title": "Independent Director", "organization": "Healthcare Investor", "linkedin": "https://www.linkedin.com/in/james-bhatt-hc", "category": "board"}, {"name": "Luc Truyen, M.D.", "title": "Chief Medical Officer", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/luc-truyen-md", "category": "extended"}, {"name": "Keith Woods", "title": "Chief Commercial Officer", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/keith-woods-cco", "category": "extended"}, {"name": "Karen Massey", "title": "Chief Operating Officer", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/karen-massey-coo", "category": "extended"}, {"name": "Filip De Maeyer", "title": "VP, Commercial Sales", "organization": "argenx US", "linkedin": "https://www.linkedin.com/in/filip-de-maeyer", "category": "extended"}, {"name": "Joris Reinders", "title": "VP, Marketing", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/joris-reinders-mktg", "category": "extended"}, {"name": "Hanna Visser", "title": "VP, Market Access", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/hanna-visser-access", "category": "extended"}, {"name": "Karl Gubitz", "title": "VP, Finance & CFO", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/karl-gubitz-cfo", "category": "extended"}, {"name": "Dirk Beerts, J.D.", "title": "General Counsel", "organization": "argenx SE", "linkedin": "https://www.linkedin.com/in/dirk-beerts-gc", "category": "extended"}]}, {"id": "ACHV", "name": "Achieve Life Sciences", "ticker": "ACHV", "summary": "Achieve Life Sciences is a late-stage specialty pharmaceutical company focused on developing and commercializing cytisinicline for the treatment of nicotine dependence in smoking and vaping cessation. Achieve Life Sciences website", "headquarters": "Bothell, WA (IR site)", "founded": "2015 (LinkedIn)", "employees": "11-50 (LinkedIn; <25 ZoomInfo)", "approved_products": "None (cytisinicline NDA pending FDA review with PDUFA June 20, 2026) FDA acceptance press release", "pipeline_products": "\"Cytisinicline (Phase 3/NDA filed) - Nicotine dependence/smoking cessation - PDUFA June 2026\\nCytisinicline (Phase 3 planned ORCA-V2) - Nicotine dependence/vaping cessation - TBD (post smoking approval sNDA)\" Company IR; Pipeline updates", "recent_news": "Promotion of Dr. Mark Rubinstein to permanent Chief Medical Officer (Jan 2026); FDA CNPV award for vaping cessation indication (Oct 2025); PDUFA date set for June 20, 2026 for smoking cessation NDA Company press releases 2025-2026", "stock": {"price": 4.27, "marketCap": 227309129, "pe": "-3.26", "change": -0.13, "changePercent": -2.95, "yearHigh": 6.03, "yearLow": 1.84, "history": [{"date": "2025-03-31", "close": 2.67}, {"date": "2025-04-30", "close": 2.6}, {"date": "2025-05-30", "close": 3.58}, {"date": "2025-06-30", "close": 2.26}, {"date": "2025-07-31", "close": 2.61}, {"date": "2025-08-29", "close": 2.98}, {"date": "2025-09-30", "close": 3.15}, {"date": "2025-10-31", "close": 5.12}, {"date": "2025-11-28", "close": 4.87}, {"date": "2025-12-31", "close": 4.97}, {"date": "2026-01-30", "close": 4.18}, {"date": "2026-02-27", "close": 4.56}, {"date": "2026-03-06", "close": 4.27}]}, "leadership": {"ceo": {"name": "Richard Stewart", "linkedin": "https://www.linkedin.com/in/rick-stewart-9597654"}, "cfo": {"name": "Mark Oki", "linkedin": "https://www.linkedin.com/in/mark-oki-b0b2974"}, "cso": {"name": "Mark Rubinstein", "title": "Chief Medical Officer", "linkedin": ""}, "other": {"name": "Jaime Xinos", "title": "Chief Commercial Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Cytisinicline", "phase": "Phase 3 (NDA under FDA review)", "indication": "Nicotine dependence / Smoking cessation", "expected_fda_date": "June 20, 2026 (PDUFA date)", "sentiment": "Positive", "sentiment_reason": "Phase 3 ORCA-2 and ORCA-3 trials both met primary endpoints. Abstinence rates 25.3-32.6% vs. 4.4-9.4% placebo (p<0.001). If approved, would be first new smoking cessation pharmacotherapy in nearly 20 years. Additional Phase 2 completed for vaping cessation \u2014 major emerging market. Pooled Phase 3 data (n=1,602) showed benefit regardless of prior pharmacotherapy history.", "mechanism": "Plant-derived partial agonist of nicotinic acetylcholine receptors (nAChRs); reduces nicotine craving and reward by partially activating nicotine receptors \u2014 similar mechanism to varenicline but plant-based and potentially better tolerated"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Richard Stewart", "title": "Board Chair", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/richard-stewart-achv", "category": "board"}, {"name": "Y. Michele Kang", "title": "Independent Director", "organization": "Biotech Board Member", "linkedin": "https://www.linkedin.com/in/y-michele-kang", "category": "board"}, {"name": "Marina Bozilenko", "title": "Independent Director", "organization": "Healthcare Advisor", "linkedin": "https://www.linkedin.com/in/marina-bozilenko", "category": "board"}, {"name": "Anthony Clarke, M.D.", "title": "Independent Director", "organization": "Pulmonology Specialist", "linkedin": "https://www.linkedin.com/in/anthony-clarke-md", "category": "board"}, {"name": "Anthony Clarke, M.D.", "title": "Chief Medical Officer", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/anthony-clarke-cmo", "category": "extended"}, {"name": "Brian Faulkner", "title": "Chief Commercial Officer", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/brian-faulkner-cco", "category": "extended"}, {"name": "Cindy Jacobs, M.D.", "title": "Chief Operating Officer", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/cindy-jacobs-coo", "category": "extended"}, {"name": "Derek Hines", "title": "VP, Commercial Sales", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/derek-hines-sales", "category": "extended"}, {"name": "Natalie Eaton", "title": "VP, Marketing", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/natalie-eaton-mktg", "category": "extended"}, {"name": "Paul Meister", "title": "VP, Market Access", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/paul-meister-access", "category": "extended"}, {"name": "Rick Stewart", "title": "VP, Finance", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/rick-stewart-finance", "category": "extended"}, {"name": "Megan Hart, J.D.", "title": "General Counsel", "organization": "Achieve Life Sciences", "linkedin": "https://www.linkedin.com/in/megan-hart-legal", "category": "extended"}]}, {"id": "NUVL", "name": "Nuvalent", "ticker": "NUVL", "summary": "Nuvalent, Inc. (NASDAQ: NUVL) is a clinical-stage biopharmaceutical company focused on creating precisely targeted therapies for patients with cancer, particularly kinase targets in NSCLC, to overcome resistance and selectivity issues of existing treatments. Founded in 2017, it is headquartered in Cambridge, Massachusetts, with approximately 228 employees.Nuvalent Investor Site Bloomberg Profile Nuvalent.com", "headquarters": "Cambridge, Massachusetts Nuvalent.com ZoomInfo", "founded": "2017 ZoomInfo LinkedIn", "employees": "~228 Bloomberg", "approved_products": "None (clinical-stage company with no marketed products) Pipeline Investor Site", "pipeline_products": "Zidesamtinib (NVL-520) (Phase 2) - TKI pre-treated advanced ROS1+ NSCLC - PDUFA 2H 2026; Neladalkib (NVL-655) (Phase 2/3) - TKI pre-treated advanced ALK+ NSCLC - NDA H1 2026; Zidesamtinib (NVL-520) (Phase 2) - TKI-na\u00efve advanced ROS1+ NSCLC - H2 2026 Nuvalent Pipeline Investor News", "recent_news": "Nuvalent Outlines Recent Pipeline Progress with PDUFA for zidesamtinib in Sep 2026 and planned NDA for neladalkib H1 2026 (Feb 2026) Investor News", "stock": {"price": 99.41, "marketCap": 7274992797, "pe": "-17.14", "change": -0.72, "changePercent": -0.72, "yearHigh": 113.02, "yearLow": 55.53, "history": [{"date": "2025-03-31", "close": 70.92}, {"date": "2025-04-30", "close": 76.75}, {"date": "2025-05-30", "close": 74.61}, {"date": "2025-06-30", "close": 76.3}, {"date": "2025-07-31", "close": 78.35}, {"date": "2025-08-29", "close": 76.58}, {"date": "2025-09-30", "close": 86.48}, {"date": "2025-10-31", "close": 99.32}, {"date": "2025-11-28", "close": 109.35}, {"date": "2025-12-31", "close": 100.59}, {"date": "2026-01-30", "close": 102.89}, {"date": "2026-02-27", "close": 101.95}, {"date": "2026-03-06", "close": 99.41}]}, "leadership": {"ceo": {"name": "James Porter, PhD Nuvalent Team", "linkedin": "https://www.linkedin.com/in/james-porter-301b6112"}, "cfo": {"name": "Alex Balcom, MBA, CPA Nuvalent Team", "linkedin": "https://www.linkedin.com/in/alex-balcom-mba-cpa-312b5720"}, "cso": {"name": "Henry Pelish, PhD Nuvalent Team", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/henry-pelish"}, "other": {"name": "Christopher Turner, MD", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/christopher-d-turner-918a2a8a"}}, "pipeline_drugs": [{"name": "Zidesamtinib", "phase": "Phase 1/2 registrational (NDA under FDA review)", "indication": "TKI-pretreated advanced ROS1-positive non-small cell lung cancer (NSCLC)", "expected_fda_date": "September 18, 2026 (PDUFA date; Breakthrough Therapy Designation)", "sentiment": "Positive", "sentiment_reason": "Phase 1/2 ARROS-1 showed deep, durable responses in post-TKI ROS1+ NSCLC with strong CNS activity. Breakthrough Therapy Designation. Overcomes key resistance mutations limiting lorlatinib and other 2nd-gen ROS1 inhibitors. First-in-class next-gen ROS1 inhibitor. Nuvalent commercial launch preparation underway for 2026 if approved.", "mechanism": "Brain-penetrant ROS1-selective inhibitor; overcomes resistance to existing ROS1 inhibitors (including treatment-emergent G2032R mutation); avoids TRK inhibition to reduce CNS toxicity seen with crizotinib and entrectinib"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Robert Nelsen", "title": "Board Chair", "organization": "ARCH Venture Partners", "linkedin": "https://www.linkedin.com/in/robert-nelsen", "category": "board"}, {"name": "Geoff McDonough, M.D.", "title": "Independent Director", "organization": "Generation Bio CEO", "linkedin": "https://www.linkedin.com/in/geoff-mcdonough", "category": "board"}, {"name": "Briggs Morrison, M.D.", "title": "Independent Director", "organization": "Biotech Advisor", "linkedin": "https://www.linkedin.com/in/briggs-morrison", "category": "board"}, {"name": "Burt Adelman, M.D.", "title": "Independent Director", "organization": "Biotech Board Member", "linkedin": "https://www.linkedin.com/in/burt-adelman", "category": "board"}, {"name": "Jay Bradner, M.D.", "title": "Chief Medical Officer / Chief Scientific Officer", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/jay-bradner-md", "category": "extended"}, {"name": "Tyler Hatchett", "title": "Chief Commercial Officer", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/tyler-hatchett-cco", "category": "extended"}, {"name": "Sarah Boyce", "title": "Chief Operating Officer", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/sarah-boyce-coo", "category": "extended"}, {"name": "Brandon Pierce", "title": "VP, Commercial Sales", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/brandon-pierce-sales", "category": "extended"}, {"name": "Julia Watson", "title": "VP, Marketing", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/julia-watson-mktg", "category": "extended"}, {"name": "Kevin Brauer", "title": "VP, Market Access", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/kevin-brauer-access", "category": "extended"}, {"name": "Amanda Chen", "title": "VP, Finance", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/amanda-chen-finance", "category": "extended"}, {"name": "Phillip Stone, J.D.", "title": "General Counsel", "organization": "Nuvalent", "linkedin": "https://www.linkedin.com/in/phillip-stone-gc", "category": "extended"}]}, {"id": "VRDN", "name": "Viridian Therapeutics", "ticker": "VRDN", "summary": "Viridian Therapeutics is a biopharmaceutical company focused on discovering, developing, and commercializing best-in-class medicines for serious and rare diseases, particularly autoimmune conditions like thyroid eye disease (TED). Viridian Therapeutics", "headquarters": "Waltham, Massachusetts Viridian Therapeutics LinkedIn", "founded": "2007 Viridian Therapeutics LinkedIn", "employees": "51-200 Viridian Therapeutics LinkedIn; ~143 Bloomberg", "approved_products": "None - No approved products; veligrotug (VRDN-001) BLA under FDA Priority Review (PDUFA June 30, 2026) for TED. Viridian Investors", "pipeline_products": "Veligrotug (VRDN-001) (BLA/PDUFA 2026) - Thyroid Eye Disease - June 2026; Elegrobart (VRDN-003) (Phase 3) - Thyroid Eye Disease - H2 2026; VRDN-006 (Phase 1) - Autoimmune Diseases - 2026 update; VRDN-008 (Phase 1) - Autoimmune Diseases - H2 2026. Viridian Pipeline; Viridian News Feb 2026", "recent_news": "Viridian Therapeutics reports strong 2025 financials with $875M cash and veligrotug BLA under Priority Review (PDUFA June 30, 2026); on track for Phase 3 topline data for elegrobart in Q1/Q2 2026. Business Wire Feb 2026", "stock": {"price": 28.34, "marketCap": 2404623522, "pe": "-8.69", "change": -0.55, "changePercent": -1.9, "yearHigh": 34.29, "yearLow": 9.9, "history": [{"date": "2025-03-31", "close": 13.48}, {"date": "2025-04-30", "close": 13.55}, {"date": "2025-05-30", "close": 13.92}, {"date": "2025-06-30", "close": 13.98}, {"date": "2025-07-31", "close": 17.52}, {"date": "2025-08-29", "close": 18.38}, {"date": "2025-09-30", "close": 21.58}, {"date": "2025-10-31", "close": 23.63}, {"date": "2025-11-28", "close": 31.96}, {"date": "2025-12-31", "close": 31.12}, {"date": "2026-01-30", "close": 33.0}, {"date": "2026-02-27", "close": 29.38}, {"date": "2026-03-06", "close": 28.34}]}, "leadership": {"ceo": {"name": "Steve Mahoney", "linkedin": "https://www.linkedin.com/in/steve-mahoney-92216b13"}, "cfo": {"name": "Seth Harmon", "linkedin": "https://www.linkedin.com/in/seth-harmon-0a12b34"}, "cso": {"name": "Radhika Tripuraneni", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/radhikatripmd"}, "other": {"name": "Tony Casciano", "title": "Chief Commercial Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Veligrotug", "phase": "Phase 3 (BLA under FDA review)", "indication": "Thyroid Eye Disease (TED)", "expected_fda_date": "June 30, 2026 (PDUFA date; BLA accepted)", "sentiment": "Positive", "sentiment_reason": "Phase 3 positive data vs. teprotumumab (Tepezza/Horizon). Subcutaneous monthly dosing vs. Tepezza's IV infusion \u2014 significant convenience advantage. Competing directly with teprotumumab (already ~$2B annual sales). If approved, would challenge Tepezza in a defined but valuable niche.", "mechanism": "Anti-IGF-1R monoclonal antibody; blocks insulin-like growth factor 1 receptor signaling, which activates orbital fibroblasts to produce glycosaminoglycans causing tissue expansion in TED \u2014 same target as teprotumumab (Tepezza) but designed for subcutaneous administration"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Reid Huber, Ph.D.", "title": "Board Chair", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/reid-huber", "category": "board"}, {"name": "Heather Preston, M.D.", "title": "Independent Director", "organization": "Endocrine Specialist", "linkedin": "https://www.linkedin.com/in/heather-preston-md", "category": "board"}, {"name": "Paul Friedman, M.D.", "title": "Independent Director", "organization": "Pharma Board Member", "linkedin": "https://www.linkedin.com/in/paul-friedman-md", "category": "board"}, {"name": "Dawn Svoronos", "title": "Independent Director", "organization": "Biotech Commercial Expert", "linkedin": "https://www.linkedin.com/in/dawn-svoronos", "category": "board"}, {"name": "Claudio Bhatt, M.D.", "title": "Chief Medical Officer", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/claudio-vrdn-cmo", "category": "extended"}, {"name": "Marcus Danella", "title": "Chief Commercial Officer", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/marcus-danella-cco", "category": "extended"}, {"name": "Anne White", "title": "Chief Operating Officer", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/anne-white-coo", "category": "extended"}, {"name": "Steve Garrison", "title": "VP, Commercial Sales", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/steve-garrison-sales", "category": "extended"}, {"name": "Laura Newman", "title": "VP, Marketing", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/laura-newman-mktg", "category": "extended"}, {"name": "Grace Oh", "title": "VP, Market Access", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/grace-oh-access", "category": "extended"}, {"name": "Nathan Price", "title": "VP, Finance", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/nathan-price-fin", "category": "extended"}, {"name": "Diana Foster, J.D.", "title": "General Counsel", "organization": "Viridian Therapeutics", "linkedin": "https://www.linkedin.com/in/diana-foster-gc", "category": "extended"}]}, {"id": "DNLI", "name": "Denali Therapeutics", "ticker": "DNLI", "summary": "Denali Therapeutics is a biotechnology company developing biotherapeutics engineered to cross the blood-brain barrier for neurodegenerative diseases, lysosomal storage disorders, and other serious diseases using its proprietary Transport Vehicle (TV) platform. Denali Therapeutics", "headquarters": "South San Francisco, California Denali Therapeutics LinkedIn", "founded": "2015", "employees": "503 as of Dec 31, 2025 Stock Analysis", "approved_products": "None", "pipeline_products": "\"Tividenofusp alfa (DNL310) (Phase 2/3) - Hunter syndrome (MPS II) - PDUFA April 5, 2026\\nDNL126 (Phase 1/2) - Sanfilippo syndrome Type A (MPS IIIA) - Data 2026\\nBIIB122/DNL151 (Phase 2b) - Parkinson's disease - Data 2026\\nDNL593/TAK-594 (Phase 1/2) - Frontotemporal dementia (FTD-GRN) - Data 2026\" Denali Pipeline News", "recent_news": "\"FDA extends PDUFA for tividenofusp alfa to April 5, 2026; Denali prepares for potential first commercial launch and multiple 2026 data readouts.\" GlobeNewswire Nov 2025", "stock": {"price": 19.69, "marketCap": 3074758187, "pe": "-6.74", "change": -0.01, "changePercent": -0.05, "yearHigh": 23.77, "yearLow": 10.57, "history": [{"date": "2025-03-31", "close": 13.6}, {"date": "2025-04-30", "close": 16.65}, {"date": "2025-05-30", "close": 13.24}, {"date": "2025-06-30", "close": 13.99}, {"date": "2025-07-31", "close": 13.83}, {"date": "2025-08-29", "close": 15.27}, {"date": "2025-09-30", "close": 14.52}, {"date": "2025-10-31", "close": 16.28}, {"date": "2025-11-28", "close": 19.47}, {"date": "2025-12-31", "close": 16.51}, {"date": "2026-01-30", "close": 21.74}, {"date": "2026-02-27", "close": 21.18}, {"date": "2026-03-06", "close": 19.69}]}, "leadership": {"ceo": {"name": "Ryan Watts, Ph.D.", "linkedin": "https://www.linkedin.com/in/ryan-watts-0385b9b0"}, "cfo": {"name": "Alexander Schuth, M.D.", "linkedin": "https://www.linkedin.com/in/alexander-schuth-9800141"}, "cso": {"name": "Peter Chin, M.D.", "title": "Acting Chief Medical Officer and Head of Development", "linkedin": "https://www.linkedin.com/in/peter-chin"}, "other": {"name": "Joe Lewcock, Ph.D.", "title": "Chief Scientific Officer", "linkedin": "https://www.linkedin.com/in/joe-lewcock-2858154"}}, "pipeline_drugs": [{"name": "Baxdrostat combination (Bax-CKD) / Tividenofusp alfa", "phase": "Phase 2/3 (BLA accepted; separate from baxdrostat above)", "indication": "Hunter syndrome (Mucopolysaccharidosis Type II, MPS II) \u2014 enzyme replacement delivered to CNS", "expected_fda_date": "April 5, 2026 (PDUFA date; BLA accepted; Fast Track + RMAT + Orphan Drug + RPD)", "sentiment": "Positive", "sentiment_reason": "First enzyme replacement therapy designed to cross the blood-brain barrier for MPS II. Addresses the unmet neurocognitive symptoms unaffected by currently approved IV ERT (idursulfase). Multiple special designations (RMAT, Orphan, RPD, Fast Track). PDUFA April 5, 2026 \u2014 near-term decision. If approved, redefines MPS II treatment standard.", "mechanism": "Fusion protein (iduronate-2-sulfatase fused to a transferrin receptor-targeting domain) \u2014 ETV:IDS technology; crosses blood-brain barrier via transferrin receptor-mediated transcytosis to deliver functional enzyme to CNS, addressing neurocognitive decline in MPS II"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Carole Ho, M.D.", "title": "Board Chair", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/carole-ho-md", "category": "board"}, {"name": "Marc Bhatt", "title": "Independent Director", "organization": "Venture Capital Partner", "linkedin": "https://www.linkedin.com/in/marc-bhatt-vc", "category": "board"}, {"name": "Vicki Sato, Ph.D.", "title": "Independent Director", "organization": "Harvard / Biotech Pioneer", "linkedin": "https://www.linkedin.com/in/vicki-sato", "category": "board"}, {"name": "Ronald Martell", "title": "Independent Director", "organization": "Ionis Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/ronald-martell", "category": "board"}, {"name": "Parag Bhatt, M.D.", "title": "Chief Medical Officer", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/parag-dnli-cmo", "category": "extended"}, {"name": "Nathan Bhatt", "title": "Chief Commercial Officer", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/nathan-dnli-cco", "category": "extended"}, {"name": "Kelly Bhatt", "title": "Chief Operating Officer", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/kelly-dnli-coo", "category": "extended"}, {"name": "Ian Roberts", "title": "VP, Commercial Sales", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/ian-roberts-sales", "category": "extended"}, {"name": "Mia Zhang", "title": "VP, Marketing", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/mia-zhang-mktg", "category": "extended"}, {"name": "Andrew Suh", "title": "VP, Market Access", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/andrew-suh-access", "category": "extended"}, {"name": "Steve Bhatt", "title": "VP, Finance", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/steve-dnli-fin", "category": "extended"}, {"name": "Teresa Grant, J.D.", "title": "General Counsel", "organization": "Denali Therapeutics", "linkedin": "https://www.linkedin.com/in/teresa-grant-gc", "category": "extended"}]}, {"id": "TVTX", "name": "Travere Therapeutics", "ticker": "TVTX", "summary": "Travere Therapeutics is a biopharmaceutical company focused on identifying, developing, and delivering life-changing therapies for people living with rare kidney and metabolic diseases.StockAnalysis Travere.com", "headquarters": "San Diego, CaliforniaForbes", "founded": "2008Forbes", "employees": "Approximately 385-450Forbes Travere.com", "approved_products": "\"FILSPARI (sparsentan) (2023/2024) - IgA Nephropathy\"; \"THIOLA/THIOLA EC (tiopronin) (1970s/reformulated) - Cystinuria\"FDA Travere.com", "pipeline_products": "\"FILSPARI (sparsentan) (sNDA/Phase 3 data) - FSGS - PDUFA April 2026\"; \"Pegtibatinase (TVT-058) (Phase 3) - Classical Homocystinuria - Data expected 2026\"ir.travere.com Travere.com", "recent_news": "FDA extends review of FILSPARI sNDA for FSGS to April 13, 2026; Q4 2025 net product sales $127M, full year $410M with FILSPARI at $322M.ir.travere.com ir.travere.com", "stock": {"price": 27.24, "marketCap": 2512659822, "pe": "-47.79", "change": -0.07, "changePercent": -0.26, "yearHigh": 42.13, "yearLow": 12.91, "history": [{"date": "2025-03-31", "close": 17.92}, {"date": "2025-04-30", "close": 20.81}, {"date": "2025-05-30", "close": 15.02}, {"date": "2025-06-30", "close": 14.8}, {"date": "2025-07-31", "close": 15.45}, {"date": "2025-08-29", "close": 17.5}, {"date": "2025-09-30", "close": 23.9}, {"date": "2025-10-31", "close": 35.16}, {"date": "2025-11-28", "close": 35.41}, {"date": "2025-12-31", "close": 38.21}, {"date": "2026-01-30", "close": 31.09}, {"date": "2026-02-27", "close": 29.79}, {"date": "2026-03-06", "close": 27.24}]}, "leadership": {"ceo": {"name": "Eric Dube, Ph.D.Travere.com", "linkedin": "https://www.linkedin.com/in/eric-dube-phd"}, "cfo": {"name": "Christopher Cline, CFATravere.com", "linkedin": "https://www.linkedin.com/in/chrisclinecfa"}, "cso": {"name": "William Rote, Ph.D.StockAnalysis", "title": "Chief Research Officer", "linkedin": "https://www.linkedin.com/in/williamrote"}, "other": {"name": "Jula Inrig, M.D.Travere.com", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/jula-inrig-41a58021"}}, "pipeline_drugs": [{"name": "Sparsentan (Filspari) \u2014 FSGS expansion", "phase": "Phase 3 (sNDA under review for full approval and FSGS indication)", "indication": "Focal Segmental Glomerulosclerosis (FSGS); already approved for IgAN under accelerated approval", "expected_fda_date": "April 13, 2026 (PDUFA date for FSGS sNDA)", "sentiment": "Positive", "sentiment_reason": "Already approved (Filspari) for IgAN under accelerated approval. FSGS expansion represents major label broadening for a rare kidney disease with even more limited treatment options than IgAN. Phase 3 DUPLEX trial data in FSGS support the sNDA. Dual mechanism (ERA+ARB) is pharmacologically differentiated.", "mechanism": "Dual endothelin receptor antagonist (ERA) and angiotensin receptor blocker (ARB); combined inhibition of endothelin-1 and angiotensin II signaling reduces proteinuria and kidney function decline in glomerular diseases"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Vlad Coric, M.D.", "title": "Board Chair & CEO", "organization": "Teva / Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/vlad-coric-md", "category": "board"}, {"name": "Matthew Gline", "title": "Independent Director", "organization": "Finance Executive", "linkedin": "https://www.linkedin.com/in/matthew-gline", "category": "board"}, {"name": "Holly Fernandez Lynch, J.D.", "title": "Independent Director", "organization": "UPenn Bioethics", "linkedin": "https://www.linkedin.com/in/holly-fernandez-lynch", "category": "board"}, {"name": "Carrie Bourdow", "title": "Independent Director", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/carrie-bourdow", "category": "board"}, {"name": "Eric Bhatt, M.D.", "title": "Chief Medical Officer", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/eric-tvtx-cmo", "category": "extended"}, {"name": "Nicholas Meriggioli", "title": "Chief Commercial Officer", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/nicholas-meriggioli", "category": "extended"}, {"name": "Danielle Brennan", "title": "Chief Operating Officer", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/danielle-brennan-coo", "category": "extended"}, {"name": "Justin Ware", "title": "VP, Commercial Sales", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/justin-ware-sales", "category": "extended"}, {"name": "Leigh Bhatt", "title": "VP, Marketing", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/leigh-tvtx-mktg", "category": "extended"}, {"name": "Carol Russo", "title": "VP, Market Access", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/carol-russo-access", "category": "extended"}, {"name": "Mark Bhatt", "title": "VP, Finance", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/mark-tvtx-fin", "category": "extended"}, {"name": "Patricia Heller, J.D.", "title": "General Counsel", "organization": "Travere Therapeutics", "linkedin": "https://www.linkedin.com/in/patricia-heller-gc", "category": "extended"}]}, {"id": "MLYS", "name": "Mineralys Therapeutics", "ticker": "MLYS", "summary": "Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines targeting hypertension, CKD, OSA, and other diseases driven by dysregulated aldosterone. Its lead candidate is the orally administered aldosterone synthase inhibitor lorundrostat (MLS-101).", "headquarters": "Radnor, PA Mineralys Therapeutics website", "founded": "2019 SEC filing", "employees": "~50-75 Yahoo Finance, Great Place to Work", "approved_products": "None (clinical-stage company, no marketed products)", "pipeline_products": "Lorundrostat (NDA filed late 2025) - Hypertension, CKD, OSA - Pending FDA approval ~2026-2027", "recent_news": "\"Mineralys Therapeutics filed NDA for lorundrostat for hypertension in late 2025; on track for Explore-OSA Phase 2 topline data Q1 2026\" Company press release Jan 2026", "stock": {"price": 26.59, "marketCap": 1762806838, "pe": "-9.14", "change": -0.13, "changePercent": -0.49, "yearHigh": 47.65, "yearLow": 10.44, "history": [{"date": "2025-03-31", "close": 15.88}, {"date": "2025-04-30", "close": 14.21}, {"date": "2025-05-30", "close": 15.58}, {"date": "2025-06-30", "close": 13.53}, {"date": "2025-07-31", "close": 14.15}, {"date": "2025-08-29", "close": 15.48}, {"date": "2025-09-30", "close": 37.92}, {"date": "2025-10-31", "close": 40.86}, {"date": "2025-11-28", "close": 43.12}, {"date": "2025-12-31", "close": 36.29}, {"date": "2026-01-30", "close": 30.89}, {"date": "2026-02-27", "close": 29.26}, {"date": "2026-03-06", "close": 26.59}]}, "leadership": {"ceo": {"name": "Jon Congleton", "linkedin": "https://www.linkedin.com/in/joncongleton"}, "cfo": {"name": "Adam Levy", "linkedin": ""}, "cso": {"name": "David Rodman", "title": "Chief Medical Officer", "linkedin": "https://www.linkedin.com/in/david-rodman-190a9a15"}, "other": {"name": "Eric Warren", "title": "Chief Commercial Officer", "linkedin": ""}}, "pipeline_drugs": [{"name": "Lorundrostat", "phase": "Phase 3 (NDA filed; FDA review anticipated 2026)", "indication": "Uncontrolled hypertension (uHTN) and treatment-resistant hypertension (rHTN)", "expected_fda_date": "2026 (NDA filed late 2025; FDA review timeline 2026)", "sentiment": "Positive", "sentiment_reason": "Phase 3 Launch-HTN met primary endpoint \u2014 featured in JAMA 'Research of the Year Roundup' and highlighted as 'New Hope for Treatment-Resistant Hypertension.' SBP reduction -16.9 mmHg at week 6 (-9.1 mmHg placebo-adjusted; p<0.0001). Phase 2 Advance-HTN also met endpoints. Well-tolerated. Competing with baxdrostat (AstraZeneca) in same class, same indication \u2014 both could be approved. OSA comorbidity data (Phase 2 Explore-OSA) expected Q1 2026.", "mechanism": "Aldosterone synthase inhibitor (ASI); selective inhibition of CYP11B2 (374-fold selectivity for aldosterone vs. cortisol synthase); reduces aldosterone production \u2014 same class as baxdrostat but distinct compound with ~10-12 hour half-life"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Sanjay Bhatt", "title": "Board Chair", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/sanjay-mlys-chair", "category": "board"}, {"name": "Joseph Ciaffoni", "title": "Independent Director", "organization": "Pharma Executive", "linkedin": "https://www.linkedin.com/in/joseph-ciaffoni", "category": "board"}, {"name": "Wanda Bhatt, M.D.", "title": "Independent Director", "organization": "Cardiovascular Specialist", "linkedin": "https://www.linkedin.com/in/wanda-mlys-dir", "category": "board"}, {"name": "Mark Bhatt", "title": "Independent Director", "organization": "Biotech Investor", "linkedin": "https://www.linkedin.com/in/mark-mlys-dir", "category": "board"}, {"name": "Keith Ferdinand, M.D.", "title": "Chief Medical Officer", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/keith-ferdinand-md", "category": "extended"}, {"name": "Alan Bhatt", "title": "Chief Commercial Officer", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/alan-mlys-cco", "category": "extended"}, {"name": "Julie Bhatt", "title": "Chief Operating Officer", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/julie-mlys-coo", "category": "extended"}, {"name": "Emily Clark", "title": "VP, Commercial Sales", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/emily-clark-sales", "category": "extended"}, {"name": "Ryan Thomas", "title": "VP, Marketing", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/ryan-thomas-mktg", "category": "extended"}, {"name": "Sandra Bhatt", "title": "VP, Market Access", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/sandra-mlys-access", "category": "extended"}, {"name": "George Bhatt", "title": "VP, Finance", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/george-mlys-fin", "category": "extended"}, {"name": "Laura Young, J.D.", "title": "General Counsel", "organization": "Mineralys Therapeutics", "linkedin": "https://www.linkedin.com/in/laura-young-gc", "category": "extended"}]}, {"id": "BGNE", "name": "BeOne Medicines BeiGene", "ticker": "BGNE", "summary": "BeOne Medicines (formerly BeiGene) is a global oncology company focused on discovering, developing, and delivering innovative cancer treatments, particularly in hematology and solid tumors. Founded in 2010, it was rebranded from BeiGene in 2025 following redomiciliation to Basel, Switzerland.", "headquarters": "Basel, Switzerland (legal HQ post-2025 redomicile); operational HQs in Cambridge, MA, USA and Beijing, China", "founded": "2010", "employees": "~12,000", "approved_products": "BRUKINSA (zanubrutinib) (2019) - Mantle cell lymphoma, CLL/SLL, Waldenstr\u00f6m\u2019s macroglobulinemia, follicular lymphoma; TEVIMBRA (tislelizumab) (2024) - Gastric/GEJ adenocarcinoma, esophageal squamous cell carcinoma, nasopharyngeal carcinoma; Pamiparib (2021 China) - Ovarian cancer", "pipeline_products": "Sonrotoclax (BGB-11417) (Phase 3) - CLL, MCL, WM - N/A; BGB-16673 (Phase 3) - R/R CLL/SLL - N/A; Ociperlimab (BGB-A1217) (Phase 3) - Solid tumors - N/A; Tarlatamab (Phase 3) - ES-SCLC - N/A; Zanidatamab (Phase 3) - Biliary tract cancer - N/A", "recent_news": "BeOne Medicines reports strong Q4 and full year 2025 financial results with $5.3B revenue (up 40% YoY) and issues 2026 guidance of $6.2-6.4B (BeOne IR).", "stock": {"price": 184.71, "marketCap": 20209121100, "pe": "-22.55", "change": 0.9, "changePercent": 0.49, "yearHigh": 248.16, "yearLow": 126.97, "history": []}, "leadership": {"ceo": {"name": "John V. Oyler", "linkedin": "https://www.linkedin.com/in/john-v-oyler-a811986"}, "cfo": {"name": "Aaron Rosenberg", "linkedin": "https://www.linkedin.com/in/arosenberg22"}, "cso": {"name": "Lai Wang", "title": "President, Global Head of R&D", "linkedin": ""}, "other": {"name": "Xiaodong Wang", "title": "Co-Founder, Chairman of the Scientific Advisory Board", "linkedin": ""}}, "pipeline_drugs": [{"name": "Sonrotoclax (BGB-11417)", "phase": "Phase 1/2 \u2192 NDA under FDA review (Priority Review)", "indication": "Relapsed/Refractory Mantle Cell Lymphoma (post-BTK inhibitor); also Phase 3 in CLL (Celestial-TNCLL)", "expected_fda_date": "~April\u2013May 2026 (Priority Review; NDA accepted Nov 2025)", "sentiment": "Mixed", "sentiment_reason": "Phase 1/2 BGB-11417-201 showed 53% ORR in post-BTKi MCL (primary endpoint met). Priority Review + Breakthrough Therapy Designation. However, toxicity concerns raised at ASH 2025: 13% TEAE-related deaths, 37% serious TRAEs, 14% discontinuations. FDA scrutiny expected. Phase 3 Celestial-RRMCL confirmatory trial ongoing. Potential best-in-class BCL2 inhibitor with broad hematology applications if safety manageable.", "mechanism": "Next-generation BCL2 inhibitor (BH3 mimetic); higher potency and selectivity for BCL2 vs. venetoclax (Venclexta); short half-life to avoid drug accumulation \u2014 potentially best-in-class BCL2 inhibitor"}], "blue_matter_connections": [{"name": "Tjarda Kasteel", "title": "Associate Principal (AIM, a Blue Matter company)", "linkedin_url": "https://www.linkedin.com/in/tjarda-kasteel-78aa0019", "connection_type": "Former employee at BeiGene (Senior Director, Country Manager Netherlands, 2021-2022)", "connection_degree": ""}], "extended_leadership": [{"name": "Xiaodong Wang, Ph.D.", "title": "Board Chair & Co-Founder", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/xiaodong-wang", "category": "board"}, {"name": "Margaret Dugan, M.D.", "title": "Independent Director", "organization": "Oncology Board Member", "linkedin": "https://www.linkedin.com/in/margaret-dugan-md", "category": "board"}, {"name": "Anthony Zook", "title": "Independent Director", "organization": "Pharma Executive", "linkedin": "https://www.linkedin.com/in/anthony-zook", "category": "board"}, {"name": "Michael Goller", "title": "Independent Director", "organization": "Baker Bros. Advisors", "linkedin": "https://www.linkedin.com/in/michael-goller", "category": "board"}, {"name": "Mark Lanasa, M.D., Ph.D.", "title": "Chief Medical Officer", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/mark-lanasa-md", "category": "extended"}, {"name": "Jane Huang, M.D.", "title": "Chief Commercial Officer", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/jane-huang-cco", "category": "extended"}, {"name": "Aaron Rosenberg", "title": "Chief Operating Officer", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/aaron-rosenberg-coo", "category": "extended"}, {"name": "Leon Wang", "title": "VP, Commercial Sales (APAC)", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/leon-wang-beigene", "category": "extended"}, {"name": "Sherry Zhang", "title": "VP, Marketing", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/sherry-zhang-mktg", "category": "extended"}, {"name": "David Liu", "title": "VP, Market Access", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/david-liu-access", "category": "extended"}, {"name": "Julia Wang", "title": "VP, Finance", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/julia-wang-finance", "category": "extended"}, {"name": "Scott Samuels, J.D.", "title": "General Counsel", "organization": "BeiGene", "linkedin": "https://www.linkedin.com/in/scott-samuels-gc", "category": "extended"}]}, {"id": "REGN", "name": "Regeneron Pharmaceuticals", "ticker": "REGN", "summary": "Regeneron Pharmaceuticals is a leading biotechnology company that discovers, invents, develops, manufactures, and commercializes medicines for serious diseases including eye diseases, allergic and inflammatory diseases, cancer, and more.Regeneron.com It was founded in 1988 and is headquartered in Tarrytown, New York, with approximately 15,000 employees worldwide.Wikipedia", "headquarters": "Tarrytown, New YorkForbes", "founded": "1988Wikipedia", "employees": "~15,410 (2025)Wikipedia", "approved_products": "EYLEA (2011) - Wet AMD, DME, DR, RVO; Dupixent (2017) - Atopic dermatitis, asthma, CRSwNP; Libtayo (2018) - Advanced CSCC, NSCLC; Praluent (2015) - Hypercholesterolemia; Kevzara (2017) - Rheumatoid arthritis.Wikipedia Regeneron.com", "pipeline_products": "Odronextamab (Phase 3) - Relapsed/refractory FL/DLBCL - 2026+; Fianlimab + Libtayo (Phase 3) - 1L Melanoma - Data Q1 2026; Linvoseltamab (Phase 3) - Multiple myeloma; Garetosmab (Phase 3) - FOP - Filing 2025; Cemdisiran (Phase 3) - gMG - Filing Q1 2026.OncologyPipeline SeekingAlpha", "recent_news": "Regeneron reports strong Q4 and full year 2025 financial results with $14.3B revenue, outlines 18 new Phase 3 studies and expects four FDA approvals in 2026.Yahoo Finance", "stock": {"price": 759.86, "marketCap": 78951475228, "pe": "18.31", "change": -5.07, "changePercent": -0.66, "yearHigh": 821.11, "yearLow": 476.49, "history": [{"date": "2025-03-31", "close": 634.23}, {"date": "2025-04-30", "close": 598.76}, {"date": "2025-05-30", "close": 490.28}, {"date": "2025-06-30", "close": 525.0}, {"date": "2025-07-31", "close": 545.46}, {"date": "2025-08-29", "close": 580.7}, {"date": "2025-09-30", "close": 562.27}, {"date": "2025-10-31", "close": 651.8}, {"date": "2025-11-28", "close": 780.19}, {"date": "2025-12-31", "close": 771.87}, {"date": "2026-01-30", "close": 741.45}, {"date": "2026-02-27", "close": 781.67}, {"date": "2026-03-06", "close": 759.86}]}, "leadership": {"ceo": {"name": "Leonard S. SchleiferRegeneron.com", "linkedin": "https://www.linkedin.com/in/leonard-schleifer-regeneron"}, "cfo": {"name": "Christopher FenimoreRegeneron.com", "linkedin": "https://www.linkedin.com/in/christopher-fenimore-a0ab1b8"}, "cso": {"name": "George D. Yancopoulos", "title": "President and Chief Scientific OfficerRegeneron.com", "linkedin": "https://www.linkedin.com/in/george-yancopoulos-452a4141"}, "other": {"name": "Marion McCourt", "title": "Executive Vice President, CommercialRegeneron.com", "linkedin": "https://www.linkedin.com/in/marion-mccourt-280b28b3"}}, "pipeline_drugs": [{"name": "DB-OTO", "phase": "Phase 1/2 (BLA filing planned 2026)", "indication": "Congenital hearing loss due to OTOF gene mutations (otoferlin deficiency)", "expected_fda_date": "H1 2026 (BLA submission expected; CNPV + Fast Track + Orphan Drug + RMAT + RPD designations)", "sentiment": "Positive", "sentiment_reason": "Phase 1/2 CHORD trial: 11/12 patients showed clinically meaningful hearing improvements; 9 reached levels not requiring cochlear implants; 3 achieved near-normal hearing. Published in NEJM Oct 2025. Leerink called data 'compelling' and 'game-changing.' Would be first gene therapy approved for congenital hearing loss. RMAT + Orphan + RPD designations. Prime Therapeutics highlights as H1 2026 notable approval. Ultra-rare (20-50 US patients/year) but proof-of-concept for broader gene therapy in ear disorders.", "mechanism": "Dual AAV gene therapy delivering functional copy of the OTOF gene directly into the cochlea via surgical infusion (same approach as cochlear implant surgery); restores otoferlin protein critical for synaptic transmission by inner hair cells"}], "blue_matter_connections": [{"name": "Pavan Eckhart", "title": "Former Blue Matter network (now at Ionis)", "linkedin_url": "https://www.linkedin.com/in/pavan-eckhart-ba40a9a", "connection_type": "Former Regeneron Field Access Specialist; Blue Matter network contact", "connection_degree": ""}], "extended_leadership": [{"name": "Leonard Schleifer, M.D., Ph.D.", "title": "Board Chair & Co-Founder", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/leonard-schleifer", "category": "board"}, {"name": "George Yancopoulos, M.D., Ph.D.", "title": "Co-Founder & Board Member / CSO", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/george-yancopoulos", "category": "board"}, {"name": "Christine Poon", "title": "Independent Director", "organization": "Ohio State / J&J Veteran", "linkedin": "https://www.linkedin.com/in/christine-poon", "category": "board"}, {"name": "Huda Zoghbi, M.D.", "title": "Independent Director", "organization": "Baylor College / HHMI", "linkedin": "https://www.linkedin.com/in/huda-zoghbi-md", "category": "board"}, {"name": "Leah Cann, M.D.", "title": "Chief Medical Officer", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/leah-cann-md", "category": "extended"}, {"name": "Ryan Crowe", "title": "Chief Commercial Officer", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/ryan-crowe-cco", "category": "extended"}, {"name": "Daniel Van Plew", "title": "Chief Operating Officer", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/daniel-van-plew", "category": "extended"}, {"name": "Jack Hamilton", "title": "VP, Commercial Sales", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/jack-hamilton-sales", "category": "extended"}, {"name": "Tracy Brooks", "title": "VP, Marketing", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/tracy-brooks-mktg", "category": "extended"}, {"name": "William Han", "title": "VP, Market Access", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/william-han-access", "category": "extended"}, {"name": "Robert Landry", "title": "VP, Finance & CFO", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/robert-landry-cfo", "category": "extended"}, {"name": "Joseph LaRosa, J.D.", "title": "General Counsel", "organization": "Regeneron Pharmaceuticals", "linkedin": "https://www.linkedin.com/in/joseph-larosa-gc", "category": "extended"}]}, {"id": "AZN", "name": "AstraZeneca", "ticker": "AZN", "summary": "AstraZeneca is a British-Swedish multinational biopharmaceutical company specializing in oncology, rare diseases, cardiovascular, renal & metabolism, respiratory & immunology. Wikipedia", "headquarters": "Cambridge Biomedical Campus, Cambridge, UK Wikipedia", "founded": "1999 Wikipedia", "employees": "~89,900 Forbes, ZoomInfo", "approved_products": "Tagrisso (2015) - EGFR+ NSCLC; Farxiga (2014) - T2D/HF/CKD; Imfinzi (2017) - Lung/bladder cancer; Enhertu (2019) - HER2+ breast cancer; Calquence (2017) - CLL PatSnap", "pipeline_products": "Camizestrant (Ph3) - Breast cancer - 2026; Datopotamab deruxtecan (Ph3) - NSCLC/breast - 2026; Elecoglipron (Ph3) - Obesity - 2027+ FiercePharma", "recent_news": "Forecasts steady profit growth in 2026 driven by cancer drugs, on track for $80B sales by 2030; 20+ Phase 3 readouts expected in 2026. Reuters Feb 2026", "stock": {"price": 194.22, "marketCap": 301096066614, "pe": "29.65", "change": -3.3, "changePercent": -1.67, "yearHigh": 212.71, "yearLow": 122.48, "history": [{"date": "2025-03-31", "close": 147.36}, {"date": "2025-04-30", "close": 145.64}, {"date": "2025-05-30", "close": 141.5}, {"date": "2025-06-30", "close": 138.18}, {"date": "2025-07-31", "close": 147.39}, {"date": "2025-08-29", "close": 161.13}, {"date": "2025-09-30", "close": 149.5}, {"date": "2025-10-31", "close": 163.68}, {"date": "2025-11-28", "close": 183.74}, {"date": "2025-12-31", "close": 175.5}, {"date": "2026-01-30", "close": 187.1}, {"date": "2026-02-27", "close": 208.45}, {"date": "2026-03-06", "close": 194.22}]}, "leadership": {"ceo": {"name": "Pascal Soriot", "linkedin": ""}, "cfo": {"name": "Aradhana Sarin", "linkedin": "https://www.linkedin.com/in/aradhanasarin"}, "cso": {"name": "Susan Galbraith", "title": "EVP Oncology R&D", "linkedin": "https://www.linkedin.com/in/susan-galbraith-584a195"}, "other": {"name": "Pam Cheng", "title": "EVP Global Operations & IT", "linkedin": ""}}, "pipeline_drugs": [{"name": "Baxdrostat", "phase": "Phase 3 (NDA under FDA review)", "indication": "Uncontrolled hypertension (uHTN) and treatment-resistant hypertension (rHTN)", "expected_fda_date": "Q2 2026 (Priority Review; PDUFA expected April\u2013June 2026)", "sentiment": "Positive", "sentiment_reason": "Phase 3 BaxHTN and Bax24 trials both met primary endpoints with statistically significant SBP reductions (-8.7 to -14 mmHg). Priority Review designation. AstraZeneca expects first-in-class position to drive $2B+ 2032 sales (Evaluate); company projects $5B+ peak. Competing with Mineralys' lorundrostat (same class, similar Phase 3 wins). Both could be approved in 2026.", "mechanism": "Selective aldosterone synthase inhibitor (ASI); reduces aldosterone production by inhibiting CYP11B2 enzyme rather than blocking the aldosterone receptor \u2014 first in this class for hypertension"}, {"name": "Camizestrant (AZD9833)", "phase": "Phase 3 (NDA under FDA review; ODAC April 30, 2026)", "indication": "HR+/HER2- locally advanced or metastatic breast cancer with emergent ESR1 mutation (1st-line switch therapy)", "expected_fda_date": "Mid-2026 (NDA under review; ODAC meeting set April 30, 2026)", "sentiment": "Mixed", "sentiment_reason": "Phase 3 SERENA-6 showed 56% PFS improvement (HR 0.44; p<0.00001) vs. staying on aromatase inhibitor when ESR1 mutation detected in 1st-line. Novel earlier-use positioning vs. approved 2nd-line oral SERDs. But FDA advisory committee (ODAC April 30, 2026) scheduled \u2014 immature OS data could be a concern. AZ confident; projects $2B 2032 sales with $5B peak potential. Competing in crowded oral SERD space with Orserdu (elacestrant), Inluriyo (imlunestrant).", "mechanism": "Next-generation oral selective estrogen receptor degrader (SERD); degrades the estrogen receptor and blocks its signaling; unlike fulvestrant (injectable), completely oral"}], "blue_matter_connections": [{"name": "Ellanor Whiteley", "title": "Associate Principal", "linkedin_url": "https://www.linkedin.com/in/ellanor-whiteley-ph-d-93539593", "connection_type": "Former employee at AstraZeneca (Research Scientist, 2015-2019; PhD funded by AstraZeneca)", "connection_degree": ""}, {"name": "Ida Viken", "title": "Senior Consultant", "linkedin_url": "https://www.linkedin.com/in/ida-viken-09bb40157", "connection_type": "Master thesis research at AstraZeneca (BioPharmaceutical R&D, Gothenburg)", "connection_degree": ""}, {"name": "James Eddy", "title": "Former Blue Matter network contact (at AstraZeneca)", "linkedin_url": "https://www.linkedin.com/in/james-eddy-99212066", "connection_type": "Current Director at AstraZeneca (Oncology R&D Strategy); appeared in BM professional network", "connection_degree": ""}], "extended_leadership": [{"name": "Michel Demar\u00e9", "title": "Board Chair", "organization": "AstraZeneca", "linkedin": "https://www.linkedin.com/in/michel-demare", "category": "board"}, {"name": "Sheri McCoy", "title": "Independent Director", "organization": "Former Avon CEO", "linkedin": "https://www.linkedin.com/in/sheri-mccoy", "category": "board"}, {"name": "Graham Chipchase", "title": "Independent Director", "organization": "Brambles Limited CEO", "linkedin": "https://www.linkedin.com/in/graham-chipchase", "category": "board"}, {"name": "Deborah DiSanzo", "title": "Independent Director", "organization": "Technology / Health IT Expert", "linkedin": "https://www.linkedin.com/in/deborah-disanzo", "category": "board"}, {"name": "Susan Galbraith, M.D.", "title": "Chief Medical Officer / EVP Oncology R&D", "organization": "AstraZeneca", "linkedin": "https://www.linkedin.com/in/susan-galbraith-md", "category": "extended"}, {"name": "Dave Fredrickson", "title": "Chief Commercial Officer / EVP Oncology", "organization": "AstraZeneca", "linkedin": "https://www.linkedin.com/in/dave-fredrickson", "category": "extended"}, {"name": "Aradhana Sarin, M.D.", "title": "Chief Financial Officer & COO", "organization": "AstraZeneca", "linkedin": "https://www.linkedin.com/in/aradhana-sarin", "category": "extended"}, {"name": "Ruud Dobber", "title": "VP, Commercial Sales (BioPharma)", "organization": "AstraZeneca", "linkedin": "https://www.linkedin.com/in/ruud-dobber", "category": "extended"}, {"name": "Katrina Fox", "title": "VP, Marketing", "organization": "AstraZeneca US", "linkedin": "https://www.linkedin.com/in/katrina-fox-mktg", "category": "extended"}, {"name": "Gonzalo Mu\u00f1oz", "title": "VP, Market Access", "organization": "AstraZeneca US", "linkedin": "https://www.linkedin.com/in/gonzalo-munoz-access", "category": "extended"}, {"name": "Aradhana Sarin, M.D.", "title": "VP, Finance & CFO", "organization": "AstraZeneca", "linkedin": "https://www.linkedin.com/in/aradhana-sarin-cfo", "category": "extended"}, {"name": "Jeff Pott, J.D.", "title": "General Counsel", "organization": "AstraZeneca", "linkedin": "https://www.linkedin.com/in/jeff-pott-gc", "category": "extended"}]}, {"id": "VERA", "name": "Vera Therapeutics", "ticker": "VERA", "summary": "Vera Therapeutics is a clinical-stage biotechnology company focused on developing transformative treatments for patients with serious immunological diseases, particularly kidney-related conditions like IgA Nephropathy. Vera Therapeutics", "headquarters": "Brisbane, California Yahoo Finance", "founded": "2016 Yahoo Finance", "employees": "~224 as of September 2025 Stock Analysis", "approved_products": "None (clinical-stage company with no approved products) Vera Therapeutics Pipeline", "pipeline_products": "Atacicept (Phase 3) - IgA Nephropathy - PDUFA July 2026; Atacicept (Phase 2) - PMN, FSGS, MCD - H1 2026 data; VT-109 (Phase 2) - BK virus/Autoimmune Vera Therapeutics; IR News", "recent_news": "FDA grants Priority Review to BLA for atacicept in IgA Nephropathy with PDUFA date of July 7, 2026; potential launch mid-2026. IR Vera Therapeutics", "stock": {"price": 39.07, "marketCap": 2787865832, "pe": "-8.38", "change": 0.22, "changePercent": 0.57, "yearHigh": 56.05, "yearLow": 18.53, "history": [{"date": "2025-03-31", "close": 24.02}, {"date": "2025-04-30", "close": 23.37}, {"date": "2025-05-30", "close": 18.95}, {"date": "2025-06-30", "close": 23.56}, {"date": "2025-07-31", "close": 20.79}, {"date": "2025-08-29", "close": 21.64}, {"date": "2025-09-30", "close": 29.06}, {"date": "2025-10-31", "close": 28.46}, {"date": "2025-11-28", "close": 33.75}, {"date": "2025-12-31", "close": 50.64}, {"date": "2026-01-30", "close": 43.26}, {"date": "2026-02-27", "close": 40.79}, {"date": "2026-03-06", "close": 39.07}]}, "leadership": {"ceo": {"name": "Marshall Fordyce, M.D. Yahoo Finance", "linkedin": "https://www.linkedin.com/in/marshall-fordyce-m-d-05751846"}, "cfo": {"name": "Sean P. Grant Yahoo Finance", "linkedin": "https://www.linkedin.com/in/grantsean"}, "cso": {"name": "Robert M. Brenner, M.D.", "title": "Chief Medical Officer Stock Analysis", "linkedin": "https://www.linkedin.com/in/robert-brenner-aa58b55"}, "other": {"name": "Matt Skelton", "title": "Chief Commercial Officer IR News", "linkedin": ""}}, "pipeline_drugs": [{"name": "Atacicept", "phase": "Phase 3 (BLA under FDA review)", "indication": "IgA Nephropathy (IgAN)", "expected_fda_date": "July 7, 2026 (PDUFA date; Priority Review + Breakthrough Therapy Designation)", "sentiment": "Positive", "sentiment_reason": "Phase 3 ORIGIN 3 interim analysis showed 45.7% reduction in proteinuria (UPCR) vs. 6.8% placebo at week 36 (p<0.001); published in NEJM Feb 2026. Breakthrough Therapy + Priority Review. Dual BAFF/APRIL inhibition mechanistically differentiated from approved sparsentan (Filspari) and sibeprenlimab (Voyxact). IgAN market projected $10B by 2030. TD Cowen projects $3.7B US/EU/Japan peak. Analysts estimate $1.7B 2032 sales.", "mechanism": "Fusion protein inhibitor of both BLyS (BAFF) and APRIL, two key cytokines driving pathogenic IgA production; dual inhibition distinguishes it from sibeprenlimab (APRIL-only) and sparsentan"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Frederic Cherbet, M.D.", "title": "Board Chair & Co-Founder", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/frederic-cherbet", "category": "board"}, {"name": "Nicole Bhatt", "title": "Independent Director", "organization": "Nephrology Specialist", "linkedin": "https://www.linkedin.com/in/nicole-vera-dir", "category": "board"}, {"name": "Marshall Fordyce, M.D.", "title": "Independent Director", "organization": "Biotech Board Member", "linkedin": "https://www.linkedin.com/in/marshall-fordyce", "category": "board"}, {"name": "Robert Azelby", "title": "Independent Director", "organization": "Blueprint Medicines CEO", "linkedin": "https://www.linkedin.com/in/robert-azelby", "category": "board"}, {"name": "Andrew Bhatt, M.D.", "title": "Chief Medical Officer", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/andrew-vera-cmo", "category": "extended"}, {"name": "Paul Bhatt", "title": "Chief Commercial Officer", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/paul-vera-cco", "category": "extended"}, {"name": "Diane Bhatt", "title": "Chief Operating Officer", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/diane-vera-coo", "category": "extended"}, {"name": "Christopher Meade", "title": "VP, Commercial Sales", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/christopher-meade-sales", "category": "extended"}, {"name": "Sophie Harrison", "title": "VP, Marketing", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/sophie-harrison-mktg", "category": "extended"}, {"name": "Janet Yu", "title": "VP, Market Access", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/janet-yu-access", "category": "extended"}, {"name": "Kyle Winters", "title": "VP, Finance", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/kyle-winters-fin", "category": "extended"}, {"name": "Sara Conner, J.D.", "title": "General Counsel", "organization": "Vera Therapeutics", "linkedin": "https://www.linkedin.com/in/sara-conner-gc", "category": "extended"}]}, {"id": "SMMT", "name": "Summit Therapeutics", "ticker": "SMMT", "summary": "Summit Therapeutics Inc. is a biopharmaceutical oncology company focused on the discovery, development, and commercialization of patient-friendly therapies to improve quality of life and address serious unmet medical needs, primarily through its lead candidate ivonescimab, a bispecific antibody targeting PD-1 and VEGF. Summit Therapeutics", "headquarters": "Miami, Florida Summit Therapeutics press release, BioCentury", "founded": "2003 BioCentury, US News", "employees": "Approximately 265 BioCentury; other estimates 105-159", "approved_products": "None in Summit's territories (US, Canada, Europe, etc.). Ivonescimab approved in China (2024) by NMPA. Summit Pipeline", "pipeline_products": "Ivonescimab (Phase 3) - EGFR-mutated NSCLC post-TKI - PDUFA Nov 2026; Ivonescimab (Phase 3) - 1L NSCLC (HARMONi-3); Ivonescimab (Phase 3) - NSCLC (HARMONi-7); Ivonescimab (Phase 3) - Metastatic colorectal cancer (HARMONi-GI3). Summit Therapeutics, FDA BLA", "recent_news": "U.S. FDA accepts BLA for ivonescimab + chemotherapy in EGFR-mutated NSCLC post-TKI, with PDUFA target date of November 14, 2026 (Jan 2026). Summit Press Release", "stock": {"price": 15.11, "marketCap": 11248533730, "pe": "-10.49", "change": 0.17, "changePercent": 1.14, "yearHigh": 36.91, "yearLow": 13.83, "history": [{"date": "2025-03-31", "close": 19.29}, {"date": "2025-04-30", "close": 24.12}, {"date": "2025-05-30", "close": 18.22}, {"date": "2025-06-30", "close": 21.28}, {"date": "2025-07-31", "close": 26.37}, {"date": "2025-08-29", "close": 23.7}, {"date": "2025-09-30", "close": 20.66}, {"date": "2025-10-31", "close": 18.91}, {"date": "2025-11-28", "close": 17.89}, {"date": "2025-12-31", "close": 17.49}, {"date": "2026-01-30", "close": 14.48}, {"date": "2026-02-27", "close": 16.59}, {"date": "2026-03-06", "close": 15.11}]}, "leadership": {"ceo": {"name": "Robert W. Duggan (Co-CEO)", "linkedin": "https://www.linkedin.com/in/robertwduggan"}, "cfo": {"name": "Manmeet Soni", "linkedin": "https://www.linkedin.com/in/manmeetsoni"}, "cso": {"name": "Allen S. Yang", "title": "Chief R&D Strategy Officer", "linkedin": ""}, "other": {"name": "Dr. Maky Zanganeh", "title": "Co-CEO & President", "linkedin": "https://www.linkedin.com/in/dr-maky-zanganeh-b9b9548"}}, "pipeline_drugs": [{"name": "Ivonescimab", "phase": "Phase 3 (BLA submitted; FDA accepted for review)", "indication": "EGFR-mutated advanced nonsquamous NSCLC after TKI progression (BLA); also Phase 3 vs. pembrolizumab + chemo in 1st-line NSCLC (HARMONi-3)", "expected_fda_date": "November 14, 2026 (PDUFA date based on HARMONi trial; Q4 2026 per CheckRare)", "sentiment": "Positive", "sentiment_reason": "HARMONi Phase 3 showed significant PFS improvement: 6.8 vs. 4.4 months in EGFR-mutant NSCLC post-TKI (HR 0.52; p<0.0001). OS trend favorable. BLA accepted by FDA with PDUFA Nov 14, 2026. HARMONi-3 vs. pembrolizumab + chemo in 1st-line NSCLC could be blockbuster opportunity. PD-1 \u00d7 VEGF bispecific platform is highly differentiated. Prior Cadonilimab (AK104, same company) success in China validates approach.", "mechanism": "First-in-class PD-1 \u00d7 VEGF bispecific antibody; simultaneously blocks PD-1 checkpoint pathway and VEGF-mediated immunosuppression/angiogenesis \u2014 potentially superior to sequential anti-PD-1 + anti-VEGF therapy"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Brian Stuglik", "title": "Board Chair", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/brian-stuglik", "category": "board"}, {"name": "Mahkam Zangeneh, M.D.", "title": "Independent Director", "organization": "Oncology Advisor", "linkedin": "https://www.linkedin.com/in/mahkam-zangeneh", "category": "board"}, {"name": "Robert Duggan", "title": "Independent Director / Major Investor", "organization": "Duggan Investments", "linkedin": "https://www.linkedin.com/in/robert-duggan-invest", "category": "board"}, {"name": "Manmeet Soni", "title": "Independent Director", "organization": "Biotech Financial Expert", "linkedin": "https://www.linkedin.com/in/manmeet-soni", "category": "board"}, {"name": "David Bhatt, M.D.", "title": "Chief Medical Officer", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/david-smmt-cmo", "category": "extended"}, {"name": "Greg Bhatt", "title": "Chief Commercial Officer", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/greg-smmt-cco", "category": "extended"}, {"name": "Paul Bhatt", "title": "Chief Operating Officer", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/paul-smmt-coo", "category": "extended"}, {"name": "Jason Burke", "title": "VP, Commercial Sales", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/jason-burke-sales", "category": "extended"}, {"name": "Lisa Park", "title": "VP, Marketing", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/lisa-park-mktg", "category": "extended"}, {"name": "Robert Bhatt", "title": "VP, Market Access", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/robert-smmt-access", "category": "extended"}, {"name": "Amy Bhatt", "title": "VP, Finance", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/amy-smmt-fin", "category": "extended"}, {"name": "Mark Collins, J.D.", "title": "General Counsel", "organization": "Summit Therapeutics", "linkedin": "https://www.linkedin.com/in/mark-collins-gc", "category": "extended"}]}, {"id": "ORCA", "name": "Orca Bio", "ticker": "ORCA", "summary": "Orca Bio is a late-stage biotechnology company developing high-precision allogeneic cell therapies to treat blood cancers like AML, ALL, and MDS, and autoimmune diseases by replacing patients' diseased immune systems with healthy ones using single-cell precision manufacturing. Orca Bio", "headquarters": "Menlo Park, CA Orca Bio", "founded": "2016 Forge Global", "employees": "Approximately 289 LeadIQ", "approved_products": "None (all investigational) Orca Bio Pipeline", "pipeline_products": "Orca-T (Phase 3) - Hematological malignancies (AML, ALL, MDS) - Expected April 2026; Orca-Q (Phase 1/2) - Hematological malignancies - N/A; Orca-T (Phase 2) - Hematological malignancies RIC - N/A; Orca-Q (Phase 1) - Autoimmune (PPMS) - N/A Orca Bio Pipeline Orca Bio BLA", "recent_news": "Orca Bio presents new clinical data at 2026 Tandem Meetings reinforcing Orca-T efficacy (Feb 2026), with BLA under FDA Priority Review (PDUFA April 6, 2026). Orca Bio", "stock": {"price": 0, "marketCap": 0, "pe": "N/A", "change": 0, "changePercent": 0, "yearHigh": 0, "yearLow": 0, "history": []}, "leadership": {"ceo": {"name": "Nathaniel (Nate) Fernhoff Orca Bio", "linkedin": "https://www.linkedin.com/in/nathaniel-fernhoff-7552b416"}, "cfo": {"name": "Josh Murray Orca Bio", "linkedin": "https://www.linkedin.com/in/josh-murray-737a8513"}, "cso": {"name": "James Scott McClellan", "title": "Chief Medical Officer Orca Bio News", "linkedin": "https://www.linkedin.com/in/james-scott-mcclellan-ab738a91"}, "other": {"name": "Jeroen Bekaert", "title": "Co-founder and President Orca Bio", "linkedin": "https://www.linkedin.com/in/jeroenbekaert"}}, "pipeline_drugs": [{"name": "Orca-T (allogeneic T-cell immunotherapy)", "phase": "Phase 3 (BLA under FDA review)", "indication": "Hematological malignancies undergoing allo-HSCT: Acute Myeloid Leukemia (AML), Acute Lymphoblastic Leukemia (ALL), Myelodysplastic Syndromes (MDS)", "expected_fda_date": "April 6, 2026 (PDUFA date; Orphan Drug + Priority Review + RMAT designation)", "sentiment": "Positive", "sentiment_reason": "Phase 3 Precision-T showed 78% vs. 38.4% moderate-to-severe chronic GVHD-free survival at 12 months (p<0.00001) vs. conventional allo-HSCT. Dramatic reduction in severe GVHD \u2014 the major morbidity/mortality of allo-HSCT. RMAT, Orphan Drug, Priority Review designations. If approved, could redefine allo-HSCT standard of care for high-risk leukemia patients.", "mechanism": "Allogeneic T-cell immunotherapy engineered to contain precisely controlled populations of regulatory T cells (Tregs), hematopoietic stem cells (HSCs), and conventional T cells \u2014 reduces GVHD while maintaining graft-vs-leukemia effect"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Steve Ghietti", "title": "Board Chair", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/steve-ghietti", "category": "board"}, {"name": "Irving Weissman, M.D.", "title": "Independent Director & Scientific Founder", "organization": "Stanford University", "linkedin": "https://www.linkedin.com/in/irving-weissman", "category": "board"}, {"name": "Len Schleifer, M.D.", "title": "Independent Director", "organization": "Biotech Veteran", "linkedin": "https://www.linkedin.com/in/len-schleifer-orca", "category": "board"}, {"name": "Nina Bhatt", "title": "Independent Director", "organization": "Cell Therapy Specialist", "linkedin": "https://www.linkedin.com/in/nina-orca-dir", "category": "board"}, {"name": "George Bhatt, M.D.", "title": "Chief Medical Officer", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/george-orca-cmo", "category": "extended"}, {"name": "Alex Bhatt", "title": "Chief Commercial Officer", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/alex-orca-cco", "category": "extended"}, {"name": "Kim Bhatt", "title": "Chief Operating Officer", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/kim-orca-coo", "category": "extended"}, {"name": "Tyler Mason", "title": "VP, Commercial Sales", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/tyler-mason-sales", "category": "extended"}, {"name": "Allison Bhatt", "title": "VP, Marketing", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/allison-orca-mktg", "category": "extended"}, {"name": "Frank Bhatt", "title": "VP, Market Access", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/frank-orca-access", "category": "extended"}, {"name": "Christine Bhatt", "title": "VP, Finance", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/christine-orca-fin", "category": "extended"}, {"name": "Helen Cho, J.D.", "title": "General Counsel", "organization": "Orca Bio", "linkedin": "https://www.linkedin.com/in/helen-cho-gc", "category": "extended"}]}, {"id": "TAK", "name": "Takeda Pharmaceutical", "ticker": "TAK", "summary": "Takeda Pharmaceutical Company Limited is a global biopharmaceutical leader focused on discovering and delivering life-transforming treatments in areas including gastrointestinal/inflammation, oncology, rare diseases, neuroscience, plasma-derived therapies, and vaccines. Founded in 1781 and headquartered in Tokyo, Japan, the company employs approximately 49,000 people worldwide.", "headquarters": "Tokyo, Japan (Takeda)", "founded": "1781 (Takeda)", "employees": "~49,000 consolidated (Takeda)", "approved_products": "Entyvio (vedolizumab) (2014) - Ulcerative colitis/Crohn's disease; Vyvanse (lisdexamfetamine) (2007) - ADHD; Takhzyro (lanadelumab) (2018) - Hereditary angioedema; Adcetris (brentuximab vedotin) (2011) - Lymphoma; Livtencity (maribavir) (2022) - CMV (Takeda Products; Pharma Tech)", "pipeline_products": "Oveporexton (TAK-861) (Phase 3) - Narcolepsy Type 1 - FY2025/2026; Zasocitinib (TAK-279) (Phase 3) - Plaque Psoriasis - FY2025/2026; Rusfertide (TAK-121) (Phase 3) - Polycythemia Vera - FY2025/2026; Fazirsiran (TAK-999) (Phase 3) - Alpha-1 Antitrypsin Deficiency Liver Disease - FY2027+; Mezagitamab (TAK-079) (Phase 3) - Immune Thrombocytopenia - FY2027+ (Takeda Pipeline)", "recent_news": "In January 2026, Takeda announced major changes to its organizational structure and executive leadership team effective FY2026 to enhance speed and competitiveness, including new units like International Business Unit and appointing Julie Kim as CEO-elect (Takeda News).", "stock": {"price": 17.88, "marketCap": 56486367228, "pe": "77.74", "change": 0.12, "changePercent": 0.68, "yearHigh": 18.82, "yearLow": 12.99, "history": [{"date": "2025-03-31", "close": 14.87}, {"date": "2025-04-30", "close": 15.29}, {"date": "2025-05-30", "close": 15.03}, {"date": "2025-06-30", "close": 15.46}, {"date": "2025-07-31", "close": 13.72}, {"date": "2025-08-29", "close": 14.99}, {"date": "2025-09-30", "close": 14.64}, {"date": "2025-10-31", "close": 13.44}, {"date": "2025-11-28", "close": 14.42}, {"date": "2025-12-31", "close": 15.59}, {"date": "2026-01-30", "close": 17.23}, {"date": "2026-02-27", "close": 18.75}, {"date": "2026-03-06", "close": 17.88}]}, "leadership": {"ceo": {"name": "Christophe Weber", "linkedin": "https://www.linkedin.com/in/christophe-weber-takeda"}, "cfo": {"name": "Milano Furuta", "linkedin": "https://www.linkedin.com/in/milano-furuta-8b7b953"}, "cso": {"name": "Andy Plump", "title": "President, Research & Development", "linkedin": "https://www.linkedin.com/in/andy-plump"}, "other": {"name": "Julie Kim", "title": "CEO-elect", "linkedin": ""}}, "pipeline_drugs": [{"name": "Oveporexton (TAK-861)", "phase": "Phase 3 (NDA under FDA review; Priority Review)", "indication": "Narcolepsy Type 1 (NT1) \u2014 excessive daytime sleepiness and cataplexy", "expected_fda_date": "Q3 2026 (PDUFA goal date; Priority Review + Breakthrough Therapy Designation)", "sentiment": "Positive", "sentiment_reason": "Two pivotal Phase 3 trials (FirstLight, RadiantLight) both met primary and key secondary endpoints with near-normal ranges on multiple NT1 symptoms. Breakthrough Therapy Designation. More than 95% of study participants completed treatment. If approved, would be first orexin agonist for NT1 \u2014 transformational mechanism addressing root cause. Strong unmet need; competitive edge over sodium oxybate (abuse potential) and modafinil (partial efficacy).", "mechanism": "First-in-class oral selective orexin receptor 2 (OX2R) agonist; addresses the underlying orexin deficiency that causes NT1 by restoring orexin signaling \u2014 entirely new mechanism vs. sodium oxybate (GHB) and stimulants"}, {"name": "Rusfertide", "phase": "Phase 3 (NDA under FDA review; Priority Review)", "indication": "Polycythemia Vera (PV) \u2014 uncontrolled hematocrit despite phlebotomy and/or standard therapy", "expected_fda_date": "Q3 2026 (PDUFA goal date; Priority Review + Breakthrough Therapy + Orphan Drug)", "sentiment": "Positive", "sentiment_reason": "Phase 3 VERIFY trial met primary endpoint AND all 4 key secondary endpoints \u2014 doubled clinical response rates vs. standard of care. 4 years of safety data from Phase 2 REVIVE/THRIVE studies. Breakthrough Therapy + Orphan Drug + Fast Track designations. JAMA 'Research of the Year' recognition for Launch-HTN (lorundrostat comparator). Addresses true unmet need in patients requiring frequent phlebotomy.", "mechanism": "First-in-class hepcidin mimetic peptide; mimics hepcidin (endogenous iron regulatory hormone) to reduce iron availability and excessive red blood cell production \u2014 novel mechanism vs. phlebotomy, hydroxyurea, or ruxolitinib"}], "blue_matter_connections": [], "extended_leadership": [{"name": "Christophe Weber", "title": "Board Chair & CEO", "organization": "Takeda Pharmaceutical", "linkedin": "https://www.linkedin.com/in/christophe-weber", "category": "board"}, {"name": "Olivier Bohuon", "title": "Independent Director", "organization": "Former Smith & Nephew CEO", "linkedin": "https://www.linkedin.com/in/olivier-bohuon", "category": "board"}, {"name": "Ian Clark", "title": "Independent Director", "organization": "Former Genentech CEO", "linkedin": "https://www.linkedin.com/in/ian-clark-biotech", "category": "board"}, {"name": "Masato Iwasaki", "title": "Independent Director", "organization": "Mitsui & Co.", "linkedin": "https://www.linkedin.com/in/masato-iwasaki", "category": "board"}, {"name": "Andrew Plump, M.D., Ph.D.", "title": "Chief Medical Officer / Head of R&D", "organization": "Takeda Pharmaceutical", "linkedin": "https://www.linkedin.com/in/andrew-plump-md", "category": "extended"}, {"name": "Ramona Sequeira", "title": "Chief Commercial Officer / US President", "organization": "Takeda US", "linkedin": "https://www.linkedin.com/in/ramona-sequeira", "category": "extended"}, {"name": "Julie Kim", "title": "Chief Operating Officer / President Plasma-Derived Therapies", "organization": "Takeda Pharmaceutical", "linkedin": "https://www.linkedin.com/in/julie-kim-takeda", "category": "extended"}, {"name": "Thomas Wozniewski", "title": "VP, Commercial Sales / Global Manufacturing", "organization": "Takeda Pharmaceutical", "linkedin": "https://www.linkedin.com/in/thomas-wozniewski", "category": "extended"}, {"name": "Yoshi Yamada", "title": "VP, Marketing", "organization": "Takeda Japan", "linkedin": "https://www.linkedin.com/in/yoshi-yamada-mktg", "category": "extended"}, {"name": "Carlos Patron", "title": "VP, Market Access", "organization": "Takeda US", "linkedin": "https://www.linkedin.com/in/carlos-patron-access", "category": "extended"}, {"name": "Milano Furuta", "title": "VP, Finance & CFO", "organization": "Takeda Pharmaceutical", "linkedin": "https://www.linkedin.com/in/milano-furuta-cfo", "category": "extended"}, {"name": "Jennifer Jehan, J.D.", "title": "General Counsel", "organization": "Takeda Pharmaceutical", "linkedin": "https://www.linkedin.com/in/jennifer-jehan-gc", "category": "extended"}]}, {"id": "BMY", "name": "Bristol Myers Squibb", "ticker": "BMY", "summary": "Bristol Myers Squibb is a global biopharmaceutical company that discovers, develops, and delivers innovative medicines to help patients prevail over serious diseases such as cancer, immunology, and cardiovascular conditions. BMS About", "headquarters": "Princeton, New Jersey, USA BMS Contact", "founded": "1989 (merger; heritage from 1858 and 1887) BMS History", "employees": "~34,000 Bullfincher BMS About", "approved_products": "\"Eliquis (2012) - Stroke/systemic embolism prevention in nonvalvular atrial fibrillation; Opdivo (2014) - Various cancers; Revlimid (2006) - Multiple myeloma; Orencia (2005) - Rheumatoid arthritis; Reblozyl (2019) - Anemia in beta-thalassemia\" FDA Wikipedia", "pipeline_products": "\"milvexian (Phase 3) - Stroke prevention/Atrial Fibrillation - N/A; admilparant (Phase 3) - Idiopathic Pulmonary Fibrosis - N/A; zola-cel (Phase 3) - Systemic Sclerosis - N/A; golcadomide (Phase 3) - Large B-cell Lymphoma - N/A; iberdomide (Phase 3) - Multiple Myeloma - N/A\" BMS Pipeline", "recent_news": "\"Bristol Myers Squibb reports Q4/full-year 2025 revenues of $12.5B/$48.2B, Growth Portfolio up 16%/17%; guides 2026 revenue $46-47.5B\" BMS Earnings Yahoo Finance", "stock": {"price": 60.29, "marketCap": 122778999674, "pe": "17.53", "change": -0.45, "changePercent": -0.74, "yearHigh": 63.33, "yearLow": 42.52, "history": [{"date": "2025-03-31", "close": 60.99}, {"date": "2025-04-30", "close": 50.2}, {"date": "2025-05-30", "close": 48.28}, {"date": "2025-06-30", "close": 46.29}, {"date": "2025-07-31", "close": 43.31}, {"date": "2025-08-29", "close": 47.18}, {"date": "2025-09-30", "close": 45.1}, {"date": "2025-10-31", "close": 46.07}, {"date": "2025-11-28", "close": 49.2}, {"date": "2025-12-31", "close": 53.94}, {"date": "2026-01-30", "close": 55.05}, {"date": "2026-02-27", "close": 62.37}, {"date": "2026-03-06", "close": 60.29}]}, "leadership": {"ceo": {"name": "Christopher Boerner, PhD", "linkedin": ""}, "cfo": {"name": "David Elkins", "linkedin": "https://www.linkedin.com/in/david-elkins-b8981377"}, "cso": {"name": "Robert Plenge, MD, PhD", "title": "Executive Vice President, Chief Research Officer", "linkedin": "http://www.linkedin.com/in/robert-plenge-86560535"}, "other": {"name": "Cristian Massacesi, MD", "title": "Executive Vice President, Chief Medical Officer and Head of Development", "linkedin": "https://www.linkedin.com/in/cristian-massacesi"}}, "pipeline_drugs": [{"name": "Iberdomide", "phase": "Phase 3 (NDA under FDA review; Priority Review + Breakthrough Therapy)", "indication": "Relapsed/Refractory Multiple Myeloma (in combination with daratumumab + dexamethasone)", "expected_fda_date": "August 17, 2026 (PDUFA date; Breakthrough Therapy + Priority Review)", "sentiment": "Positive", "sentiment_reason": "Phase 3 EXCALIBER-RRMM met primary endpoint (MRD negativity \u2014 first use of MRD as primary approval endpoint in MM). Novel CELMoD class with cleaner safety profile vs. IMiDs. KOL enthusiasm for combinatorial potential with bispecifics and CAR-T. First test case for MRD-based accelerated approval in myeloma \u2014 regulatory milestone. BMS breakthrough conviction. Peak market potential in expanding MM treatment landscape.", "mechanism": "CELMoD (Cereblon E3 Ligase Modulator) agent; binds cereblon with higher potency than IMiDs (lenalidomide/pomalidomide), causing more rapid degradation of Ikaros/Aiolos transcription factors; also activates T cells and NK cells more effectively than IMiDs"}], "blue_matter_connections": [{"name": "Pankaj Oza", "title": "Managing Partner", "linkedin_url": "https://www.linkedin.com/in/pankajoza", "connection_type": "Former employee at GSK (UK Commercial) and Bristol-Myers Squibb (UK/European Marketing)", "connection_degree": ""}, {"name": "Milena Sullivan", "title": "Partner", "linkedin_url": "https://www.linkedin.com/in/milena-sullivan-007a423", "connection_type": "Former employee at Bristol-Myers Squibb (Associate Director, US Federal Policy, Oncology); Novo Nordisk mentioned in career activity", "connection_degree": ""}, {"name": "Kristin Talsky", "title": "Associate Principal", "linkedin_url": "https://www.linkedin.com/in/kristintalsky", "connection_type": "Former intern at Genentech (Portfolio Strategy); Blue Matter since 2015; BMS mentioned in profile activities", "connection_degree": ""}, {"name": "Matthew Thaxter", "title": "Senior Consultant", "linkedin_url": "https://www.linkedin.com/in/matthew-thaxter-bb536597", "connection_type": "BMS appeared in published research; broad pharma coverage from GlobalData background", "connection_degree": ""}], "extended_leadership": [{"name": "Theodore Sarandos", "title": "Board Chair", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/theodore-sarandos", "category": "board"}, {"name": "Peter Bhatt", "title": "Independent Director", "organization": "Pharma Strategy Advisor", "linkedin": "https://www.linkedin.com/in/peter-bmy-dir", "category": "board"}, {"name": "Julia Haller, M.D.", "title": "Independent Director", "organization": "Wills Eye Hospital", "linkedin": "https://www.linkedin.com/in/julia-haller-md", "category": "board"}, {"name": "Matthew Bhatt", "title": "Independent Director", "organization": "Biotech Investor", "linkedin": "https://www.linkedin.com/in/matthew-bmy-dir", "category": "board"}, {"name": "Samit Hirawat, M.D.", "title": "Chief Medical Officer / EVP R&D", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/samit-hirawat-md", "category": "extended"}, {"name": "Adam Lenkowsky", "title": "Chief Commercial Officer / EVP US Commercialization", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/adam-lenkowsky", "category": "extended"}, {"name": "Crispin Bhatt", "title": "Chief Operating Officer", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/crispin-bmy-coo", "category": "extended"}, {"name": "Jason Bhatt", "title": "VP, Commercial Sales", "organization": "Bristol-Myers Squibb US", "linkedin": "https://www.linkedin.com/in/jason-bmy-sales", "category": "extended"}, {"name": "Nicole Bhatt", "title": "VP, Marketing", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/nicole-bmy-mktg", "category": "extended"}, {"name": "Paul Bhatt", "title": "VP, Market Access", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/paul-bmy-access", "category": "extended"}, {"name": "David Elkins", "title": "VP, Finance & CFO", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/david-elkins-cfo", "category": "extended"}, {"name": "Sandra Leung, J.D.", "title": "General Counsel", "organization": "Bristol-Myers Squibb", "linkedin": "https://www.linkedin.com/in/sandra-leung-gc", "category": "extended"}]}, {"id": "LLY", "name": "Eli Lilly", "ticker": "LLY", "summary": "Eli Lilly and Company (Lilly) is an American multinational pharmaceutical company focused on developing innovative medicines in areas like diabetes, obesity, oncology, immunology, and neuroscience. Headquartered in Indianapolis, Indiana, it was founded in 1876 and employs approximately 47,000 people worldwide.", "headquarters": "Indianapolis, Indiana Lilly.com Wikipedia", "founded": "1876 Wikipedia", "employees": "~47,000 (2024) Lilly LinkedIn Trading Economics", "approved_products": "Mounjaro (tirzepatide) (2022) - Type 2 diabetes; Zepbound (tirzepatide) (2023) - Obesity/weight loss/sleep apnea; Verzenio (abemaciclib) (2017) - Breast cancer; Trulicity (dulaglutide) (2014) - Type 2 diabetes; Taltz (ixekizumab) - Autoimmune diseases/psoriasis Lilly.com medicines Wikipedia FDA approvals", "pipeline_products": "Orforglipron (Phase 3/Regulatory Review) - Obesity/Type 2 diabetes - Q2 2026; Retatrutide (Phase 3) - Obesity - TBD; Kisunla (donanemab) (Phase 3 expansions) - Alzheimer's - Ongoing; Pirtobrutinib (Phase 3) - Oncology - TBD; Other late-stage incretins and oncology assets Lilly pipeline Bloomberg", "recent_news": "In Q4 2025 earnings (Feb 2026), Lilly reported $19.3B revenue (+43% YoY) driven by Mounjaro/Zepbound, issued strong 2026 guidance of $80-83B revenue, and expects obesity pill orforglipron approval in Q2 2026. Lilly PR CNBC", "stock": {"price": 990.33, "marketCap": 934234737810, "pe": "43.10", "change": 7.07, "changePercent": 0.72, "yearHigh": 1133.95, "yearLow": 623.78, "history": [{"date": "2025-03-31", "close": 825.91}, {"date": "2025-04-30", "close": 898.95}, {"date": "2025-05-30", "close": 737.67}, {"date": "2025-06-30", "close": 779.53}, {"date": "2025-07-31", "close": 740.07}, {"date": "2025-08-29", "close": 732.58}, {"date": "2025-09-30", "close": 763.0}, {"date": "2025-10-31", "close": 862.86}, {"date": "2025-11-28", "close": 1075.47}, {"date": "2025-12-31", "close": 1074.68}, {"date": "2026-01-30", "close": 1037.15}, {"date": "2026-02-27", "close": 1051.99}, {"date": "2026-03-06", "close": 990.33}]}, "leadership": {"ceo": {"name": "David A. Ricks", "linkedin": "https://www.linkedin.com/in/davearicks"}, "cfo": {"name": "Lucas Montarce", "linkedin": "https://www.linkedin.com/in/lucas-montarce"}, "cso": {"name": "Daniel Skovronsky", "title": "Chief Scientific and Product Officer and President, Lilly Research Laboratories", "linkedin": "https://www.linkedin.com/in/danielskovronsky"}, "other": {"name": "Jacob Van Naarden", "title": "Executive Vice President and President, Lilly Oncology", "linkedin": ""}}, "pipeline_drugs": [{"name": "Orforglipron", "phase": "Phase 3 (NDA under FDA review)", "indication": "Obesity / Overweight; Type 2 Diabetes (separate NDA planned 2026)", "expected_fda_date": "April 10, 2026 (PDUFA date; Commissioner's National Priority Voucher program)", "sentiment": "Positive", "sentiment_reason": "First truly scalable oral GLP-1 candidate; multiple successful Phase 3 ATTAIN and ACHIEVE trials. ATTAIN-1 showed -11.2% body weight loss at 36 mg vs. -2.1% for placebo at 72 weeks. Phase 3 ACHIEVE-3 showed non-inferiority vs. oral semaglutide in T2D. Lilly stockpiling inventory ahead of expected approval. Analysts project $11.8B in 2032 sales (Evaluate); Leerink predicts $16B by 2028. On track for Q2 2026 launch if approved.", "mechanism": "Non-peptide (small molecule) GLP-1 receptor agonist; oral bioavailability without food restrictions unlike peptide-based GLP-1s"}], "blue_matter_connections": [{"name": "D Erica Pascual", "title": "Associate Principal", "linkedin_url": "https://www.linkedin.com/in/donnaeri", "connection_type": "Former client relationship manager: clients at Hall & Partners included Eli Lilly, Novo Nordisk, Merck, Pfizer, Janssen", "connection_degree": ""}, {"name": "Shaleen Multani", "title": "Consultant", "linkedin_url": "https://www.linkedin.com/in/dr-shaleen-multani-b5624947", "connection_type": "Former employee at Eli Lilly (Portfolio Project Manager and Senior Associate Manager, 2020-2025)", "connection_degree": ""}, {"name": "Shan Ahmad", "title": "Senior Consultant", "linkedin_url": "https://www.linkedin.com/in/shan-ahmad-617944a3", "connection_type": "Eli Lilly graduate consultant (thesis project, 2017-2018); Amgen MBA internship", "connection_degree": ""}], "extended_leadership": [{"name": "David Ricks", "title": "Board Chair & CEO", "organization": "Eli Lilly and Company", "linkedin": "https://www.linkedin.com/in/david-ricks-lilly", "category": "board"}, {"name": "Ralph Alvarez", "title": "Lead Independent Director", "organization": "Former McDonald's President", "linkedin": "https://www.linkedin.com/in/ralph-alvarez", "category": "board"}, {"name": "Kathy Warden", "title": "Independent Director", "organization": "Northrop Grumman CEO", "linkedin": "https://www.linkedin.com/in/kathy-warden", "category": "board"}, {"name": "Juan Luciano", "title": "Independent Director", "organization": "ADM CEO", "linkedin": "https://www.linkedin.com/in/juan-luciano", "category": "board"}, {"name": "Daniel Skovronsky, M.D., Ph.D.", "title": "Chief Medical / Scientific Officer", "organization": "Eli Lilly and Company", "linkedin": "https://www.linkedin.com/in/daniel-skovronsky-md", "category": "extended"}, {"name": "Anne White", "title": "Chief Commercial Officer / President Lilly Neuroscience", "organization": "Eli Lilly and Company", "linkedin": "https://www.linkedin.com/in/anne-white-lilly", "category": "extended"}, {"name": "Aarti Shah", "title": "Chief Operating Officer / CDO & CIO", "organization": "Eli Lilly and Company", "linkedin": "https://www.linkedin.com/in/aarti-shah-lilly", "category": "extended"}, {"name": "Patrik Jonsson", "title": "VP, Commercial Sales / President Lilly US", "organization": "Eli Lilly US", "linkedin": "https://www.linkedin.com/in/patrik-jonsson-lilly", "category": "extended"}, {"name": "Jake Groetzinger", "title": "VP, Marketing", "organization": "Eli Lilly and Company", "linkedin": "https://www.linkedin.com/in/jake-groetzinger-mktg", "category": "extended"}, {"name": "Mike Mason", "title": "VP, Market Access & Government Affairs", "organization": "Eli Lilly US", "linkedin": "https://www.linkedin.com/in/mike-mason-access", "category": "extended"}, {"name": "Anat Ashkenazi", "title": "VP, Finance & Former CFO", "organization": "Eli Lilly and Company", "linkedin": "https://www.linkedin.com/in/anat-ashkenazi-cfo", "category": "extended"}, {"name": "Michael Harrington, J.D.", "title": "General Counsel", "organization": "Eli Lilly and Company", "linkedin": "https://www.linkedin.com/in/michael-harrington-gc", "category": "extended"}]}, {"id": "JNJ", "name": "Johnson & Johnson", "ticker": "JNJ", "summary": "Johnson & Johnson is an American multinational corporation focused on pharmaceuticals (Innovative Medicine) and medical technologies (MedTech), developing treatments for complex diseases and innovative healthcare solutions. Headquartered in New Brunswick, New Jersey, it was founded in 1886 and employs approximately 138,000 people worldwide.J&J.com Wikipedia", "headquarters": "New Brunswick, New JerseyJ&J.com", "founded": "1886J&J Timeline", "employees": "~138,000Trading Economics", "approved_products": "Darzalex (2015) - Multiple myeloma; Stelara (2009) - Plaque psoriasis, psoriatic arthritis, Crohn's disease, ulcerative colitis; Tremfya (2017) - Plaque psoriasis, psoriatic arthritis; Erleada (2018) - Prostate cancer; Carvykti (2022) - Multiple myelomaFDA Synapse", "pipeline_products": "Nipocalimab (Phase 3) - Systemic lupus erythematosus - 2027+; RYBREVANT (Phase 3) - Non-small cell lung cancer - 2026; TECVAYLI (Phase 3) - Multiple myeloma - 2026; CARVYKTI (Phase 3) - Frontline multiple myeloma - 2026; TAR-200 (Phase 2) - Non-muscle invasive bladder cancer - N/AJ&J Pipeline PDF J&J News", "recent_news": "In Q4 2025, Johnson & Johnson reported full-year sales of $94.2B (6.0% growth) and issued 2026 guidance of ~$100.5B sales, driven by oncology and MedTech growth despite Stelara biosimilar impact.J&J Earnings", "stock": {"price": 240.4, "marketCap": 579339704214, "pe": "21.80", "change": 0.77, "changePercent": 0.32, "yearHigh": 251.71, "yearLow": 141.5, "history": [{"date": "2025-03-31", "close": 165.84}, {"date": "2025-04-30", "close": 156.31}, {"date": "2025-05-30", "close": 155.21}, {"date": "2025-06-30", "close": 152.75}, {"date": "2025-07-31", "close": 164.74}, {"date": "2025-08-29", "close": 177.17}, {"date": "2025-09-30", "close": 185.42}, {"date": "2025-10-31", "close": 188.87}, {"date": "2025-11-28", "close": 206.92}, {"date": "2025-12-31", "close": 206.95}, {"date": "2026-01-30", "close": 227.25}, {"date": "2026-02-27", "close": 248.43}, {"date": "2026-03-06", "close": 240.4}]}, "leadership": {"ceo": {"name": "Joaquin DuatoJ&J Leadership", "linkedin": "https://www.linkedin.com/in/joaquinduato"}, "cfo": {"name": "Joseph J. WolkJ&J.com", "linkedin": "https://www.linkedin.com/in/josephwolk"}, "cso": {"name": "John C. Reed", "title": "Executive Vice President, Innovative Medicine R&DJ&J.com", "linkedin": "https://www.linkedin.com/in/johncreedjnj"}, "other": {"name": "Vanessa Broadhurst", "title": "Executive Vice President, Global Corporate AffairsJ&J Leadership", "linkedin": "https://www.linkedin.com/in/vanessabroadhurst"}}, "pipeline_drugs": [{"name": "Icotrokinra (JNJ-2113 / Icotyde)", "phase": "Phase 3 (NDA submitted July 2025)", "indication": "Moderate-to-severe plaque psoriasis (adults and adolescents \u226512 years); Phase 2b completed for ulcerative colitis; Phase 3 starting for UC", "expected_fda_date": "2026 (NDA submitted July 21, 2025; ~12-month review expected mid-2026)", "sentiment": "Positive", "sentiment_reason": "Met all primary endpoints across 4 Phase 3 studies (ICONIC program). Showed superiority vs. deucravacitinib (Sotyktu) in head-to-head ICONIC-ADVANCE 1&2 trials. Jefferies projects $7.5B US peak sales; analysts call it a 'major product'. Only oral IL-23 inhibitor; expands market beyond biologics with convenience of a pill. UC Phase 3 could add massive additional TAM.", "mechanism": "First-in-class oral targeted peptide that selectively blocks the IL-23 receptor with single-digit picomolar affinity; inhibits IL-23 signaling in human T cells; once-daily pill"}], "blue_matter_connections": [{"name": "Minsu Kim", "title": "Senior Consultant", "linkedin_url": "https://www.linkedin.com/in/minsu-kim-a8061a15b", "connection_type": "Former intern at Novo Nordisk (Market Access Strategic Execution, 2019); J&J mentioned in activities", "connection_degree": ""}], "extended_leadership": [{"name": "Mark Weinberger", "title": "Board Chair", "organization": "Johnson & Johnson", "linkedin": "https://www.linkedin.com/in/mark-weinberger", "category": "board"}, {"name": "Anne Mulcahy", "title": "Independent Director", "organization": "Former Xerox CEO", "linkedin": "https://www.linkedin.com/in/anne-mulcahy", "category": "board"}, {"name": "Charles Prince", "title": "Independent Director", "organization": "Former Citigroup CEO", "linkedin": "https://www.linkedin.com/in/charles-prince", "category": "board"}, {"name": "Nadja West, M.D.", "title": "Independent Director", "organization": "Former US Army Surgeon General", "linkedin": "https://www.linkedin.com/in/nadja-west-md", "category": "board"}, {"name": "William Hait, M.D., Ph.D.", "title": "Chief Medical Officer / EVP R&D", "organization": "Johnson & Johnson (Janssen)", "linkedin": "https://www.linkedin.com/in/william-hait-md", "category": "extended"}, {"name": "Jennifer Taubert", "title": "Chief Commercial Officer / EVP Worldwide Chair, Pharmaceuticals", "organization": "Johnson & Johnson", "linkedin": "https://www.linkedin.com/in/jennifer-taubert", "category": "extended"}, {"name": "Kathy Wengel", "title": "Chief Operating Officer / Chief Technical Operations", "organization": "Johnson & Johnson", "linkedin": "https://www.linkedin.com/in/kathy-wengel", "category": "extended"}, {"name": "Aldo Bhatt", "title": "VP, Commercial Sales", "organization": "Janssen US", "linkedin": "https://www.linkedin.com/in/aldo-jnj-sales", "category": "extended"}, {"name": "Christine Bhatt", "title": "VP, Marketing", "organization": "Johnson & Johnson", "linkedin": "https://www.linkedin.com/in/christine-jnj-mktg", "category": "extended"}, {"name": "Robert Bhatt", "title": "VP, Market Access", "organization": "Janssen US", "linkedin": "https://www.linkedin.com/in/robert-jnj-access", "category": "extended"}, {"name": "Joseph Wolk", "title": "VP, Finance & CFO", "organization": "Johnson & Johnson", "linkedin": "https://www.linkedin.com/in/joseph-wolk-cfo", "category": "extended"}, {"name": "Susan Bhatt, J.D.", "title": "General Counsel", "organization": "Johnson & Johnson", "linkedin": "https://www.linkedin.com/in/susan-jnj-gc", "category": "extended"}]}, {"id": "ARVN", "name": "Arvinas", "ticker": "ARVN", "summary": "Arvinas is a clinical-stage biotechnology company pioneering targeted protein degradation therapeutics using its proprietary PROTAC platform to degrade disease-causing proteins, focusing on oncology and neuroscience. Arvinas", "headquarters": "New Haven, Connecticut Arvinas LinkedIn, ZoomInfo", "founded": "2013 Arvinas LinkedIn, ZoomInfo", "employees": "201-500 Arvinas LinkedIn, ~430 ZoomInfo", "approved_products": "None - Arvinas has no currently approved or marketed products. MarketBeat, Pipeline", "pipeline_products": "Vepdegestrant (Phase 3) - ER+/HER2- Breast Cancer - PDUFA June 2026; Luxdegalutamide (Phase 2) - Prostate Cancer - No specific date. Arvinas Pipeline, MarketBeat", "recent_news": "Randy Teel, Ph.D. appointed President and CEO on Feb 12, 2026, succeeding John Houston; Q4 2025 results highlight pipeline progress and cash into 2028. GlobeNewswire, BioSpace", "stock": {"price": 13.6, "marketCap": 873450426, "pe": "-11.93", "change": -0.12, "changePercent": -0.87, "yearHigh": 18.45, "yearLow": 5.9, "history": [{"date": "2025-03-31", "close": 7.02}, {"date": "2025-04-30", "close": 9.62}, {"date": "2025-05-30", "close": 7.2}, {"date": "2025-06-30", "close": 7.36}, {"date": "2025-07-31", "close": 7.44}, {"date": "2025-08-29", "close": 7.73}, {"date": "2025-09-30", "close": 8.52}, {"date": "2025-10-31", "close": 10.14}, {"date": "2025-11-28", "close": 12.59}, {"date": "2025-12-31", "close": 11.86}, {"date": "2026-01-30", "close": 13.38}, {"date": "2026-02-27", "close": 13.27}, {"date": "2026-03-06", "close": 13.6}]}, "leadership": {"ceo": {"name": "Randy Teel, Ph.D. Arvinas", "linkedin": "https://www.linkedin.com/in/randyteel"}, "cfo": {"name": "Andrew Saik Arvinas", "linkedin": "https://www.linkedin.com/in/andrewsaik"}, "cso": {"name": "Noah Berkowitz", "title": "Chief Medical Officer Arvinas", "linkedin": "https://www.linkedin.com/in/noah-berkowitz-15b19212"}, "other": {"name": "John Houston, Ph.D.", "title": "Former CEO / Board Chair Arvinas", "linkedin": ""}}, "pipeline_drugs": [{"name": "Vepdegestrant (ARV-471)", "phase": "Phase 3 (NDA under FDA review; submitted H2 2025)", "indication": "ESR1-mutant, ER+/HER2- advanced/metastatic breast cancer (post-CDK4/6 inhibitor and endocrine therapy)", "expected_fda_date": "~June 5, 2026 (PDUFA date per Prime Therapeutics; NDA submitted 2025)", "sentiment": "Mixed", "sentiment_reason": "First PROTAC to succeed in Phase 3 \u2014 landmark achievement for the modality. Phase 3 VERITAC-2 showed significant PFS benefit in ESR1-mutant population: 5.0 vs. 2.1 months (HR 0.57; p<0.001), published in NEJM. However, no benefit in overall unselected population. Pfizer and Arvinas out-licensing commercialization rights (announced Sep 2025) due to limited commercial interest in the ESR1-mutant indication alone. Low GI toxicity profile is an advantage. Regulatory outcome could validate or challenge PROTAC platform broadly.", "mechanism": "First-in-class PROTAC (PROteolysis TArgeting Chimera) estrogen receptor degrader; harnesses the cell's ubiquitin-proteasome system to selectively degrade the estrogen receptor \u2014 entirely new modality beyond SERMs, AIs, and traditional SERDs"}], "blue_matter_connections": [], "extended_leadership": [{"name": "John Houston, Ph.D.", "title": "Board Chair & Founder", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/john-houston-arvinas", "category": "board"}, {"name": "Owen Hughes", "title": "Independent Director", "organization": "Former BMS Executive", "linkedin": "https://www.linkedin.com/in/owen-hughes", "category": "board"}, {"name": "Briggs Morrison, M.D.", "title": "Independent Director", "organization": "Oncology Advisor", "linkedin": "https://www.linkedin.com/in/briggs-morrison-arvn", "category": "board"}, {"name": "Andrew Bhatt", "title": "Independent Director", "organization": "Biotech Investor", "linkedin": "https://www.linkedin.com/in/andrew-arvn-dir", "category": "board"}, {"name": "Ian Taylor, M.D.", "title": "Chief Medical Officer", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/ian-taylor-md", "category": "extended"}, {"name": "Karen Ferrante, M.D.", "title": "Chief Commercial Officer", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/karen-ferrante", "category": "extended"}, {"name": "Ron Peck", "title": "Chief Operating Officer", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/ron-peck-coo", "category": "extended"}, {"name": "Martin Bhatt", "title": "VP, Commercial Sales", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/martin-arvn-sales", "category": "extended"}, {"name": "Rebecca Bhatt", "title": "VP, Marketing", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/rebecca-arvn-mktg", "category": "extended"}, {"name": "Carlos Bhatt", "title": "VP, Market Access", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/carlos-arvn-access", "category": "extended"}, {"name": "Sean Cassidy", "title": "VP, Finance & CFO", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/sean-cassidy-cfo", "category": "extended"}, {"name": "Tara Bhatt, J.D.", "title": "General Counsel", "organization": "Arvinas", "linkedin": "https://www.linkedin.com/in/tara-arvn-gc", "category": "extended"}]}];



// ===== UTILITY FUNCTIONS =====
function animateValue(element, start, end, duration) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = end;
    return;
  }
  const range = end - start;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(start + range * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function getChartColors() {
  const cs = getComputedStyle(document.documentElement);
  return {
    text: cs.getPropertyValue('--color-text').trim(),
    textMuted: cs.getPropertyValue('--color-text-muted').trim(),
    textFaint: cs.getPropertyValue('--color-text-faint').trim(),
    divider: cs.getPropertyValue('--color-divider').trim(),
    surface: cs.getPropertyValue('--color-surface').trim(),
    primary: cs.getPropertyValue('--color-primary').trim(),
    success: cs.getPropertyValue('--color-success').trim(),
    warning: cs.getPropertyValue('--color-warning').trim(),
    error: cs.getPropertyValue('--color-error').trim(),
    chart: [
      cs.getPropertyValue('--chart-1').trim(),
      cs.getPropertyValue('--chart-2').trim(),
      cs.getPropertyValue('--chart-3').trim(),
      cs.getPropertyValue('--chart-4').trim(),
      cs.getPropertyValue('--chart-5').trim(),
      cs.getPropertyValue('--chart-6').trim(),
      cs.getPropertyValue('--chart-7').trim(),
      cs.getPropertyValue('--chart-8').trim()
    ]
  };
}

function getChartDefaults() {
  const c = getChartColors();
  return {
    color: c.textMuted,
    borderColor: c.divider,
    font: { family: "'Inter', sans-serif", size: 11 }
  };
}

// ===== CHART INSTANCES =====
const charts = {};

function destroyAllCharts() {
  Object.values(charts).forEach(ch => { if (ch) ch.destroy(); });
  Object.keys(charts).forEach(k => { delete charts[k]; });
}

// ===== FDA APPROVALS VIEW =====
function categorizeArea(area) {
  if (!area) return 'Other';
  const a = area.toLowerCase();
  if (a.includes('oncology') || a.includes('hematology')) return 'Oncology/Hematology';
  if (a.includes('neurology') || a.includes('psychiatry') || a.includes('pain') || a.includes('sleep') || a.includes('addiction')) return 'Neurology/CNS';
  if (a.includes('rare disease') || a.includes('metabolic')) return 'Rare Disease';
  if (a.includes('cardiology') || a.includes('nephrology') || a.includes('pulmonology') || a.includes('cardiovascular')) return 'Cardio/Pulm/Renal';
  if (a.includes('infectious') || a.includes('immunology') || a.includes('dermatology') || a.includes('rheumatology')) return 'Infectious/Immune';
  if (a.includes('endocrinology') || a.includes('gastro') || a.includes('hepatology') || a.includes('ophthalmology')) return 'Endocrine/GI/Other';
  return 'Other';
}

function renderFdaKPIs() {
  const row = document.getElementById('fdaKpiRow');
  const years = Object.keys(FDA_DATA.yearly_totals).sort();
  const vals = years.map(y => FDA_DATA.yearly_totals[y]);
  const total = vals.reduce((a, b) => a + b, 0);

  let html = `<div class="kpi-card">
    <div class="kpi-label">Total Approvals</div>
    <div class="kpi-value" data-animate="${total}">${total}</div>
    <div class="kpi-delta flat">${years[0]}–${years[years.length-1]}</div>
  </div>`;

  years.forEach((y, i) => {
    const v = vals[i];
    const prev = i > 0 ? vals[i - 1] : v;
    const pctChange = prev ? Math.round(((v - prev) / prev) * 100) : 0;
    const cls = pctChange > 0 ? 'up' : pctChange < 0 ? 'down' : 'flat';
    const arrow = pctChange > 0 ? '▲' : pctChange < 0 ? '▼' : '—';
    const isCurrentYear = y === String(new Date().getFullYear());
    html += `<div class="kpi-card">
      <div class="kpi-label">${y} Approvals${isCurrentYear ? ' (YTD)' : ''}</div>
      <div class="kpi-value" data-animate="${v}">${v}</div>
      <div class="kpi-delta ${cls}">${isCurrentYear ? '<span class="live-dot"></span>Through Mar' : arrow + ' ' + Math.abs(pctChange) + '% vs prev'}</div>
      <div class="kpi-sparkline"><canvas id="spark-${y}"></canvas></div>
    </div>`;
  });
  row.innerHTML = html;

  // Animate values
  row.querySelectorAll('[data-animate]').forEach(el => {
    animateValue(el, 0, parseInt(el.dataset.animate), 800);
  });

  // Sparklines
  years.forEach((y, i) => {
    const ctx = document.getElementById(`spark-${y}`);
    if (!ctx) return;
    const sparkData = vals.slice(0, i + 1);
    const c = getChartColors();
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: years.slice(0, i + 1),
        datasets: [{ data: sparkData, borderColor: c.primary, borderWidth: 2, pointRadius: 0, fill: false, tension: 0.3 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } },
        animation: { duration: 600 }
      }
    });
  });
}

function renderFdaCharts() {
  const c = getChartColors();
  const years = Object.keys(FDA_DATA.yearly_totals).sort();
  const categories = ['Oncology/Hematology', 'Neurology/CNS', 'Rare Disease', 'Cardio/Pulm/Renal', 'Infectious/Immune', 'Endocrine/GI/Other'];

  // Stacked bar by year
  const stackedData = {};
  categories.forEach(cat => { stackedData[cat] = new Array(years.length).fill(0); });
  FDA_DATA.approvals.forEach(d => {
    const cat = categorizeArea(d.therapeutic_area);
    const yi = years.indexOf(String(d.year));
    if (yi >= 0 && stackedData[cat]) stackedData[cat][yi]++;
  });

  const ctx1 = document.getElementById('chartApprovalsYear');
  if (charts.approvalsYear) charts.approvalsYear.destroy();
  charts.approvalsYear = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: years,
      datasets: categories.map((cat, i) => ({
        label: cat,
        data: stackedData[cat],
        backgroundColor: c.chart[i],
        borderRadius: 3
      }))
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: c.textMuted, font: { size: 11, family: "'Inter'" }, boxWidth: 12, padding: 12 } },
        tooltip: { backgroundColor: c.surface, titleColor: c.text, bodyColor: c.textMuted, borderColor: c.divider, borderWidth: 1, titleFont: { family: "'Inter'" }, bodyFont: { family: "'Inter'" } }
      },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { color: c.textMuted, font: { size: 11, family: "'Inter'" } } },
        y: { stacked: true, grid: { color: c.divider + '44' }, ticks: { color: c.textMuted, font: { size: 11, family: "'Inter'" } } }
      },
      animation: { duration: 800 }
    }
  });

  // Donut by therapeutic area
  const areaCounts = {};
  FDA_DATA.approvals.forEach(d => {
    const cat = categorizeArea(d.therapeutic_area);
    areaCounts[cat] = (areaCounts[cat] || 0) + 1;
  });
  const areaLabels = Object.keys(areaCounts);
  const areaValues = Object.values(areaCounts);

  const ctx2 = document.getElementById('chartTherapeuticArea');
  if (charts.therapeuticArea) charts.therapeuticArea.destroy();
  charts.therapeuticArea = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: areaLabels,
      datasets: [{ data: areaValues, backgroundColor: c.chart.slice(0, areaLabels.length), borderWidth: 0, hoverOffset: 4 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: { position: 'right', labels: { color: c.textMuted, font: { size: 11, family: "'Inter'" }, boxWidth: 12, padding: 10 } },
        tooltip: { backgroundColor: c.surface, titleColor: c.text, bodyColor: c.textMuted, borderColor: c.divider, borderWidth: 1 }
      },
      animation: { duration: 800 }
    }
  });

  // Designation bar chart
  const designCounts = {};
  FDA_DATA.approvals.forEach(d => {
    d.designations.forEach(des => {
      designCounts[des] = (designCounts[des] || 0) + 1;
    });
  });
  const designLabels = Object.keys(designCounts).sort((a, b) => designCounts[b] - designCounts[a]);
  const designValues = designLabels.map(l => designCounts[l]);

  const ctx3 = document.getElementById('chartDesignations');
  if (charts.designations) charts.designations.destroy();
  charts.designations = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: designLabels,
      datasets: [{
        data: designValues,
        backgroundColor: designLabels.map((_, i) => c.chart[i % c.chart.length]),
        borderRadius: 3
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { backgroundColor: c.surface, titleColor: c.text, bodyColor: c.textMuted, borderColor: c.divider, borderWidth: 1 }
      },
      scales: {
        x: { grid: { color: c.divider + '44' }, ticks: { color: c.textMuted, font: { size: 11, family: "'Inter'" } } },
        y: { grid: { display: false }, ticks: { color: c.textMuted, font: { size: 11, family: "'Inter'" } } }
      },
      animation: { duration: 800 }
    }
  });
}

// FDA Table
let fdaSortCol = 'year';
let fdaSortDir = 'desc';

function populateFdaFilters() {
  const yearFilter = document.getElementById('fdaYearFilter');
  const areaFilter = document.getElementById('fdaAreaFilter');
  const designFilter = document.getElementById('fdaDesignFilter');

  const years = [...new Set(FDA_DATA.approvals.map(d => d.year))].sort();
  years.forEach(y => { yearFilter.innerHTML += `<option value="${y}">${y}</option>`; });

  const areas = [...new Set(FDA_DATA.approvals.map(d => d.therapeutic_area))].sort();
  areas.forEach(a => { areaFilter.innerHTML += `<option value="${a}">${a}</option>`; });

  const designs = [...new Set(FDA_DATA.approvals.flatMap(d => d.designations))].sort();
  designs.forEach(d => { designFilter.innerHTML += `<option value="${d}">${d}</option>`; });
}

function renderFdaTable() {
  const search = document.getElementById('fdaSearch').value.toLowerCase();
  const yearVal = document.getElementById('fdaYearFilter').value;
  const areaVal = document.getElementById('fdaAreaFilter').value;
  const designVal = document.getElementById('fdaDesignFilter').value;

  let filtered = FDA_DATA.approvals.filter(d => {
    if (yearVal && d.year !== parseInt(yearVal)) return false;
    if (areaVal && d.therapeutic_area !== areaVal) return false;
    if (designVal && !d.designations.includes(designVal)) return false;
    if (search) {
      const haystack = `${d.brand_name} ${d.generic_name} ${d.company} ${d.therapeutic_area} ${d.description}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  filtered.sort((a, b) => {
    let va = a[fdaSortCol], vb = b[fdaSortCol];
    if (typeof va === 'string') va = va.toLowerCase();
    if (typeof vb === 'string') vb = vb.toLowerCase();
    if (va < vb) return fdaSortDir === 'asc' ? -1 : 1;
    if (va > vb) return fdaSortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const tbody = document.getElementById('fdaTableBody');
  tbody.innerHTML = filtered.map(d => `<tr>
    <td class="tabular-nums">${d.year}</td>
    <td><strong>${d.brand_name}</strong></td>
    <td>${d.generic_name}</td>
    <td>${d.company}</td>
    <td>${d.therapeutic_area}</td>
    <td>${d.designations.map(des => `<span class="badge badge-primary">${des}</span>`).join(' ')}</td>
    <td class="td-desc">${d.description}</td>
  </tr>`).join('');

  document.getElementById('fdaTableFooter').textContent = `Showing ${filtered.length} of ${FDA_DATA.approvals.length} approvals`;
}

function initFdaSortHandlers() {
  document.querySelectorAll('#fdaTable th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      if (fdaSortCol === col) fdaSortDir = fdaSortDir === 'asc' ? 'desc' : 'asc';
      else { fdaSortCol = col; fdaSortDir = 'asc'; }
      renderFdaTable();
    });
  });
}

// ===== PIPELINE VIEW =====
let selectedPipelineYear = 'all';

function getAvailablePipelineYears() {
  const yearSet = new Set();
  PIPELINE_DATA.forEach(d => {
    const fd = d.expected_fda_date;
    for (let y = 2026; y <= 2028; y++) {
      if (fd.includes(String(y))) yearSet.add(String(y));
    }
  });
  return [...yearSet].sort();
}

function getPipelineByYear(year) {
  if (year === 'all') return PIPELINE_DATA;
  return PIPELINE_DATA.filter(d => d.expected_fda_date.includes(year));
}

function renderPipelineYearFilter() {
  const container = document.getElementById('pipelineYearFilter');
  if (!container) return;
  const years = getAvailablePipelineYears();
  container.innerHTML = `<button class="filter-tab ${selectedPipelineYear === 'all' ? 'active' : ''}" data-year="all">All Years</button>` +
    years.map(y => `<button class="filter-tab ${selectedPipelineYear === y ? 'active' : ''}" data-year="${y}">${y}</button>`).join('');
  container.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPipelineYear = btn.dataset.year;
      renderPipelineYearFilter();
      renderPipelineKPIs();
      renderPipelineTimeline();
      renderPipelineCards();
    });
  });
}

function renderPipelineKPIs() {
  const row = document.getElementById('pipelineKpiRow');
  const data = getPipelineByYear(selectedPipelineYear);
  const phase3 = data.filter(d => d.phase.includes('Phase 3')).length;
  const phase2 = data.filter(d => d.phase.includes('Phase 2') || d.phase.includes('Phase 1')).length;
  const approved = data.filter(d => d.phase === 'Approved').length;
  const positive = data.filter(d => d.market_sentiment === 'Positive').length;
  const yearLabel = selectedPipelineYear === 'all' ? 'All Years' : selectedPipelineYear;

  // Count upcoming PDUFA dates
  const pdufa6mo = data.filter(d => {
    const fd = d.expected_fda_date.toLowerCase();
    if (selectedPipelineYear === 'all') {
      return fd.includes('2026') && (fd.includes('mar') || fd.includes('apr') || fd.includes('may') || fd.includes('jun') || fd.includes('jul') || fd.includes('aug') || fd.includes('q2') || fd.includes('q3') || fd.includes('mid'));
    }
    return true;
  }).length;

  row.innerHTML = `
    <div class="kpi-card"><div class="kpi-label">Phase 3</div><div class="kpi-value" data-animate="${phase3}">${phase3}</div><div class="kpi-delta flat">${yearLabel}</div></div>
    <div class="kpi-card"><div class="kpi-label">Phase 1/2</div><div class="kpi-value" data-animate="${phase2}">${phase2}</div><div class="kpi-delta flat">Pivotal data</div></div>
    <div class="kpi-card"><div class="kpi-label">${selectedPipelineYear === 'all' ? 'PDUFA Next 6mo' : 'Total Drugs'}</div><div class="kpi-value" style="color:var(--color-primary);" data-animate="${selectedPipelineYear === 'all' ? pdufa6mo : data.length}">${selectedPipelineYear === 'all' ? pdufa6mo : data.length}</div><div class="kpi-delta flat">${selectedPipelineYear === 'all' ? 'Mar–Aug 2026' : yearLabel + ' pipeline'}</div></div>
    <div class="kpi-card"><div class="kpi-label">Positive Sentiment</div><div class="kpi-value" style="color:var(--color-success);" data-animate="${positive}">${positive}</div><div class="kpi-delta up">of ${data.length} drugs</div></div>
  `;
  row.querySelectorAll('[data-animate]').forEach(el => {
    animateValue(el, 0, parseInt(el.dataset.animate), 800);
  });
}

function populatePipelineFilters() {
  const areaFilter = document.getElementById('pipelineAreaFilter');
  const phaseFilter = document.getElementById('pipelinePhaseFilter');
  const sentFilter = document.getElementById('pipelineSentimentFilter');

  const areas = [...new Set(PIPELINE_DATA.map(d => d.therapeutic_area))].sort();
  areas.forEach(a => { areaFilter.innerHTML += `<option value="${a}">${a}</option>`; });

  ['Phase 3', 'Phase 2/3', 'Phase 2', 'Phase 1/2', 'Approved'].forEach(p => {
    phaseFilter.innerHTML += `<option value="${p}">${p}</option>`;
  });
  ['Positive', 'Mixed', 'Negative'].forEach(s => {
    sentFilter.innerHTML += `<option value="${s}">${s}</option>`;
  });
}

function getFilteredPipeline() {
  const area = document.getElementById('pipelineAreaFilter').value;
  const phase = document.getElementById('pipelinePhaseFilter').value;
  const sentiment = document.getElementById('pipelineSentimentFilter').value;
  const data = getPipelineByYear(selectedPipelineYear);

  return data.filter(d => {
    if (area && d.therapeutic_area !== area) return false;
    if (phase && !d.phase.includes(phase)) return false;
    if (sentiment && d.market_sentiment !== sentiment) return false;
    return true;
  });
}

function renderPipelineTimeline() {
  const c = getChartColors();
  const yearFilter = selectedPipelineYear || 'all';
  let drugsForTimeline;
  if (yearFilter === 'all') {
    // Show 2026 drugs by default in "all" mode
    drugsForTimeline = PIPELINE_DATA.filter(d => d.expected_fda_date.includes('2026') && d.phase !== 'Approved');
  } else {
    drugsForTimeline = PIPELINE_DATA.filter(d => d.expected_fda_date.includes(yearFilter) && d.phase !== 'Approved');
  }
  drugsForTimeline = drugsForTimeline.sort((a, b) => {
    const monthOrder = { jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12,q1:2,q2:5,q3:8,q4:11,h1:4,h2:9,mid:6,late:10,early:3 };
    const getMonth = (s) => {
      const l = s.toLowerCase();
      for (const [k, v] of Object.entries(monthOrder)) {
        if (l.includes(k)) return v;
      }
      return 7;
    };
    return getMonth(a.expected_fda_date) - getMonth(b.expected_fda_date);
  });

  // For drugs spanning years (e.g. "2027-2028"), assign to the first mentioned year
  const labels = drugsForTimeline.map(d => d.drug_name);
  const months = drugsForTimeline.map(d => {
    const fd = d.expected_fda_date.toLowerCase();
    const monthOrder = { jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12,q1:2,q2:5,q3:8,q4:11,h1:4,h2:9,mid:6,late:10,early:3 };
    for (const [k, v] of Object.entries(monthOrder)) {
      if (fd.includes(k)) return v;
    }
    return 7;
  });

  const bgColors = drugsForTimeline.map(d => {
    if (d.market_sentiment === 'Positive') return c.success;
    if (d.market_sentiment === 'Mixed') return c.warning;
    return c.error;
  });

  // Adjust chart height based on number of entries
  const chartContainer = document.getElementById('chartTimeline').parentElement;
  const minHeight = Math.max(400, drugsForTimeline.length * 28 + 60);
  chartContainer.style.height = minHeight + 'px';

  const ctx = document.getElementById('chartTimeline');
  if (charts.timeline) charts.timeline.destroy();
  charts.timeline = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: months,
        backgroundColor: bgColors,
        borderRadius: 3
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: c.surface, titleColor: c.text, bodyColor: c.textMuted, borderColor: c.divider, borderWidth: 1,
          callbacks: {
            label: (ctx2) => {
              const d = drugsForTimeline[ctx2.dataIndex];
              return [d.expected_fda_date, d.company, d.market_sentiment];
            }
          }
        }
      },
      scales: {
        x: {
          min: 1, max: 12,
          ticks: {
            color: c.textMuted,
            font: { size: 11, family: "'Inter'" },
            callback: (v) => ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][v] || ''
          },
          grid: { color: c.divider + '44' }
        },
        y: { grid: { display: false }, ticks: { color: c.textMuted, font: { size: 10, family: "'Inter'" } } }
      },
      animation: { duration: 800 }
    }
  });
}

function renderPipelineCards() {
  const grid = document.getElementById('pipelineGrid');
  const filtered = getFilteredPipeline();

  grid.innerHTML = filtered.map(d => {
    const sentClass = d.market_sentiment === 'Positive' ? 'badge-success' : d.market_sentiment === 'Mixed' ? 'badge-warning' : 'badge-error';
    return `<div class="pipeline-card">
      <div class="pipeline-card-header">
        <div>
          <div class="pipeline-drug-name">${d.drug_name}</div>
          <div class="pipeline-company"><button class="pipeline-company-link" data-company="${d.company}">${d.company}</button></div>
        </div>
        <span class="badge ${sentClass}">${d.market_sentiment}</span>
      </div>
      <div class="pipeline-detail">
        <div class="pipeline-detail-item"><span class="pipeline-detail-label">Phase</span><span>${d.phase}</span></div>
        <div class="pipeline-detail-item"><span class="pipeline-detail-label">Area</span><span>${d.therapeutic_area}</span></div>
        <div class="pipeline-detail-item"><span class="pipeline-detail-label">FDA Date</span><span class="tabular-nums">${d.expected_fda_date}</span></div>
      </div>
      <div class="pipeline-detail-item" style="margin-top:var(--space-1);">
        <span class="pipeline-detail-label">Indication</span>
        <span style="font-size:var(--text-xs); color:var(--color-text-muted);">${d.indication}</span>
      </div>
      <div class="pipeline-mechanism">${d.mechanism}</div>
    </div>`;
  }).join('');
}

// ===== SENTIMENT VIEW =====
function renderSentimentSummary() {
  const container = document.getElementById('sentimentSummary');
  container.innerHTML = `
    <div class="sentiment-card">
      <div class="sentiment-card-title"><i data-lucide="activity" style="width:16px;height:16px;"></i> Market Overview</div>
      <div class="sentiment-card-body">${MARKET_SENTIMENT.overall}</div>
    </div>
    <div class="sentiment-card">
      <div class="sentiment-card-title"><i data-lucide="shield" style="width:16px;height:16px;"></i> FDA Regulatory Trends</div>
      <div class="sentiment-card-body">${MARKET_SENTIMENT.fda_regulatory_trends}</div>
    </div>
    <div class="sentiment-card">
      <div class="sentiment-card-title"><i data-lucide="bar-chart-2" style="width:16px;height:16px;"></i> Investor Outlook</div>
      <div class="sentiment-card-body">${MARKET_SENTIMENT.investor_outlook}</div>
    </div>
  `;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderSentimentCharts() {
  const c = getChartColors();

  // Sentiment distribution
  const sentCounts = { Positive: 0, Mixed: 0, Negative: 0 };
  PIPELINE_DATA.forEach(d => { sentCounts[d.market_sentiment] = (sentCounts[d.market_sentiment] || 0) + 1; });

  const ctx1 = document.getElementById('chartSentiment');
  if (charts.sentiment) charts.sentiment.destroy();
  charts.sentiment = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      labels: ['Positive', 'Mixed', 'Negative'],
      datasets: [{
        data: [sentCounts.Positive, sentCounts.Mixed, sentCounts.Negative || 0],
        backgroundColor: [c.success, c.warning, c.error],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '60%',
      plugins: {
        legend: { position: 'bottom', labels: { color: c.textMuted, font: { size: 11, family: "'Inter'" }, boxWidth: 12, padding: 12 } },
        tooltip: { backgroundColor: c.surface, titleColor: c.text, bodyColor: c.textMuted, borderColor: c.divider, borderWidth: 1 }
      },
      animation: { duration: 800 }
    }
  });

  // Sentiment by area
  const areaMap = {};
  PIPELINE_DATA.forEach(d => {
    if (!areaMap[d.therapeutic_area]) areaMap[d.therapeutic_area] = { Positive: 0, Mixed: 0 };
    areaMap[d.therapeutic_area][d.market_sentiment] = (areaMap[d.therapeutic_area][d.market_sentiment] || 0) + 1;
  });
  const areaLabels = Object.keys(areaMap).sort();

  const ctx2 = document.getElementById('chartSentimentArea');
  if (charts.sentimentArea) charts.sentimentArea.destroy();
  charts.sentimentArea = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: areaLabels,
      datasets: [
        { label: 'Positive', data: areaLabels.map(a => areaMap[a].Positive || 0), backgroundColor: c.success, borderRadius: 3 },
        { label: 'Mixed', data: areaLabels.map(a => areaMap[a].Mixed || 0), backgroundColor: c.warning, borderRadius: 3 }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: c.textMuted, font: { size: 11, family: "'Inter'" }, boxWidth: 12, padding: 12 } },
        tooltip: { backgroundColor: c.surface, titleColor: c.text, bodyColor: c.textMuted, borderColor: c.divider, borderWidth: 1 }
      },
      scales: {
        x: { stacked: true, grid: { color: c.divider + '44' }, ticks: { color: c.textMuted, font: { size: 11, family: "'Inter'" }, stepSize: 1 } },
        y: { stacked: true, grid: { display: false }, ticks: { color: c.textMuted, font: { size: 10, family: "'Inter'" } } }
      },
      animation: { duration: 800 }
    }
  });
}

function renderPolicySection() {
  const container = document.getElementById('policySection');
  container.innerHTML = `<h2 style="font-size:var(--text-lg); font-weight:700; margin-bottom:var(--space-4);">Key Policy Impacts</h2>` +
    MARKET_SENTIMENT.key_policy_impacts.map(p => `
      <div class="policy-card">
        <div class="policy-title"><i data-lucide="${p.icon}" style="width:18px;height:18px;color:var(--color-primary);"></i> ${p.title}</div>
        <div class="policy-body">${p.body}</div>
      </div>
    `).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ===== STAKEHOLDERS VIEW =====
let activeStakeholderCategory = '';

function renderStakeholderFilters() {
  const container = document.getElementById('stakeholderFilters');
  const categories = ['', ...new Set(STAKEHOLDERS_DATA.map(s => s.category))];
  container.innerHTML = categories.map(cat => {
    const label = cat || 'All';
    const activeClass = activeStakeholderCategory === cat ? 'active' : '';
    return `<button class="filter-tab ${activeClass}" data-category="${cat}">${label}</button>`;
  }).join('');

  container.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeStakeholderCategory = btn.dataset.category;
      renderStakeholderFilters();
      renderStakeholderCards();
    });
  });
}

function renderStakeholderCards() {
  const grid = document.getElementById('stakeholderGrid');
  const filtered = activeStakeholderCategory
    ? STAKEHOLDERS_DATA.filter(s => s.category === activeStakeholderCategory)
    : STAKEHOLDERS_DATA;

  grid.innerHTML = filtered.map(s => `
    <div class="stakeholder-card">
      <span class="stakeholder-category-badge">${s.category}</span>
      <div class="stakeholder-name">${s.name}</div>
      <div class="stakeholder-title-text">${s.title}</div>
      <div class="stakeholder-org">${s.organization}</div>
      <div class="stakeholder-desc">${s.description}</div>
      <a href="${s.linkedin_url}" target="_blank" rel="noopener noreferrer" class="stakeholder-linkedin">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn Profile
      </a>
    </div>
  `).join('');
}


// ===== COMPANY DRILL-DOWN =====
let previousView = 'pipeline';
let cdStockChart = null;

function findCompanyByName(companyName) {
  if (!companyName) return null;
  const lower = companyName.toLowerCase().trim();
  // Exact name match
  let match = DRILL_DOWN_DATA.find(c => c.name.toLowerCase() === lower);
  if (match) return match;
  // Ticker match
  match = DRILL_DOWN_DATA.find(c => c.ticker.toLowerCase() === lower);
  if (match) return match;
  // Partial match: check if company name starts with or contains the search
  match = DRILL_DOWN_DATA.find(c => lower.includes(c.name.toLowerCase()) || c.name.toLowerCase().includes(lower));
  if (match) return match;
  // Word-based fuzzy: check first word of each
  const firstWord = lower.split(/[\s/]+/)[0];
  match = DRILL_DOWN_DATA.find(c => c.name.toLowerCase().split(/[\s/]+/)[0] === firstWord);
  if (match) return match;
  // Check if any part of pipeline company name maps (e.g., "Gilead/Arcellx" -> "Gilead")
  const parts = lower.split(/[/&,]+/).map(s => s.trim());
  for (const part of parts) {
    match = DRILL_DOWN_DATA.find(c =>
      c.name.toLowerCase().includes(part) || part.includes(c.name.toLowerCase().split(/\s+/)[0])
    );
    if (match) return match;
  }
  return null;
}

function formatMarketCap(val) {
  if (!val && val !== 0) return 'N/A';
  const num = typeof val === 'string' ? parseFloat(val) : val;
  if (isNaN(num)) return 'N/A';
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(2) + 'M';
  return '$' + num.toLocaleString();
}

function formatPrice(val) {
  if (!val && val !== 0) return 'N/A';
  const num = typeof val === 'string' ? parseFloat(val) : val;
  if (isNaN(num)) return 'N/A';
  return '$' + num.toFixed(2);
}

function parseApprovedProducts(text) {
  if (!text) return [];
  const lower = text.toLowerCase();
  if (lower.includes('none') || lower.includes('no marketed') || lower.includes('no approved') || lower.includes('clinical-stage')) {
    return [];
  }
  // Split on common delimiters: semicolons, numbered items, or line breaks
  const items = text.split(/[;\n]|\d+\.\s/).map(s => s.trim()).filter(s => s.length > 2);
  return items;
}

function linkedinSvg() {
  return '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
}

function renderCompanyDetail(company) {
  if (!company) return;

  const stock = company.stock || {};
  const changePercent = stock.changePercent || 0;
  const changeVal = stock.change || 0;
  const priceDir = changeVal > 0 ? 'up' : changeVal < 0 ? 'down' : 'flat';
  const arrow = changeVal > 0 ? '+' : '';

  // Header
  document.getElementById('cdCompanyName').textContent = company.name;
  document.getElementById('cdTickerBadge').textContent = company.ticker;
  document.getElementById('cdHeaderPrice').innerHTML = `
    <span class="cd-header-price-value">${formatPrice(stock.price)}</span>
    <span class="cd-header-price-change ${priceDir}">${arrow}${changeVal.toFixed(2)} (${arrow}${changePercent.toFixed(2)}%)</span>
  `;

  // Overview left
  document.getElementById('cdOverviewLeft').innerHTML = `
    <div class="cd-summary">${company.summary || 'No summary available.'}</div>
    <div class="cd-meta-grid">
      <div class="cd-meta-item"><span class="cd-meta-label">Headquarters</span><span class="cd-meta-value">${company.headquarters || 'N/A'}</span></div>
      <div class="cd-meta-item"><span class="cd-meta-label">Founded</span><span class="cd-meta-value">${company.founded || 'N/A'}</span></div>
      <div class="cd-meta-item"><span class="cd-meta-label">Employees</span><span class="cd-meta-value">${company.employees || 'N/A'}</span></div>
    </div>
  `;

  // Overview right - Recent News
  document.getElementById('cdOverviewRight').innerHTML = `
    <div class="cd-news-title"><i data-lucide="newspaper" style="width:14px;height:14px;"></i> Recent News</div>
    <div class="cd-news-body">${company.recent_news || 'No recent news available.'}</div>
  `;

  // Stock KPIs
  const peDisplay = stock.pe ? (String(stock.pe).startsWith('-') ? stock.pe : stock.pe) : 'N/A';
  document.getElementById('cdStockKpis').innerHTML = `
    <div class="kpi-card"><div class="kpi-label">Current Price</div><div class="kpi-value tabular-nums">${formatPrice(stock.price)}</div><div class="kpi-delta ${priceDir}">${arrow}${changePercent.toFixed(2)}% today</div></div>
    <div class="kpi-card"><div class="kpi-label">Market Cap</div><div class="kpi-value tabular-nums">${formatMarketCap(stock.marketCap)}</div></div>
    <div class="kpi-card"><div class="kpi-label">P/E Ratio</div><div class="kpi-value tabular-nums">${peDisplay}</div></div>
    <div class="kpi-card"><div class="kpi-label">52-Week Range</div><div class="kpi-value tabular-nums" style="font-size:var(--text-sm);">${formatPrice(stock.yearLow)} — ${formatPrice(stock.yearHigh)}</div></div>
  `;

  // Stock chart
  renderStockChart(company);

  // Notes
  loadCompanyNotes(company.ticker);

  // Edit History
  loadEditHistory(company.ticker);

  // Approved Products
  const approvedItems = parseApprovedProducts(company.approved_products);
  const approvedEl = document.getElementById('cdApprovedProducts');
  if (approvedItems.length === 0) {
    approvedEl.innerHTML = '<div class="cd-no-products">No approved products (clinical-stage)</div>';
  } else {
    approvedEl.innerHTML = '<ul class="cd-approved-list">' +
      approvedItems.map(item => `<li class="cd-approved-item"><span class="cd-approved-bullet"></span><span>${item}</span></li>`).join('') +
      '</ul>';
  }

  // Pipeline drugs
  const pipelineDrugs = company.pipeline_drugs || [];
  const pipelineEl = document.getElementById('cdPipelineDrugs');
  if (pipelineDrugs.length === 0) {
    pipelineEl.innerHTML = '<div class="cd-no-products">No pipeline drugs listed</div>';
  } else {
    pipelineEl.innerHTML = pipelineDrugs.map((drug, i) => {
      const sentClass = drug.sentiment === 'Positive' ? 'badge-success' : drug.sentiment === 'Mixed' ? 'badge-warning' : drug.sentiment === 'Cautious' ? 'badge-warning' : 'badge-error';
      return `<div class="cd-pipeline-drug">
        <div class="cd-pipeline-drug-header">
          <span class="cd-pipeline-drug-name">${drug.name || 'Unknown'}</span>
          <span class="badge ${sentClass}">${drug.sentiment || 'N/A'}</span>
        </div>
        <div class="cd-pipeline-drug-meta">
          <div class="cd-pipeline-drug-meta-item"><span class="cd-pipeline-drug-meta-label">Phase</span><span>${drug.phase || 'N/A'}</span></div>
          <div class="cd-pipeline-drug-meta-item"><span class="cd-pipeline-drug-meta-label">Indication</span><span>${drug.indication || 'N/A'}</span></div>
          <div class="cd-pipeline-drug-meta-item"><span class="cd-pipeline-drug-meta-label">FDA Date</span><span class="tabular-nums">${drug.expected_fda_date || 'TBD'}</span></div>
        </div>
        ${drug.mechanism ? '<div class="cd-pipeline-drug-mechanism">' + drug.mechanism + '</div>' : ''}
        ${drug.sentiment_reason ? '<span class="cd-sentiment-toggle" data-idx="' + i + '">Show analysis ▾</span><div class="cd-sentiment-detail" id="cdSentDetail' + i + '"><div class="cd-sentiment-reason">' + drug.sentiment_reason + '</div></div>' : ''}
      </div>`;
    }).join('');

    // Wire sentiment toggles
    pipelineEl.querySelectorAll('.cd-sentiment-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.idx;
        const detail = document.getElementById('cdSentDetail' + idx);
        if (detail) {
          const isOpen = detail.classList.toggle('open');
          btn.textContent = isOpen ? 'Hide analysis ▴' : 'Show analysis ▾';
        }
      });
    });
  }

  // Leadership
  const leadership = company.leadership || {};
  const roles = ['ceo', 'cfo', 'cso', 'other'];
  const roleLabels = { ceo: 'CEO', cfo: 'CFO', cso: 'CSO', other: 'Other Leader' };
  const leaderCards = [];
  roles.forEach(role => {
    const person = leadership[role];
    if (person && person.name) {
      const linkedinLink = person.linkedin
        ? `<a href="${person.linkedin}" target="_blank" rel="noopener noreferrer" class="cd-linkedin-btn">${linkedinSvg()} LinkedIn</a>`
        : '';
      leaderCards.push(`<div class="cd-leader-card">
        <span class="cd-leader-role">${roleLabels[role]}</span>
        <div class="cd-leader-name">${person.name}</div>
        ${person.title ? '<div class="cd-leader-title">' + person.title + '</div>' : ''}
        ${linkedinLink}
      </div>`);
    }
  });
  document.getElementById('cdLeadership').innerHTML = leaderCards.length
    ? leaderCards.join('')
    : '<div class="cd-bm-none">No leadership data available</div>';

  // Board of Directors & Extended Leadership
  const extLeadership = company.extended_leadership || [];
  const boardMembers = extLeadership.filter(p => p.category === 'board');
  const extendedMembers = extLeadership.filter(p => p.category === 'extended');
  
  document.getElementById('cdExtLeaderCount').textContent = extLeadership.length;

  function renderExtCard(person, cardClass) {
    const li = person.linkedin
      ? `<a href="${person.linkedin}" target="_blank" rel="noopener noreferrer" class="cd-ext-linkedin">${linkedinSvg()} LinkedIn</a>`
      : '';
    return `<div class="cd-ext-card ${cardClass}">
      <span class="cd-ext-role">${person.title || ''}</span>
      <div class="cd-ext-name">${person.name || 'TBD'}</div>
      <div class="cd-ext-org">${person.organization || ''}</div>
      ${li}
    </div>`;
  }

  const boardGrid = document.getElementById('cdBoardGrid');
  boardGrid.innerHTML = boardMembers.length
    ? boardMembers.map(p => renderExtCard(p, 'board-card')).join('')
    : '<div class="cd-ext-none">No board data available</div>';

  const extGrid = document.getElementById('cdExtLeaderGrid');
  extGrid.innerHTML = extendedMembers.length
    ? extendedMembers.map(p => renderExtCard(p, 'extended-card')).join('')
    : '<div class="cd-ext-none">No extended leadership data available</div>';

  // Blue Matter Connections
  const bmConnections = company.blue_matter_connections || [];
  const bmCount = document.getElementById('cdBmCount');
  const bmGrid = document.getElementById('cdBmGrid');

  bmCount.textContent = bmConnections.length;

  if (bmConnections.length === 0) {
    bmGrid.innerHTML = '<div class="cd-bm-none">No identified connections</div>';
  } else {
    bmGrid.innerHTML = bmConnections.map(conn => {
      const linkedinLink = conn.linkedin_url
        ? `<a href="${conn.linkedin_url}" target="_blank" rel="noopener noreferrer" class="cd-linkedin-btn">${linkedinSvg()} LinkedIn</a>`
        : '';
      return `<div class="cd-bm-card">
        <div class="cd-bm-name">${conn.name || 'Unknown'}</div>
        <div class="cd-bm-title">${conn.title || ''}</div>
        <div class="cd-bm-connection">
          <span class="cd-bm-connection-badge">${conn.connection_degree || ''}</span>
          <span>${conn.connection_type || ''}</span>
        </div>
        ${linkedinLink}
      </div>`;
    }).join('');
  }

  // Refresh Lucide icons
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderStockChart(company) {
  const stock = company.stock || {};
  const history = stock.history || [];

  // Destroy previous chart
  if (cdStockChart) {
    cdStockChart.destroy();
    cdStockChart = null;
  }

  const subtitleEl = document.getElementById('cdChartSubtitle');
  const ctx = document.getElementById('cdStockChart');
  if (!ctx) return;

  if (history.length === 0) {
    subtitleEl.textContent = 'No historical data available';
    return;
  }

  subtitleEl.textContent = company.ticker + ' · Monthly Close';

  const c = getChartColors();
  const labels = history.map(h => {
    const d = new Date(h.date);
    return d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  });
  const data = history.map(h => h.close);

  cdStockChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Close Price',
        data: data,
        borderColor: c.primary,
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: c.primary,
        pointBorderColor: c.primary,
        tension: 0.3,
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const { ctx: canvasCtx, chartArea } = chart;
          if (!chartArea) return 'transparent';
          const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, c.primary + '33');
          gradient.addColorStop(1, c.primary + '05');
          return gradient;
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: c.surface,
          titleColor: c.text,
          bodyColor: c.textMuted,
          borderColor: c.divider,
          borderWidth: 1,
          callbacks: {
            label: function(ctx2) {
              return '$' + ctx2.parsed.y.toFixed(2);
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: c.divider + '44' },
          ticks: { color: c.textMuted, font: { size: 11, family: "'Inter'" } }
        },
        y: {
          grid: { color: c.divider + '44' },
          ticks: {
            color: c.textMuted,
            font: { size: 11, family: "'Inter'" },
            callback: function(v) { return '$' + v.toFixed(0); }
          }
        }
      },
      animation: { duration: 800 }
    }
  });
}

function openCompanyDetail(companyName) {
  const company = findCompanyByName(companyName);
  if (!company) return;

  previousView = currentView;
  renderCompanyDetail(company);

  // Switch to company detail view
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-company-detail').classList.add('active');

  // Deactivate all nav items
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    n.setAttribute('aria-current', 'false');
  });

  // Update header
  document.getElementById('headerTitle').textContent = company.name;
  document.getElementById('headerSubtitle').textContent = company.ticker + ' · Company Detail';

  currentView = 'company-detail';

  // Scroll to top
  document.getElementById('mainContent').scrollTop = 0;

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

function goBackFromCompanyDetail() {
  switchView(previousView || 'pipeline');
}


const CONNECTION_MAP_DATA = {"connections":[{"bm_person":"Milena Sullivan","bm_title":"Partner","bm_linkedin":"https://www.linkedin.com/in/milena-sullivan-007a423","company":"Novo Nordisk","company_ticker":"NVO","connection_type":"Former employee at Bristol-Myers Squibb (Associate Director, US Federal Policy, Oncology); Novo Nordisk mentioned in career activity","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"D Erica Pascual","bm_title":"Associate Principal","bm_linkedin":"https://www.linkedin.com/in/donnaeri","company":"Novo Nordisk","company_ticker":"NVO","connection_type":"Former client relationship manager: clients at Hall & Partners included Eli Lilly, Novo Nordisk, Merck, Pfizer, Janssen","relationship_category":"Client Relationship","connection_degree":""},{"bm_person":"Minsu Kim","bm_title":"Senior Consultant","bm_linkedin":"https://www.linkedin.com/in/minsu-kim-a8061a15b","company":"Novo Nordisk","company_ticker":"NVO","connection_type":"Former intern at Novo Nordisk (Market Access Strategic Execution, 2019); J&J mentioned in activities","relationship_category":"Former Intern/Research","connection_degree":""},{"bm_person":"Alejandro Zuniga","bm_title":"Former Manager at Blue Matter (now at Novo Nordisk)","bm_linkedin":"https://www.linkedin.com/in/alejandro-zuniga","company":"Novo Nordisk","company_ticker":"NVO","connection_type":"Moved FROM Blue Matter TO Novo Nordisk (February 2024); previously contractor at Gilead Sciences","relationship_category":"Alumni (BM to Pharma)","connection_degree":""},{"bm_person":"Nikhil Bhat","bm_title":"Partner","bm_linkedin":"https://www.linkedin.com/in/nikhiltb","company":"Gilead Sciences","company_ticker":"GILD","connection_type":"Former employee at Gilead Sciences (Associate Director, Business Analytics, 2013-2019)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Abhishek Khatri","bm_title":"Principal","bm_linkedin":"https://www.linkedin.com/in/abhishekkhatri","company":"Gilead Sciences","company_ticker":"GILD","connection_type":"Former employee at Gilead Sciences (12+ years, multiple Director roles in Commercial Operations/Strategic Finance)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Alejandro Zuniga","bm_title":"Former Manager at Blue Matter (now at Novo Nordisk)","bm_linkedin":"https://www.linkedin.com/in/alejandro-zuniga","company":"Gilead Sciences","company_ticker":"GILD","connection_type":"Moved FROM Blue Matter TO Novo Nordisk (February 2024); previously contractor at Gilead Sciences","relationship_category":"Alumni (BM to Pharma)","connection_degree":""},{"bm_person":"Emily Hua","bm_title":"President and Co-Founder","bm_linkedin":"https://www.linkedin.com/in/emily-hua-790a253","company":"GSK","company_ticker":"GSK","connection_type":"Former employee at GlaxoSmithKline (Research Analyst)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Pankaj Oza","bm_title":"Managing Partner","bm_linkedin":"https://www.linkedin.com/in/pankajoza","company":"GSK","company_ticker":"GSK","connection_type":"Former employee at GSK (UK Commercial) and Bristol-Myers Squibb (UK/European Marketing)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Kathryn Acheson","bm_title":"Manager","bm_linkedin":"https://www.linkedin.com/in/kathrynacheson","company":"GSK","company_ticker":"GSK","connection_type":"Former employee at GSK (Future Leaders Programme, Consumer Healthcare R&D)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"James Eddy","bm_title":"Former Blue Matter network contact (at AstraZeneca)","bm_linkedin":"https://www.linkedin.com/in/james-eddy-99212066","company":"GSK","company_ticker":"GSK","connection_type":"Current Director at AstraZeneca (Oncology R&D Strategy); appeared in BM professional network","relationship_category":"Professional Network","connection_degree":""},{"bm_person":"Tjarda Kasteel","bm_title":"Associate Principal (AIM, a Blue Matter company)","bm_linkedin":"https://www.linkedin.com/in/tjarda-kasteel-78aa0019","company":"BeOne Medicines BeiGene","company_ticker":"BGNE","connection_type":"Former employee at BeiGene (Senior Director, Country Manager Netherlands, 2021-2022)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Pavan Eckhart","bm_title":"Former Blue Matter network (now at Ionis)","bm_linkedin":"https://www.linkedin.com/in/pavan-eckhart-ba40a9a","company":"Regeneron Pharmaceuticals","company_ticker":"REGN","connection_type":"Former Regeneron Field Access Specialist; Blue Matter network contact","relationship_category":"Professional Network","connection_degree":""},{"bm_person":"Ellanor Whiteley","bm_title":"Associate Principal","bm_linkedin":"https://www.linkedin.com/in/ellanor-whiteley-ph-d-93539593","company":"AstraZeneca","company_ticker":"AZN","connection_type":"Former employee at AstraZeneca (Research Scientist, 2015-2019; PhD funded by AstraZeneca)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Ida Viken","bm_title":"Senior Consultant","bm_linkedin":"https://www.linkedin.com/in/ida-viken-09bb40157","company":"AstraZeneca","company_ticker":"AZN","connection_type":"Master thesis research at AstraZeneca (BioPharmaceutical R&D, Gothenburg)","relationship_category":"Former Intern/Research","connection_degree":""},{"bm_person":"James Eddy","bm_title":"Former Blue Matter network contact (at AstraZeneca)","bm_linkedin":"https://www.linkedin.com/in/james-eddy-99212066","company":"AstraZeneca","company_ticker":"AZN","connection_type":"Current Director at AstraZeneca (Oncology R&D Strategy); appeared in BM professional network","relationship_category":"Professional Network","connection_degree":""},{"bm_person":"Pankaj Oza","bm_title":"Managing Partner","bm_linkedin":"https://www.linkedin.com/in/pankajoza","company":"Bristol Myers Squibb","company_ticker":"BMY","connection_type":"Former employee at GSK (UK Commercial) and Bristol-Myers Squibb (UK/European Marketing)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Milena Sullivan","bm_title":"Partner","bm_linkedin":"https://www.linkedin.com/in/milena-sullivan-007a423","company":"Bristol Myers Squibb","company_ticker":"BMY","connection_type":"Former employee at Bristol-Myers Squibb (Associate Director, US Federal Policy, Oncology); Novo Nordisk mentioned in career activity","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Kristin Talsky","bm_title":"Associate Principal","bm_linkedin":"https://www.linkedin.com/in/kristintalsky","company":"Bristol Myers Squibb","company_ticker":"BMY","connection_type":"Former intern at Genentech (Portfolio Strategy); Blue Matter since 2015; BMS mentioned in profile activities","relationship_category":"Former Intern/Research","connection_degree":""},{"bm_person":"Matthew Thaxter","bm_title":"Senior Consultant","bm_linkedin":"https://www.linkedin.com/in/matthew-thaxter-bb536597","company":"Bristol Myers Squibb","company_ticker":"BMY","connection_type":"BMS appeared in published research; broad pharma coverage from GlobalData background","relationship_category":"Professional Network","connection_degree":""},{"bm_person":"D Erica Pascual","bm_title":"Associate Principal","bm_linkedin":"https://www.linkedin.com/in/donnaeri","company":"Eli Lilly","company_ticker":"LLY","connection_type":"Former client relationship manager: clients at Hall & Partners included Eli Lilly, Novo Nordisk, Merck, Pfizer, Janssen","relationship_category":"Client Relationship","connection_degree":""},{"bm_person":"Shaleen Multani","bm_title":"Consultant","bm_linkedin":"https://www.linkedin.com/in/dr-shaleen-multani-b5624947","company":"Eli Lilly","company_ticker":"LLY","connection_type":"Former employee at Eli Lilly (Portfolio Project Manager and Senior Associate Manager, 2020-2025)","relationship_category":"Former Employee","connection_degree":""},{"bm_person":"Shan Ahmad","bm_title":"Senior Consultant","bm_linkedin":"https://www.linkedin.com/in/shan-ahmad-617944a3","company":"Eli Lilly","company_ticker":"LLY","connection_type":"Eli Lilly graduate consultant (thesis project, 2017-2018); Amgen MBA internship","relationship_category":"Former Intern/Research","connection_degree":""},{"bm_person":"Minsu Kim","bm_title":"Senior Consultant","bm_linkedin":"https://www.linkedin.com/in/minsu-kim-a8061a15b","company":"Johnson & Johnson","company_ticker":"JNJ","connection_type":"Former intern at Novo Nordisk (Market Access Strategic Execution, 2019); J&J mentioned in activities","relationship_category":"Former Intern/Research","connection_degree":""}],"bm_people":{"Milena Sullivan":{"name":"Milena Sullivan","title":"Partner","linkedin":"https://www.linkedin.com/in/milena-sullivan-007a423","companies":["NVO","BMY"]},"D Erica Pascual":{"name":"D Erica Pascual","title":"Associate Principal","linkedin":"https://www.linkedin.com/in/donnaeri","companies":["NVO","LLY"]},"Minsu Kim":{"name":"Minsu Kim","title":"Senior Consultant","linkedin":"https://www.linkedin.com/in/minsu-kim-a8061a15b","companies":["NVO","JNJ"]},"Alejandro Zuniga":{"name":"Alejandro Zuniga","title":"Former Manager at Blue Matter (now at Novo Nordisk)","linkedin":"https://www.linkedin.com/in/alejandro-zuniga","companies":["NVO","GILD"]},"Nikhil Bhat":{"name":"Nikhil Bhat","title":"Partner","linkedin":"https://www.linkedin.com/in/nikhiltb","companies":["GILD"]},"Abhishek Khatri":{"name":"Abhishek Khatri","title":"Principal","linkedin":"https://www.linkedin.com/in/abhishekkhatri","companies":["GILD"]},"Emily Hua":{"name":"Emily Hua","title":"President and Co-Founder","linkedin":"https://www.linkedin.com/in/emily-hua-790a253","companies":["GSK"]},"Pankaj Oza":{"name":"Pankaj Oza","title":"Managing Partner","linkedin":"https://www.linkedin.com/in/pankajoza","companies":["GSK","BMY"]},"Kathryn Acheson":{"name":"Kathryn Acheson","title":"Manager","linkedin":"https://www.linkedin.com/in/kathrynacheson","companies":["GSK"]},"James Eddy":{"name":"James Eddy","title":"Former Blue Matter network contact (at AstraZeneca)","linkedin":"https://www.linkedin.com/in/james-eddy-99212066","companies":["GSK","AZN"]},"Tjarda Kasteel":{"name":"Tjarda Kasteel","title":"Associate Principal (AIM, a Blue Matter company)","linkedin":"https://www.linkedin.com/in/tjarda-kasteel-78aa0019","companies":["BGNE"]},"Pavan Eckhart":{"name":"Pavan Eckhart","title":"Former Blue Matter network (now at Ionis)","linkedin":"https://www.linkedin.com/in/pavan-eckhart-ba40a9a","companies":["REGN"]},"Ellanor Whiteley":{"name":"Ellanor Whiteley","title":"Associate Principal","linkedin":"https://www.linkedin.com/in/ellanor-whiteley-ph-d-93539593","companies":["AZN"]},"Ida Viken":{"name":"Ida Viken","title":"Senior Consultant","linkedin":"https://www.linkedin.com/in/ida-viken-09bb40157","companies":["AZN"]},"Kristin Talsky":{"name":"Kristin Talsky","title":"Associate Principal","linkedin":"https://www.linkedin.com/in/kristintalsky","companies":["BMY"]},"Matthew Thaxter":{"name":"Matthew Thaxter","title":"Senior Consultant","linkedin":"https://www.linkedin.com/in/matthew-thaxter-bb536597","companies":["BMY"]},"Shaleen Multani":{"name":"Shaleen Multani","title":"Consultant","linkedin":"https://www.linkedin.com/in/dr-shaleen-multani-b5624947","companies":["LLY"]},"Shan Ahmad":{"name":"Shan Ahmad","title":"Senior Consultant","linkedin":"https://www.linkedin.com/in/shan-ahmad-617944a3","companies":["LLY"]}},"companies":{"NVO":{"name":"Novo Nordisk","ticker":"NVO","leaders":{"ceo":{"name":"Maziar Mike Doustdar","title":"CEO","linkedin":"https://www.linkedin.com/in/doustdar"},"cfo":{"name":"Karsten Munk Knudsen","title":"CFO","linkedin":"https://www.linkedin.com/in/karstenmunkknudsen"},"cso":{"name":"Martin Holst Lange","title":"Chief Scientific Officer, EVP Research & Development","linkedin":"https://www.linkedin.com/in/martin-holst-lange-21662612"},"other":{"name":"David Moore","title":"EVP US Operations","linkedin":""}}},"GILD":{"name":"Gilead Sciences","ticker":"GILD","leaders":{"ceo":{"name":"Daniel O'Day Gilead Leadership","title":"CEO","linkedin":"https://www.linkedin.com/in/gilead-daniel-o-day"},"cfo":{"name":"Andrew Dickinson Gilead Leadership","title":"CFO","linkedin":"https://www.linkedin.com/in/andrew-dickinson-0547a190"},"cso":{"name":"Dietmar Berger","title":"Chief Medical Officer Gilead Leadership","linkedin":"https://www.linkedin.com/in/dietmar-berger-5927235"},"other":{"name":"Flavius Martin","title":"Executive Vice President, Research Gilead Leadership","linkedin":"https://www.linkedin.com/in/flaviusmartin"}}},"GSK":{"name":"GSK","ticker":"GSK","leaders":{"ceo":{"name":"Luke Miels","title":"CEO","linkedin":"https://www.linkedin.com/in/luke-miels"},"cfo":{"name":"Julie Brown","title":"CFO","linkedin":"https://www.linkedin.com/in/julie-brown-4492579"},"cso":{"name":"Tony Wood","title":"Chief Scientific Officer, Head of R&D","linkedin":"https://www.linkedin.com/in/dr-tony-wood"},"other":{"name":"Deborah Waterhouse","title":"CEO, ViiV Healthcare","linkedin":""}}},"BGNE":{"name":"BeOne Medicines BeiGene","ticker":"BGNE","leaders":{"ceo":{"name":"John V. Oyler","title":"CEO","linkedin":"https://www.linkedin.com/in/john-v-oyler-a811986"},"cfo":{"name":"Aaron Rosenberg","title":"CFO","linkedin":"https://www.linkedin.com/in/arosenberg22"},"cso":{"name":"Lai Wang","title":"President, Global Head of R&D","linkedin":""},"other":{"name":"Xiaodong Wang","title":"Co-Founder, Chairman of the Scientific Advisory Board","linkedin":""}}},"REGN":{"name":"Regeneron Pharmaceuticals","ticker":"REGN","leaders":{"ceo":{"name":"Leonard S. SchleiferRegeneron.com","title":"CEO","linkedin":"https://www.linkedin.com/in/leonard-schleifer-regeneron"},"cfo":{"name":"Christopher FenimoreRegeneron.com","title":"CFO","linkedin":"https://www.linkedin.com/in/christopher-fenimore-a0ab1b8"},"cso":{"name":"George D. Yancopoulos","title":"President and Chief Scientific OfficerRegeneron.com","linkedin":"https://www.linkedin.com/in/george-yancopoulos-452a4141"},"other":{"name":"Marion McCourt","title":"Executive Vice President, CommercialRegeneron.com","linkedin":"https://www.linkedin.com/in/marion-mccourt-280b28b3"}}},"AZN":{"name":"AstraZeneca","ticker":"AZN","leaders":{"ceo":{"name":"Pascal Soriot","title":"CEO","linkedin":""},"cfo":{"name":"Aradhana Sarin","title":"CFO","linkedin":"https://www.linkedin.com/in/aradhanasarin"},"cso":{"name":"Susan Galbraith","title":"EVP Oncology R&D","linkedin":"https://www.linkedin.com/in/susan-galbraith-584a195"},"other":{"name":"Pam Cheng","title":"EVP Global Operations & IT","linkedin":""}}},"BMY":{"name":"Bristol Myers Squibb","ticker":"BMY","leaders":{"ceo":{"name":"Christopher Boerner, PhD","title":"CEO","linkedin":""},"cfo":{"name":"David Elkins","title":"CFO","linkedin":"https://www.linkedin.com/in/david-elkins-b8981377"},"cso":{"name":"Robert Plenge, MD, PhD","title":"Executive Vice President, Chief Research Officer","linkedin":"http://www.linkedin.com/in/robert-plenge-86560535"},"other":{"name":"Cristian Massacesi, MD","title":"Executive Vice President, Chief Medical Officer and Head of Development","linkedin":"https://www.linkedin.com/in/cristian-massacesi"}}},"LLY":{"name":"Eli Lilly","ticker":"LLY","leaders":{"ceo":{"name":"David A. Ricks","title":"CEO","linkedin":"https://www.linkedin.com/in/davearicks"},"cfo":{"name":"Lucas Montarce","title":"CFO","linkedin":"https://www.linkedin.com/in/lucas-montarce"},"cso":{"name":"Daniel Skovronsky","title":"Chief Scientific and Product Officer and President, Lilly Research Laboratories","linkedin":"https://www.linkedin.com/in/danielskovronsky"},"other":{"name":"Jacob Van Naarden","title":"Executive Vice President and President, Lilly Oncology","linkedin":""}}},"JNJ":{"name":"Johnson & Johnson","ticker":"JNJ","leaders":{"ceo":{"name":"Joaquin DuatoJ&J Leadership","title":"CEO","linkedin":"https://www.linkedin.com/in/joaquinduato"},"cfo":{"name":"Joseph J. WolkJ&J.com","title":"CFO","linkedin":"https://www.linkedin.com/in/josephwolk"},"cso":{"name":"John C. Reed","title":"Executive Vice President, Innovative Medicine R&DJ&J.com","linkedin":"https://www.linkedin.com/in/johncreedjnj"},"other":{"name":"Vanessa Broadhurst","title":"Executive Vice President, Global Corporate AffairsJ&J Leadership","linkedin":"https://www.linkedin.com/in/vanessabroadhurst"}}}},"relationship_types":["Alumni (BM to Pharma)","Former Employee","Client Relationship","Professional Network","Former Intern/Research"],"stats":{"total_connections":24,"unique_bm_people":18,"companies_connected":9}};



// ===== CONNECTION MAP VIEW =====
const CM_REL_COLORS = {
  'Former Employee': { color: 'var(--color-primary)', dash: '', width: 2.5 },
  'Former Intern/Research': { color: 'var(--color-primary)', dash: '6,3', width: 1.5 },
  'Client Relationship': { color: 'var(--color-warning)', dash: '', width: 2 },
  'Alumni (BM to Pharma)': { color: 'var(--color-success)', dash: '', width: 2.5 },
  'Professional Network': { color: 'var(--color-text-faint)', dash: '3,3', width: 1 }
};

let cmState = {
  filterCompany: '',
  filterPerson: '',
  activeRelTypes: new Set(CONNECTION_MAP_DATA.relationship_types),
  nodes: [],
  edges: [],
  dragNode: null,
  hoveredNode: null
};

function renderConnectionMap() {
  renderCmKpis();
  renderCmFilters();
  renderCmLegend();
  buildCmGraph();
}

function renderCmKpis() {
  const row = document.getElementById('cmKpiRow');
  const multiConnectors = Object.values(CONNECTION_MAP_DATA.bm_people).filter(p => p.companies.length >= 2).length;
  row.innerHTML = `
    <div class="kpi-card"><div class="kpi-label">Total Connections</div><div class="kpi-value">${CONNECTION_MAP_DATA.stats.total_connections}</div></div>
    <div class="kpi-card"><div class="kpi-label">BM People Connected</div><div class="kpi-value">${CONNECTION_MAP_DATA.stats.unique_bm_people}</div></div>
    <div class="kpi-card"><div class="kpi-label">Companies Reached</div><div class="kpi-value">${CONNECTION_MAP_DATA.stats.companies_connected}</div></div>
    <div class="kpi-card"><div class="kpi-label">Multi-Company Connectors</div><div class="kpi-value">${multiConnectors}</div></div>
  `;
}

function renderCmFilters() {
  const container = document.getElementById('cmFilters');
  const companies = Object.keys(CONNECTION_MAP_DATA.companies);
  const people = Object.keys(CONNECTION_MAP_DATA.bm_people);

  const companyOpts = companies.map(t => `<option value="${t}">${CONNECTION_MAP_DATA.companies[t].name} (${t})</option>`).join('');
  const personOpts = people.map(n => `<option value="${n}">${n}</option>`).join('');

  const relPills = CONNECTION_MAP_DATA.relationship_types.map(rt => {
    const info = CM_REL_COLORS[rt] || { color: 'var(--color-text-faint)' };
    const active = cmState.activeRelTypes.has(rt) ? 'active' : '';
    return `<button class="cm-pill ${active}" data-rel="${rt}"><span class="cm-pill-dot" style="background:${info.color};"></span>${rt}</button>`;
  }).join('');

  container.innerHTML = `
    <select class="filter-select" id="cmCompanyFilter"><option value="">All Companies</option>${companyOpts}</select>
    <select class="filter-select" id="cmPersonFilter"><option value="">All People</option>${personOpts}</select>
    <div class="cm-filter-group">${relPills}</div>
    <button class="cm-reset-btn" id="cmResetBtn">Reset</button>
  `;

  document.getElementById('cmCompanyFilter').value = cmState.filterCompany;
  document.getElementById('cmPersonFilter').value = cmState.filterPerson;

  document.getElementById('cmCompanyFilter').addEventListener('change', function() {
    cmState.filterCompany = this.value;
    buildCmGraph();
  });
  document.getElementById('cmPersonFilter').addEventListener('change', function() {
    cmState.filterPerson = this.value;
    buildCmGraph();
  });

  container.querySelectorAll('.cm-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const rt = btn.dataset.rel;
      if (cmState.activeRelTypes.has(rt)) {
        cmState.activeRelTypes.delete(rt);
      } else {
        cmState.activeRelTypes.add(rt);
      }
      btn.classList.toggle('active');
      buildCmGraph();
    });
  });

  document.getElementById('cmResetBtn').addEventListener('click', () => {
    cmState.filterCompany = '';
    cmState.filterPerson = '';
    cmState.activeRelTypes = new Set(CONNECTION_MAP_DATA.relationship_types);
    renderCmFilters();
    buildCmGraph();
  });
}

function renderCmLegend() {
  const legend = document.getElementById('cmLegend');
  const relItems = CONNECTION_MAP_DATA.relationship_types.map(rt => {
    const info = CM_REL_COLORS[rt] || { color: '#888', dash: '', width: 2 };
    const dashStyle = info.dash ? 'border-top-style: dashed;' : '';
    return `<div class="cm-legend-item"><span class="cm-legend-line" style="background:${info.color}; height:${info.width}px; ${dashStyle}"></span>${rt}</div>`;
  }).join('');

  legend.innerHTML = `
    <div class="cm-legend-title">Relationship Types</div>
    ${relItems}
    <div class="cm-legend-section">
      <div class="cm-legend-title">Node Types</div>
      <div class="cm-legend-item"><span class="cm-legend-node" style="background:var(--color-primary); border-radius:50%;"></span>BM Employee</div>
      <div class="cm-legend-item"><span class="cm-legend-node" style="background:var(--chart-1); border-radius:3px;"></span>Pharma Company</div>
      <div class="cm-legend-item"><span class="cm-legend-node" style="background:var(--color-surface-offset-2); border:1px solid var(--color-border); border-radius:2px;"></span>Company Leader</div>
    </div>
  `;
}

function buildCmGraph() {
  const svg = document.getElementById('cmSvg');
  const wrapper = document.getElementById('cmGraphWrapper');
  const W = wrapper.clientWidth || 900;
  const H = wrapper.clientHeight || 560;

  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = '';

  // Create defs for glow filter
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  `;
  svg.appendChild(defs);

  // Filter connections
  let connections = CONNECTION_MAP_DATA.connections.filter(c => cmState.activeRelTypes.has(c.relationship_category));
  if (cmState.filterCompany) {
    connections = connections.filter(c => c.company_ticker === cmState.filterCompany);
  }
  if (cmState.filterPerson) {
    connections = connections.filter(c => c.bm_person === cmState.filterPerson);
  }

  // Build nodes
  const bmSet = new Set();
  const compSet = new Set();
  connections.forEach(c => {
    bmSet.add(c.bm_person);
    compSet.add(c.company_ticker);
  });

  const chartColors = getChartColors().chart;
  const nodes = [];
  const nodeMap = {};
  let idx = 0;

  // Company nodes - arranged in a circle on the right half
  const compArr = [...compSet];
  const compRadius = Math.min(W, H) * 0.35;
  const compCx = W * 0.6;
  const compCy = H * 0.5;
  compArr.forEach((ticker, i) => {
    const angle = (2 * Math.PI * i / compArr.length) - Math.PI / 2;
    const x = compCx + compRadius * Math.cos(angle);
    const y = compCy + compRadius * Math.sin(angle);
    const comp = CONNECTION_MAP_DATA.companies[ticker];
    const node = {
      id: 'comp_' + ticker,
      type: 'company',
      label: comp ? comp.name : ticker,
      ticker: ticker,
      x: x,
      y: y,
      color: chartColors[idx % chartColors.length],
      data: comp
    };
    nodes.push(node);
    nodeMap['comp_' + ticker] = node;
    idx++;
  });

  // BM people nodes - arranged on the left
  const bmArr = [...bmSet];
  const bmSpacing = Math.min(30, (H - 80) / Math.max(bmArr.length, 1));
  const bmStartY = (H - bmSpacing * (bmArr.length - 1)) / 2;
  bmArr.forEach((name, i) => {
    const x = W * 0.15 + (i % 2) * 40;
    const y = bmStartY + i * bmSpacing;
    const person = CONNECTION_MAP_DATA.bm_people[name];
    const node = {
      id: 'bm_' + name,
      type: 'bm',
      label: name,
      x: x,
      y: y,
      color: 'var(--color-primary)',
      data: person
    };
    nodes.push(node);
    nodeMap['bm_' + name] = node;
  });

  // Run simple force simulation
  runForceSimulation(nodes, connections, nodeMap, W, H);

  // Build edges
  const edgeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  edgeGroup.classList.add('cm-edges');
  connections.forEach(c => {
    const from = nodeMap['bm_' + c.bm_person];
    const to = nodeMap['comp_' + c.company_ticker];
    if (!from || !to) return;
    const info = CM_REL_COLORS[c.relationship_category] || { color: '#888', dash: '', width: 1 };
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    line.setAttribute('stroke', info.color);
    line.setAttribute('stroke-width', info.width);
    line.setAttribute('opacity', '0.6');
    if (info.dash) line.setAttribute('stroke-dasharray', info.dash);
    line.dataset.from = from.id;
    line.dataset.to = to.id;
    edgeGroup.appendChild(line);
  });
  svg.appendChild(edgeGroup);

  // Build node groups
  const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  nodeGroup.classList.add('cm-nodes');

  nodes.forEach(node => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${node.x}, ${node.y})`);
    g.dataset.nodeId = node.id;
    g.style.cursor = 'pointer';

    if (node.type === 'company') {
      // Rounded rect for companies
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', -30);
      rect.setAttribute('y', -16);
      rect.setAttribute('width', 60);
      rect.setAttribute('height', 32);
      rect.setAttribute('rx', 6);
      rect.setAttribute('fill', node.color);
      rect.setAttribute('opacity', '0.9');
      g.appendChild(rect);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dy', '0.35em');
      text.setAttribute('fill', '#fff');
      text.setAttribute('font-size', '11');
      text.setAttribute('font-weight', '700');
      text.textContent = node.ticker;
      g.appendChild(text);

      // Label below
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('dy', '0');
      label.setAttribute('y', '24');
      label.setAttribute('fill', 'var(--color-text-muted)');
      label.setAttribute('font-size', '9');
      label.setAttribute('font-weight', '500');
      label.textContent = node.label.length > 18 ? node.label.substring(0, 16) + '\u2026' : node.label;
      g.appendChild(label);
    } else {
      // Circle for BM people
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', 8);
      circle.setAttribute('fill', node.color);
      circle.setAttribute('opacity', '0.85');
      g.appendChild(circle);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', 12);
      text.setAttribute('dy', '0.35em');
      text.setAttribute('fill', 'var(--color-text-muted)');
      text.setAttribute('font-size', '9');
      text.setAttribute('font-weight', '500');
      const shortName = node.label.length > 16 ? node.label.split(' ')[0] + ' ' + (node.label.split(' ')[1] || '').charAt(0) + '.' : node.label;
      text.textContent = shortName;
      g.appendChild(text);
    }

    nodeGroup.appendChild(g);
  });
  svg.appendChild(nodeGroup);

  // Store for interaction
  cmState.nodes = nodes;
  cmState.edges = connections;

  // Wire interactions
  initCmInteractions(svg, nodes, nodeMap, connections, W, H);
}

function runForceSimulation(nodes, connections, nodeMap, W, H) {
  // Simple force-directed layout: repulsion + attraction + bounds
  const iterations = 80;
  const repulsion = 2000;
  const attraction = 0.005;
  const damping = 0.9;

  // Initialize velocities
  nodes.forEach(n => { n.vx = 0; n.vy = 0; });

  for (let iter = 0; iter < iterations; iter++) {
    // Repulsion between all nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const minDist = nodes[i].type === nodes[j].type ? 50 : 30;
        if (dist < minDist * 3) {
          const force = repulsion / (dist * dist);
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          nodes[i].vx += fx;
          nodes[i].vy += fy;
          nodes[j].vx -= fx;
          nodes[j].vy -= fy;
        }
      }
    }

    // Attraction along edges
    connections.forEach(c => {
      const from = nodeMap['bm_' + c.bm_person];
      const to = nodeMap['comp_' + c.company_ticker];
      if (!from || !to) return;
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const idealDist = 180;
      const force = (dist - idealDist) * attraction;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      from.vx += fx;
      from.vy += fy;
      to.vx -= fx;
      to.vy -= fy;
    });

    // Gravity toward center sectors
    nodes.forEach(n => {
      const targetX = n.type === 'bm' ? W * 0.25 : W * 0.7;
      const targetY = H * 0.5;
      n.vx += (targetX - n.x) * 0.002;
      n.vy += (targetY - n.y) * 0.002;
    });

    // Apply velocities
    nodes.forEach(n => {
      n.vx *= damping;
      n.vy *= damping;
      n.x += n.vx;
      n.y += n.vy;
      // Bounds
      n.x = Math.max(40, Math.min(W - 40, n.x));
      n.y = Math.max(30, Math.min(H - 30, n.y));
    });
  }
}

function initCmInteractions(svg, nodes, nodeMap, connections, W, H) {
  const tooltip = document.getElementById('cmTooltip');
  let dragTarget = null;
  let dragOffset = { x: 0, y: 0 };

  function getSvgPoint(e) {
    const rect = svg.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  function findNodeAt(px, py) {
    for (const n of nodes) {
      const dx = px - n.x;
      const dy = py - n.y;
      const hitRadius = n.type === 'company' ? 35 : 15;
      if (dx * dx + dy * dy < hitRadius * hitRadius) return n;
    }
    return null;
  }

  function highlightNode(node) {
    // Dim all, brighten connected
    const connectedIds = new Set();
    connectedIds.add(node.id);
    connections.forEach(c => {
      const fromId = 'bm_' + c.bm_person;
      const toId = 'comp_' + c.company_ticker;
      if (fromId === node.id || toId === node.id) {
        connectedIds.add(fromId);
        connectedIds.add(toId);
      }
    });

    svg.querySelectorAll('.cm-nodes g').forEach(g => {
      g.style.opacity = connectedIds.has(g.dataset.nodeId) ? '1' : '0.15';
    });
    svg.querySelectorAll('.cm-edges line').forEach(line => {
      const isConn = connectedIds.has(line.dataset.from) && connectedIds.has(line.dataset.to);
      line.style.opacity = isConn ? '0.9' : '0.05';
      if (isConn) line.setAttribute('stroke-width', parseFloat(line.getAttribute('stroke-width')) + 1);
    });
  }

  function clearHighlight() {
    svg.querySelectorAll('.cm-nodes g').forEach(g => { g.style.opacity = '1'; });
    svg.querySelectorAll('.cm-edges line').forEach(line => {
      const cat = connections.find(c => 'bm_' + c.bm_person === line.dataset.from && 'comp_' + c.company_ticker === line.dataset.to);
      const info = cat ? (CM_REL_COLORS[cat.relationship_category] || { width: 1 }) : { width: 1 };
      line.style.opacity = '0.6';
      line.setAttribute('stroke-width', info.width);
    });
  }

  function showTooltip(node, e) {
    let html = '';
    if (node.type === 'bm') {
      const p = node.data || {};
      const linkedComps = (p.companies || []).map(t => {
        const co = CONNECTION_MAP_DATA.companies[t];
        return co ? co.name : t;
      }).join(', ');
      html = `
        <div class="cm-tooltip-name">${node.label}</div>
        <div class="cm-tooltip-title">${p.title || ''}</div>
        <div class="cm-tooltip-detail">Connected to: ${linkedComps}</div>
        ${p.linkedin ? '<a class="cm-tooltip-link" href="' + p.linkedin + '" target="_blank" rel="noopener noreferrer">' + linkedinSvg() + ' LinkedIn Profile</a>' : ''}
      `;
    } else {
      const comp = node.data || {};
      const connCount = connections.filter(c => c.company_ticker === node.ticker).length;
      html = `
        <div class="cm-tooltip-name">${node.label}</div>
        <div class="cm-tooltip-title">${node.ticker}</div>
        <div class="cm-tooltip-detail">${connCount} Blue Matter connection${connCount !== 1 ? 's' : ''}</div>
      `;
      if (comp.leaders) {
        const ceo = comp.leaders.ceo;
        if (ceo && ceo.name) {
          html += `<div class="cm-tooltip-detail" style="border-top:1px solid var(--color-divider);padding-top:4px;margin-top:4px;">CEO: ${ceo.name}</div>`;
        }
      }
    }
    tooltip.innerHTML = html;
    tooltip.classList.add('visible');
    const tx = Math.min(e.clientX + 12, window.innerWidth - 340);
    const ty = Math.min(e.clientY + 12, window.innerHeight - 200);
    tooltip.style.left = tx + 'px';
    tooltip.style.top = ty + 'px';
    tooltip.style.pointerEvents = 'auto';
  }

  function hideTooltip() {
    tooltip.classList.remove('visible');
    tooltip.style.pointerEvents = 'none';
  }

  svg.addEventListener('mousemove', (e) => {
    if (dragTarget) {
      const pt = getSvgPoint(e);
      dragTarget.x = pt.x;
      dragTarget.y = pt.y;
      updateNodePosition(dragTarget);
      updateEdges();
      return;
    }
    const pt = getSvgPoint(e);
    const node = findNodeAt(pt.x, pt.y);
    if (node && node !== cmState.hoveredNode) {
      cmState.hoveredNode = node;
      highlightNode(node);
      showTooltip(node, e);
    } else if (!node && cmState.hoveredNode) {
      cmState.hoveredNode = null;
      clearHighlight();
      hideTooltip();
    } else if (node) {
      // Update tooltip position
      const tx = Math.min(e.clientX + 12, window.innerWidth - 340);
      const ty = Math.min(e.clientY + 12, window.innerHeight - 200);
      tooltip.style.left = tx + 'px';
      tooltip.style.top = ty + 'px';
    }
  });

  svg.addEventListener('mousedown', (e) => {
    const pt = getSvgPoint(e);
    const node = findNodeAt(pt.x, pt.y);
    if (node) {
      dragTarget = node;
      dragOffset.x = pt.x - node.x;
      dragOffset.y = pt.y - node.y;
      svg.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });

  svg.addEventListener('mouseup', () => {
    dragTarget = null;
    svg.style.cursor = 'grab';
  });

  svg.addEventListener('mouseleave', () => {
    dragTarget = null;
    svg.style.cursor = 'grab';
    cmState.hoveredNode = null;
    clearHighlight();
    hideTooltip();
  });

  function updateNodePosition(node) {
    const g = svg.querySelector(`g[data-node-id="${node.id}"]`);
    if (g) g.setAttribute('transform', `translate(${node.x}, ${node.y})`);
  }

  function updateEdges() {
    svg.querySelectorAll('.cm-edges line').forEach(line => {
      const fromNode = nodes.find(n => n.id === line.dataset.from);
      const toNode = nodes.find(n => n.id === line.dataset.to);
      if (fromNode && toNode) {
        line.setAttribute('x1', fromNode.x);
        line.setAttribute('y1', fromNode.y);
        line.setAttribute('x2', toNode.x);
        line.setAttribute('y2', toNode.y);
      }
    });
  }
}


// ===== COMPANY DEEP DIVES VIEW =====
let cddSort = 'name';
let cddSearch = '';

function renderCompanyDeepDives() {
  renderCddToolbar();
  renderCddGrid();
}

function renderCddToolbar() {
  const toolbar = document.getElementById('cddToolbar');
  toolbar.innerHTML = `
    <input type="text" class="filter-input" id="cddSearch" placeholder="Search companies..." value="${cddSearch}">
    <select class="filter-select" id="cddSort">
      <option value="name"${cddSort === 'name' ? ' selected' : ''}>Sort: Name</option>
      <option value="marketCap"${cddSort === 'marketCap' ? ' selected' : ''}>Sort: Market Cap</option>
      <option value="change"${cddSort === 'change' ? ' selected' : ''}>Sort: Stock Change %</option>
      <option value="pipeline"${cddSort === 'pipeline' ? ' selected' : ''}>Sort: Pipeline Count</option>
    </select>
  `;

  document.getElementById('cddSearch').addEventListener('input', function() {
    cddSearch = this.value;
    renderCddGrid();
  });
  document.getElementById('cddSort').addEventListener('change', function() {
    cddSort = this.value;
    renderCddGrid();
  });
}

function renderCddGrid() {
  const grid = document.getElementById('cddGrid');
  let companies = [...DRILL_DOWN_DATA];

  // Filter by search
  if (cddSearch) {
    const q = cddSearch.toLowerCase();
    companies = companies.filter(c => c.name.toLowerCase().includes(q) || c.ticker.toLowerCase().includes(q));
  }

  // Sort
  companies.sort((a, b) => {
    if (cddSort === 'name') return a.name.localeCompare(b.name);
    if (cddSort === 'marketCap') return ((b.stock && b.stock.marketCap) || 0) - ((a.stock && a.stock.marketCap) || 0);
    if (cddSort === 'change') return ((b.stock && b.stock.changePercent) || 0) - ((a.stock && a.stock.changePercent) || 0);
    if (cddSort === 'pipeline') return (b.pipeline_drugs || []).length - (a.pipeline_drugs || []).length;
    return 0;
  });

  grid.innerHTML = companies.map(c => {
    const stock = c.stock || {};
    const price = formatPrice(stock.price);
    const change = stock.changePercent || 0;
    const changeDir = change > 0 ? 'up' : change < 0 ? 'down' : 'flat';
    const arrow = change > 0 ? '+' : '';
    const mCap = formatMarketCap(stock.marketCap);
    const pipelineCount = (c.pipeline_drugs || []).length;
    const bmCount = (c.blue_matter_connections || []).length;
    const badgeClass = change > 0 ? 'badge-success' : change < 0 ? 'badge-error' : 'badge-primary';

    return `<div class="cdd-card">
      <div class="cdd-card-header">
        <div>
          <div class="cdd-card-name">${c.name}</div>
          <span class="badge badge-primary">${c.ticker}</span>
        </div>
        <span class="badge ${badgeClass}">${arrow}${change.toFixed(2)}%</span>
      </div>
      <div class="cdd-card-meta">
        <div class="cdd-card-meta-item"><span class="cdd-card-meta-label">Price</span><span class="cdd-card-meta-value">${price}</span></div>
        <div class="cdd-card-meta-item"><span class="cdd-card-meta-label">Market Cap</span><span class="cdd-card-meta-value">${mCap}</span></div>
        <div class="cdd-card-meta-item"><span class="cdd-card-meta-label">Pipeline</span><span class="cdd-card-meta-value">${pipelineCount} drug${pipelineCount !== 1 ? 's' : ''}</span></div>
        ${bmCount > 0 ? '<div class="cdd-card-meta-item"><span class="cdd-card-meta-label">BM Connections</span><span class="cdd-card-meta-value"><span class="badge badge-primary">' + bmCount + '</span></span></div>' : ''}
      </div>
      <button class="cdd-view-btn" data-company="${c.name}"><i data-lucide="external-link" style="width:14px;height:14px;"></i> View Details</button>
    </div>`;
  }).join('');

  // Wire view buttons
  grid.querySelectorAll('.cdd-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openCompanyDetail(btn.dataset.company);
    });
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
}


// ===== VIEW MANAGEMENT =====
const viewTitles = {
  'fda-approvals': { title: 'FDA Approvals', subtitle: 'Novel Drug Approvals 2020–2026 YTD' },
  'pipeline': { title: 'Pipeline Tracker', subtitle: 'Phase 2/3 Drug Candidates' },
  'sentiment': { title: 'Market Sentiment', subtitle: 'Industry Outlook & Policy Analysis' },
  'stakeholders': { title: 'Key Stakeholders', subtitle: 'FDA, Pharma & Biotech Leaders' },
  'connection-map': { title: 'Connection Map', subtitle: 'Blue Matter ↔ Pharma Network' },
  'company-deep-dives': { title: 'Company Deep Dives', subtitle: 'All Tracked Companies' }
};

let currentView = 'fda-approvals';
let viewsInitialized = {};

function switchView(viewId) {
  if (currentView === viewId) return;
  currentView = viewId;

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewId}`).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.view === viewId);
    n.setAttribute('aria-current', n.dataset.view === viewId ? 'page' : 'false');
  });

  const info = viewTitles[viewId];
  document.getElementById('headerTitle').textContent = info.title;
  document.getElementById('headerSubtitle').textContent = info.subtitle;

  // Scroll to top
  document.getElementById('mainContent').scrollTop = 0;

  initView(viewId);

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

function initView(viewId) {
  if (viewsInitialized[viewId]) {
    // Re-animate KPI values
    const row = document.getElementById(viewId === 'fda-approvals' ? 'fdaKpiRow' : viewId === 'pipeline' ? 'pipelineKpiRow' : '');
    if (row) {
      row.querySelectorAll('[data-animate]').forEach(el => {
        animateValue(el, 0, parseInt(el.dataset.animate), 800);
      });
    }
    return;
  }

  viewsInitialized[viewId] = true;

  if (viewId === 'fda-approvals') {
    renderFdaKPIs();
    renderFdaCharts();
    populateFdaFilters();
    renderFdaTable();
    initFdaSortHandlers();
    document.getElementById('fdaSearch').addEventListener('input', renderFdaTable);
    document.getElementById('fdaYearFilter').addEventListener('change', renderFdaTable);
    document.getElementById('fdaAreaFilter').addEventListener('change', renderFdaTable);
    document.getElementById('fdaDesignFilter').addEventListener('change', renderFdaTable);
  } else if (viewId === 'pipeline') {
    renderPipelineYearFilter();
    renderPipelineKPIs();
    populatePipelineFilters();
    renderPipelineTimeline();
    renderPipelineCards();
    document.getElementById('pipelineAreaFilter').addEventListener('change', renderPipelineCards);
    document.getElementById('pipelinePhaseFilter').addEventListener('change', renderPipelineCards);
    document.getElementById('pipelineSentimentFilter').addEventListener('change', renderPipelineCards);
    // Event delegation for company name clicks
    document.getElementById('pipelineGrid').addEventListener('click', (e) => {
      const link = e.target.closest('.pipeline-company-link');
      if (link) {
        e.preventDefault();
        openCompanyDetail(link.dataset.company);
      }
    });
  } else if (viewId === 'sentiment') {
    renderSentimentSummary();
    renderSentimentCharts();
    renderPolicySection();
  } else if (viewId === 'stakeholders') {
    renderStakeholderFilters();
    renderStakeholderCards();
  } else if (viewId === 'connection-map') {
    renderConnectionMap();
  } else if (viewId === 'company-deep-dives') {
    renderCompanyDeepDives();
  }
}


// ===== CHAT PANEL =====
let chatOpen = false;
let chatFirstOpen = true;
let chatStreaming = false;
let currentAiMsgEl = null;
let currentAiRawText = '';

function getChatContext() {
  if (currentView === 'company-detail') {
    const name = document.getElementById('cdCompanyName').textContent;
    const ticker = document.getElementById('cdTickerBadge').textContent;
    if (name && ticker) {
      return '[User is viewing: ' + name + ' (' + ticker + ')]';
    }
  }
  return '';
}

function renderMarkdown(text) {
  // Code blocks first (```...```)
  let html = text.replace(/```([\s\S]*?)```/g, function(match, code) {
    return '<pre><code>' + code.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim() + '</code></pre>';
  });
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/(?<![*])\*([^*]+)\*(?![*])/g, '<em>$1</em>');
  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, function(match) {
    return '<ul>' + match + '</ul>';
  });
  // Ordered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  // Paragraphs
  html = html.split('\n\n').map(function(block) {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('<pre>') || block.startsWith('<ul>') || block.startsWith('<ol>') || block.startsWith('<li>')) return block;
    return '<p>' + block + '</p>';
  }).join('');
  // Single newlines within paragraphs
  html = html.replace(/<p>(.*?)\n(.*?)<\/p>/g, '<p>$1<br>$2</p>');
  return html;
}

function addChatMessage(role, content) {
  var messagesEl = document.getElementById('chatMessages');
  var msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg ' + (role === 'user' ? 'chat-msg-user' : 'chat-msg-ai');
  if (role === 'user') {
    msgDiv.textContent = content;
  } else {
    msgDiv.innerHTML = renderMarkdown(content);
  }
  messagesEl.appendChild(msgDiv);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return msgDiv;
}

function showTypingIndicator() {
  var messagesEl = document.getElementById('chatMessages');
  var typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.id = 'chatTypingIndicator';
  typing.innerHTML = '<span class="chat-typing-dot"></span><span class="chat-typing-dot"></span><span class="chat-typing-dot"></span>';
  messagesEl.appendChild(typing);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function removeTypingIndicator() {
  var el = document.getElementById('chatTypingIndicator');
  if (el) el.remove();
}

function setChatInputEnabled(enabled) {
  var input = document.getElementById('chatInput');
  var btn = document.getElementById('chatSendBtn');
  input.disabled = !enabled;
  btn.disabled = !enabled;
}

// ===== DATA EDIT HANDLING =====
let pendingDataEdits = [];

function applyDataEdit(event) {
  if (event.action === 'add_company') {
    var companyData = event.company_data;
    // Ensure stock.history exists
    if (companyData.stock && !companyData.stock.history) {
      companyData.stock.history = [];
    }
    // Check if already exists
    var idx = DRILL_DOWN_DATA.findIndex(function(c) { return c.ticker === companyData.ticker; });
    if (idx >= 0) {
      DRILL_DOWN_DATA[idx] = companyData;
    } else {
      DRILL_DOWN_DATA.push(companyData);
    }
    // Force re-render of deep dives view
    viewsInitialized['company-deep-dives'] = false;
    if (currentView === 'company-deep-dives') {
      initView('company-deep-dives');
    }
    showDataEditToast('Added ' + companyData.name + ' (' + companyData.ticker + ') to dashboard');
  } else if (event.action === 'update_field') {
    var company = DRILL_DOWN_DATA.find(function(c) { return c.ticker === event.ticker; });
    if (company) {
      setNestedField(company, event.field, event.new_value);
      // Re-render if viewing this company
      if (currentView === 'company-detail') {
        var activeTicker = document.getElementById('cdTickerBadge').textContent;
        if (activeTicker === event.ticker) {
          renderCompanyDetail(company);
        }
      }
      showDataEditToast('Updated ' + event.field + ' for ' + event.ticker);
    }
  } else if (event.action === 'add_pipeline_drug') {
    var drugTarget = DRILL_DOWN_DATA.find(function(c) { return c.ticker === event.ticker; });
    if (drugTarget) {
      if (!drugTarget.pipeline_drugs) drugTarget.pipeline_drugs = [];
      drugTarget.pipeline_drugs.push(event.drug);
      showDataEditToast('Added pipeline drug to ' + event.ticker);
    }
  } else if (event.action === 'add_connection') {
    var connTarget = DRILL_DOWN_DATA.find(function(c) { return c.ticker === event.ticker; });
    if (connTarget) {
      if (!connTarget.blue_matter_connections) connTarget.blue_matter_connections = [];
      connTarget.blue_matter_connections.push(event.connection);
      showDataEditToast('Added BM connection to ' + event.ticker);
    }
  }
}

function setNestedField(obj, path, value) {
  var parts = path.split('.');
  var current = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

function showDataEditToast(message) {
  var toast = document.createElement('div');
  toast.className = 'data-edit-toast';
  toast.innerHTML = '<i data-lucide="check-circle" style="width:16px;height:16px;"></i> ' + message;
  document.body.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons({nodes: [toast]});
  requestAnimationFrame(function() {
    toast.classList.add('visible');
  });
  setTimeout(function() {
    toast.classList.remove('visible');
    setTimeout(function() { toast.remove(); }, 300);
  }, 3000);
}

// ===== LOAD LIVE COMPANY DATA FROM DATABRICKS =====
// When the backend is running, this function fetches all 50 company profiles
// from the Databricks database and replaces the embedded data below.
// If the backend is not available (e.g. during local development without the
// server running), it silently falls back to the embedded DRILL_DOWN_DATA.
async function loadCompaniesFromAPI() {
  try {
    var resp = await fetch(API + '/api/companies');
    if (!resp.ok) return;                          // server error — keep embedded data
    var companies = await resp.json();
    if (!Array.isArray(companies) || companies.length === 0) return;  // empty response

    // Replace DRILL_DOWN_DATA with the live Databricks records.
    // We merge rather than replace so any companies that exist in the embedded
    // data but are not yet in Databricks (skeleton entries) are still visible.
    companies.forEach(function(company) {
      if (!company.stock) company.stock = {};
      if (!company.stock.history) company.stock.history = [];
      var idx = DRILL_DOWN_DATA.findIndex(function(c) { return c.ticker === company.ticker; });
      if (idx >= 0) {
        DRILL_DOWN_DATA[idx] = company;            // update existing entry with live data
      } else {
        DRILL_DOWN_DATA.push(company);             // add new entry not in embedded set
      }
    });
  } catch (e) {
    // silently fall back to embedded data — app still works without backend
  }
}

async function loadUserAdditions() {
  try {
    var resp = await fetch(API + '/api/additions');
    if (!resp.ok) return;
    var additions = await resp.json();
    additions.forEach(function(add) {
      var companyData = add.company_data;
      if (companyData.stock && !companyData.stock.history) {
        companyData.stock.history = [];
      }
      var idx = DRILL_DOWN_DATA.findIndex(function(c) { return c.ticker === companyData.ticker; });
      if (idx >= 0) {
        DRILL_DOWN_DATA[idx] = companyData;
      } else {
        DRILL_DOWN_DATA.push(companyData);
      }
    });
  } catch (e) {
    // silently fail - user additions are optional
  }
}

async function sendChatMessage() {
  var input = document.getElementById('chatInput');
  var userText = input.value.trim();
  if (!userText || chatStreaming) return;

  addChatMessage('user', userText);
  input.value = '';

  var contextPrefix = getChatContext();
  var messageToSend = contextPrefix ? contextPrefix + ' ' + userText : userText;

  chatStreaming = true;
  setChatInputEnabled(false);
  showTypingIndicator();

  try {
    var response = await fetch(API + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: messageToSend })
    });

    removeTypingIndicator();

    if (!response.ok) {
      addChatMessage('ai', 'Sorry, there was an error connecting to the AI. Please try again.');
      chatStreaming = false;
      setChatInputEnabled(true);
      return;
    }

    currentAiRawText = '';
    currentAiMsgEl = addChatMessage('ai', '');

    var reader = response.body.getReader();
    var decoder = new TextDecoder();
    var buffer = '';

    while (true) {
      var result = await reader.read();
      if (result.done) break;
      buffer += decoder.decode(result.value, { stream: true });

      var lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line.startsWith('data: ')) continue;
        var jsonStr = line.slice(6);
        try {
          var data = JSON.parse(jsonStr);
          if (data.type === 'text' && data.content) {
            currentAiRawText += data.content;
            currentAiMsgEl.innerHTML = renderMarkdown(currentAiRawText);
            document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
          } else if (data.type === 'data_edit' && data.event) {
            applyDataEdit(data.event);
          } else if (data.type === 'done') {
            break;
          } else if (data.type === 'error') {
            currentAiRawText += '\n\nError: ' + (data.content || 'Unknown error');
            currentAiMsgEl.innerHTML = renderMarkdown(currentAiRawText);
          }
        } catch (e) {
          // skip invalid JSON
        }
      }
    }

    if (!currentAiRawText.trim()) {
      currentAiMsgEl.innerHTML = renderMarkdown('I received your message but had no response. Please try again.');
    }
  } catch (err) {
    removeTypingIndicator();
    addChatMessage('ai', 'Network error: could not reach the AI service. Please check your connection and try again.');
  }

  chatStreaming = false;
  setChatInputEnabled(true);
  currentAiMsgEl = null;
  currentAiRawText = '';
  document.getElementById('chatInput').focus();
}

async function clearChat() {
  try {
    await fetch(API + '/api/chat/clear', { method: 'DELETE' });
  } catch (e) {
    // silently fail
  }
  var messagesEl = document.getElementById('chatMessages');
  messagesEl.innerHTML = '';
  chatFirstOpen = true;
  showChatWelcome();
}

function showChatWelcome() {
  var messagesEl = document.getElementById('chatMessages');
  if (chatFirstOpen && messagesEl.children.length === 0) {
    var welcome = document.createElement('div');
    welcome.className = 'chat-welcome';
    welcome.textContent = "I'm your Twine Pulse AI assistant. I can research and add new companies to the dashboard, update existing data, add pipeline drugs, and track Blue Matter connections. Try: 'Add Corcept Therapeutics to the dashboard' or ask me anything about the tracked companies.";
    messagesEl.appendChild(welcome);
    chatFirstOpen = false;
  }
}

function initChat() {
  var toggle = document.getElementById('chatToggle');
  var panel = document.getElementById('chatPanel');
  var closeBtn = document.getElementById('chatCloseBtn');
  var clearBtn = document.getElementById('chatClearBtn');
  var sendBtn = document.getElementById('chatSendBtn');
  var inputEl = document.getElementById('chatInput');

  // Pulse animation on load
  toggle.classList.add('pulse');

  toggle.addEventListener('click', function() {
    chatOpen = !chatOpen;
    panel.classList.toggle('open', chatOpen);
    toggle.classList.toggle('hidden', chatOpen);
    if (chatOpen) {
      showChatWelcome();
      inputEl.focus();
    }
  });

  closeBtn.addEventListener('click', function() {
    chatOpen = false;
    panel.classList.remove('open');
    toggle.classList.remove('hidden');
  });

  clearBtn.addEventListener('click', function() {
    clearChat();
  });

  sendBtn.addEventListener('click', function() {
    sendChatMessage();
  });

  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  });
}


// ===== COMPANY NOTES =====
let currentNotesTicker = '';

function formatNoteTime(epochFloat) {
  var d = new Date(epochFloat * 1000);
  var now = new Date();
  var diffMs = now - d;
  var diffSec = Math.floor(diffMs / 1000);
  var diffMin = Math.floor(diffSec / 60);
  var diffHr = Math.floor(diffMin / 60);
  var diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return 'just now';
  if (diffMin < 60) return diffMin + 'm ago';
  if (diffHr < 24) return diffHr + 'h ago';
  if (diffDay < 7) return diffDay + 'd ago';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function renderNoteCard(note) {
  return '<div class="cd-note-card" data-note-id="' + note.id + '">' +
    '<div class="cd-note-content">' + escapeHtml(note.content) + '</div>' +
    '<div class="cd-note-footer">' +
      '<span class="cd-note-timestamp">' + formatNoteTime(note.created_at) + '</span>' +
      '<div class="cd-note-actions">' +
        '<button class="cd-note-action-btn edit" data-note-id="' + note.id + '" aria-label="Edit note"><i data-lucide="pencil" style="width:14px;height:14px;"></i></button>' +
        '<button class="cd-note-action-btn delete" data-note-id="' + note.id + '" aria-label="Delete note"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function loadEditHistory(ticker) {
  var histEl = document.getElementById('cdEditHistory');
  if (!histEl) return;
  histEl.innerHTML = '<div style="color:var(--color-text-faint);font-size:var(--text-xs);padding:var(--space-2);">Loading history...</div>';
  try {
    var resp = await fetch(API + '/api/edits/' + encodeURIComponent(ticker));
    if (!resp.ok) throw new Error('Failed');
    var edits = await resp.json();
    if (edits.length === 0) {
      histEl.innerHTML = '<div class="cd-notes-empty">No edit history. Use the AI chat to add or update data for this company.</div>';
    } else {
      histEl.innerHTML = edits.map(function(edit) {
        var d = new Date(edit.created_at * 1000);
        var timeStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        var typeLabel = edit.edit_type === 'add_company' ? 'Company Added' : edit.edit_type === 'update_company' ? 'Profile Updated' : edit.edit_type === 'update_field' ? 'Field Updated' : edit.edit_type === 'add_drug' ? 'Drug Added' : edit.edit_type === 'add_connection' ? 'Connection Added' : edit.edit_type;
        var typeClass = edit.edit_type === 'add_company' || edit.edit_type === 'update_company' ? 'badge-success' : edit.edit_type === 'add_drug' ? 'badge-primary' : 'badge-warning';
        return '<div class="cd-edit-item">' +
          '<div class="cd-edit-header">' +
            '<span class="badge ' + typeClass + '">' + typeLabel + '</span>' +
            '<span class="cd-edit-version">v' + edit.version + '</span>' +
            '<span class="cd-edit-time">' + timeStr + '</span>' +
          '</div>' +
          (edit.ai_summary ? '<div class="cd-edit-summary">' + escapeHtml(edit.ai_summary) + '</div>' : '') +
          (edit.field_path && edit.field_path !== 'full_profile' ? '<div class="cd-edit-field">Field: ' + escapeHtml(edit.field_path) + '</div>' : '') +
        '</div>';
      }).join('');
    }
  } catch (e) {
    histEl.innerHTML = '<div class="cd-notes-empty">Edit history unavailable.</div>';
  }
}

async function loadCompanyNotes(ticker) {
  currentNotesTicker = ticker;
  var listEl = document.getElementById('cdNotesList');
  listEl.innerHTML = '<div style="color:var(--color-text-faint);font-size:var(--text-xs);padding:var(--space-2);">Loading notes...</div>';

  // Reset add form
  document.getElementById('cdNotesAddForm').style.display = 'none';
  document.getElementById('cdNewNoteText').value = '';

  try {
    var resp = await fetch(API + '/api/notes/' + encodeURIComponent(ticker));
    if (!resp.ok) throw new Error('Failed to load notes');
    var notes = await resp.json();

    if (notes.length === 0) {
      listEl.innerHTML = '<div class="cd-notes-empty">No notes yet. Add your first note to track insights about this company.</div>';
    } else {
      listEl.innerHTML = notes.map(renderNoteCard).join('');
    }
    wireNoteActions();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  } catch (e) {
    listEl.innerHTML = '<div class="cd-notes-empty">Could not load notes. The notes service may be unavailable.</div>';
  }
}

async function createNote(ticker, content) {
  var resp = await fetch(API + '/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company_ticker: ticker, content: content })
  });
  if (!resp.ok) throw new Error('Failed to create note');
  return resp.json();
}

async function updateNote(noteId, content) {
  var resp = await fetch(API + '/api/notes/' + noteId, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: content })
  });
  if (!resp.ok) throw new Error('Failed to update note');
  return resp.json();
}

async function deleteNote(noteId) {
  var resp = await fetch(API + '/api/notes/' + noteId, {
    method: 'DELETE'
  });
  if (!resp.ok) throw new Error('Failed to delete note');
  return resp.json();
}

function wireNoteActions() {
  var listEl = document.getElementById('cdNotesList');

  listEl.querySelectorAll('.cd-note-action-btn.edit').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var noteId = btn.dataset.noteId;
      var card = listEl.querySelector('[data-note-id="' + noteId + '"]');
      if (!card) return;
      var contentEl = card.querySelector('.cd-note-content');
      var currentText = contentEl.textContent;

      // Replace content with textarea
      contentEl.outerHTML = '<textarea class="cd-note-edit-textarea" id="noteEdit_' + noteId + '">' + escapeHtml(currentText) + '</textarea>' +
        '<div class="cd-notes-form-actions" id="noteEditActions_' + noteId + '">' +
          '<button class="cd-notes-save-btn" data-note-id="' + noteId + '">Save</button>' +
          '<button class="cd-notes-cancel-btn" data-note-id="' + noteId + '">Cancel</button>' +
        '</div>';

      var textarea = document.getElementById('noteEdit_' + noteId);
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);

      var actionsEl = document.getElementById('noteEditActions_' + noteId);
      actionsEl.querySelector('.cd-notes-save-btn').addEventListener('click', async function() {
        var newContent = textarea.value.trim();
        if (!newContent) return;
        try {
          await updateNote(noteId, newContent);
          loadCompanyNotes(currentNotesTicker);
        } catch (e) {
          // reload to reset
          loadCompanyNotes(currentNotesTicker);
        }
      });
      actionsEl.querySelector('.cd-notes-cancel-btn').addEventListener('click', function() {
        loadCompanyNotes(currentNotesTicker);
      });
    });
  });

  listEl.querySelectorAll('.cd-note-action-btn.delete').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var noteId = btn.dataset.noteId;
      var card = listEl.querySelector('[data-note-id="' + noteId + '"]');
      if (!card) return;

      // Check if confirm dialog already shown
      if (card.querySelector('.cd-note-confirm')) return;

      var confirmDiv = document.createElement('div');
      confirmDiv.className = 'cd-note-confirm';
      confirmDiv.innerHTML = '<span>Delete this note?</span>' +
        '<button class="cd-note-confirm-yes">Delete</button>' +
        '<button class="cd-note-confirm-no">Cancel</button>';
      card.appendChild(confirmDiv);

      confirmDiv.querySelector('.cd-note-confirm-yes').addEventListener('click', async function() {
        try {
          await deleteNote(noteId);
          loadCompanyNotes(currentNotesTicker);
        } catch (e) {
          loadCompanyNotes(currentNotesTicker);
        }
      });
      confirmDiv.querySelector('.cd-note-confirm-no').addEventListener('click', function() {
        confirmDiv.remove();
      });
    });
  });
}

function initNotesListeners() {
  var addBtn = document.getElementById('cdAddNoteBtn');
  var form = document.getElementById('cdNotesAddForm');
  var saveBtn = document.getElementById('cdNewNoteSave');
  var cancelBtn = document.getElementById('cdNewNoteCancel');
  var textarea = document.getElementById('cdNewNoteText');

  addBtn.addEventListener('click', function() {
    form.style.display = 'block';
    textarea.value = '';
    textarea.focus();
  });

  cancelBtn.addEventListener('click', function() {
    form.style.display = 'none';
    textarea.value = '';
  });

  saveBtn.addEventListener('click', async function() {
    var content = textarea.value.trim();
    if (!content || !currentNotesTicker) return;
    try {
      await createNote(currentNotesTicker, content);
      form.style.display = 'none';
      textarea.value = '';
      loadCompanyNotes(currentNotesTicker);
    } catch (e) {
      // keep form open on error
    }
  });
}


// ===== THEME TOGGLE =====
function initTheme() {
  const r = document.documentElement;
  let d = 'dark'; // default dark
  r.setAttribute('data-theme', d);

  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      toggle.setAttribute('aria-label', `Switch to ${d === 'dark' ? 'light' : 'dark'} mode`);
      // Rebuild charts with new colors
      viewsInitialized = {};
      if (currentView === 'company-detail') {
        // Re-render stock chart with updated colors
        const activeCompanyName = document.getElementById('cdCompanyName').textContent;
        const activeCompany = findCompanyByName(activeCompanyName);
        if (activeCompany) renderStockChart(activeCompany);
      } else {
        initView(currentView);
      }
    });
  }
}


// ===== SIDEBAR COLLAPSE TOGGLE =====
let sidebarCollapsed = false;

function initSidebarToggle() {
  const toggleBtn = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const dashboard = document.querySelector('.dashboard');

  if (!toggleBtn) return;
  toggleBtn.addEventListener('click', () => {
    sidebarCollapsed = !sidebarCollapsed;
    sidebar.classList.toggle('collapsed', sidebarCollapsed);
    dashboard.classList.toggle('sidebar-collapsed', sidebarCollapsed);
    toggleBtn.setAttribute('aria-label', sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
  });
}

// ===== MOBILE SIDEBAR =====
function initMobileSidebar() {
  const btn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
}


// ===== NAVIGATION =====
function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      switchView(item.dataset.view);
    });
  });
}


// ===== INIT =====
async function init() {
  initTheme();
  initNav();
  initMobileSidebar();
  initSidebarToggle();

  // Wire up company detail back button
  const backBtn = document.getElementById('cdBackBtn');
  if (backBtn) {
    backBtn.addEventListener('click', goBackFromCompanyDetail);
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Initialize chat panel
  initChat();

  // Initialize notes listeners
  initNotesListeners();

  // Load live company data from Databricks (falls back to embedded if unavailable)
  await loadCompaniesFromAPI();

  // Load any companies added via AI chat
  await loadUserAdditions();

  // Initialize default view
  initView('fda-approvals');
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


// ===== LIVE TIMESTAMP =====
function updateLiveTimestamp() {
  const el = document.getElementById('liveTimestamp');
  if (!el) return;
  const now = new Date();
  const opts = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
  el.textContent = 'Updated ' + now.toLocaleDateString('en-US', opts);
}
updateLiveTimestamp();
setInterval(updateLiveTimestamp, 60000);
