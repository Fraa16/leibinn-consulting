import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

/*
 * [PLATZHALTER] Alle Angaben müssen vor Go-live durch die echten Daten
 * ersetzt und juristisch geprüft werden. Wichtig laut Copy-Dokumenten:
 * § 34d Abs. 1 GewO (Versicherungsmakler) und § 34c GewO (Immobilienmakler)
 * inkl. Registernummern und Aufsichtsbehörde.
 */
export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-ink-soft [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
        <div>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            {site.name}
            <br />
            Inhaber: Cedrik Leibinn [PLATZHALTER: Rechtsform bestätigen]
            <br />
            [PLATZHALTER: Straße und Hausnummer]
            <br />
            [PLATZHALTER: PLZ] Böblingen
          </p>
        </div>
        <div>
          <h2>Kontakt</h2>
          <p className="mt-3">
            Telefon: [PLATZHALTER]
            <br />
            E-Mail: [PLATZHALTER]
          </p>
        </div>
        <div>
          <h2>Erlaubnisse und Registrierungen</h2>
          <p className="mt-3">
            Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO
            <br />
            Vermittlerregister Nr. D-LLF9-5XQCE-01 (prüfbar unter
            www.vermittlerregister.info)
            <br />
            <br />
            Immobilienmakler mit Erlaubnis nach § 34c GewO
            <br />
            [PLATZHALTER: § 34c-Eintragung/Nachweis ergänzen, bevor die Seite
            live geht – siehe Hinweis in den Copy-Dokumenten]
            <br />
            <br />
            Zuständige Aufsichtsbehörde: IHK Region Stuttgart [PLATZHALTER:
            Anschrift ergänzen]
          </p>
        </div>
        <div>
          <h2>Umsatzsteuer-ID</h2>
          <p className="mt-3">[PLATZHALTER: USt-IdNr., falls vorhanden]</p>
        </div>
        <div>
          <h2>Streitschlichtung</h2>
          <p className="mt-3">
            [PLATZHALTER: Hinweis zur EU-Streitschlichtungsplattform und zur
            Teilnahme an Verbraucherschlichtungsverfahren; bei
            Versicherungsvermittlung: Versicherungsombudsmann e. V.]
          </p>
        </div>
      </div>
    </section>
  );
}
