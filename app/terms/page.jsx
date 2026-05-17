import Link from "next/link";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Use — Ear Guards",
  description:
    "The terms and conditions governing your use of the Ear Guards website, including content use, disclaimers, and limitations of liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="The Fine Print"
        title="Terms of use"
        description="By using EarGuards.com you agree to these terms. Please read them carefully."
        icon="doc"
      />

      <div className="container-site py-10 md:py-14">
        <div className="prose-article max-w-prose">
          <p className="text-sm text-brand-slate">Last updated: May 2026</p>

          <p>
            These terms of use govern your access to and use of {site.domain}{" "}
            (the &quot;site&quot;), operated by {site.name}. This is a general
            template provided for informational purposes and should be reviewed
            by a qualified professional before launch.
          </p>

          <h2>Acceptance of terms</h2>
          <p>
            By accessing or using the site, you agree to be bound by these
            terms and our{" "}
            <Link href="/privacy-policy">privacy policy</Link>. If you do not
            agree, please do not use the site.
          </p>

          <h2>Educational content only — not professional advice</h2>
          <p>
            All content on {site.name} is provided for general informational
            and educational purposes. It is not medical advice. Hearing
            protection needs vary by individual and environment. For concerns
            about hearing loss, tinnitus, ear pain, or the right protection for
            a specific medical situation, consult a licensed audiologist or
            physician.
          </p>

          <h2>Product information and recommendations</h2>
          <p>
            We research products carefully, but specifications, pricing, and
            availability change frequently and are controlled by third-party
            retailers and manufacturers. We do not sell products and cannot
            guarantee the accuracy of any third-party listing. Always verify
            current details with the retailer before purchasing.
          </p>

          <h2>Affiliate links and advertising</h2>
          <p>
            The site contains affiliate links and displays advertising. See our{" "}
            <Link href="/affiliate-disclosure">affiliate disclosure</Link> for
            full details. We are not responsible for the products, services,
            content, or practices of third-party retailers or advertisers.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The content on this site — text, graphics, logos, and layout — is
            owned by or licensed to {site.name} and is protected by applicable
            laws. You may share links to our pages and quote brief excerpts
            with attribution, but you may not republish substantial portions of
            our content without permission.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You agree not to misuse the site, including by attempting to
            disrupt it, access it through automated means without permission,
            or use it for any unlawful purpose.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The site is provided &quot;as is&quot; without warranties of any
            kind, express or implied. We do not warrant that the site will be
            uninterrupted, error-free, or that the information is complete or
            current at all times.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {site.name} will not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the site or reliance on its content.
          </p>

          <h2>Third-party links</h2>
          <p>
            The site links to third-party websites we do not control. We are
            not responsible for their content or practices, and including a
            link does not imply endorsement.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the
            site after changes are posted constitutes acceptance of the revised
            terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent through our{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
