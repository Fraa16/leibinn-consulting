"use client";

import { useMemo, useState } from "react";

/**
 * Vereinfachte Modellrechnung: Was kosten wenige Zehntelprozent Zins über
 * die Zinsbindung? Zwei Annuitätendarlehen mit gleicher Anfangstilgung,
 * monatliche Raten, ohne Nebenkosten. Keine Finanzierungsberatung.
 */
const BASE_RATE = 0.037;
const TILGUNG = 0.02;

function interestOver(loan: number, rate: number, years: number) {
  const annuity = (loan * (rate + TILGUNG)) / 12;
  let balance = loan;
  let interest = 0;
  for (let m = 0; m < years * 12 && balance > 0; m++) {
    const i = (balance * rate) / 12;
    interest += i;
    balance -= annuity - i;
  }
  return { interest, annuity, rest: Math.max(0, balance) };
}

const eur = (v: number) =>
  `${(Math.round(v / 10) * 10).toLocaleString("de-DE")} €`;
const pct = (v: number) =>
  `${(v * 100).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} %`;

export function ZinsRechner() {
  const [loan, setLoan] = useState(400_000);
  const [diff, setDiff] = useState(0.3);
  const [years, setYears] = useState(10);

  const r = useMemo(() => {
    const a = interestOver(loan, BASE_RATE, years);
    const b = interestOver(loan, BASE_RATE + diff / 100, years);
    return { a, b, extra: b.interest - a.interest };
  }, [loan, diff, years]);

  return (
    <div className="grid gap-3 rounded-[28px] border border-sand bg-white p-3 shadow-[0_30px_70px_-40px_rgba(13,26,45,0.35)] min-[1000px]:grid-cols-[1fr_1.05fr]">
      <div className="min-w-0 p-[clamp(16px,2.6vw,36px)]">
        <p className="mono text-subtle">Ihre Eckdaten</p>
        <Slider
          label="Darlehenssumme"
          value={eur(loan)}
          min={100_000}
          max={1_000_000}
          step={10_000}
          raw={loan}
          onChange={setLoan}
        />
        <Slider
          label="Zinsunterschied zwischen zwei Angeboten"
          value={`${diff.toLocaleString("de-DE", { minimumFractionDigits: 2 })} Prozentpunkte`}
          min={0.1}
          max={1}
          step={0.05}
          raw={diff}
          onChange={setDiff}
        />
        <Slider
          label="Zinsbindung"
          value={`${years} Jahre`}
          min={5}
          max={20}
          step={1}
          raw={years}
          onChange={setYears}
        />
        <dl className="mt-8 divide-y divide-ivory-deep border-y border-ivory-deep text-[14.5px]">
          {[
            ["Günstigeres Angebot", pct(BASE_RATE)],
            ["Teureres Angebot", pct(BASE_RATE + diff / 100)],
            ["Anfängliche Tilgung", pct(TILGUNG)],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-3">
              <dt className="text-body">{k}</dt>
              <dd className="font-semibold text-navy tnum">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        aria-live="polite"
        className="flex min-w-0 flex-col rounded-[20px] bg-navy p-[clamp(20px,2.6vw,36px)] text-white"
      >
        <p className="mono text-acc-light">Mehrkosten über {years} Jahre</p>
        <p className="mt-4 text-[clamp(40px,5.6vw,80px)] leading-none font-light tracking-[-0.05em] text-acc-light tnum">
          ≈ {eur(r.extra)}
        </p>
        <p className="mt-4 max-w-[26rem] text-[15px] leading-relaxed text-on-dark-body">
          So viel zusätzliche Zinsen zahlen Sie mit dem teureren Angebot,
          allein während der Zinsbindung.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-2">
          {[
            ["Rate günstiger", eur(r.a.annuity)],
            ["Rate teurer", eur(r.b.annuity)],
          ].map(([k, v]) => (
            <div key={k} className="rounded-[14px] bg-navy-850 p-4">
              <p className="mono text-[10px] text-on-dark-subtle">{k} / Monat</p>
              <p className="mt-2 text-[20px] font-medium tracking-[-0.02em] tnum">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-auto pt-8 text-[12.5px] leading-relaxed text-on-dark-subtle">
          Vereinfachte Modellrechnung: Annuitätendarlehen, monatliche Raten,
          gleiche Anfangstilgung, ohne Nebenkosten und Sondertilgungen.
          Tatsächliche Konditionen hängen von Bonität, Objekt und Marktlage ab.
          Keine Finanzierungsberatung.
        </p>
        <a href="#termin" className="btn btn-white mt-6 self-start">
          Im Erstgespräch prüfen
        </a>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (v: number) => void;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="mt-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <label htmlFor={id} className="text-[15px] text-body">
          {label}
        </label>
        <span className="shrink-0 text-[16px] font-semibold text-navy tnum">{value}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full cursor-pointer accent-[var(--acc-dark)]"
      />
    </div>
  );
}
