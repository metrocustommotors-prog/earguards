import { articles } from "@/lib/articles";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdPlaceholder from "@/components/AdPlaceholder";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Hearing Protection Blog — Guides, Reviews & Comparisons",
  description:
    "Every Ear Guards article in one place: buying guides, product comparisons, and hearing safety explainers for work, sleep, shooting, concerts, and more.",
  alternates: { canonical: "/blog" },
};

const categoryLabels = {
  work: "Work & Job Site",
  shooting: "Shooting & Range",
  sleep: "Sleep & Rest",
  concerts: "Concerts & Music",
  kids: "Kids & Family",
  sensory: "Sensory Sensitivity",
  motorsports: "Motorsports",
  travel: "Travel",
  guide: "Hearing Safety Guide",
};

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <div>
      <PageHero
        eyebrow="The Blog"
        title="Hearing protection guides & reviews"
        description="In-depth, independently researched articles to help you choose the right ear protection and understand how to keep your hearing safe for life."
        icon="book"
      />

      <div className="container-site py-10 md:py-14">
        <AffiliateDisclosure variant="bar" />

        {/* Featured article */}
        <section className="mt-8">
          <div className="grid items-stretch gap-6 rounded-2xl border border-brand-line bg-brand-mist p-5 md:grid-cols-2 md:p-7">
            <div className="flex flex-col justify-center">
              <span className="eyebrow">Featured guide</span>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-brand-ink md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-brand-slate">{featured.dek}</p>
              <a
                href={`/blog/${featured.slug}`}
                className="btn-primary mt-5 w-fit"
              >
                Read the guide
              </a>
            </div>
            <ArticleCard
              title={featured.title}
              href={`/blog/${featured.slug}`}
              category={categoryLabels[featured.category] || "Guide"}
              excerpt={featured.dek}
              readTime={featured.readTime}
            />
          </div>
        </section>

        {/* All articles */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-brand-ink">
            All articles
          </h2>
          <p className="mt-1.5 text-brand-slate">
            {articles.length} guides and growing.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard
                key={a.slug}
                title={a.title}
                href={`/blog/${a.slug}`}
                category={categoryLabels[a.category] || "Guide"}
                excerpt={a.dek}
                readTime={a.readTime}
              />
            ))}
          </div>
        </section>

        <div className="mt-12">
          <AdPlaceholder format="leaderboard" />
        </div>

        <div className="mt-12">
          <NewsletterSignup variant="panel" />
        </div>
      </div>
    </div>
  );
}
