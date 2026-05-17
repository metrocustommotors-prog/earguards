// Lightweight inline SVG icons — no external dependency, fast-loading.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name, className = "h-6 w-6" }) {
  const props = { ...base, viewBox: "0 0 24 24", className, "aria-hidden": true };
  switch (name) {
    case "hardhat":
      return (
        <svg {...props}>
          <path d="M3 18h18" />
          <path d="M5 18a7 7 0 0 1 14 0" />
          <path d="M10 5h4v6h-4z" />
          <path d="M12 5V3" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case "moon":
      return (
        <svg {...props}>
          <path d="M20 14a8 8 0 1 1-9.5-9.8 6.5 6.5 0 0 0 9.5 9.8z" />
        </svg>
      );
    case "music":
      return (
        <svg {...props}>
          <path d="M9 18V5l11-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="17" cy="16" r="3" />
        </svg>
      );
    case "child":
      return (
        <svg {...props}>
          <circle cx="12" cy="5" r="2.5" />
          <path d="M12 7.5v6M8 11h8M9 21l3-7 3 7" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M12 20s-7-4.4-9.2-9.2C1.4 7.6 3.4 4.5 6.7 4.5c2 0 3.7 1.1 4.6 2.8.9-1.7 2.6-2.8 4.6-2.8 3.3 0 5.3 3.1 3.9 6.3C19 15.6 12 20 12 20z" />
        </svg>
      );
    case "bike":
      return (
        <svg {...props}>
          <circle cx="6" cy="17" r="3.5" />
          <circle cx="18" cy="17" r="3.5" />
          <path d="M6 17l4-8h6l-3 8M10 9l-1.5-3H6.5M14 9h4" />
        </svg>
      );
    case "plane":
      return (
        <svg {...props}>
          <path d="M10 16l-5 2 1-4-3-3 5-1 3-6 3 6 5 1-3 3 1 4-5-2-3 4z" />
        </svg>
      );
    case "ear":
      return (
        <svg {...props}>
          <path d="M6 12a6 6 0 1 1 12 0c0 3-2 4-3.5 5S12 20 12 22" />
          <path d="M9.5 11a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-1.5 3.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "wave":
      return (
        <svg {...props}>
          <path d="M3 12h2M19 12h2" />
          <path d="M7 8c1.2 1 1.2 7 0 8M11 5c2 2.5 2 11 0 13.5M15 8c1.2 1 1.2 7 0 8" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
          <path d="M4 19a2 2 0 0 1 2-2h13" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7" />
        </svg>
      );
    case "doc":
      return (
        <svg {...props}>
          <path d="M7 3h8l4 4v14H7z" />
          <path d="M15 3v4h4M10 13h6M10 17h6" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M5 12l5 5L20 6" />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...props}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "alert":
      return (
        <svg {...props}>
          <path d="M12 3l9 16H3z" />
          <path d="M12 10v4M12 17v.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
