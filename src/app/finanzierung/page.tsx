import type { Metadata } from "next";
import Link from "next/link";
import { SplitHero } from "@/components/SplitHero";
import { QuestionSection } from "@/components/QuestionSection";
import { Section, SectionHeading } from "@/components/Section";
import { StepList, type Step } from "@/components/StepList";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";

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
      <SplitHero
        kicker="Finanzierung"
        slug="finanzierung"
        fact="1 Prozess"
        factLabel="Konditionen mehrerer Banken, ein Ansprechpartner"
        title={
          <>
            Finanzierung:
            <br />
            Die Hausbank ist ein Angebot. Nicht der Markt.
          </>
        }
        sub="Leibinn Consulting koordiniert Immobilien- und Anschlussfinanzierungen über unabhängige Finanzierungsexperten aus dem Partnernetzwerk: Konditionen mehrerer Banken im Vergleich, ein Ansprechpartner, ein Prozess. Der Konditions-Check ist kostenlos."
        ctaLabel="Konditions-Check anfragen"
        ctaHref={kontaktHref("konditions-check")}
        // [PLATZHALTER] Schufa-Aussage prüfen, ob zusagbar (Copy-Doc-Hinweis)
        microTrust="Kostenlos, unverbindlich, ohne Auswirkung auf Ihre Schufa"
      />

      <QuestionSection
        title="Warum nicht einfach zur Hausbank?"
        answer="Die Hausbank bietet ihre eigenen Konditionen an, nicht die des Marktes. Schon wenige Zehntelprozent Zinsunterschied summieren sich über die Laufzeit einer Immobilienfinanzierung zu fünfstelligen Beträgen. Ein unabhängiger Vergleich mehrerer Banken zeigt, was Ihre Finanzierung tatsächlich kosten muss, bevor Sie unterschreiben."
      >
        <p>
          Dazu kommt der Prozess: Unterlagen aufbereiten, Banken anfragen,
          Rückfragen beantworten, Fristen halten. Wer das neben Beruf und
          Objektsuche selbst koordiniert, verliert Zeit, und bei
          Off-Market-Objekten ist Zeit das knappste Gut. Deshalb gehören bei
          uns{" "}
          <Link href="/immobilien" className="text-accent underline underline-offset-2">
            Objekt und Finanzierung in einen Prozess
          </Link>
          .
        </p>
      </QuestionSection>

      <Section tone="warm">
        <SectionHeading>So läuft die Finanzierung ab</SectionHeading>
        <StepList steps={steps} />
      </Section>

      <Faq title="Häufige Fragen zur Finanzierung" items={faqItems} />

      <FinalCta
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
