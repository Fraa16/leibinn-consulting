/** Editorial-Bausteine: nummerierte Sektionsköpfe, große Kennzahlen. */

export function EditorialHeader({
  no,
  kicker,
  title,
  intro,
  wide = false,
}: {
  no?: string;
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Titel über die volle Breite — für schmale Elternspalten. */
  wide?: boolean;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-end">
      <div className={wide ? "md:col-span-12" : "md:col-span-6"}>
      <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
        {no && <span className="font-heading text-fawn [.theme-light_&]:text-azure">{no}</span>}
        <span className="text-ink-faint">{kicker}</span>
        <span aria-hidden className="hidden h-px flex-1 self-center bg-line md:block" />
      </p>
        <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
      </div>
      {intro && (
        <div className="md:col-span-5 md:col-start-8">
          <p className="text-lg leading-relaxed text-ink-soft">{intro}</p>
        </div>
      )}
    </div>
  );
}

/** Große Serifenzahl als grafisches Element. */
export function PullStat({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-heading text-7xl leading-none font-bold tracking-tight text-fawn [.theme-light_&]:text-azure md:text-[7rem]">
        {value}
      </p>
      <p className="mt-3 max-w-[16rem] text-sm leading-snug text-ink-soft">
        {label}
      </p>
    </div>
  );
}
