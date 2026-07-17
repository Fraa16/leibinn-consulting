"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { leistungenItems, site } from "@/lib/site";
import { fachbereichIcons, type FachbereichSlug } from "./icons";
import { LogoMark } from "./Brand";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-twilight/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark className="h-9 w-auto" />
          <span className="font-heading text-xl font-bold tracking-tight md:text-2xl">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          <div className="group relative">
            <Link
              href="/leistungen"
              className="flex items-center gap-1.5 py-6 text-[0.95rem] text-ink-soft transition-colors hover:text-frost"
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
            <div className="invisible absolute top-full left-1/2 -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="w-72 rounded-xl border border-line bg-cobalt p-2 shadow-2xl shadow-black/40">
                {leistungenItems.map((item) => {
                  const Icon =
                    fachbereichIcons[item.href.slice(1) as FachbereichSlug];
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[0.95rem] text-ink-soft transition-colors hover:bg-azure/20 hover:text-frost"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-azure-light" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-1 border-t border-line pt-1">
                  <Link
                    href="/leistungen"
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-fawn transition-colors hover:bg-azure/20"
                  >
                    Alle Leistungen im Überblick →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="/ueber-uns"
            className="text-[0.95rem] text-ink-soft transition-colors hover:text-frost"
          >
            Über uns
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full bg-fawn px-6 py-2.5 text-[0.95rem] font-semibold text-twilight-deep transition-all hover:-translate-y-0.5 hover:bg-fawn-light"
          >
            Erstgespräch buchen
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
