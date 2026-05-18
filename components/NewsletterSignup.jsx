"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { supabase } from "@/lib/supabase";

// variant: "panel" (full section) | "inline" (compact card)
export default function NewsletterSignup({ variant = "panel" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setLoading(true);
    await supabase.from("newsletter_subscribers").insert({ email });
    setLoading(false);
    setDone(true);
  };

  if (variant === "inline") {
    return (
      <div className="rounded-xl border border-brand-line bg-brand-bluelight p-5">
        <div className="flex items-center gap-2 text-brand-blue">
          <Icon name="mail" className="h-5 w-5" />
          <h3 className="font-display text-sm font-bold">
            Hearing safety tips, in your inbox
          </h3>
        </div>
        {done ? (
          <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-green-700">
            <Icon name="check" className="h-4 w-4" />
            You&apos;re subscribed — thanks!
          </p>
        ) : (
          <form onSubmit={submit} className="mt-3 flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-blue"
            />
            <button type="submit" disabled={loading} className="btn-primary !px-4 !py-2.5 text-sm disabled:opacity-60">
              {loading ? "…" : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-3xl bg-brand-blue px-6 py-12 text-white sm:px-12">
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(242,106,27,0.5), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
          <Icon name="mail" className="h-3.5 w-3.5" />
          Free Newsletter
        </span>
        <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
          Get hearing safety tips and product guides
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-white/75 sm:text-base">
          Practical advice on protecting your hearing at work, home, and play —
          plus our latest product comparisons. No spam, unsubscribe anytime.
        </p>

        {done ? (
          <p className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-3 font-display font-bold">
            <Icon name="check" className="h-5 w-5 text-brand-orange" />
            You&apos;re on the list — check your inbox!
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mx-auto mt-6 flex max-w-md flex-col gap-2.5 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-lg border-0 px-4 py-3 text-sm text-brand-ink outline-none ring-2 ring-transparent focus:ring-brand-orange"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-orange shrink-0 !py-3 text-sm disabled:opacity-60"
            >
              {loading ? "Subscribing…" : "Subscribe Free"}
            </button>
          </form>
        )}
        <p className="mt-3 text-xs text-white/55">
          Join readers who take their hearing health seriously.
        </p>
      </div>
    </section>
  );
}
