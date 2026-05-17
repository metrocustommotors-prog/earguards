import Link from "next/link";
import { Icon } from "./Icon";

// Flexible comparison table:
// - Simple mode: rows are arrays of strings/cells matching columns.
// - Rich mode: rows are objects {type, bestFor, pros[], cons[], guide{label,href}}
//   used by the homepage comparison preview.

function ProsList({ items, type }) {
  return (
    <ul className="space-y-1">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-1.5 text-xs leading-snug">
          <Icon
            name={type === "pro" ? "check" : "x"}
            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
              type === "pro" ? "text-green-600" : "text-red-500"
            }`}
          />
          <span className="text-brand-ink/80">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ComparisonTable({ columns, rows, rich = false, caption }) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-line">
      {caption && (
        <div className="border-b border-brand-line bg-brand-mist px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-brand-slate">
          {caption}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-brand-ink text-white">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-line">
            {rich
              ? rows.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-white align-top transition-colors hover:bg-brand-bluelight/40"
                  >
                    <td className="px-4 py-3.5 font-display text-sm font-bold text-brand-ink">
                      {row.type}
                    </td>
                    <td className="px-4 py-3.5 text-sm text-brand-slate">
                      {row.bestFor}
                    </td>
                    <td className="px-4 py-3.5">
                      <ProsList items={row.pros} type="pro" />
                    </td>
                    <td className="px-4 py-3.5">
                      <ProsList items={row.cons} type="con" />
                    </td>
                    <td className="px-4 py-3.5">
                      <Link
                        href={row.guide.href}
                        className="inline-flex items-center gap-1 text-xs font-display font-bold text-brand-blue hover:underline"
                      >
                        {row.guide.label}
                        <Icon name="arrow" className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))
              : rows.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-white transition-colors hover:bg-brand-bluelight/40"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3.5 text-sm ${
                          j === 0
                            ? "font-display font-bold text-brand-ink"
                            : "text-brand-slate"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
