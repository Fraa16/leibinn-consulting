import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Steuern & Recht",
  description:
    "Steuerberater und Rechtsanwälte aus dem geprüften Partnernetzwerk, eingebunden in Ihr Gesamtbild. Leibinn Consulting, Region Stuttgart.",
  alternates: { canonical: "/steuern-recht" },
  // Platzhalterseite: erst indexieren, wenn die finale Copy eingebaut ist
  robots: { index: false, follow: true },
};

/*
 * [PLATZHALTER] Diese Seite wartet auf ihr Copy-Dokument.
 * Struktur und Interims-Text werden vollständig ersetzt, sobald es vorliegt.
 */
export default function SteuernRechtPage() {
  return (
    <>
      <Hero
        title={
          <>
            Steuern & Recht:
            <br />
            Das Partnernetzwerk.
          </>
        }
        sub="Steuerliche und rechtliche Beurteilungen gehören in die Hände von Steuerberatern und Rechtsanwälten. Leibinn Consulting bindet geprüfte Partner in Ihr Gesamtbild ein, damit Struktur, Investments und Immobilien zusammenpassen."
        ctaLabel="Erstgespräch vereinbaren"
        ctaHref="/kontakt"
        microTrust="Kostenlos und unverbindlich"
      />
      <Section>
        <p className="leading-relaxed text-ink-soft">
          [PLATZHALTER] Der vollständige Inhalt dieser Seite folgt mit dem
          Copy-Dokument für /steuern-recht.
        </p>
      </Section>
    </>
  );
}
