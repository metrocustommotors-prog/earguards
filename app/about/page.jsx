import Link from "next/link";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "About Ear Guards — Our Mission & Review Process",
  description:
    "Learn who is behind Ear Guards, how we research and recommend hearing protection, and how we stay editorially independent while earning affiliate revenue.",
  alternates: { canonical: "/about" },
};

const reviewSteps = [
  {
    icon: "book",
    title: "Research the use case",
    body: "We start with the real environment — its noise profile, duration of exposure, and practical constraints like helmets, glasses, or communication needs.",
  },
  {
    icon: "chart",
    title: "Compare the specs",
    body: "We weigh noise reduction ratings, comfort, durability, and value, and we translate lab numbers into realistic, real-world expectations.",
  },
  {
    icon: "shield",
    title: "Prioritize safety first",
    body: "A recommendation has to protect hearing effectively. Comfort and price matter, but they never override adequate protection.",
  },
  {
    icon: "check",
    title: "Write it plainly",
    body: "We publish clear, jargon-free guidance anyone can act on — and we update guides as products and standards change.",
  },
];

const values = [
  {
    title: "Independence",
    body: "Brands cannot pay for a recommendation. Our picks reflect research, not relationships.",
  },
  {
    title: "Transparency",
    body: "We disclose affiliate relationships clearly on every page that contains affiliate links.",
  },
  {
    title: "Accuracy",
    body: "We cite recognized standards like OSHA and NIOSH and avoid overstating what any product can do.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="About Ear Guards"
        description="We are a hearing-safety resource built on one simple belief: noise-induced hearing loss is almost entirely preventable — if people have clear, trustworthy information."
        icon="ear"
      />

      <div className="container-site py-10 md:py-14">
        {/* Mission */}
        <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-article">
            <h2>Why we built this site</h2>
            <p>
              Hearing loss from noise is one of the most common — and most
              preventable — health conditions in the world. It is also one of
              the most misunderstood. People assume hearing damage only happens
              to factory workers or aging ears, when in reality a single loud
              concert, a day at the range, or years of mowing the lawn without
              protection can add up to permanent loss.
            </p>
            <p>
              {site.name} exists to close that information gap. We turn
              technical standards, decibel charts, and product specs into
              practical guidance that any person can use to make a confident
              decision in a few minutes — whether they are protecting a child,
              a crew, or themselves.
            </p>
            <p>
              We are not a store. We do not sell products or run a checkout. We
              publish guides, comparisons, and reference tools, and we keep them
              free by earning affiliate commissions and display revenue when
              readers find our recommendations useful.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-line bg-brand-mist p-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-slate">
                What we cover
              </p>
              <ul className="mt-3 space-y-2 text-sm text-brand-ink/90">
                {[
                  "Buying guides by use case",
                  "Hearing safety education",
                  "A searchable noise level database",
                  "Plain-English OSHA resources",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Icon
                      name="check"
                      className="h-4 w-4 shrink-0 text-brand-blue"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-blue/20 bg-brand-bluelight/60 p-6">
              <Icon name="shield" className="h-8 w-8 text-brand-blue" />
              <p className="mt-3 font-display text-lg font-bold text-brand-ink">
                {site.tagline}
              </p>
              <p className="mt-1.5 text-sm text-brand-slate">
                That is the standard every guide on this site is held to.
              </p>
            </div>
          </div>
        </section>

        {/* Review process */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="How we work"
            title="Our review process"
            description="Every recommendation on Ear Guards follows the same four-step approach."
          />
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviewSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-brand-line bg-white p-6 shadow-card"
              >
                <span className="absolute right-5 top-5 font-display text-3xl font-extrabold text-brand-line">
                  {i + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-bluelight text-brand-blue">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="What we stand for"
            title="Editorial values"
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-brand-line bg-white p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-brand-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Independence + disclosure */}
        <section className="mt-14">
          <div className="rounded-2xl border border-brand-line bg-brand-mist p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              How we stay independent
            </h2>
            <p className="mt-3 max-w-prose leading-relaxed text-brand-slate">
              Affiliate commissions and ads pay for our research and keep every
              guide free to read. That revenue is never tied to a specific
              recommendation — we earn the same whether you choose our top pick
              or an alternative. If a product is not worth recommending, we say
              so. Read the full details on our{" "}
              <Link
                href="/affiliate-disclosure"
                className="font-bold text-brand-blue hover:underline"
              >
                affiliate disclosure
              </Link>{" "}
              page.
            </p>
            <div className="mt-5">
              <AffiliateDisclosure variant="bar" />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-12 rounded-2xl border border-brand-blue/20 bg-brand-bluelight/60 p-6 text-center md:p-8">
          <h2 className="font-display text-xl font-bold text-brand-ink">
            Questions, corrections, or feedback?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-brand-slate">
            We welcome input from readers, audiologists, and safety
            professionals. If something on the site could be clearer or more
            accurate, we want to hear it.
          </p>
          <Link href="/contact" className="btn-primary mt-5 inline-flex">
            Get in touch
          </Link>
        </section>

        <div className="mt-12">
          <NewsletterSignup variant="panel" />
        </div>
      </div>
    </div>
  );
}
