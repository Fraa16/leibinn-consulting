"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { anliegenOptions } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error" | "not-configured";

const inputStyles =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 outline-none transition-colors focus:border-accent";

export function KontaktForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("anliegen") ?? "";
  const validPreselect = anliegenOptions.some((o) => o.key === preselected)
    ? preselected
    : "";
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
      <div className="rounded-xl bg-accent-tint p-8 text-center">
        <p className="font-heading text-2xl font-bold">Vielen Dank!</p>
        <p className="mt-3 text-ink-soft">
          Ihre Anfrage ist eingegangen. Wir melden uns zeitnah bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
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
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
            Telefon (optional)
          </label>
          <input id="phone" name="phone" type="tel" className={inputStyles} />
        </div>
        <div>
          <label
            htmlFor="anliegen"
            className="mb-1.5 block text-sm font-semibold"
          >
            Ihr Anliegen *
          </label>
          <select
            id="anliegen"
            name="anliegen"
            required
            defaultValue={validPreselect}
            className={inputStyles}
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            {anliegenOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputStyles}
        />
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
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder
          schreiben Sie uns direkt per E-Mail.
        </p>
      )}
      {status === "not-configured" && (
        <p className="text-sm text-red-600">
          Das Formular ist noch nicht aktiv. Bitte kontaktieren Sie uns direkt
          per E-Mail oder Telefon.
        </p>
      )}
    </form>
  );
}
