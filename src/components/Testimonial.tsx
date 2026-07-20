import Image from "next/image";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Stars({ className = "text-fawn" }: { className?: string }) {
  return (
    <div aria-label="5 von 5 Sternen" className={`flex gap-1 ${className}`}>
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

/*
 * Tonvarianten: "default" (Akzent-Tint, flächenneutral wie bisher) und
 * "light" (weiße erhöhte Karte für dunkle Sektionen).
 */
const tones = {
  default: {
    card: "rounded-2xl border border-line bg-accent-tint",
    stars: "text-fawn",
    caption: "",
    role: "text-ink-soft",
  },
  light: {
    card: "theme-light rounded-3xl shadow-2xl shadow-black/25",
    stars: "text-fawn",
    caption: "border-t border-line pt-6",
    role: "text-ink-soft",
  },
} as const;

/**
 * Zitatkarte, flächenneutral: nutzt Token-Klassen und funktioniert dadurch
 * auf dunklen Sektionen wie in .theme-light. `featured` macht sie größer.
 */
export function Testimonial({
  quote,
  name,
  role,
  photo,
  featured = false,
  tone = "default",
  className = "",
}: {
  quote: string;
  name: string;
  role: string;
  photo?: string;
  featured?: boolean;
  tone?: keyof typeof tones;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <figure
      className={`flex flex-col p-8 ${featured ? "md:p-12" : "md:p-9"} ${t.card} ${className}`}
    >
      <Stars className={t.stars} />
      <blockquote
        className={`mt-5 flex-1 font-heading leading-relaxed font-medium text-balance ${
          featured ? "text-xl md:text-3xl" : "text-lg md:text-xl"
        }`}
      >
        „{quote}“
      </blockquote>
      <figcaption className={`mt-6 flex items-center gap-4 ${t.caption}`}>
        {photo ? (
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image src={photo} alt={name} fill sizes="44px" className="object-cover" />
          </span>
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-azure/25 font-heading font-bold text-azure-light [.theme-light_&]:text-azure">
            {initials(name)}
          </span>
        )}
        <div className="text-sm">
          <p className="font-semibold">{name}</p>
          <p className={t.role}>{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
