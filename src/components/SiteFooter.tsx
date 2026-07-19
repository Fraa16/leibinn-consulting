import Link from "next/link";
import { entitySentence, leistungenItems, legalNav, site } from "@/lib/site";
import { LogoLockup } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-twilight-deep">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoLockup className="h-28 w-auto" />
            {/* Footer-Entity-Satz (GEO, sitewide) — Copy-Doc Startseite v3 */}
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-faint">
              {entitySentence}
            </p>
          </div>
          <nav aria-label="Leistungen">
            <p className="text-xs font-semibold tracking-[0.2em] text-fawn uppercase">
              Leistungen
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/leistungen"
                  className="text-ink-soft transition-colors hover:text-fawn"
                >
                  Alle Leistungen
                </Link>
              </li>
              {leistungenItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-soft transition-colors hover:text-fawn"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Unternehmen">
            <p className="text-xs font-semibold tracking-[0.2em] text-fawn uppercase">
              Unternehmen
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-ink-soft transition-colors hover:text-fawn"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-ink-soft transition-colors hover:text-fawn"
                >
                  Kontakt & Erstgespräch
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-fawn uppercase">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {/* [PLATZHALTER] Echte Kontaktdaten einsetzen */}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-fawn"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-fawn"
                >
                  {site.phone}
                </a>
              </li>
              <li>{site.region}</li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-fawn"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
