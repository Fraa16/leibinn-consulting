"use client";

import { useState } from "react";
import Link from "next/link";
import { leistungenItems } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-6 bg-ink ${open ? "hidden" : ""}`} />
        <span
          className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
        />
      </button>
      {open && (
        <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-line bg-twilight-deep shadow-2xl shadow-black/40">
          <div className="px-6 py-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-faint uppercase">
              Leistungen
            </p>
            <ul className="mt-2">
              <li>
                <Link
                  href="/leistungen"
                  onClick={close}
                  className="block border-b border-line py-3 font-medium"
                >
                  Alle Leistungen im Überblick
                </Link>
              </li>
              {leistungenItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block border-b border-line py-3 text-ink-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4">
              <li>
                <Link href="/ueber-uns" onClick={close} className="block py-3">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" onClick={close} className="block py-3">
                  Kontakt
                </Link>
              </li>
            </ul>
            <Link
              href="/kontakt"
              onClick={close}
              className="mt-3 block rounded-full bg-fawn py-3 text-center font-semibold text-twilight-deep"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
