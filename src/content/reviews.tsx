import type { ReviewData } from "@/components/review-ui";

/**
 * Ten certification reviews, all built on the identical 12-part structure.
 * Every fee, duration, module and renewal reference carries [VERIFY] until
 * confirmed against the provider's current official page.
 */
export const reviews: ReviewData[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    rank: 1,
    medal: "🥇",
    name: "LogicMojo — Generative AI Course [VERIFY exact program name]",
    tagline:
      "Best project-backed GenAI certification for job-focused learners, developers and career switchers",
    meta: [
      { label: "Issuer", value: "LogicMojo (specialist AI training provider)" },
      { label: "Credential type", value: "Project-graded course certification" },
      { label: "Assessment", value: "Graded projects + capstone + mentor review [VERIFY]" },
      { label: "Fees", value: "₹XX,XXX [VERIFY]; EMI, no bond" },
      { label: "Duration", value: "X months [VERIFY] · 10–15 hrs/week" },
      { label: "Capability ceiling", value: "Level 4–5" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              LogicMojo is a specialist AI training provider rather than a broad EdTech marketplace,
              and the whole program is built around a single question: can a working learner reach{" "}
              <strong>production-capable GenAI engineering</strong> — on genuine ML foundations — in
              one structured sequence, without taking a career break?
            </p>
            <p>
              That positioning produces an unusual combination. The curriculum depth you normally
              find only in ₹2L+ programs; the currency you normally find only in frontier specialist
              content (agent frameworks, MCP, open-weight models); delivered live in IST evening and
              weekend batches at a mid-band price; with a certification earned through reviewed
              projects rather than a completion tick. There is no bond and no income-share
              agreement [VERIFY].
            </p>
            <p>
              It sits in the market gap this article keeps running into: vendor exams give
              recognition without capability, MOOCs give capability without accountability, and
              university-tagged programs give a logo at a premium. This is the option optimised for{" "}
              <strong>what you can build, defend and show</strong>.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              Issued by LogicMojo on completion of graded projects and a capstone with mentor review
              [VERIFY: exact issuance criteria, and whether a verifiable credential link or ID is
              provided]. This is a <strong>course certification with real assessment</strong>, not a
              proctored vendor exam and not a certificate of attendance — an important distinction to
              hold on to, because the three are marketed identically across this category.
            </p>
            <p>
              No expiry and no renewal fee [VERIFY]. Practically, the artefact an employer inspects
              is the GitHub portfolio and deployed capstone the certification documents, not the PDF
              itself.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              The progression runs from Python and ML essentials into LLM internals, prompt
              engineering with structured outputs and function calling, embeddings and vector search,
              production RAG with hybrid retrieval and re-ranking, orchestration with LangChain and
              LangGraph, fine-tuning with LoRA/QLoRA, multi-agent systems and MCP, then evaluation,
              guardrails, deployment and observability, closing on a learner-designed capstone
              [VERIFY module list and count].
            </p>
            <p>
              Tooling referenced: Python, pandas, scikit-learn, PyTorch, Hugging Face,
              OpenAI/Anthropic/Gemini APIs, LangChain, LangGraph, CrewAI, AutoGen, Agents SDK,
              ChromaDB/Pinecone/Qdrant, Ollama, PEFT, FastAPI, Docker, Git and cloud deployment
              [VERIFY tool list].
            </p>
            <p>
              <strong>Depth verdict:</strong> the only option on this list rated Deep or Comprehensive
              across LLMs, prompt engineering, RAG, LangChain/LangGraph, fine-tuning and agents —
              including the four areas most commonly skipped everywhere else: agent frameworks, MCP,
              evaluation and deployment.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Live IST batches (evening and weekend) with real instructors, doubt resolution inside
              the session, mentor channels between sessions, human code review, recordings with a
              structured catch-up path, cohort accountability, deferral options and continuous
              content refresh [VERIFY all delivery claims against the current batch page].
            </p>
            <p>
              The trade-off is honest and worth stating plainly: live structure is the reason
              completion rates hold up, and it is also the reason this format does not work for
              rotating shifts, heavy travel or unpredictable on-call weeks.
            </p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>
              10–15 progressive projects ending in a learner-designed, deployed capstone [VERIFY
              count]. Deployment is mandatory rather than optional, and every project is documented
              for GitHub with a README written for a stranger to run.
            </p>
            <p>
              The mechanism that matters here is <strong>human review</strong>. Auto-graded notebooks
              tell you your output matched a fixture; a reviewer tells you your chunking strategy is
              wrong, your evaluation set leaks, and your agent has no cost ceiling. That feedback is
              what turns a repository into something you can defend in an interview.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              ₹XX,XXX [VERIFY; note any current offer], with EMI available and no bond. Duration X
              months [VERIFY] at roughly 10–15 hours a week. Basic Python is helpful and onboarding is
              provided; no prior machine learning is assumed [VERIFY].
            </p>
            <p>
              Budget separately for API and cloud credits, as with every program on this list —
              ₹3,000–₹8,000 across a full course is a realistic directional range for practice
              workloads.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              Read this credential through the portfolio it produces. In technical rounds it is the
              strongest instrument on this list, because everything you claim is attached to code a
              reviewer has already pushed back on.
            </p>
            <p>
              In an HR keyword screen it is <strong>weaker</strong> than Microsoft, Google, AWS,
              NVIDIA, Databricks, Purdue or IIIT-Bangalore. That is a genuine limitation, not a
              disguised advantage, and it is exactly why this article recommends pairing it with one
              recognised vendor exam rather than treating either as sufficient alone.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>
              Career guidance, portfolio review, GenAI-role interview preparation, project-defence
              practice and placement assistance [VERIFY exact scope in writing]. Published learner
              outcomes are on the{" "}
              <a
                href="https://logicmojo.com/success-story"
                target="_blank"
                rel="noopener"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                LogicMojo success stories page
              </a>
              .
            </p>
            <p>
              State the boundary clearly: this is <strong>not a guaranteed-placement program</strong>,
              and nothing in this article should be read as implying one. Ask for the assistance scope
              item by item before enrolling, and apply the same five placement questions used on every
              other provider here.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Developers with 2–8 years' experience moving into GenAI who can give 10–15 hours a week.",
      "Career switchers who need prerequisite support but refuse a shallow overview course.",
      "Job-focused freshers and early-career professionals who need projects and interview preparation, not another badge.",
      "Self-taught learners who need a spine, human code review and a portfolio someone will actually read.",
    ],
    avoidIf: [
      "You need a vendor or university-branded credential above all else.",
      "Your budget is under ₹20,000.",
      "You cannot attend live IST sessions with any regularity.",
      "You want GenAI literacy rather than engineering capability.",
      "You are on a research pathway toward publications or a masters.",
    ],
    pros: [
      "All seven 2026 layers taught hands-on, including agents, MCP, evaluation and LLMOps — no other option here does all four.",
      "Python and ML foundations are inside the sequence, so beginners and non-tech switchers get a real onramp rather than a prerequisite wall.",
      "10–15 progressive projects with mandatory deployment produce a portfolio, not a certificate.",
      "Human code review instead of auto-grading, which is the only mechanism that catches bad retrieval and unsafe agents.",
      "GenAI-specific interview preparation and project-defence practice — the step almost every program on this list omits entirely.",
      "Live IST cohorts with doubt resolution and deferral options make it survivable alongside a full-time job.",
      "Continuous refresh keeps the syllabus tracking 2026 tooling rather than a 2023 snapshot [VERIFY refresh cadence].",
      "No bond and no income-share agreement; EMI without an outcome-linked contract.",
    ],
    cons: [
      "Brand recognition sits far below Microsoft, Google, AWS or Purdue in an HR keyword screen.",
      "No vendor status and no university affiliation, so it will not satisfy an employer who names a specific credential.",
      "Live IST scheduling excludes rotating shifts, heavy travel and busy on-call rotations.",
      "It is not the cheapest route to GenAI knowledge — free MOOCs plus one exam cost a fraction.",
      "Demands genuine weekly hours; there is no compressed version that still produces the portfolio.",
      "Wrong choice for research pathways and for leaders who will never build.",
      "Fees, duration, project count, placement scope and refund terms all need verification against the current page.",
      "Smaller cohort brand means fewer third-party reviews to triangulate than a large EdTech marketplace.",
    ],
    verdict: (
      <>
        <p>
          The highest capability ceiling on this list and the clearest answer to “what will I actually
          be able to build and defend?” for a learner who can commit to live structure. It wins on
          capability per rupee and per hour; it loses on logo recognition, and the honest move is to
          buy one recognised vendor exam alongside it.
        </p>
        <p>
          <strong>Two traps to avoid regardless of provider:</strong> starting an EMI on a program you
          later abandon, and buying an exam voucher before you are ready to sit it.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 9.5 },
      { label: "Certification credibility & recognition", score: 7.5 },
      { label: "Project & assessment rigour", score: 9.5 },
      { label: "Career scope & support", score: 9.0 },
      { label: "Eligibility, accessibility & format", score: 8.5 },
      { label: "Value for money", score: 9.2 },
    ],
    overall: 9.2,
    ceiling: "Level 4–5 (engineering capability → production ownership)",
    cta: {
      label: "Explore LogicMojo's Generative AI Course — curriculum, batches & projects",
      href: "https://logicmojo.com",
    },
  },

  /* ---------------------------------------------------------------- 2 */
  {
    rank: 2,
    medal: "🥈",
    name: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    tagline: "Best vendor engineering certification for enterprise and Azure-first teams",
    meta: [
      { label: "Issuer", value: "Microsoft" },
      { label: "Credential type", value: "Vendor role-based certification" },
      { label: "Assessment", value: "Proctored exam; 700 pass mark [VERIFY]" },
      { label: "Fees", value: "~$165 per attempt [VERIFY India pricing]" },
      { label: "Duration", value: "6–10 weeks of preparation" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              AI-102 is Microsoft's role-based certification for engineers building AI solutions on
              Azure — Azure OpenAI, Azure AI Search, Azure AI services, Azure AI Foundry and agent
              services [VERIFY current exam objectives].
            </p>
            <p>
              Its practical value in India is unusually concrete: Azure and Microsoft 365 dominate
              enterprise adoption, so this credential appears by name in job descriptions at GCCs, IT
              services firms and enterprise IT teams. It is the closest thing this category has to a
              recognised engineering exam.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              Proctored exam delivered online or at a test centre, scaled scoring with a 700 pass mark
              [VERIFY]. Successful candidates receive a Credly badge and a verifiable credential ID
              that HR systems and ATS filters can read.
            </p>
            <p>
              Renewal is annual through a free online assessment on Microsoft Learn [VERIFY current
              policy]. That is light admin, but it is admin — and it lapses quietly if you ignore the
              reminder.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              Exam objectives cover planning and managing Azure AI solutions, generative AI solutions
              with Azure OpenAI and AI Foundry, RAG with Azure AI Search, agents on Azure, computer
              vision, natural language processing, document intelligence and responsible AI [VERIFY
              current objective weightings].
            </p>
            <p>
              <strong>Depth verdict:</strong> strong on Azure GenAI services and RAG patterns as
              Microsoft implements them. LangChain, fine-tuning and agent frameworks appear only
              through Azure's own tooling — Semantic Kernel and Azure AI Agent Service — and there are
              no graded projects at all.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Self-study through Microsoft Learn paths, with optional instructor-led courses via
              partners and sandbox labs. The free material is genuinely good and unusually complete
              for a vendor.
            </p>
            <p>
              There is no mentor, no cohort and no code review. You supply all the structure, which is
              fine for a disciplined engineer and fatal for someone who has abandoned two courses
              already.
            </p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>
              Labs, not portfolio projects. They teach the service surface efficiently and produce
              nothing a hiring manager can inspect.
            </p>
            <p>
              Treat portfolio work as a separate, parallel commitment: at minimum one deployed RAG
              application on Azure AI Search with an evaluation set, documented well enough to walk
              through in an interview.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              Roughly $165 per attempt [VERIFY India pricing and any current discount programmes].
              Preparation typically takes a working engineer 6–10 weeks alongside a job.
            </p>
            <p>
              Python or C# and existing Azure familiarity are strongly recommended. There is no formal
              prerequisite, which is precisely why unprepared candidates burn vouchers on it.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              Very high recognition in Azure-heavy organisations, and the single easiest credential to
              justify to a manager who controls a training budget.
            </p>
            <p>
              It reads as <strong>platform competence</strong>, not as system-design capability. An
              interviewer who asks how you would evaluate retrieval faithfulness will not accept the
              badge as the answer.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>
              None from Microsoft — vendor exams never provide career services, and any third party
              implying otherwise is selling something else.
            </p>
            <p>
              Strong relevance for Azure AI engineer, cloud AI engineer and IT-services GenAI practice
              roles, and a reliable internal-mobility signal inside Microsoft-standardised employers.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Engineers inside Azure-standardised organisations, where the credential is named in internal role definitions.",
      "IT-services professionals whose clients run Microsoft stacks.",
      "Anyone pairing a recognised credential with a build-focused program to cover both hiring gates.",
      "Cloud engineers adding a GenAI specialisation without changing platforms.",
    ],
    avoidIf: [
      "Your target employers are not on Azure.",
      "You have no coding background at all.",
      "You expect the exam to teach LangChain, fine-tuning or agents in depth.",
      "You have no portfolio and are hoping the badge substitutes for one.",
    ],
    pros: [
      "The most employer-recognised GenAI engineering exam in enterprise India.",
      "Named directly in job descriptions, which makes it a genuine ATS keyword rather than a hopeful one.",
      "Solid coverage of Azure OpenAI, Azure AI Search retrieval patterns, content safety and agent services.",
      "Credly badge plus a verifiable credential ID that HR systems understand.",
      "Microsoft Learn preparation material is free, thorough and kept current.",
      "Excellent cost-to-recognition ratio at roughly $165 [VERIFY].",
      "Renewal is a free online assessment rather than a repeat exam fee [VERIFY].",
    ],
    cons: [
      "Tests platform services rather than framework engineering — LangChain and LangGraph barely feature.",
      "Passable by drilling question banks, so it predicts capability imperfectly.",
      "Produces no portfolio artefact whatsoever.",
      "Fine-tuning and agent depth are shallow against 2026 interview expectations.",
      "Annual renewal admin that lapses easily if ignored [VERIFY policy].",
      "Value drops sharply outside Azure environments.",
      "No mentorship, cohort, accountability or human feedback of any kind.",
    ],
    verdict: (
      <>
        <p>
          The strongest recognition-per-rupee purchase on this list for anyone in the Microsoft
          ecosystem, and a weak standalone answer to “can you build this?”. Buy it for the HR screen
          and the internal signal, then spend your evenings building the projects it does not ask you
          to build.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 7.5 },
      { label: "Certification credibility & recognition", score: 9.5 },
      { label: "Project & assessment rigour", score: 6.5 },
      { label: "Career scope & support", score: 7.5 },
      { label: "Eligibility, accessibility & format", score: 8.5 },
      { label: "Value for money", score: 9.0 },
    ],
    overall: 8.4,
    ceiling: "Level 2–3 (applied knowledge → platform competence)",
    cta: {
      label: "Review the AI-102 exam guide",
      href: "https://learn.microsoft.com/credentials/certifications/azure-ai-engineer/",
    },
  },

  /* ---------------------------------------------------------------- 3 */
  {
    rank: 3,
    medal: "🥉",
    name: "DeepLearning.AI × AWS — Generative AI with Large Language Models (Coursera)",
    tagline: "Best LLM fundamentals at near-zero cost",
    meta: [
      { label: "Issuer", value: "DeepLearning.AI with AWS, via Coursera" },
      { label: "Credential type", value: "MOOC course certificate" },
      { label: "Assessment", value: "Graded quizzes + auto-graded labs" },
      { label: "Fees", value: "Free to audit; ~₹3–4K/month for the certificate [VERIFY]" },
      { label: "Duration", value: "3–4 weeks" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              A tightly focused course from Andrew Ng's DeepLearning.AI with AWS, covering the LLM
              lifecycle end to end: pre-training, prompting, instruction fine-tuning, PEFT/LoRA, RLHF,
              evaluation and deployment considerations, with hands-on labs on AWS SageMaker [VERIFY
              current labs].
            </p>
            <p>
              It is, at any price, the clearest available explanation of how large language models are
              trained and adapted. It is also explicitly a foundations course rather than a career
              program, and it never pretends otherwise — refreshing in this category.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              A Coursera course certificate issued on completing graded quizzes and labs, verifiable
              by link, with no expiry. The learning is free to audit; the certificate requires a
              subscription [VERIFY current pricing].
            </p>
            <p>
              Certification-literacy note: this is a <strong>certificate of completion with graded
              components</strong>, not a proctored credential. It signals knowledge acquired, and
              recruiters read it that way.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              Transformer architecture, prompting and in-context learning, generative configuration
              parameters, instruction fine-tuning, PEFT (LoRA and soft prompts), RLHF, evaluation
              metrics, model optimisation for deployment, and RAG and agents at concept level
              [VERIFY].
            </p>
            <p>
              <strong>Depth verdict:</strong> deep on LLM internals and fine-tuning theory — the best
              on this list for the money. Shallow on RAG engineering, with no LangChain, no agent
              frameworks and no MLOps pipeline.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Fully self-paced with excellent production quality and instructors who explain rather
              than perform. Support is forum-only.
            </p>
            <p>
              Three to four weeks is short enough that most motivated learners finish, which is the
              quiet reason it outperforms far more expensive self-paced programs.
            </p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>
              Three labs — dialogue summarisation, PEFT fine-tuning, and RLHF — that are instructive
              and identical for every learner who takes the course.
            </p>
            <p>
              They are not portfolio pieces. Extend one into original work with your own dataset and
              evaluation set if you want anything showable from it.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              Free to audit, roughly ₹3–4K per month for the certificate [VERIFY]. Three to four weeks
              at a few hours a week.
            </p>
            <p>
              Python and basic machine learning are genuinely required — this is the one course here
              where the stated prerequisite is not marketing softness.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              The DeepLearning.AI name is well recognised among technical readers and carries real
              respect with ML-literate hiring managers.
            </p>
            <p>
              As a credential it reads as <strong>knowledge, not build capability</strong>, and it will
              not clear an HR filter that is looking for a vendor or university tag.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>None. There is no career service, mentor, portfolio review or interview preparation.</p>
            <p>
              Its correct role is as a <strong>supplement</strong>: three weeks here before any paid
              program or vendor exam makes everything after it easier and cheaper.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Developers who already know Python and basic ML and want the underlying mechanics.",
      "Learners who want to understand fine-tuning before paying for anything.",
      "Professionals supplementing a project-based program or vendor-exam preparation.",
      "Anyone testing whether they genuinely enjoy this work before committing money.",
    ],
    avoidIf: [
      "You need external structure or accountability to finish things.",
      "You are a beginner without Python.",
      "You want RAG, LangChain or agents taught hands-on.",
      "You need career support or a credential that clears HR filters.",
    ],
    pros: [
      "The clearest explanation of LLM training, scaling, instruction tuning, PEFT and RLHF at any price point.",
      "Free to audit, so the knowledge has effectively zero financial risk.",
      "Three real labs on AWS infrastructure rather than slideware.",
      "Short enough (3–4 weeks) that completion rates are realistic.",
      "Outstanding preparation before a vendor exam or an engineering program.",
      "Makes no career claims it cannot keep.",
      "Verifiable certificate with no expiry and no renewal cost.",
    ],
    cons: [
      "No LangChain, no agents, no MCP, no deployment — foundations only.",
      "RAG coverage is thin relative to what interviews actually probe.",
      "Auto-graded only; nobody reviews your code or your judgement.",
      "Labs are identical across thousands of learners, so they carry no portfolio value.",
      "Weak as a standalone resume credential.",
      "Assumes Python and ML, which quietly excludes true beginners.",
      "Subscription pricing means a slow learner pays more than a fast one.",
    ],
    verdict: (
      <>
        <p>
          The best three weeks you can spend understanding how LLMs actually work, and an incomplete
          answer to “how do I get a GenAI job”. Do it first, do it cheaply, and do not mistake
          finishing it for being job-ready.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 8.0 },
      { label: "Certification credibility & recognition", score: 7.0 },
      { label: "Project & assessment rigour", score: 6.0 },
      { label: "Career scope & support", score: 5.0 },
      { label: "Eligibility, accessibility & format", score: 8.5 },
      { label: "Value for money", score: 9.8 },
    ],
    overall: 8.2,
    ceiling: "Level 2–3 (applied knowledge of model internals)",
    cta: {
      label: "Start Generative AI with LLMs (free to audit)",
      href: "https://www.coursera.org/learn/generative-ai-with-llms",
    },
  },

  /* ---------------------------------------------------------------- 4 */
  {
    rank: 4,
    name: "IBM Generative AI Engineering Professional Certificate (Coursera)",
    tagline: "Best low-cost applied GenAI engineering track",
    meta: [
      { label: "Issuer", value: "IBM, via Coursera" },
      { label: "Credential type", value: "MOOC professional certificate" },
      { label: "Assessment", value: "Graded labs, quizzes and a capstone" },
      { label: "Fees", value: "Free to audit; ~₹3–4K/month [VERIFY]" },
      { label: "Duration", value: "4–6 months at a few hours a week" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              A multi-course professional certificate designed to take a Python-literate learner from
              GenAI foundations to building LLM applications: prompt engineering, Hugging Face,
              PyTorch, transformers, RAG, LangChain and a capstone [VERIFY current course list].
            </p>
            <p>
              It is more implementation-oriented than the DeepLearning.AI course, dramatically cheaper
              than any Indian premium program, and carries a corporate name that registers in
              enterprise and IT-services contexts.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              An IBM-branded Coursera professional certificate, verifiable by link, with no expiry.
              Earned by completing the constituent courses, graded labs and the capstone [VERIFY exact
              requirements].
            </p>
            <p>
              Again: completion-plus-grading, not proctored assessment. The IBM name does more work in
              an HR screen than the assessment method does in a technical round.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              GenAI introduction, prompt engineering, Python for GenAI, data preparation, transformers
              and generative models with PyTorch, fine-tuning transformers, advanced fine-tuning
              (RLHF/DPO concepts), RAG and LangChain, AI agents in current versions, and a capstone
              [VERIFY].
            </p>
            <p>
              <strong>Depth verdict:</strong> strong applied breadth for the price, moderate depth per
              topic. Evaluation, LLMOps and deployment are touched rather than taught, and agent and
              MCP coverage is light against 2026 expectations.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Self-paced with cloud lab environments, so you write and run code rather than watch
              someone else do it. No live sessions, mentors or code review.
            </p>
            <p>
              The length is the real risk: 4–6 months of unsupervised self-pacing is where most
              learners quietly stop, and the subscription keeps billing while they do.
            </p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>
              Eight to twelve guided labs plus a capstone [VERIFY]. You finish with working code, which
              is more than most cheap tracks deliver.
            </p>
            <p>
              Because the labs are guided, thousands of portfolios look identical. Extend the capstone
              with your own data, your own evaluation set and a deployment, or it will not survive a
              technical conversation.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              Free to audit; roughly ₹3–4K per month for the certificate [VERIFY]. Realistically 4–6
              months at a few hours a week — so the true cost depends entirely on your pace.
            </p>
            <p>Python is required. There is no ML prerequisite beyond basic comfort with code.</p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              A recognised corporate name that reads well in Indian enterprise and IT-services
              screens, and moderate signal value overall.
            </p>
            <p>
              Its weight rises materially if you extend and publish the capstone — the certificate
              plus a genuinely original deployed project is a different proposition from the
              certificate alone.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>None provided. No resume review, no interview preparation, no placement assistance.</p>
            <p>
              Best suited to budget-constrained developers and data professionals who will do their own
              applications, referrals and interview practice.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Learners who already code and want structured applied practice on a tight budget.",
      "Professionals in organisations where IBM branding registers with HR and L&D.",
      "Developers self-building a portfolio who need a curriculum spine, not mentorship.",
      "Anyone wanting broad hands-on coverage before deciding whether to pay for a live program.",
    ],
    avoidIf: [
      "You are a complete beginner without Python.",
      "You need mentorship or accountability to finish a long program.",
      "You want placement support or interview preparation.",
      "You need agents, MCP and deployment taught in depth.",
    ],
    pros: [
      "Broad applied coverage: LLMs, prompt engineering, embeddings, RAG, LangChain and a capstone.",
      "8–12 guided labs mean you finish with running code rather than notes.",
      "The IBM name carries reasonable weight in Indian and global HR screens.",
      "Exceptional cost-to-content ratio if you actually finish it.",
      "Free to audit, so you can test the first course before paying anything.",
      "Cloud labs remove local environment setup as a barrier.",
      "No expiry and a verifiable credential link.",
    ],
    cons: [
      "Guided labs are closer to following instructions than engineering decisions.",
      "Portfolios produced by it look near-identical across thousands of learners.",
      "Agents, MCP and LLMOps are light for 2026 hiring expectations.",
      "No human feedback, interview preparation or career support.",
      "Long duration on monthly billing quietly compounds the cost.",
      "Completion rates for self-paced multi-course certificates are low in practice.",
      "Course list and structure change between cohorts, so verify the current contents.",
    ],
    verdict: (
      <>
        <p>
          The best applied-practice value on this list for someone who already codes and can
          self-motivate. Its ceiling is set not by the content but by whether you extend the capstone
          into something original — do that and it punches well above its price.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 7.5 },
      { label: "Certification credibility & recognition", score: 7.0 },
      { label: "Project & assessment rigour", score: 6.5 },
      { label: "Career scope & support", score: 5.0 },
      { label: "Eligibility, accessibility & format", score: 8.0 },
      { label: "Value for money", score: 9.5 },
    ],
    overall: 7.9,
    ceiling: "Level 2–3 (applied knowledge → guided builds)",
    cta: {
      label: "Explore IBM's GenAI Engineering Professional Certificate",
      href: "https://www.coursera.org/professional-certificates/ibm-generative-ai-engineering",
    },
  },

  /* ---------------------------------------------------------------- 5 */
  {
    rank: 5,
    name: "Google Cloud Generative AI Leader Certification",
    tagline: "Best leadership and business-level GenAI credential",
    meta: [
      { label: "Issuer", value: "Google Cloud" },
      { label: "Credential type", value: "Vendor foundational certification" },
      { label: "Assessment", value: "Proctored exam" },
      { label: "Fees", value: "~$99 [VERIFY]" },
      { label: "Duration", value: "3–6 weeks of preparation" },
      { label: "Capability ceiling", value: "Level 1–2" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              Google Cloud's foundational certification for business leaders, product managers,
              consultants and technical leads who must scope, evaluate and govern GenAI initiatives
              rather than build them.
            </p>
            <p>
              It covers GenAI concepts, Google Cloud's GenAI offerings (Gemini, Vertex AI, agent
              tooling), business value, responsible AI and adoption strategy [VERIFY current exam
              guide]. It is one of the few credentials in this category that is honestly scoped.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              Proctored exam with a Credly badge and a verifiable credential, renewable every three
              years [VERIFY current validity period].
            </p>
            <p>
              This is a genuine assessed certification — the body's name is on it — but it assesses
              literacy and judgement, not engineering. Third-party trainers routinely blur that line;
              do not let them.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              GenAI fundamentals, foundation models and LLM concepts, prompting techniques, RAG and
              grounding at concept level, agents at concept level, Google Cloud GenAI products,
              responsible AI and business strategy.
            </p>
            <p>
              <strong>Depth verdict:</strong> an excellent conceptual map of the whole stack and zero
              engineering — by design. Nobody writes code to pass this exam.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Self-study through Google Cloud Skills Boost learning paths, which are free or
              low-cost and well structured for the exam.
            </p>
            <p>No mentorship, cohort or feedback loop — and for a three-to-six-week literacy credential, none is needed.</p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>None. There is no lab requirement and no artefact.</p>
            <p>
              If your role includes any building at all, this credential will not evidence it. Pair it
              with a small demonstrable project even as a non-engineer — a prompt-evaluated internal
              tool is enough to show judgement.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              Roughly $99 [VERIFY]. Three to six weeks of part-time preparation is typical, and there
              are no prerequisites.
            </p>
            <p>
              The lack of prerequisites is the point: it is achievable for PMs, consultants, sales
              engineers and domain professionals with no coding background.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              High brand recognition with HR teams and leadership. It signals GenAI literacy and
              readiness to lead adoption conversations.
            </p>
            <p>
              It signals nothing about engineering capability, and buying it as a route into a GenAI
              engineer role is one of the most common expensive mistakes in this category.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>None from Google Cloud.</p>
            <p>
              Relevant for AI product manager, consultant, solutions and leadership roles, and useful
              internally when you need to be trusted with GenAI budget decisions.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Managers, product managers, consultants and domain professionals who fund or govern GenAI work.",
      "Engineers who want a fast, recognised literacy credential before a deeper program.",
      "Teams standardising on Google Cloud who need shared vocabulary.",
      "Non-technical professionals who need a credible first credential without learning Python.",
    ],
    avoidIf: [
      "You are targeting GenAI engineer or ML engineer roles.",
      "You expect hands-on RAG, LangChain or fine-tuning content.",
      "You already hold an engineering-level credential.",
      "You need portfolio evidence rather than vocabulary.",
    ],
    pros: [
      "A rare credential designed honestly for non-builders: strategy, use-case selection, governance and value.",
      "Very high Google Cloud brand recognition with HR and leadership audiences.",
      "No coding prerequisite, so it is genuinely achievable for business roles.",
      "Cheap and fast relative to what it signals in a management context.",
      "Free Skills Boost preparation paths that map directly to the exam guide.",
      "Proctored and verifiable, unlike most 'leadership AI' certificates.",
      "Gives non-engineers the vocabulary to evaluate vendor claims and internal proposals.",
    ],
    cons: [
      "Not an engineering credential and will not survive a technical round.",
      "Conceptual only: no RAG implementation, no frameworks, no projects.",
      "Google Cloud product framing makes some content less portable across clouds.",
      "Three-year renewal cycle [VERIFY].",
      "Frequently mis-sold by third-party trainers as a route into GenAI engineering roles.",
      "Adds little for anyone who already holds a deeper credential.",
      "Zero career support, portfolio review or interview preparation.",
    ],
    verdict: (
      <>
        <p>
          The right credential for the people who fund, scope and govern GenAI projects, and the wrong
          one for the people who build them. Judged against its own stated purpose it is one of the
          best-value certifications here.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 6.0 },
      { label: "Certification credibility & recognition", score: 9.0 },
      { label: "Project & assessment rigour", score: 5.0 },
      { label: "Career scope & support", score: 5.5 },
      { label: "Eligibility, accessibility & format", score: 9.5 },
      { label: "Value for money", score: 9.0 },
    ],
    overall: 7.6,
    ceiling: "Level 1–2 (literacy → informed leadership)",
    cta: {
      label: "Review the Generative AI Leader exam guide",
      href: "https://cloud.google.com/learn/certification/generative-ai-leader",
    },
  },

  /* ---------------------------------------------------------------- 6 */
  {
    rank: 6,
    name: "AWS Certified AI Practitioner (AIF-C01)",
    tagline: "Best entry-level vendor certification for AWS-centric roles and non-engineers",
    meta: [
      { label: "Issuer", value: "Amazon Web Services" },
      { label: "Credential type", value: "Vendor foundational certification" },
      { label: "Assessment", value: "Proctored exam" },
      { label: "Fees", value: "~$100 [VERIFY]" },
      { label: "Duration", value: "4–6 weeks of preparation" },
      { label: "Capability ceiling", value: "Level 1–2" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              AWS's foundational AI, ML and generative AI certification, covering AI/ML fundamentals,
              foundation-model applications, responsible AI, and security and governance on AWS
              (Bedrock, SageMaker, Amazon Q).
            </p>
            <p>
              It is deliberately broad rather than deep, aimed at practitioners, business roles and
              early-career technologists. AWS also maintains a higher-level GenAI developer
              certification track for engineers [VERIFY: current name, availability and status] —
              treat AIF-C01 as the entry rung of that ladder, not its top.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              Proctored exam, Credly badge, three-year validity [VERIFY]. Verifiable by credential ID,
              which matters for enterprise HR and partner-status requirements.
            </p>
            <p>
              A properly assessed certification whose assessed content is literacy — an important pair
              of facts to keep together when reading how it is marketed.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              AI and ML fundamentals, GenAI fundamentals, foundation-model applications (prompting, RAG
              concepts and agent concepts on Bedrock), responsible AI, plus security and governance
              [VERIFY current domain weightings].
            </p>
            <p>
              <strong>Depth verdict:</strong> good conceptual breadth, no coding, no LangChain, minimal
              fine-tuning, agents at concept level only.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Self-study through AWS Skill Builder, which has a solid free tier plus paid practice
              exams [VERIFY current access model].
            </p>
            <p>No mentorship, no cohort, no feedback — standard for a vendor foundational exam.</p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>None required or produced.</p>
            <p>
              If you want AWS-flavoured portfolio evidence, build a small Bedrock RAG application with
              an evaluation set alongside your preparation; the exam will not ask for it but every
              interviewer will.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              Roughly $100 [VERIFY], with no prerequisites and typically four to six weeks of
              part-time preparation.
            </p>
            <p>
              Cheap enough that many employers approve it without a business case, which is a
              legitimate reason to choose it as a first credential.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              Very high brand recognition. Recruiters and ATS filters recognise AWS credentials
              instantly, and it clears literacy-level screens comfortably.
            </p>
            <p>
              It reads as <strong>foundational literacy</strong>. Anyone selling it as a GenAI job
              ticket is misrepresenting what AWS itself says about it.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>None from AWS.</p>
            <p>
              Genuinely useful for cloud-adjacent roles, pre-sales, analysts, QA and beginners
              establishing a first recognised credential before committing to a deeper path.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Beginners who want a recognised first credential quickly and cheaply.",
      "Professionals inside AWS-centric organisations, including partner-status contexts.",
      "Non-engineers — pre-sales, analysts, QA, operations — who need credible AI vocabulary.",
      "Learners planning to progress to a build-focused program afterwards.",
    ],
    avoidIf: [
      "You need an engineering signal for a GenAI engineer role.",
      "You already code and want depth rather than breadth.",
      "You expect it alone to change your hiring outcomes.",
      "Your organisation runs on a different cloud entirely.",
    ],
    pros: [
      "Accessible first vendor credential with real brand weight and no coding requirement.",
      "Cheap enough (~$100) to be approved by most training budgets without a business case.",
      "Good conceptual grounding in Bedrock, prompt patterns and responsible AI.",
      "Credly badge recruiters recognise instantly, verifiable by credential ID.",
      "Useful in AWS partner-status and pre-sales contexts, which have concrete commercial value.",
      "Free Skill Builder material covers most of the exam blueprint.",
      "A sensible on-ramp to AWS's higher engineering certifications [VERIFY current track].",
    ],
    cons: [
      "Foundational by design — it does not demonstrate engineering capability.",
      "No projects, no frameworks, no meaningful fine-tuning content.",
      "Agents and RAG appear only as concepts, which 2026 interviews will not accept.",
      "Three-year renewal cycle with a repeat exam fee [VERIFY].",
      "Frequently bought as a 'GenAI job ticket', which it is not.",
      "AWS-specific framing limits portability of some content.",
      "No career support of any kind.",
    ],
    verdict: (
      <>
        <p>
          A credible, inexpensive first rung — not a destination. If it is your first purchase in this
          category, that is a reasonable decision; if it is your third badge and you still have no
          deployed project, the badges are the problem.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 5.5 },
      { label: "Certification credibility & recognition", score: 9.0 },
      { label: "Project & assessment rigour", score: 5.0 },
      { label: "Career scope & support", score: 5.0 },
      { label: "Eligibility, accessibility & format", score: 9.5 },
      { label: "Value for money", score: 8.8 },
    ],
    overall: 7.4,
    ceiling: "Level 1–2 (literacy → cloud-adjacent competence)",
    cta: {
      label: "Review the AWS AI Practitioner exam guide",
      href: "https://aws.amazon.com/certification/certified-ai-practitioner/",
    },
  },

  /* ---------------------------------------------------------------- 7 */
  {
    rank: 7,
    name: "NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)",
    tagline: "Best technically focused LLM associate exam",
    meta: [
      { label: "Issuer", value: "NVIDIA" },
      { label: "Credential type", value: "Vendor associate certification" },
      { label: "Assessment", value: "Proctored online exam" },
      { label: "Fees", value: "~$135 [VERIFY]" },
      { label: "Duration", value: "4–8 weeks of preparation" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              NVIDIA's associate-level exam validating foundational knowledge of LLMs and generative
              AI: transformer architecture, data preparation, training and fine-tuning concepts, prompt
              engineering, RAG concepts, deployment and optimisation with the NVIDIA stack (NeMo,
              TensorRT-LLM, Triton) and trustworthy AI [VERIFY current blueprint].
            </p>
            <p>
              It is noticeably more technical than the Google and AWS foundational exams — closer to
              testing whether you understand the machinery than whether you know the product names.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              Proctored online exam with a two-year validity period [VERIFY]. Verifiable digital
              credential.
            </p>
            <p>
              Positioned as associate level, which is accurate: it tests understanding rather than
              production experience, and NVIDIA does not claim otherwise.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              Core ML and neural-network concepts, LLM architecture, experimentation and data handling,
              prompt engineering, alignment and fine-tuning concepts, RAG, software development and
              deployment, trustworthy AI, plus Python and NVIDIA libraries at awareness level.
            </p>
            <p>
              <strong>Depth verdict:</strong> strong technical concept coverage — the most demanding
              conceptual exam on this list — with no LangChain, no agent frameworks and no projects.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Self-study, with NVIDIA Deep Learning Institute courses recommended [VERIFY cost and
              which are free]. Preparation material is thinner and more scattered than for AWS or
              Microsoft exams.
            </p>
            <p>No mentorship or cohort structure.</p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>None.</p>
            <p>
              The natural companion project is a fine-tuning run on an open-weight model benchmarked
              against the base model — it maps directly onto the exam content and gives you something
              to discuss.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              Roughly $135 [VERIFY]. Four to eight weeks of preparation, and Python plus ML basics are
              genuinely assumed.
            </p>
            <p>
              Beginners who buy this voucher early almost always waste it; the exam does not reward
              memorising product sheets.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              Respected by ML-literate hiring managers, particularly in teams working near GPUs, NeMo
              and inference optimisation.
            </p>
            <p>
              Less known to generalist HR than AWS, Microsoft or Google credentials, so its signal
              lands with the technical reader rather than the screener.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>None from NVIDIA.</p>
            <p>
              Relevant for ML engineers, GenAI engineers and infrastructure-leaning roles where
              serving cost and throughput are real constraints.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Technically inclined learners who want an exam that tests real LLM understanding.",
      "ML practitioners adding an explicit LLM credential to an existing ML profile.",
      "Engineers deploying on NVIDIA infrastructure or optimising inference.",
      "Anyone who wants a credential that impresses the technical interviewer rather than the ATS.",
    ],
    avoidIf: [
      "You are a beginner without Python and ML basics.",
      "You want a widely recognised HR-filter badge.",
      "You expect hands-on projects or guided builds.",
      "You need orchestration and agent skills, which it does not cover.",
    ],
    pros: [
      "More technically demanding than the practitioner-level exams — transformers, training and data handling.",
      "Strong credibility signal with ML-literate hiring managers and GPU-adjacent teams.",
      "Covers deployment and optimisation, which most foundational exams skip entirely.",
      "NVIDIA's brand is highly credible in AI engineering circles.",
      "DLI preparation courses are genuinely instructive rather than exam-cram material.",
      "Reasonable fee (~$135) for the technical depth assessed [VERIFY].",
      "Maps cleanly onto a fine-tuning portfolio project.",
    ],
    cons: [
      "No projects and no orchestration or agent coverage — you finish with a badge, not a build.",
      "Content is flavoured toward the NVIDIA stack (NeMo, TensorRT-LLM, Triton).",
      "Two-year renewal cycle [VERIFY].",
      "Preparation resources are thinner and more scattered than for AWS or Microsoft.",
      "Lower recognition among generalist recruiters and HR systems.",
      "Assumes Python and ML, so it is inaccessible as a first credential.",
      "No career services, mentorship or feedback.",
    ],
    verdict: (
      <>
        <p>
          The most technically honest associate exam here — it is hard to pass without understanding
          the material. It still needs a portfolio beside it, because no exam asks you to defend a
          design decision.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 7.5 },
      { label: "Certification credibility & recognition", score: 7.5 },
      { label: "Project & assessment rigour", score: 6.0 },
      { label: "Career scope & support", score: 5.0 },
      { label: "Eligibility, accessibility & format", score: 7.5 },
      { label: "Value for money", score: 8.0 },
    ],
    overall: 7.3,
    ceiling: "Level 2–3 (technical concept mastery)",
    cta: {
      label: "Review the NCA-GENL exam blueprint",
      href: "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
    },
  },

  /* ---------------------------------------------------------------- 8 */
  {
    rank: 8,
    name: "Databricks Certified Generative AI Engineer Associate",
    tagline: "Best RAG and LLM-application certification for data-platform engineers",
    meta: [
      { label: "Issuer", value: "Databricks" },
      { label: "Credential type", value: "Vendor associate certification" },
      { label: "Assessment", value: "Proctored exam" },
      { label: "Fees", value: "~$200 [VERIFY]" },
      { label: "Duration", value: "6–8 weeks of preparation" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              Databricks' certification for engineers building LLM applications on the Databricks
              platform: designing RAG pipelines, preparing data for retrieval, chunking and embedding,
              vector search, prompt design, evaluating and monitoring LLM applications, deploying with
              MLflow and Model Serving, and governance [VERIFY exam objectives].
            </p>
            <p>
              It is the most <strong>RAG-centric exam on this list</strong>, which matters because RAG
              is also the most-tested topic in GenAI interviews.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              Proctored exam with two-year validity [VERIFY]. Verifiable badge, well recognised inside
              the Databricks partner and customer ecosystem.
            </p>
            <p>
              Assessment is multiple-choice rather than project-based, so it tests judgement about
              retrieval design rather than your implementation of it.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              Designing applications, data preparation and chunking, application development
              (prompting, chains, retrieval, agents), assembling and deploying with Databricks tooling,
              governance, evaluation and monitoring.
            </p>
            <p>
              <strong>Depth verdict:</strong> deep on RAG and evaluation, working-knowledge level on
              LangChain and agents, moderate on fine-tuning, and platform-locked throughout.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Self-study via Databricks Academy, with free and paid paths [VERIFY current access]. No
              mentorship or cohort.
            </p>
            <p>
              Meaningful practice requires workspace access, which is easy inside a customer
              organisation and awkward for an individual learner.
            </p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>None graded, and practice depends on having a workspace.</p>
            <p>
              If you have access through work, build the RAG pipeline the exam describes and keep the
              evaluation results — that combination is a strong interview artefact for data-platform
              roles.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              Roughly $200 [VERIFY] — the highest exam fee here. Six to eight weeks of preparation, with
              Python and Databricks familiarity assumed.
            </p>
            <p>Factor in compute costs for practice if you are not using an employer workspace.</p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              High inside data-platform and enterprise data teams, and increasingly named in lakehouse
              GenAI job descriptions.
            </p>
            <p>Moderate elsewhere: outside Databricks shops, the platform specificity dilutes the signal.</p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>None from Databricks.</p>
            <p>
              Strong for data engineers and analytics engineers moving into GenAI inside lakehouse-based
              organisations — often the fastest internal route into GenAI work.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Data engineers and analytics engineers already working on Databricks.",
      "Enterprise teams building RAG on governed data with Unity Catalog.",
      "Engineers who want a credential focused specifically on retrieval design.",
      "Professionals seeking an internal move into GenAI from a data platform role.",
    ],
    avoidIf: [
      "Your organisation does not use Databricks.",
      "You are a beginner without Python.",
      "You want fine-tuning or agent-framework depth.",
      "You need a portfolio more than a badge.",
    ],
    pros: [
      "The most RAG-centric vendor exam available — retrieval design, chunking, evaluation and governance.",
      "Evaluation and monitoring are assessed seriously, which almost no other exam here does.",
      "Excellent fit and internal recognition if your organisation runs Databricks or Unity Catalog.",
      "Reads as a genuine engineering signal for data-platform GenAI roles.",
      "Covers deployment concepts (MLflow, Model Serving) that other exams skip.",
      "Directly relevant to the highest-frequency GenAI interview topic.",
      "Growing presence in lakehouse-oriented job descriptions.",
    ],
    cons: [
      "Tightly coupled to the Databricks platform, so less portable than framework skills.",
      "Highest exam fee on this list (~$200) plus practice compute costs [VERIFY].",
      "No graded projects; self-practice requires workspace access.",
      "Agent and fine-tuning coverage is working-knowledge only.",
      "Two-year renewal cycle [VERIFY].",
      "Recognition drops sharply outside Databricks customers and partners.",
      "No mentorship, cohort or career support.",
    ],
    verdict: (
      <>
        <p>
          The best exam for proving RAG engineering judgement — within one ecosystem. If your employer
          runs Databricks, it is arguably the highest-value exam here; if not, its price and platform
          lock-in are hard to justify.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 7.8 },
      { label: "Certification credibility & recognition", score: 7.5 },
      { label: "Project & assessment rigour", score: 6.5 },
      { label: "Career scope & support", score: 5.5 },
      { label: "Eligibility, accessibility & format", score: 6.5 },
      { label: "Value for money", score: 7.0 },
    ],
    overall: 7.2,
    ceiling: "Level 2–3 (platform RAG engineering)",
    cta: {
      label: "Review the Databricks GenAI Engineer exam guide",
      href: "https://www.databricks.com/learn/certification/generative-ai-engineer-associate",
    },
  },

  /* ---------------------------------------------------------------- 9 */
  {
    rank: 9,
    name: "Purdue University × Simplilearn — Applied Generative AI Specialization",
    tagline: "Best university-branded GenAI program for corporate and employer-funded learners",
    meta: [
      { label: "Issuer", value: "Purdue University branding, Simplilearn delivery" },
      { label: "Credential type", value: "University-branded certificate" },
      { label: "Assessment", value: "Assignments + capstone [VERIFY]" },
      { label: "Fees", value: "₹1–2L [VERIFY]; EMI and frequent promotions" },
      { label: "Duration", value: "4–6 months" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              A Purdue-branded, Simplilearn-delivered applied GenAI program covering GenAI
              foundations, prompt engineering, LLMs, RAG, LangChain, fine-tuning, agents and applied
              use cases, with a capstone [VERIFY current curriculum and exact program name].
            </p>
            <p>
              Its real advantage is <strong>corporate legitimacy</strong>: it is commonly
              employer-reimbursed in India and the certificate is familiar to HR and L&amp;D teams
              making internal-mobility decisions.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              A Purdue-branded certificate issued on completing assignments and the capstone [VERIFY
              issuance criteria], with no expiry.
            </p>
            <p>
              Be precise about what the branding means: the university lends its name and often
              masterclasses; the delivery, grading and support are Simplilearn's. Ask who teaches each
              module before paying.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              GenAI and LLM fundamentals, prompt engineering, RAG and vector databases, LangChain,
              fine-tuning basics, an agents introduction, multi-modal models, responsible AI and
              applied projects [VERIFY].
            </p>
            <p>
              <strong>Depth verdict:</strong> broad and industry-oriented with moderate depth,
              optimised for completion rather than engineering rigour. Agents, MCP and production
              evaluation are not deep components.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Self-paced core content plus live masterclasses — it is important to be clear that this is{" "}
              <strong>not a fully live program</strong>. Support is forum and ticket based, with limited
              personal mentorship.
            </p>
            <p>
              For a professional who wants deadlines without a fixed weekly class, this hybrid is a
              genuine fit. For someone who needs a mentor to look at their code, it is not.
            </p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>Five to eight guided projects plus a capstone [VERIFY], with limited code review.</p>
            <p>
              The projects are largely templated, so portfolios look similar across learners. Deployment
              is not a consistent requirement, which weakens the output relative to project-graded
              programs.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              ₹1–2L [VERIFY], with EMI and frequent promotional pricing. Four to six months, with basic
              programming helpful but not strictly required.
            </p>
            <p>
              The promotional cadence is worth noting calmly: if the price changes weekly, the list
              price is not the price, and there is no reason to buy under time pressure.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              High for HR screens and internal promotion committees — a recognisable university name on
              a formal certificate does specific work in those settings.
            </p>
            <p>
              Moderate as an engineering signal. A technical interviewer will move past the brand
              within two questions.
            </p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>
              Career services, resume support and a job board [VERIFY current inclusions] — assistance,
              not a guarantee.
            </p>
            <p>
              Ask the five placement questions in writing here as everywhere else: percentage of
              enrolled learners, time window, median salary, whether roles were GenAI-specific, and
              access to alumni the provider did not pick.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Professionals with employer-funded training budgets.",
      "Corporate employees who need a recognisable credential for internal mobility or promotion.",
      "Managers and analysts wanting structured applied GenAI without a live weekly commitment.",
      "Learners in credential-driven sectors where the university name clears filters.",
    ],
    avoidIf: [
      "You are self-funding and optimising for engineering capability per rupee.",
      "You need live instruction and human code review.",
      "You want deep agent, MCP or fine-tuning work.",
      "You would be taking on EMI you are not confident you will see through.",
    ],
    pros: [
      "Purdue branding passes HR filters and internal promotion committees easily.",
      "Structured schedule with masterclasses and a capstone keeps busy professionals moving.",
      "Broad, industry-oriented curriculum covering the mainstream GenAI toolkit.",
      "Career services, resume support and a job board are included [VERIFY].",
      "Very strong choice when an employer is paying and the credential matters internally.",
      "EMI and frequent promotions reduce the effective entry price.",
      "Self-paced core suits professionals who cannot commit to fixed live classes.",
    ],
    cons: [
      "Curriculum depth does not match the fee: agents, MCP, LLMOps and fine-tuning are light for 2026.",
      "University faculty do not teach every session — verify who actually delivers each module.",
      "'Live' means occasional masterclasses, not a live cohort.",
      "Projects are largely templated, so portfolios look similar across learners.",
      "Content refresh is slower than specialist providers in a fast-moving field.",
      "Limited personal mentorship and little genuine code review.",
      "Aggressive promotional pricing and sales pressure warrant a slow, written-terms-only approach.",
    ],
    verdict: (
      <>
        <p>
          Excellent when your employer is paying and the credential carries internal weight; mediocre
          value if you are self-funding for build capability. Judge it on the HR and promotion job it
          does, because that is the job it does well.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 6.5 },
      { label: "Certification credibility & recognition", score: 8.5 },
      { label: "Project & assessment rigour", score: 6.0 },
      { label: "Career scope & support", score: 7.0 },
      { label: "Eligibility, accessibility & format", score: 7.5 },
      { label: "Value for money", score: 5.5 },
    ],
    overall: 6.9,
    ceiling: "Level 2–3 (applied breadth with a recognised tag)",
    cta: {
      label: "Check the Purdue × Simplilearn Applied GenAI program",
      href: "https://www.simplilearn.com/",
    },
  },

  /* --------------------------------------------------------------- 10 */
  {
    rank: 10,
    name: "upGrad × IIIT-Bangalore — Generative AI program [VERIFY exact name]",
    tagline: "Best Indian university-affiliated GenAI credential",
    meta: [
      { label: "Issuer", value: "upGrad with IIIT-Bangalore affiliation" },
      { label: "Credential type", value: "University-affiliated certificate" },
      { label: "Assessment", value: "Assignments + capstone [VERIFY]" },
      { label: "Fees", value: "₹1–2.5L [VERIFY]; EMI, often no-cost" },
      { label: "Duration", value: "4–8 months" },
      { label: "Capability ceiling", value: "Level 2–3" },
    ],
    blocks: [
      {
        title: "Overview & positioning",
        body: (
          <>
            <p>
              upGrad's IIIT-Bangalore-affiliated GenAI program — or the GenAI-focused variant of its ML
              &amp; AI postgraduate programme [VERIFY which is current and its exact name] — built for
              career switchers and professionals for whom an academic tag carries weight in promotions
              and HR filters.
            </p>
            <p>
              Its distinguishing feature is academic cadence: deadlines, defined completion paths and a
              structure that resembles a part-time degree more than a course.
            </p>
          </>
        ),
      },
      {
        title: "Certification details",
        body: (
          <>
            <p>
              An IIIT-B-affiliated certificate on completing assignments and the capstone [VERIFY], with
              no expiry.
            </p>
            <p>
              Be honest about what affiliation means: it is not an IIIT-B degree, and IIIT-B faculty do
              not teach every session. Ask for the module-by-module delivery breakdown in writing.
            </p>
          </>
        ),
      },
      {
        title: "Curriculum breakdown",
        body: (
          <>
            <p>
              Python and foundations, ML essentials, LLM fundamentals, prompt engineering, RAG basics,
              some LangChain, GenAI applications, responsible AI and a capstone [VERIFY].
            </p>
            <p>
              <strong>Depth verdict:</strong> organised breadth with moderate practical depth in the
              newest areas. Agents, MCP and production evaluation update slowly on university content
              cycles, which is a structural issue rather than a criticism of any single cohort.
            </p>
          </>
        ),
      },
      {
        title: "Learning format & delivery",
        body: (
          <>
            <p>
              Recorded content plus live sessions, mentor availability, enforced deadlines and a defined
              completion path, with ticket-based doubt resolution.
            </p>
            <p>
              For learners who thrive on academic structure this works well. For those who need rapid,
              conversational debugging help, ticket queues are a poor substitute.
            </p>
          </>
        ),
      },
      {
        title: "Projects & portfolio output",
        body: (
          <>
            <p>Six to ten assignments plus a capstone [VERIFY], academic in flavour.</p>
            <p>
              Few outputs are deployed, which is the main portfolio weakness: an assignment notebook and
              a deployed service with monitoring read very differently in an interview.
            </p>
          </>
        ),
      },
      {
        title: "Fees, duration & eligibility",
        body: (
          <>
            <p>
              ₹1–2.5L [VERIFY], with EMI and frequent no-cost EMI offers. Four to eight months, requiring
              some technical comfort.
            </p>
            <p>
              Two cautions: no-cost EMI is still a loan, and it continues if you stop attending. Confirm
              the lender's terms and the refund window in writing before signing.
            </p>
          </>
        ),
      },
      {
        title: "Certification value & employer recognition",
        body: (
          <>
            <p>
              Strong in Indian HR screens and IT-services contexts, where an IIIT-B tag is genuinely
              recognised and often rewarded internally.
            </p>
            <p>Moderate as an engineering signal, for the same reason as every other credential of this type.</p>
          </>
        ),
      },
      {
        title: "Career scope & job/placement support",
        body: (
          <>
            <p>
              A career-services team, resume and interview support, and a job board [VERIFY current
              inclusions] — assistance, not a guarantee.
            </p>
            <p>
              Eligibility conditions attach to most of it. Read them before enrolling, not after your
              capstone.
            </p>
          </>
        ),
      },
    ],
    idealFor: [
      "Career switchers who need a credential to be taken seriously in the first screen.",
      "Professionals whose organisations weigh formal academic qualifications for promotion.",
      "Learners who thrive on deadlines, cohorts and academic structure.",
      "Anyone in a sector where an Indian university tag genuinely moves hiring decisions.",
    ],
    avoidIf: [
      "You are chasing frontier agentic capability.",
      "You want production deployment depth and human code review.",
      "The fee is a genuine financial stretch.",
      "You assume IIIT-B faculty teach every session — they do not.",
    ],
    pros: [
      "IIIT-Bangalore affiliation is well recognised by Indian HR teams and IT-services employers.",
      "Strong structure, enforced deadlines and mentor availability keep working professionals moving.",
      "Python and ML essentials are included, giving career switchers a real onramp.",
      "Dedicated career-services team and job board [VERIFY inclusions].",
      "6–10 assignments plus a capstone leave you with documented work.",
      "No-cost EMI options make a large fee manageable month to month.",
      "Academic cadence produces higher completion than unsupported self-paced tracks.",
    ],
    cons: [
      "The most expensive route here for the GenAI depth delivered.",
      "Agents, MCP, fine-tuning and production evaluation are limited.",
      "Content refresh is slow relative to how fast the 2026 stack moves.",
      "Few deployed outputs, so the portfolio reads as academic rather than production.",
      "'Affiliation' is widely misread as an IIIT-B degree — it is not.",
      "Placement assistance carries eligibility conditions worth reading closely.",
      "Long EMI commitments on a program a meaningful share of learners abandon mid-way.",
    ],
    verdict: (
      <>
        <p>
          The best choice when an Indian academic credential genuinely matters to your path — and a
          poor one if bought primarily for 2026 GenAI depth. Decide which of those two you are buying
          before you sign an EMI agreement.
        </p>
      </>
    ),
    ratings: [
      { label: "Curriculum depth & 2026 relevance", score: 6.0 },
      { label: "Certification credibility & recognition", score: 8.5 },
      { label: "Project & assessment rigour", score: 6.0 },
      { label: "Career scope & support", score: 7.0 },
      { label: "Eligibility, accessibility & format", score: 7.5 },
      { label: "Value for money", score: 5.0 },
    ],
    overall: 6.7,
    ceiling: "Level 2–3 (structured breadth with an academic tag)",
    cta: {
      label: "Explore upGrad's IIIT-B GenAI program",
      href: "https://www.upgrad.com/",
    },
  },
];
