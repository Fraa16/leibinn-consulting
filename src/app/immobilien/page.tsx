import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { LightSection } from "@/components/Theme";
import { Bento, BentoCell } from "@/components/Bento";
import { EditorialHeader } from "@/components/Editorial";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { SkylineArt } from "@/components/VisualPanel";
import { kontaktHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Off-Market-Immobilien kaufen | Leibinn Consulting" },
  description:
    "Off-Market-Immobilien als Kapitalanlage: Zugang zu Objekten, die nie inseriert werden. Eingetragener Immobilienmakler, Region Stuttgart. Ersteinschätzung kostenlos.",
  alternates: { canonical: "/immobilien" },
};

const ablauf = [
  {
    title: "Suchprofil festlegen",
    text: "Budget, Region, Objekttyp, Renditeerwartung, Haltedauer: Im Erstgespräch entsteht ein klares Profil. Ohne Profil keine Vorschläge, wir schicken keine Massenexposés.",
    className: "md:col-span-7",
  },
  {
    title: "Abgleich mit dem Netzwerk",
    text: "Passt ein Objekt aus dem Netzwerk zu Ihrem Profil, melden wir uns. Nicht umgekehrt: Sie erhalten nur Angebote, die Ihre Kriterien erfüllen.",
    className: "md:col-span-5",
  },
  {
    title: "Geprüfte Unterlagen",
    text: "Mietverträge, Nebenkostenabrechnungen, Zustand, Lagefaktoren: Sie bekommen die Zahlen aufbereitet, bevor Sie entscheiden. Auf Wunsch koordinieren wir die Finanzierung über unser Partnernetzwerk gleich mit.",
    className: "md:col-span-5",
  },
  {
    title: "Kauf und danach",
    text: "Nach dem Kauf endet die Zusammenarbeit nicht: Auf Wunsch übernehmen wir Miet- und Hausverwaltung, damit die Anlage läuft, ohne dass Sie Vermieter-Alltag übernehmen.",
    className: "md:col-span-7",
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
      {/* Hero — kinoartig: riesige 0, Skyline als Bühne */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 pt-16 md:grid-cols-12 md:pt-24">
          <div className="md:col-span-7">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Off-Market-Immobilien
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Objekte, die Portale
              <br />
              nie sehen.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Leibinn Consulting vermittelt als eingetragener Immobilienmakler
              Kapitalanlage-Immobilien, die ohne öffentliche Inserate den
              Besitzer wechseln. Sie kaufen ohne Bieterwettbewerb, mit
              geprüften Unterlagen und auf Wunsch mit anschließender Miet- und
              Hausverwaltung.
            </p>
            <div className="mt-9 pb-4">
              <CtaButton href={kontaktHref("objekt-zugang")}>
                Objekt-Zugang anfragen
              </CtaButton>
              <p className="mt-4 text-sm text-ink-faint">
                Kostenlose Ersteinschätzung Ihres Suchprofils, unverbindlich
              </p>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pb-4 md:text-right">
            <p className="font-heading text-[7rem] leading-none font-bold tracking-tight text-fawn md:text-[10rem]">
              0
            </p>
            <p className="text-sm text-ink-soft md:ml-auto md:max-w-[14rem]">
              Inserate: Off-Market-Objekte erscheinen nie auf Portalen
            </p>
          </div>
        </div>
        <SkylineArt className="mx-auto -mb-px block w-full max-w-6xl px-6 text-azure-light/30" />
      </section>

      {/* 01 · Definition — weißer Breaker, Editorial-Zweispalter */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
                <span className="font-heading text-azure">01</span>
                <span className="text-ink-faint">Definition</span>
              </p>
              <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight md:text-5xl">
                Was sind Off-Market-Immobilien?
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="border-l-4 border-azure pl-6 text-lg leading-relaxed font-medium">
                Off-Market-Immobilien sind Objekte, die verkauft werden, ohne
                jemals auf Immobilienportalen oder in Zeitungen inseriert zu
                sein. Eigentümer wählen diesen Weg aus Diskretion oder
                Zeitgründen. Der Zugang läuft ausschließlich über persönliche
                Netzwerke aus Eigentümern, Verwaltern und Maklern. Genau dieses
                Netzwerk ist die Grundlage unserer Vermittlung.
              </p>
              <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Der Unterschied zeigt sich beim Kauf: Auf Portalen
                  konkurrieren Sie mit dutzenden Interessenten, der Preis
                  steigt durch den Wettbewerb, und die besten Objekte sind nach
                  Tagen vergeben. Off-Market verhandeln Sie direkt, ohne
                  Bieterverfahren und ohne Zeitdruck durch andere Käufer.
                </p>
                <p>
                  Dafür gilt: Diese Objekte warten nicht. Wer ein passendes
                  Angebot erhält, braucht geprüfte Unterlagen und eine
                  vorbereitete Finanzierung, um zusagen zu können. Beides ist
                  Teil unserer Vermittlung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LightSection>

      {/* 02 · Zugang — dunkles, asymmetrisches Ablauf-Bento */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="02"
            kicker="Der Zugang"
            title="Wie funktioniert der Zugang?"
            intro="Der Zugang läuft in vier Schritten: Sie definieren mit uns Ihr Suchprofil, wir gleichen es mit Objekten aus unserem Netzwerk ab, Sie erhalten geprüfte Unterlagen zu passenden Angeboten und entscheiden ohne Bieterwettbewerb. Die Ersteinschätzung Ihres Suchprofils ist kostenlos."
          />
          <Bento className="mt-14">
            {ablauf.map((step, i) => (
              <BentoCell
                key={step.title}
                surface={i === 2 ? "azure" : "cobalt"}
                className={step.className}
              >
                <span
                  className={`font-heading text-5xl font-bold ${i === 2 ? "text-white/40" : "text-azure-light/50"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold">
                  {step.title}
                </h3>
                <p
                  className={`mt-3 leading-relaxed ${i === 2 ? "text-white/85" : "text-ink-soft"}`}
                >
                  {i === 2 ? (
                    <>
                      Mietverträge, Nebenkostenabrechnungen, Zustand,
                      Lagefaktoren: Sie bekommen die Zahlen aufbereitet, bevor
                      Sie entscheiden. Auf Wunsch koordinieren wir die{" "}
                      <Link
                        href="/finanzierung"
                        className="underline underline-offset-2"
                      >
                        Finanzierung über unser Partnernetzwerk
                      </Link>{" "}
                      gleich mit.
                    </>
                  ) : (
                    step.text
                  )}
                </p>
              </BentoCell>
            ))}
          </Bento>
        </div>
      </section>

      {/* 03 · Zwei große Kontrastkarten — weißer Breaker */}
      <LightSection className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-12 md:py-28">
          <BentoCell surface="deep" className="md:col-span-7 md:p-12">
            <h2 className="font-heading text-3xl leading-snug font-bold md:text-4xl">
              Für Kapitalanleger.
              <br />
              Nicht für Schnäppchenjäger.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
              <p>
                Off-Market heißt nicht automatisch billig. Es heißt: weniger
                Wettbewerb, direkte Verhandlung, Zugang zu Objekten in Regionen
                mit stabiler Mietnachfrage. Wer eine Immobilie als langfristige
                Kapitalanlage versteht, findet hier Angebote, die der Markt nie
                zu sehen bekommt.
              </p>
              <p>
                Unternehmer kaufen auf Wunsch über eine Gesellschaftsstruktur.
                Ob sich das für Sie rechnet, klären wir zusammen mit der{" "}
                <Link
                  href="/holding"
                  className="text-azure-light underline underline-offset-2"
                >
                  Holding-Beratung
                </Link>
                .
              </p>
            </div>
          </BentoCell>
          <BentoCell surface="fawn" className="md:col-span-5 md:p-12">
            <h2 className="font-heading text-3xl leading-snug font-bold">
              Warum es keine Objektliste gibt.
            </h2>
            <p className="mt-6 leading-relaxed text-twilight-deep/80">
              Off-Market-Objekte sind einzeln, diskret und schnell vergeben.
              Eine öffentliche Liste würde genau das zerstören, was ihren Wert
              ausmacht. Deshalb arbeiten wir andersherum: Erst Ihr Suchprofil,
              dann der Abgleich. Sie erfahren von einem Objekt, wenn es zu
              Ihnen passt, und vor den anderen.
            </p>
          </BentoCell>
        </div>
      </LightSection>

      {/* 04 · FAQ */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-fawn uppercase md:col-span-3">
            04 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq
              title="Häufige Fragen zu Off-Market-Immobilien"
              items={faqItems}
            />
          </div>
        </div>
      </section>

      <CtaBanner
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
