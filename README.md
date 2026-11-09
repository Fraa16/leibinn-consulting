# Leibinn Consulting · Website

Marketing-Website für Leibinn Consulting: Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung, bAV / bKV und Absicherung (Böblingen bei Stuttgart).

**Stack:** Next.js (App Router) · Tailwind CSS 4 · TypeScript · Fonts: Host Grotesk + Geist Mono (lokal via `next/font`, keine Verbindung zu Google im Browser) · Vercel Web Analytics

## Design-System

Die Hauptseite teilt die DNA der Landingpages (Investment- & Finanzberatung, Immobilien & Steuern, Benefits):

- **Grund und Flächen:** Ivory `#F5F3EE` als Seitengrund, Ink `#0D1A2D` als abgerundete Inset-Panels (`.lc-panel`), weiße Karten auf Ivory.
- **Typografie:** Host Grotesk für alles, Geist Mono für Eyebrows und Labels. Headlines mit kursivem Akzent (`<em>` in `.display-*`).
- **Elemente:** schwebende Pill-Navigation, Pill-Buttons (`.btn-copper`, `.btn-ink`, `.btn-outline` …), Logo-Spuren als tönbare CSS-Masken (`.bl-a`, `.bl-b`), Logo als Maske (`.logo-wordmark`, `.logo-lockup`).
- **Token und Klassen:** `src/app/globals.css`.

**Drei Welten, drei Akzente** (`worlds` in `src/lib/site.ts`). Jede Fachseite setzt per `PageShell accent="…"` den Akzent ihrer Welt (CSS-Variablen `--acc*`, Utilities `text-acc`, `bg-acc-light` …):

| Welt | Akzent | Fachbereiche |
| --- | --- | --- |
| Privates Vermögen | Petrol `#2F7A7E` | Investments, Absicherung |
| Immobilien | Copper `#B8875A` (auch Hub-Akzent) | Off-Market-Immobilien, Finanzierung |
| Unternehmen | Indigo `#4A4FB0` | Holding-Strukturen, bAV / bKV |

**Regel für Texte:** Sie-Form, keine Gedankenstriche (– oder —) als Satzzeichen; Komma, Doppelpunkt oder Punkt verwenden.

## Struktur

| Bereich | Dateien |
| --- | --- |
| Seiten | `src/app/**/page.tsx` (Start, Leistungen, 6 Fachseiten, Über uns, Kontakt, Impressum, Datenschutz, 404) |
| Inhalte zentral | `src/lib/site.ts` (Kontaktdaten, Fachbereiche, Welten, Anliegen) |
| Global | `SiteHeader`, `SiteFooter`, `Brand` (Logo, Marken-Linien), `Reveal`, `FaqList`, `SectionHead`, `icons` |
| Seiten-Baukasten | `src/components/page/`: `PageHero`, `BookingSection`, `FaqBlock`, `Blocks` (PageShell, ProcessSteps, Compare, QuoteCard, RelatedTopics, CheckList …), `LegalPage`, `ZinsRechner` |
| Startseite | `src/components/home/`: `LeistungenBento` (inkl. Mini-Interfaces), `Wegweiser`, `TestimonialSlider`, `BookingCard` |

**Wegweiser:** drei Fragen führen zu den passenden Fachbereichen; läuft im Browser, speichert nichts. Das Ergebnis erscheint in der Buchungskarte als „Ihr Fokus“.

**Zins-Rechner (`/finanzierung`):** vereinfachte Modellrechnung (Annuitätendarlehen, 3,7 % Basiszins, 2 % Anfangstilgung). Annahmen in `ZinsRechner.tsx`.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build (statisch generiert)
npm run lint
```

## Deployment (Vercel)

Next.js wird automatisch erkannt. Umgebungsvariablen im Vercel-Dashboard:

| Variable | Zweck |
| --- | --- |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly-Event für das 60-Minuten-Erstgespräch (Fallback in `src/lib/site.ts`, gleicher Link auf allen Leibinn-Seiten) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Kontaktformular über [Resend](https://resend.com); ohne Key verweist das Formular auf E-Mail/Telefon |

**Terminbuchung:** Calendly wird per Zwei-Klick geladen (`BookingCard.tsx`). Erst nach Klick auf „Kalender laden“ geht eine Anfrage an Calendly.

**Anliegen:** Links wie `/kontakt?anliegen=struktur-check` wählen das Anliegen im Formular vor. Optionen in `src/lib/site.ts`.

## Bilder

Fotos (Shooting Cedrik Leibinn) und Skyline-Motive liegen optimiert als WebP in `public/images/`. Austausch: Datei mit gleichem Namen und ähnlichem Ausschnitt ersetzen.

**Fotonachweis Skyline (Unsplash-Lizenz, Nennung freiwillig):** `city-night` Bharat Patil · `ffm-dom` Kilian Karger · `ffm-towers` Lana · `ffm-park` Leonhard Niederwimmer.

**Hero-Video:** Frankfurter Skyline (`public/media/hero.webm`), spielt einmal und friert auf dem letzten Frame ein (`HeroVideo.tsx`). Standbild-Fallback für Mobil, iOS und reduced-motion via `hero-last.jpg`.

**Marken-Assets** (`public/brand/`): `logo-wordmark.webp` (Header), `logo-lockup-dark.webp` (Footer), `logo-emblem-navy.png` (Bildmarke), `line-a.png` / `line-b.png` (Logo-Spuren). OG-Bild: `public/og.jpg`; Icons: `src/app/icon.png`, `src/app/apple-icon.png`.

## Vor Go-live prüfen

1. **Calendly:** Das 60-Minuten-Event (`https://calendly.com/beratung-leibinn-consulting/60min`) ist die Quelle der Wahrheit für alle Leibinn-Seiten; Texte nennen 60 Minuten.
2. **Datenschutz:** Absatz zur Zwei-Klick-Terminbuchung (Calendly, USA) juristisch prüfen lassen.
3. **Partner-Leiste** auf der Startseite („Ausgezeichnet und vernetzt“) bestätigen.
4. **Schufa-Aussage** auf `/finanzierung` prüfen, ob zusagbar.
5. **Zins-Rechner:** Annahmen (Basiszins, Tilgung) mit dem Finanzierungspartner abstimmen.
