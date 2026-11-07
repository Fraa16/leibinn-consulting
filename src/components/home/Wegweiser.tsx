"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { topicBySlug, topics, worlds, type TopicSlug } from "@/lib/site";
import { IconArrowRight, IconArrowUpRight, IconCalendar } from "../icons";

/**
 * Wegweiser: drei kurze Fragen führen zu den passenden Fachbereichen.
 * Läuft komplett im Browser, es werden keine Daten gespeichert oder gesendet.
 * Das Ergebnis wird per Event an die Buchungskarte weitergereicht
 * („Ihr Fokus: …“), damit der Übergang ins Erstgespräch nahtlos ist.
 */

type Status = "angestellt" | "selbststaendig" | "unternehmer";
type Goal =
  | "vermoegen"
  | "immobilien"
  | "finanzierung"
  | "steuern"
  | "absichern"
  | "mitarbeitende";
type Stage = "start" | "einzeln" | "optimieren";

const statusOptions: { key: Status; label: string; sub: string }[] = [
  { key: "angestellt", label: "Angestellt", sub: "auch Führungskraft" },
  { key: "selbststaendig", label: "Selbstständig", sub: "Freiberuf, Einzelunternehmen" },
  { key: "unternehmer", label: "Unternehmer", sub: "mit eigener GmbH" },
];

const goalOptions: { key: Goal; label: string }[] = [
  { key: "vermoegen", label: "Vermögen aufbauen" },
  { key: "immobilien", label: "In Immobilien investieren" },
  { key: "steuern", label: "Steuern & Struktur optimieren" },
  { key: "finanzierung", label: "Immobilie finanzieren" },
  { key: "absichern", label: "Familie & Besitz absichern" },
  { key: "mitarbeitende", label: "Mitarbeitende binden" },
];

const stageOptions: { key: Stage; label: string }[] = [
  { key: "start", label: "Noch ohne Plan" },
  { key: "einzeln", label: "Einzelne Produkte, kein System" },
  { key: "optimieren", label: "Gut aufgestellt, will optimieren" },
];

const stageNotes: Record<Stage, string> = {
  start: "Guter Zeitpunkt: Wer früh mit Plan startet, vermeidet teure Umwege.",
  einzeln:
    "Typischer Fall: viele Bausteine, kein System. Wir prüfen, was zusammenpasst und was nicht.",
  optimieren:
    "Dann geht es um Feinschliff: Kosten, Steuern und Struktur im Zusammenspiel.",
};

type Rec = { slug: TopicSlug; why: string };

function recommend(status: Status, goal: Goal): Rec[] {
  const owner = status === "unternehmer";
  switch (goal) {
    case "vermoegen":
      return [
        {
          slug: "investments",
          why: "Eine Strategie mit breiter Streuung, klarer Risikoverteilung und transparenten Kosten, passend zu Ihrem Zeithorizont.",
        },
        owner
          ? { slug: "holding", why: "Gewinne aus der GmbH effizient anlegen, statt sie privat zu versteuern." }
          : { slug: "absicherung", why: "Damit ein Rückschlag nicht den ganzen Plan kippt." },
        owner
          ? { slug: "absicherung", why: "Vermögen und Betrieb gegen die großen Risiken schützen." }
          : { slug: "immobilien", why: "Sachwerte als zweites Standbein neben dem Depot." },
      ];
    case "immobilien":
      return [
        {
          slug: "immobilien",
          why: "Zugang zu geprüften Objekten, auch solchen, die nie auf Portalen erscheinen, in Regionen mit stabiler Mietnachfrage.",
        },
        { slug: "finanzierung", why: "Die Finanzierung entscheidet über die Rendite: Konditionen mehrerer Banken im Vergleich." },
        owner
          ? { slug: "holding", why: "Prüfen, ob die Immobilie besser in der Holding liegt." }
          : { slug: "absicherung", why: "Die Finanzierung absichern, falls Einkommen wegfällt." },
      ];
    case "finanzierung":
      return [
        {
          slug: "finanzierung",
          why: "Experten aus unserem Partnernetzwerk vergleichen die Konditionen mehrerer Banken. Ein Ansprechpartner, ein koordinierter Prozess.",
        },
        { slug: "immobilien", why: "Passende Objekte mit geprüften Kennzahlen, auch off-market." },
        { slug: "absicherung", why: "Die Finanzierung absichern, falls Einkommen wegfällt." },
      ];
    case "steuern":
      if (status === "angestellt")
        return [
          {
            slug: "immobilien",
            why: "Vermietete Immobilien können die Steuerlast spürbar senken. Wir zeigen, ob und wie das in Ihrer Situation aufgeht.",
          },
          { slug: "finanzierung", why: "Die richtige Finanzierung macht den Steuereffekt erst nutzbar." },
          { slug: "investments", why: "Steuerlich sinnvoll investieren, statt Geld auf dem Konto zu parken." },
        ];
      return [
        {
          slug: "holding",
          why: owner
            ? "Gewinne, Vermögen und Unternehmen sinnvoll verbinden. Wir prüfen, ob und wie sich eine Holding für Sie lohnt."
            : "Ab einer gewissen Gewinnhöhe kann eine GmbH mit Holding sinnvoll sein. Wir prüfen, ab wann es sich für Sie rechnet.",
        },
        { slug: "immobilien", why: "Immobilien als steuerlich wirksamer Baustein im Gesamtplan." },
        owner
          ? { slug: "bav-bkv", why: "Steuerfreie Spielräume für Ihr Team nutzen." }
          : { slug: "investments", why: "Liquidität strukturiert anlegen statt liegen lassen." },
      ];
    case "absichern":
      return [
        {
          slug: "absicherung",
          why: owner
            ? "Einkommen, Familie, Vermögen und Betrieb gegen die großen Risiken absichern, mit freier Auswahl aus dem Markt."
            : "Einkommen, Familie und Vermögen gegen die großen Risiken absichern, mit freier Auswahl aus dem Markt.",
        },
        { slug: "investments", why: "Vorsorge und Vermögensaufbau gemeinsam planen." },
        owner
          ? { slug: "bav-bkv", why: "Absicherung für Ihr Team als Benefit, steuerlich optimiert." }
          : { slug: "immobilien", why: "Sachwerte als stabiler Baustein der Vorsorge." },
      ];
    case "mitarbeitende":
      return [
        {
          slug: "bav-bkv",
          why: "Betriebliche Altersvorsorge und Krankenversicherung als Benefit, der Fachkräfte gewinnt und bindet. Steuerlich optimiert, verwaltungsarm.",
        },
        { slug: "absicherung", why: "Betrieb und Schlüsselpersonen absichern." },
        { slug: "holding", why: "Die Unternehmensstruktur gleich mitdenken." },
      ];
  }
}

export const FOCUS_EVENT = "lc:focus";
export type FocusDetail = { label: string } | null;

export function Wegweiser() {
  const [status, setStatus] = useState<Status | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [stage, setStage] = useState<Stage | null>(null);

  const answered = [status, goal, stage].filter(Boolean).length;
  const recs = useMemo(
    () => (status && goal ? recommend(status, goal) : null),
    [status, goal],
  );
  const primary = recs ? topicBySlug(recs[0].slug) : null;

  const reset = () => {
    setStatus(null);
    setGoal(null);
    setStage(null);
    window.dispatchEvent(new CustomEvent<FocusDetail>(FOCUS_EVENT, { detail: null }));
  };

  const book = () => {
    if (primary)
      window.dispatchEvent(
        new CustomEvent<FocusDetail>(FOCUS_EVENT, { detail: { label: primary.label } }),
      );
  };

  return (
    <div className="grid gap-3 rounded-[28px] border border-sand bg-white p-3 shadow-[0_30px_70px_-40px_rgba(13,26,45,0.35)] min-[1000px]:grid-cols-[1.15fr_1fr]">
      {/* Fragen */}
      <div className="p-[clamp(16px,2.6vw,36px)]">
        <div className="flex items-center justify-between gap-4">
          <p className="mono text-subtle">
            <span className="tnum">{answered}</span> von 3 beantwortet
          </p>
          <div aria-hidden className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1 w-9 rounded-full transition-colors duration-300 ${
                  i < answered ? "bg-navy" : "bg-ivory-deep"
                }`}
              />
            ))}
          </div>
        </div>

        <Question no="01" title="Ihre Situation">
          <div role="group" aria-label="Ihre Situation" className="grid gap-2 sm:grid-cols-3">
            {statusOptions.map((o) => (
              <Option
                key={o.key}
                selected={status === o.key}
                onClick={() => setStatus(o.key)}
                className="flex-col items-start py-3.5"
              >
                <span className="text-[15px] font-semibold">{o.label}</span>
                <span className={`text-[12.5px] ${status === o.key ? "text-white/70" : "text-subtle"}`}>
                  {o.sub}
                </span>
              </Option>
            ))}
          </div>
        </Question>

        <Question no="02" title="Ihr wichtigstes Ziel">
          <div role="group" aria-label="Ihr wichtigstes Ziel" className="grid gap-2 sm:grid-cols-2">
            {goalOptions.map((o) => (
              <Option key={o.key} selected={goal === o.key} onClick={() => setGoal(o.key)}>
                <span className="text-[15px] font-medium">{o.label}</span>
              </Option>
            ))}
          </div>
        </Question>

        <Question no="03" title="Wo stehen Sie heute?">
          <div role="group" aria-label="Wo stehen Sie heute?" className="flex flex-wrap gap-2">
            {stageOptions.map((o) => (
              <Option
                key={o.key}
                selected={stage === o.key}
                onClick={() => setStage(o.key)}
                className="rounded-full px-4 py-2.5"
              >
                <span className="text-[14px] font-medium">{o.label}</span>
              </Option>
            ))}
          </div>
        </Question>

        {primary && (
          <a
            href="#wegweiser-ergebnis"
            className="btn mt-8 w-full border border-navy/15 text-navy min-[1000px]:hidden"
          >
            Zur Empfehlung: {primary.label}
            <IconArrowRight className="h-4 w-4 rotate-90" />
          </a>
        )}
      </div>

      {/* Ergebnis */}
      <div
        id="wegweiser-ergebnis"
        aria-live="polite"
        className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[20px] bg-navy p-[clamp(22px,2.6vw,36px)] text-white"
      >
        <span
          aria-hidden
          className="bl-b -right-24 -bottom-8 w-[420px]"
          style={{ background: "var(--color-copper-light)", opacity: 0.12 }}
        />
        <div className="relative flex items-center justify-between gap-4">
          <p className="mono text-copper-light">Ihre Empfehlung</p>
          {answered > 0 && (
            <button
              type="button"
              onClick={reset}
              className="mono text-on-dark-subtle underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Neu starten
            </button>
          )}
        </div>

        {!recs || !primary ? (
          <div className="relative mt-6 flex flex-1 flex-col">
            <p className="max-w-[22rem] text-[clamp(22px,2vw,28px)] leading-tight font-medium tracking-[-0.02em]">
              {status
                ? "Und was ist Ihr wichtigstes Ziel?"
                : "Wählen Sie Ihre Situation und Ihr Ziel."}
            </p>
            <p className="mt-3 max-w-[24rem] text-[15px] leading-relaxed text-on-dark-body">
              Der Wegweiser zeigt Ihnen, welche Fachbereiche den größten Hebel
              haben. Ohne Anmeldung, es werden keine Daten gespeichert.
            </p>
            <ul className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 pt-8">
              {topics.map((t) => (
                <li key={t.slug} className="flex items-center gap-2.5 text-[14px] text-on-dark-subtle">
                  <span className={`h-1.5 w-1.5 rounded-full opacity-60 ${worlds[t.world].dot}`} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="relative mt-6 flex flex-1 flex-col">
            <span className={`mono flex items-center gap-2 ${worlds[primary.world].textOnDark}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${worlds[primary.world].dot}`} />
              Größter Hebel
            </span>
            <p className="mt-3 text-[clamp(30px,3vw,42px)] leading-none font-normal tracking-[-0.035em]">
              {primary.label}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-on-dark-body">{recs[0].why}</p>

            <p className="mono mt-7 text-on-dark-subtle">Ebenfalls relevant</p>
            <ul className="mt-2 divide-y divide-white/10 border-y border-white/10">
              {recs.slice(1).map((r) => {
                const t = topicBySlug(r.slug);
                return (
                  <li key={r.slug}>
                    <Link href={t.href} className="group flex items-start gap-3 py-3.5">
                      <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${worlds[t.world].dot}`} />
                      <span className="flex-1">
                        <span className="block text-[15px] font-medium">{t.label}</span>
                        <span className="mt-0.5 block text-[13.5px] leading-snug text-on-dark-body">
                          {r.why}
                        </span>
                      </span>
                      <IconArrowRight className="mt-1 h-4 w-4 shrink-0 text-on-dark-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {stage && (
              <p className="mt-5 border-l-2 border-copper pl-3 text-[14px] leading-relaxed text-on-dark">
                {stageNotes[stage]}
              </p>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
              <a href="#termin" onClick={book} className="btn btn-copper">
                <IconCalendar className="h-4 w-4" />
                Erstgespräch buchen
              </a>
              <Link
                href={primary.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white/85 hover:text-white"
              >
                Mehr zu {primary.label}
                <IconArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Question({
  no,
  title,
  children,
}: {
  no: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="mt-8 first-of-type:mt-7">
      <legend className="mono mb-3 flex items-center gap-2 text-navy">
        <span className="text-copper-dark">{no}</span> · {title}
      </legend>
      {children}
    </fieldset>
  );
}

function Option({
  selected,
  onClick,
  className = "",
  children,
}: {
  selected: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex gap-0.5 rounded-[14px] border px-4 py-3 text-left transition-colors duration-200 ${
        selected
          ? "border-navy bg-navy text-white"
          : "border-sand-deep bg-ivory/40 text-navy hover:border-navy/40 hover:bg-ivory"
      } ${className}`}
    >
      {children}
    </button>
  );
}
