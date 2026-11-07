import Image from "next/image";
import Link from "next/link";
import { topicBySlug, worlds, type TopicSlug } from "@/lib/site";
import { Reveal } from "../Reveal";
import { IconArrowUpRight, IconCheck } from "../icons";

/* ---------- Prozess-Schritte ---------- */

export type ProcessStep = { title: string; text: React.ReactNode; plainText: string };

/**
 * Nummerierte Schritte mit Verbindungslinie. `tone` passt Farben an die
 * Fläche an (dunkles Panel oder Ivory).
 */
export function ProcessSteps({
  steps,
  tone = "dark",
}: {
  steps: ProcessStep[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 90} className="flex flex-col">
          <div className="flex items-center gap-4">
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold tnum ${
                i === 0
                  ? dark
                    ? "bg-acc-light text-navy-950"
                    : "bg-navy text-white"
                  : dark
                    ? "border border-white/20 text-acc-light"
                    : "border border-navy/18 text-acc-dark"
              }`}
            >
              {i + 1}
            </span>
            <span aria-hidden className={`h-px flex-1 ${dark ? "bg-white/12" : "bg-navy/12"}`} />
          </div>
          <p className={`mono mt-6 ${dark ? "text-acc-light" : "text-acc-dark"}`}>
            Schritt 0{i + 1}
          </p>
          <h3
            className={`mt-3 text-[clamp(21px,1.9vw,25px)] leading-tight font-medium tracking-[-0.02em] ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            {s.title}
          </h3>
          <p
            className={`mt-3 text-[15px] leading-relaxed ${
              dark ? "text-on-dark-body [&_a]:text-white" : "text-body [&_a]:text-navy"
            } [&_a]:underline [&_a]:underline-offset-2`}
          >
            {s.text}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------- Aussage mit Akzentlinie ---------- */

export function Statement({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`border-l-2 border-acc pl-6 text-[clamp(18px,1.6vw,21px)] leading-[1.55] font-medium tracking-[-0.01em] ${
        tone === "dark" ? "text-white" : "text-navy"
      }`}
    >
      {children}
    </p>
  );
}

/* ---------- Vergleichstabelle ---------- */

/**
 * Zwei Spalten im Vergleich, rechte Spalte hervorgehoben
 * (z. B. Portal vs. Off-Market, Vertreter vs. Makler).
 */
export function Compare({
  left,
  right,
  rows,
  caption,
}: {
  left: string;
  right: string;
  rows: { label: string; left: string; right: string }[];
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-[24px] border border-sand bg-white">
      <div className="grid grid-cols-2 text-[14px] sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="mono hidden border-b border-ivory-deep px-6 py-4 text-subtle sm:block">
          {caption ?? "Vergleich"}
        </div>
        <div className="mono border-b border-ivory-deep px-4 py-4 text-subtle sm:px-6">{left}</div>
        <div className="mono border-b border-navy bg-navy px-4 py-4 text-acc-light sm:px-6">
          {right}
        </div>
        {rows.map((r, i) => (
          <div key={r.label} className="contents">
            <div
              className={`col-span-2 bg-ivory/70 px-4 pt-3 pb-2 font-semibold text-navy sm:col-span-1 sm:bg-transparent sm:px-6 sm:py-4 ${i < rows.length - 1 ? "sm:border-b sm:border-ivory-deep" : ""}`}
            >
              {r.label}
            </div>
            <div
              className={`px-4 py-4 leading-snug text-body sm:px-6 ${i < rows.length - 1 ? "border-b border-ivory-deep" : ""}`}
            >
              {r.left}
            </div>
            <div
              className={`flex items-start gap-2 bg-navy px-4 py-4 leading-snug text-on-dark sm:px-6 ${
                i < rows.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <IconCheck className="mt-0.5 hidden h-4 w-4 shrink-0 text-acc-light sm:block" />
              {r.right}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

/* ---------- Zitat-Karte ---------- */

export function QuoteCard({
  quote,
  name,
  role,
  photo,
}: {
  quote: string;
  name: string;
  role: string;
  photo: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-[24px] border border-sand bg-white p-[clamp(24px,3vw,40px)]">
      <span aria-hidden className="text-[56px] leading-[0.6] font-light text-acc">
        „
      </span>
      <blockquote className="mt-4 flex-1 text-[clamp(19px,1.7vw,23px)] leading-[1.45] font-normal tracking-[-0.015em] text-navy">
        {quote}“
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-ivory-deep pt-6">
        <Image src={photo} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
        <span>
          <span className="block text-[15px] font-semibold text-navy">{name}</span>
          <span className="block text-[14px] text-subtle">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/* ---------- Verwandte Bereiche + Hinweis ---------- */

export function RelatedTopics({
  current,
  slugs,
  disclaimer,
}: {
  current: string;
  slugs: TopicSlug[];
  disclaimer?: React.ReactNode;
}) {
  return (
    <section className="lc-section">
      <div className="lc-wrap">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Passt dazu</p>
            <h2 className="display-3 mt-5 text-navy">
              Was mit {current} <em>zusammenhängt.</em>
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-acc-dark"
          >
            Alle Leistungen
            <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {slugs.map((slug, i) => {
            const t = topicBySlug(slug);
            const w = worlds[t.world];
            return (
              <Reveal key={slug} delay={i * 80}>
                <Link
                  href={t.href}
                  className="group flex h-full flex-col rounded-[24px] border border-sand bg-white p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(13,26,45,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`mono flex items-center gap-2 ${w.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${w.dot}`} />
                      {w.label}
                    </span>
                    <span className="icon-btn h-10 w-10 border border-navy/14 text-navy group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                      <IconArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-[22px] font-medium tracking-[-0.02em] text-navy">{t.label}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{t.teaser}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
        {disclaimer && (
          <aside className="mt-[clamp(56px,6vw,88px)] flex flex-col gap-3 border-t border-navy/12 pt-7 md:flex-row md:gap-10">
            <p className="mono shrink-0 text-subtle">Hinweis</p>
            <p className="max-w-[52rem] text-[13.5px] leading-relaxed text-subtle">{disclaimer}</p>
          </aside>
        )}
      </div>
    </section>
  );
}

/* ---------- Kleine Helfer ---------- */

/** Seiten-Wrapper: Ivory-Grund unter dem Header, Akzent der Welt. */
export function PageShell({
  accent = "copper",
  children,
}: {
  accent?: "copper" | "petrol" | "indigo";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`lc-page acc-${accent} -mt-[var(--header-h)] pt-[var(--inset)] pb-[var(--inset)]`}
    >
      {children}
    </div>
  );
}

/** Eyebrow-Inhalt mit Welt-Punkt: „Investments · Privates Vermögen“. */
export function TopicEyebrow({ slug }: { slug: TopicSlug }) {
  const t = topicBySlug(slug);
  const w = worlds[t.world];
  return (
    <>
      {t.label}
      <span aria-hidden className="opacity-50">·</span>
      <span className="flex items-center gap-2 text-on-dark-subtle">
        <span className={`h-1.5 w-1.5 rounded-full ${w.dot}`} />
        {w.label}
      </span>
    </>
  );
}

/** Liste mit Häkchen im Akzent. */
export function CheckList({
  items,
  tone = "light",
}: {
  items: React.ReactNode[];
  tone?: "dark" | "light";
}) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3.5">
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              tone === "dark" ? "bg-acc-light text-navy-950" : "bg-acc-tint text-acc-dark"
            }`}
          >
            <IconCheck className="h-3.5 w-3.5" />
          </span>
          <span
            className={`text-[16px] leading-relaxed ${tone === "dark" ? "text-on-dark" : "text-body"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
