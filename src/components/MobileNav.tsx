"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
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
        <nav className="absolute inset-x-0 top-full border-b border-line bg-paper shadow-lg">
          <ul className="px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-lg last:border-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent py-3 text-center font-medium text-white"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
