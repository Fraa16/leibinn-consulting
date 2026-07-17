import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { LightSection } from "@/components/Theme";
import { Bento, BentoCell } from "@/components/Bento";
import { EditorialHeader, PullStat } from "@/components/Editorial";
import { BigSteps } from "@/components/BigSteps";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd, breadcrumbJsonLd, howToJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";
import type { Step } from "@/components/StepList";

export const metadata: Metadata = {
  title: { absolute: "Holding gründen: Beratung | Leibinn Consulting" },
  description:
    "Lohnt sich eine Holding für Sie? Beratung, Begleitung und Gründung aus einem Prozess. Mit Steuerberatern aus dem Netzwerk. Region Stuttgart. Erstgespräch kostenlos.",
  alternates: { canonical: "/holding" },
};

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
      {/* Hero — schmaler dunkler Streifen, 95 % als Anker */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Holding-Strukturen & Unternehmensberatung
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Holding gründen:
              <br />
              Erst rechnen, dann strukturieren.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Leibinn Consulting begleitet Unternehmer von der Frage, ob sich
              eine Holding lohnt, bis zur fertigen Struktur: Analyse, Konzept,
              Gründung und laufende Betreuung in einem Prozess, gemeinsam mit
              Steuerberatern aus dem Partnernetzwerk.
            </p>
            <div className="mt-9">
              <CtaButton href={kontaktHref("struktur-check")}>
                Struktur-Check anfragen
              </CtaButton>
              <p className="mt-4 text-sm text-ink-faint">
                Kostenloses Erstgespräch, mit klarer Empfehlung, auch wenn sie
                „keine Holding“ lautet
              </p>
            </div>
          </div>
          <PullStat
            value="95 %"
            label="körperschaftsteuerfrei: Anteilsverkauf aus der Holding (§ 8b KStG)"
            className="hidden md:col-span-4 md:col-start-9 md:block md:text-right [&>p:last-child]:md:ml-auto"
          />
        </div>
      </section>

      {/* 01 · Definition — weiß, mit Randnotiz-Spalte */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
                <span className="font-heading text-azure">01</span>
                <span className="text-ink-faint">Definition</span>
              </p>
              <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight md:text-4xl">
                Was ist eine Holding?
              </h2>
              <p className="mt-8 hidden border-t border-line pt-6 text-sm leading-relaxed text-ink-faint md:block">
                § 8b KStG: Gewinne aus dem Verkauf von Tochter-Anteilen bleiben
                in der Holding zu 95 Prozent körperschaftsteuerfrei.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="border-l-4 border-azure pl-6 text-lg leading-relaxed font-medium">
                Eine Holding ist eine Gesellschaft, die Anteile an anderen
                Gesellschaften hält, typischerweise eine GmbH als
                Muttergesellschaft über einer operativen GmbH. Gewinne der
                Tochtergesellschaft können weitgehend steuerbegünstigt in die
                Holding fließen und dort für Investments, Immobilien oder neue
                Beteiligungen eingesetzt werden.
              </p>
              <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Der Kern ist Trennung: Das operative Geschäft trägt das
                  Tagesrisiko, die Holding sammelt das Vermögen. Verkauft die
                  Holding später Anteile an der Tochter, bleibt der Gewinn nach
                  § 8b KStG zu 95 Prozent körperschaftsteuerfrei.
                  Ausgeschüttete Gewinne können in der Holding reinvestiert
                  werden, ohne dass sie vorher als Privatentnahme voll
                  versteuert wurden.
                </p>
                <p>
                  Ob diese Vorteile bei Ihnen greifen, hängt vom Einzelfall ab:
                  Gewinnhöhe, Ausschüttungsverhalten, Exit-Pläne, private
                  Entnahmen. Genau das ist die Rechnung, die vor jeder Gründung
                  stehen muss.
                </p>
              </div>
            </div>
          </div>

          {/* 02 · Lohnt sich — Fälle-Bento im selben hellen Block */}
          <div className="mt-24 md:mt-32">
            <EditorialHeader
              no="02"
              kicker="Die Rechnung"
              title="Ab wann lohnt sich eine Holding?"
              intro="Eine Holding lohnt sich in der Regel, wenn dauerhaft Gewinne im Unternehmen bleiben, die nicht privat gebraucht werden, wenn ein späterer Verkauf des Unternehmens denkbar ist oder wenn Vermögen wie Immobilien und Beteiligungen vom operativen Risiko getrennt werden sollen. Wer alle Gewinne privat entnimmt, profitiert selten."
            />
            <Bento className="mt-14">
              <BentoCell surface="cobalt" className="md:col-span-4">
                <h3 className="font-heading text-xl font-bold">
                  Der Reinvestierer.
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Die GmbH läuft, die Gewinne übersteigen den privaten Bedarf.
                  Statt voller Besteuerung bei Entnahme fließt das Kapital in
                  die Holding und arbeitet dort weiter: in Investments,
                  Immobilien oder neuen Beteiligungen.
                </p>
              </BentoCell>
              <BentoCell surface="azure" className="md:col-span-4 md:-translate-y-4">
                <h3 className="font-heading text-xl font-bold">
                  Der Verkäufer in fünf Jahren.
                </h3>
                <p className="mt-3 leading-relaxed text-white/85">
                  Wer einen Exit für möglich hält, stellt die Struktur besser
                  Jahre vorher auf. Der Anteilsverkauf aus der Holding ist zu
                  95 Prozent körperschaftsteuerfrei, aus dem Privatvermögen
                  nicht.
                </p>
              </BentoCell>
              <BentoCell surface="cobalt" className="md:col-span-4">
                <h3 className="font-heading text-xl font-bold">
                  Der Risiko-Trenner.
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Betriebsimmobilie, Fuhrpark, Rücklagen: Was in der operativen
                  GmbH liegt, haftet mit. In der Holding liegt es außerhalb der
                  Reichweite des Tagesgeschäfts.
                </p>
              </BentoCell>
              <BentoCell surface="outline" className="md:col-span-12 md:flex-row md:items-center md:gap-10">
                <h3 className="shrink-0 font-heading text-2xl font-bold">
                  Und wann nicht?
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft md:mt-0">
                  Wenn Sie Ihre Gewinne vollständig privat entnehmen, wenn die
                  Verwaltungskosten den Steuervorteil auffressen oder wenn das
                  Geschäft dafür schlicht zu klein ist. Das sagen wir Ihnen im
                  Erstgespräch genauso deutlich. Eine Holding, die sich nicht
                  rechnet, ist keine Struktur, sondern Ballast.
                </p>
              </BentoCell>
            </Bento>
          </div>
        </div>
      </LightSection>

      {/* 03 · Ablauf — dunkel, BigSteps */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="03"
            kicker="Der Prozess"
            title="Wie läuft die Holding-Gründung ab?"
            intro="Die Gründung folgt vier Schritten: Analyse Ihrer Zahlen und Ziele, Strukturkonzept mit Steuerberater aus dem Partnernetzwerk, notarielle Gründung und Eintragung sowie anschließende Einbindung von Investments und Immobilien in die Struktur. Von der Entscheidung bis zur eingetragenen Holding vergehen üblicherweise mehrere Wochen."
          />
          <div className="mt-10">
            <BigSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* 04 · FAQ — weiß */}
      <LightSection>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-azure uppercase md:col-span-3">
            04 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen zur Holding" items={faqItems} />
          </div>
        </div>
      </LightSection>

      <CtaBanner
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
