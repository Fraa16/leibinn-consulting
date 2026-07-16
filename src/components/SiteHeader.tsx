import Link from "next/link";
import { navItems, site } from "@/lib/site";
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
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="rounded-full bg-accent px-6 py-2.5 text-[0.95rem] font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Kontakt
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
