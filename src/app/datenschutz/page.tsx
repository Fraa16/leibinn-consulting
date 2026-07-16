import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

/*
 * [PLATZHALTER] Struktur-Gerüst. Der vollständige Text muss vor Go-live von
 * einem Datenschutz-Fachkundigen erstellt/geprüft werden (DSGVO).
 */
export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight">
        Datenschutzerklärung
      </h1>
      <div className="mt-10 space-y-8 leading-relaxed text-ink-soft [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
        <div>
          <h2>1. Verantwortlicher</h2>
          <p className="mt-3">
            [PLATZHALTER: Name, Anschrift, E-Mail des Verantwortlichen]
          </p>
        </div>
        <div>
          <h2>2. Hosting</h2>
          <p className="mt-3">
            [PLATZHALTER: Vercel Inc. als Hosting-Anbieter benennen, inkl.
            Server-Logfiles, Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO und
            Hinweis auf Auftragsverarbeitungsvertrag]
          </p>
        </div>
        <div>
          <h2>3. Kontaktformular</h2>
          <p className="mt-3">
            [PLATZHALTER: Verarbeitung der Formulardaten (Name, E-Mail,
            Telefon, Anliegen, Nachricht) zur Bearbeitung der Anfrage,
            Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO; E-Mail-Versand über
            Resend als Auftragsverarbeiter benennen, sobald aktiv]
          </p>
        </div>
        <div>
          <h2>4. Ihre Rechte</h2>
          <p className="mt-3">
            [PLATZHALTER: Auskunft, Berichtigung, Löschung, Einschränkung,
            Datenübertragbarkeit, Widerspruch, Beschwerderecht bei der
            Aufsichtsbehörde]
          </p>
        </div>
        <div>
          <h2>5. Keine Cookies / kein Tracking</h2>
          <p className="mt-3">
            [PLATZHALTER: Die Website setzt derzeit keine Tracking-Cookies
            ein. Schriftarten werden lokal eingebunden (kein Google-Fonts-CDN).
            Anpassen, falls später Analytics ergänzt wird.]
          </p>
        </div>
      </div>
    </section>
  );
}
