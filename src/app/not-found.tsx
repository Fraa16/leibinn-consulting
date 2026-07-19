import Link from "next/link";
import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { LogoMark } from "@/components/Brand";
import { leistungenItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <LogoMark className="mb-8 h-12 w-auto" />
          <p className="font-heading text-8xl font-bold text-fawn md:text-9xl">
            404
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
            Diese Seite gibt es nicht.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Der Link ist veraltet oder die Adresse wurde falsch eingegeben. Von
            hier finden Sie zurück zu dem, was Sie suchen.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaButton href="/">Zur Startseite</CtaButton>
            <CtaButton href="/kontakt" variant="secondary">
              Erstgespräch buchen
            </CtaButton>
          </div>
        </div>
        <nav
          aria-label="Leistungen"
          className="md:col-span-4 md:col-start-9 md:self-center"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-ink-faint uppercase">
            Leistungen
          </p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {leistungenItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 font-medium transition-colors hover:text-fawn"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
