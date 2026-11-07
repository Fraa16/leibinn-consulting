import Image from "next/image";
import Link from "next/link";
import { topicBySlug, worlds, type TopicSlug } from "@/lib/site";
import { IconArrowUpRight, IconCheck } from "../icons";
import { Reveal } from "../Reveal";

/**
 * Leistungs-Bento auf dunklem Panel. Jede Karte trägt die Farbe ihrer
 * „Welt“ und eine kleine Interface-Skizze, die zeigt, was dort passiert.
 * Alle Darstellungen sind beispielhaft, ohne konkrete Zahlenzusagen.
 */
export function LeistungenBento() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      <TopicCard slug="investments" className="sm:col-span-2 lg:col-span-4" wide>
        <MiniGrowth />
      </TopicCard>
      <TopicCard slug="immobilien" className="lg:col-span-2">
        <MiniObjektCheck />
      </TopicCard>
      <TopicCard slug="holding" className="lg:col-span-2">
        <MiniStructure />
      </TopicCard>
      <TopicCard slug="finanzierung" className="lg:col-span-2">
        <MiniBanks />
      </TopicCard>
      <TopicCard slug="bav-bkv" className="lg:col-span-2">
        <MiniBenefits />
      </TopicCard>
      <TopicCard slug="absicherung" className="lg:col-span-3">
        <MiniCoverage />
      </TopicCard>
      <Reveal className="lg:col-span-3">
        <Link
          href="/leistungen"
          className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] bg-navy-850 p-[clamp(22px,2.4vw,32px)]"
        >
          <Image
            src="/images/cedrik-buero.webp"
            alt="Cedrik Leibinn im Gespräch mit einem Mandanten"
            fill
            sizes="(min-width: 1100px) 40vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-[60%_40%] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,26,45,0.95)_0%,rgba(13,26,45,0.55)_45%,rgba(13,26,45,0.1)_100%)]"
          />
          <span className="relative">
            <span className="mono text-copper-light">Ihr Vorteil</span>
            <span className="mt-3 block text-[clamp(22px,2vw,28px)] leading-tight font-medium tracking-[-0.02em] text-balance text-white">
              Alles greift ineinander. Ein Ansprechpartner hält es zusammen.
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-white">
              Alle Leistungen im Überblick
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </span>
        </Link>
      </Reveal>
    </div>
  );
}

function TopicCard({
  slug,
  className = "",
  wide = false,
  children,
}: {
  slug: TopicSlug;
  className?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  const t = topicBySlug(slug);
  const w = worlds[t.world];
  return (
    <Reveal className={className}>
      <Link
        href={t.href}
        className={`group relative flex h-full flex-col gap-7 rounded-[24px] border border-white/8 bg-navy-850 p-[clamp(22px,2.4vw,32px)] transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-navy-800 ${
          wide ? "lg:grid lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-10" : ""
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <span className={`mono flex items-center gap-2 ${w.textOnDark}`}>
              <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${w.dot}`} />
              {w.label}
            </span>
            <span
              className={`icon-btn h-10 w-10 border border-white/14 text-white group-hover:border-copper group-hover:bg-copper group-hover:text-navy-950 ${
                wide
                  ? "lg:absolute lg:top-[clamp(22px,2.4vw,32px)] lg:right-[clamp(22px,2.4vw,32px)]"
                  : ""
              }`}
            >
              <IconArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <h3 className="mt-6 text-[clamp(22px,2vw,26px)] leading-tight font-medium tracking-[-0.02em] text-white">
            {t.label}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-on-dark-body">
            {t.teaser}
          </p>
        </div>
        <div aria-hidden className={`mt-auto ${wide ? "lg:pt-16" : ""}`}>
          {children}
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- Mini-Interfaces ---------- */

export function MiniFrame({
  title,
  chip,
  children,
  note = "Beispielhafte Darstellung",
}: {
  title: string;
  chip?: React.ReactNode;
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="h-full rounded-2xl border border-white/6 bg-navy-950/60 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[13px] font-medium text-on-dark">{title}</span>
        {chip}
      </div>
      <div className="mt-4">{children}</div>
      {note && <p className="mono mt-4 text-[9.5px] text-on-dark-subtle">{note}</p>}
    </div>
  );
}

function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span className={`mono rounded-full px-2.5 py-1 text-[9.5px] ${className}`}>
      {children}
    </span>
  );
}

export function MiniGrowth() {
  return (
    <MiniFrame
      title="Vermögensentwicklung"
      chip={<Chip className="bg-petrol/25 text-petrol-light">Modellhaft</Chip>}
      note="Beispielhafte Darstellung, keine Garantie"
    >
      <div className="mb-3 flex gap-5 text-[12px] text-on-dark-body">
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-4 rounded bg-petrol-light" /> Mit Strategie
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 border-t border-dashed border-on-dark-subtle" />{" "}
          Konto
        </span>
      </div>
      <svg viewBox="0 0 320 120" className="h-auto w-full">
        <defs>
          <linearGradient id="mg-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#86BDBF" stopOpacity="0.32" />
            <stop offset="1" stopColor="#86BDBF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
        ))}
        <path
          d="M0 108 C 70 104, 130 96, 190 78 S 280 30, 320 10 L 320 120 L 0 120 Z"
          fill="url(#mg-area)"
        />
        <path
          d="M0 108 C 70 104, 130 96, 190 78 S 280 30, 320 10"
          fill="none"
          stroke="#86BDBF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M0 108 L 320 80"
          fill="none"
          stroke="#7F8A99"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <circle cx="320" cy="10" r="4" fill="#86BDBF" />
      </svg>
      <div className="mono mt-2 flex justify-between text-[9.5px] text-on-dark-subtle">
        <span>Heute</span>
        <span>10 Jahre</span>
        <span>20 Jahre</span>
      </div>
    </MiniFrame>
  );
}

export function MiniObjektCheck() {
  const rows: [string, number, boolean][] = [
    ["Lage", 92, false],
    ["Mietpotenzial", 84, false],
    ["Wirtschaftlichkeit", 90, true],
  ];
  return (
    <MiniFrame
      title="Objekt-Check"
      chip={<Chip className="bg-copper text-navy-950">Geprüft</Chip>}
    >
      <div className="space-y-3">
        {rows.map(([label, v, accent]) => (
          <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5">
            <span className="text-[12px] text-on-dark-body">{label}</span>
            <span className="mono text-[10px] text-on-dark tnum">
              {(v / 10).toFixed(1).replace(".", ",")}
            </span>
            <span className="col-span-2 h-1 rounded-full bg-white/8">
              <span
                className={`block h-full rounded-full ${accent ? "bg-copper" : "bg-white/70"}`}
                style={{ width: `${v}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    </MiniFrame>
  );
}

export function MiniStructure() {
  const box =
    "rounded-lg border px-2 py-2 text-center text-[11px] leading-tight font-medium";
  return (
    <MiniFrame title="Ihre Struktur" note="Schematische Darstellung">
      <div className="flex flex-col items-center">
        <span className="mono rounded-full bg-white/8 px-2.5 py-1 text-[9.5px] text-on-dark-body">
          Sie
        </span>
        <span className="h-3 w-px bg-white/20" />
        <span className={`${box} w-[70%] border-indigo-light/60 bg-indigo/25 text-white`}>
          Holding GmbH
        </span>
        <span className="h-3 w-px bg-white/20" />
        <span className="h-px w-1/2 bg-white/20" />
        <div className="grid w-full grid-cols-2 gap-2">
          {["Operative GmbH", "Immobilien GmbH"].map((l) => (
            <div key={l} className="flex flex-col items-center">
              <span className="h-3 w-px bg-white/20" />
              <span className={`${box} w-full border-white/12 text-on-dark`}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </MiniFrame>
  );
}

export function MiniBanks() {
  const rows: [string, number, boolean][] = [
    ["Partnerbank A", 68, false],
    ["Partnerbank B", 92, true],
    ["Partnerbank C", 54, false],
  ];
  return (
    <MiniFrame title="Konditionen im Vergleich">
      <div className="space-y-2.5">
        {rows.map(([label, v, best]) => (
          <div
            key={label}
            className={`rounded-lg px-3 py-2 ${best ? "bg-copper/15 ring-1 ring-copper/50" : "bg-white/4"}`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[12px] ${best ? "text-white" : "text-on-dark-body"}`}>
                {label}
              </span>
              {best && (
                <span className="mono text-[9.5px] text-copper-light">Bestes Angebot</span>
              )}
            </div>
            <span className="mt-1.5 block h-1 rounded-full bg-white/8">
              <span
                className={`block h-full rounded-full ${best ? "bg-copper" : "bg-white/40"}`}
                style={{ width: `${v}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    </MiniFrame>
  );
}

export function MiniBenefits() {
  return (
    <MiniFrame title="Benefit-Paket" note="Schematische Darstellung">
      <div className="space-y-2">
        {["Altersvorsorge (bAV)", "Krankenversicherung (bKV)"].map((l) => (
          <div
            key={l}
            className="flex items-center justify-between rounded-lg bg-white/4 px-3 py-2.5"
          >
            <span className="text-[12px] text-on-dark">{l}</span>
            <span className="flex h-[18px] w-8 items-center justify-end rounded-full bg-indigo-light/90 p-0.5">
              <span className="h-3.5 w-3.5 rounded-full bg-navy-950" />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex">
          {["AK", "MS", "JT", "LB", "+8"].map((i, n) => (
            <span
              key={i}
              className={`mono flex h-7 w-7 items-center justify-center rounded-full border-2 border-navy-950 text-[8.5px] ${
                n === 4 ? "bg-indigo-light text-navy-950" : "bg-navy-800 text-on-dark"
              } ${n ? "-ml-2" : ""}`}
            >
              {i}
            </span>
          ))}
        </div>
        <span className="text-[12px] text-on-dark-body">Team abgesichert</span>
      </div>
    </MiniFrame>
  );
}

export function MiniCoverage() {
  const rows: [string, boolean][] = [
    ["Einkommen", true],
    ["Familie", true],
    ["Immobilien", true],
    ["Betrieb", false],
  ];
  return (
    <MiniFrame
      title="Absicherungs-Check"
      chip={<Chip className="bg-petrol/25 text-petrol-light">3 / 4 geprüft</Chip>}
    >
      <div className="grid grid-cols-2 gap-2">
        {rows.map(([l, ok]) => (
          <div
            key={l}
            className="flex items-center gap-2.5 rounded-lg bg-white/4 px-3 py-2.5"
          >
            <span
              className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                ok ? "bg-petrol-light text-navy-950" : "border border-white/25"
              }`}
            >
              {ok && <IconCheck className="h-3 w-3" />}
            </span>
            <span className={`text-[12px] ${ok ? "text-on-dark" : "text-on-dark-subtle"}`}>
              {l}
            </span>
          </div>
        ))}
      </div>
    </MiniFrame>
  );
}
