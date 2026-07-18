# Leibinn Consulting – Website

Marketing-Website für Leibinn Consulting: Vermögensaufbau, Off-Market-Immobilien, Holding-Strukturen, Absicherung und Finanzierung (Region Stuttgart).

**Stack:** Next.js (App Router) · Tailwind CSS 4 · TypeScript · Fonts: Playfair Display + Lora (lokal via `next/font`, DSGVO-freundlich)

**Design-System (dunkles Markentheme):** Deep Twilight `#01005D` (Grundfläche) · True Cobalt `#1E207F` (Karten) · Royal Azure `#2452D8` (Interaktion) · Soft Fawn `#E4BF70` (CTAs, sparsam). Token-Definitionen in `src/app/globals.css`.

**Marken-Assets** (`public/brand/`, aus den gelieferten Logo-Frames): `logo-mark-white.png` (Bildmarke, Header/Hero), `logo-lockup-white.png` (Wort-Bild-Marke, Footer), `frame-01/02.png` (Linien-Ornamente für Sektionshintergründe). Achtung: `frame-21.png` enthält Wortmarke + Platzhalter-URL als Wasserzeichen — nicht als Dekor verwenden.

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
