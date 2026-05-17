import Link from "next/link";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy — Ear Guards",
  description:
    "How Ear Guards collects, uses, and protects your information, including cookies, analytics, advertising, and your privacy choices.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Your Privacy"
        title="Privacy policy"
        description="This policy explains what information Ear Guards collects, how it is used, and the choices you have."
        icon="shield"
      />

      <div className="container-site py-10 md:py-14">
        <div className="prose-article max-w-prose">
          <p className="text-sm text-brand-slate">Last updated: May 2026</p>

          <p>
            This privacy policy describes how {site.name} (&quot;we,&quot;
            &quot;us&quot;) handles information when you visit{" "}
            {site.domain}. This is a general template provided for
            informational purposes and should be reviewed by a qualified
            professional before launch.
          </p>

          <h2>Information we collect</h2>
          <p>
            We aim to collect as little personal information as possible. The
            data we may collect includes:
          </p>
          <ul>
            <li>
              <strong>Information you provide:</strong> your name, email
              address, and message when you use our contact form or subscribe
              to our newsletter.
            </li>
            <li>
              <strong>Automatically collected data:</strong> standard log
              information such as browser type, device, pages visited, and
              approximate location, gathered through analytics tools.
            </li>
            <li>
              <strong>Cookies:</strong> small files that help the site
              function, remember preferences, and measure traffic.
            </li>
          </ul>

          <h2>How we use information</h2>
          <ul>
            <li>To operate, maintain, and improve the website.</li>
            <li>To respond to your questions and messages.</li>
            <li>
              To send our newsletter, if you have subscribed (you can opt out
              at any time).
            </li>
            <li>To understand how visitors use the site through analytics.</li>
          </ul>

          <h2>Cookies and analytics</h2>
          <p>
            We use cookies and third-party analytics services to understand
            site usage. You can control or disable cookies through your browser
            settings, though some site features may not work as intended if you
            do.
          </p>

          <h2>Advertising and affiliate links</h2>
          <p>
            We display advertising from third-party networks and use affiliate
            links. These third parties may use cookies to serve relevant ads or
            track referrals. Their use of information is governed by their own
            privacy policies. See our{" "}
            <Link href="/affiliate-disclosure">affiliate disclosure</Link> for
            details on how affiliate links work.
          </p>

          <h2>How we share information</h2>
          <p>
            We do not sell your personal information. We may share information
            with service providers who help us operate the site (such as email
            and analytics providers) and when required by law.
          </p>

          <h2>Data retention and security</h2>
          <p>
            We keep personal information only as long as needed for the
            purposes described here, and we use reasonable measures to protect
            it. No method of transmission over the internet is completely
            secure, however.
          </p>

          <h2>Your choices and rights</h2>
          <p>
            Depending on where you live, you may have the right to access,
            correct, or delete your personal information, or to opt out of
            certain processing. To make a request, please{" "}
            <Link href="/contact">contact us</Link>. You can unsubscribe from
            our newsletter using the link in any email.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            Our site is intended for a general audience and is not directed at
            children under 13. We do not knowingly collect personal information
            from children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will
            be reflected by the &quot;last updated&quot; date above.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent through our{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
