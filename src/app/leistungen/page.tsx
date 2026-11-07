import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { Wegweiser } from "@/components/home/Wegweiser";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { PageShell } from "@/components/page/Blocks";
import { IconArrowRight, IconArrowUpRight } from "@/components/icons";
import { site, topicBySlug, topics, worlds, type TopicSlug, type WorldKey } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Leistungen im Überblick | Leibinn Consulting" },
  description:
    "Sechs Fachbereiche, ein Ansprechpartner: Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung, bAV / bKV, Absicherung. Region Stuttgart.",
  alternates: { canonical: "/leistungen" },
};

/** Was. Ergebnis. Für wen. (Copy-Doc Leistungen-Hub) */
const details: Record<TopicSlug, { was: string; ergebnis: string; fuer: string }> = {
  investments: {
    was: "Strategien für den Vermögensaufbau: Streuung, Risikoverteilung, Kostenkontrolle.",
    ergebnis: "Ein Depot, das geplant ist statt gewachsen.",
    fuer: "Alle, die Vermögen systematisch aufbauen wollen.",
  },
  absicherung: {
    was: "Schutz von Einkommen, Vermögen und Betrieb durch einen zugelassenen Makler mit freier Marktauswahl.",
    ergebnis: "Lücken geschlossen, Doppelungen gekündigt.",
    fuer: "Alle, die etwas Aufgebautes zu schützen haben.",
  },
  immobilien: {
    was: "Vermittlung von Objekten, die nie auf Portalen erscheinen, durch einen eingetragenen Immobilienmakler.",
    ergebnis: "Kauf ohne Bieterwettbewerb, auf Wunsch mit Verwaltung.",
    fuer: "Kapitalanleger mit klarem Suchprofil.",
  },
  finanzierung: {
    was: "Unabhängiger Bankenvergleich über Finanzierungsexperten aus dem Partnernetzwerk.",
    ergebnis: "Verhandelte Konditionen und ein koordinierter Prozess statt Hausbank-Angebot.",
    fuer: "Immobilienkäufer und Anschlussfinanzierer.",
  },
  holding: {
    was: "Analyse, Konzept und Gründung von Holding-Strukturen, gemeinsam mit Steuerberatern aus dem Netzwerk.",
    ergebnis: "Gewinne arbeiten in der Struktur, statt voll versteuert privat zu liegen.",
    fuer: "Unternehmer und Selbstständige mit GmbH.",
  },
  "bav-bkv": {
    was: "Betriebliche Altersvorsorge und Krankenversicherung als Mitarbeiter-Benefit.",
    ergebnis: "Ein attraktiverer Arbeitgeber, der Fachkräfte gewinnt und bindet, steuerlich optimiert.",
    fuer: "Unternehmen, die ihr Team langfristig halten wollen.",
  },
};

const worldIntro: Record<WorldKey, string> = {
  privat: "Vermögen aufbauen und schützen: die Basis für alles Weitere.",
  immobilien: "Sachwerte mit geprüften Zahlen, finanziert zu Marktkonditionen.",
  unternehmen: "Struktur für Unternehmer und Benefits, die Fachkräfte binden.",
};

const kette: { label: string; zusatz: string; slug: TopicSlug }[] = [
  { label: "Holding gründen", zusatz: "Struktur", slug: "holding" },
  { label: "Off-Market-Immobilie kaufen", zusatz: "Objekt", slug: "immobilien" },
  { label: "Bankenvergleich", zusatz: "Konditionen", slug: "finanzierung" },
  { label: "Mitarbeiter binden", zusatz: "Benefits", slug: "bav-bkv" },
  { label: "Gebäude und Haftung absichern", zusatz: "Schutz", slug: "absicherung" },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Leistungen von Leibinn Consulting",
  itemListElement: topics.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.label,
    url: `${site.url}${t.href}`,
  })),
};

function WorldsCard() {
  return (
    <div className="rounded-[26px] border border-white/12 bg-navy-950/55 p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      {(Object.keys(worlds) as WorldKey[]).map((key, i) => {
        const w = worlds[key];
        const items = topics.filter((t) => t.world === key);
        return (
          <div key={key} className={`px-4 py-4 ${i ? "border-t border-white/8" : ""}`}>
            <p className={`mono flex items-center gap-2 ${w.textOnDark}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${w.dot}`} />
              {w.label}
            </p>
            <ul className="mt-2">
              {items.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={t.href}
                    className="group -mx-2 flex items-center justify-between rounded-[12px] px-2 py-2 text-[16px] transition-colors hover:bg-white/6"
                  >
                    {t.label}
                    <IconArrowUpRight className="h-4 w-4 text-on-dark-subtle group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default function LeistungenPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
        eyebrow="Leistungen"
        title={
          <>
            Sechs Fachbereiche. <em>Ein System.</em>
          </>
        }
        lead="Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung, betriebliche Vorsorge (bAV / bKV) und Absicherung. Jeder Bereich funktioniert einzeln. Ihren Wert entfalten sie zusammen, weil Vermögensentscheidungen zusammenhängen."
        primary={{ label: "Kostenloses Erstgespräch buchen", href: "#termin" }}
        secondary={{ label: "Wegweiser starten", href: "#wegweiser" }}
        aside={<WorldsCard />}
        facts={[
          { value: "3", label: "Welten" },
          { value: "6", label: "Fachbereiche" },
          { value: "1", label: "Ansprechpartner" },
        ]}
      />

      {/* Drei Welten */}
      <section className="lc-section">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Im Überblick"
            title={
              <>
                Was, mit welchem Ergebnis, <em>für wen.</em>
              </>
            }
            lead="Die sechs Fachbereiche gehören zu drei Welten: Ihr privates Vermögen, Ihre Immobilien und Ihr Unternehmen. Jede Karte führt zur ausführlichen Seite."
          />
          <div className="mt-[clamp(48px,6vw,72px)] grid gap-x-4 gap-y-12 lg:grid-cols-3">
            {(Object.keys(worlds) as WorldKey[]).map((key, wi) => {
              const w = worlds[key];
              return (
                <div key={key} className="flex flex-col">
                  <Reveal delay={wi * 80} className="border-t border-navy/12 pt-5">
                    <p className={`mono flex items-center gap-2 ${w.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${w.dot}`} />
                      {w.label}
                    </p>
                    <p className="mt-3 min-h-[3em] text-[15px] leading-relaxed text-body">{worldIntro[key]}</p>
                  </Reveal>
                  <div className="mt-5 flex flex-1 flex-col gap-4">
                    {topics
                      .filter((t) => t.world === key)
                      .map((t, i) => {
                        const d = details[t.slug];
                        return (
                          <Reveal key={t.slug} delay={wi * 80 + i * 60} className="flex-1">
                            <Link
                              href={t.href}
                              className="group flex h-full flex-col rounded-[24px] border border-sand bg-white p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(13,26,45,0.35)]"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <h2 className="text-[clamp(22px,2vw,26px)] leading-tight font-medium tracking-[-0.02em] text-navy">
                                  {t.label}
                                </h2>
                                <span className="icon-btn h-10 w-10 border border-navy/14 text-navy group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                                  <IconArrowUpRight className="h-4 w-4" />
                                </span>
                              </div>
                              <dl className="mt-6 space-y-4 border-t border-ivory-deep pt-5 text-[14.5px] leading-relaxed">
                                {[
                                  ["Was", d.was],
                                  ["Ergebnis", d.ergebnis],
                                  ["Für wen", d.fuer],
                                ].map(([k, v]) => (
                                  <div key={k} className="grid grid-cols-[76px_1fr] gap-3">
                                    <dt className="mono pt-[3px] text-subtle">{k}</dt>
                                    <dd className={k === "Ergebnis" ? "font-medium text-navy" : "text-body"}>{v}</dd>
                                  </div>
                                ))}
                              </dl>
                            </Link>
                          </Reveal>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kette */}
      <section className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative">
          <SectionHead
            eyebrow="Das System"
            title={
              <>
                Warum die Bereiche <em>zusammengehören.</em>
              </>
            }
            lead="Ein Beispiel: fünf Entscheidungen, die ineinandergreifen. Wer sie getrennt trifft, verschenkt an jeder Schnittstelle Geld oder holt sich Widersprüche ins System."
          />
          <ol className="relative mt-[clamp(48px,6vw,72px)] grid gap-3 lg:grid-cols-5">
            <span aria-hidden className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-white/14 lg:block" />
            {kette.map((g, i) => {
              const t = topicBySlug(g.slug);
              const w = worlds[t.world];
              return (
                <Reveal as="li" key={g.label} delay={i * 80} className="relative">
                  <Link
                    href={t.href}
                    className="group flex h-full items-start gap-4 rounded-[20px] border border-white/10 bg-navy-850 p-5 transition-colors hover:border-white/24 hover:bg-navy-800 lg:flex-col lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:hover:bg-transparent"
                  >
                    <span
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-navy text-[15px] font-semibold text-navy-950 tnum ${w.dot}`}
                    >
                      {i + 1}
                    </span>
                    <span className="flex flex-col lg:items-center">
                      <span className={`mono lg:mt-5 ${w.textOnDark}`}>{g.zusatz}</span>
                      <span className="mt-2 text-[18px] leading-snug font-medium tracking-[-0.015em] group-hover:underline group-hover:underline-offset-4">
                        {g.label}
                      </span>
                      <span className="mt-2 text-[13.5px] text-on-dark-subtle">{t.label}</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ol>
          <Reveal className="mt-[clamp(48px,6vw,72px)] flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[34rem] text-[clamp(20px,1.8vw,24px)] leading-snug font-medium tracking-[-0.015em]">
              Ein Ansprechpartner, der alle Bausteine <em className="font-light text-acc-light">zusammendenkt.</em>
            </p>
            <Link href="/ueber-uns" className="btn btn-lg btn-white shrink-0">
              Wer dahintersteht
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Wegweiser */}
      <section id="wegweiser" className="lc-section">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Wegweiser"
            title={
              <>
                Wo anfangen? <em>Drei Fragen genügen.</em>
              </>
            }
            lead="Beantworten Sie drei kurze Fragen und sehen Sie, welche Fachbereiche bei Ihnen den größten Hebel haben. Unverbindlich und ohne Anmeldung."
          />
          <Reveal className="mt-[clamp(48px,6vw,72px)]">
            <Wegweiser />
          </Reveal>
        </div>
      </section>

      <BookingSection
        title={
          <>
            Wo anfangen? <em>Mit dem Gesamtbild.</em>
          </>
        }
        lead="Im kostenlosen Erstgespräch klären wir, welcher Bereich bei Ihnen den größten Hebel hat. Meistens ist es nicht der, mit dem Sie rechnen."
      />

      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }])} />
      <JsonLd data={itemListJsonLd} />
    </PageShell>
  );
}
