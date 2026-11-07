"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics, worlds } from "@/lib/site";
import { Logo } from "./Brand";
import { IconArrowRight, IconCalendar, IconChevronDown } from "./icons";

/**
 * Schwebende Pill-Navigation (Markenfamilie). Oben auf dunklen Heroes als
 * dunkles Glas, nach dem ersten Scrollen weiß. Unter 1024 px: „Menü“-Button
 * mit Dropdown-Panel. Leistungen öffnen per Klick (nicht per Hover).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const ctaHref = pathname === "/" ? "#termin" : "/kontakt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menüs bei Seitenwechsel schließen (State-Abgleich während des Renderns)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setLeistungenOpen(false);
    setMobileOpen(false);
  }

  // Escape und Klick außerhalb schließen die Menüs
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLeistungenOpen(false);
        setMobileOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLeistungenOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const light = scrolled || mobileOpen;
  const close = () => {
    setLeistungenOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="pointer-events-none sticky top-0 z-50 h-[var(--header-h)] px-[calc(var(--inset)+8px)] pt-2.5 lg:pt-4">
      <div className="pointer-events-auto relative mx-auto max-w-[1240px]">
        <div
          className={`flex h-[60px] items-center justify-between gap-3 rounded-full border pr-2 pl-5 sm:gap-6 transition-[background-color,border-color,box-shadow,color] duration-300 lg:h-[68px] lg:pl-7 ${
            light
              ? "border-navy/8 bg-white/85 text-navy shadow-[0_10px_40px_rgba(13,26,45,0.08)] backdrop-blur-xl"
              : "border-white/12 bg-navy-950/35 text-white backdrop-blur-xl"
          }`}
        >
          <Link href="/" aria-label="Leibinn Consulting, zur Startseite" onClick={close}>
            <Logo className="h-[15px] sm:h-[17px] lg:h-[19px]" />
          </Link>

          {/* Desktop-Navigation */}
          <nav
            aria-label="Hauptnavigation"
            className={`hidden items-center gap-1 text-[15px] font-medium lg:flex ${
              light ? "text-navy/75" : "text-white/75"
            }`}
          >
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                aria-expanded={leistungenOpen}
                aria-controls="leistungen-menu"
                onClick={() => setLeistungenOpen((v) => !v)}
                className={`flex h-11 items-center gap-1.5 rounded-full px-4 transition-colors ${
                  light ? "hover:text-navy" : "hover:text-white"
                } ${leistungenOpen ? (light ? "text-navy" : "text-white") : ""}`}
              >
                Leistungen
                <IconChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${leistungenOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id="leistungen-menu"
                className={`absolute top-[calc(100%+14px)] left-1/2 w-[620px] -translate-x-1/2 transition-all duration-200 ${
                  leistungenOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <div className="rounded-[24px] border border-navy/8 bg-white p-3 text-navy shadow-[0_30px_70px_-30px_rgba(13,26,45,0.45)]">
                  <ul className="grid grid-cols-2 gap-1">
                    {topics.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={t.href}
                          onClick={close}
                          className="group flex items-start gap-3 rounded-2xl p-4 transition-colors hover:bg-ivory"
                        >
                          <span
                            aria-hidden
                            className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${worlds[t.world].dot}`}
                          />
                          <span>
                            <span className="block text-[15px] font-semibold">
                              {t.label}
                            </span>
                            <span className="mono mt-1.5 block text-[10px] text-subtle">
                              {worlds[t.world].label}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/leistungen"
                    onClick={close}
                    className="mt-1 flex items-center justify-between rounded-2xl bg-ivory px-4 py-3.5 text-sm font-semibold transition-colors hover:bg-ivory-deep"
                  >
                    Alle Leistungen im Überblick
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            {[
              { label: "Wegweiser", href: "/#wegweiser" },
              { label: "Über uns", href: "/ueber-uns" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`flex h-11 items-center rounded-full px-4 transition-colors ${
                  light ? "hover:text-navy" : "hover:text-white"
                } aria-[current=page]:font-semibold`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={ctaHref}
              onClick={close}
              className="btn btn-copper h-11 gap-2 px-3.5 text-sm max-[374px]:w-11 max-[374px]:px-0 sm:px-5 lg:h-[52px] lg:px-6 lg:text-[15px]"
            >
              <IconCalendar className="h-[17px] w-[17px]" />
              <span className="hidden sm:inline">Erstgespräch buchen</span>
              <span className="max-[374px]:sr-only sm:hidden">Termin</span>
            </Link>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setMobileOpen((v) => !v)}
              className={`icon-btn h-11 w-11 border lg:hidden ${
                light ? "border-navy/15 text-navy" : "border-white/20 text-white"
              }`}
            >
              <span aria-hidden className="relative block h-3 w-[18px]">
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded bg-current transition-transform duration-300 ${
                    mobileOpen ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded bg-current transition-transform duration-300 ${
                    mobileOpen ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobiles Menü */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile Navigation"
            className="mt-2 max-h-[calc(100svh-var(--header-h)-16px)] overflow-y-auto rounded-[24px] border border-navy/8 bg-white p-5 text-navy shadow-[0_30px_70px_-30px_rgba(13,26,45,0.45)] lg:hidden"
          >
            <p className="mono text-subtle">Leistungen</p>
            <ul className="mt-2">
              {topics.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={t.href}
                    onClick={close}
                    className="flex items-center gap-3 border-b border-navy/8 py-3.5 text-[17px] font-medium"
                  >
                    <span
                      aria-hidden
                      className={`h-2 w-2 rounded-full ${worlds[t.world].dot}`}
                    />
                    {t.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/leistungen"
                  onClick={close}
                  className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-copper-dark"
                >
                  Alle Leistungen im Überblick
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
            <ul className="mt-2 border-t border-navy/8 pt-2">
              {[
                { label: "Wegweiser", href: "/#wegweiser" },
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-3 text-[17px] font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={ctaHref}
              onClick={close}
              className="btn btn-lg btn-copper mt-4 w-full"
            >
              <IconCalendar className="h-[18px] w-[18px]" />
              Kostenloses Erstgespräch buchen
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
