"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const topics = [
  "General question",
  "Correction or feedback",
  "Partnership or sponsorship",
  "Press inquiry",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0],
    message: "",
  });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    // Placeholder handler — wire to an email service or API route in production.
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-blue/20 bg-brand-bluelight/60 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-brand-ink">
          Thanks for reaching out
        </h3>
        <p className="mt-1.5 text-sm text-brand-slate">
          We have received your message and will respond by email soon.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-card md:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-display text-sm font-bold text-brand-ink">
            Name
          </span>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className="mt-1.5 w-full rounded-lg border border-brand-line bg-brand-mist px-3.5 py-2.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-blue focus:bg-white"
          />
        </label>
        <label className="block">
          <span className="font-display text-sm font-bold text-brand-ink">
            Email
          </span>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-lg border border-brand-line bg-brand-mist px-3.5 py-2.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-blue focus:bg-white"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="font-display text-sm font-bold text-brand-ink">
          Topic
        </span>
        <select
          value={form.topic}
          onChange={update("topic")}
          className="mt-1.5 w-full rounded-lg border border-brand-line bg-brand-mist px-3.5 py-2.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-blue focus:bg-white"
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className="font-display text-sm font-bold text-brand-ink">
          Message
        </span>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="How can we help?"
          className="mt-1.5 w-full resize-y rounded-lg border border-brand-line bg-brand-mist px-3.5 py-2.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-blue focus:bg-white"
        />
      </label>

      <button onClick={handleSubmit} className="btn-primary mt-5 w-full sm:w-auto">
        Send message
      </button>
      <p className="mt-3 text-xs text-brand-slate">
        This is a demo form. In production it would connect to an email service
        or CRM. We never share your details.
      </p>
    </div>
  );
}
