import Link from "next/link";
import { footerNav, legalNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-heading text-xl font-bold">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Ganzheitliche Beratung für Vermögensaufbau, Immobilien,
              Strukturen und Absicherung. {site.region}.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
              {footerNav.map((item) => (
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
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
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
