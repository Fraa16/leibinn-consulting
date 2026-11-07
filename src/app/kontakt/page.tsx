import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import type { FaqEntry } from "@/components/FaqList";
import { KontaktForm } from "@/components/KontaktForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { BrandLine } from "@/components/Brand";
import { BookingCard } from "@/components/home/BookingCard";
import { PageHero } from "@/components/page/PageHero";
import { FaqBlock } from "@/components/page/FaqBlock";
import { PageShell } from "@/components/page/Blocks";
import { IconCalendar, IconMail, IconPhone, IconPin } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Kontakt & Erstgespräch | Leibinn Consulting" },
  description:
    "Kostenloses Erstgespräch buchen: 15 Minuten per Video oder Telefon, mit ehrlicher erster Einschätzung. Antwort innerhalb von 24 Stunden.",
  alternates: { canonical: "/kontakt" },
};

const faqItems: FaqEntry[] = [
  {
    q: "Muss ich mich auf das Gespräch vorbereiten?",
    a: "Nein. Hilfreich ist ein grobes Bild Ihrer Situation: ungefähres Einkommen, vorhandene Anlagen, laufende Verpflichtungen, Ziele. Exakte Unterlagen sind im Erstgespräch nicht nötig, es geht um die Richtung und den größten Hebel, nicht um die zweite Nachkommastelle.",
  },
  {
    q: "Entstehen durch das Erstgespräch Verpflichtungen?",
    a: "Nein, keine. Das Gespräch ist kostenlos, es folgt kein Vertrag und kein automatischer Folgetermin. Sie entscheiden danach in Ruhe, ob eine Zusammenarbeit für Sie passt. Die erste Einschätzung aus dem Gespräch behalten Sie in jedem Fall.",
  },
  {
    q: "Was passiert nach der Buchung?",
    a: "Sie erhalten eine Bestätigung mit allen Details. Das Gespräch dauert 15 Minuten, per Video oder Telefon. Passt es, folgt ein ausführlicher Analysetermin, online oder vor Ort in Böblingen. Unterlagen brauchen Sie keine, Zahlen aus dem Kopf reichen für den Anfang.",
  },
];

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Kontakt & Erstgespräch | ${site.name}`,
  url: `${site.url}/kontakt`,
};

function ContactWays() {
  const row =
    "flex items-center gap-3.5 rounded-[16px] border border-white/10 bg-white/4 px-4 py-3.5 text-[15px] text-white transition-colors hover:border-white/24 hover:bg-white/8";
  return (
    <div className="mt-9 grid w-full max-w-[34rem] gap-2">
      <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={row}>
        <IconPhone className="h-5 w-5 shrink-0 text-acc-light" />
        {site.phone}
      </a>
      <a href={`mailto:${site.email}`} className={`${row} break-all`}>
        <IconMail className="h-5 w-5 shrink-0 text-acc-light" />
        {site.email}
      </a>
      <p className={`${row} hover:border-white/10 hover:bg-white/4`}>
        <IconPin className="h-5 w-5 shrink-0 text-acc-light" />
        {site.address}
      </p>
    </div>
  );
}

export default function KontaktPage() {
  return (
    <PageShell>
      <PageHero
        id="termin"
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
        eyebrow="Kontakt & Erstgespräch"
        title={
          <>
            15 Minuten. <em>Eine ehrliche Einschätzung.</em>
          </>
        }
        lead="Das Erstgespräch ist kostenlos und unverbindlich: Ihre Situation, Ihre Ziele, eine erste Einschätzung, wo der größte Hebel liegt. Sie gehen mit einem Ergebnis raus, auch wenn Sie sich gegen eine Zusammenarbeit entscheiden."
        extra={<ContactWays />}
        aside={<BookingCard showAlternatives={false} />}
        facts={[
          { value: "15 Min", label: "Per Video oder Telefon" },
          { value: "24 h", label: "Antwort auf Anfragen" },
          { value: "0 €", label: "Kostenlos und unverbindlich" },
        ]}
      />

      {/* Formular */}
      <section id="nachricht" className="lc-section">
        <div className="lc-wrap grid items-start gap-12 min-[1000px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] min-[1000px]:gap-20">
          <Reveal className="min-[1000px]:sticky min-[1000px]:top-[calc(var(--header-h)+40px)]">
            <p className="eyebrow">Lieber schreiben?</p>
            <h2 className="display-2 mt-6 text-navy">
              Oder senden Sie <em>uns eine Nachricht.</em>
            </h2>
            <p className="lead mt-6">
              Drei kurze Fragen, damit das Gespräch bei Ihrer Situation startet
              statt bei null. Wir melden uns innerhalb von 24 Stunden zur
              Terminabstimmung.
            </p>
            <div className="relative mt-9 aspect-[16/10] overflow-hidden rounded-[24px] bg-navy-850">
              <Image
                src="/images/cedrik-buero.webp"
                alt="Beratungsgespräch in den Räumen von Leibinn Consulting"
                fill
                sizes="(min-width: 1000px) 38vw, 100vw"
                className="object-cover object-[60%_40%]"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="rounded-[28px] border border-sand bg-white p-[clamp(22px,3.6vw,48px)] shadow-[0_30px_70px_-40px_rgba(13,26,45,0.35)]">
            <Suspense fallback={null}>
              <KontaktForm />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <FaqBlock
        className="!pt-0"
        title={
          <>
            Häufige Fragen <em>zum Erstgespräch.</em>
          </>
        }
        items={faqItems}
      />

      {/* Abschlusszeile */}
      <section className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.14} className="-bottom-16 -left-36 w-[min(960px,100vw)]" />
        <Reveal className="lc-wrap relative flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <p className="display-3 max-w-[22em]">
            Der schnellste Weg zu einem Gesamtbild Ihrer Finanzen sind 15
            Minuten Gespräch. <em>Der langsamste ist, es weiter aufzuschieben.</em>
          </p>
          <a href="#termin" className="btn btn-lg btn-copper shrink-0">
            <IconCalendar className="h-[18px] w-[18px]" />
            Termin wählen
          </a>
        </Reveal>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Kontakt", path: "/kontakt" }])} />
      <JsonLd data={contactPageJsonLd} />
    </PageShell>
  );
}
