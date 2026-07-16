export function CardGrid({
  cards,
  columns = 3,
}: {
  cards: { title: string; text: React.ReactNode }[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";
  return (
    <div className={`mt-12 grid gap-6 ${cols}`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-line bg-paper p-7"
        >
          <h3 className="text-lg leading-snug font-bold">{card.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}
