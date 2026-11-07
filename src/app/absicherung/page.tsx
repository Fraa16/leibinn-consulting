import type { Metadata } from "next";
import Link from "next/link";
import type { FaqEntry } from "@/components/FaqList";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { MiniCoverage } from "@/components/home/LeistungenBento";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { FaqBlock } from "@/components/page/FaqBlock";
import {
  Compare,
  PageShell,
  QuoteCard,
  RelatedTopics,
  Statement,
  TopicEyebrow,
} from "@/components/page/Blocks";

export const metadata: Metadata = {
  title: { absolute: "Absicherung: Vermögen schützen | Leibinn Consulting" },
  description:
    "Einkommen, Immobilien und Betrieb absichern: Versicherungsmakler mit freier Marktauswahl. Kostenloser Vertragscheck, Region Stuttgart.",
  alternates: { canonical: "/absicherung" },
};

const focus = [
  {
    title: "Ihr Einkommen",
    text: "Ein Berufsunfähigkeitsfall stoppt den Vermögensaufbau am schnellsten. Deshalb beginnt hier jede Prüfung.",
  },
  {
    title: "Immobilien und Anlageobjekte",
    text: (
      <>
        Ein Schaden am Anlageobjekt darf den Plan nicht kippen: Schutz für die{" "}
        <Link href="/immobilien">Objekte, die Ihr Vermögen tragen</Link>.
      </>
    ),
  },
  {
    title: "Ihre Haftung",
    text: "Private und betriebliche Haftung, damit ein einzelner Schaden nicht Jahre an Aufbau kostet.",
  },
  {
    title: "Ihr Betrieb",
    text: (
      <>
        Bei Unternehmern: Betriebsrisiken und Schlüsselpersonen, abgestimmt auf
        die <Link href="/holding">Unternehmensstruktur</Link>.
      </>
    ),
  },
];

const check = [
  { k: "Was fehlt", v: "Lücken bei existenziellen Risiken werden geschlossen." },
  { k: "Was doppelt ist", v: "Doppelversicherungen werden gekündigt." },
  { k: "Was zu teuer ist", v: "Leistung und Preis im Marktvergleich." },
];

const faqItems: FaqEntry[] = [
  {
    q: "Was kostet die Beratung zur Absicherung?",
    a: "Der Vertragscheck und die Beratung sind für Sie kostenlos. Als Versicherungsmakler wird Leibinn Consulting bei einer Vermittlung über Courtagen der Gesellschaften vergütet, wie gesetzlich vorgesehen. Es entstehen keine zusätzlichen Kosten, und geprüft wird auch, wenn nichts vermittelt wird.",
  },
  {
    q: "Prüft Leibinn Consulting auch bestehende Verträge anderer Vermittler?",
    a: "Ja, das ist der Regelfall. Bestehende Verträge werden auf Leistung, Preis und Lücken geprüft, unabhängig davon, wo sie abgeschlossen wurden. Behalten, anpassen oder kündigen: Die Empfehlung folgt aus dem Vergleich, nicht aus dem Interesse an einem Neuabschluss.",
  },
  {
    q: "Welche Bereiche deckt die Absicherung ab?",
    a: "Der Fokus liegt auf existenziellen Risiken: Absicherung des Einkommens, Schutz von Immobilien und Anlageobjekten, private und betriebliche Haftung sowie Risiken des Betriebs bei Unternehmern. Kleinversicherungen mit geringem Schadenpotenzial stehen bewusst nicht im Mittelpunkt, hier raten wir häufiger ab als zu.",
  },
  {
    q: "Wie oft werden Verträge überprüft?",
    a: "Der Bestand wird regelmäßig gegen die aktuelle Lebenssituation geprüft, zusätzlich bei jedem relevanten Anlass: Immobilienkauf, Gründung, Familienzuwachs, neue Struktur. So bleibt der Schutz auf dem Stand Ihres Vermögens, nicht auf dem Stand des Abschlussjahres.",
  },
];

export default function AbsicherungPage() {
  return (
    <PageShell accent="petrol">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen", href: "/leistungen" }, { label: "Absicherung" }]}
        eyebrow={<TopicEyebrow slug="absicherung" />}
        title={
          <>
            Was Sie aufbauen, <em>muss geschützt sein.</em>
          </>
        }
        lead="Vermögensaufbau ohne Absicherung ist ein Plan mit offener Flanke: Ein Berufsunfähigkeitsfall, ein Haftungsschaden oder ein Schaden am Anlageobjekt kann Jahre an Aufbau zunichtemachen. Leibinn Consulting schließt diese Lücken als zugelassener Versicherungsmakler, mit freier Auswahl aus dem Markt."
        primary={{ label: "Vertragscheck anfragen", href: "#termin" }}
        secondary={{ label: "Makler statt Vertreter", href: "#makler" }}
        micro="Kostenlose Prüfung Ihrer bestehenden Verträge, auch fremd abgeschlossener."
        image={{
          src: "/images/city-night.webp",
          alt: "Beleuchtete Stadt bei Nacht",
          pos: "object-[40%_60%]",
        }}
        floating={<MiniCoverage />}
        facts={[
          { value: "0 €", label: "Kostenloser Vertragscheck" },
          { value: "Freie Auswahl", label: "Aus dem gesamten Markt" },
          { value: "Regelmäßig", label: "Bestand gegen Bedarf geprüft" },
        ]}
      />

      {/* Makler statt Vertreter */}
      <section id="makler" className="lc-section">
        <div className="lc-wrap grid items-start gap-12 min-[1000px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[1000px]:gap-20">
          <Reveal>
            <p className="eyebrow">Makler statt Vertreter</p>
            <h2 className="display-2 mt-6 text-navy">
              Was unterscheidet einen Makler <em>von einem Vertreter?</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Statement>
              Ein Versicherungsvertreter arbeitet für eine Gesellschaft und
              vermittelt deren Produkte. Ein Versicherungsmakler arbeitet
              rechtlich im Auftrag des Kunden und wählt frei aus dem Markt.
              Empfohlen wird, was Preis und Leistung rechtfertigen, und die
              Empfehlung wird begründet.
            </Statement>
            <p className="mt-8 text-[16px] leading-relaxed text-body">
              Wir versichern nicht alles, was versicherbar ist. Der Fokus liegt
              auf dem, was Ihren Vermögensaufbau trägt. Alles andere ist oft
              verzichtbar, und auch das sagen wir. Gekündigte
              Doppelversicherungen sind ein häufigeres Ergebnis unserer
              Vertragschecks als neue Abschlüsse.
            </p>
          </Reveal>
        </div>
        <Reveal className="lc-wrap mt-[clamp(48px,6vw,72px)]">
          <Compare
            caption="Wer berät"
            left="Vertreter"
            right="Makler"
            rows={[
              { label: "Arbeitet für", left: "Eine Versicherungsgesellschaft", right: "Sie, rechtlich im Kundenauftrag" },
              { label: "Auswahl", left: "Produkte der eigenen Gesellschaft", right: "Freie Auswahl aus dem Markt" },
              { label: "Empfehlung", left: "Aus dem eigenen Sortiment", right: "Nach Preis und Leistung, begründet" },
              { label: "Bestand", left: "Eigene Verträge", right: "Auch fremd abgeschlossene Verträge" },
            ]}
          />
        </Reveal>
      </section>

      {/* Fokus */}
      <section className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative">
          <SectionHead
            eyebrow="Unser Fokus"
            title={
              <>
                Existenzielle Risiken zuerst. <em>Der Rest ist oft verzichtbar.</em>
              </>
            }
            lead="Kleinversicherungen mit geringem Schadenpotenzial stehen bewusst nicht im Mittelpunkt. Hier raten wir häufiger ab als zu."
          />
          <ol className="mt-[clamp(48px,6vw,72px)] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focus.map((f, i) => (
              <Reveal
                as="li"
                key={f.title}
                delay={i * 80}
                className={`flex flex-col rounded-[24px] p-[clamp(22px,2.4vw,32px)] ${
                  i === 0 ? "bg-acc-light text-navy-950" : "border border-white/10 bg-navy-850"
                }`}
              >
                <span className={`mono ${i === 0 ? "text-navy-950/70" : "text-acc-light"}`}>0{i + 1}</span>
                <h3 className="mt-8 text-[clamp(20px,1.8vw,24px)] leading-tight font-medium tracking-[-0.02em]">{f.title}</h3>
                <p
                  className={`mt-3 text-[15px] leading-relaxed [&_a]:underline [&_a]:underline-offset-2 ${
                    i === 0 ? "text-navy-950/80" : "text-on-dark-body [&_a]:text-white"
                  }`}
                >
                  {f.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Vertragscheck */}
      <section className="lc-section !pb-0">
        <div className="lc-wrap grid gap-4 min-[1000px]:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Reveal className="rounded-[28px] border border-sand bg-white p-[clamp(26px,3.6vw,52px)]">
            <p className="eyebrow">Der Vertragscheck</p>
            <h2 className="display-3 mt-6 text-navy">
              Erst prüfen, <em>was Sie schon haben.</em>
            </h2>
            <p className="mt-5 max-w-[38rem] text-[16px] leading-relaxed text-body">
              Die meisten Mandanten kommen nicht ohne Versicherungen, sondern mit
              einem Ordner voll davon. Der Vertragscheck prüft Bestand gegen
              Bedarf. Danach wird der Bestand regelmäßig überprüft, denn
              Lebensumstände ändern sich schneller als Verträge.
            </p>
            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {check.map((c) => (
                <div key={c.k} className="rounded-[18px] bg-acc-tint p-5">
                  <dt className="text-[16px] font-semibold text-navy">{c.k}</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-body">{c.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <QuoteCard
              quote="Kleine Extras wie die regelmäßige Überprüfung meiner bestehenden Verträge zeigen, dass Herr Leibinn langfristig interessiert ist, nicht am schnellen Abschluss."
              name="Winsome Okafor"
              role="Lehrerin"
              photo="/images/winsome-okafor.webp"
            />
          </Reveal>
        </div>
      </section>

      <FaqBlock
        title={
          <>
            Häufige Fragen <em>zur Absicherung.</em>
          </>
        }
        items={faqItems}
      />

      <BookingSection
        title={
          <>
            Ein Ordner voller Verträge <em>ist noch kein Schutz.</em>
          </>
        }
        lead="Der kostenlose Vertragscheck zeigt, was fehlt, was doppelt ist und was zu teuer für seine Leistung ist. Danach entscheiden Sie."
      />

      <RelatedTopics current="der Absicherung" slugs={["investments", "immobilien", "bav-bkv"]} />

      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }, { name: "Absicherung", path: "/absicherung" }])} />
    </PageShell>
  );
}
