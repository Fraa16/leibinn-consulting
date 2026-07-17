import type { Metadata } from "next";
import Link from "next/link";
import { SplitHero } from "@/components/SplitHero";
import { QuestionSection } from "@/components/QuestionSection";
import { Section, SectionHeading } from "@/components/Section";
import { CardGrid } from "@/components/CardGrid";
import { StepList, type Step } from "@/components/StepList";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd, breadcrumbJsonLd, howToJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Holding gründen: Beratung | Leibinn Consulting" },
  description:
    "Lohnt sich eine Holding für Sie? Beratung, Begleitung und Gründung aus einem Prozess. Mit Steuerberatern aus dem Netzwerk. Region Stuttgart. Erstgespräch kostenlos.",
  alternates: { canonical: "/holding" },
};

const faelle = [
  {
    title: "Der Reinvestierer.",
    text: "Die GmbH läuft, die Gewinne übersteigen den privaten Bedarf. Statt voller Besteuerung bei Entnahme fließt das Kapital in die Holding und arbeitet dort weiter: in Investments, Immobilien oder neuen Beteiligungen.",
  },
  {
    title: "Der Verkäufer in fünf Jahren.",
    text: "Wer einen Exit für möglich hält, stellt die Struktur besser Jahre vorher auf. Der Anteilsverkauf aus der Holding ist zu 95 Prozent körperschaftsteuerfrei, aus dem Privatvermögen nicht.",
  },
  {
    title: "Der Risiko-Trenner.",
    text: "Betriebsimmobilie, Fuhrpark, Rücklagen: Was in der operativen GmbH liegt, haftet mit. In der Holding liegt es außerhalb der Reichweite des Tagesgeschäfts.",
  },
];

const steps: Step[] = [
  {
    title: "Analyse",
    plainText:
      "Gewinne, Entnahmen, Pläne, Exit-Wahrscheinlichkeit: Wir rechnen, ob sich die Struktur für Sie trägt. Ergebnis ist eine klare Empfehlung, keine Verkaufspräsentation.",
    text: "Gewinne, Entnahmen, Pläne, Exit-Wahrscheinlichkeit: Wir rechnen, ob sich die Struktur für Sie trägt. Ergebnis ist eine klare Empfehlung, keine Verkaufspräsentation.",
  },
  {
    title: "Strukturkonzept",
    plainText:
      "Rechtsform, Beteiligungsverhältnisse, steuerliche Prüfung: Das Konzept entsteht gemeinsam mit einem Steuerberater aus unserem Netzwerk. Sie erhalten es schriftlich und begründet.",
    text: "Rechtsform, Beteiligungsverhältnisse, steuerliche Prüfung: Das Konzept entsteht gemeinsam mit einem Steuerberater aus unserem Netzwerk. Sie erhalten es schriftlich und begründet.",
  },
  {
    title: "Gründung",
    plainText:
      "Notartermin, Handelsregister, Bankkonten, Verträge: Wir koordinieren die Beteiligten, Sie unterschreiben, was Sie verstanden haben.",
    text: "Notartermin, Handelsregister, Bankkonten, Verträge: Wir koordinieren die Beteiligten, Sie unterschreiben, was Sie verstanden haben.",
  },
  {
    title: "Struktur mit Leben füllen",
    plainText:
      "Eine leere Holding bringt nichts. Jetzt folgt der eigentliche Zweck: Vermögensaufbau über die Struktur, vom Investment-Depot bis zur Immobilie in der Gesellschaft.",
    text: (
      <>
        Eine leere Holding bringt nichts. Jetzt folgt der eigentliche Zweck:
        Vermögensaufbau über die Struktur, vom{" "}
        <Link href="/investments" className="text-accent underline underline-offset-2">
          Investment-Depot
        </Link>{" "}
        bis zur{" "}
        <Link href="/immobilien" className="text-accent underline underline-offset-2">
          Immobilie in der Gesellschaft
        </Link>
        .
      </>
    ),
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Was kostet die Gründung einer Holding?",
    a: "Für eine Holding-GmbH fallen Notar- und Handelsregisterkosten von einigen hundert bis wenigen tausend Euro an, dazu das Stammkapital von 25.000 Euro, von dem zur Gründung die Hälfte eingezahlt sein muss. Laufend kommen Buchhaltung und Jahresabschluss hinzu. Die Gesamtrechnung gehört in jede Analyse, bevor gegründet wird.",
  },
  {
    q: "Brauche ich einen Steuerberater?",
    a: "Ja, zwingend. Die steuerliche Beurteilung Ihres Einzelfalls gehört in die Hände eines Steuerberaters. Leibinn Consulting übernimmt Analyse, Koordination und Umsetzung der Struktur und vermittelt den passenden Steuerberater aus dem geprüften Partnernetzwerk, falls Sie noch keinen haben.",
  },
  {
    q: "Wie lange dauert eine Holding-Gründung?",
    a: "Von der Entscheidung bis zur eingetragenen Struktur vergehen üblicherweise mehrere Wochen: Konzept und steuerliche Prüfung, Notartermin, Eintragung ins Handelsregister, Kontoeröffnung. Die Analyse davor braucht ein bis zwei Gespräche. Wer einen Exit plant, sollte deutlich früher beginnen, idealerweise Jahre vorher.",
  },
  {
    q: "Kann ich eine bestehende GmbH in eine Holding-Struktur überführen?",
    a: "Ja, das ist der häufigste Fall. Die Anteile an der bestehenden GmbH werden in eine neu gegründete Holding eingebracht. Dabei sind steuerliche Fristen und Bewertungsfragen zu beachten, unter anderem Sperrfristen nach der Einbringung. Genau deshalb steht die steuerliche Prüfung vor jedem Schritt.",
  },
  {
    q: "Lohnt sich eine Holding auch für Immobilien?",
    a: "Häufig ja: Immobilien in einer Gesellschaftsstruktur können steuerliche Vorteile bieten und trennen das Objekt vom operativen Risiko. Ob sich das gegenüber dem Privatkauf rechnet, hängt von Haltedauer, Finanzierung und Ihrer Gesamtsituation ab. Wir rechnen beide Varianten durch, bevor Sie kaufen.",
  },
];

export default function HoldingPage() {
  return (
    <>
      <SplitHero
        kicker="Holding-Strukturen & Unternehmensberatung"
        slug="holding"
        fact="95 %"
        factLabel="körperschaftsteuerfrei: Anteilsverkauf aus der Holding (§ 8b KStG)"
        title={
          <>
            Holding gründen:
            <br />
            Erst rechnen, dann strukturieren.
          </>
        }
        sub="Leibinn Consulting begleitet Unternehmer von der Frage, ob sich eine Holding lohnt, bis zur fertigen Struktur: Analyse, Konzept, Gründung und laufende Betreuung in einem Prozess, gemeinsam mit Steuerberatern aus dem Partnernetzwerk."
        ctaLabel="Struktur-Check anfragen"
        ctaHref={kontaktHref("struktur-check")}
        microTrust="Kostenloses Erstgespräch, mit klarer Empfehlung, auch wenn sie „keine Holding“ lautet"
      />

      <QuestionSection
        title="Was ist eine Holding?"
        answer="Eine Holding ist eine Gesellschaft, die Anteile an anderen Gesellschaften hält, typischerweise eine GmbH als Muttergesellschaft über einer operativen GmbH. Gewinne der Tochtergesellschaft können weitgehend steuerbegünstigt in die Holding fließen und dort für Investments, Immobilien oder neue Beteiligungen eingesetzt werden."
      >
        <p>
          Der Kern ist Trennung: Das operative Geschäft trägt das Tagesrisiko,
          die Holding sammelt das Vermögen. Verkauft die Holding später Anteile
          an der Tochter, bleibt der Gewinn nach § 8b KStG zu 95 Prozent
          körperschaftsteuerfrei. Ausgeschüttete Gewinne können in der Holding
          reinvestiert werden, ohne dass sie vorher als Privatentnahme voll
          versteuert wurden.
        </p>
        <p>
          Ob diese Vorteile bei Ihnen greifen, hängt vom Einzelfall ab:
          Gewinnhöhe, Ausschüttungsverhalten, Exit-Pläne, private Entnahmen.
          Genau das ist die Rechnung, die vor jeder Gründung stehen muss.
        </p>
      </QuestionSection>

      <Section tone="warm" wide>
        <SectionHeading>Ab wann lohnt sich eine Holding?</SectionHeading>
        <p className="mt-8 max-w-3xl border-l-4 border-accent pl-6 text-lg leading-relaxed font-medium md:text-xl">
          Eine Holding lohnt sich in der Regel, wenn dauerhaft Gewinne im
          Unternehmen bleiben, die nicht privat gebraucht werden, wenn ein
          späterer Verkauf des Unternehmens denkbar ist oder wenn Vermögen wie
          Immobilien und Beteiligungen vom operativen Risiko getrennt werden
          sollen. Wer alle Gewinne privat entnimmt, profitiert selten.
        </p>
        <CardGrid cards={faelle} />
        <p className="mt-10 max-w-3xl leading-relaxed text-ink-soft">
          Und wann nicht? Wenn Sie Ihre Gewinne vollständig privat entnehmen,
          wenn die Verwaltungskosten den Steuervorteil auffressen oder wenn das
          Geschäft dafür schlicht zu klein ist. Das sagen wir Ihnen im
          Erstgespräch genauso deutlich. Eine Holding, die sich nicht rechnet,
          ist keine Struktur, sondern Ballast.
        </p>
      </Section>

      <QuestionSection
        title="Wie läuft die Holding-Gründung ab?"
        answer="Die Gründung folgt vier Schritten: Analyse Ihrer Zahlen und Ziele, Strukturkonzept mit Steuerberater aus dem Partnernetzwerk, notarielle Gründung und Eintragung sowie anschließende Einbindung von Investments und Immobilien in die Struktur. Von der Entscheidung bis zur eingetragenen Holding vergehen üblicherweise mehrere Wochen."
      >
        <StepList steps={steps} />
      </QuestionSection>

      <Faq title="Häufige Fragen zur Holding" items={faqItems} />

      <FinalCta
        title={
          <>
            Erst die Rechnung.
            <br />
            Dann die Struktur.
          </>
        }
        text="Im kostenlosen Erstgespräch prüfen wir, ob sich eine Holding für Ihre Situation trägt. Sie erhalten eine klare Empfehlung, auch wenn sie „noch nicht“ lautet."
        ctaLabel="Struktur-Check anfragen"
        ctaHref={kontaktHref("struktur-check")}
      />

      <Disclaimer>
        Die Inhalte dieser Seite sind allgemeine Informationen und ersetzen
        keine steuerliche oder rechtliche Beratung. Die Beurteilung des
        Einzelfalls erfolgt durch Steuerberater und Rechtsanwälte aus dem
        Partnernetzwerk.
      </Disclaimer>

      <JsonLd data={breadcrumbJsonLd([{ name: "Holding", path: "/holding" }])} />
      <JsonLd data={howToJsonLd("Holding-Gründung mit Leibinn Consulting", steps)} />
    </>
  );
}
