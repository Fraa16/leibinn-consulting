import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { fachbereichIcons, IconArrowRight } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Leistungen im Überblick | Leibinn Consulting" },
  description:
    "Sechs Fachbereiche, ein Ansprechpartner: Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung, Steuern & Recht, Absicherung. Region Stuttgart.",
  alternates: { canonical: "/leistungen" },
};

/** Card-Reihenfolge = Gewichtung laut Copy-Doc (Was. Ergebnis. Für wen.) */
const cards = [
  {
    slug: "investments" as const,
    href: "/investments",
    title: "Investments",
    text: "Strategien für den Vermögensaufbau: Streuung, Risikoverteilung, Kostenkontrolle. Ergebnis: ein Depot, das geplant ist statt gewachsen. Für alle, die Vermögen systematisch aufbauen wollen.",
  },
  {
    slug: "immobilien" as const,
    href: "/immobilien",
    title: "Off-Market-Immobilien",
    text: "Vermittlung von Objekten, die nie auf Portalen erscheinen, durch einen eingetragenen Immobilienmakler. Ergebnis: Kauf ohne Bieterwettbewerb, auf Wunsch mit Verwaltung. Für Kapitalanleger mit klarem Suchprofil.",
  },
  {
    slug: "holding" as const,
    href: "/holding",
    title: "Holding-Strukturen & Unternehmensberatung",
    text: "Analyse, Konzept und Gründung von Holding-Strukturen, gemeinsam mit Steuerberatern aus dem Netzwerk. Ergebnis: Gewinne arbeiten in der Struktur statt voll versteuert privat zu liegen. Für Unternehmer und Selbstständige mit GmbH.",
  },
  {
    slug: "finanzierung" as const,
    href: "/finanzierung",
    title: "Finanzierung",
    text: "Unabhängiger Bankenvergleich über Finanzierungsexperten aus dem Partnernetzwerk. Ergebnis: verhandelte Konditionen und ein koordinierter Prozess statt Hausbank-Angebot. Für Immobilienkäufer und Anschlussfinanzierer.",
  },
  {
    slug: "steuern-recht" as const,
    href: "/steuern-recht",
    title: "Steuern & Recht",
    text: "Vermittlung geprüfter Steuerberater und Anwälte, passend zur Struktur. Ergebnis: Spezialisten, die zur Situation passen, ohne eigene Suche. Für alle, deren Struktur komplexer wird.",
  },
  {
    slug: "absicherung" as const,
    href: "/absicherung",
    title: "Absicherung",
    text: "Schutz von Einkommen, Vermögen und Betrieb durch einen Makler nach § 34d GewO mit freier Marktauswahl. Ergebnis: Lücken geschlossen, Doppelungen gekündigt. Für alle, die etwas Aufgebautes zu schützen haben.",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Leistungen von Leibinn Consulting",
  itemListElement: cards.map((card, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: card.title,
    url: `${site.url}${card.href}`,
  })),
};

export default function LeistungenPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-warm">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl">
            Sechs Fachbereiche.
            <br />
            Ein System.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Leibinn Consulting deckt sechs Bereiche ab: Investments,
            Off-Market-Immobilien, Holding-Strukturen, Finanzierung, die
            Vermittlung von Steuer- und Rechtsexperten sowie Absicherung.
            Jeder Bereich funktioniert einzeln. Ihren Wert entfalten sie
            zusammen, weil Vermögensentscheidungen zusammenhängen.
          </p>
        </div>
      </section>

      <Section wide>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = fachbereichIcons[card.slug];
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-8 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-tint text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-heading text-xl leading-snug font-bold group-hover:text-accent">
                  {card.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {card.text}
                </p>
                <IconArrowRight className="mt-5 h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </Section>

      <Section tone="warm">
        <SectionHeading>
          Warum die Bereiche
          <br />
          zusammengehören.
        </SectionHeading>
        <p className="mt-8 leading-relaxed text-ink-soft">
          Ein Beispiel: Ein Unternehmer gründet eine{" "}
          <Link href="/holding" className="text-accent underline underline-offset-2">
            Holding
          </Link>{" "}
          <em>(Struktur)</em>, kauft darüber eine{" "}
          <Link href="/immobilien" className="text-accent underline underline-offset-2">
            Off-Market-Immobilie
          </Link>{" "}
          <em>(Objekt)</em>, finanziert sie über den{" "}
          <Link href="/finanzierung" className="text-accent underline underline-offset-2">
            Bankenvergleich
          </Link>{" "}
          <em>(Konditionen)</em>, lässt die Gestaltung{" "}
          <Link href="/steuern-recht" className="text-accent underline underline-offset-2">
            steuerlich prüfen
          </Link>{" "}
          <em>(Netzwerk)</em> und{" "}
          <Link href="/absicherung" className="text-accent underline underline-offset-2">
            sichert Gebäude und Haftung ab
          </Link>{" "}
          <em>(Schutz)</em>. Fünf Entscheidungen, die ineinandergreifen. Wer
          sie getrennt trifft, verschenkt an jeder Schnittstelle Geld oder holt
          sich Widersprüche ins System.
        </p>
      </Section>

      <FinalCta
        title={
          <>
            Wo anfangen?
            <br />
            Mit dem Gesamtbild.
          </>
        }
        text="Im kostenlosen Erstgespräch klären wir, welcher Bereich bei Ihnen den größten Hebel hat. Meistens ist es nicht der, mit dem Sie rechnen."
        ctaLabel="Kostenloses Erstgespräch buchen"
        ctaHref="/kontakt"
      />

      <JsonLd
        data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }])}
      />
      <JsonLd data={itemListJsonLd} />
    </>
  );
}
