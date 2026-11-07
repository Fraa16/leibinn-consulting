import Image from "next/image";
import { site } from "@/lib/site";
import { BrandLine } from "../Brand";
import { Reveal } from "../Reveal";
import { BookingCard } from "../home/BookingCard";

/**
 * Abschluss jeder Seite: dunkles Panel mit Botschaft links und der
 * Buchungskarte (Calendly per Zwei-Klick) rechts. Anker: #termin.
 */
export function BookingSection({
  eyebrow = "Kostenloses Erstgespräch",
  title,
  lead,
  image = {
    src: "/images/cedrik-window.webp",
    alt: "Cedrik Leibinn am Fenster seines Büros",
    pos: "object-[70%_30%]",
  },
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  image?: { src: string; alt: string; pos?: string };
}) {
  return (
    <section id="termin" className="lc-panel">
      <BrandLine
        shape="b"
        color="var(--acc-light)"
        opacity={0.14}
        className="-bottom-16 -left-36 w-[min(960px,100vw)]"
      />
      <div className="lc-wrap relative grid items-start gap-[clamp(48px,6vw,96px)] min-[1000px]:grid-cols-2">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-2 mt-6">{title}</h2>
          <p className="lead mt-6 max-w-[32rem]">{lead}</p>
          <div className="relative mt-9 aspect-[16/10] overflow-hidden rounded-[24px] bg-navy-850">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1000px) 45vw, 100vw"
              className={`object-cover ${image.pos ?? "object-center"}`}
            />
          </div>
          <ol className="mt-8 space-y-4">
            {[
              `Termin wählen: ${site.callMinutes} Minuten, kostenlos`,
              "Gespräch per Video oder Telefon",
              "Ihre ehrliche erste Einschätzung",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-3.5 text-[16px] text-on-dark">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-ivory text-[14px] font-semibold text-navy">
                  {i + 1}
                </span>
                {t}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={120}>
          <BookingCard />
        </Reveal>
      </div>
    </section>
  );
}
