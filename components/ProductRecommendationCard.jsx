import { Icon } from "./Icon";

// Affiliate product recommendation card. Buttons are placeholders —
// replace href="#" with real affiliate links when monetizing.
export default function ProductRecommendationCard({
  name,
  badge,
  blurb,
  specs = [],
  pros = [],
  cons = [],
  rank,
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card">
      {/* badge ribbon */}
      <div className="flex items-center justify-between border-b border-brand-line bg-brand-mist px-5 py-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1 text-xs font-display font-bold uppercase tracking-wide text-white">
          <Icon name="shield" className="h-3.5 w-3.5" />
          {badge}
        </span>
        {rank && (
          <span className="font-display text-sm font-bold text-brand-slate">
            Pick #{rank}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* visual placeholder block */}
          <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-brand-bluelight text-brand-blue sm:flex">
            <Icon name="ear" className="h-10 w-10" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold text-brand-ink">
              {name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-brand-slate">
              {blurb}
            </p>
          </div>
        </div>

        {/* specs */}
        {specs.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {specs.map((s, i) => (
              <span
                key={i}
                className="rounded-md bg-brand-mist px-2.5 py-1 text-xs font-semibold text-brand-ink/80"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* pros / cons */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-green-700">
              Pros
            </p>
            <ul className="mt-1.5 space-y-1">
              {pros.map((p, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs leading-snug">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                  <span className="text-brand-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-red-600">
              Cons
            </p>
            <ul className="mt-1.5 space-y-1">
              {cons.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs leading-snug">
                  <Icon name="x" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
                  <span className="text-brand-ink/80">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* affiliate CTAs (placeholders) */}
        <div className="mt-5 flex flex-wrap gap-2">
          <a href="#" rel="sponsored nofollow" className="btn-affiliate flex-1 min-w-[120px]">
            Check Price
          </a>
          <a
            href="#"
            rel="nofollow"
            className="btn inline-flex flex-1 min-w-[120px] items-center justify-center border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-ink hover:border-brand-blue hover:text-brand-blue"
          >
            Read Review
          </a>
        </div>
      </div>
    </div>
  );
}
