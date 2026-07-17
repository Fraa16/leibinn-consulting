function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="relative mt-10 rounded-2xl border border-line bg-paper p-8 md:p-10">
      <span
        aria-hidden
        className="font-heading absolute -top-5 left-8 text-7xl leading-none text-accent select-none"
      >
        &bdquo;
      </span>
      <blockquote className="font-heading pt-4 text-xl leading-relaxed font-medium text-balance md:text-2xl">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-tint font-heading font-bold text-accent">
          {initials(name)}
        </span>
        <div className="text-sm">
          <p className="font-semibold">{name}</p>
          <p className="text-ink-soft">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
