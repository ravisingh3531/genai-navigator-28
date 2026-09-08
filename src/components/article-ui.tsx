import type { ReactNode } from "react";

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="reveal scroll-mt-24 py-14">
      <div className="mb-10 h-px w-full origin-left animate-slide-line bg-gradient-to-r from-primary/40 via-primary/15 to-transparent" />
      {children}
    </section>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">
      <span className="mr-3 inline-block h-2.5 w-2.5 -translate-y-1 rounded-sm bg-gradient-to-br from-primary to-primary-glow" />
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-11 text-2xl leading-snug text-foreground">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 border-l-2 border-primary/40 pl-5 text-lg leading-relaxed text-foreground/90">
      {children}
    </p>
  );
}

export function Callout({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <aside className="reveal relative mt-8 overflow-hidden rounded-xl border border-note-border/50 bg-note p-6 shadow-[var(--shadow-glow)]">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-primary-glow"
      />
      <div className="pl-3">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          <span aria-hidden className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-[11px]">
            ★
          </span>
          {label ?? "Note"}
        </div>
        <div className="text-base leading-relaxed text-note-foreground">{children}</div>
      </div>
    </aside>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
          <span
            aria-hidden
            className="mt-1.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary-soft text-[10px] font-bold text-primary"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Numbered({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mt-6 space-y-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="surface-card surface-card-hover flex gap-4 p-4 text-base leading-relaxed text-muted-foreground"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground">
            {i + 1}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function DataTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <figure className="reveal mt-8">
      <div className="surface-card overflow-x-auto p-0">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-primary to-primary-glow">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-border/40 px-4 py-3.5 align-bottom text-[11px] font-bold uppercase tracking-wider text-primary-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className="transition-colors odd:bg-card even:bg-primary-soft/50 hover:bg-primary-soft"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={
                      ci === 0
                        ? "border-b border-border px-4 py-3 align-top font-semibold text-foreground"
                        : "border-b border-border px-4 py-3 align-top text-muted-foreground"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="mt-3 flex gap-2 text-sm italic leading-relaxed text-muted-foreground">
          <span aria-hidden className="not-italic text-primary">
            ▸
          </span>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="surface-card surface-card-hover animate-scale-in p-5">
      <div className="text-3xl leading-none text-primary">{value}</div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function Scorecard({
  name,
  rank,
  type,
  best,
  score,
  fees,
  duration,
  eligibility,
  level,
  pros,
  cons,
  skip,
  children,
}: {
  name: string;
  rank: number;
  type: string;
  best: string;
  score: string;
  fees: string;
  duration: string;
  eligibility: string;
  level: string;
  pros: string[];
  cons: string[];
  skip: string;
  children?: ReactNode;
}) {
  const numeric = Number.parseFloat(score);
  const pct = Number.isFinite(numeric) ? Math.max(0, Math.min(100, numeric * 10)) : 0;

  return (
    <article className="reveal surface-card surface-card-hover group relative mt-12 overflow-hidden p-6 sm:p-8">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[image:var(--gradient-sheen)] opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100"
      />
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-lg font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
          {rank}
        </span>
        <h3 className="text-2xl leading-tight text-foreground">{name}</h3>
      </div>
      <p className="mt-4 inline-block rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
        {best}
      </p>

      <div className="mt-6 rounded-lg bg-primary-soft/70 p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Overall score
          </span>
          <span className="text-xl font-semibold text-primary">{score}</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-card">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-[width] duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Credential type", type],
          ["Fees", fees],
          ["Duration", duration],
          ["Eligibility", eligibility],
          ["Capability ceiling", level],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-border bg-muted/60 px-4 py-3">
            <dt className="text-[11px] font-bold uppercase tracking-wider text-primary">{k}</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
      {children}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
            What it does well
          </h4>
          <Bullets items={pros} />
        </div>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Honest limitations
          </h4>
          <ul className="mt-5 space-y-3">
            {cons.map((c, i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-1.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground"
                >
                  !
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 rounded-lg border border-dashed border-note-border/60 bg-note px-4 py-3 text-sm leading-relaxed text-note-foreground">
        <strong>Who should skip this:</strong> {skip}
      </p>
    </article>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="reveal mt-8 space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="surface-card surface-card-hover group px-5 py-4 open:bg-primary-soft/40"
        >
          <summary className="flex cursor-pointer list-none items-start gap-3 text-base font-semibold text-foreground marker:hidden">
            <span
              aria-hidden
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-primary-soft text-sm font-bold text-primary transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
            {item.q}
          </summary>
          <p className="mt-3 animate-fade-up pl-9 text-base leading-relaxed text-muted-foreground">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
