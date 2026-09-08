import { useEffect, useMemo, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Full 12-part certification review                                   */
/* ------------------------------------------------------------------ */

export type RatingRow = { label: string; score: number };

export type ReviewBlock = { title: string; body: ReactNode };

export type ReviewData = {
  rank: number;
  medal?: string;
  name: string;
  tagline: string;
  meta: { label: string; value: string }[];
  blocks: ReviewBlock[];
  pros: string[];
  cons: string[];
  idealFor: string[];
  avoidIf: string[];
  verdict: ReactNode;
  ratings: RatingRow[];
  overall: number;
  ceiling: string;
  cta: { label: string; href: string };
};

function ScoreBar({ label, score }: RatingRow) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[12px] font-semibold leading-snug text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-bold text-primary">{score.toFixed(1)}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-primary-soft">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-[width] duration-700"
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  );
}

function ReviewPart({ index, title, body }: { index: number; title: string; body: ReactNode }) {
  return (
    <div className="mt-7">
      <h4 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-primary">
        <span
          aria-hidden
          className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary-soft text-[11px] font-bold"
        >
          {index}
        </span>
        {title}
      </h4>
      <div className="mt-2.5 space-y-3 border-l border-border pl-4 text-[15px] leading-relaxed text-muted-foreground [&_strong]:text-foreground">
        {body}
      </div>
    </div>
  );
}

export function Review({ data }: { data: ReviewData }) {
  const {
    rank,
    medal,
    name,
    tagline,
    meta,
    blocks,
    pros,
    cons,
    idealFor,
    avoidIf,
    verdict,
    ratings,
    overall,
    ceiling,
    cta,
  } = data;

  return (
    <article
      id={`review-${rank}`}
      className="reveal surface-card surface-card-hover group relative mt-14 scroll-mt-24 overflow-hidden p-6 sm:p-8"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-transparent"
      />

      <div className="flex flex-wrap items-center gap-4">
        <span className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-xl font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
          {rank}
          {medal ? (
            <span aria-hidden className="absolute -right-2 -top-2 text-xl">
              {medal}
            </span>
          ) : null}
        </span>
        <div className="min-w-0">
          <h3 className="text-2xl leading-tight text-foreground">{name}</h3>
          <p className="mt-2 inline-block rounded-full bg-primary-soft px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {tagline}
          </p>
        </div>
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {meta.map((m) => (
          <div key={m.label} className="rounded-lg border border-border bg-muted/60 px-4 py-3">
            <dt className="text-[11px] font-bold uppercase tracking-wider text-primary">
              {m.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{m.value}</dd>
          </div>
        ))}
      </dl>

      {blocks.map((b, i) => (
        <ReviewPart key={b.title} index={i + 1} title={b.title} body={b.body} />
      ))}

      {/* Ideal / avoid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-primary/25 bg-primary-soft/60 p-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
            9 · Genuinely for
          </h4>
          <ul className="mt-4 space-y-2.5">
            {idealFor.map((t) => (
              <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-foreground/85">
                <span aria-hidden className="mt-0.5 text-primary">
                  ✓
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-muted/60 p-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
            10 · Avoid it if
          </h4>
          <ul className="mt-4 space-y-2.5">
            {avoidIf.map((t) => (
              <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-0.5 text-foreground/60">
                  ✕
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pros & cons */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">11 · Pros</h4>
          <ul className="mt-4 space-y-2.5">
            {pros.map((p) => (
              <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary-soft text-[10px] font-bold text-primary"
                >
                  +
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-muted/50 p-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
            11 · Cons
          </h4>
          <ul className="mt-4 space-y-2.5">
            {cons.map((c) => (
              <li key={c} className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground"
                >
                  !
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Verdict + rating block */}
      <div className="mt-7 rounded-xl border border-note-border/50 bg-note p-5 sm:p-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
          12 · Verdict, rating &amp; next step
        </h4>
        <div className="mt-3 text-[15px] leading-relaxed text-note-foreground [&_strong]:text-foreground">
          {verdict}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto]">
          <div className="grid gap-4 sm:grid-cols-2">
            {ratings.map((r) => (
              <ScoreBar key={r.label} {...r} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-br from-primary to-primary-glow px-8 py-5 text-center shadow-[var(--shadow-glow)]">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
              Overall
            </span>
            <span className="text-4xl leading-none text-primary-foreground">
              {overall.toFixed(1)}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/80">
              out of 10
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="rounded-lg border border-primary/30 bg-card px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            Capability ceiling · {ceiling}
          </span>
          <a
            href={cta.href}
            target="_blank"
            rel="noopener nofollow"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            {cta.label} →
          </a>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Honorable-mention card                                              */
/* ------------------------------------------------------------------ */

export function MentionCard({
  name,
  strength,
  missed,
  body,
}: {
  name: string;
  strength: string;
  missed: string;
  body: string;
}) {
  return (
    <article className="reveal surface-card surface-card-hover p-5">
      <h3 className="text-lg leading-snug text-foreground">{name}</h3>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <p className="rounded-lg bg-primary-soft/70 px-3 py-2 text-[13px] leading-relaxed text-foreground/85">
          <strong className="text-primary">Strength:</strong> {strength}
        </p>
        <p className="rounded-lg bg-muted/70 px-3 py-2 text-[13px] leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Why it missed:</strong> {missed}
        </p>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Interactive decision-tree quiz                                      */
/* ------------------------------------------------------------------ */

type QuizQuestion = { id: string; question: string; options: { value: string; label: string }[] };

const quizQuestions: QuizQuestion[] = [
  {
    id: "experience",
    question: "1. How much generative-AI experience do you have today?",
    options: [
      { value: "none", label: "None — complete beginner" },
      { value: "user", label: "I use ChatGPT/Copilot at work" },
      { value: "built", label: "I've built a small LLM app" },
      { value: "prod", label: "I've shipped GenAI to production" },
    ],
  },
  {
    id: "goal",
    question: "2. What do you want the certification to do for you?",
    options: [
      { value: "role", label: "Help me land a GenAI role" },
      { value: "current", label: "Add GenAI to my current job" },
      { value: "promo", label: "Support a promotion or appraisal" },
      { value: "leader", label: "Give me leadership-level literacy" },
      { value: "test", label: "Let me test the field cheaply" },
    ],
  },
  {
    id: "background",
    question: "3. What is your technical background?",
    options: [
      { value: "nontech", label: "Non-technical" },
      { value: "somecode", label: "Some Python / scripting" },
      { value: "dev", label: "Software developer" },
      { value: "data", label: "Data / analytics engineer" },
      { value: "ml", label: "ML practitioner" },
    ],
  },
  {
    id: "specialisation",
    question: "4. Which GenAI specialisation do you want to end up in?",
    options: [
      { value: "rag", label: "RAG & vector search" },
      { value: "agents", label: "AI agents & orchestration" },
      { value: "finetune", label: "Fine-tuning & model work" },
      { value: "cloudapp", label: "Cloud GenAI app engineering" },
      { value: "strategy", label: "Strategy / governance, not building" },
    ],
  },
  {
    id: "budget",
    question: "5. What can you realistically spend?",
    options: [
      { value: "free", label: "Free only" },
      { value: "u15", label: "Under ₹15K" },
      { value: "15to60", label: "₹15K–₹60K" },
      { value: "60to150", label: "₹60K–₹1.5L" },
      { value: "150plus", label: "₹1.5L+" },
    ],
  },
  {
    id: "format",
    question: "6. Which learning format actually suits your week?",
    options: [
      { value: "live", label: "Live mentor-led cohort" },
      { value: "self", label: "Self-paced video" },
      { value: "exam", label: "Self-study, then sit an exam" },
      { value: "mixed", label: "Mixed" },
    ],
  },
  {
    id: "cloud",
    question: "7. Which platform does your organisation run on?",
    options: [
      { value: "azure", label: "Azure / Microsoft" },
      { value: "aws", label: "AWS" },
      { value: "gcp", label: "Google Cloud" },
      { value: "databricks", label: "Databricks / lakehouse" },
      { value: "none", label: "None / not sure" },
    ],
  },
];

type Recommendation = {
  key: string;
  pick: string;
  type: string;
  reason: string;
  details: { label: string; value: string }[];
  pairWith: string;
  href: string;
  linkLabel: string;
};

const CATALOG: Record<string, Recommendation> = {
  logicmojoAiMl: {
    key: "logicmojoAiMl",
    pick: "LogicMojo — AI & ML Course (with Generative AI modules)",
    type: "Course certification (project-assessed, not a proctored vendor exam)",
    reason:
      "You are starting from the beginning, so foundations come first: Python and ML essentials before LLMs, prompt engineering, RAG and agents — taught live, with mentor support so you are not self-diagnosing gaps.",
    details: [
      { label: "Issuer", value: "LogicMojo (specialist AI/ML training provider)" },
      { label: "Prerequisites", value: "None stated — beginner onboarding included [VERIFY]" },
      { label: "Assessment", value: "Graded projects + capstone with mentor review [VERIFY]" },
      { label: "Fees / duration", value: "₹XX,XXX · X months, 10–15 hrs/week [VERIFY]" },
      { label: "Includes", value: "Interview preparation, portfolio and career guidance [VERIFY]" },
      { label: "Validity", value: "No expiry or renewal fee stated [VERIFY]" },
    ],
    pairWith:
      "One low-cost recognised vendor badge (AWS AI Practitioner or Google Cloud Generative AI Leader) for the HR screen.",
    href: "https://logicmojo.com/",
    linkLabel: "Visit the official LogicMojo site",
  },
  logicmojoGenAi: {
    key: "logicmojoGenAi",
    pick: "LogicMojo — Generative AI Course",
    type: "Course certification (project-assessed)",
    reason:
      "You already code and you are optimising for what you can build and defend in an interview — the full stack including RAG, LangChain/LangGraph, fine-tuning, agents, evaluation and deployment.",
    details: [
      { label: "Issuer", value: "LogicMojo" },
      { label: "Prerequisites", value: "Programming comfort recommended [VERIFY]" },
      { label: "Assessment", value: "Graded projects + capstone + code review [VERIFY]" },
      { label: "Fees / duration", value: "₹XX,XXX · X months [VERIFY]" },
      { label: "Format", value: "Live IST evening / weekend batches [VERIFY]" },
      { label: "Validity", value: "No expiry stated [VERIFY]" },
    ],
    pairWith: "Your organisation's cloud vendor exam, for external recognition.",
    href: "https://logicmojo.com/",
    linkLabel: "Visit the official LogicMojo site",
  },
  ai102: {
    key: "ai102",
    pick: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    type: "Vendor certification · proctored exam",
    reason:
      "In an Azure-standardised organisation this is the most recognised GenAI engineering credential, and it maps directly to the services your team already pays for.",
    details: [
      { label: "Issuer", value: "Microsoft" },
      { label: "Exam", value: "AI-102, proctored, scenario-heavy [VERIFY format and length]" },
      { label: "Prerequisites", value: "Recommended Python/C# and Azure familiarity" },
      { label: "Fees", value: "$XXX / ₹XX,XXX [VERIFY current price]" },
      { label: "Validity", value: "Renewal required — free online renewal [VERIFY cycle]" },
      { label: "Ceiling", value: "Platform competence, not portfolio capability" },
    ],
    pairWith: "A deployed RAG or agent project of your own, on GitHub.",
    href: "https://learn.microsoft.com/credentials/certifications/azure-ai-engineer/",
    linkLabel: "Open the official Microsoft exam page",
  },
  awsPractitioner: {
    key: "awsPractitioner",
    pick: "AWS Certified AI Practitioner (AIF-C01)",
    type: "Vendor certification · proctored foundational exam",
    reason:
      "A credible, inexpensive first rung with very high brand recognition — ideal when you need a recognised name quickly without a coding prerequisite.",
    details: [
      { label: "Issuer", value: "Amazon Web Services" },
      { label: "Exam", value: "AIF-C01, foundational level [VERIFY question count and duration]" },
      { label: "Prerequisites", value: "None required" },
      { label: "Fees", value: "$XXX [VERIFY current price]" },
      { label: "Validity", value: "Recertification cycle applies [VERIFY]" },
      { label: "Ceiling", value: "Literacy and service awareness" },
    ],
    pairWith: "A project-backed program if you intend to build, not just to name services.",
    href: "https://aws.amazon.com/certification/certified-ai-practitioner/",
    linkLabel: "Open the official AWS certification page",
  },
  gcpLeader: {
    key: "gcpLeader",
    pick: "Google Cloud Generative AI Leader",
    type: "Vendor certification · proctored, non-engineering",
    reason:
      "You need to scope, evaluate and govern GenAI work rather than build it — this is fast, brand-recognised and has no coding prerequisite.",
    details: [
      { label: "Issuer", value: "Google Cloud" },
      { label: "Exam", value: "Proctored, business-and-strategy oriented [VERIFY]" },
      { label: "Prerequisites", value: "None required" },
      { label: "Fees", value: "$XXX [VERIFY current price]" },
      { label: "Validity", value: "Time-limited; renewal required [VERIFY term]" },
      { label: "Ceiling", value: "Leadership literacy — explicitly not engineering" },
    ],
    pairWith: "Nothing, if you do not intend to build. A project program, if you do.",
    href: "https://cloud.google.com/learn/certification/generative-ai-leader",
    linkLabel: "Open the official Google Cloud page",
  },
  databricks: {
    key: "databricks",
    pick: "Databricks Certified Generative AI Engineer Associate",
    type: "Vendor certification · proctored exam",
    reason:
      "The most RAG-centric exam on this list, and it reads strongly inside lakehouse-based data teams — a direct match for your platform and your specialisation.",
    details: [
      { label: "Issuer", value: "Databricks" },
      { label: "Exam", value: "Proctored, RAG and LLM application focused [VERIFY]" },
      { label: "Prerequisites", value: "Recommended hands-on Databricks experience" },
      { label: "Fees", value: "$XXX [VERIFY current price]" },
      { label: "Validity", value: "Typically time-limited [VERIFY term]" },
      { label: "Ceiling", value: "Applied RAG engineering within the Databricks stack" },
    ],
    pairWith: "A portable, non-Databricks project so your skills read outside the platform.",
    href: "https://www.databricks.com/learn/certification/generative-ai-engineer-associate",
    linkLabel: "Open the official Databricks certification page",
  },
  nvidia: {
    key: "nvidia",
    pick: "NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)",
    type: "Vendor certification · proctored exam",
    reason:
      "The most technically demanding associate-level exam here — it tests genuine LLM and transformer understanding, which suits your background and your model-side specialisation.",
    details: [
      { label: "Issuer", value: "NVIDIA" },
      { label: "Exam", value: "NCA-GENL, proctored [VERIFY format and duration]" },
      { label: "Prerequisites", value: "Recommended Python and deep-learning basics" },
      { label: "Fees", value: "$XXX [VERIFY current price]" },
      { label: "Validity", value: "Time-limited [VERIFY term]" },
      { label: "Ceiling", value: "LLM and model-side depth; less product engineering" },
    ],
    pairWith: "A fine-tuning project benchmarked against its base model.",
    href: "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
    linkLabel: "Open the official NVIDIA certification page",
  },
  dlai: {
    key: "dlai",
    pick: "DeepLearning.AI × AWS — Generative AI with LLMs",
    type: "Course certificate (completion-based, audit available free)",
    reason:
      "Your answers point to testing appetite before spending. This is the strongest low-cost foundation in the category — finish it, then buy only the credential you actually need.",
    details: [
      { label: "Issuer", value: "DeepLearning.AI with AWS, on Coursera" },
      { label: "Prerequisites", value: "Python and basic ML recommended" },
      { label: "Assessment", value: "Quizzes and labs — not a proctored exam" },
      { label: "Fees", value: "Free to audit; certificate on subscription [VERIFY price]" },
      { label: "Duration", value: "Roughly a few weeks part-time [VERIFY]" },
      { label: "Ceiling", value: "Strong LLM foundations; not a hiring-grade credential alone" },
    ],
    pairWith: "Hugging Face's free courses, then one paid credential.",
    href: "https://www.coursera.org/learn/generative-ai-with-llms",
    linkLabel: "Open the official course page",
  },
  ibm: {
    key: "ibm",
    pick: "IBM Generative AI Engineering Professional Certificate",
    type: "Course certificate (multi-course, completion-based)",
    reason:
      "The best applied-practice value on a tight budget for someone who already codes and can self-motivate through a long self-paced track.",
    details: [
      { label: "Issuer", value: "IBM, on Coursera" },
      { label: "Prerequisites", value: "None stated; Python helps a lot" },
      { label: "Assessment", value: "Graded labs and projects — not proctored" },
      { label: "Fees", value: "Monthly subscription [VERIFY current price]" },
      { label: "Duration", value: "Several months part-time [VERIFY course count]" },
      { label: "Ceiling", value: "Applied practice; portfolio depends on your own extension" },
    ],
    pairWith: "One vendor exam for recognition, plus your own deployed capstone.",
    href: "https://www.coursera.org/professional-certificates/ibm-generative-ai-engineering",
    linkLabel: "Open the official IBM certificate page",
  },
  purdue: {
    key: "purdue",
    pick: "Purdue University × Simplilearn — Applied Generative AI Specialization",
    type: "University-branded program certificate",
    reason:
      "Credential-led and employer-funded paths are exactly where a university-tagged certificate earns its premium, and your budget supports it.",
    details: [
      { label: "Issuer", value: "Simplilearn, co-branded with Purdue University" },
      { label: "Prerequisites", value: "Work experience typically expected [VERIFY]" },
      { label: "Assessment", value: "Projects and capstone; not a proctored vendor exam" },
      { label: "Fees", value: "₹X,XX,XXX [VERIFY current price]" },
      { label: "Duration", value: "Several months, cohort-based [VERIFY]" },
      { label: "Ceiling", value: "Applied breadth plus brand; depth varies by cohort" },
    ],
    pairWith: "A vendor exam if your target employers screen on platform skills.",
    href: "https://www.simplilearn.com/applied-ai-generative-ai-program-purdue-university",
    linkLabel: "Open the official program page",
  },
};

function recommend(a: Record<string, string>): Recommendation | null {
  const required = quizQuestions.map((q) => q.id);
  if (required.some((id) => !a[id])) return null;

  const experience = a["experience"] ?? "";
  const goal = a["goal"] ?? "";
  const background = a["background"] ?? "";
  const spec = a["specialisation"] ?? "";
  const budget = a["budget"] ?? "";
  const format = a["format"] ?? "";
  const cloud = a["cloud"] ?? "";
  const canPay = ["15to60", "60to150", "150plus"].includes(budget);
  const beginner = experience === "none" || experience === "user";

  if (budget === "free") return CATALOG["dlai"]!;
  if (goal === "test") return CATALOG["dlai"]!;
  if (spec === "strategy" || goal === "leader") return CATALOG["gcpLeader"]!;

  if (beginner && background === "nontech" && !canPay) return CATALOG["awsPractitioner"]!;
  if (beginner && canPay && format !== "exam" && goal !== "promo")
    return CATALOG["logicmojoAiMl"]!;

  if (format === "exam" || goal === "current" || goal === "promo") {
    if (cloud === "azure") return CATALOG["ai102"]!;
    if (cloud === "databricks") return CATALOG["databricks"]!;
    if (cloud === "gcp") return CATALOG["gcpLeader"]!;
    if (cloud === "aws") return CATALOG["awsPractitioner"]!;
    if (spec === "finetune" || background === "ml") return CATALOG["nvidia"]!;
    if (goal === "promo" && budget === "150plus") return CATALOG["purdue"]!;
  }

  if (spec === "finetune" && background === "ml" && !canPay) return CATALOG["nvidia"]!;
  if (spec === "rag" && cloud === "databricks") return CATALOG["databricks"]!;
  if (spec === "cloudapp" && cloud === "azure") return CATALOG["ai102"]!;

  if (goal === "role" && canPay) return CATALOG["logicmojoGenAi"]!;
  if (goal === "role" && budget === "u15") return CATALOG["ibm"]!;
  if (budget === "150plus") return CATALOG["purdue"]!;
  return CATALOG["ibm"]!;
}

function ResultModal({ result, onClose }: { result: Recommendation; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close recommendation"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-foreground/40 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-result-title"
        className="animate-fade-up relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl border border-primary/25 bg-card p-6 shadow-[var(--shadow-glow)] sm:rounded-2xl sm:p-8"
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary"
        />
        <div className="flex items-start justify-between gap-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Your recommended certification
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 -mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
          >
            ✕
          </button>
        </div>
        <h4 id="quiz-result-title" className="mt-3 text-2xl leading-snug text-foreground">
          {result.pick}
        </h4>
        <p className="mt-2 inline-block rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
          {result.type}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{result.reason}</p>

        <dl className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {result.details.map((d) => (
            <div key={d.label} className="rounded-lg border border-border bg-muted/60 px-3.5 py-2.5">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-primary">
                {d.label}
              </dt>
              <dd className="mt-0.5 text-[13px] font-medium leading-snug text-foreground">
                {d.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 rounded-lg border border-primary/25 bg-primary-soft/60 px-4 py-3 text-[14px] leading-relaxed text-foreground/85">
          <strong>Pair it with:</strong> {result.pairWith}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={result.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {result.linkLabel} →
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-card px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft"
          >
            Change my answers
          </button>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          This is guidance, not a guarantee — no outcome, placement or salary is promised. Confirm
          fees, exam format, prerequisites, validity and renewal on the official page before paying.
        </p>
      </div>
    </div>
  );
}

export function DecisionQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);
  const questions = quizQuestions;
  const result = useMemo(() => recommend(answers), [answers]);
  const answered = questions.filter((q) => answers[q.id]).length;

  return (
    <div className="reveal surface-card mt-8 overflow-hidden p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl leading-snug text-foreground">
          Which GenAI certification is right for you? — 7 questions, one recommendation
        </h3>
        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          {answered} / {questions.length} answered
        </span>
      </div>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-[width] duration-500"
          style={{ width: `${(answered / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-7 space-y-6">
        {questions.map((q) => (
          <fieldset key={q.id}>
            <legend className="text-sm font-semibold text-foreground">{q.question}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {q.options.map((o) => {
                const active = answers[q.id] === o.value;
                return (
                  <button
                    key={o.value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: o.value }))}
                    className={
                      active
                        ? "rounded-lg border border-primary bg-gradient-to-r from-primary to-primary-glow px-3.5 py-2 text-[13px] font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
                        : "rounded-lg border border-border bg-card px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                    }
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3" aria-live="polite">
        <button
          type="button"
          disabled={!result}
          onClick={() => setOpen(true)}
          className={
            result
              ? "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5"
              : "inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border bg-muted px-5 py-3 text-sm font-semibold text-muted-foreground"
          }
        >
          {result ? "Show my recommendation →" : `Answer ${questions.length - answered} more`}
        </button>
        {answered > 0 ? (
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setOpen(false);
            }}
            className="text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
          >
            Reset answers
          </button>
        ) : null}
        <span className="text-xs text-muted-foreground">
          No email required. One pick, its key details and the official link.
        </span>
      </div>

      {open && result ? <ResultModal result={result} onClose={() => setOpen(false)} /> : null}
    </div>
  );
}


/* ------------------------------------------------------------------ */
/* Interactive pre-enrollment checklist                                */
/* ------------------------------------------------------------------ */

export function Checklist({ title, items }: { title: string; items: string[] }) {
  const [checked, setChecked] = useState<number[]>([]);
  const toggle = (i: number) =>
    setChecked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <div className="reveal surface-card mt-8 p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl leading-snug text-foreground">{title}</h3>
        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          {checked.length} / {items.length} confirmed
        </span>
      </div>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {items.map((item, i) => {
          const on = checked.includes(i);
          return (
            <li key={item}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i)}
                className={
                  on
                    ? "flex w-full gap-3 rounded-lg border border-primary/40 bg-primary-soft p-3.5 text-left text-[14px] leading-relaxed text-foreground"
                    : "flex w-full gap-3 rounded-lg border border-border bg-card p-3.5 text-left text-[14px] leading-relaxed text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted/60"
                }
              >
                <span
                  aria-hidden
                  className={
                    on
                      ? "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-glow text-[11px] font-bold text-primary-foreground"
                      : "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-border text-[11px] font-bold text-muted-foreground"
                  }
                >
                  {on ? "✓" : i + 1}
                </span>
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reviewer carousel                                                   */
/* ------------------------------------------------------------------ */

export type Reviewer = {
  name: string;
  role: string;
  company: string;
  bio: string;
  quote: string;
  reviewed: string;
  linkedin: string;
};

export function ReviewerCarousel({ reviewers }: { reviewers: Reviewer[] }) {
  return (
    <div className="reveal mt-8 -mx-5 px-5 sm:mx-0 sm:px-0">
      <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {reviewers.map((r) => (
          <li
            key={r.reviewed}
            className="surface-card surface-card-hover flex w-[85%] shrink-0 snap-start flex-col p-5 sm:w-[340px]"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex size-14 shrink-0 items-center justify-center rounded-full border border-dashed border-primary/40 bg-primary-soft text-[10px] font-bold uppercase tracking-wider text-primary"
              >
                Photo
              </span>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground">{r.name}</p>
                <p className="text-[13px] leading-snug text-muted-foreground">{r.role}</p>
                <p className="text-[13px] leading-snug text-primary">{r.company}</p>
              </div>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{r.bio}</p>
            <blockquote className="mt-4 border-l-2 border-primary/40 pl-3 text-[14px] italic leading-relaxed text-foreground/85">
              “{r.quote}”
            </blockquote>
            <p className="mt-4 rounded-lg bg-muted/70 px-3 py-2 text-[12px] leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Reviewed:</strong> {r.reviewed}
            </p>
            <a
              href={r.linkedin}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
            >
              LinkedIn profile [INSERT URL]
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-1 text-xs italic text-muted-foreground">
        Scroll sideways for all five reviewers →
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky CTAs                                                         */
/* ------------------------------------------------------------------ */

export function StickyCta({ href }: { href: string }) {
  return (
    <>
      <a
        href={href}
        className="fixed bottom-8 right-6 z-40 hidden max-w-[240px] flex-col gap-1 rounded-xl bg-gradient-to-br from-primary to-primary-glow px-5 py-4 text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-1 xl:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
          Project-backed path
        </span>
        <span className="text-sm font-semibold leading-snug">
          Explore the LogicMojo GenAI Course →
        </span>
      </a>
      <a
        href={href}
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 border-t border-primary/30 bg-gradient-to-r from-primary to-primary-glow px-4 py-3.5 text-sm font-semibold text-primary-foreground xl:hidden"
      >
        Explore the LogicMojo GenAI Course →
      </a>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Author bio                                                          */
/* ------------------------------------------------------------------ */

export function AuthorBio() {
  return (
    <div className="reveal surface-card mt-8 grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
      <span
        aria-hidden
        className="flex size-24 items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary-soft text-[11px] font-bold uppercase tracking-wider text-primary"
      >
        Photo
      </span>
      <div>
        <p className="text-xl text-foreground">[INSERT: Author name]</p>
        <p className="mt-1 text-sm font-semibold text-primary">
          [INSERT: Role] — practising GenAI/LLM engineer, mentor and curriculum reviewer ·
          [INSERT: N] years in AI/ML, [INSERT: N] of them on generative systems [VERIFY]
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          I write this as someone who builds the thing I am assessing. My working weeks are spent on
          retrieval pipelines that have to return the right chunk, fine-tunes that have to beat their
          base model on a real evaluation set, and agents that have to stay inside a cost budget — and
          the rest of my time goes to mentoring learners through exactly those problems and
          interviewing candidates who claim them on a résumé. So when I judge a syllabus, I am asking
          one question: would this have prepared me for the work I actually had to do?
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          My method is deliberately checkable: read the official exam guide or skills outline line by
          line, map every module to the eight-layer 2026 stack, sit the public sample assessment, build
          the flagship project myself, then compare it against what GenAI interviews test. Where I have
          not sat an exam or observed a cohort first-hand, I say so inside that review rather than
          implying experience I do not have.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Hands-on", "Production RAG, fine-tuning and agent work [VERIFY: specific projects]"],
            ["Teaching", "Mentoring learners through the same stack [VERIFY: programs, cohorts]"],
            ["Hiring", "Interviewing GenAI candidates [VERIFY: role and organisation]"],
            ["Credentials", "[INSERT: degrees, certifications, publications, talks] [VERIFY]"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-border bg-muted/50 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-primary">{k}</p>
              <p className="mt-1 text-[14px] leading-snug text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
          <a
            href="#"
            className="rounded-lg border border-primary/30 bg-card px-3.5 py-2 text-primary hover:bg-primary-soft"
          >
            LinkedIn [INSERT URL]
          </a>
          <a
            href="#"
            className="rounded-lg border border-primary/30 bg-card px-3.5 py-2 text-primary hover:bg-primary-soft"
          >
            GitHub / portfolio [INSERT URL]
          </a>
          <span className="rounded-lg bg-muted px-3.5 py-2 text-muted-foreground">
            Last reviewed: [INSERT DATE]
          </span>
        </div>
        <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
          Independence and corrections: no provider paid for a place in this ranking, LogicMojo’s
          commercial interest is disclosed above the comparison, and every fee, exam and renewal claim
          carries a [VERIFY] marker until re-checked against the official page. This page is updated as
          exam guides, curricula, fees and renewal policies change, with fee checks scheduled
          quarterly; if you find an error, write in and I will correct it and update the date.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const footerCols: { title: string; links: [string, string][] }[] = [
  {
    title: "Courses",
    links: [
      ["AI & ML Course", "https://logicmojo.com"],
      ["Generative AI Course", "https://logicmojo.com"],
      ["Data Science Course", "https://logicmojo.com"],
      ["DSA & System Design", "https://logicmojo.com"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Curriculum PDF [INSERT LINK]", "https://logicmojo.com"],
      ["Batch schedule [INSERT LINK]", "https://logicmojo.com"],
      ["Project portfolio [INSERT LINK]", "https://logicmojo.com"],
      ["Success stories", "https://logicmojo.com/success-story"],
      ["Blog [INSERT LINK]", "https://logicmojo.com"],
      ["FAQs [INSERT LINK]", "https://logicmojo.com"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["[INSERT EMAIL]", "#"],
      ["[INSERT PHONE]", "#"],
      ["[INSERT WHATSAPP]", "#"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "#"],
      ["Terms", "#"],
      ["Refund Policy", "#"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-card/70 pb-24 pt-12 xl:pb-12">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <span
            aria-hidden
            className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-lg font-bold text-primary-foreground"
          >
            LM
          </span>
          <div>
            <p className="text-lg font-semibold text-foreground">LogicMojo</p>
            <p className="text-sm text-muted-foreground">
              Live, project-based engineering programs in Generative AI, AI/ML, data science and
              system design.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {["LinkedIn", "YouTube", "Instagram", "X", "GitHub"].map((s) => (
            <a
              key={s}
              href="#"
              className="rounded-lg border border-border px-3 py-1.5 transition-colors hover:border-primary/40 hover:text-primary"
            >
              {s}
            </a>
          ))}
        </div>

        <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 LogicMojo. All rights reserved. Certification names and logos belong to their
          respective owners; this article is independent editorial analysis published on a
          LogicMojo-owned property.
        </p>
      </div>
    </footer>
  );
}
