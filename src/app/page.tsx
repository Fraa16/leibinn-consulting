import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Scribble } from "@/components/Scribble";
import { Section, SectionHeading } from "@/components/Section";
import { FinalCta } from "@/components/FinalCta";

/*
 * [PLATZHALTER] Interims-Startseite: Hero-Copy stammt aus dem Design-Screenshot.
 * Wird durch das Copy-Dokument für die Startseite ersetzt, sobald es vorliegt.
 */

const leistungen = [
  {
    href: "/investments",
    title: "Investments",
    text: "Vermögensaufbau mit Strategie: breite Streuung, klare Risikoverteilung, transparente Kosten.",
  },
  {
    href: "/immobilien",
    title: "Off-Market-Immobilien",
    text: "Zugang zu Kapitalanlage-Objekten, die nie auf Portalen erscheinen. Ohne Bieterwettbewerb.",
  },
  {
    href: "/holding",
    title: "Holding-Strukturen",
    text: "Erst rechnen, dann strukturieren: von der Analyse bis zur eingetragenen Struktur.",
  },
  {
    href: "/absicherung",
    title: "Absicherung",
    text: "Was Sie aufbauen, muss geschützt sein: Einkommen, Objekte, Haftung und Betrieb.",
  },
  {
    href: "/finanzierung",
    title: "Finanzierung",
    text: "Unabhängiger Bankenvergleich statt Hausbank-Angebot, koordiniert aus einem Prozess.",
  },
  {
    href: "/steuern-recht",
    title: "Steuern & Recht",
    text: "Steuerberater und Rechtsanwälte aus dem geprüften Partnernetzwerk, eingebunden in Ihr Gesamtbild.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            <Scribble>Vermögensaufbau</Scribble> – Ganzheitliche Beratung
          </h1>
          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-ink-soft md:text-xl">
            In einer Welt, die immer schneller und komplexer wird, gewinnt die
            Unterstützung durch ein Beratungsunternehmen für den
            Vermögensaufbau und -optimierung zunehmend an Bedeutung. Wir kennen
            Ihre individuellen Anforderungen und arbeiten zielgerichtet und
            effizient daran, Sie zu entlasten. So können Sie sich auf das
            Wesentliche konzentrieren. Gemeinsam entwickeln wir
            maßgeschneiderte Lösungen, die genau auf Ihre finanziellen Ziele,
            Ihre Risikobereitschaft und Ihre persönliche Situation abgestimmt
            sind. Vertrauen, Qualität, Transparenz und eine partnerschaftliche
            Zusammenarbeit stehen dabei für uns an oberster Stelle.
          </p>
          <div className="mt-12">
            <CtaButton href="/kontakt">Erstgespräch vereinbaren</CtaButton>
            <p className="mt-4 text-sm text-ink-faint">
              Kostenlos und unverbindlich
            </p>
          </div>
        </div>
      </section>

      <Section tone="warm" wide>
        <SectionHeading center>Unsere Leistungen</SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-xl border border-line bg-paper p-8 transition-colors hover:border-accent"
            >
              <h3 className="text-xl font-bold">{l.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{l.text}</p>
              <span className="mt-5 inline-block font-medium text-accent">
                Mehr erfahren&nbsp;
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCta
        title={
          <>
            Ein Ansprechpartner.
            <br />
            Das ganze Bild.
          </>
        }
        text="Im kostenlosen Erstgespräch lernen wir Ihre Situation kennen und Sie erfahren, wo Sie heute stehen und was der nächste sinnvolle Schritt ist."
        ctaLabel="Erstgespräch vereinbaren"
        ctaHref="/kontakt"
      />
    </>
  );
}
