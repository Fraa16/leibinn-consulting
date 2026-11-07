# Leibinn Consulting – Website

Marketing-Website für Leibinn Consulting: Vermögensaufbau, Off-Market-Immobilien, Holding-Strukturen, Absicherung und Finanzierung (Region Stuttgart).

**Stack:** Next.js (App Router) · Tailwind CSS 4 · TypeScript · Fonts: Host Grotesk + Geist Mono (lokal via `next/font`, keine Verbindung zu Google im Browser)

**Design-System (Markenfamilie, wie die Landingpages):** Ivory `#F5F3EE` als Grund, Ink `#0D1A2D` als abgerundete Inset-Panels, Copper `#B8875A` als Akzent der Hauptseite. Schwebende Pill-Navigation, Mono-Eyebrows, Pill-Buttons, Logo-Spuren als tönbare CSS-Masken (`.bl-a`, `.bl-b`). Token und Komponenten-Klassen (`.lc-panel`, `.display-1/2/3`, `.eyebrow`, `.btn-*`) in `src/app/globals.css`.

**Drei Welten, drei Akzente** (`worlds` in `src/lib/site.ts`): Jede Welt trägt die Farbe ihrer Landingpage, damit Hauptseite und Landingpages sichtbar zusammengehören.

| Welt | Akzent | Fachbereiche |
| --- | --- | --- |
| Privates Vermögen | Petrol `#2F7A7E` (LP Investment- & Finanzberatung) | Investments, Absicherung |
| Immobilien | Copper `#B8875A` (LP Immobilien & Steuern) | Off-Market-Immobilien, Finanzierung |
| Unternehmen | Indigo `#4A4FB0` (Benefit-Website) | Holding-Strukturen, bAV / bKV |

**Marken-Assets** (`public/brand/`): `logo-wordmark.webp` (Bildmarke + Schriftzug, Header), `logo-lockup-dark.webp` (mit „Investment Consulting“, Footer), beide als CSS-Maske einfärbbar; `line-a.png` / `line-b.png` (Logo-Spuren für Dekor). Ältere Dateien (`logo-mark-white.png`, `frame-*.png`) nutzen noch die Fachseiten. Achtung: `frame-21.png` enthält eine Platzhalter-URL als Wasserzeichen, nicht als Dekor verwenden.

**Redesign-Status:** Startseite, Header und Footer sind neu. Die Fachseiten, Über uns, Kontakt und die Rechtsseiten folgen in Phase 2; bis dahin zeigen ihre alten Token-Namen (`twilight`, `fawn`, `azure` …) auf die neue Palette.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build (statisch generiert)
```

## Deployment (Vercel)

Repo bei [vercel.com/new](https://vercel.com/new) importieren – Next.js wird automatisch erkannt, keine Sonderkonfiguration nötig. Umgebungsvariablen aus `.env.example` im Vercel-Dashboard setzen, sobald das Kontaktformular aktiv werden soll.

## Kontaktformular

`src/app/api/contact/route.ts` versendet Anfragen über [Resend](https://resend.com). Ohne `RESEND_API_KEY` ist das Formular inaktiv und verweist auf E-Mail/Telefon. Aktivieren:

1. Resend-Konto anlegen, Domain verifizieren
2. `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel setzen

**Terminbuchung:** Erstgespräch 15 Min (Video oder Telefon). Calendly wird per Zwei-Klick geladen (`src/components/home/BookingCard.tsx`): erst nach Klick auf „Kalender laden“ geht eine Anfrage an Calendly. Das Event setzen Sie über `NEXT_PUBLIC_CALENDLY_URL` in Vercel; ohne Variable greift der Fallback in `src/lib/site.ts` (derzeit noch das 60-Minuten-Event).

CTA-Buttons übergeben ihr Anliegen per Query-Parameter (z. B. `/kontakt?anliegen=struktur-check`) und wählen es im Formular vor. Optionen: `src/lib/site.ts`.

## Inhalte & Struktur

Copy stammt wortgetreu aus den Copy-Dokumenten (Startseite v3, übrige v1). Wiederverwendbare Sektionen in `src/components/` (SplitHero, QuestionSection, StepList/Timeline, CardGrid, StatStrip, Testimonial, Faq inkl. FAQPage-Schema, FinalCta, Disclaimer, VisualPanel, icons …).

| Seite | Status |
| --- | --- |
| `/` (Start) | Fertig nach Copy v3 |
| `/leistungen` (Hub) | Fertig nach Copy v1 |
| `/investments`, `/immobilien`, `/holding`, `/absicherung`, `/finanzierung`, `/steuern-recht` | Fertig nach Copy v1 |
| `/ueber-uns` | Fertig nach Copy v1 (Werdegang-Sätze offen) |
| `/kontakt` | Fertig nach Copy v1 (Calendly-URL offen, Formular als Fallback aktiv) |
| `/impressum`, `/datenschutz` | Gerüst mit PLATZHALTERN, vor Go-live juristisch füllen |

## Bilder

**Fotonachweis Skyline (Unsplash-Lizenz, Nennung freiwillig):** `city-night` Bharat Patil · `ffm-dom` Kilian Karger · `ffm-towers` Lana · `ffm-park` Leonhard Niederwimmer.

**Hero-Video:** Frankfurter Skyline (`public/media/hero.webm`) — spielt einmal pro Laden und friert auf dem letzten Frame ein (`HeroVideo.tsx`); Standbild-Fallback für Mobil/iOS/reduced-motion via `hero-last.jpg`.

**Fotos** (Shooting Cedrik Leibinn): optimiert in `public/images/` (Original-Uploads liegen in `images/`). Verwendung:

| Datei | Einsatz |
| --- | --- |
| `cedrik-portrait.webp` | Über-uns-Hero + Startseite „Über Cedrik“ (`PortraitPanel src=…`) |
| `cedrik-window.webp` | Editorial-Band auf `/ueber-uns` (`PhotoBand`) |
| `cedrik-kundengespraech.webp` | Story-Sektion `/ueber-uns` |
| `cedrik-buero.webp` | `/kontakt` (Info-Spalte) |
| `cedrik-praesentation.webp` | Foto-Band auf `/leistungen` |

Austausch: Datei in `public/images/` ersetzen (gleiche Maße/Ausschnitt beachten). Die Fachseiten (Investments, Holding etc.) bleiben bewusst grafisch (Editorial-Stil) — dort später bei Bedarf `PhotoBand`/`HeroPanel` mit passenden Motiven ergänzen.

## Offene PLATZHALTER (vor Go-live)

Alle Stellen sind im Code mit `[PLATZHALTER]` markiert (`grep -r PLATZHALTER src/`):

1. **Domain** bestätigen → `src/lib/site.ts` (Canonical-URLs, Sitemap, OG)
2. **Kontaktdaten** (E-Mail, Telefon, Straße) → `src/lib/site.ts`
3. **Calendly-URL** → `src/lib/site.ts` (`calendlyUrl`), Einbettung auf `/kontakt` erscheint automatisch
4. **Logo-Datei** einsetzen → `src/components/SiteHeader.tsx` (aktuell Wortmarke)
5. **Werdegang-Sätze** für die Story auf `/ueber-uns` (von Cedrik bestätigen lassen)
6. **§ 34c-Eintragung/Nachweis** → `/impressum`, `/ueber-uns`, Startseiten-Sektion „Über Cedrik“
7. **Regionen** in FAQ auf `/immobilien` (Vorgabe „von Cedrik“ aus Copy-Doc)
8. **Schufa-Aussage** auf `/finanzierung` prüfen, ob zusagbar (Copy-Doc-Hinweis)
9. **Impressum & Datenschutz** vollständig befüllen und prüfen lassen
10. **Google-Bewertungs-Widget** einrichten (ersetzt/ergänzt Zitate laut Copy-Doc Startseite)
