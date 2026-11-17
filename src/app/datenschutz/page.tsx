import { Fragment } from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/page/LegalPage";
import { inlineParts, privacyPolicy } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

// Der Text ist auf allen Leibinn-Seiten gleich: src/lib/privacy.ts (identische Datei).
// Hier steht nur, welche Funktionen diese Website hat. Google Analytics 4 und
// Google Ads erscheinen, sobald ihre IDs gesetzt sind, wie im Cookie-Banner.
const has = (v?: string) => Boolean(v?.trim());

function Inline({ text }: { text: string }) {
  return (
    <>
      {inlineParts(text).map((part, i) => {
        if (part.type === "br") return <br key={i} />;
        if (part.type === "link") {
          return part.external ? (
            <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
              {part.text}
            </a>
          ) : (
            <a key={i} href={part.href}>
              {part.text}
            </a>
          );
        }
        if (part.type === "settings") {
          // consent.ts öffnet die Einstellungen für jedes Element mit data-cookie-settings.
          return (
            <button
              key={i}
              type="button"
              data-cookie-settings
              className="font-medium text-navy underline underline-offset-2"
            >
              {part.text}
            </button>
          );
        }
        return <Fragment key={i}>{part.text}</Fragment>;
      })}
    </>
  );
}

export default function DatenschutzPage() {
  const sections = privacyPolicy({
    form: "contact",
    calendly: true,
    ga4: has(process.env.NEXT_PUBLIC_GA4_ID),
    googleAds: has(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID),
  });
  return (
    <LegalPage
      title="Datenschutzerklärung"
      current="/datenschutz"
      lead="Welche Daten wir verarbeiten, welche Dienste wir einsetzen, auf welcher Grundlage und welche Rechte Sie haben."
    >
      {sections.map((s) => (
        <div key={s.id} id={s.id} className="scroll-mt-[calc(var(--header-h)+24px)]">
          <h2>{s.title}</h2>
          {s.blocks.map((b, i) =>
            "h3" in b ? (
              <h3 key={i} className="mt-5 text-[16px] font-semibold text-navy">
                {b.h3}
              </h3>
            ) : "ul" in b ? (
              <ul key={i}>
                {b.ul.map((li, j) => (
                  <li key={j}>
                    <Inline text={li} />
                  </li>
                ))}
              </ul>
            ) : (
              <p key={i}>
                <Inline text={b.p} />
              </p>
            ),
          )}
        </div>
      ))}
    </LegalPage>
  );
}
