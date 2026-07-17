import Link from "next/link";
import { leistungenItems, site } from "@/lib/site";
import { fachbereichIcons, type FachbereichSlug } from "./icons";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="relative mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        {/* [PLATZHALTER] Wortmarke durch Logo-Datei ersetzen, sobald sie vorliegt */}
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight md:text-2xl"
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          <div className="group relative">
            <Link
              href="/leistungen"
              className="flex items-center gap-1.5 py-6 text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
            >
              Leistungen
              <svg
                viewBox="0 0 12 12"
                aria-hidden
                className="h-3 w-3 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
              >
                <path
                  d="M2 4l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-0 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="w-72 rounded-xl border border-line bg-paper p-2 shadow-xl shadow-ink/5">
                {leistungenItems.map((item) => {
                  const Icon =
                    fachbereichIcons[item.href.slice(1) as FachbereichSlug];
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[0.95rem] text-ink-soft transition-colors hover:bg-accent-tint hover:text-ink"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-accent" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-1 border-t border-line pt-1">
                  <Link
                    href="/leistungen"
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent-tint"
                  >
                    Alle Leistungen im Überblick →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="/ueber-uns"
            className="text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
          >
            Über uns
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full bg-accent px-6 py-2.5 text-[0.95rem] font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Erstgespräch buchen
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
