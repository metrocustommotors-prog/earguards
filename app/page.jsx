import Link from "next/link";
import { categories, comparisonPreview, noiseLevels } from "@/lib/site";
import { featuredGuides } from "@/lib/articles";
import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import ComparisonTable from "@/components/ComparisonTable";
import NewsletterSignup from "@/components/NewsletterSignup";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdPlaceholder from "@/components/AdPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Ear Guards — Protect Your Hearing Before It's Gone",
  description:
    "Practical guides, product comparisons, and safety resources for choosing the right ear protection for work, sleep, shooting, concerts, travel, and everyday noise.",
  alternates: { canonical: "/" },
};

const trustStats = [
  { value: "10+", label: "In-depth buying guides" },
  { value: "30+", label: "Noise sources rated" },
  { value: "8", label: "Use-case categories" },
  { value: "85 dB", label: "Where damage begins" },
];

export default function HomePage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 88% 0%, rgba(21,89,181,0.10), transparent 38%), radial-gradient(circle at 0% 100%, rgba(242,106,27,0.08), transparent 38%)",
          }}
        />
        <div className="container-site relative grid items-center gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <span className="eyebrow animate-rise">
              <Icon name="shield" className="h-4 w-4" />
              Independent hearing-protection authority
            </span>
            <h1
              className="mt-4 animate-rise font-display text-4xl font-extrabold leading-[1.08] text-brand-ink sm:text-5xl lg:text-[3.4rem]"
              style={{ animationDelay: "0.05s" }}
            >
              Protect Your Hearing{" "}
              <span className="relative whitespace-nowrap text-brand-blue">
                Before It&apos;s Gone
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-brand-orange"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8c60-6 130-6 296 1"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p
              className="mt-5 max-w-xl animate-rise text-base leading-relaxed text-brand-slate sm:text-lg"
              style={{ animationDelay: "0.1s" }}
            >
              Practical guides, product comparisons, and safety resources for
              choosing the right ear protection for work, sleep, shooting,
              concerts, travel, and everyday noise.
            </p>
            <div
              className="mt-7 flex animate-rise flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "0.15s" }}
            >
              <Link href="/hearing-safety-guides" className="btn-primary text-base">
                Explore Hearing Protection Guides
              </Link>
              <Link href="/best-ear-protection" className="btn-outline text-base">
                See Best Ear Protection
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <p
              className="mt-5 flex animate-rise items-center gap-2 text-xs text-brand-slate"
              style={{ animationDelay: "0.2s" }}
            >
              <Icon name="check" className="h-4 w-4 text-green-600" />
              Reader-funded &amp; independent — we research, you decide.
            </p>
          </div>

          {/* hero visual: live noise meter card */}
          <div className="lg:col-span-5">
            <div
              className="animate-rise rounded-2xl border border-brand-line bg-white p-6 shadow-cardhover"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-display text-sm font-bold text-brand-ink">
                  <Icon name="wave" className="h-5 w-5 text-brand-blue" />
                  How loud is too loud?
                </span>
                <span className="rounded-full bg-brand-orangelight px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
                  Live scale
                </span>
              </div>
              <div className="mt-5 space-y-2.5">
                {[
                  { label: "Conversation", db: 60, w: "30%", c: "bg-green-500" },
                  { label: "City traffic", db: 85, w: "55%", c: "bg-yellow-500" },
                  { label: "Power tools", db: 100, w: "72%", c: "bg-brand-orange" },
                  { label: "Rock concert", db: 110, w: "84%", c: "bg-red-500" },
                  { label: "Gunshot", db: 150, w: "100%", c: "bg-red-700" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-brand-ink">
                        {row.label}
                      </span>
                      <span className="font-display font-bold text-brand-slate">
                        {row.db} dB
                      </span>
                    </div>
                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-brand-mist">
                      <div
                        className={`h-full rounded-full ${row.c}`}
                        style={{ width: row.w }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/noise-level-database"
                className="mt-5 flex items-center justify-center gap-1.5 rounded-lg bg-brand-bluelight py-2.5 text-xs font-display font-bold text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                Open the Noise Level Database
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* trust stats */}
        <div className="border-y border-brand-line bg-brand-mist">
          <div className="container-site grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-brand-blue sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs text-brand-slate">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* leaderboard ad */}
      <div className="container-site py-8">
        <AdPlaceholder format="leaderboard" label="728×90 leaderboard" />
      </div>

      {/* ============ 2. CATEGORY CARDS ============ */}
      <section className="container-site py-8">
        <SectionHeading
          eyebrow="Browse by Use Case"
          icon="ear"
          title="Find ear protection for your situation"
          description="Every environment has different noise risks. Pick the category that fits your needs and jump straight to vetted recommendations."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} {...c} />
          ))}
        </div>
      </section>

      {/* ============ 3. FEATURED GUIDES ============ */}
      <section className="bg-brand-mist py-16">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Featured Guides"
              icon="book"
              title="Most-read hearing safety guides"
              description="Hand-researched comparisons and explainers, updated regularly."
            />
            <Link
              href="/blog"
              className="hidden items-center gap-1 text-sm font-display font-bold text-brand-blue hover:underline sm:flex"
            >
              View all articles
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((g) => (
              <ArticleCard key={g.href} {...g} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. MONETIZATION / AFFILIATE DISCLOSURE ============ */}
      <section className="container-site py-12">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AffiliateDisclosure variant="box" />
            <div className="mt-6">
              <AdPlaceholder format="inline" label="In-content responsive ad" />
            </div>
          </div>
          <div className="rounded-xl border border-brand-line bg-brand-ink p-5 text-white">
            <Icon name="shield" className="h-7 w-7 text-brand-orange" />
            <h3 className="mt-3 font-display text-lg font-bold">
              How we stay independent
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              EarGuards.com is supported by display ads, affiliate commissions,
              and sponsorships — never by selling products directly. Our guides
              are free, and our recommendations are based on research, not
              payouts.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-1 text-sm font-display font-bold text-brand-orange hover:underline"
            >
              Read our review process
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5. COMPARISON TABLE PREVIEW ============ */}
      <section className="bg-brand-mist py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="Quick Comparison"
            icon="chart"
            title="Ear protection types at a glance"
            description="A fast overview of the main hearing-protection categories — what they're best for, and which full guide to read next."
          />
          <div className="mt-8">
            <ComparisonTable
              columns={comparisonPreview.columns}
              rows={comparisonPreview.rows}
              rich
              caption="Hearing protection comparison"
            />
          </div>
          <p className="mt-4 text-center text-sm text-brand-slate">
            Want the full breakdown?{" "}
            <Link
              href="/best-ear-protection"
              className="font-display font-bold text-brand-blue hover:underline"
            >
              See all Best Ear Protection picks
            </Link>
          </p>
        </div>
      </section>

      {/* ============ 6. NEWSLETTER ============ */}
      <section className="container-site py-16">
        <NewsletterSignup variant="panel" />
      </section>
    </>
  );
}
