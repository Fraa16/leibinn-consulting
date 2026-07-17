# Leibinn Consulting – Website

Marketing-Website für Leibinn Consulting: Vermögensaufbau, Off-Market-Immobilien, Holding-Strukturen, Absicherung und Finanzierung (Region Stuttgart).

**Stack:** Next.js (App Router) · Tailwind CSS 4 · TypeScript · Fonts: Playfair Display + Lora (lokal via `next/font`, DSGVO-freundlich) · Akzentfarbe `#2652E9`

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

Stock-Downloads (Unsplash etc.) sind in der Build-Umgebung durch die Netzwerk-Policy blockiert. Deshalb tragen eigene SVG-Illustrationen im Markenstil die Gestaltung (`src/components/VisualPanel.tsx`). Echte Fotos später einfach einsetzen:

- Porträt Cedrik → `public/images/cedrik-leibinn.jpg`, dann `PortraitPanel` durch `next/image` ersetzen
- Fachseiten-Motive → `HeroPanel` in `src/components/SplitHero.tsx` austauschen

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
10. **Porträtfoto** → `public/images/cedrik-leibinn.jpg`
11. **Google-Bewertungs-Widget** einrichten (ersetzt/ergänzt Zitate laut Copy-Doc Startseite)
