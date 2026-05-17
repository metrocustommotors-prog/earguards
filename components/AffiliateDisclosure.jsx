import { affiliateDisclosureText } from "@/lib/site";
import { Icon } from "./Icon";

// variant: "bar" (compact inline) | "box" (card)
export default function AffiliateDisclosure({ variant = "bar" }) {
  if (variant === "box") {
    return (
      <div className="rounded-xl border border-brand-line bg-brand-mist p-5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-bluelight text-brand-blue">
            <Icon name="doc" className="h-4.5 w-4.5" />
          </span>
          <div>
            <h4 className="font-display text-sm font-bold text-brand-ink">
              Affiliate Disclosure
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-brand-slate">
              {affiliateDisclosureText}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-brand-line bg-brand-mist px-4 py-3 text-xs leading-relaxed text-brand-slate">
      <Icon name="doc" className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
      <p>{affiliateDisclosureText}</p>
    </div>
  );
}
