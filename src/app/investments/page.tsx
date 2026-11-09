import type { Metadata } from "next";
import Link from "next/link";
import type { FaqEntry } from "@/components/FaqList";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { MiniGrowth } from "@/components/home/LeistungenBento";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { FaqBlock } from "@/components/page/FaqBlock";
import {
  PageShell,
  ProcessSteps,
  QuoteCard,
  RelatedTopics,
  TopicEyebrow,
  type ProcessStep,
} from "@/components/page/Blocks";

export const metadata: Metadata = {
  title: { absolute: "Vermögensaufbau mit Strategie | Leibinn Consulting" },
  description:
    "Vermögensaufbau mit System: breite Streuung, klare Risikoverteilung, transparente Kosten. Strategie von Leibinn Consulting, Umsetzung mit lizenzierten Partnern.",
  alternates: { canonical: "/investments" },
};

const principles = [
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

const steps: ProcessStep[] = [
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
        Zielrendite, Risikoverteilung, Sparrate, Zeithorizont: Sie erhalten eine
        schriftliche Strategie, die zu Ihrer Gesamtsituation passt, inklusive der
        Frage, ob <Link href="/holding">über die Holding investiert</Link> wird.
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

const roles = [
  {
    who: "Leibinn Consulting",
    tasks: ["Analyse Ihrer Situation", "Schriftliche Strategie", "Koordination der Umsetzung", "Laufende Überprüfung"],
    highlight: true,
  },
  {
    who: "Lizenzierter Partner",
    tasks: ["Anlageberatung im rechtlichen Sinn", "Konkrete Produkte auf Basis der Strategie"],
    highlight: false,
  },
  {
    who: "Sie",
    tasks: ["Entscheiden jeden Schritt", "Ein Ansprechpartner für das Gesamtbild"],
    highlight: false,
  },
];

const faqItems: FaqEntry[] = [
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
    <PageShell accent="petrol">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen", href: "/leistungen" }, { label: "Investments" }]}
        eyebrow={<TopicEyebrow slug="investments" />}
        title={
          <>
            Vermögensaufbau: <em>Strategie schlägt Bauchgefühl.</em>
          </>
        }
        lead="Leibinn Consulting entwickelt Investmentstrategien für Privatpersonen und Unternehmer: breite Streuung, klare Risikoverteilung, transparente Kosten. Die Strategie kommt von uns, die Anlageberatung führen lizenzierte Partner durch, und Sie behalten einen Ansprechpartner für das Gesamtbild."
        primary={{ label: "Strategie-Gespräch buchen", href: "#termin" }}
        secondary={{ label: "Die vier Prinzipien", href: "#methodik" }}
        micro="60 Minuten, kostenlos, mit erster Einschätzung Ihrer aktuellen Aufstellung."
        image={{
          src: "/images/cedrik-kundengespraech.webp",
          alt: "Cedrik Leibinn im Beratungsgespräch mit einer Mandantin",
          pos: "object-[30%_35%]",
        }}
        floating={<MiniGrowth />}
        facts={[
          { value: "4", label: "Prinzipien jeder Strategie" },
          { value: "Schriftlich", label: "Ihre Strategie auf Papier" },
          { value: "60 Min", label: "Kostenloses Erstgespräch" },
        ]}
      />

      {/* Methodik */}
      <section id="methodik" className="lc-section">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Die Methodik"
            title={
              <>
                Was macht eine gute <em>Investmentstrategie</em> aus?
              </>
            }
            lead="Vier Prinzipien: breite Streuung über Anlageklassen und Regionen, eine Risikoverteilung, die zur eigenen Situation passt, niedrige und transparente Kosten sowie Disziplin über Marktphasen hinweg. Kein Produkt ersetzt diese Grundlagen, keine Prognose macht sie überflüssig."
          />
          <ol className="mt-[clamp(48px,6vw,72px)] grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 80}
                className={`flex flex-col rounded-[24px] p-[clamp(26px,3vw,40px)] ${
                  i === 0 ? "bg-navy text-white" : "border border-sand bg-white text-navy"
                }`}
              >
                <span className={`mono ${i === 0 ? "text-acc-light" : "text-acc-dark"}`}>
                  Prinzip 0{i + 1}
                </span>
                <h3 className="mt-8 text-[clamp(24px,2.4vw,32px)] leading-tight font-normal tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className={`mt-4 text-[15.5px] leading-relaxed ${i === 0 ? "text-on-dark-body" : "text-body"}`}>
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Ablauf & Partnermodell */}
      <section id="ablauf" className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative">
          <SectionHead
            eyebrow="Ablauf & Partnermodell"
            title={
              <>
                Wie funktioniert der Vermögensaufbau <em>bei Leibinn Consulting?</em>
              </>
            }
            lead="Wir analysieren Ihre Situation, entwickeln die Strategie und koordinieren die Umsetzung. Die Anlageberatung im rechtlichen Sinn führen lizenzierte Partner durch. Sie behalten einen Ansprechpartner, der Investments, Immobilien und Struktur zusammendenkt."
          />
          <div className="mt-[clamp(48px,6vw,72px)]">
            <ProcessSteps steps={steps} />
          </div>

          <div className="mt-[clamp(56px,7vw,96px)] grid gap-10 border-t border-white/10 pt-[clamp(40px,5vw,64px)] min-[1000px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[1000px]:gap-16">
            <Reveal>
              <p className="mono text-acc-light">Warum dieses Modell?</p>
              <p className="mt-5 text-[clamp(20px,1.8vw,24px)] leading-snug font-medium tracking-[-0.015em]">
                Weil die Strategie wichtiger ist als das Produkt.
              </p>
              <p className="mt-5 text-[15.5px] leading-relaxed text-on-dark-body">
                Die meisten Anleger scheitern nicht an der Produktauswahl,
                sondern daran, dass niemand ihre Investments mit dem Rest ihres
                Vermögens abstimmt: mit der Immobilie, der Firmenstruktur, der
                Liquiditätsplanung. Genau diese Abstimmung ist unsere Arbeit. Die
                produktbezogene Beratung übernimmt der Partner, der dafür
                zugelassen ist, und Sie bekommen beides, ohne es selbst
                koordinieren zu müssen.
              </p>
            </Reveal>
            <Reveal delay={100} className="grid gap-3 sm:grid-cols-3">
              {roles.map((r) => (
                <div
                  key={r.who}
                  className={`flex flex-col rounded-[20px] p-5 ${
                    r.highlight ? "bg-acc-light text-navy-950" : "border border-white/10 bg-navy-850"
                  }`}
                >
                  <p className={`mono ${r.highlight ? "text-navy-950/70" : "text-on-dark-subtle"}`}>Wer</p>
                  <p className="mt-2 text-[17px] font-semibold">{r.who}</p>
                  <ul className={`mt-4 space-y-2 border-t pt-4 text-[14px] leading-snug ${r.highlight ? "border-navy-950/15" : "border-white/10 text-on-dark-body"}`}>
                    {r.tasks.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stimmen */}
      <section className="lc-section !pb-0">
        <div className="lc-wrap grid gap-4 md:grid-cols-2">
          <Reveal>
            <QuoteCard
              quote="Als Anwalt bin ich es gewohnt, komplexe Sachverhalte zu durchdringen. Bei Investments verlasse ich mich auf Herrn Leibinn, weil er transparent kommuniziert und jede Empfehlung nachvollziehbar begründet."
              name="Luka Šilić"
              role="Anwalt"
              photo="/images/luka-silic.webp"
            />
          </Reveal>
          <Reveal delay={100}>
            <QuoteCard
              quote="Zeit ist als Selbstständiger mein wertvollstes Gut. Durch die klaren Strategien läuft mein Vermögensaufbau, ohne dass ich mich darum kümmern muss."
              name="Tom Müller"
              role="Selbstständiger Tätowierer"
              photo="/images/tom-mueller.webp"
            />
          </Reveal>
        </div>
      </section>

      <FaqBlock
        title={
          <>
            Häufige Fragen <em>zum Vermögensaufbau.</em>
          </>
        }
        items={faqItems}
      />

      <BookingSection
        title={
          <>
            Ihr Depot ist gewachsen. <em>Aber ist es geplant?</em>
          </>
        }
        lead="Im kostenlosen Erstgespräch schauen wir auf Ihre aktuelle Aufstellung. Sie erfahren, wo Streuung, Kosten oder Risikoverteilung nicht zu Ihren Zielen passen."
      />

      <RelatedTopics
        current="Investments"
        slugs={["absicherung", "holding", "immobilien"]}
        disclaimer="Kapitalanlagen sind mit Risiken verbunden. Kurse können schwanken, Verluste bis zum Totalverlust einzelner Anlagen sind möglich. Frühere Wertentwicklungen sind kein verlässlicher Indikator für zukünftige Ergebnisse. Diese Seite enthält allgemeine Informationen und keine Anlageberatung."
      />

      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }, { name: "Investments", path: "/investments" }])} />
    </PageShell>
  );
}
