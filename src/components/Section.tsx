/** Grund-Layoutbaustein: vertikaler Rhythmus + max. Lesebreite. */
export function Section({
  children,
  tone = "default",
  wide = false,
}: {
  children: React.ReactNode;
  tone?: "default" | "warm";
  wide?: boolean;
}) {
  return (
    <section className={tone === "warm" ? "bg-paper-warm" : ""}>
      <div
        className={`mx-auto px-6 py-16 md:py-24 ${wide ? "max-w-6xl" : "max-w-3xl"}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  children,
  center = false,
}: {
  kicker?: string;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {kicker && (
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl leading-snug font-bold tracking-tight text-balance md:text-4xl">
        {children}
      </h2>
    </div>
  );
}
