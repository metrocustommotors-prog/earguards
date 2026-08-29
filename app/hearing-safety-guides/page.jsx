import Link from "next/link";
import { articles } from "@/lib/articles";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdPlaceholder from "@/components/AdPlaceholder";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Icon } from "@/components/Icon";
import RangeCardCallout from "@/components/RangeCardCallout";

export const metadata = {
  title: "Hearing Safety Guides — Learn How to Protect Your Hearing",
  description:
    "Plain-English hearing safety guides: noise reduction ratings, safe decibel limits, ear plugs vs ear muffs, and how to prevent noise-induced hearing loss.",
  alternates: { canonical: "/hearing-safety-guides" },
};

// Educational, non-product articles form the core of this hub.
const guideSlugs = [
  "what-is-noise-reduction-rating",
  "how-many-decibels-can-damage-hearing",
  "ear-plugs-vs-ear-muffs",
];

const principles = [
  {
    icon: "wave",
    title: "Noise is dose-based",
    body: "Hearing damage depends on both how loud a sound is and how long you are exposed. Louder noise cuts safe time fast.",
  },
  {
    icon: "alert",
    title: "Damage is permanent",
    body: "The hair cells in your inner ear do not regenerate. Once noise-induced hearing loss happens, it cannot be reversed.",
  },
  {
    icon: "shield",
    title: "It is almost fully preventable",
    body: "Consistently worn, well-fitted protection prevents nearly all noise-induced hearing loss — at any age.",
  },
];

export default function HearingSafetyGuidesPage() {
  const guides = articles.filter((a) => guideSlugs.includes(a.slug));
  const applied = articles.filter((a) => !guideSlugs.includes(a.slug));

  return (
    <div>
      <PageHero
        eyebrow="Learn the Fundamentals"
        title="Hearing safety guides"
        description="Understand how hearing loss happens, what the numbers on the package mean, and how to choose protection with confidence. Start here before you buy anything."
        icon="book"
      />

      <div className="container-site py-10 md:py-14">
        {/* Core principles */}
        <section>
          <SectionHeading
            eyebrow="The basics"
            title="Three things to know about hearing"
            description="Every guide on this page builds on these fundamentals."
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-brand-line bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-bluelight text-brand-blue">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <RangeCardCallout variant="guides" />
        </div>

        <div className="mt-12">
          <AdPlaceholder format="leaderboard" />
        </div>

        {/* Educational guides */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="Start here"
            title="Foundational guides"
            description="Read these explainers first — they make every product decision easier."
          />
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {guides.map((a) => (
              <ArticleCard
                key={a.slug}
                title={a.title}
                href={`/blog/${a.slug}`}
                category="Hearing Safety Guide"
                excerpt={a.dek}
                readTime={a.readTime}
              />
            ))}
          </div>
        </section>

        <div className="mt-10">
          <AffiliateDisclosure variant="bar" />
        </div>

        {/* Applied guides */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="Put it into practice"
            title="Use-case buying guides"
            description="Once you know the fundamentals, these guides apply them to specific environments."
          />
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applied.map((a) => (
              <ArticleCard
                key={a.slug}
                title={a.title}
                href={`/blog/${a.slug}`}
                category={a.heroEyebrow}
                excerpt={a.dek}
                readTime={a.readTime}
                compact
              />
            ))}
          </div>
        </section>

        {/* Cross-links */}
        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          <Link
            href="/noise-level-database"
            className="group flex items-center gap-4 rounded-xl border border-brand-line bg-brand-mist p-6 transition-all hover:border-brand-blue/40 hover:shadow-card"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white">
              <Icon name="chart" className="h-6 w-6" />
            </span>
            <span>
              <span className="font-display font-bold text-brand-ink">
                Noise Level Database
              </span>
              <span className="mt-0.5 block text-sm text-brand-slate">
                See how loud everyday sounds really are.
              </span>
            </span>
            <Icon
              name="arrow"
              className="ml-auto h-5 w-5 text-brand-blue transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/osha-hearing-protection"
            className="group flex items-center gap-4 rounded-xl border border-brand-line bg-brand-mist p-6 transition-all hover:border-brand-blue/40 hover:shadow-card"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white">
              <Icon name="doc" className="h-6 w-6" />
            </span>
            <span>
              <span className="font-display font-bold text-brand-ink">
                OSHA Resources
              </span>
              <span className="mt-0.5 block text-sm text-brand-slate">
                Workplace noise limits and your rights.
              </span>
            </span>
            <Icon
              name="arrow"
              className="ml-auto h-5 w-5 text-brand-blue transition-transform group-hover:translate-x-1"
            />
          </Link>
        </section>

        <div className="mt-12">
          <NewsletterSignup variant="panel" />
        </div>
      </div>
    </div>
  );
}
