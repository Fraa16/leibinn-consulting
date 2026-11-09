import type { Metadata } from "next";
import type { FaqEntry } from "@/components/FaqList";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { MiniBenefits } from "@/components/home/LeistungenBento";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { FaqBlock } from "@/components/page/FaqBlock";
import {
  CheckList,
  PageShell,
  RelatedTopics,
  Statement,
  TopicEyebrow,
} from "@/components/page/Blocks";

export const metadata: Metadata = {
  title: {
    absolute:
      "Betriebliche Altersvorsorge & Krankenversicherung (bAV/bKV) | Leibinn Consulting",
  },
  description:
    "Mit betrieblicher Altersvorsorge und Krankenversicherung Fachkräfte gewinnen und binden: steuerlich optimiert, verwaltungsarm und spürbar wirksam. Konzept und Umsetzung von Leibinn Consulting.",
  alternates: { canonical: "/bav-bkv" },
};

const vorteile = [
  <><strong className="font-semibold text-navy">Struktur statt Einzelmaßnahmen:</strong> ein durchdachtes Benefit-System, das Orientierung schafft, statt loser Extras.</>,
  <><strong className="font-semibold text-navy">Wirkung statt Aufwand:</strong> spürbar bei den Mitarbeitenden, verwaltungsarm für Sie.</>,
  <><strong className="font-semibold text-navy">Rechtssicherheit und Klarheit:</strong> steuerliche Potenziale nutzen, ohne Grauzonen oder Zusatzaufwand.</>,
  <><strong className="font-semibold text-navy">Starke Arbeitgebermarke:</strong> Bewerbende sehen sofort, dass sich Engagement bei Ihnen lohnt.</>,
];

const wirkung = [
  {
    label: "Arbeitgeberattraktivität",
    text: "Sichtbar machen, warum sich qualifizierte Bewerbende für Sie entscheiden.",
  },
  {
    label: "Mitarbeiterbindung",
    text: "Spürbare Vorteile stärken Loyalität und senken Fluktuation, gerade bei Leistungsträgern.",
  },
  {
    label: "Teamkultur & Identifikation",
    text: "Benefits transportieren Wertschätzung und stärken das Wir-Gefühl.",
  },
  {
    label: "Gesundheit & Wohlbefinden",
    text: "Moderne Vorsorge entlastet Teams, reduziert Ausfälle und erhält die Leistungsfähigkeit.",
  },
];

const faqItems: FaqEntry[] = [
  {
    q: "Was bringt bAV/bKV meinem Unternehmen konkret?",
    a: "Sie werden als Arbeitgeber spürbar attraktiver. Betriebliche Altersvorsorge und Krankenversicherung sind Benefits, die im Alltag Ihrer Mitarbeitenden ankommen: Sie helfen, qualifizierte Fachkräfte zu gewinnen und langfristig zu binden, ohne dass Sie die Bruttogehälter anheben müssen. Gleichzeitig sind die Beiträge steuerlich und bei den Sozialabgaben begünstigt.",
  },
  {
    q: "Wie aufwendig ist die Einführung für uns?",
    a: "Gering. Wir übernehmen Konzeption, Anbieterauswahl und die Kommunikation an Ihre Mitarbeitenden und richten die Verwaltung so ein, dass sie schlank bleibt. Sie erhalten ein System, das läuft, statt zusätzlicher Arbeit für Ihre Personalabteilung.",
  },
  {
    q: "Lohnt sich das auch für kleine Betriebe?",
    a: "Ja. Gerade kleine und mittlere Unternehmen gewinnen im Wettbewerb um Fachkräfte, wenn sie mehr bieten als Gehalt. Die Konzepte sind auf schlanke Strukturen und begrenzte Ressourcen ausgelegt und skalieren mit Ihrem Team, von wenigen Mitarbeitenden aufwärts.",
  },
  {
    q: "Was ist der Unterschied zwischen bAV und bKV?",
    a: "Die betriebliche Altersvorsorge (bAV) baut über den Arbeitgeber eine zusätzliche Rente auf. Die betriebliche Krankenversicherung (bKV) ergänzt die gesetzliche Absicherung um Leistungen wie Zahnersatz, Vorsorge oder schnellere Facharzttermine. Beide wirken als Benefit, oft ergänzen sie sich in einem gemeinsamen Konzept.",
  },
  {
    q: "Was kostet die Beratung?",
    a: "Das Erstgespräch ist kostenlos und unverbindlich. Wir schauen gemeinsam auf Ihre Ausgangslage, Ihre Ziele und den passenden Rahmen, bevor Sie entscheiden. Sie erhalten eine ehrliche Einschätzung, keine Verkaufspräsentation.",
  },
];

/** Vier überlappende Wirkungsbereiche mit der Bildmarke im Zentrum. */
function WirkungDiagram() {
  const circles = [
    { cx: 150, cy: 150, fill: "#9CC0E8", label: ["Arbeitgeber-", "attraktivität"], lx: 112, ly: 118, dark: true },
    { cx: 250, cy: 150, fill: "#7896D8", label: ["Mitarbeiter-", "bindung"], lx: 288, ly: 118, dark: true },
    { cx: 150, cy: 250, fill: "#4A4FB0", label: ["Teamkultur &", "Identifikation"], lx: 112, ly: 288, dark: false },
    { cx: 250, cy: 250, fill: "#5F6FC6", label: ["Gesundheit &", "Wohlbefinden"], lx: 288, ly: 288, dark: false },
  ];
  return (
    <figure className="mx-auto w-full max-w-[460px]">
      <svg viewBox="0 0 400 400" role="img" aria-label="Vier Wirkungsbereiche moderner Benefits, die sich überschneiden" className="h-auto w-full">
        {circles.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r="112" fill={c.fill} fillOpacity="0.82" />
        ))}
        {circles.map((c, i) => (
          <g key={`t${i}`} fontFamily="var(--font-host)" textAnchor="middle" fill={c.dark ? "#08111F" : "#FFFFFF"}>
            <text x={c.lx} y={c.ly - 22} fontFamily="var(--font-geist-mono)" fontSize="12" letterSpacing="1.2" opacity="0.7">
              0{i + 1}
            </text>
            {c.label.map((l, n) => (
              <text key={l} x={c.lx} y={c.ly + n * 17} fontSize="14" fontWeight="600">
                {l}
              </text>
            ))}
          </g>
        ))}
        <circle cx="200" cy="200" r="38" fill="#FFFFFF" />
        <image href="/brand/logo-emblem-navy.png" x="176" y="183" width="48" height="34" />
      </svg>
    </figure>
  );
}

export default function BavBkvPage() {
  return (
    <PageShell accent="indigo">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen", href: "/leistungen" }, { label: "bAV / bKV" }]}
        eyebrow={<TopicEyebrow slug="bav-bkv" />}
        title={
          <>
            Vom Fachkräftemangel <em>zum begehrten Arbeitgeber.</em>
          </>
        }
        lead="Gewinnen und binden Sie qualifizierte Mitarbeitende mit betrieblicher Altersvorsorge und Krankenversicherung: steuerlich optimiert, verwaltungsarm und spürbar wirksam, ohne massive Gehaltserhöhungen."
        primary={{ label: "Kostenloses Erstgespräch buchen", href: "#termin" }}
        secondary={{ label: "Die vier Wirkungsbereiche", href: "#wirkung" }}
        micro="Kostenlos und unverbindlich, keine Verkaufspräsentation."
        image={{
          src: "/images/cedrik-praesentation.webp",
          alt: "Cedrik Leibinn präsentiert vor einem Team",
          pos: "object-[62%_40%]",
        }}
        floating={<MiniBenefits />}
        facts={[
          { value: "0 €", label: "Kostet Ihr Erstgespräch" },
          { value: "Verwaltungsarm", label: "Wir richten das System ein" },
          { value: "Für KMU", label: "Von wenigen Mitarbeitenden aufwärts" },
        ]}
      />

      {/* Der Hebel */}
      <section className="lc-section">
        <div className="lc-wrap grid items-start gap-12 min-[1000px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] min-[1000px]:gap-20">
          <Reveal>
            <p className="eyebrow">Der Hebel</p>
            <h2 className="display-2 mt-6 text-navy">
              Warum betriebliche Benefits <em>über Fachkräfte entscheiden.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Statement>
              Gehalt allein überzeugt heute keine Leistungsträger mehr. Ein
              strukturiertes Benefit-System zeigt auf einen Blick, wofür Sie als
              Arbeitgeber stehen und warum sich Mitarbeitende langfristig für Ihr
              Unternehmen entscheiden.
            </Statement>
            <div className="mt-9">
              <CheckList items={vorteile} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wirkungsbereiche */}
      <section id="wirkung" className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative">
          <SectionHead
            eyebrow="Wo Benefits wirken"
            title={
              <>
                Vier Bereiche. <em>Ein System.</em>
              </>
            }
            lead="Ein gut gebautes Benefit-System zahlt auf vier Bereiche gleichzeitig ein. Die Bausteine wirken in mehr als einem davon, deshalb überschneiden sie sich."
          />
          <div className="mt-[clamp(48px,6vw,72px)] grid items-center gap-12 min-[1000px]:grid-cols-2 min-[1000px]:gap-20">
            <Reveal>
              <WirkungDiagram />
            </Reveal>
            <ol className="border-t border-white/10">
              {wirkung.map((w, i) => (
                <Reveal as="li" key={w.label} delay={i * 70} className="flex gap-5 border-b border-white/10 py-6">
                  <span className="mono pt-1.5 text-acc-light tnum">0{i + 1}</span>
                  <div>
                    <h3 className="text-[clamp(20px,1.8vw,24px)] font-medium tracking-[-0.02em]">{w.label}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-on-dark-body">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* bAV und bKV */}
      <section className="lc-section !pb-0">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Die Bausteine"
            title={
              <>
                bAV und bKV, <em>kurz erklärt.</em>
              </>
            }
            lead="Beide wirken als Benefit. Oft ergänzen sie sich in einem gemeinsamen Konzept."
          />
          <div className="mt-[clamp(48px,6vw,72px)] grid gap-4 md:grid-cols-2">
            {[
              {
                tag: "bAV",
                title: "Betriebliche Altersvorsorge",
                text: "Baut über den Arbeitgeber eine zusätzliche Rente auf. Die Beiträge sind steuerlich und bei den Sozialabgaben begünstigt.",
                dark: true,
              },
              {
                tag: "bKV",
                title: "Betriebliche Krankenversicherung",
                text: "Ergänzt die gesetzliche Absicherung um Leistungen wie Zahnersatz, Vorsorge oder schnellere Facharzttermine. Ein Benefit, der im Alltag ankommt.",
                dark: false,
              },
            ].map((b, i) => (
              <Reveal
                key={b.tag}
                delay={i * 90}
                className={`rounded-[24px] p-[clamp(26px,3vw,44px)] ${b.dark ? "bg-navy text-white" : "border border-sand bg-white text-navy"}`}
              >
                <span
                  className={`inline-flex h-12 min-w-12 items-center justify-center rounded-full px-4 text-[15px] font-semibold ${
                    b.dark ? "bg-acc-light text-navy-950" : "bg-acc-tint text-acc-dark"
                  }`}
                >
                  {b.tag}
                </span>
                <h3 className="mt-8 text-[clamp(24px,2.4vw,32px)] leading-tight font-normal tracking-[-0.03em]">{b.title}</h3>
                <p className={`mt-4 text-[16px] leading-relaxed ${b.dark ? "text-on-dark-body" : "text-body"}`}>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock
        title={
          <>
            Häufige Fragen <em>zu bAV und bKV.</em>
          </>
        }
        items={faqItems}
      />

      <BookingSection
        title={
          <>
            Machen Sie Ihr Unternehmen <em>zum begehrten Arbeitgeber.</em>
          </>
        }
        lead="Im kostenlosen Erstgespräch schauen wir auf Ihre Ausgangslage und Ziele. Sie erhalten eine ehrliche Einschätzung und konkrete Ansatzpunkte für ein Benefit-System, das zu Ihrem Unternehmen passt."
      />

      <RelatedTopics current="bAV und bKV" slugs={["holding", "absicherung", "investments"]} />

      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }, { name: "bAV / bKV", path: "/bav-bkv" }])} />
    </PageShell>
  );
}
