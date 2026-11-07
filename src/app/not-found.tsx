import Link from "next/link";
import type { Metadata } from "next";
import { BrandLine } from "@/components/Brand";
import { PageShell } from "@/components/page/Blocks";
import { IconArrowUpRight, IconCalendar } from "@/components/icons";
import { topics, worlds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="lc-panel flex min-h-[calc(100svh-2*var(--inset))] flex-col !py-0">
        <BrandLine
          shape="a"
          color="var(--acc-light)"
          opacity={0.1}
          className="-bottom-[10%] -left-[12%] w-[min(980px,85vw)]"
        />
        <div className="lc-wrap relative grid flex-1 items-center gap-14 pt-[calc(var(--header-h)+48px)] pb-16 min-[1000px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col items-start">
            <p className="eyebrow">Fehler 404</p>
            <p className="mt-8 text-[clamp(96px,14vw,200px)] leading-[0.85] font-light tracking-[-0.06em] text-acc-light tnum">
              404
            </p>
            <h1 className="display-2 mt-8">
              Diese Seite <em>gibt es nicht.</em>
            </h1>
            <p className="lead mt-6 max-w-[32rem]">
              Der Link ist veraltet oder die Adresse wurde falsch eingegeben. Von
              hier finden Sie zurück zu dem, was Sie suchen.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-lg btn-copper">
                Zur Startseite
              </Link>
              <Link href="/kontakt" className="btn btn-lg btn-outline-dark">
                <IconCalendar className="h-[18px] w-[18px]" />
                Erstgespräch buchen
              </Link>
            </div>
          </div>
          <nav
            aria-label="Leistungen"
            className="rounded-[26px] border border-white/12 bg-navy-950/55 p-2"
          >
            <p className="mono px-4 pt-4 pb-2 text-on-dark-subtle">Leistungen</p>
            <ul>
              {topics.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={t.href}
                    className="group flex items-center justify-between rounded-[14px] px-4 py-3 text-[16px] transition-colors hover:bg-white/6"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full ${worlds[t.world].dot}`} />
                      {t.label}
                    </span>
                    <IconArrowUpRight className="h-4 w-4 text-on-dark-subtle group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
