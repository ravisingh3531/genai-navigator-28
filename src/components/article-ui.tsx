import type { ReactNode } from "react";

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/70 py-14">
      {children}
    </section>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 font-display text-2xl leading-snug text-foreground">{children}</h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-lg leading-relaxed text-foreground/90">{children}</p>;
}

export function Callout({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="mt-8 rounded-lg border-l-4 border-accent bg-card p-5 shadow-sm">
      {label ? (
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {label}
        </div>
      ) : null}
      <div className="text-base leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Numbered({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mt-5 space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 text-base leading-relaxed text-muted-foreground">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-secondary text-sm font-semibold text-secondary-foreground">
            {i + 1}
          </span>
          <span>{item}</span>
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
    <figure className="mt-8">
      <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-secondary">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-border px-4 py-3 align-bottom text-xs font-semibold uppercase tracking-wider text-secondary-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="odd:bg-background even:bg-muted/40">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={
                      ci === 0
                        ? "border-b border-border/70 px-4 py-3 align-top font-semibold text-foreground"
                        : "border-b border-border/70 px-4 py-3 align-top text-muted-foreground"
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
        <figcaption className="mt-3 text-sm italic text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
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
  return (
    <article className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="rounded-md bg-accent px-2.5 py-1 text-sm font-bold text-accent-foreground">
          #{rank}
        </span>
        <h3 className="font-display text-2xl leading-tight text-foreground">{name}</h3>
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-accent">{best}</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Overall score", score],
          ["Credential type", type],
          ["Fees", fees],
          ["Duration", duration],
          ["Eligibility", eligibility],
          ["Capability ceiling", level],
        ].map(([k, v]) => (
          <div key={k} className="rounded-md bg-muted/60 px-4 py-3">
            <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {k}
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
      {children}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            What it does well
          </h4>
          <Bullets items={pros} />
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Honest limitations
          </h4>
          <Bullets items={cons} />
        </div>
      </div>
      <p className="mt-6 rounded-md border border-dashed border-border px-4 py-3 text-sm leading-relaxed text-foreground/90">
        <strong>Who should skip this:</strong> {skip}
      </p>
    </article>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-card">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4">
          <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
            <span className="mr-2 text-accent">?</span>
            {item.q}
          </summary>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
