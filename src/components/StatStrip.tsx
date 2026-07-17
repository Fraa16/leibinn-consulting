/** Fakten-Leiste (GEO-Fakten-Anker als Vertrauenssignal). */
export function StatStrip({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="border-y border-line bg-twilight-deep/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-8 text-center md:py-10">
            <p className="font-heading text-3xl font-bold text-fawn md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-ink-soft">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
