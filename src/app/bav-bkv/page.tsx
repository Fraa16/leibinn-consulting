import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { LightSection } from "@/components/Theme";
import { PullStat } from "@/components/Editorial";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Betriebliche Altersvorsorge & Krankenversicherung (bAV/bKV) | Leibinn Consulting",
  },
  description:
    "Mit betrieblicher Altersvorsorge und Krankenversicherung Fachkräfte gewinnen und binden: steuerlich optimiert, verwaltungsarm und spürbar wirksam. Konzept und Umsetzung von Leibinn Consulting.",
  alternates: { canonical: "/bav-bkv" },
};

const vorteile = [
  "Struktur statt Einzelmaßnahmen: ein durchdachtes Benefit-System, das Orientierung schafft, statt loser Extras.",
  "Wirkung statt Aufwand: spürbar bei den Mitarbeitenden, verwaltungsarm für Sie.",
  "Rechtssicherheit & Klarheit: steuerliche Potenziale nutzen, ohne Grauzonen oder Zusatzaufwand.",
  "Starke Arbeitgebermarke: Bewerbende sehen sofort, dass sich Engagement bei Ihnen lohnt.",
];

const wirkung = [
  {
    label: "Arbeitgeberattraktivität",
    text: "Sichtbar machen, warum sich qualifizierte Bewerbende für Sie entscheiden.",
  },
  {
    label: "Mitarbeiterbindung",
    text: "Spürbare Vorteile stärken Loyalität und senken Fluktuation, gerade bei Leistungsträgern.",
  },
  {
    label: "Teamkultur & Identifikation",
    text: "Benefits transportieren Wertschätzung und stärken das Wir-Gefühl.",
  },
  {
    label: "Gesundheit & Wohlbefinden",
    text: "Moderne Vorsorge entlastet Teams, reduziert Ausfälle und erhält die Leistungsfähigkeit.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Was bringt bAV/bKV meinem Unternehmen konkret?",
    a: "Sie werden als Arbeitgeber spürbar attraktiver. Betriebliche Altersvorsorge und Krankenversicherung sind Benefits, die im Alltag Ihrer Mitarbeitenden ankommen: Sie helfen, qualifizierte Fachkräfte zu gewinnen und langfristig zu binden, ohne dass Sie die Bruttogehälter anheben müssen. Gleichzeitig sind die Beiträge steuerlich und bei den Sozialabgaben begünstigt.",
  },
  {
    q: "Wie aufwendig ist die Einführung für uns?",
    a: "Gering. Wir übernehmen Konzeption, Anbieterauswahl und die Kommunikation an Ihre Mitarbeitenden und richten die Verwaltung so ein, dass sie schlank bleibt. Sie erhalten ein System, das läuft, statt zusätzlicher Arbeit für Ihre Personalabteilung.",
  },
  {
    q: "Lohnt sich das auch für kleine Betriebe?",
    a: "Ja. Gerade kleine und mittlere Unternehmen gewinnen im Wettbewerb um Fachkräfte, wenn sie mehr bieten als Gehalt. Die Konzepte sind auf schlanke Strukturen und begrenzte Ressourcen ausgelegt und skalieren mit Ihrem Team, von wenigen Mitarbeitenden aufwärts.",
  },
  {
    q: "Was ist der Unterschied zwischen bAV und bKV?",
    a: "Die betriebliche Altersvorsorge (bAV) baut über den Arbeitgeber eine zusätzliche Rente auf. Die betriebliche Krankenversicherung (bKV) ergänzt die gesetzliche Absicherung um Leistungen wie Zahnersatz, Vorsorge oder schnellere Facharzttermine. Beide wirken als Benefit, oft ergänzen sie sich in einem gemeinsamen Konzept.",
  },
  {
    q: "Was kostet die Beratung?",
    a: "Das Erstgespräch ist kostenlos und unverbindlich. Wir schauen gemeinsam auf Ihre Ausgangslage, Ihre Ziele und den passenden Rahmen, bevor Sie entscheiden. Sie erhalten eine ehrliche Einschätzung, keine Verkaufspräsentation.",
  },
];

export default function BavBkvPage() {
  return (
    <>
      {/* Hero — Benefit-Fokus */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              bAV / bKV
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Vom Fachkräftemangel zum begehrten Arbeitgeber.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Gewinnen und binden Sie qualifizierte Mitarbeitende mit
              betrieblicher Altersvorsorge und Krankenversicherung – steuerlich
              optimiert, verwaltungsarm und spürbar wirksam, ohne massive
              Gehaltserhöhungen.
            </p>
            <div className="mt-9">
              <CtaButton href={kontaktHref("bav-bkv")}>
                Kostenloses Erstgespräch buchen
              </CtaButton>
            </div>
          </div>
          <PullStat
            value="0 €"
            label="kostet Ihr Erstgespräch – unverbindlich und ohne Vertrieb"
            className="hidden md:col-span-3 md:col-start-10 md:block"
          />
        </div>
      </section>

      {/* 01 · Warum — weiß, Zweispalter + Wirkungsbereiche */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
                <span className="font-heading text-azure">01</span>
                <span className="text-ink-faint">Der Hebel</span>
              </p>
              <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight md:text-4xl">
                Warum betriebliche Benefits über Fachkräfte entscheiden.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="border-l-4 border-azure pl-6 text-lg leading-relaxed font-medium">
                Gehalt allein überzeugt heute keine Leistungsträger mehr. Ein
                strukturiertes Benefit-System zeigt auf einen Blick, wofür Sie
                als Arbeitgeber stehen, und warum sich Mitarbeitende langfristig
                für Ihr Unternehmen entscheiden.
              </p>
              <ul className="mt-8 space-y-4">
                {vorteile.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden
                      className="mt-1 h-4 w-4 shrink-0 text-azure"
                    >
                      <path
                        d="M3 10.5l4.5 4.5L17 5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-sm font-semibold tracking-[0.2em] text-ink-faint uppercase">
              Vier Wirkungsbereiche moderner Benefits
            </p>
            <ul className="mt-4 grid gap-x-10 gap-y-6 border-t border-line pt-8 md:grid-cols-2">
              {wirkung.map((bereich) => (
                <li key={bereich.label}>
                  <h3 className="font-heading text-xl font-bold md:text-2xl">
                    {bereich.label}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {bereich.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LightSection>

      {/* 02 · FAQ */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-fawn uppercase md:col-span-3">
            02 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen" items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Machen Sie Ihr Unternehmen
            <br />
            zum begehrten Arbeitgeber.
          </>
        }
        text="Im kostenlosen Erstgespräch schauen wir auf Ihre Ausgangslage und Ziele. Sie erhalten eine ehrliche Einschätzung und konkrete Ansatzpunkte für ein Benefit-System, das zu Ihrem Unternehmen passt."
        ctaLabel="Kostenloses Erstgespräch buchen"
        ctaHref={kontaktHref("bav-bkv")}
      />

      <JsonLd
        data={breadcrumbJsonLd([{ name: "bAV / bKV", path: "/bav-bkv" }])}
      />
    </>
  );
}
