import Image from "next/image";
import { site } from "@/lib/site";
import { FaqList, type FaqEntry } from "../FaqList";
import { Reveal } from "../Reveal";
import { IconArrowRight, IconMail } from "../icons";

/** FAQ-Sektion: links (sticky) Kopf + Kontaktkarte, rechts die Fragen. */
export function FaqBlock({
  id = "faq",
  eyebrow = "Häufige Fragen",
  title,
  lead = "Die wichtigsten Antworten vorab. Alles Weitere klären wir gern persönlich.",
  items,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  items: FaqEntry[];
  className?: string;
}) {
  return (
    <section id={id} className={`lc-section ${className}`}>
      <div className="lc-wrap grid items-start gap-12 min-[1000px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] min-[1000px]:gap-20">
        <Reveal className="min-w-0 min-[1000px]:sticky min-[1000px]:top-[calc(var(--header-h)+40px)]">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-2 mt-6">{title}</h2>
          <p className="lead mt-6 max-w-[28rem]">{lead}</p>
          <a href="#termin" className="btn btn-outline mt-8">
            Frage im Gespräch klären
            <IconArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-10 flex max-w-[26rem] items-start gap-4 rounded-[20px] border border-sand bg-white p-5">
            <Image
              src="/images/cedrik-avatar.webp"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-navy">Ihre Frage ist nicht dabei?</p>
              <p className="mt-1 text-[14px] leading-relaxed text-body">
                Schreiben Sie uns, wir antworten innerhalb von 24 Stunden.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold break-all text-navy hover:text-acc-dark"
              >
                <IconMail className="h-4 w-4 shrink-0" />
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="min-w-0">
          <FaqList items={items} />
        </Reveal>
      </div>
    </section>
  );
}
