import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, getRelatedArticles } from "@/lib/articles";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import TableOfContents from "@/components/TableOfContents";
import ComparisonTable from "@/components/ComparisonTable";
import ProductRecommendationCard from "@/components/ProductRecommendationCard";
import FAQAccordion from "@/components/FAQAccordion";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdPlaceholder from "@/components/AdPlaceholder";
import NewsletterSignup from "@/components/NewsletterSignup";
import ArticleCard from "@/components/ArticleCard";
import RangeCardCallout from "@/components/RangeCardCallout";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: `/blog/${article.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.related);

  // Build the table of contents from the article structure.
  const toc = [
    { id: "intro", label: "Overview" },
    { id: "comparison", label: "Quick comparison" },
    ...article.sections.map((s) => ({ id: s.id, label: s.heading })),
    { id: "top-picks", label: "Our top picks" },
    { id: "faq", label: "Frequently asked questions" },
    { id: "verdict", label: "Final recommendation" },
  ];

  // Article schema (JSON-LD) for SEO.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    dateModified: "2026-05-01",
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${site.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${site.url}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <header className="border-b border-brand-line bg-gradient-to-b from-brand-bluelight/60 to-white">
        <div className="container-site py-10 md:py-14">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-slate"
          >
            <Link href="/" className="hover:text-brand-blue">
              Home
            </Link>
            <Icon name="chevron" className="h-3 w-3" />
            <Link href="/blog" className="hover:text-brand-blue">
              Blog
            </Link>
            <Icon name="chevron" className="h-3 w-3" />
            <span className="text-brand-ink">{article.title}</span>
          </nav>

          <div className="mt-5 max-w-prose">
            <span className="eyebrow">{article.heroEyebrow}</span>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-ink md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-slate">
              {article.dek}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-slate">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="clock" className="h-4 w-4 text-brand-blue" />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="doc" className="h-4 w-4 text-brand-blue" />
                Updated {article.updated}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="shield" className="h-4 w-4 text-brand-blue" />
                Independently researched
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container-site py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Main content column */}
          <div className="min-w-0">
            <AffiliateDisclosure variant="bar" />

            {/* Mobile TOC */}
            <div className="mt-6 lg:hidden">
              <TableOfContents items={toc} />
            </div>

            {/* Intro */}
            <section id="intro" className="prose-article mt-8 scroll-mt-28">
              {article.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>

            <AdPlaceholder format="inline" />

            {/* Comparison table */}
            <section id="comparison" className="mt-10 scroll-mt-28">
              <h2 className="font-display text-2xl font-bold text-brand-ink">
                Quick comparison
              </h2>
              <p className="mt-2 text-brand-slate">
                A side-by-side look at the main protection types covered in
                this guide.
              </p>
              <div className="mt-5">
                <ComparisonTable
                  columns={article.comparison.columns}
                  rows={article.comparison.rows}
                  caption={`${article.title} — at a glance`}
                />
              </div>
            </section>

            {/* Body sections */}
            {article.sections.map((section) => (
              <Fragment key={section.id}>
                <section
                  id={section.id}
                  className="prose-article mt-10 scroll-mt-28"
                >
                  <h2>{section.heading}</h2>
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </section>
                {article.slug === "best-ear-protection-for-shooting" &&
                  section.id === "impulse-noise" && (
                    <RangeCardCallout variant="shooting" />
                  )}
                {article.slug === "what-is-noise-reduction-rating" &&
                  section.id === "real-world" && (
                    <RangeCardCallout variant="nrr" />
                  )}
              </Fragment>
            ))}

            <AdPlaceholder format="inline" />

            {/* Product recommendations */}
            <section id="top-picks" className="mt-12 scroll-mt-28">
              <h2 className="font-display text-2xl font-bold text-brand-ink">
                Our top picks
              </h2>
              <p className="mt-2 max-w-prose text-brand-slate">
                These categories reflect the options we would prioritize for
                this use case. Pricing and availability change often — use the
                buttons to compare current options.
              </p>
              <div className="mt-6 grid gap-6">
                {article.products.map((product, i) => (
                  <ProductRecommendationCard
                    key={product.name}
                    rank={i + 1}
                    name={product.name}
                    badge={product.badge}
                    blurb={product.blurb}
                    specs={product.specs}
                    pros={product.pros}
                    cons={product.cons}
                    amazonSearchUrl={product.amazonSearchUrl}
                  />
                ))}
              </div>
            </section>

            <div className="mt-10">
              <AffiliateDisclosure variant="box" />
            </div>

            {/* FAQ */}
            <section id="faq" className="mt-12 scroll-mt-28">
              <h2 className="font-display text-2xl font-bold text-brand-ink">
                Frequently asked questions
              </h2>
              <div className="mt-5">
                <FAQAccordion items={article.faq} />
              </div>
            </section>

            {/* Final recommendation */}
            <section id="verdict" className="mt-12 scroll-mt-28">
              <div className="rounded-2xl border border-brand-blue/20 bg-brand-bluelight/60 p-6 md:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-xl font-bold text-brand-ink">
                    Final recommendation
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-brand-ink/90">
                  {article.finalRecommendation}
                </p>
              </div>
            </section>

            {/* Related articles */}
            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  Related guides
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {related.map((r) => (
                    <ArticleCard
                      key={r.slug}
                      title={r.title}
                      href={`/blog/${r.slug}`}
                      category={r.category}
                      excerpt={r.dek}
                      readTime={r.readTime}
                      compact
                    />
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12">
              <NewsletterSignup variant="inline" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <TableOfContents items={toc} />
              <AdPlaceholder format="sidebar" />
              <div className="rounded-xl border border-brand-line bg-white p-5">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-ink">
                  Keep exploring
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link
                      href="/noise-level-database"
                      className="inline-flex items-center gap-1.5 text-brand-blue hover:underline"
                    >
                      <Icon name="chart" className="h-4 w-4" />
                      Noise Level Database
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/osha-hearing-protection"
                      className="inline-flex items-center gap-1.5 text-brand-blue hover:underline"
                    >
                      <Icon name="doc" className="h-4 w-4" />
                      OSHA Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/best-ear-protection"
                      className="inline-flex items-center gap-1.5 text-brand-blue hover:underline"
                    >
                      <Icon name="shield" className="h-4 w-4" />
                      Best Ear Protection
                    </Link>
                  </li>
                  {(article.slug === "best-ear-protection-for-shooting" ||
                    article.slug === "what-is-noise-reduction-rating") && (
                    <li>
                      <Link
                        href="/range-nrr-card"
                        className="inline-flex items-center gap-1.5 text-brand-blue hover:underline"
                      >
                        <Icon name="doc" className="h-4 w-4" />
                        Range NRR card
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
