"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";
import Logo from "./Logo";
import { Icon } from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
      {/* trust strip */}
      <div className="hidden bg-brand-ink text-white sm:block">
        <div className="container-site flex h-8 items-center justify-between text-xs">
          <span className="flex items-center gap-2 text-white/80">
            <Icon name="shield" className="h-3.5 w-3.5 text-brand-orange" />
            Independent hearing-safety research &amp; product guides
          </span>
          <span className="text-white/60">
            Trusted advice — never an online store
          </span>
        </div>
      </div>

      <div className="container-site flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-display font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-brand-blue"
                  : "text-brand-ink/80 hover:text-brand-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/best-ear-protection"
            className="hidden btn-orange !px-4 !py-2 text-sm md:inline-flex"
          >
            See Top Picks
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-brand-line p-2 text-brand-ink lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-brand-line bg-white lg:hidden">
          <div className="container-site flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-display font-semibold ${
                  isActive(item.href)
                    ? "bg-brand-bluelight text-brand-blue"
                    : "text-brand-ink/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/best-ear-protection"
              onClick={() => setOpen(false)}
              className="btn-orange mt-2 text-sm"
            >
              See Top Picks
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
