import Link from "next/link";
import { oshaFacts } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdPlaceholder from "@/components/AdPlaceholder";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "OSHA Hearing Protection Standards — Workplace Noise Guide",
  description:
    "A plain-English overview of OSHA's hearing conservation rules: the 85 dBA action level, 90 dBA exposure limit, exchange rate, free protectors, and testing.",
  alternates: { canonical: "/osha-hearing-protection" },
};

const exposureTable = [
  ["90 dBA", "8 hours"],
  ["95 dBA", "4 hours"],
  ["100 dBA", "2 hours"],
  ["105 dBA", "1 hour"],
  ["110 dBA", "30 minutes"],
  ["115 dBA", "15 minutes"],
];

const employerDuties = [
  "Measure workplace noise where exposure may reach the action level.",
  "Provide a choice of hearing protectors at no cost to workers.",
  "Run baseline and annual audiometric (hearing) testing.",
  "Train exposed workers every year on noise and protection.",
  "Keep noise exposure and hearing test records.",
];

export default function OshaPage() {
  return (
    <div>
      <PageHero
        eyebrow="Workplace Compliance"
        title="OSHA hearing protection resources"
        description="If your job is loud, federal rules are on your side. Here is a clear breakdown of OSHA's hearing conservation requirements and what your employer must provide."
        icon="doc"
      />

      <div className="container-site py-10 md:py-14">
        {/* Intro callout */}
        <section className="rounded-2xl border border-brand-orange/25 bg-brand-orangelight/60 p-6 md:p-7">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white">
              <Icon name="alert" className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-brand-ink/90 md:text-base">
              This page summarizes OSHA&apos;s general industry noise standard
              (29 CFR 1910.95) in plain language for educational purposes. It
              is not legal advice. For official requirements, always consult{" "}
              <span className="font-bold">osha.gov</span> or a qualified safety
              professional.
            </p>
          </div>
        </section>

        {/* Key facts grid */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="The essentials"
            title="Six OSHA rules worth knowing"
            description="The core numbers and obligations behind workplace hearing conservation."
          />
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {oshaFacts.map((fact, i) => (
              <div
                key={fact.title}
                className="rounded-xl border border-brand-line bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-bluelight font-display text-sm font-extrabold text-brand-blue">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-base font-bold leading-snug text-brand-ink">
                    {fact.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <AdPlaceholder format="leaderboard" />
        </div>

        {/* Exposure limits table */}
        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-ink">
              Permissible exposure limits
            </h2>
            <p className="mt-2 text-brand-slate">
              OSHA uses a 5 dB exchange rate: every 5 dB louder cuts the safe
              exposure time in half.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-brand-line">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-brand-ink text-white">
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                      Noise level
                    </th>
                    <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                      Max exposure per day
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {exposureTable.map(([level, time]) => (
                    <tr key={level} className="bg-white">
                      <td className="px-4 py-3 font-display text-sm font-bold text-brand-ink">
                        {level}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-slate">
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-ink">
              What your employer must do
            </h2>
            <p className="mt-2 text-brand-slate">
              When noise reaches the 85 dBA action level, these obligations
              kick in.
            </p>
            <ul className="mt-5 space-y-3">
              {employerDuties.map((duty) => (
                <li
                  key={duty}
                  className="flex items-start gap-3 rounded-lg border border-brand-line bg-white p-4"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                  />
                  <span className="text-sm text-brand-ink/90">{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-12">
          <AffiliateDisclosure variant="box" />
        </div>

        {/* Related links */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="Go deeper"
            title="Related reading"
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Link
              href="/blog/best-ear-protection-for-construction-workers"
              className="group rounded-xl border border-brand-line bg-white p-5 shadow-card transition-all hover:border-brand-blue/40 hover:shadow-cardhover"
            >
              <Icon name="hardhat" className="h-7 w-7 text-brand-orange" />
              <p className="mt-3 font-display font-bold text-brand-ink">
                Ear Protection for Construction
              </p>
              <p className="mt-1 text-sm text-brand-slate">
                OSHA-ready picks for the job site.
              </p>
            </Link>
            <Link
              href="/blog/what-is-noise-reduction-rating"
              className="group rounded-xl border border-brand-line bg-white p-5 shadow-card transition-all hover:border-brand-blue/40 hover:shadow-cardhover"
            >
              <Icon name="shield" className="h-7 w-7 text-brand-blue" />
              <p className="mt-3 font-display font-bold text-brand-ink">
                Noise Reduction Rating Explained
              </p>
              <p className="mt-1 text-sm text-brand-slate">
                Decode the NRR number on the box.
              </p>
            </Link>
            <Link
              href="/noise-level-database"
              className="group rounded-xl border border-brand-line bg-white p-5 shadow-card transition-all hover:border-brand-blue/40 hover:shadow-cardhover"
            >
              <Icon name="chart" className="h-7 w-7 text-brand-blue" />
              <p className="mt-3 font-display font-bold text-brand-ink">
                Noise Level Database
              </p>
              <p className="mt-1 text-sm text-brand-slate">
                Compare decibel levels of common sounds.
              </p>
            </Link>
          </div>
        </section>

        <div className="mt-12">
          <NewsletterSignup variant="panel" />
        </div>
      </div>
    </div>
  );
}
