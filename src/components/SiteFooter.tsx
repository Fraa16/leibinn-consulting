import Link from "next/link";
import { entitySentence, leistungenItems, legalNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-heading text-xl font-bold">{site.name}</p>
            {/* Footer-Entity-Satz (GEO, sitewide) — Copy-Doc Startseite v3 */}
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {entitySentence}
            </p>
          </div>
          <nav aria-label="Leistungen">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Leistungen
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/leistungen"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Alle Leistungen
                </Link>
              </li>
              {leistungenItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Unternehmen">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Unternehmen
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Kontakt & Erstgespräch
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {/* [PLATZHALTER] Echte Kontaktdaten einsetzen */}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>{site.region}</li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
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
