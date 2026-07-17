import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { LightSection } from "@/components/Theme";
import { Testimonial } from "@/components/Testimonial";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { HeroPanel } from "@/components/VisualPanel";
import { kontaktHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Absicherung: Vermögen schützen | Leibinn Consulting" },
  description:
    "Einkommen, Immobilien und Betrieb absichern: Versicherungsmakler nach § 34d GewO mit freier Marktauswahl. Kostenloser Vertragscheck, Region Stuttgart.",
  alternates: { canonical: "/absicherung" },
};

const faqItems: FaqItem[] = [
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
    <>
      {/* Hero — Split mit Illustrations-Panel */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Absicherung
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Was Sie aufbauen,
              <br />
              muss geschützt sein.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Vermögensaufbau ohne Absicherung ist ein Plan mit offener Flanke:
              Ein Berufsunfähigkeitsfall, ein Haftungsschaden oder ein Schaden
              am Anlageobjekt kann Jahre an Aufbau zunichtemachen. Leibinn
              Consulting schließt diese Lücken als Versicherungsmakler nach
              § 34d Abs. 1 GewO, mit freier Auswahl aus dem Markt.
            </p>
            <div className="mt-9">
              <CtaButton href={kontaktHref("vertragscheck")}>
                Vertragscheck anfragen
              </CtaButton>
              <p className="mt-4 text-sm text-ink-faint">
                Kostenlose Prüfung Ihrer bestehenden Verträge, auch fremd
                abgeschlossener
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <HeroPanel
              slug="absicherung"
              fact="§ 34d"
              factLabel="Versicherungsmakler mit freier Auswahl aus dem Markt"
            />
          </div>
        </div>
      </section>

      {/* 01 · Makler-Sektion — weiß, klebende Überschrift links */}
      <LightSection className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
                <span className="font-heading text-azure">01</span>
                <span className="text-ink-faint">Makler statt Vertreter</span>
              </p>
              <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight md:text-4xl">
                Was unterscheidet einen Makler von einem
                Versicherungsvertreter?
              </h2>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="border-l-4 border-azure pl-6 text-lg leading-relaxed font-medium">
              Ein Versicherungsvertreter arbeitet für eine Gesellschaft und
              vermittelt deren Produkte. Ein Versicherungsmakler nach § 34d
              GewO arbeitet rechtlich im Auftrag des Kunden und wählt frei aus
              dem Markt. Empfohlen wird, was Preis und Leistung rechtfertigen,
              und die Empfehlung wird begründet.
            </p>
            <p className="mt-8 leading-relaxed text-ink-soft">
              Wir versichern nicht alles, was versicherbar ist. Der Fokus liegt
              auf dem, was Ihren Vermögensaufbau trägt: Ihr Einkommen, Ihre{" "}
              <Link
                href="/immobilien"
                className="text-accent underline underline-offset-2"
              >
                Immobilien und Anlageobjekte
              </Link>
              , Ihre Haftung und, bei Unternehmern,{" "}
              <Link
                href="/holding"
                className="text-accent underline underline-offset-2"
              >
                der Betrieb
              </Link>
              . Alles andere ist oft verzichtbar, und auch das sagen wir.
              Gekündigte Doppelversicherungen sind ein häufigeres Ergebnis
              unserer Vertragschecks als neue Abschlüsse.
            </p>
            <div className="mt-10 rounded-2xl bg-paper-warm p-8">
              <h3 className="font-heading text-2xl leading-snug font-bold">
                Der Vertragscheck: Erst prüfen, was Sie schon haben.
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Die meisten Mandanten kommen nicht ohne Versicherungen, sondern
                mit einem Ordner voll davon. Der Vertragscheck prüft Bestand
                gegen Bedarf: Was fehlt, was doppelt sich, was ist zu teuer für
                seine Leistung. Danach wird der Bestand regelmäßig überprüft,
                denn Lebensumstände ändern sich schneller als Verträge.
              </p>
            </div>
          </div>
        </div>
      </LightSection>

      {/* 02 · Stimme — goldene Feature-Karte */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-12 md:py-24">
          <div className="rounded-2xl bg-fawn p-10 text-twilight-deep md:col-span-8 md:col-start-3 md:p-14">
            <p className="font-heading text-2xl leading-relaxed font-medium text-balance md:text-3xl">
              „Kleine Extras wie die regelmäßige Überprüfung meiner bestehenden
              Verträge zeigen, dass Herr Leibinn langfristig interessiert ist,
              nicht am schnellen Abschluss.“
            </p>
            <p className="mt-6 text-sm font-semibold">
              Winsome Okafor · Lehrerin
            </p>
          </div>
        </div>
      </section>

      {/* 03 · FAQ */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-fawn uppercase md:col-span-3">
            03 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen zur Absicherung" items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Ein Ordner voller Verträge
            <br />
            ist noch kein Schutz.
          </>
        }
        text="Der kostenlose Vertragscheck zeigt, was fehlt, was doppelt ist und was zu teuer für seine Leistung ist. Danach entscheiden Sie."
        ctaLabel="Vertragscheck anfragen"
        ctaHref={kontaktHref("vertragscheck")}
      />

      <JsonLd
        data={breadcrumbJsonLd([{ name: "Absicherung", path: "/absicherung" }])}
      />
    </>
  );
}
