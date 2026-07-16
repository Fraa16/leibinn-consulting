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
    <figure className="mt-12 rounded-xl bg-accent-tint p-8 md:p-10">
      <blockquote className="font-heading text-xl leading-relaxed font-medium text-balance md:text-2xl">
        „{quote}“
      </blockquote>
      <figcaption className="mt-5 text-sm text-ink-soft">
        <span className="font-semibold text-ink">{name}</span> · {role}
      </figcaption>
    </figure>
  );
}
