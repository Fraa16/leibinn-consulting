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
import { kontaktHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Off-Market-Immobilien kaufen | Leibinn Consulting" },
  description:
    "Off-Market-Immobilien als Kapitalanlage: Zugang zu Objekten, die nie inseriert werden. Eingetragener Immobilienmakler, Region Stuttgart. Ersteinschätzung kostenlos.",
  alternates: { canonical: "/immobilien" },
};

const steps: Step[] = [
  {
    title: "Suchprofil festlegen",
    plainText:
      "Budget, Region, Objekttyp, Renditeerwartung, Haltedauer: Im Erstgespräch entsteht ein klares Profil. Ohne Profil keine Vorschläge, wir schicken keine Massenexposés.",
    text: "Budget, Region, Objekttyp, Renditeerwartung, Haltedauer: Im Erstgespräch entsteht ein klares Profil. Ohne Profil keine Vorschläge, wir schicken keine Massenexposés.",
  },
  {
    title: "Abgleich mit dem Netzwerk",
    plainText:
      "Passt ein Objekt aus dem Netzwerk zu Ihrem Profil, melden wir uns. Nicht umgekehrt: Sie erhalten nur Angebote, die Ihre Kriterien erfüllen.",
    text: "Passt ein Objekt aus dem Netzwerk zu Ihrem Profil, melden wir uns. Nicht umgekehrt: Sie erhalten nur Angebote, die Ihre Kriterien erfüllen.",
  },
  {
    title: "Geprüfte Unterlagen",
    plainText:
      "Mietverträge, Nebenkostenabrechnungen, Zustand, Lagefaktoren: Sie bekommen die Zahlen aufbereitet, bevor Sie entscheiden. Auf Wunsch koordinieren wir die Finanzierung über unser Partnernetzwerk gleich mit.",
    text: (
      <>
        Mietverträge, Nebenkostenabrechnungen, Zustand, Lagefaktoren: Sie
        bekommen die Zahlen aufbereitet, bevor Sie entscheiden. Auf Wunsch
        koordinieren wir die{" "}
        <Link href="/finanzierung" className="text-accent underline underline-offset-2">
          Finanzierung über unser Partnernetzwerk
        </Link>{" "}
        gleich mit.
      </>
    ),
  },
  {
    title: "Kauf und danach",
    plainText:
      "Nach dem Kauf endet die Zusammenarbeit nicht: Auf Wunsch übernehmen wir Miet- und Hausverwaltung, damit die Anlage läuft, ohne dass Sie Vermieter-Alltag übernehmen.",
    text: "Nach dem Kauf endet die Zusammenarbeit nicht: Auf Wunsch übernehmen wir Miet- und Hausverwaltung, damit die Anlage läuft, ohne dass Sie Vermieter-Alltag übernehmen.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "In welchen Regionen vermittelt Leibinn Consulting?",
    // [PLATZHALTER] Regionen von Cedrik einsetzen (z. B. Großraum Stuttgart und weitere Standorte)
    a: "Der Schwerpunkt liegt auf Regionen mit stabiler Mietnachfrage, insbesondere im Großraum Stuttgart. Entscheidend ist nicht die Postleitzahl, sondern die Kennzahlen des Objekts: Vermietungsstand, Mietniveau, Entwicklung des Standorts. Ihr Suchprofil bestimmt, welche Regionen infrage kommen.",
  },
  {
    q: "Welche Kosten entstehen für Käufer?",
    a: "Die Ersteinschätzung des Suchprofils ist kostenlos. Bei einer erfolgreichen Vermittlung fällt eine marktübliche Maklerprovision an, deren Höhe vor Beginn der Zusammenarbeit offen genannt wird. Es gibt keine versteckten Gebühren und keine Kosten, solange kein Kauf zustande kommt.",
  },
  {
    q: "Übernimmt Leibinn Consulting auch die Verwaltung?",
    a: "Ja, auf Wunsch. Nach dem Kauf können Miet- und Hausverwaltung übernommen werden: Mietersuche, Abrechnungen, Instandhaltungskoordination. Sie entscheiden, wie viel Vermieter-Alltag Sie selbst übernehmen wollen. Viele Mandanten kombinieren Kauf und Verwaltung, um die Anlage vollständig auszulagern.",
  },
  {
    q: "Wie schnell muss ich bei einem Angebot entscheiden?",
    a: "Schneller als auf dem offenen Markt, aber nicht blind: Sie erhalten geprüfte Unterlagen und eine klare Entscheidungsgrundlage. Realistisch sind wenige Tage bis wenige Wochen, je nach Objekt. Deshalb bereiten wir die Finanzierung vor, damit Sie zusagen können, wenn es passt.",
  },
  {
    q: "Ist eine Off-Market-Immobilie automatisch ein gutes Investment?",
    a: "Nein. Off-Market beschreibt den Vertriebsweg, nicht die Qualität. Jedes Objekt muss sich über seine Zahlen rechtfertigen: Kaufpreis, Mieteinnahmen, Zustand, Standort. Objekte, die diese Prüfung nicht bestehen, vermitteln wir nicht. Der Vertriebsweg ist der Zugang, die Prüfung ist die Grundlage.",
  },
];

const realEstateAgentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  url: `${site.url}/immobilien`,
  areaServed: site.region,
  description:
    "Vermittlung von Off-Market-Kapitalanlage-Immobilien als eingetragener Immobilienmakler.",
};

export default function ImmobilienPage() {
  return (
    <>
      <SplitHero
        kicker="Off-Market-Immobilien"
        slug="immobilien"
        fact="0 Inserate"
        factLabel="Off-Market-Objekte erscheinen nie auf Portalen"
        title={
          <>
            Off-Market-Immobilien:
            <br />
            Objekte, die Portale nie sehen.
          </>
        }
        sub="Leibinn Consulting vermittelt als eingetragener Immobilienmakler Kapitalanlage-Immobilien, die ohne öffentliche Inserate den Besitzer wechseln. Sie kaufen ohne Bieterwettbewerb, mit geprüften Unterlagen und auf Wunsch mit anschließender Miet- und Hausverwaltung."
        ctaLabel="Objekt-Zugang anfragen"
        ctaHref={kontaktHref("objekt-zugang")}
        microTrust="Kostenlose Ersteinschätzung Ihres Suchprofils, unverbindlich"
      />

      <QuestionSection
        title="Was sind Off-Market-Immobilien?"
        answer="Off-Market-Immobilien sind Objekte, die verkauft werden, ohne jemals auf Immobilienportalen oder in Zeitungen inseriert zu sein. Eigentümer wählen diesen Weg aus Diskretion oder Zeitgründen. Der Zugang läuft ausschließlich über persönliche Netzwerke aus Eigentümern, Verwaltern und Maklern. Genau dieses Netzwerk ist die Grundlage unserer Vermittlung."
      >
        <p>
          Der Unterschied zeigt sich beim Kauf: Auf Portalen konkurrieren Sie
          mit dutzenden Interessenten, der Preis steigt durch den Wettbewerb,
          und die besten Objekte sind nach Tagen vergeben. Off-Market
          verhandeln Sie direkt, ohne Bieterverfahren und ohne Zeitdruck durch
          andere Käufer.
        </p>
        <p>
          Dafür gilt: Diese Objekte warten nicht. Wer ein passendes Angebot
          erhält, braucht geprüfte Unterlagen und eine vorbereitete
          Finanzierung, um zusagen zu können. Beides ist Teil unserer
          Vermittlung.
        </p>
      </QuestionSection>

      <QuestionSection
        tone="warm"
        title="Wie funktioniert der Zugang?"
        answer="Der Zugang läuft in vier Schritten: Sie definieren mit uns Ihr Suchprofil, wir gleichen es mit Objekten aus unserem Netzwerk ab, Sie erhalten geprüfte Unterlagen zu passenden Angeboten und entscheiden ohne Bieterwettbewerb. Die Ersteinschätzung Ihres Suchprofils ist kostenlos."
      >
        <StepList steps={steps} />
      </QuestionSection>

      <Section>
        <SectionHeading>
          Für Kapitalanleger.
          <br />
          Nicht für Schnäppchenjäger.
        </SectionHeading>
        <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
          <p>
            Off-Market heißt nicht automatisch billig. Es heißt: weniger
            Wettbewerb, direkte Verhandlung, Zugang zu Objekten in Regionen mit
            stabiler Mietnachfrage. Wer eine Immobilie als langfristige
            Kapitalanlage versteht, findet hier Angebote, die der Markt nie zu
            sehen bekommt.
          </p>
          <p>
            Unternehmer kaufen auf Wunsch über eine Gesellschaftsstruktur. Ob
            sich das für Sie rechnet, klären wir zusammen mit der{" "}
            <Link href="/holding" className="text-accent underline underline-offset-2">
              Holding-Beratung
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section tone="warm">
        <SectionHeading>Warum es keine Objektliste gibt.</SectionHeading>
        <p className="mt-8 leading-relaxed text-ink-soft">
          Off-Market-Objekte sind einzeln, diskret und schnell vergeben. Eine
          öffentliche Liste würde genau das zerstören, was ihren Wert ausmacht.
          Deshalb arbeiten wir andersherum: Erst Ihr Suchprofil, dann der
          Abgleich. Sie erfahren von einem Objekt, wenn es zu Ihnen passt, und
          vor den anderen.
        </p>
      </Section>

      <Faq title="Häufige Fragen zu Off-Market-Immobilien" items={faqItems} />

      <FinalCta
        title={
          <>
            Ihr Suchprofil.
            <br />
            Unser Netzwerk.
          </>
        }
        text="Im kostenlosen Erstgespräch definieren wir Ihr Suchprofil und Sie erfahren, ob unser Netzwerk zu Ihren Kriterien passt. Unverbindlich und ohne Wartezeit auf Portalen."
        ctaLabel="Objekt-Zugang anfragen"
        ctaHref={kontaktHref("objekt-zugang")}
      />

      <Disclaimer>
        Immobilien sind langfristige Kapitalanlagen. Wert und Mieteinnahmen
        können sich verändern und hängen von Standort, Zustand und
        Marktentwicklung ab. Historische Entwicklungen sind keine Garantie für
        zukünftige Ergebnisse.
      </Disclaimer>

      <JsonLd
        data={breadcrumbJsonLd([{ name: "Immobilien", path: "/immobilien" }])}
      />
      <JsonLd data={realEstateAgentJsonLd} />
    </>
  );
}
