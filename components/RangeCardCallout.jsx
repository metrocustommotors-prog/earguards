import Link from "next/link";
import { Icon } from "./Icon";

const copy = {
  shooting: {
    eyebrow: "Printable range card",
    title: "One page for the firing line",
    body: "Indoor bounce, dual protection, and why the package NRR is not a gunshot rating — on a single printable card. No products, no prices.",
  },
  nrr: {
    eyebrow: "Printable range card",
    title: "What that NRR number means at the range",
    body: "The field rule (NRR − 7), foam vs. muffs vs. electronic, and when to double up indoors. One US Letter page. No sales pitch.",
  },
  guides: {
    eyebrow: "Printable range card",
    title: "Ear pro NRR — range counter card",
    body: "A one-page firing-line reference: 155–168 dB peaks, the 85 dB shop-floor number, and when a single device is not enough. Educational only — no products or checkout.",
  },
};

export default function RangeCardCallout({ variant = "guides" }) {
  const text = copy[variant] ?? copy.guides;
  const banner = variant === "guides";

  return (
    <aside
      className={
        banner
          ? "rounded-2xl border border-brand-orange/25 bg-brand-orangelight/50 p-6 md:p-7"
          : "mt-8 rounded-xl border border-brand-orange/25 bg-brand-orangelight/50 p-5 md:p-6"
      }
    >
      <div className={`flex flex-col gap-4 ${banner ? "sm:flex-row sm:items-center" : ""}`}>
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white"
          aria-hidden="true"
        >
          <Icon name="doc" className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="eyebrow !text-brand-orange">{text.eyebrow}</p>
          <p className="mt-1.5 font-display text-lg font-bold text-brand-ink">
            {text.title}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/80">
            {text.body}
          </p>
        </div>
        <Link
          href="/range-nrr-card"
          className={`inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-bold text-brand-orange hover:underline ${
            banner ? "sm:self-center" : ""
          }`}
        >
          Open the range card
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
