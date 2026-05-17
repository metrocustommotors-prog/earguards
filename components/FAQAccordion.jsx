"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-brand-line overflow-hidden rounded-xl border border-brand-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-white">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-bold text-brand-ink">
                  {item.q}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
                    isOpen
                      ? "bg-brand-blue text-white"
                      : "bg-brand-bluelight text-brand-blue"
                  }`}
                >
                  <Icon
                    name="chevron"
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-200 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-brand-slate">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
