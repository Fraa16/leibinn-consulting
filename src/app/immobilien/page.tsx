import type { Metadata } from "next";
import Link from "next/link";
import type { FaqEntry } from "@/components/FaqList";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { MiniObjektCheck } from "@/components/home/LeistungenBento";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { FaqBlock } from "@/components/page/FaqBlock";
import {
  Compare,
  PageShell,
  ProcessSteps,
  RelatedTopics,
  Statement,
  TopicEyebrow,
  type ProcessStep,
} from "@/components/page/Blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Off-Market-Immobilien kaufen | Leibinn Consulting" },
  description:
    "Off-Market-Immobilien als Kapitalanlage: Zugang zu Objekten, die nie inseriert werden. Eingetragener Immobilienmakler, deutschlandweit. Ersteinschätzung kostenlos.",
  alternates: { canonical: "/immobilien" },
};

const steps: ProcessStep[] = [
  {
    title: "Suchprofil festlegen",
    plainText:
      "Budget, Region, Objekttyp, Renditeerwartung, Haltedauer: Im Erstgespräch entsteht ein klares Profil. Ohne Profil keine Vorschläge, wir schicken keine Massenexposés.",
    text: "Budget, Region, Objekttyp, Renditeerwartung, Haltedauer: Im Erstgespräch entsteht ein klares Profil. Ohne Profil keine Vorschläge, wir schicken keine Massenexposés.",
  },
  {
    title: "Abgleich mit dem Netzwerk",
    plainText:
      "Passt ein Objekt aus dem Netzwerk zu Ihrem Profil, melden wir uns. Sie erhalten nur Angebote, die Ihre Kriterien erfüllen.",
    text: "Passt ein Objekt aus dem Netzwerk zu Ihrem Profil, melden wir uns. Nicht umgekehrt: Sie erhalten nur Angebote, die Ihre Kriterien erfüllen.",
  },
  {
    title: "Geprüfte Unterlagen",
    plainText:
      "Mietverträge, Nebenkostenabrechnungen, Zustand, Lagefaktoren: Sie bekommen die Zahlen aufbereitet, bevor Sie entscheiden. Auf Wunsch koordinieren wir die Finanzierung über unser Partnernetzwerk gleich mit.",
    text: (
      <>
        Mietverträge, Nebenkostenabrechnungen, Zustand, Lagefaktoren: Sie bekommen
        die Zahlen aufbereitet, bevor Sie entscheiden. Auf Wunsch koordinieren wir
        die <Link href="/finanzierung">Finanzierung über unser Partnernetzwerk</Link>{" "}
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

const faqItems: FaqEntry[] = [
  {
    q: "In welchen Regionen vermittelt Leibinn Consulting?",
    a: "Deutschlandweit. Der Fokus liegt auf Standorten mit stabiler Mietnachfrage, darunter Stuttgart, München, Berlin, Köln und Frankfurt sowie weitere Metropolregionen. Entscheidend ist nicht die Postleitzahl, sondern die Kennzahlen des Objekts: Vermietungsstand, Mietniveau, Entwicklung des Standorts. Ihr Suchprofil bestimmt, welche Regionen konkret infrage kommen.",
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
    <PageShell accent="copper">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen", href: "/leistungen" }, { label: "Off-Market-Immobilien" }]}
        eyebrow={<TopicEyebrow slug="immobilien" />}
        title={
          <>
            Objekte, die Portale <em>nie sehen.</em>
          </>
        }
        lead="Leibinn Consulting vermittelt als eingetragener Immobilienmakler Kapitalanlage-Immobilien, die ohne öffentliche Inserate den Besitzer wechseln. Sie kaufen ohne Bieterwettbewerb, mit geprüften Unterlagen und auf Wunsch mit anschließender Miet- und Hausverwaltung."
        primary={{ label: "Objekt-Zugang anfragen", href: "#termin" }}
        secondary={{ label: "So funktioniert der Zugang", href: "#zugang" }}
        micro="Kostenlose Ersteinschätzung Ihres Suchprofils, unverbindlich."
        image={{
          src: "/images/ffm-dom.webp",
          alt: "Altstadt mit Dom vor modernen Hochhäusern",
          pos: "object-[60%_40%]",
        }}
        floating={<MiniObjektCheck />}
        facts={[
          { value: "0 Inserate", label: "Objekte erscheinen nie auf Portalen" },
          { value: "Geprüft", label: "Unterlagen vor jeder Entscheidung" },
          { value: "Deutschlandweit", label: "Standorte mit stabiler Mietnachfrage" },
        ]}
      />

      {/* Definition */}
      <section className="lc-section">
        <div className="lc-wrap grid gap-12 min-[1000px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[1000px]:gap-20">
          <Reveal>
            <p className="eyebrow">Definition</p>
            <h2 className="display-2 mt-6 text-navy">
              Was sind <em>Off-Market-Immobilien?</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Statement>
              Off-Market-Immobilien sind Objekte, die verkauft werden, ohne jemals
              auf Immobilienportalen oder in Zeitungen inseriert zu sein.
              Eigentümer wählen diesen Weg aus Diskretion oder Zeitgründen. Der
              Zugang läuft über persönliche Netzwerke aus Eigentümern, Verwaltern
              und Maklern. Genau dieses Netzwerk ist die Grundlage unserer
              Vermittlung.
            </Statement>
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-body">
              <p>
                Der Unterschied zeigt sich beim Kauf: Auf Portalen konkurrieren Sie
                mit dutzenden Interessenten, der Preis steigt durch den Wettbewerb,
                und die besten Objekte sind nach Tagen vergeben. Off-Market
                verhandeln Sie direkt, ohne Bieterverfahren und ohne Zeitdruck
                durch andere Käufer.
              </p>
              <p>
                Dafür gilt: Diese Objekte warten nicht. Wer ein passendes Angebot
                erhält, braucht geprüfte Unterlagen und eine vorbereitete
                Finanzierung, um zusagen zu können. Beides ist Teil unserer
                Vermittlung.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="lc-wrap mt-[clamp(48px,6vw,72px)]">
          <Compare
            caption="Kauf über"
            left="Portal"
            right="Off-Market"
            rows={[
              { label: "Wettbewerb", left: "Dutzende Interessenten pro Objekt", right: "Direkte Verhandlung, kein Bieterverfahren" },
              { label: "Preis", left: "Steigt durch den Wettbewerb", right: "Ohne Bieterwettbewerb verhandelt" },
              { label: "Tempo", left: "Gute Objekte nach Tagen vergeben", right: "Sie erfahren es, bevor andere davon wissen" },
              { label: "Unterlagen", left: "Selbst beschaffen und prüfen", right: "Geprüft und aufbereitet" },
            ]}
          />
        </Reveal>
      </section>

      {/* Zugang */}
      <section id="zugang" className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative">
          <SectionHead
            eyebrow="Der Zugang"
            title={
              <>
                Wie funktioniert <em>der Zugang?</em>
              </>
            }
            lead="Vier Schritte: Sie definieren mit uns Ihr Suchprofil, wir gleichen es mit Objekten aus unserem Netzwerk ab, Sie erhalten geprüfte Unterlagen zu passenden Angeboten und entscheiden ohne Bieterwettbewerb."
          />
          <div className="mt-[clamp(48px,6vw,72px)]">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* Haltung */}
      <section className="lc-section !pb-0">
        <div className="lc-wrap grid gap-4 min-[1000px]:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal className="on-dark relative overflow-hidden rounded-[28px] bg-navy p-[clamp(28px,4vw,56px)] text-white">
            <h2 className="display-3">
              Für Kapitalanleger. <em>Nicht für Schnäppchenjäger.</em>
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-on-dark-body">
              <p>
                Off-Market heißt nicht automatisch billig. Es heißt: weniger
                Wettbewerb, direkte Verhandlung, Zugang zu Objekten in
                nachfragestarken Standorten deutschlandweit. Wer eine Immobilie
                als langfristige Kapitalanlage versteht, findet hier Angebote, die
                der Markt nie zu sehen bekommt.
              </p>
              <p>
                Unternehmer kaufen auf Wunsch über eine Gesellschaftsstruktur. Ob
                sich das für Sie rechnet, klären wir zusammen mit der{" "}
                <Link href="/holding" className="text-white underline underline-offset-2">
                  Holding-Beratung
                </Link>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="rounded-[28px] bg-acc-tint p-[clamp(28px,4vw,56px)] text-navy">
            <p className="mono text-acc-dark">Gut zu wissen</p>
            <h2 className="mt-5 text-[clamp(24px,2.4vw,32px)] leading-tight font-normal tracking-[-0.03em]">
              Warum es keine Objektliste gibt.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-body">
              Off-Market-Objekte sind einzeln, diskret und schnell vergeben. Eine
              öffentliche Liste würde genau das zerstören, was ihren Wert
              ausmacht. Deshalb arbeiten wir andersherum: Erst Ihr Suchprofil,
              dann der Abgleich. Sie erfahren von einem Objekt, wenn es zu Ihnen
              passt, und vor den anderen.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqBlock
        title={
          <>
            Häufige Fragen zu <em>Off-Market-Immobilien.</em>
          </>
        }
        items={faqItems}
      />

      <BookingSection
        title={
          <>
            Ihr Suchprofil. <em>Unser Netzwerk.</em>
          </>
        }
        lead="Im kostenlosen Erstgespräch definieren wir Ihr Suchprofil und Sie erfahren, ob unser Netzwerk zu Ihren Kriterien passt. Unverbindlich und ohne Wartezeit auf Portalen."
      />

      <RelatedTopics
        current="Immobilien"
        slugs={["finanzierung", "holding", "absicherung"]}
        disclaimer="Immobilien sind langfristige Kapitalanlagen. Wert und Mieteinnahmen können sich verändern und hängen von Standort, Zustand und Marktentwicklung ab. Historische Entwicklungen sind keine Garantie für zukünftige Ergebnisse."
      />

      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }, { name: "Off-Market-Immobilien", path: "/immobilien" }])} />
      <JsonLd data={realEstateAgentJsonLd} />
    </PageShell>
  );
}
