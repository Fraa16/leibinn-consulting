import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { LightSection } from "@/components/Theme";
import { EditorialHeader } from "@/components/Editorial";
import { BigSteps } from "@/components/BigSteps";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";
import type { Step } from "@/components/StepList";

export const metadata: Metadata = {
  title: {
    absolute: "Finanzierung: unabhängiger Vergleich | Leibinn Consulting",
  },
  description:
    "Baufinanzierung und Kapitalanlage-Finanzierung: unabhängiger Bankenvergleich statt Hausbank-Angebot. Koordiniert von Leibinn Consulting. Check kostenlos.",
  alternates: { canonical: "/finanzierung" },
};

const steps: Step[] = [
  {
    title: "Konditions-Check",
    plainText:
      "Eckdaten, Eigenkapital, Objekt oder Vorhaben: Sie erhalten eine erste Einschätzung, was am Markt realistisch ist. Kostenlos und unverbindlich.",
    text: "Eckdaten, Eigenkapital, Objekt oder Vorhaben: Sie erhalten eine erste Einschätzung, was am Markt realistisch ist. Kostenlos und unverbindlich.",
  },
  {
    title: "Unterlagen einmal, nicht fünfmal",
    plainText:
      "Die Unterlagen werden einmal sauber aufbereitet und für alle Bankanfragen verwendet. Sie füllen nicht fünf Formulare aus.",
    text: "Die Unterlagen werden einmal sauber aufbereitet und für alle Bankanfragen verwendet. Sie füllen nicht fünf Formulare aus.",
  },
  {
    title: "Vergleich und Verhandlung",
    plainText:
      "Die Finanzierungsexperten aus dem Partnernetzwerk holen Angebote mehrerer Banken ein und verhandeln die Konditionen. Sie sehen die Ergebnisse nebeneinander.",
    text: "Die Finanzierungsexperten aus dem Partnernetzwerk holen Angebote mehrerer Banken ein und verhandeln die Konditionen. Sie sehen die Ergebnisse nebeneinander.",
  },
  {
    title: "Abschluss und Begleitung",
    plainText:
      "Sie entscheiden, wir koordinieren bis zur Auszahlung. Auch die Anschlussfinanzierung wird rechtzeitig vor Ablauf der Zinsbindung angestoßen, nicht erst, wenn die Bank sich meldet.",
    text: "Sie entscheiden, wir koordinieren bis zur Auszahlung. Auch die Anschlussfinanzierung wird rechtzeitig vor Ablauf der Zinsbindung angestoßen, nicht erst, wenn die Bank sich meldet.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Was kostet der Finanzierungsvergleich?",
    a: "Der Konditions-Check und der Vergleich sind für Sie kostenlos. Die Finanzierungsexperten werden im Erfolgsfall von der finanzierenden Bank vergütet, wie bei Finanzierungsvermittlung üblich. Diese Vergütung wird offen ausgewiesen, und ein Abschlusszwang besteht zu keinem Zeitpunkt.",
  },
  {
    q: "Welche Finanzierungen werden begleitet?",
    a: "Kauf von selbstgenutzten und vermieteten Immobilien, Anschlussfinanzierungen nach Ablauf der Zinsbindung sowie Finanzierungen über Gesellschaftsstrukturen, etwa beim Kauf über eine Holding. Ob Ihr Vorhaben dazu passt, klärt der kostenlose Konditions-Check in einem kurzen Gespräch.",
  },
  {
    q: "Wer führt die Finanzierungsberatung durch?",
    a: "Die Finanzierungsvermittlung führen lizenzierte Experten aus dem Partnernetzwerk durch. Leibinn Consulting übernimmt Koordination und Einbettung in Ihr Gesamtbild: Passt die Rate zur Liquidität, das Objekt zur Strategie, die Struktur zum Kauf. Diese Aufgabenteilung wird vor Beginn offen erklärt.",
  },
  {
    q: "Wie lange dauert eine Finanzierungszusage?",
    a: "Mit vollständigen Unterlagen sind erste Konditionsangebote oft innerhalb weniger Tage möglich, die verbindliche Zusage folgt je nach Bank und Objekt in ein bis drei Wochen. Bei Off-Market-Objekten bereiten wir die Finanzierung deshalb vor, bevor das Angebot kommt.",
  },
];

export default function FinanzierungPage() {
  return (
    <>
      {/* Hero — dunkler Streifen, Aussage im Zentrum */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="md:max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Finanzierung
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Die Hausbank ist ein Angebot.
              <br />
              <span className="text-azure-light">Nicht der Markt.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Leibinn Consulting koordiniert Immobilien- und
              Anschlussfinanzierungen über unabhängige Finanzierungsexperten
              aus dem Partnernetzwerk: Konditionen mehrerer Banken im
              Vergleich, ein Ansprechpartner, ein Prozess. Der Konditions-Check
              ist kostenlos.
            </p>
            <div className="mt-9">
              <CtaButton href={kontaktHref("konditions-check")}>
                Konditions-Check anfragen
              </CtaButton>
              {/* [PLATZHALTER] Schufa-Aussage prüfen, ob zusagbar (Copy-Doc-Hinweis) */}
              <p className="mt-4 text-sm text-ink-faint">
                Kostenlos, unverbindlich, ohne Auswirkung auf Ihre Schufa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 · Ablauf zuerst — weißer Breaker mit BigSteps */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="01"
            kicker="Der Prozess"
            title="So läuft die Finanzierung ab."
          />
          <div className="mt-6">
            <BigSteps steps={steps} />
          </div>
        </div>
      </LightSection>

      {/* 02 · Warum — dunkles Band, versetzt */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
              <span className="font-heading text-fawn">02</span>
              <span className="text-ink-faint">Der Vergleich</span>
            </p>
            <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight md:text-5xl">
              Warum nicht einfach zur Hausbank?
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="border-l-4 border-azure pl-6 text-lg leading-relaxed font-medium">
              Die Hausbank bietet ihre eigenen Konditionen an, nicht die des
              Marktes. Schon wenige Zehntelprozent Zinsunterschied summieren
              sich über die Laufzeit einer Immobilienfinanzierung zu
              fünfstelligen Beträgen. Ein unabhängiger Vergleich mehrerer
              Banken zeigt, was Ihre Finanzierung tatsächlich kosten muss,
              bevor Sie unterschreiben.
            </p>
            <p className="mt-8 leading-relaxed text-ink-soft">
              Dazu kommt der Prozess: Unterlagen aufbereiten, Banken anfragen,
              Rückfragen beantworten, Fristen halten. Wer das neben Beruf und
              Objektsuche selbst koordiniert, verliert Zeit, und bei
              Off-Market-Objekten ist Zeit das knappste Gut. Deshalb gehören
              bei uns{" "}
              <Link
                href="/immobilien"
                className="text-accent underline underline-offset-2"
              >
                Objekt und Finanzierung in einen Prozess
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 03 · FAQ — weiß */}
      <LightSection>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-azure uppercase md:col-span-3">
            03 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen zur Finanzierung" items={faqItems} />
          </div>
        </div>
      </LightSection>

      <CtaBanner
        title={
          <>
            Erst der Marktvergleich.
            <br />
            Dann die Unterschrift.
          </>
        }
        text="Der Konditions-Check zeigt kostenlos, was Ihre Finanzierung am Markt kosten muss. Danach entscheiden Sie, mit allen Zahlen auf dem Tisch."
        ctaLabel="Konditions-Check anfragen"
        ctaHref={kontaktHref("konditions-check")}
      />

      <Disclaimer>
        Finanzierungen sind langfristige Verpflichtungen. Konditionen hängen
        von Bonität, Objekt und Marktlage ab. Die Vermittlung erfolgt durch
        lizenzierte Partner.
      </Disclaimer>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Finanzierung", path: "/finanzierung" },
        ])}
      />
    </>
  );
}
