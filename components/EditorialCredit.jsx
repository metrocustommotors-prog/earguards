import Link from "next/link";

/** Site-level review credit. No named clinician — the repo has no real author bio. */
export const editorialCredit = {
  name: "EarGuards editorial team",
  href: "/about",
  reviewed: "September 2026",
  note: "General educational information, not medical or audiology advice.",
};

export default function EditorialCredit({
  reviewed = editorialCredit.reviewed,
  className = "",
}) {
  return (
    <p className={`text-sm leading-relaxed text-brand-slate ${className}`}>
      <span className="font-semibold text-brand-ink">Reviewed for accuracy</span>
      {" by the "}
      <Link
        href={editorialCredit.href}
        className="font-semibold text-brand-blue hover:underline"
      >
        {editorialCredit.name}
      </Link>
      {" · Last reviewed "}
      {reviewed}. {editorialCredit.note}
    </p>
  );
}
