// Display ad placeholder. Swap the inner markup for a real ad unit
// (e.g. Google AdSense / Mediavine / Raptive) when monetizing.
// format: "leaderboard" | "rectangle" | "inline" | "sidebar"

const sizes = {
  leaderboard: "min-h-[90px] sm:min-h-[120px]",
  rectangle: "min-h-[250px]",
  inline: "min-h-[120px]",
  sidebar: "min-h-[600px]",
};

export default function AdPlaceholder({ format = "leaderboard", label }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-brand-line bg-brand-mist text-center ${sizes[format]}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-slate/60">
        Advertisement
      </span>
      <span className="mt-1 text-xs text-brand-slate/50">
        {label || `${format} ad unit`}
      </span>
    </div>
  );
}
