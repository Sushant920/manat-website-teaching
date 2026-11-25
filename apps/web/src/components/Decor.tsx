/** Floating geometric SVG accents for light purple theme. */
export function DecorBlob({
  className = "",
  variant = "orb",
}: {
  className?: string;
  variant?: "orb" | "rings" | "grid" | "triangles" | "dots";
}) {
  if (variant === "rings") {
    return (
      <svg
        className={`pointer-events-none absolute ${className}`}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="100" r="78" stroke="#905CB5" strokeWidth="1.5" opacity="0.25" />
        <circle cx="100" cy="100" r="54" stroke="#905CB5" strokeWidth="1.5" opacity="0.35" />
        <circle cx="100" cy="100" r="28" stroke="#905CB5" strokeWidth="2" opacity="0.45" />
        <circle cx="100" cy="100" r="6" fill="#905CB5" opacity="0.5" />
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <svg
        className={`pointer-events-none absolute ${className}`}
        viewBox="0 0 180 180"
        fill="none"
        aria-hidden
      >
        <rect x="20" y="20" width="140" height="140" stroke="#905CB5" strokeWidth="1.2" opacity="0.2" />
        {[50, 80, 110, 140].map((n) => (
          <g key={n}>
            <line x1={n} y1="20" x2={n} y2="160" stroke="#905CB5" strokeWidth="1" opacity="0.18" />
            <line x1="20" y1={n} x2="160" y2={n} stroke="#905CB5" strokeWidth="1" opacity="0.18" />
          </g>
        ))}
        <rect x="50" y="50" width="30" height="30" fill="#905CB5" opacity="0.2" />
        <rect x="110" y="110" width="30" height="30" fill="#1A1520" opacity="0.12" />
      </svg>
    );
  }

  if (variant === "triangles") {
    return (
      <svg
        className={`pointer-events-none absolute ${className}`}
        viewBox="0 0 160 160"
        fill="none"
        aria-hidden
      >
        <path d="M80 18L142 140H18L80 18Z" stroke="#905CB5" strokeWidth="1.5" opacity="0.28" />
        <path d="M80 48L118 122H42L80 48Z" stroke="#905CB5" strokeWidth="1.2" opacity="0.35" />
        <circle cx="80" cy="96" r="5" fill="#905CB5" opacity="0.45" />
      </svg>
    );
  }

  if (variant === "dots") {
    return (
      <svg
        className={`pointer-events-none absolute ${className}`}
        viewBox="0 0 120 160"
        fill="#905CB5"
        aria-hidden
      >
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 3 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={20 + col * 40}
              cy={16 + row * 32}
              r="4"
              opacity={0.18 + (row + col) * 0.04}
            />
          )),
        )}
      </svg>
    );
  }

  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden
    >
      <circle cx="110" cy="110" r="90" fill="#905CB5" opacity="0.08" />
      <circle cx="110" cy="110" r="58" fill="#905CB5" opacity="0.1" />
      <rect
        x="72"
        y="72"
        width="76"
        height="76"
        rx="8"
        stroke="#905CB5"
        strokeWidth="1.5"
        opacity="0.35"
        transform="rotate(18 110 110)"
      />
    </svg>
  );
}
