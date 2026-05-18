import Link from "next/link";
import { site, nav } from "@/lib/site";
import Logo from "./Logo";
import { Icon } from "./Icon";

const guideLinks = [
  { label: "Best Ear Protection", href: "/best-ear-protection" },
  { label: "Hearing Safety Guides", href: "/hearing-safety-guides" },
  { label: "Noise Level Database", href: "/noise-level-database" },
  { label: "OSHA Resources", href: "/osha-hearing-protection" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-line bg-brand-ink text-white">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-orange">
              <Icon name="shield" className="h-4 w-4" />
              {site.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Guides &amp; Resources
            </h3>
            <ul className="mt-4 space-y-2.5">
              {guideLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Affiliate Disclosure
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-white/55">
              As an Amazon Associate, I earn from qualifying purchases.
              EarGuards.com may earn a commission when you buy through links on
              our site. This helps support our free guides. We are reader-funded
              and never sell products directly.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.domain}. All rights reserved.
            This site provides general educational information, not medical
            advice.
          </p>
          <p>Made for safer hearing.</p>
        </div>
      </div>
    </footer>
  );
}
