import Link from "next/link";
import { Icon } from "./Icon";

const copy = {
  guides: {
    eyebrow: "Printable music card",
    title: "Ear protection for live music — one page",
    body: "Why a set is loud enough to matter, hi-fi filters versus foam, and where a counter card belongs: concerts, loud bars, rehearsal rooms, and demo rooms. Educational only — no products or prices.",
  },
  concerts: {
    eyebrow: "Printable music card",
    title: "One page for the venue counter",
    body: "The same facts as this guide, tightened for a bulletin board: the 85 dBA line, why a set outlasts it, and when a flat filter beats foam. No sales pitch.",
  },
  musicians: {
    eyebrow: "Printable music card",
    title: "One page for the rehearsal room",
    body: "Audience and stage on a single sheet: the player is closer to the source, and foam is the quiet backup, not the mix tool. Educational only — no products or prices.",
  },
  hub: {
    eyebrow: "Printable music card",
    title: "A leave-behind for music spots",
    body: "Concerts, festivals, loud bars, rehearsal rooms, and music-store demo rooms. One US Letter card. No products, no prices, no checkout.",
  },
};

export default function MusicCardCallout({ variant = "guides" }) {
  const text = copy[variant] ?? copy.guides;
  const banner = variant === "guides" || variant === "hub";

  return (
    <aside
      className={
        banner
          ? "rounded-2xl border border-brand-orange/25 bg-brand-orangelight/50 p-6 md:p-7"
          : "mt-8 rounded-xl border border-brand-orange/25 bg-brand-orangelight/50 p-5 md:p-6"
      }
    >
      <div className={`flex flex-col gap-4 ${banner ? "sm:flex-row sm:items-center" : ""}`}>
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white"
          aria-hidden="true"
        >
          <Icon name="music" className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="eyebrow !text-brand-orange">{text.eyebrow}</p>
          <p className="mt-1.5 font-display text-lg font-bold text-brand-ink">
            {text.title}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/80">
            {text.body}
          </p>
        </div>
        <Link
          href="/music-ear-card"
          className={`inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-bold text-brand-orange hover:underline ${
            banner ? "sm:self-center" : ""
          }`}
        >
          Open the music card
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
