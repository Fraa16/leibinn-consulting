import Link from "next/link";
import { entitySentence, legalNav, site, topics, worlds } from "@/lib/site";
import { BrandLine, Logo } from "./Brand";
import { IconCalendar } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="lc-page relative overflow-hidden pt-[clamp(72px,8vw,112px)]">
      <BrandLine
        shape="a"
        color="var(--color-copper)"
        opacity={0.12}
        className="-top-10 -right-32 w-[min(720px,80vw)]"
      />
      <div className="lc-wrap relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="max-w-md">
            <Logo variant="lockup" className="h-7 text-navy" />
            {/* Footer-Entity-Satz (GEO, sitewide) */}
            <p className="mt-6 text-[15px] leading-relaxed text-body">
              {entitySentence}
            </p>
            <Link href="/#termin" className="btn btn-ink mt-8">
              <IconCalendar className="h-4 w-4" />
              Erstgespräch buchen
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-[1.1fr_0.9fr_1.3fr]">
            <nav aria-label="Leistungen">
              <p className="mono text-subtle">Leistungen</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {topics.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={t.href}
                      className="group inline-flex items-center gap-2.5 text-navy/80 transition-colors hover:text-navy"
                    >
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 rounded-full ${worlds[t.world].dot}`}
                      />
                      {t.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/leistungen"
                    className="font-medium text-copper-dark hover:text-navy"
                  >
                    Alle Leistungen →
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Unternehmen">
              <p className="mono text-subtle">Unternehmen</p>
              <ul className="mt-5 space-y-3 text-[15px] text-navy/80">
                <li>
                  <Link href="/ueber-uns" className="hover:text-navy">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/#wegweiser" className="hover:text-navy">
                    Wegweiser
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-navy">
                    Kontakt & Erstgespräch
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              <p className="mono text-subtle">Kontakt</p>
              <ul className="mt-5 space-y-3 text-[15px] text-navy/80">
                <li>
                  <a href={`mailto:${site.email}`} className="break-words hover:text-navy">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="hover:text-navy"
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="text-body">{site.region}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-navy/12 py-7 text-[13px] text-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} · Eingetragener Immobilienmakler und
            zugelassener Versicherungsmakler
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" data-cookie-settings className="text-left hover:text-navy">
                Cookie-Einstellungen
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Übergroße, angeschnittene Wortmarke als Abschluss */}
      <div
        aria-hidden
        className="lc-wrap relative h-[clamp(44px,7.4vw,96px)] overflow-hidden"
      >
        <span className="logo-mask logo-wordmark w-full text-navy/[0.06]" />
      </div>
    </footer>
  );
}
