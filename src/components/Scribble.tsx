/** Handgezeichnete blaue Unterstreichung wie im Design-Screenshot. */
export function Scribble({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 300 24"
        preserveAspectRatio="none"
        className="absolute -bottom-3 left-0 h-4 w-full text-accent md:-bottom-4"
      >
        <path
          d="M4 14 C 80 8, 220 6, 296 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M20 19 C 110 14, 210 16, 284 13 S 150 20, 60 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
