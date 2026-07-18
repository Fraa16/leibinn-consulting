import type { Metadata } from "next";
import Link from "next/link";
import { LightSection } from "@/components/Theme";
import { Bento, BentoCell } from "@/components/Bento";
import { CtaBanner } from "@/components/CtaBanner";
import { PhotoBand } from "@/components/PhotoBand";
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
    surface: "cobalt" as const,
    className: "md:col-span-7 md:min-h-64",
  },
  {
    slug: "immobilien" as const,
    href: "/immobilien",
    title: "Off-Market-Immobilien",
    text: "Vermittlung von Objekten, die nie auf Portalen erscheinen, durch einen eingetragenen Immobilienmakler. Ergebnis: Kauf ohne Bieterwettbewerb, auf Wunsch mit Verwaltung. Für Kapitalanleger mit klarem Suchprofil.",
    surface: "azure" as const,
    className: "md:col-span-5 md:min-h-64",
  },
  {
    slug: "holding" as const,
    href: "/holding",
    title: "Holding-Strukturen & Unternehmensberatung",
    text: "Analyse, Konzept und Gründung von Holding-Strukturen, gemeinsam mit Steuerberatern aus dem Netzwerk. Ergebnis: Gewinne arbeiten in der Struktur statt voll versteuert privat zu liegen. Für Unternehmer und Selbstständige mit GmbH.",
    surface: "white" as const,
    className: "md:col-span-5",
  },
  {
    slug: "finanzierung" as const,
    href: "/finanzierung",
    title: "Finanzierung",
    text: "Unabhängiger Bankenvergleich über Finanzierungsexperten aus dem Partnernetzwerk. Ergebnis: verhandelte Konditionen und ein koordinierter Prozess statt Hausbank-Angebot. Für Immobilienkäufer und Anschlussfinanzierer.",
    surface: "outline" as const,
    className: "md:col-span-7",
  },
  {
    slug: "steuern-recht" as const,
    href: "/steuern-recht",
    title: "Steuern & Recht",
    text: "Vermittlung geprüfter Steuerberater und Anwälte, passend zur Struktur. Ergebnis: Spezialisten, die zur Situation passen, ohne eigene Suche. Für alle, deren Struktur komplexer wird.",
    surface: "outline" as const,
    className: "md:col-span-4",
  },
  {
    slug: "absicherung" as const,
    href: "/absicherung",
    title: "Absicherung",
    text: "Schutz von Einkommen, Vermögen und Betrieb durch einen Makler nach § 34d GewO mit freier Marktauswahl. Ergebnis: Lücken geschlossen, Doppelungen gekündigt. Für alle, die etwas Aufgebautes zu schützen haben.",
    surface: "fawn" as const,
    className: "md:col-span-8",
  },
];

const kette = [
  { label: "Holding gründen", zusatz: "Struktur", href: "/holding" },
  { label: "Off-Market-Immobilie kaufen", zusatz: "Objekt", href: "/immobilien" },
  { label: "Bankenvergleich", zusatz: "Konditionen", href: "/finanzierung" },
  { label: "Steuerlich prüfen lassen", zusatz: "Netzwerk", href: "/steuern-recht" },
  { label: "Gebäude & Haftung absichern", zusatz: "Schutz", href: "/absicherung" },
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
      {/* Hero — Editorial-Zweispalter */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Leistungen
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] font-bold tracking-tight md:text-7xl">
              Sechs
              <br />
              Fachbereiche.
              <br />
              <span className="text-azure-light">Ein System.</span>
            </h1>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-relaxed text-ink-soft">
              Leibinn Consulting deckt sechs Bereiche ab: Investments,
              Off-Market-Immobilien, Holding-Strukturen, Finanzierung, die
              Vermittlung von Steuer- und Rechtsexperten sowie Absicherung.
              Jeder Bereich funktioniert einzeln. Ihren Wert entfalten sie
              zusammen, weil Vermögensentscheidungen zusammenhängen.
            </p>
          </div>
        </div>
      </section>

      {/* Bento der sechs Bereiche */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Bento>
            {cards.map((card) => {
              const Icon = fachbereichIcons[card.slug];
              const onColor =
                card.surface === "azure"
                  ? "text-white/85"
                  : card.surface === "fawn"
                    ? "text-twilight-deep/75"
                    : card.surface === "white"
                      ? "text-[#191838]/70"
                      : "text-ink-soft";
              const iconTone =
                card.surface === "azure"
                  ? "bg-white/15 text-white"
                  : card.surface === "fawn"
                    ? "bg-twilight-deep/10 text-twilight-deep"
                    : card.surface === "white"
                      ? "bg-azure/10 text-azure"
                      : "bg-azure/25 text-azure-light";
              return (
                <BentoCell
                  key={card.href}
                  href={card.href}
                  surface={card.surface}
                  className={card.className}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconTone}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <IconArrowRight className="h-5 w-5 opacity-60 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h2 className="mt-auto pt-8 font-heading text-2xl leading-snug font-bold">
                    {card.title}
                  </h2>
                  <p className={`mt-3 text-[0.95rem] leading-relaxed ${onColor}`}>
                    {card.text}
                  </p>
                </BentoCell>
              );
            })}
          </Bento>
        </div>
      </section>

      {/* Foto-Band — Cedrik in der Präsentation */}
      <PhotoBand
        src="/images/cedrik-praesentation.webp"
        alt="Cedrik Leibinn präsentiert Rahmenbedingungen und Umsetzung im Besprechungsraum"
        focus="center"
        height="md"
      >
        <p className="max-w-lg font-heading text-2xl leading-snug font-medium text-white text-balance md:text-3xl">
          Ein Ansprechpartner, der alle Bausteine zusammendenkt.
        </p>
      </PhotoBand>

      {/* System-Sektion — weiß, nummerierte Kette */}
      <LightSection>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl leading-[1.12] font-bold tracking-tight md:text-4xl">
                Warum die Bereiche
                <br />
                zusammengehören.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Ein Beispiel: Fünf Entscheidungen, die ineinandergreifen. Wer
                sie getrennt trifft, verschenkt an jeder Schnittstelle Geld
                oder holt sich Widersprüche ins System.
              </p>
            </div>
            <ol className="md:col-span-7 md:col-start-6">
              {kette.map((glied, i) => (
                <li key={glied.label}>
                  <Link
                    href={glied.href}
                    className="group flex items-baseline gap-5 border-b border-line py-5 transition-colors hover:text-azure"
                  >
                    <span className="font-heading text-2xl font-bold text-azure/40">
                      {i + 1}
                    </span>
                    <span className="font-heading text-xl font-bold md:text-2xl">
                      {glied.label}
                    </span>
                    <span className="ml-auto text-sm tracking-wide text-ink-faint uppercase">
                      {glied.zusatz}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </LightSection>

      <CtaBanner
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
