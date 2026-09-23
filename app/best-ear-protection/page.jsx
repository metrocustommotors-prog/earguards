import Link from "next/link";
import { categories } from "@/lib/site";
import { articles } from "@/lib/articles";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdPlaceholder from "@/components/AdPlaceholder";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Icon } from "@/components/Icon";
import { pageMetadata } from "@/lib/seo";
import RangeCardCallout from "@/components/RangeCardCallout";

export const metadata = pageMetadata({
  title: "Best Ear Protection by Use Case (2026 Picks & Guides)",
  description:
    "Browse the best ear protection for work, shooting, sleep, concerts and live music, kids, motorsports, travel, and sensory needs. Research-backed picks and full buying guides.",
  path: "/best-ear-protection",
});

const overallTable = {
  columns: ["Product Type", "Best For", "Typical NRR", "Reusable"],
  rows: [
    ["Foam ear plugs", "Sleep, travel, high-noise tasks", "29–33 dB", "No"],
    ["Reusable flanged plugs", "Commuting, frequent use", "20–26 dB", "Yes"],
    ["Hi-fi filtered plugs", "Concerts, riding, awareness", "15–20 dB", "Yes"],
    ["Passive earmuffs", "Yard work, job sites, kids", "20–31 dB", "Yes"],
    ["Electronic earmuffs", "Shooting, crew communication", "22–26 dB", "Yes"],
    ["Custom-molded plugs", "Daily, long-term comfort", "Varies", "Yes"],
  ],
};

// Map each category to its guide article slug.
// A string is the single primary guide. An array lists more than one,
// each with a short label so the reader can pick the right guide.
const categoryGuide = {
  work: "best-ear-protection-for-construction-workers",
  shooting: "best-ear-protection-for-shooting",
  sleep: "best-ear-plugs-for-sleeping",
  concerts: [
    {
      slug: "best-ear-protection-for-concerts",
      label: "Audience & festivals",
    },
    {
      slug: "best-ear-protection-for-musicians",
      label: "Stage & rehearsal",
    },
  ],
  kids: "best-ear-protection-for-kids",
  sensory: "best-ear-protection-for-sensory-sensitivity",
  motorsports: "best-ear-protection-for-motorcycle-riders",
  travel: "best-ear-protection-for-flying",
};

function guidesForCategory(slug) {
  const mapped = categoryGuide[slug];
  const entries = Array.isArray(mapped)
    ? mapped
    : mapped
      ? [{ slug: mapped, label: "Full guide" }]
      : [];

  return entries.flatMap((entry) => {
    const article = articles.find((a) => a.slug === entry.slug);
    return article ? [{ article, label: entry.label || "Full guide" }] : [];
  });
}

export default function BestEarProtectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Best Ear Protection"
        icon="shield"
        title="The best ear protection, by use case"
        description="There is no single 'best' hearing protector — the right pick depends on where and how you'll use it. Choose your situation below for vetted recommendations and full buying guides."
      />

      <div className="container-site py-8">
        <AffiliateDisclosure variant="bar" />
      </div>

      {/* category sections */}
      <section className="container-site pb-4">
        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((c) => {
            const guides = guidesForCategory(c.slug);
            const isOrange = c.accent === "orange";
            return (
              <div
                key={c.slug}
                id={c.slug}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card"
              >
                <div className="flex items-start gap-4 border-b border-brand-line p-5">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      isOrange
                        ? "bg-brand-orangelight text-brand-orange"
                        : "bg-brand-bluelight text-brand-blue"
                    }`}
                  >
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-brand-ink">
                      {c.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-brand-slate">
                      {c.blurb}
                    </p>
                  </div>
                </div>
                <div className={guides.length > 1 ? "divide-y divide-brand-line" : undefined}>
                  {guides.length === 0 ? (
                    <div className="p-5">
                      <span className="text-sm text-brand-slate">
                        Guide coming soon
                      </span>
                    </div>
                  ) : (
                    guides.map(({ article, label }) => (
                      <div
                        key={article.slug}
                        className="flex items-center justify-between gap-4 p-5"
                      >
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wide text-brand-slate">
                            {label}
                          </p>
                          <Link
                            href={`/blog/${article.slug}`}
                            className="font-display text-sm font-bold text-brand-blue hover:underline"
                          >
                            {article.title}
                          </Link>
                        </div>
                        <Link
                          href={`/blog/${article.slug}`}
                          className="btn-affiliate shrink-0"
                        >
                          Compare Options
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="container-site py-8">
        <AdPlaceholder format="inline" label="In-content responsive ad" />
      </div>

      {/* overall comparison */}
      <section className="bg-brand-mist py-14">
        <div className="container-site">
          <h2 className="font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
            All hearing protection types compared
          </h2>
          <p className="mt-2 max-w-2xl text-brand-slate">
            A reference table covering every major category of ear protection,
            with typical noise reduction ratings and whether each is reusable.
          </p>
          <div className="mt-6">
            <ComparisonTable
              columns={overallTable.columns}
              rows={overallTable.rows}
              caption="Ear protection types reference"
            />
          </div>
        </div>
      </section>

      {/* all guides */}
      <section className="container-site py-14">
        <h2 className="font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
          Every buying guide
        </h2>
        <p className="mt-2 text-brand-slate">
          Dig into the full, research-backed recommendations.
        </p>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles
            .filter((a) => a.title.startsWith("Best"))
            .map((a) => (
              <ArticleCard
                key={a.slug}
                title={a.title}
                href={`/blog/${a.slug}`}
                category={a.heroEyebrow}
                excerpt={a.dek}
                readTime={a.readTime}
              />
            ))}
        </div>
      </section>

      <section className="container-site pb-4">
        <RangeCardCallout variant="home" />
      </section>

      <section className="container-site pb-16">
        <NewsletterSignup variant="panel" />
      </section>
    </>
  );
}
