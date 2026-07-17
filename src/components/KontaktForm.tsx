"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  anliegenOptions,
  gespraechOptions,
  site,
  statusOptions,
} from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error" | "not-configured";

const inputStyles =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 outline-none transition-colors focus:border-accent";

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
          <span className="inline-block rounded-full border border-line px-4 py-2 text-sm transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white hover:border-accent">
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
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
      <div className="rounded-2xl bg-accent-tint p-10 text-center">
        <p className="font-heading text-2xl font-bold">Vielen Dank!</p>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Ihre Anfrage ist eingegangen. Sie erhalten innerhalb von 24 Stunden
          eine Antwort zur Terminabstimmung.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <p className="leading-relaxed text-ink-soft">
        Damit das Gespräch bei Ihrer Situation startet statt bei null, drei
        kurze Fragen vor der Terminwahl:
      </p>
      <fieldset>
        <legend className="mb-3 font-semibold">
          1. Worum geht es hauptsächlich?
        </legend>
        <PillGroup
          name="anliegen"
          defaultValue={validPreselect}
          options={anliegenOptions.map((o) => ({ value: o.key, label: o.label }))}
        />
      </fieldset>
      <fieldset>
        <legend className="mb-3 font-semibold">
          2. Sind Sie angestellt, selbstständig oder Unternehmer?
        </legend>
        <PillGroup
          name="status"
          options={statusOptions.map((s) => ({ value: s, label: s }))}
        />
      </fieldset>
      <fieldset>
        <legend className="mb-3 font-semibold">
          3. Gespräch lieber online oder vor Ort in Böblingen?
        </legend>
        <PillGroup
          name="gespraech"
          options={gespraechOptions.map((g) => ({ value: g, label: g }))}
        />
      </fieldset>

      <div className="grid gap-5 border-t border-line pt-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
            Name *
          </label>
          <input id="name" name="name" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
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
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
            Telefon (optional)
          </label>
          <input id="phone" name="phone" type="tel" className={inputStyles} />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-semibold"
          >
            Nachricht (optional)
          </label>
          <input id="message" name="message" className={inputStyles} />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>
          Ich habe die{" "}
          <a
            href="/datenschutz"
            className="text-accent underline underline-offset-2"
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
          className="rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "sending" ? "Wird gesendet …" : "Termin anfragen"}
        </button>
        <p className="mt-4 text-sm text-ink-faint">
          Antwort innerhalb von 24 Stunden. Kein Newsletter, kein Verteiler,
          keine Weitergabe Ihrer Daten.
        </p>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder
          schreiben Sie uns direkt per E-Mail an {site.email}.
        </p>
      )}
      {status === "not-configured" && (
        <p className="text-sm text-red-600">
          Das Formular ist noch nicht aktiv. Bitte kontaktieren Sie uns direkt
          per E-Mail ({site.email}) oder Telefon.
        </p>
      )}
    </form>
  );
}
