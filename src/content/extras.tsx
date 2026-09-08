import type { Reviewer } from "@/components/review-ui";

/* ------------------------------------------------------------------ */
/* Also considered — 10 credentials that missed the top 10             */
/* ------------------------------------------------------------------ */

export const mentions: {
  name: string;
  strength: string;
  missed: string;
  body: string;
}[] = [
  {
    name: "Oracle Cloud Infrastructure Generative AI Professional",
    strength: "Often free to attempt during promotions; covers RAG and OCI GenAI services",
    missed: "Recognition largely inside Oracle ecosystems; no projects",
    body: "Technically a real proctored professional exam, and Oracle's periodic free-certification windows make it one of the cheapest recognised credentials in existence [VERIFY current promotion]. The problem is portability: the content is framed around OCI Generative AI services, so the signal lands with Oracle customers and partners and fades elsewhere. There are no projects, no code review and no career support, so it evidences service literacy rather than engineering capability. Worth taking if it is free and you work in an Oracle shop; not worth building a plan around.",
  },
  {
    name: "Vanderbilt Prompt Engineering Specialization (Coursera)",
    strength: "Excellent, accessible prompt craft",
    missed: "Prompt-only; now baseline literacy, not a career credential",
    body: "Genuinely well taught, and for a non-technical professional it is one of the friendliest introductions to structured prompting available. But it sits entirely inside Layer 2 of the seven-layer stack, and in 2026 prompting alone is assumed rather than credentialled — nobody is hired for it as a standalone skill. Treat it as a useful three-week supplement for PMs, writers and analysts, and do not let a prompt specialisation stand in for a GenAI engineering credential on your resume.",
  },
  {
    name: "Hugging Face LLM, Agents and MCP courses",
    strength: "Free, current, practitioner-grade, certificate on completion",
    missed: "Topic modules, not a career program; assumes Python; weak standalone signal",
    body: "Among the fastest-updated, most practitioner-honest material anywhere, and the agents and MCP content is ahead of nearly every paid syllabus on this list. It misses the top ten only because it is a set of topic modules rather than a sequenced career program: no ML foundations, no capstone, no human review, no interview preparation, and a certificate that carries little weight in an HR screen. Strongly recommended as a supplement to whatever you choose — I would put it in every learner's plan.",
  },
  {
    name: "Duke LLMOps / MLOps specializations (Coursera)",
    strength: "Rare production focus",
    missed: "Narrow; better as a Layer-7 top-up than a primary credential",
    body: "Very few programs take serving, observability, cost and pipeline discipline seriously, and this one does. That focus is also the limitation: it presumes you already have LLM, RAG and orchestration skills, so it cannot function as a primary GenAI credential for a beginner or a switcher. Read it as the Layer-7 top-up for someone who already builds — a strong choice after a project-based program, a poor one instead of it.",
  },
  {
    name: "Great Learning PGP-AIML with GenAI (UT Austin)",
    strength: "Mature weekend mentor format, global brand",
    missed: "GenAI is a module inside a broader program; premium price for the tag",
    body: "A mature, well-run weekend format with mentored sessions and a recognisable university tag, and for employer-funded learners it does the credential job competently. But GenAI is a component of a broader AI/ML programme rather than the spine of it, so per-rupee GenAI depth is low: agents, MCP, evaluation and deployment are not where the hours go. If your goal is classical ML plus GenAI literacy it earns consideration; if your goal is GenAI engineering, the price is hard to defend.",
  },
  {
    name: "Scaler's GenAI / LLM modules",
    strength: "Strong engineering community, placement operation",
    missed: "Sold inside a long, expensive broader program; not a standalone GenAI credential [VERIFY]",
    body: "Scaler's community, mentor bench and placement machinery are real strengths, and its engineering culture is stronger than most EdTech marketplaces. The GenAI content, however, is packaged inside a long and expensive broader program rather than offered as a focused GenAI certification [VERIFY current offering]. That makes the total commitment large relative to the GenAI depth delivered. Worth evaluating if you want the wider software-engineering track anyway; a mismatch if GenAI is the only thing you need.",
  },
  {
    name: "Intellipaat IIT-affiliated GenAI certification",
    strength: "IIT tag at mid-tier pricing",
    missed: "Variable module quality; verify what the affiliation covers",
    body: "The pitch is straightforward: an IIT-affiliated tag at a fraction of the premium university price, which is genuinely attractive if HR filters in your sector reward that tag. My reservation is consistency — module quality varies, and 'affiliation' can mean anything from co-designed curriculum to a certificate co-brand. Before paying, get in writing which modules IIT faculty deliver, how assessment works, and whether anything is deployed. If those answers are vague, so is the credential.",
  },
  {
    name: "Udemy GenAI / LangChain bootcamps",
    strength: "₹500–₹3,000, often surprisingly current",
    missed: "No mentorship or assessment; certificate carries little weight; check last-updated date",
    body: "At ₹500–₹3,000 during a sale, the best of these are astonishing value as learning, and some individual instructors update faster than any institution. What you are not buying is assessment, feedback, structure or credibility — the certificate is proof of watching, and recruiters read it accordingly. Always check the last-updated date and the course changelog before buying; in this field a 2023 LangChain course teaches an API that no longer exists.",
  },
  {
    name: "Udacity Generative AI Nanodegree",
    strength: "Human project review, structured",
    missed: "Pricing-to-value for Indian learners; limited India relevance",
    body: "Udacity's differentiator is genuine human project review, which is rare and valuable — it is the one mechanism that catches the mistakes auto-graders miss. The problem for this article's primary audience is pricing-to-value in rupees, plus limited India-specific career support, IST-unfriendly scheduling and lower brand recognition among Indian HR teams than the cost implies. A reasonable global option; a hard sell against the Indian alternatives at similar prices.",
  },
  {
    name: "IISc / IIM / IIT executive GenAI programs",
    strength: "Genuine institutional prestige, senior peer cohorts",
    missed: "Premium pricing; strategic rather than build-focused; low engineering depth per rupee",
    body: "For a senior leader, the prestige and the peer cohort are the product, and both are real: the conversations in the room are often worth more than the curriculum. But these programs are strategic by design — governance, adoption, business cases — so engineering depth per rupee is the lowest on this page. Excellent for a director building an AI adoption mandate; the wrong instrument entirely for anyone who needs to write the retrieval pipeline themselves.",
  },
];

/* ------------------------------------------------------------------ */
/* Learner-type recommendations                                        */
/* ------------------------------------------------------------------ */

export const learnerTypes: {
  title: string;
  body: string;
  primary: string;
  pair: string;
  why: string;
}[] = [
  {
    title: "If you’re a complete beginner",
    body: "Start with a no-prerequisite recognised credential for literacy and a fast, morale-building win — then decide whether you actually want to build. LogicMojo is the better fit here if you are committed to becoming a builder and can give 10+ hours a week; the Python and ML onboarding exists precisely so beginners are not quietly excluded. It is not the fit if what you want is literacy, because you would be paying for engineering depth you have no plans to use.",
    primary: "AWS AI Practitioner or Google Cloud Generative AI Leader",
    pair: "A program with Python and ML onboarding (LogicMojo) if you intend to build",
    why: "Literacy first is cheap and fast; capability second should be a deliberate decision, not an impulse purchase.",
  },
  {
    title: "If you’re a working professional adding GenAI to a current role",
    body: "Choose the vendor exam that matches your organisation's cloud — AI-102, AWS, Google Cloud or Databricks — because the internal signal is what unlocks the GenAI work already sitting in your company. Pair it with LogicMojo if your role is moving toward building RAG systems, agents or LLM features and you need live evening or weekend structure plus code review. If your role is leadership-facing rather than hands-on, the Leader or Practitioner exam alone may genuinely be enough.",
    primary: "Your organisation’s cloud vendor exam",
    pair: "LogicMojo if your role is drifting toward building; nothing further if it is not",
    why: "The credential speaks internally; the project program builds what the new work will actually require.",
  },
  {
    title: "If you’re a developer or ML practitioner",
    body: "Do DeepLearning.AI × AWS first for LLM internals — it is cheap, fast and it makes everything afterwards easier. Then choose between Databricks or NVIDIA for a technical credential, and LogicMojo for the full engineering stack with agents, MCP, fine-tuning, evaluation, deployment and interview preparation. LogicMojo is the better fit when you need to convert existing skills into a GenAI role and want a portfolio plus defence practice rather than more knowledge.",
    primary: "DeepLearning.AI × AWS for internals",
    pair: "LogicMojo for the full stack, or Databricks/NVIDIA for a technical badge",
    why: "You already have the coding gate cleared; your bottleneck is depth on RAG, agents and LLMOps, plus proof.",
  },
  {
    title: "If you’re a career switcher from a non-tech background",
    body: "Avoid exam-only paths as a first move — you need an onramp, and no exam provides one. LogicMojo (foundations → GenAI stack → placement assistance) and upGrad/IIIT-B (if the academic tag matters to your target employers) are the two realistic routes. LogicMojo is the better fit when capability and interview readiness matter more than the logo; upGrad or Purdue/Simplilearn when HR filters in your target sector are credential-driven and you know it.",
    primary: "LogicMojo, or upGrad × IIIT-B if the academic tag matters",
    pair: "One cheap recognised vendor badge once you can code",
    why: "Switchers are screened out at the first gate, so you need both the onramp and something that clears filters.",
  },
  {
    title: "If you’re job-focused (student, fresher, early-career)",
    body: "At this stage projects and interview preparation decide outcomes, not credential prestige — I have watched candidates with lesser badges and better portfolios win the same role repeatedly. LogicMojo fits for the build-plus-placement-assistance combination; add AWS AI Practitioner or AI-102 for a recognised name on the resume. IBM's certificate is the budget alternative if you can self-motivate and will genuinely extend the capstone into original work.",
    primary: "LogicMojo (projects + interview preparation)",
    pair: "AWS AI Practitioner or AI-102 for the resume screen",
    why: "Freshers are judged on demonstrated builds; the badge only gets your profile read.",
  },
  {
    title: "If you’re a manager, PM or consultant",
    body: "Google Cloud Generative AI Leader or AWS AI Practitioner will do almost everything you need: shared vocabulary, evaluation instincts, and enough architectural literacy to challenge a vendor proposal. Add DeepLearning.AI's short courses if you want more depth for your own satisfaction. LogicMojo is not the fit unless you intend to build — paying for engineering depth you will never use is the mirror image of the mistake engineers make when they buy a leadership badge.",
    primary: "Google Cloud Generative AI Leader",
    pair: "AWS AI Practitioner and DeepLearning.AI short courses",
    why: "Your job is scoping, evaluating and governing GenAI work, and these credentials assess exactly that.",
  },
  {
    title: "If you’re employer-funded",
    body: "Buy the credential your L&D team already recognises — Purdue/Simplilearn or upGrad/IIIT-B — because internal recognition is the entire reason employer funding exists. Add a vendor exam, which is usually approved without a second business case given the price. If your employer will fund only one thing, take the vendor exam and build the portfolio yourself in the evenings; it costs them least and you most in hours, but it works.",
    primary: "Purdue × Simplilearn or upGrad × IIIT-B",
    pair: "A vendor exam matching your organisation’s platform",
    why: "Employer money should buy the recognition you cannot easily buy yourself; hours buy the capability.",
  },
];

/* ------------------------------------------------------------------ */
/* Expert reviewers (placeholders until confirmed)                      */
/* ------------------------------------------------------------------ */

export const reviewers: Reviewer[] = [
  {
    name: "[INSERT: Reviewer name]",
    role: "GenAI / LLM Engineer",
    company: "[INSERT: Product company]",
    bio: "[INSERT: 40–60 word bio covering years building LLM applications, the stack they work in, and the systems they have shipped to production.]",
    quote:
      "[INSERT: substantive quote on curriculum depth — what separates a syllabus that produces engineers from one that produces vocabulary.]",
    reviewed: "The curriculum depth scorecard (Table 2) and the seven-layer audit",
    linkedin: "#",
  },
  {
    name: "[INSERT: Reviewer name]",
    role: "GenAI Hiring Manager",
    company: "[INSERT: Global capability centre]",
    bio: "[INSERT: 40–60 word bio covering hiring volume for GenAI roles, the interview loop they own, and what they screen on.]",
    quote:
      "[INSERT: substantive quote on how credentials are actually read in screening versus technical rounds.]",
    reviewed: "The credibility scorecard (Table 3) and interview expectations",
    linkedin: "#",
  },
  {
    name: "[INSERT: Reviewer name]",
    role: "Career switcher, now in a GenAI role",
    company: "[INSERT: Employer]",
    bio: "[INSERT: 40–60 word bio covering their prior non-AI background, the program they completed, the projects that converted, and their timeline.]",
    quote:
      "[INSERT: substantive quote on delivery, projects and what placement support did and did not do.]",
    reviewed: "Delivery, projects and placement-support sections",
    linkedin: "#",
  },
  {
    name: "[INSERT: Reviewer name]",
    role: "AI Career Coach",
    company: "[INSERT: Organisation]",
    bio: "[INSERT: 40–60 word bio covering candidates coached into GenAI roles, sectors covered, and the patterns they see in failed transitions.]",
    quote:
      "[INSERT: substantive quote on learner-type fit and realistic ROI expectations.]",
    reviewed: "Learner-type recommendations and the ROI model",
    linkedin: "#",
  },
  {
    name: "[INSERT: Reviewer name]",
    role: "GenAI Educator / Curriculum Designer",
    company: "[INSERT: Organisation]",
    bio: "[INSERT: 40–60 word bio covering curriculum design experience, assessment design, and how they keep GenAI content current.]",
    quote:
      "[INSERT: substantive quote on the credibility ladder and what assessment actually proves.]",
    reviewed: "The 2026 GenAI skill stack and the credibility ladder",
    linkedin: "#",
  },
];

/* ------------------------------------------------------------------ */
/* 36 FAQs, grouped                                                    */
/* ------------------------------------------------------------------ */

export const faqClusters: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Choosing a certification",
    items: [
      {
        q: "Which is the best GenAI certification in 2026?",
        a: "There is no single winner, because three different readers judge you. By this article's criteria — capability per rupee and per hour, proven through reviewed projects — LogicMojo's Generative AI Course ranks first for job-focused learners, developers and career switchers. For a globally recognised vendor credential, Microsoft AI-102 is the strongest engineering exam. For leadership literacy, Google Cloud Generative AI Leader. For near-zero-cost foundations, DeepLearning.AI × AWS. Pick against your goal, not against the ranking.",
      },
      {
        q: "Are generative AI certifications worth it?",
        a: "Yes, conditionally. A certification is worth it when it either teaches you the stack hands-on or carries an issuer name that employers screen for — ideally paired so you get both. It is not worth it when it replaces building something you can demonstrate and defend, and it is actively negative when financed on EMI for a program you abandon. Judge any credential by what you will be able to build, defend and show afterwards.",
      },
      {
        q: "Vendor exam or project-based course — which is worth more?",
        a: "They are different instruments doing different jobs, so the comparison misleads. A vendor exam is a proctored, globally identical, verifiable credential that clears HR screens and internal-mobility checks. A project-based course certification produces artefacts and the habit of defending design decisions, which clears technical rounds. The combination costs less than most premium single programs and outperforms either alone. If forced to choose one, choose by which gate is blocking you today.",
      },
      {
        q: "How do I know if a GenAI curriculum is actually current?",
        a: "Look for four things a 2023 curriculum cannot fake: agent frameworks by name (LangGraph, CrewAI, Agents SDK), MCP, evaluation methodology beyond accuracy, and deployment with observability. Then check the last-updated date and ask which modules changed in the past six months. In GenAI, undated means outdated — the APIs taught in a two-year-old course frequently no longer exist in that form.",
      },
      {
        q: "University brand or curriculum — which should decide it?",
        a: "Let the reader you need to convince decide. If HR filters and promotion committees in your sector reward a university tag, the brand is doing measurable work and is worth paying for. If your next step is a technical interview at a product company or startup, the curriculum and the portfolio decide, and the tag is decoration. Most people know which of those two applies to them and buy the other one anyway.",
      },
      {
        q: "GenAI certification vs AI/ML certification?",
        a: "If your target role builds LLM applications, agents or RAG systems, take the GenAI credential. If you are targeting classical ML — forecasting, recommendation, tabular prediction — take an ML certification, because GenAI credentials will not cover it. The trap is GenAI-only paths with no ML intuition: interviewers ask about evaluation, overfitting and attention constantly, and learners who skipped those foundations cannot debug their own pipelines.",
      },
      {
        q: "Is a prompt engineering certification enough?",
        a: "No, not in 2026. Prompting is now baseline literacy, assumed rather than credentialled, and no engineering role is filled on the strength of a prompt specialisation. As one module inside a broader program it remains essential — particularly structured outputs, function calling, injection defence and prompt evaluation. As a standalone purchase it is a Layer-2 credential competing against Layer-4 candidates.",
      },
      {
        q: "Should I take more than one certification?",
        a: "Take two at most, and make them complementary: one recognised vendor exam plus one project-backed program. That pair covers the HR screen and the technical round. Three or more badges with no deployed projects is the clearest anti-pattern in this category — it signals collecting rather than building, and experienced interviewers read it that way.",
      },
      {
        q: "Which GenAI certification is best for beginners?",
        a: "For literacy with a recognised name and no prerequisites: AWS AI Practitioner or Google Cloud Generative AI Leader. For becoming a builder: a program that includes Python and ML onboarding rather than assuming it, which is why LogicMojo suits committed beginners. What you should not buy first is an engineer-level exam voucher — unprepared candidates burn them routinely.",
      },
      {
        q: "How do I verify placement claims before enrolling?",
        a: "Ask five questions in writing: what percentage of enrolled — not eligible — learners were placed; over what time window; what was the median, not the average, salary; were the roles GenAI-specific or adjacent; and can you speak to two recent alumni the provider did not hand-pick. Any refusal or reframing on the first question tells you what you need to know.",
      },
    ],
  },
  {
    title: "Eligibility & prerequisites",
    items: [
      {
        q: "Can I get a GenAI certification without coding?",
        a: "Yes — Google Cloud Generative AI Leader, AWS AI Practitioner and Microsoft AI-900 require no code. Just be clear what you are buying: literacy credentials appropriate for business, product and consulting roles, not engineering evidence. Mistaking one for the other is the single most common expensive error in this category, and third-party trainers actively encourage the confusion.",
      },
      {
        q: "Do I need machine learning before GenAI?",
        a: "You need ML intuition, not an ML career. Specifically: train/test splits, overfitting, evaluation metrics, embeddings, and a conceptual grasp of attention. Interviewers probe these constantly because they predict whether you can debug a retrieval pipeline. Programs that skip foundations to get to LangChain faster leave learners who can assemble a demo but cannot explain why it fails.",
      },
      {
        q: "How much Python do I need?",
        a: "Enough to read and write functions, use classes lightly, handle files and JSON, call APIs, manage virtual environments and debug a stack trace. You do not need advanced Python, async mastery or design patterns. If you can write a script that calls an API and processes the response into a structured output, you are ready for any engineering-track program on this list.",
      },
      {
        q: "Can a non-IT graduate get a GenAI job?",
        a: "Yes, and it happens regularly — but the path is longer and the evidence bar is higher, because you are screened out at the first gate more often. What works: a genuine onramp through Python and ML foundations, six to ten deployed and documented projects, one recognised credential to clear filters, and disciplined applications with referrals. What does not work: a badge and a hopeful resume.",
      },
      {
        q: "Is a CS degree necessary?",
        a: "No. No credential on this list requires one, and no employer I have spoken to treats GenAI engineering as degree-gated in the way some ML research roles are. A CS degree helps with fundamentals and with certain HR filters, particularly at large enterprises. A deployed, evaluated portfolio compensates for its absence more effectively than any additional certificate.",
      },
      {
        q: "Can I do this while working full time?",
        a: "Yes, and most learners on this list do. It requires eight to fifteen hours a week sustained over four to nine months, live sessions scheduled in evenings or weekends if you choose a cohort program, and honesty about your on-call and travel weeks. The realistic risk is not difficulty; it is a busy quarter at work turning into a three-month gap you never close.",
      },
      {
        q: "What’s the minimum weekly commitment?",
        a: "Below five hours a week, choose a vendor exam or a short MOOC — a long program will simply expire around you. Five to ten hours suits a self-paced applied certificate. Ten to fifteen hours is where project-based programs work as designed. Fifteen-plus compresses the timeline meaningfully. Block the hours in your calendar before you pay, not after.",
      },
      {
        q: "Is it too late to start GenAI in 2026?",
        a: "No, but the bar has moved. In 2023 a working demo was remarkable; in 2026 the expectation is retrieval you can evaluate, agents you can make safe, and deployment you can monitor. That is harder, and also fairer — the people succeeding now are the ones who build and document, not the ones who arrived first. Late entry with real evidence beats early entry with a badge.",
      },
    ],
  },
  {
    title: "Cost, fees & EMI",
    items: [
      {
        q: "How much does a GenAI certification cost?",
        a: "Roughly: ₹0 for free credentialled tracks; ₹8,000–₹25,000 ($99–$300) per attempt for vendor exams; ₹40,000–₹1.5L for project-based programs; ₹1L–₹3.5L for university-affiliated certificates [VERIFY current prices]. Budget ₹3,000–₹8,000 on top for API and cloud credits regardless of which route you take — the projects that matter cost something to run.",
      },
      {
        q: "Are expensive GenAI certifications better?",
        a: "No — price predicts branding and sales spend far better than it predicts curriculum depth. Some of the best material on this list is free, and some of the most expensive programs are the lightest on agents, MCP, evaluation and deployment. Judge on capability per rupee and per hour: what will you be able to build, defend and show when it ends?",
      },
      {
        q: "Is no-cost EMI genuinely free?",
        a: "The interest is usually subsidised by the provider rather than absent, and the arrangement is still a loan from a lender with terms. Read who the lender is, what happens if you stop attending, whether the obligation survives a deferral, and what the refund window is. 'No-cost' describes the interest, not the commitment.",
      },
      {
        q: "What happens to my EMI if I stop attending?",
        a: "In most cases the instalments continue, because your contract is with the lender, not the classroom. This is the single most expensive trap in the category: an abandoned ₹2L program with eighteen months of EMI remaining and nothing to show. Before signing, get the refund window, the deferral policy and the loan cancellation terms in writing.",
      },
      {
        q: "Are there good free GenAI certifications?",
        a: "Yes. DeepLearning.AI × AWS (free to audit), the IBM professional certificate (free to audit), Hugging Face's LLM, agents and MCP courses, Google Cloud Skills Boost and AWS Skill Builder free paths, and periodic free vendor-exam windows such as Oracle's [VERIFY]. As learning, several are world-class. As credentials, they carry limited weight — so use them for capability and buy recognition once.",
      },
      {
        q: "What do exam retakes and renewals cost?",
        a: "Retakes generally cost the full exam fee again, sometimes with a mandatory waiting period [VERIFY per vendor]. Renewals vary sharply: Microsoft role-based certifications renew annually through a free online assessment, AWS and Google Cloud run roughly three-year cycles with a repeat exam, and NVIDIA and Databricks roughly two years [VERIFY current policies]. Factor renewal into total cost of ownership before calling an exam cheap.",
      },
    ],
  },
  {
    title: "Certification value & careers",
    items: [
      {
        q: "Do employers value GenAI certificates?",
        a: "Recruiters and ATS filters value recognisable issuers — Microsoft, Google, AWS, NVIDIA, Databricks, IBM, universities. Hiring managers value evidence that predicts capability: deployed projects, evaluation results, design trade-offs. Technical interviewers value whether you can defend what you claim. All three stages exist in most processes, so optimise for the first with a credential and the last two with a portfolio.",
      },
      {
        q: "Do GenAI certifications expire?",
        a: "Most vendor certifications do. Microsoft role-based credentials renew annually via a free assessment; AWS and Google Cloud run about three years; NVIDIA and Databricks about two [VERIFY current policies]. MOOC certificates and project-based course certifications generally do not expire — though in a field moving this fast, a five-year-old GenAI certificate says little regardless of what its validity field claims.",
      },
      {
        q: "Can I get a job with only a GenAI certification?",
        a: "Rarely, and it is getting rarer. Certifications open screens; deployed projects and the ability to defend design decisions convert interviews. The candidates I see converting have a credential plus six to ten documented projects plus deliberate application effort. Treat the certificate as a door, not a destination — and expect the interview to ignore it within two questions.",
      },
      {
        q: "What salary can I expect in GenAI roles?",
        a: "Ranges vary enormously by country, city, company type and prior experience, and this article deliberately marks every figure [VERIFY: current market data] rather than inventing numbers. What I can say directionally: GenAI-specific roles command a premium over comparable non-AI engineering roles at the same experience level, the premium is larger at product companies and AI-native startups than at IT services, and entry-level competition is intense.",
      },
      {
        q: "How many portfolio projects do I need?",
        a: "Six to ten documented projects, with a clear flagship. Specifically: one deployed RAG application with citations and an evaluation set, one agent with tools, memory and a cost ceiling, one fine-tuning experiment benchmarked against the base model, and an evaluation harness for at least one of them. Quality and documentation beat quantity — three excellent projects outperform ten tutorial clones.",
      },
      {
        q: "What roles can a fresher with a GenAI certification apply for?",
        a: "Realistically: AI application developer, junior GenAI engineer, RAG or search engineer in data-heavy teams, AI-adjacent backend roles, and GenAI practice roles in IT services where structured training programs exist. Titles are applied inconsistently, so read responsibilities rather than headlines. Your projects, not your certificate, will determine which of these you get shortlisted for.",
      },
      {
        q: "Is a Google, Microsoft, AWS or NVIDIA GenAI certification worth it?",
        a: "Each is worth it for a specific purpose. AI-102 is the strongest engineering signal in Azure organisations. Google Cloud Generative AI Leader is the best leadership credential. AWS AI Practitioner is the best cheap first badge. NVIDIA NCA-GENL is the most technically demanding associate exam and lands well with ML-literate managers. None of them produces a portfolio, which is the gap you must fill yourself.",
      },
    ],
  },
  {
    title: "Curriculum & skills",
    items: [
      {
        q: "What should a 2026 GenAI curriculum include?",
        a: "Seven layers: foundations (Python, ML intuition); LLM fundamentals; prompt engineering through structured outputs and function calling; embeddings, vector search and production RAG; orchestration with LangChain and LangGraph; fine-tuning with LoRA/QLoRA; agents and MCP; then evaluation, guardrails, LLMOps and deployment. If any of RAG evaluation, agents or deployment is absent, the curriculum is behind what interviews test.",
      },
      {
        q: "Which certifications cover RAG, LangChain and AI agents hands-on?",
        a: "Very few cover all three. Among vendor exams, Databricks is the most RAG-centric and touches agents at working-knowledge level. Among low-cost tracks, IBM covers RAG and LangChain but is light on agents. Hugging Face's free courses are excellent on agents and MCP but are topic modules, not a program. Full hands-on coverage including LangGraph, MCP, evaluation and LLMOps typically requires a project-based program.",
      },
      {
        q: "Do I need fine-tuning, or is RAG enough?",
        a: "RAG solves most knowledge problems and should be your default; fine-tuning changes behaviour, format and style rather than adding facts. Learn fine-tuning anyway, because interviewers ask when and why you would choose it, and a LoRA or QLoRA run benchmarked against the base model is strong portfolio evidence. Knowing when not to fine-tune is itself a senior signal.",
      },
      {
        q: "What is MCP and why does it matter for jobs?",
        a: "The Model Context Protocol is a standardised way for models and agents to connect to tools and data sources, replacing bespoke per-integration glue. It matters for hiring because agent work is the fastest-growing slice of GenAI roles and MCP is still absent from almost every certification syllabus — which makes it an unusually cheap differentiator for anyone willing to build one integration and explain it well.",
      },
      {
        q: "Will GenAI skills be obsolete in two years?",
        a: "Specific APIs and framework versions will change; the durable layers will not. Retrieval quality, evaluation methodology, cost and latency engineering, safety against injection, and system design outlive any library. That is the argument for choosing a program that teaches judgement alongside tooling — and against choosing one built around a single vendor's current SDK.",
      },
      {
        q: "Do I need a GPU to complete these certifications?",
        a: "No. Free Colab tiers, hosted APIs and quantised open-weight models via Ollama cover almost everything, including most fine-tuning exercises. Budget a small amount for API credits and, for larger fine-tuning runs, a few hours of rented GPU time. Nobody needs to buy hardware to earn any credential on this list.",
      },
    ],
  },
];
