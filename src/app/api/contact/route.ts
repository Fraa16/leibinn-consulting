import { NextResponse } from "next/server";
import {
  anliegenOptions,
  gespraechOptions,
  site,
  statusOptions,
} from "@/lib/site";

/**
 * Kontaktformular-Endpunkt (3-Fragen-Vorqualifizierung + Kontaktdaten).
 * Versand über Resend (https://resend.com), sobald RESEND_API_KEY gesetzt ist.
 * Ohne Key antwortet der Endpunkt mit { reason: "not-configured" }, und das
 * Formular zeigt die direkten Kontaktdaten als Fallback.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad-request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const anliegen = anliegenOptions.find((o) => o.key === String(body.anliegen ?? ""));
  const status = statusOptions.find((s) => s === String(body.status ?? ""));
  const gespraech = gespraechOptions.find((g) => g === String(body.gespraech ?? ""));

  if (!name || !email || !anliegen || !status || !gespraech) {
    return NextResponse.json({ ok: false, reason: "bad-request" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? `formular@${new URL(site.url).hostname}`;

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, reason: "not-configured" },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Erstgespräch-Anfrage: ${anliegen.label} – ${name}`,
      text: [
        `Thema: ${anliegen.label}`,
        `Beruflicher Status: ${status}`,
        `Gespräch: ${gespraech}`,
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        phone && `Telefon: ${phone}`,
        message && `\nNachricht:\n${message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, reason: "send-failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
