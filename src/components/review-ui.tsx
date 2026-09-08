import { useMemo, useState, type ReactNode } from "react";

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
    id: "background",
    question: "1. What is your background?",
    options: [
      { value: "nontech", label: "Non-technical" },
      { value: "somecode", label: "Some coding" },
      { value: "dev", label: "Developer" },
      { value: "ml", label: "ML practitioner" },
      { value: "student", label: "Student / fresher" },
    ],
  },
  {
    id: "goal",
    question: "2. What is your goal?",
    options: [
      { value: "role", label: "Land a GenAI engineer role" },
      { value: "current", label: "Add GenAI to my current role" },
      { value: "promo", label: "A credential for promotion" },
      { value: "leader", label: "Leadership-level literacy" },
      { value: "test", label: "Testing the waters" },
    ],
  },
  {
    id: "budget",
    question: "3. What is your budget?",
    options: [
      { value: "free", label: "Free only" },
      { value: "u15", label: "Under ₹15K" },
      { value: "15to60", label: "₹15K–₹60K" },
      { value: "60to150", label: "₹60K–₹1.5L" },
      { value: "150plus", label: "₹1.5L+" },
    ],
  },
  {
    id: "hours",
    question: "4. How many hours a week can you commit?",
    options: [
      { value: "u5", label: "Under 5" },
      { value: "5to10", label: "5–10" },
      { value: "10to15", label: "10–15" },
      { value: "15plus", label: "15+" },
    ],
  },
  {
    id: "priority",
    question: "5. What matters most to you?",
    options: [
      { value: "build", label: "Build capability" },
      { value: "credential", label: "A recognised credential" },
      { value: "placement", label: "Placement support" },
      { value: "cost", label: "Lowest cost" },
    ],
  },
  {
    id: "format",
    question: "6. Which format suits you?",
    options: [
      { value: "live", label: "Live cohort" },
      { value: "self", label: "Self-paced" },
      { value: "exam", label: "Exam only" },
      { value: "mixed", label: "Mixed" },
    ],
  },
];

const cloudQuestion: QuizQuestion = {
  id: "cloud",
  question: "7. Which platform does your organisation run on?",
  options: [
    { value: "azure", label: "Azure / Microsoft" },
    { value: "aws", label: "AWS" },
    { value: "gcp", label: "Google Cloud" },
    { value: "databricks", label: "Databricks / lakehouse" },
    { value: "none", label: "None / not sure" },
  ],
};

function recommend(a: Record<string, string>): { pick: string; reason: string } | null {
  const required = [...quizQuestions, cloudQuestion].map((q) => q.id);
  if (required.some((id) => !a[id])) return null;

  const { background, goal, budget, hours, priority, format, cloud } = a;
  const canPay = ["15to60", "60to150", "150plus"].includes(budget);
  const enoughHours = ["10to15", "15plus"].includes(hours);

  if (priority === "placement" && (goal === "role" || background === "student")) {
    return {
      pick: "LogicMojo — Generative AI Course",
      reason:
        "You are optimising for conversion, and the projects-plus-interview-preparation combination is what converts; add one recognised vendor badge for the HR screen.",
    };
  }
  if (priority === "build" && enoughHours && canPay) {
    return {
      pick: "LogicMojo — Generative AI Course",
      reason:
        "You have the hours and the budget for a project-graded program that covers all seven layers including agents, MCP, evaluation and deployment.",
    };
  }
  if (goal === "leader" || priority === "credential" && background === "nontech") {
    return {
      pick: "Google Cloud Generative AI Leader",
      reason:
        "You need to scope, evaluate and govern GenAI work rather than build it — this is cheap, fast and brand-recognised, with no coding prerequisite.",
    };
  }
  if (priority === "credential" && cloud === "azure") {
    return {
      pick: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
      reason:
        "It is the most employer-recognised GenAI engineering exam in Azure-standardised organisations; pair it with real projects.",
    };
  }
  if (priority === "credential" && cloud === "aws") {
    return {
      pick: "AWS Certified AI Practitioner (AIF-C01)",
      reason:
        "A credible, inexpensive first rung with very high brand recognition inside AWS-centric organisations.",
    };
  }
  if (cloud === "databricks" || (background === "dev" && priority === "build" && !canPay)) {
    if (cloud === "databricks")
      return {
        pick: "Databricks Certified Generative AI Engineer Associate",
        reason:
          "It is the most RAG-centric exam available and reads strongly inside lakehouse-based data teams.",
      };
  }
  if (background === "ml" && priority === "credential") {
    return {
      pick: "NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)",
      reason:
        "The most technically demanding associate exam here — it tests real LLM understanding, which suits an ML practitioner.",
    };
  }
  if (budget === "free" || priority === "cost") {
    return {
      pick: "DeepLearning.AI × AWS — Generative AI with LLMs, plus Hugging Face courses",
      reason:
        "The 2026 free stack is genuinely world-class; complete it, then buy only the vendor exam you actually need.",
    };
  }
  if (budget === "u15" && (background === "dev" || background === "somecode")) {
    return {
      pick: "IBM Generative AI Engineering Professional Certificate",
      reason:
        "The best applied-practice value for someone who already codes and can self-motivate on a tight budget.",
    };
  }
  if (goal === "promo" && budget === "150plus") {
    return {
      pick: "Purdue University × Simplilearn — Applied Generative AI Specialization",
      reason:
        "Employer-funded and credential-driven paths are exactly where a university-branded certificate earns its price.",
    };
  }
  if (background === "nontech" && goal === "role") {
    return {
      pick: "upGrad × IIIT-Bangalore, or LogicMojo if capability matters more than the logo",
      reason:
        "Career switchers need an onramp; choose the academic tag when your target sector screens on credentials, and the project program when interviews decide.",
    };
  }
  if (format === "exam") {
    return {
      pick: "Your platform's vendor exam (AI-102, AWS AIF, Google Cloud, Databricks or NVIDIA)",
      reason:
        "Exam-only paths give recognition, not capability — book the one matching your stack and build a portfolio beside it.",
    };
  }
  return {
    pick: "DeepLearning.AI × AWS first, then reassess",
    reason:
      "Your answers point to testing appetite before spending: three free weeks on LLM foundations will tell you which path is worth paying for.",
  };
}

export function DecisionQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const questions = [...quizQuestions, cloudQuestion];
  const result = useMemo(() => recommend(answers), [answers]);
  const answered = questions.filter((q) => answers[q.id]).length;

  return (
    <div className="reveal surface-card mt-8 overflow-hidden p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl leading-snug text-foreground">
          Decision-tree quiz — answer 7, get one recommendation
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

      <div
        aria-live="polite"
        className="mt-8 rounded-xl border border-primary/25 bg-primary-soft/70 p-5"
      >
        {result ? (
          <div className="animate-fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Your match
            </span>
            <p className="mt-2 text-xl leading-snug text-foreground">{result.pick}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {result.reason}
            </p>
          </div>
        ) : (
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Answer all seven questions and your recommendation appears here — one pick, one reason,
            no email required.
          </p>
        )}
      </div>
      {answered > 0 ? (
        <button
          type="button"
          onClick={() => setAnswers({})}
          className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
        >
          Reset answers
        </button>
      ) : null}
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
          [INSERT: Role] — GenAI education analyst and curriculum reviewer
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          I review GenAI and EdTech curricula for a living: I read syllabi and exam guides line by
          line, sit sample assessments where they are public, build the reference projects myself,
          and compare what a program teaches against what GenAI interviews actually test. This
          analysis exists because the category has become impossible to judge from landing pages —
          five different instruments are all sold under the word “certification”. Every fee,
          curriculum and renewal claim here is marked [VERIFY] until confirmed against the
          provider’s official page.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
          <a
            href="#"
            className="rounded-lg border border-primary/30 bg-card px-3.5 py-2 text-primary hover:bg-primary-soft"
          >
            LinkedIn [INSERT URL]
          </a>
          <span className="rounded-lg bg-muted px-3.5 py-2 text-muted-foreground">
            Last reviewed: [INSERT DATE]
          </span>
        </div>
        <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
          This page is updated as exam guides, curricula, fees and renewal policies change; fee and
          exam-price checks are scheduled quarterly.
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
