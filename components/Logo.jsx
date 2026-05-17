import Link from "next/link";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Ear Guards home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
          <path d="M9.5 11.5a2.5 2.5 0 0 1 5 0c0 1.5-1.5 1.8-1.5 3" />
        </svg>
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-brand-orange" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-brand-ink"
          }`}
        >
          Ear<span className="text-brand-orange">Guards</span>
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
            light ? "text-white/60" : "text-brand-slate"
          }`}
        >
          Hearing Protection
        </span>
      </span>
    </Link>
  );
}
