import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { QuestionSection } from "@/components/QuestionSection";
import { Section, SectionHeading } from "@/components/Section";
import { CardGrid } from "@/components/CardGrid";
import { StepList, type Step } from "@/components/StepList";
import { Testimonial } from "@/components/Testimonial";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Vermögensaufbau mit Strategie | Leibinn Consulting" },
  description:
    "Vermögensaufbau mit System: breite Streuung, klare Risikoverteilung, transparente Kosten. Strategie von Leibinn Consulting, Umsetzung mit lizenzierten Partnern.",
  alternates: { canonical: "/investments" },
};

const prinzipien = [
  {
    title: "Streuung statt Wette.",
    text: "Einzelne Aktien, einzelne Branchen, einzelne Länder können fallen. Ein breit gestreutes Portfolio hängt nicht an einer Entscheidung. Wer streut, muss die Zukunft nicht vorhersagen.",
  },
  {
    title: "Risiko nach Situation, nicht nach Mut.",
    text: "Wie viel Schwankung Ihr Portfolio verträgt, bestimmen Ihr Horizont, Ihre Liquidität und Ihre Pläne, nicht die Stimmung am Markt. Die Risikoverteilung wird festgelegt, bevor investiert wird.",
  },
  {
    title: "Kosten sind die einzige sichere Größe.",
    text: "Renditen schwanken, Kosten fallen immer an. Jeder Prozentpunkt Gebühr wirkt über Jahrzehnte gegen Sie. Deshalb sind Kostentransparenz und günstige Umsetzung feste Kriterien, kein Verhandlungsergebnis.",
  },
  {
    title: "Disziplin schlägt Timing.",
    text: "Die teuersten Fehler passieren in Extremphasen: Verkaufen im Crash, Einsteigen auf dem Hoch. Eine schriftliche Strategie ist der Schutz vor der eigenen Reaktion.",
  },
];

const steps: Step[] = [
  {
    title: "Bestandsaufnahme",
    plainText:
      "Was liegt wo, was kostet es, welches Risiko steckt drin: Viele Depots sind historisch gewachsen statt geplant. Die Analyse zeigt es schwarz auf weiß.",
    text: "Was liegt wo, was kostet es, welches Risiko steckt drin: Viele Depots sind historisch gewachsen statt geplant. Die Analyse zeigt es schwarz auf weiß.",
  },
  {
    title: "Strategie",
    plainText:
      "Zielrendite, Risikoverteilung, Sparrate, Zeithorizont: Sie erhalten eine schriftliche Strategie, die zu Ihrer Gesamtsituation passt, inklusive der Frage, ob über die Holding investiert wird.",
    text: (
      <>
        Zielrendite, Risikoverteilung, Sparrate, Zeithorizont: Sie erhalten
        eine schriftliche Strategie, die zu Ihrer Gesamtsituation passt,
        inklusive der Frage, ob{" "}
        <Link href="/holding" className="text-accent underline underline-offset-2">
          über die Holding investiert
        </Link>{" "}
        wird.
      </>
    ),
  },
  {
    title: "Umsetzung mit Partnern",
    plainText:
      "Die Umsetzung läuft über lizenzierte Partner. Wir koordinieren, Sie entscheiden. Kein Produkt wird empfohlen, das der Strategie widerspricht.",
    text: "Die Umsetzung läuft über lizenzierte Partner. Wir koordinieren, Sie entscheiden. Kein Produkt wird empfohlen, das der Strategie widerspricht.",
  },
  {
    title: "Laufende Überprüfung",
    plainText:
      "Leben und Märkte ändern sich. Die Strategie wird regelmäßig geprüft und angepasst, bevor Abweichungen teuer werden.",
    text: "Leben und Märkte ändern sich. Die Strategie wird regelmäßig geprüft und angepasst, bevor Abweichungen teuer werden.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Ab welchem Betrag lohnt sich eine Strategie?",
    a: "Früher, als die meisten denken. Entscheidend ist nicht das vorhandene Vermögen, sondern die Sparfähigkeit: Wer monatlich investieren kann, profitiert von einer Strategie ab dem ersten Euro, weil Fehler in der Anfangsphase über Jahrzehnte nachwirken. Ein Mindestvermögen ist keine Voraussetzung für das Erstgespräch.",
  },
  {
    q: "Wie unterscheidet sich das von der Beratung bei der Bank?",
    a: "Eine Bank berät zu den Produkten, die sie anbietet, und verdient an deren Marge. Leibinn Consulting entwickelt zuerst die Strategie und zieht dann lizenzierte Partner für die Umsetzung hinzu. Die Reihenfolge macht den Unterschied: erst der Plan für Ihr Gesamtvermögen, dann die Produktfrage.",
  },
  {
    q: "Wer führt die Anlageberatung durch?",
    a: "Die Anlageberatung im rechtlichen Sinn führen lizenzierte Partner durch, mit denen Leibinn Consulting zusammenarbeitet. Leibinn Consulting übernimmt Analyse, Strategie und Koordination und behält das Gesamtbild über alle Vermögensbausteine. Diese Aufgabenteilung wird im Erstgespräch offen erklärt, bevor eine Zusammenarbeit beginnt.",
  },
  {
    q: "In welche Produkte wird investiert?",
    a: "Die Strategie bestimmt die Produkte, nicht umgekehrt. Im Regelfall bedeutet das breit gestreute, kostengünstige Bausteine über verschiedene Anlageklassen und Regionen. Welche konkreten Produkte infrage kommen, klärt die Anlageberatung durch den lizenzierten Partner auf Basis der Strategie und Ihrer Risikoverteilung.",
  },
  {
    q: "Was kostet der Vermögensaufbau mit Leibinn Consulting?",
    a: "Das Erstgespräch ist kostenlos. Die Vergütungswege der Zusammenarbeit, einschließlich der Konditionen der Partner, werden vor Beginn offen und schriftlich erklärt. Kostentransparenz ist Teil der Methodik: Was Sie zahlen, wissen Sie vorher, nicht hinterher im Kleingedruckten.",
  },
];

export default function InvestmentsPage() {
  return (
    <>
      <Hero
        title={
          <>
            Vermögensaufbau:
            <br />
            Strategie schlägt Bauchgefühl.
          </>
        }
        sub="Leibinn Consulting entwickelt Investmentstrategien für Privatpersonen und Unternehmer: breite Streuung, klare Risikoverteilung, transparente Kosten. Die Strategie kommt von uns, die Anlageberatung führen lizenzierte Partner durch, und Sie behalten einen Ansprechpartner für das Gesamtbild."
        ctaLabel="Strategie-Gespräch buchen"
        ctaHref={kontaktHref("strategie-gespraech")}
        microTrust="60 Minuten, kostenlos, mit erster Einschätzung Ihrer aktuellen Aufstellung"
      />

      <Section wide>
        <SectionHeading kicker="Die Methodik">
          Was macht eine gute Investmentstrategie aus?
        </SectionHeading>
        <p className="mt-8 max-w-3xl border-l-4 border-accent pl-6 text-lg leading-relaxed font-medium md:text-xl">
          Eine tragfähige Investmentstrategie beruht auf vier Prinzipien:
          breite Streuung über Anlageklassen und Regionen, eine
          Risikoverteilung, die zur eigenen Situation passt, niedrige und
          transparente Kosten sowie Disziplin über Marktphasen hinweg. Kein
          einzelnes Produkt ersetzt diese Grundlagen, und keine Prognose macht
          sie überflüssig.
        </p>
        <CardGrid cards={prinzipien} columns={4} />
      </Section>

      <QuestionSection
        tone="warm"
        title="Wie funktioniert der Vermögensaufbau bei Leibinn Consulting?"
        answer="Leibinn Consulting analysiert Ihre Situation, entwickelt die Strategie und koordiniert die Umsetzung. Die Anlageberatung im rechtlichen Sinn führen lizenzierte Partner durch, mit denen wir zusammenarbeiten. Sie behalten dabei einen Ansprechpartner, der Investments, Immobilien und Struktur zusammendenkt, statt jede Entscheidung isoliert zu treffen."
      >
        <p>
          Warum dieses Modell? Weil die Strategie wichtiger ist als das
          Produkt. Die meisten Anleger scheitern nicht an der Produktauswahl,
          sondern daran, dass niemand ihre Investments mit dem Rest ihres
          Vermögens abstimmt: mit der Immobilie, der Firmenstruktur, der
          Liquiditätsplanung. Genau diese Abstimmung ist unsere Arbeit. Die
          produktbezogene Beratung übernimmt der Partner, der dafür zugelassen
          ist, und Sie bekommen beides, ohne es selbst koordinieren zu müssen.
        </p>
        <StepList steps={steps} />
      </QuestionSection>

      <Section>
        <SectionHeading>Was Mandanten sagen</SectionHeading>
        <Testimonial
          quote="Als Anwalt bin ich es gewohnt, komplexe Sachverhalte zu durchdringen. Bei Investments verlasse ich mich auf Herrn Leibinn, weil er transparent kommuniziert und jede Empfehlung nachvollziehbar begründet."
          name="Luka Šilić"
          role="Anwalt"
        />
        <Testimonial
          quote="Zeit ist als Selbstständiger mein wertvollstes Gut. Durch die klaren Strategien läuft mein Vermögensaufbau, ohne dass ich mich darum kümmern muss."
          name="Tom Müller"
          role="selbstständiger Tätowierer"
        />
      </Section>

      <Faq title="Häufige Fragen zum Vermögensaufbau" items={faqItems} />

      <FinalCta
        title={
          <>
            Ihr Depot ist gewachsen.
            <br />
            Aber ist es geplant?
          </>
        }
        text="Im kostenlosen Strategie-Gespräch analysieren wir Ihre aktuelle Aufstellung und Sie erfahren, wo Streuung, Kosten oder Risikoverteilung nicht zu Ihren Zielen passen."
        ctaLabel="Strategie-Gespräch buchen"
        ctaHref={kontaktHref("strategie-gespraech")}
      />

      <Disclaimer>
        Kapitalanlagen sind mit Risiken verbunden. Kurse können schwanken,
        Verluste bis zum Totalverlust einzelner Anlagen sind möglich. Frühere
        Wertentwicklungen sind kein verlässlicher Indikator für zukünftige
        Ergebnisse. Diese Seite enthält allgemeine Informationen und keine
        Anlageberatung.
      </Disclaimer>

      <JsonLd
        data={breadcrumbJsonLd([{ name: "Investments", path: "/investments" }])}
      />
    </>
  );
}
