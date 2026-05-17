import Link from "next/link";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Affiliate Disclosure — Ear Guards",
  description:
    "How Ear Guards uses affiliate links and display advertising to fund free hearing protection guides, and how we keep our recommendations independent.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div>
      <PageHero
        eyebrow="Transparency"
        title="Affiliate disclosure"
        description="Plain and simple: here is exactly how Ear Guards earns money and why it never changes what we recommend."
        icon="doc"
      />

      <div className="container-site py-10 md:py-14">
        <div className="prose-article max-w-prose">
          <p className="text-sm text-brand-slate">Last updated: May 2026</p>

          <h2>The short version</h2>
          <p>
            {site.name} participates in affiliate programs. This means that
            when you click certain links on our site and make a purchase, we
            may earn a small commission — at no extra cost to you. We also
            display advertising. Together, this revenue keeps every guide on
            the site free to read.
          </p>

          <h2>What an affiliate link is</h2>
          <p>
            An affiliate link is a tracked link to a retailer. If you click it
            and buy something, the retailer pays us a referral fee. The price
            you pay is exactly the same as it would be otherwise. Buttons such
            as &quot;Check Price,&quot; &quot;Read Review,&quot; and
            &quot;Compare Options&quot; on our site may be affiliate links.
          </p>

          <h2>How it affects our recommendations — it does not</h2>
          <p>
            Our editorial recommendations are made independently of any
            affiliate relationship. We earn a commission regardless of which
            product you choose, so we have no incentive to steer you toward one
            brand over another. If we do not believe a product is worth
            recommending, we will not recommend it — and we will say why.
          </p>

          <h2>Display advertising</h2>
          <p>
            We display ads from third-party advertising networks. Ad
            placements are clearly labeled and are kept separate from our
            editorial content. Advertisers cannot buy a recommendation or
            influence the conclusions of our guides.
          </p>

          <h2>Sponsored content</h2>
          <p>
            On occasion we may publish sponsored content or work with brand
            partners. Any such content is clearly and conspicuously labeled as
            sponsored so you always know what you are reading.
          </p>

          <h2>Our commitment to you</h2>
          <p>
            We will always disclose affiliate relationships clearly, keep
            advertising separate from editorial judgment, and base every
            recommendation on research and the goal of protecting your
            hearing. If you ever feel a piece of content does not meet that
            standard, please{" "}
            <Link href="/contact">contact us</Link> — reader trust is the
            entire foundation of this site.
          </p>

          <h2>Questions</h2>
          <p>
            If anything here is unclear, reach out through our{" "}
            <Link href="/contact">contact page</Link>. You can also read more
            about our process on the{" "}
            <Link href="/about">about page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
