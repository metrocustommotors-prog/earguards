import Link from "next/link";
import { noiseLevels } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdPlaceholder from "@/components/AdPlaceholder";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Noise Level Database — How Loud Is It? (Decibel Chart)",
  description:
    "A decibel reference chart of everyday sounds, from a whisper to a jet engine. See which noise levels are safe and which require hearing protection.",
  alternates: { canonical: "/noise-level-database" },
};

const riskStyles = {
  safe: {
    label: "Safe",
    bar: "bg-emerald-500",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
    row: "hover:bg-emerald-50/50",
  },
  caution: {
    label: "Caution",
    bar: "bg-amber-400",
    chip: "bg-amber-50 text-amber-700 border-amber-200",
    row: "hover:bg-amber-50/50",
  },
  danger: {
    label: "Danger",
    bar: "bg-brand-orange",
    chip: "bg-brand-orangelight text-brand-orange border-brand-orange/30",
    row: "hover:bg-brand-orangelight/40",
  },
  extreme: {
    label: "Extreme",
    bar: "bg-red-600",
    chip: "bg-red-50 text-red-700 border-red-200",
    row: "hover:bg-red-50/50",
  },
};

const legend = [
  {
    key: "safe",
    range: "Below 80 dB",
    text: "Safe for unlimited exposure. No protection needed.",
  },
  {
    key: "caution",
    range: "80–94 dB",
    text: "Risk builds with time. Limit exposure or protect your ears.",
  },
  {
    key: "danger",
    range: "95–129 dB",
    text: "Damage possible in minutes. Hearing protection strongly advised.",
  },
  {
    key: "extreme",
    range: "130 dB and up",
    text: "Immediate, permanent damage risk. Always wear protection.",
  },
];

export default function NoiseLevelDatabasePage() {
  const maxDb = 150;

  return (
    <div>
      <PageHero
        eyebrow="Reference Tool"
        title="Noise level database"
        description="A quick reference for how loud everyday sounds really are — measured in decibels (dB) — and the point at which they start to put your hearing at risk."
        icon="chart"
      />

      <div className="container-site py-10 md:py-14">
        {/* Legend */}
        <section>
          <SectionHeading
            eyebrow="How to read this"
            title="The four risk zones"
            description="Decibels are logarithmic — every 10 dB increase is roughly twice as loud and far more damaging."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {legend.map((l) => {
              const s = riskStyles[l.key];
              return (
                <div
                  key={l.key}
                  className="rounded-xl border border-brand-line bg-white p-5 shadow-card"
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-3 w-3 rounded-full ${s.bar}`} />
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-brand-ink">
                      {s.label}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-extrabold text-brand-ink">
                    {l.range}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-slate">
                    {l.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-10">
          <AffiliateDisclosure variant="bar" />
        </div>

        {/* Database table */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-brand-ink">
            Common sound levels
          </h2>
          <p className="mt-1.5 text-brand-slate">
            Approximate decibel levels measured at a typical listening
            distance.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-brand-line">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="bg-brand-ink text-white">
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                      Sound source
                    </th>
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                      Level
                    </th>
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                      Relative loudness
                    </th>
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                      Risk
                    </th>
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {noiseLevels.map((n) => {
                    const s = riskStyles[n.risk];
                    return (
                      <tr
                        key={n.source}
                        className={`bg-white align-middle transition-colors ${s.row}`}
                      >
                        <td className="px-4 py-3.5 font-display text-sm font-bold text-brand-ink">
                          {n.source}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5">
                          <span className="font-display text-base font-extrabold text-brand-ink">
                            {n.db}
                          </span>
                          <span className="ml-0.5 text-xs text-brand-slate">
                            dB
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="h-2.5 w-full min-w-[120px] overflow-hidden rounded-full bg-brand-mist">
                            <div
                              className={`h-full rounded-full ${s.bar}`}
                              style={{
                                width: `${Math.round((n.db / maxDb) * 100)}%`,
                              }}
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3.5">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-bold ${s.chip}`}
                          >
                            {s.label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-sm text-brand-slate">
                          {n.note}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-brand-slate">
            Levels are approximate and vary with distance, equipment, and
            environment. Use them as a guide, not a precise measurement.
          </p>
        </section>

        <div className="mt-10">
          <AdPlaceholder format="leaderboard" />
        </div>

        {/* Takeaway */}
        <section className="mt-10 rounded-2xl border border-brand-blue/20 bg-brand-bluelight/60 p-6 md:p-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-white">
              <Icon name="alert" className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl font-bold text-brand-ink">
              The 85-decibel rule
            </h2>
          </div>
          <p className="mt-4 leading-relaxed text-brand-ink/90">
            As a simple rule of thumb, any sustained sound at or above 85 dB
            can damage your hearing over time. If you have to raise your voice
            to be heard by someone an arm&apos;s length away, the environment
            is likely loud enough to warrant protection. Learn more in our{" "}
            <Link
              href="/blog/how-many-decibels-can-damage-hearing"
              className="font-bold text-brand-blue hover:underline"
            >
              guide to damaging decibel levels
            </Link>
            .
          </p>
        </section>

        <div className="mt-12">
          <NewsletterSignup variant="panel" />
        </div>
      </div>
    </div>
  );
}
