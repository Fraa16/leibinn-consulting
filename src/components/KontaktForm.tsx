"use client";

import { useState } from "react";
import { submitLead, trackConversion } from "@/lib/consent";
import { useSearchParams } from "next/navigation";
import {
  anliegenOptions,
  gespraechOptions,
  site,
  statusOptions,
} from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error" | "not-configured";

const inputStyles =
  "h-[52px] w-full rounded-[14px] border border-sand-deep bg-[#fbfaf7] px-4 text-[16px] text-navy outline-none transition-colors placeholder:text-mute focus:border-navy";

function PillGroup({
  name,
  options,
  defaultValue,
}: {
  name: string;
  options: readonly { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <label key={option.value} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            required
            defaultChecked={option.value === defaultValue}
            className="peer sr-only"
          />
          <span className="inline-flex h-10 items-center rounded-full border border-sand-deep bg-ivory/50 px-4 text-[14px] font-medium text-navy transition-colors peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-copper hover:border-navy/40">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}

/**
 * 3-Fragen-Vorqualifizierung + Kontaktdaten (Copy-Doc /kontakt,
 * Commitment-Prinzip). „Weiß ich noch nicht“ bleibt wählbar.
 */
export function KontaktForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("anliegen") ?? "";
  const validPreselect = anliegenOptions.some((o) => o.key === preselected)
    ? preselected
    : undefined;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Mit NEXT_PUBLIC_LEADS_API_URL geht die Anfrage an den zentralen Lead-Service
    // (gemeinsame Datenbank aller Leibinn-Seiten + E-Mail). Ohne die Variable
    // bleibt es beim bisherigen Weg über /api/contact (E-Mail via Resend).
    if (process.env.NEXT_PUBLIC_LEADS_API_URL) {
      const text = (k: string) => String(data[k] ?? "").trim() || undefined;
      try {
        await submitLead({
          form: "kontakt",
          name: text("name"),
          email: text("email"),
          telefon: text("phone"),
          anliegen: anliegenOptions.find((o) => o.key === text("anliegen"))?.label ?? text("anliegen"),
          nachricht: text("message"),
          fields: {
            ...(text("status") ? { status: text("status")! } : {}),
            ...(text("gespraech") ? { gespraech: text("gespraech")! } : {}),
          },
          website: text("website"),
        });
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        trackConversion("lead");
        setStatus("sent");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setStatus(body?.reason === "not-configured" ? "not-configured" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-[20px] bg-copper-tint px-6 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12l5 5 9-10" />
          </svg>
        </span>
        <p className="mt-6 text-[26px] font-medium tracking-[-0.02em] text-navy">Vielen Dank!</p>
        <p className="mx-auto mt-3 max-w-md text-body">
          Ihre Anfrage ist eingegangen. Sie erhalten innerhalb von 24 Stunden
          eine Antwort zur Terminabstimmung.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-navy">
      <p className="leading-relaxed text-body">
        Damit das Gespräch bei Ihrer Situation startet statt bei null, drei
        kurze Fragen vor der Terminwahl:
      </p>
      <fieldset>
        <legend className="mb-3 text-[15px] font-semibold">
          1. Worum geht es hauptsächlich?
        </legend>
        <PillGroup
          name="anliegen"
          defaultValue={validPreselect}
          options={anliegenOptions.map((o) => ({ value: o.key, label: o.label }))}
        />
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-[15px] font-semibold">
          2. Sind Sie angestellt, selbstständig oder Unternehmer?
        </legend>
        <PillGroup
          name="status"
          options={statusOptions.map((s) => ({ value: s, label: s }))}
        />
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-[15px] font-semibold">
          3. Erstgespräch lieber per Video oder Telefon?
        </legend>
        <PillGroup
          name="gespraech"
          options={gespraechOptions.map((g) => ({ value: g, label: g }))}
        />
      </fieldset>

      <div className="grid gap-5 border-t border-ivory-deep pt-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium">
            Name *
          </label>
          <input id="name" name="name" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium">
            Telefon (optional)
          </label>
          <input id="phone" name="phone" type="tel" className={inputStyles} />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-[13px] font-medium"
          >
            Nachricht (optional)
          </label>
          <input id="message" name="message" className={inputStyles} />
        </div>
      </div>
      <label className="flex items-start gap-3 text-[14px] leading-relaxed text-body">
        <input type="checkbox" name="privacy" required className="mt-1 h-4 w-4 shrink-0 accent-[#0d1a2d]" />
        <span>
          Ich habe die{" "}
          <a
            href="/datenschutz"
            className="text-navy underline underline-offset-2"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
          der Anfrage einverstanden. *
        </span>
      </label>
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-lg btn-ink w-full disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Wird gesendet …" : "Termin anfragen"}
        </button>
        <p className="mt-4 text-[13px] text-subtle">
          Antwort innerhalb von 24 Stunden. Kein Newsletter, kein Verteiler,
          keine Weitergabe Ihrer Daten.
        </p>
      </div>
      {status === "error" && (
        <p className="text-[14px] text-[#a33b2b]">
          Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder
          schreiben Sie uns direkt per E-Mail an {site.email}.
        </p>
      )}
      {status === "not-configured" && (
        <p className="text-[14px] text-[#a33b2b]">
          Das Formular ist noch nicht aktiv. Bitte kontaktieren Sie uns direkt
          per E-Mail ({site.email}) oder Telefon.
        </p>
      )}
    </form>
  );
}
