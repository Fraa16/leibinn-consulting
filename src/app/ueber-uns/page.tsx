import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Leibinn Consulting: ganzheitliche Beratung für Vermögensaufbau, Immobilien, Strukturen und Absicherung in der Region Stuttgart.",
  alternates: { canonical: "/ueber-uns" },
  // Platzhalterseite: erst indexieren, wenn die finale Copy eingebaut ist
  robots: { index: false, follow: true },
};

/*
 * [PLATZHALTER] Diese Seite wartet auf ihr Copy-Dokument.
 * Struktur und Interims-Text werden vollständig ersetzt, sobald es vorliegt.
 */
export default function UeberUnsPage() {
  return (
    <>
      <Hero
        title={
          <>
            Über
            <br />
            Leibinn Consulting.
          </>
        }
        sub="Ganzheitliche Beratung für Vermögensaufbau: Investments, Off-Market-Immobilien, Holding-Strukturen, Absicherung und Finanzierung, zusammengedacht von einem Ansprechpartner."
        ctaLabel="Erstgespräch vereinbaren"
        ctaHref="/kontakt"
        microTrust="Kostenlos und unverbindlich"
      />
      <Section>
        <p className="leading-relaxed text-ink-soft">
          [PLATZHALTER] Der vollständige Inhalt dieser Seite (Porträt, Werdegang,
          Team-Fotos) folgt mit dem Copy-Dokument für /ueber-uns.
        </p>
      </Section>
    </>
  );
}
