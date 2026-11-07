import type { Metadata } from "next";
import Link from "next/link";
import type { FaqEntry } from "@/components/FaqList";
import { JsonLd, breadcrumbJsonLd, howToJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { MiniBanks } from "@/components/home/LeistungenBento";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { FaqBlock } from "@/components/page/FaqBlock";
import { ZinsRechner } from "@/components/page/ZinsRechner";
import {
  Compare,
  PageShell,
  ProcessSteps,
  RelatedTopics,
  Statement,
  TopicEyebrow,
  type ProcessStep,
} from "@/components/page/Blocks";

export const metadata: Metadata = {
  title: {
    absolute: "Finanzierung: unabhängiger Vergleich | Leibinn Consulting",
  },
  description:
    "Baufinanzierung und Kapitalanlage-Finanzierung: unabhängiger Bankenvergleich statt Hausbank-Angebot. Koordiniert von Leibinn Consulting. Check kostenlos.",
  alternates: { canonical: "/finanzierung" },
};

const steps: ProcessStep[] = [
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

const faqItems: FaqEntry[] = [
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
    <PageShell accent="copper">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen", href: "/leistungen" }, { label: "Finanzierung" }]}
        eyebrow={<TopicEyebrow slug="finanzierung" />}
        title={
          <>
            Die Hausbank ist ein Angebot. <em>Nicht der Markt.</em>
          </>
        }
        lead="Leibinn Consulting koordiniert Immobilien- und Anschlussfinanzierungen über unabhängige Finanzierungsexperten aus dem Partnernetzwerk: Konditionen mehrerer Banken im Vergleich, ein Ansprechpartner, ein Prozess."
        primary={{ label: "Konditions-Check anfragen", href: "#termin" }}
        secondary={{ label: "Was ein Zinsunterschied kostet", href: "#rechner" }}
        micro="Kostenlos, unverbindlich, ohne Auswirkung auf Ihre Schufa."
        image={{
          src: "/images/ffm-towers.webp",
          alt: "Bankenviertel mit Hochhäusern",
          pos: "object-[70%_40%]",
        }}
        floating={<MiniBanks />}
        facts={[
          { value: "Mehrere Banken", label: "Konditionen im Vergleich" },
          { value: "1 Prozess", label: "Ein Ansprechpartner" },
          { value: "Kostenlos", label: "Konditions-Check" },
        ]}
      />

      {/* Rechner */}
      <section id="rechner" className="lc-section">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Der Unterschied"
            title={
              <>
                Wenige Zehntelprozent. <em>Fünfstellige Beträge.</em>
              </>
            }
            lead="Die Hausbank bietet ihre eigenen Konditionen an, nicht die des Marktes. Schon kleine Zinsunterschiede summieren sich über die Laufzeit einer Immobilienfinanzierung. Rechnen Sie es selbst nach."
          />
          <Reveal className="mt-[clamp(48px,6vw,72px)]">
            <ZinsRechner />
          </Reveal>
        </div>
      </section>

      {/* Warum nicht Hausbank */}
      <section id="vergleich" className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative grid items-start gap-12 min-[1000px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] min-[1000px]:gap-20">
          <Reveal>
            <p className="eyebrow">Der Vergleich</p>
            <h2 className="display-2 mt-6">
              Warum nicht einfach <em>zur Hausbank?</em>
            </h2>
            <div className="mt-8">
              <Statement tone="dark">
                Ein unabhängiger Vergleich mehrerer Banken zeigt, was Ihre
                Finanzierung tatsächlich kosten muss, bevor Sie unterschreiben.
              </Statement>
            </div>
            <p className="mt-8 text-[16px] leading-relaxed text-on-dark-body">
              Dazu kommt der Prozess: Unterlagen aufbereiten, Banken anfragen,
              Rückfragen beantworten, Fristen halten. Wer das neben Beruf und
              Objektsuche selbst koordiniert, verliert Zeit, und bei
              Off-Market-Objekten ist Zeit das knappste Gut. Deshalb gehören bei
              uns{" "}
              <Link href="/immobilien" className="text-white underline underline-offset-2">
                Objekt und Finanzierung in einen Prozess
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={100} className="on-light">
            <Compare
              caption="Finanzierung über"
              left="Hausbank"
              right="Unser Vergleich"
              rows={[
                { label: "Angebote", left: "Ein Angebot, eigene Konditionen", right: "Mehrere Banken nebeneinander" },
                { label: "Konditionen", left: "Wie angeboten", right: "Verhandelt von Finanzierungsexperten" },
                { label: "Unterlagen", left: "Für jede Bank neu", right: "Einmal aufbereitet, für alle Anfragen" },
                { label: "Anschluss", left: "Wenn die Bank sich meldet", right: "Rechtzeitig vor Ablauf angestoßen" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Prozess */}
      <section id="prozess" className="lc-section">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Der Prozess"
            title={
              <>
                So läuft <em>die Finanzierung</em> ab.
              </>
            }
            lead="Ein Check, ein Satz Unterlagen, mehrere Angebote im Vergleich. Sie entscheiden, wir koordinieren bis zur Auszahlung."
          />
          <div className="mt-[clamp(48px,6vw,72px)]">
            <ProcessSteps steps={steps} tone="light" />
          </div>
        </div>
      </section>

      <FaqBlock
        className="!pt-0"
        title={
          <>
            Häufige Fragen <em>zur Finanzierung.</em>
          </>
        }
        items={faqItems}
      />

      <BookingSection
        title={
          <>
            Erst der Marktvergleich. <em>Dann die Unterschrift.</em>
          </>
        }
        lead="Der Konditions-Check zeigt kostenlos, was Ihre Finanzierung am Markt kosten muss. Danach entscheiden Sie, mit allen Zahlen auf dem Tisch."
      />

      <RelatedTopics
        current="der Finanzierung"
        slugs={["immobilien", "holding", "absicherung"]}
        disclaimer="Finanzierungen sind langfristige Verpflichtungen. Konditionen hängen von Bonität, Objekt und Marktlage ab. Die Vermittlung erfolgt durch lizenzierte Partner. Die Modellrechnung dient der Veranschaulichung und ersetzt keine Finanzierungsberatung."
      />

      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }, { name: "Finanzierung", path: "/finanzierung" }])} />
      <JsonLd data={howToJsonLd("Finanzierung mit Leibinn Consulting", steps)} />
    </PageShell>
  );
}
