import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import PrintCardButton from "@/components/PrintCardButton";
import RangeNrrCard from "@/components/RangeNrrCard";
import "./range-card.css";

export const metadata = {
  title: "Ear Pro NRR Range Counter Card (Printable)",
  description:
    "One-page educational range card: what the package NRR means on a SoCal firing line. Gunshot peaks, foam vs. muffs vs. electronic, and when to double up. No products, no prices.",
  alternates: { canonical: "/range-nrr-card" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ear Pro NRR Range Counter Card (Printable)",
    description:
      "A one-page educational firing-line card on NRR, gunshot peaks, and dual protection. Not a product listing.",
    url: "/range-nrr-card",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Ear Pro NRR Range Counter Card (Printable)",
    description:
      "A one-page educational firing-line card on NRR, gunshot peaks, and dual protection. Not a product listing.",
  },
};

export default function RangeNrrCardPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ear Pro NRR Range Counter Card",
    description:
      "One-page educational range card on what the package NRR means at a firing line.",
    url: `${site.url}/range-nrr-card`,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    about: [
      "Noise Reduction Rating",
      "Hearing protection",
      "Indoor shooting range",
    ],
  };

  return (
    <div className="nrr-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="nrr-page__toolbar nrr-no-print">
        <div className="container-site flex flex-col gap-5 py-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-slate"
            >
              <Link href="/" className="hover:text-brand-blue">
                Home
              </Link>
              <Icon name="chevron" className="h-3 w-3" />
              <Link
                href="/hearing-safety-guides"
                className="hover:text-brand-blue"
              >
                Hearing Safety Guides
              </Link>
              <Icon name="chevron" className="h-3 w-3" />
              <span className="text-brand-ink">Range NRR card</span>
            </nav>
            <h1 className="mt-3 font-display text-2xl font-extrabold text-brand-ink md:text-3xl">
              Printable range counter card
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-brand-slate md:text-base">
              Educational only — one US Letter page. Use the print button; your
              browser’s print dialog will fill a single sheet. No products, no
              prices, no checkout.
            </p>
          </div>
          <PrintCardButton className="self-start md:self-auto" />
        </div>
      </div>

      <div className="nrr-page__stage">
        <RangeNrrCard />
      </div>
    </div>
  );
}
