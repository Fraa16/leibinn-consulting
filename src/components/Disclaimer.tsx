/** Pflicht-Risiko-/Compliance-Hinweis am Seitenende (aus den Copy-Dokumenten). */
export function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <p className="text-sm leading-relaxed text-ink-faint">{children}</p>
      </div>
    </section>
  );
}
