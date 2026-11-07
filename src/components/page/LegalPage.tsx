import Link from "next/link";
import { PageHero } from "./PageHero";
import { PageShell } from "./Blocks";
import { legalNav } from "@/lib/site";

/** Rahmen für Impressum und Datenschutz: kompakter Hero, ruhige Lesespalte. */
export function LegalPage({
  title,
  current,
  lead,
  children,
}: {
  title: string;
  lead: string;
  current: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: title }]}
        eyebrow="Rechtliches"
        title={title}
        lead={lead}
      />
      <section className="lc-section">
        <div className="lc-wrap grid items-start gap-10 min-[1000px]:grid-cols-[220px_minmax(0,1fr)] min-[1000px]:gap-16">
          <nav aria-label="Rechtliches" className="min-[1000px]:sticky min-[1000px]:top-[calc(var(--header-h)+40px)]">
            <p className="mono text-subtle">Rechtliches</p>
            <ul className="mt-4 space-y-1">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.href === current ? "page" : undefined}
                    className="block rounded-[12px] px-3 py-2 text-[15px] text-body transition-colors hover:bg-white hover:text-navy aria-[current=page]:bg-white aria-[current=page]:font-semibold aria-[current=page]:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <article className="legal max-w-[46rem] rounded-[28px] border border-sand bg-white p-[clamp(24px,4vw,56px)] text-[16px] leading-relaxed text-body">
            {children}
          </article>
        </div>
      </section>
    </PageShell>
  );
}
