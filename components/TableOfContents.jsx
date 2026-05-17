import { Icon } from "./Icon";

export default function TableOfContents({ items }) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-xl border border-brand-line bg-brand-mist p-5"
    >
      <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-brand-ink">
        <Icon name="book" className="h-4 w-4 text-brand-blue" />
        In this guide
      </p>
      <ol className="mt-3 space-y-1.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-baseline gap-2.5 text-sm text-brand-slate transition-colors hover:text-brand-blue"
            >
              <span className="font-display text-xs font-bold text-brand-blue/60 group-hover:text-brand-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
