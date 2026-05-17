import Link from "next/link";
import { Icon } from "./Icon";

export default function CategoryCard({ title, slug, blurb, icon, accent }) {
  const isOrange = accent === "orange";
  return (
    <Link
      href={`/best-ear-protection#${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-brand-line bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-cardhover"
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
          isOrange
            ? "bg-brand-orangelight text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
            : "bg-brand-bluelight text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
        }`}
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-3.5 font-display text-base font-bold leading-snug text-brand-ink">
        {title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-slate">
        {blurb}
      </p>
      <span
        className={`mt-3 flex items-center gap-1 text-xs font-display font-bold ${
          isOrange ? "text-brand-orange" : "text-brand-blue"
        }`}
      >
        Explore picks
        <Icon
          name="arrow"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
        />
      </span>
      <span
        className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${
          isOrange ? "bg-brand-orange" : "bg-brand-blue"
        }`}
      />
    </Link>
  );
}
