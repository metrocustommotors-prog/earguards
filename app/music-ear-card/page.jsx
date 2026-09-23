import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import PrintCardButton from "@/components/PrintCardButton";
import MusicEarCard from "@/components/MusicEarCard";
import EditorialCredit from "@/components/EditorialCredit";
import { jsonLd, pageMetadata } from "@/lib/seo";
import "../range-nrr-card/range-card.css";
import "./music-card.css";

export const metadata = pageMetadata({
  title: "Music Ear Protection Counter Card (Printable)",
  description:
    "One-page educational card for music venues, rehearsal rooms, and stores: why live music is loud enough to matter, hi-fi filters versus foam, and where it belongs. No products, no prices.",
  path: "/music-ear-card",
  ogType: "article",
});

export default function MusicEarCardPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Music Ear Protection Counter Card",
    description:
      "One-page educational card on ear protection for concert audiences and musicians.",
    url: `${site.url}/music-ear-card`,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    about: [
      "Hearing protection",
      "Live music",
      "Musicians",
    ],
  };

  return (
    <div className="nrr-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchema) }}
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
              <span className="text-brand-ink">Music ear card</span>
            </nav>
            <h1 className="mt-3 font-display text-2xl font-extrabold text-brand-ink md:text-3xl">
              Printable music counter card
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-brand-slate md:text-base">
              Educational only — one US Letter page for venues, rehearsal
              rooms, and music stores. Use the print button; your browser’s
              print dialog will fill a single sheet. No products, no prices,
              no checkout.
            </p>
            <EditorialCredit className="mt-3" />
          </div>
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <PrintCardButton />
            <a href="/music-ear-card.pdf" className="btn-outline" download>
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="nrr-page__stage">
        <MusicEarCard />
      </div>
    </div>
  );
}
