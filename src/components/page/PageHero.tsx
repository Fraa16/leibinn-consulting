import Image from "next/image";
import Link from "next/link";
import { BrandLine } from "../Brand";
import { Reveal } from "../Reveal";
import { IconCalendar } from "../icons";

export type Crumb = { label: string; href?: string };
export type Fact = { value: string; label: string };

/**
 * Hero der Unterseiten: dunkles Inset-Panel, links Botschaft und CTA,
 * rechts Foto mit schwebender Interface-Karte, unten eine Faktenleiste.
 * Akzentfarben kommen aus der Seiten-Klasse (.acc-petrol / .acc-indigo).
 */
export function PageHero({
  id,
  extra,
  crumbs,
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  micro,
  image,
  floating,
  aside,
  facts,
}: {
  id?: string;
  /** Zusatzinhalt unter dem Lead (z. B. Kontaktwege) */
  extra?: React.ReactNode;
  crumbs: Crumb[];
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  lead: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  micro?: string;
  image?: { src: string; alt: string; pos?: string };
  /** Interface-Karte, die über dem Foto schwebt */
  floating?: React.ReactNode;
  /** Ersetzt die Bildspalte komplett (z. B. Buchungskarte) */
  aside?: React.ReactNode;
  facts?: Fact[];
}) {
  return (
    <section id={id} className="lc-panel !py-0">
      <BrandLine
        shape="a"
        color="var(--acc-light)"
        opacity={0.09}
        className="-bottom-[10%] -left-[12%] w-[min(980px,85vw)]"
      />
      <div className="lc-wrap relative pt-[calc(var(--header-h)+clamp(28px,4vw,56px))] pb-[clamp(40px,5vw,72px)]">
        <Reveal>
          <nav aria-label="Brotkrumen">
            <ol className="mono flex flex-wrap items-center gap-2 text-on-dark-subtle">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-on-dark">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div
          className={`mt-[clamp(36px,5vw,64px)] grid items-center gap-x-[clamp(40px,6vw,96px)] gap-y-14 ${
            aside || image ? "min-[1000px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" : ""
          }`}
        >
          <div className="flex flex-col items-start">
            <Reveal>
              <div className="eyebrow">{eyebrow}</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-hero mt-7">{title}</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead mt-7 max-w-[36em]">{lead}</p>
            </Reveal>
            {extra && <Reveal delay={240} className="w-full">{extra}</Reveal>}
            {(primary || secondary) && (
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  {primary && (
                    <a href={primary.href} className="btn btn-lg btn-copper">
                      <IconCalendar className="h-[18px] w-[18px]" />
                      {primary.label}
                    </a>
                  )}
                  {secondary && (
                    <a href={secondary.href} className="btn btn-lg btn-outline-dark">
                      {secondary.label}
                    </a>
                  )}
                </div>
                {micro && (
                  <p className="mt-4 max-w-[34em] text-[14px] text-on-dark-subtle">{micro}</p>
                )}
              </Reveal>
            )}
          </div>

          {aside ? (
            <Reveal delay={200}>{aside}</Reveal>
          ) : image ? (
            <Reveal delay={200} className="relative pb-10 min-[1000px]:pb-0 min-[1000px]:pl-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-navy-850 min-[1000px]:aspect-[4/5] min-[1000px]:max-h-[620px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1000px) 42vw, 100vw"
                  className={`object-cover ${image.pos ?? "object-center"}`}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,17,31,0.55)_0%,rgba(8,17,31,0)_45%)]"
                />
              </div>
              {floating && (
                <div className="absolute -bottom-2 left-4 w-[min(340px,calc(100%-32px))] rounded-[22px] border border-white/10 bg-navy-900/85 p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl min-[1000px]:bottom-10 min-[1000px]:left-0">
                  {floating}
                </div>
              )}
            </Reveal>
          ) : null}
        </div>

        {facts && facts.length > 0 && (
          <dl
            className={`mt-[clamp(48px,6vw,80px)] grid border-t border-white/12 sm:grid-cols-3 ${
              facts.length === 4 ? "md:grid-cols-4" : ""
            }`}
          >
            {facts.map((f, n) => (
              <div
                key={f.label}
                className={`py-6 sm:py-8 sm:pr-6 ${n ? "border-t border-white/12 sm:border-t-0" : ""}`}
              >
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block text-[clamp(26px,2.6vw,36px)] leading-none font-light tracking-[-0.035em] tnum">
                    {f.value}
                  </span>
                  <span className="mono mt-3 block text-on-dark-subtle">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
