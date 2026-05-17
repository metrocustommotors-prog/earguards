import Link from "next/link";
import { Icon } from "./Icon";

// Decorative gradient art per category — no external images, fast-loading.
function CardArt({ category }) {
  const palettes = {
    "Work & Job Site": ["#FFF1E6", "#F26A1B"],
    "Sleep & Rest": ["#EAF1FB", "#1559B5"],
    "Shooting & Range": ["#EAF1FB", "#0E3F87"],
    "Hearing Safety Guide": ["#F5F7FA", "#5A6573"],
    "Concerts & Music": ["#FFF1E6", "#F26A1B"],
    "Kids & Family": ["#EAF1FB", "#1559B5"],
    "Motorsports": ["#EAF1FB", "#0E3F87"],
    "Sensory Sensitivity": ["#FFF1E6", "#F26A1B"],
  };
  const [bg, accent] = palettes[category] || ["#F5F7FA", "#1559B5"];
  return (
    <div
      className="relative h-40 w-full overflow-hidden"
      style={{ background: bg }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="none" stroke={accent} strokeOpacity="0.35" strokeWidth="2">
          <path d="M-20 90 Q60 40 140 90 T300 90 T460 90" />
          <path d="M-20 110 Q60 60 140 110 T300 110 T460 110" />
          <path d="M-20 70 Q60 20 140 70 T300 70 T460 70" />
        </g>
        <circle cx="330" cy="50" r="46" fill={accent} fillOpacity="0.12" />
        <circle cx="330" cy="50" r="28" fill={accent} fillOpacity="0.18" />
      </svg>
      <span
        className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-sm"
        style={{ background: accent }}
      >
        <Icon name="wave" className="h-5 w-5" />
      </span>
    </div>
  );
}

export default function ArticleCard({
  title,
  href,
  category,
  excerpt,
  readTime,
  compact = false,
}) {
  if (compact) {
    return (
      <Link
        href={href}
        className="group flex items-start gap-4 rounded-xl border border-brand-line bg-white p-4 transition-all hover:border-brand-blue/40 hover:shadow-card"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-bluelight text-brand-blue">
          <Icon name="wave" className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wide text-brand-orange">
            {category}
          </p>
          <h3 className="mt-0.5 font-display text-sm font-bold leading-snug text-brand-ink group-hover:text-brand-blue">
            {title}
          </h3>
          {readTime && (
            <p className="mt-1 text-xs text-brand-slate">{readTime}</p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardhover"
    >
      <CardArt category={category} />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand-orange">
          {category}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-brand-ink group-hover:text-brand-blue">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">
            {excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-brand-line pt-3">
          {readTime && (
            <span className="flex items-center gap-1.5 text-xs text-brand-slate">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {readTime}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs font-display font-bold text-brand-blue">
            Read guide
            <Icon
              name="arrow"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
