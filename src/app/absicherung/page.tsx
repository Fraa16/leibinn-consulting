import type { Metadata } from "next";
import Link from "next/link";
import { SplitHero } from "@/components/SplitHero";
import { QuestionSection } from "@/components/QuestionSection";
import { Section, SectionHeading } from "@/components/Section";
import { Testimonial } from "@/components/Testimonial";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
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
      <SplitHero
        kicker="Absicherung"
        slug="absicherung"
        fact="§ 34d"
        factLabel="Versicherungsmakler mit freier Auswahl aus dem Markt"
        title={
          <>
            Was Sie aufbauen,
            <br />
            muss geschützt sein.
          </>
        }
        sub="Vermögensaufbau ohne Absicherung ist ein Plan mit offener Flanke: Ein Berufsunfähigkeitsfall, ein Haftungsschaden oder ein Schaden am Anlageobjekt kann Jahre an Aufbau zunichtemachen. Leibinn Consulting schließt diese Lücken als Versicherungsmakler nach § 34d Abs. 1 GewO, mit freier Auswahl aus dem Markt."
        ctaLabel="Vertragscheck anfragen"
        ctaHref={kontaktHref("vertragscheck")}
        microTrust="Kostenlose Prüfung Ihrer bestehenden Verträge, auch fremd abgeschlossener"
      />

      <QuestionSection
        title="Was unterscheidet einen Makler von einem Versicherungsvertreter?"
        answer="Ein Versicherungsvertreter arbeitet für eine Gesellschaft und vermittelt deren Produkte. Ein Versicherungsmakler nach § 34d GewO arbeitet rechtlich im Auftrag des Kunden und wählt frei aus dem Markt. Empfohlen wird, was Preis und Leistung rechtfertigen, und die Empfehlung wird begründet."
      >
        <p>
          Wir versichern nicht alles, was versicherbar ist. Der Fokus liegt auf
          dem, was Ihren Vermögensaufbau trägt: Ihr Einkommen, Ihre{" "}
          <Link href="/immobilien" className="text-accent underline underline-offset-2">
            Immobilien und Anlageobjekte
          </Link>
          , Ihre Haftung und, bei Unternehmern,{" "}
          <Link href="/holding" className="text-accent underline underline-offset-2">
            der Betrieb
          </Link>
          . Alles andere ist oft verzichtbar, und auch das sagen wir. Gekündigte
          Doppelversicherungen sind ein häufigeres Ergebnis unserer
          Vertragschecks als neue Abschlüsse.
        </p>
      </QuestionSection>

      <Section tone="warm">
        <SectionHeading>
          Der Vertragscheck:
          <br />
          Erst prüfen, was Sie schon haben.
        </SectionHeading>
        <p className="mt-8 leading-relaxed text-ink-soft">
          Die meisten Mandanten kommen nicht ohne Versicherungen, sondern mit
          einem Ordner voll davon. Der Vertragscheck prüft Bestand gegen
          Bedarf: Was fehlt, was doppelt sich, was ist zu teuer für seine
          Leistung. Danach wird der Bestand regelmäßig überprüft, denn
          Lebensumstände ändern sich schneller als Verträge.
        </p>
        <Testimonial
          quote="Kleine Extras wie die regelmäßige Überprüfung meiner bestehenden Verträge zeigen, dass Herr Leibinn langfristig interessiert ist, nicht am schnellen Abschluss."
          name="Winsome Okafor"
          role="Lehrerin"
        />
      </Section>

      <Faq title="Häufige Fragen zur Absicherung" items={faqItems} />

      <FinalCta
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
