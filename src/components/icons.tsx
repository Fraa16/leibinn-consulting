/** Line-Icon-Set der Fachbereiche (Stroke 1.5, 24er-Raster). */

type IconProps = { className?: string };

function base(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };
}

/** Investments: steigender Chart */
export function IconChart({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M3 4v16h18" />
      <path d="M7 15l4-5 3 3 5-7" />
      <circle cx="19" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Immobilien: Gebäude */
export function IconBuilding({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 21V5.5L10 3v18" />
      <path d="M10 8l7 2.2V21" />
      <path d="M2 21h20" />
      <path d="M6.5 8h.01M6.5 11.5h.01M6.5 15h.01M13.5 13h.01M13.5 16.5h.01" />
    </svg>
  );
}

/** Holding: Struktur-Diagramm */
export function IconStructure({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v4M12 12H6v4M12 12h6v4" />
    </svg>
  );
}

/** Finanzierung: Prozent */
export function IconPercent({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M19 5L5 19" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  );
}

/** Steuern & Recht: Waage */
export function IconScale({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7h14" />
      <path d="M5 7l-2.5 6a2.9 2.9 0 0 0 5 0L5 7ZM19 7l-2.5 6a2.9 2.9 0 0 0 5 0L19 7Z" />
    </svg>
  );
}

/** Absicherung: Schild */
export function IconShield({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" />
      <path d="M9 11.5l2 2 4-4.5" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.5a3.5 3.5 0 0 1 0 5M18.5 20c0-2.4-1.1-4.4-2.9-5.4" />
    </svg>
  );
}

export function IconCertificate({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M7 8h7M7 11h4" />
      <circle cx="16.5" cy="12.5" r="2" />
      <path d="M15.5 14.5L14.5 20l2-1.2 2 1.2-1-5.5" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export const fachbereichIcons = {
  investments: IconChart,
  immobilien: IconBuilding,
  holding: IconStructure,
  finanzierung: IconPercent,
  "steuern-recht": IconScale,
  absicherung: IconShield,
} as const;

export type FachbereichSlug = keyof typeof fachbereichIcons;
