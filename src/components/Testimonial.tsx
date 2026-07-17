function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function Stars() {
  return (
    <div aria-label="5 von 5 Sternen" className="flex gap-1 text-fawn">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
          <path
            d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8L10 1.5z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
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
    <figure className="mt-10 flex flex-col rounded-2xl border border-line bg-gradient-to-b from-cobalt to-cobalt/60 p-8 md:p-9">
      <Stars />
      <blockquote className="mt-5 flex-1 font-heading text-lg leading-relaxed font-medium text-balance md:text-xl">
        „{quote}“
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-azure/30 font-heading font-bold text-azure-light">
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
