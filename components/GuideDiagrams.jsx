const noiseRows = [
  { label: "Conversation", db: 60, width: "28%", bar: "bg-emerald-500" },
  { label: "City traffic", db: 75, width: "42%", bar: "bg-emerald-500" },
  { label: "Action level", db: 85, width: "52%", bar: "bg-amber-400", mark: true },
  { label: "Lawn mower", db: 90, width: "58%", bar: "bg-amber-400" },
  { label: "Power tools", db: 100, width: "68%", bar: "bg-brand-orange" },
  { label: "Rock concert", db: 110, width: "78%", bar: "bg-red-500" },
  { label: "Gunshot (peak)", db: 160, width: "100%", bar: "bg-red-700" },
];

function Figure({ title, caption, children, labelledBy }) {
  return (
    <figure
      className="not-prose my-2 overflow-hidden rounded-2xl border border-brand-line bg-white"
      aria-labelledby={labelledBy}
    >
      <figcaption
        id={labelledBy}
        className="border-b border-brand-line bg-brand-mist px-4 py-3 font-display text-sm font-bold text-brand-ink"
      >
        {title}
      </figcaption>
      <div className="p-4 sm:p-5">{children}</div>
      {caption ? (
        <p className="border-t border-brand-line px-4 py-3 text-xs leading-relaxed text-brand-slate">
          {caption}
        </p>
      ) : null}
    </figure>
  );
}

function NoiseBars({ emphasize = "action" }) {
  return (
    <Figure
      labelledBy="diagram-noise-bars"
      title="How loud common sounds are"
      caption="Approximate levels at a typical distance. A gunshot is a short peak, not an all-day average — that is why range protection is chosen differently from shop-floor protection."
    >
      <ul className="space-y-2.5">
        {noiseRows.map((row) => {
          const hot =
            (emphasize === "impulse" && row.label.startsWith("Gunshot")) ||
            (emphasize === "concert" && row.label.startsWith("Rock")) ||
            (emphasize === "action" && row.mark);
          return (
            <li key={row.label}>
              <div className="flex items-baseline justify-between gap-3 text-xs">
                <span
                  className={`font-display font-semibold ${hot ? "text-brand-ink" : "text-brand-ink/80"}`}
                >
                  {row.label}
                  {row.mark ? " · 8-hour risk line" : ""}
                </span>
                <span className="font-display font-bold text-brand-slate">
                  {row.db} dB
                </span>
              </div>
              <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-brand-mist">
                <div
                  className={`h-full rounded-full ${row.bar}`}
                  style={{ width: row.width }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </Figure>
  );
}

function NrrScale() {
  const steps = [
    { k: "Package NRR", v: "33", note: "Lab score, expert fit" },
    { k: "Subtract 7", v: "26", note: "OSHA-style adjustment" },
    { k: "Then halve it", v: "~13 dB", note: "A rough field estimate" },
  ];
  return (
    <Figure
      labelledBy="diagram-nrr-scale"
      title="From the package number to a field estimate"
      caption="Example uses NRR 33. This is a planning shortcut, not a personal fit test. A sealed lower-NRR plug beats a loose high-NRR one."
    >
      <ol className="grid gap-3 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.k}
            className="rounded-xl border border-brand-line bg-brand-mist/60 p-4"
          >
            <p className="text-[11px] font-bold uppercase tracking-wide text-brand-slate">
              Step {i + 1}
            </p>
            <p className="mt-1 font-display text-2xl font-extrabold text-brand-blue">
              {step.v}
            </p>
            <p className="mt-1 font-display text-sm font-bold text-brand-ink">
              {step.k}
            </p>
            <p className="mt-1 text-xs text-brand-slate">{step.note}</p>
          </li>
        ))}
      </ol>
      <svg
        viewBox="0 0 640 72"
        className="mt-4 hidden w-full sm:block"
        role="img"
        aria-label="Arrow from package NRR 33, minus 7, then divided by 2, to about 13 decibels."
      >
        <title>NRR 33, minus 7, then halved, is about 13 dB</title>
        <rect x="8" y="16" width="150" height="40" rx="8" fill="#EAF1FB" />
        <text x="83" y="41" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1559B5">
          NRR 33
        </text>
        <path d="M166 36h70" stroke="#F26A1B" strokeWidth="3" />
        <path d="M228 30l12 6-12 6" fill="#F26A1B" />
        <text x="198" y="24" textAnchor="middle" fontSize="11" fill="#5A6573">
          − 7
        </text>
        <rect x="248" y="16" width="120" height="40" rx="8" fill="#FFF1E6" />
        <text x="308" y="41" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1A2230">
          26
        </text>
        <path d="M376 36h70" stroke="#F26A1B" strokeWidth="3" />
        <path d="M438 30l12 6-12 6" fill="#F26A1B" />
        <text x="408" y="24" textAnchor="middle" fontSize="11" fill="#5A6573">
          ÷ 2
        </text>
        <rect x="458" y="16" width="170" height="40" rx="8" fill="#1559B5" />
        <text x="543" y="41" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
          ~13 dB estimate
        </text>
      </svg>
    </Figure>
  );
}

function FoamFit() {
  const steps = [
    {
      title: "Roll",
      body: "Compress the plug into a thin, crease-free cylinder.",
    },
    {
      title: "Pull",
      body: "Reach over your head and pull the ear up and back.",
    },
    {
      title: "Hold",
      body: "Insert and hold until the foam finishes expanding.",
    },
  ];
  return (
    <Figure
      labelledBy="diagram-foam-fit"
      title="Seating a foam plug"
      caption="A correctly seated plug is barely visible from the front. If it hurts within an hour, it is likely too large or too deep."
    >
      <ol className="grid gap-4 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="text-center">
            <svg
              viewBox="0 0 120 88"
              className="mx-auto h-20 w-28"
              aria-hidden="true"
            >
              <rect width="120" height="88" rx="12" fill="#F5F7FA" />
              <circle cx="78" cy="44" r="22" fill="none" stroke="#1559B5" strokeWidth="3" />
              <path
                d="M62 44c6-10 16-14 22-8"
                fill="none"
                stroke="#1559B5"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {i === 0 && (
                <rect x="22" y="38" width="28" height="10" rx="5" fill="#F26A1B" />
              )}
              {i === 1 && (
                <path
                  d="M28 58c8-18 18-22 22-10"
                  fill="none"
                  stroke="#F26A1B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )}
              {i === 2 && (
                <rect x="58" y="40" width="22" height="8" rx="4" fill="#F26A1B" />
              )}
            </svg>
            <p className="mt-2 font-display text-sm font-bold text-brand-ink">
              {i + 1}. {step.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-brand-slate">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Figure>
  );
}

function Attenuation() {
  const bands = ["Low", "Mid", "High"];
  return (
    <Figure
      labelledBy="diagram-attenuation"
      title="Foam muffles the mix. A flat filter turns it down."
      caption="Foam blocks high frequencies much more than lows, which is why music sounds dull. High-fidelity filters reduce the bands more evenly."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { name: "Foam plug", cuts: [18, 28, 46], tone: "bg-brand-slate" },
          { name: "Hi-fi filter", cuts: [20, 22, 24], tone: "bg-brand-blue" },
        ].map((col) => (
          <div key={col.name}>
            <p className="font-display text-sm font-bold text-brand-ink">
              {col.name}
            </p>
            <ul className="mt-3 flex items-end gap-3" aria-label={`${col.name} reduction by frequency band`}>
              {bands.map((band, i) => (
                <li key={band} className="flex-1 text-center">
                  <div className="flex h-28 items-end rounded-md bg-brand-mist px-2">
                    <div
                      className={`w-full rounded-t-md ${col.tone}`}
                      style={{ height: `${col.cuts[i] * 2}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] font-semibold text-brand-slate">
                    {band}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Figure>
  );
}

function MuffSeal() {
  return (
    <Figure
      labelledBy="diagram-muff-seal"
      title="The cushion has to close around the whole ear"
      caption="Kids' muffs work when the cup surrounds the ear with no gap. Hair, hats, and a band that is too loose all leak sound. Recheck the fit as a child grows."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Sealed",
            detail: "Cushion fully surrounds the ear. This is the fit you want.",
            stroke: "#1559B5",
            leak: false,
          },
          {
            title: "Gapped",
            detail: "A gap at the bottom or around glasses lets noise straight in.",
            stroke: "#F26A1B",
            leak: true,
          },
        ].map((panel) => (
          <div
            key={panel.title}
            className="rounded-xl border border-brand-line p-4 text-center"
          >
            <svg viewBox="0 0 160 110" className="mx-auto h-24 w-40" aria-hidden="true">
              <ellipse cx="80" cy="58" rx="46" ry="36" fill="#EAF1FB" stroke={panel.stroke} strokeWidth="6" />
              <ellipse cx="80" cy="58" rx="16" ry="22" fill="none" stroke="#1A2230" strokeWidth="2" />
              {panel.leak && (
                <path d="M48 82c10 10 54 10 64 0" fill="none" stroke="#F26A1B" strokeWidth="3" strokeDasharray="4 3" />
              )}
            </svg>
            <p className="font-display text-sm font-bold text-brand-ink">
              {panel.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-brand-slate">
              {panel.detail}
            </p>
          </div>
        ))}
      </div>
    </Figure>
  );
}

function PlugsVsMuffs() {
  return (
    <Figure
      labelledBy="diagram-plugs-muffs"
      title="Where each protector actually seals"
      caption="Plugs seal inside the canal and can post the highest lab NRR. Muffs seal around the outer ear and are harder to fit wrong. Above about 105 dBA, wear both — and do not add the two NRR numbers."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-brand-mist p-4">
          <p className="font-display text-sm font-bold text-brand-ink">Ear plugs</p>
          <p className="mt-1 text-xs text-brand-slate">Seal inside the ear canal</p>
          <p className="mt-3 font-display text-lg font-extrabold text-brand-blue">
            Lab NRR up to 33 dB
          </p>
          <p className="mt-1 text-xs text-brand-slate">
            Best in heat, under a hard hat, and when you need the highest single rating.
          </p>
        </div>
        <div className="rounded-xl bg-brand-orangelight/70 p-4">
          <p className="font-display text-sm font-bold text-brand-ink">Ear muffs</p>
          <p className="mt-1 text-xs text-brand-slate">Seal around the outer ear</p>
          <p className="mt-3 font-display text-lg font-extrabold text-brand-orange">
            Lab NRR about 20–31 dB
          </p>
          <p className="mt-1 text-xs text-brand-slate">
            Best for stop-start work, cold weather, and a consistent fit.
          </p>
        </div>
      </div>
    </Figure>
  );
}

const diagrams = {
  "noise-bars": () => <NoiseBars emphasize="action" />,
  "noise-impulse": () => <NoiseBars emphasize="impulse" />,
  "noise-concert": () => <NoiseBars emphasize="concert" />,
  "nrr-scale": NrrScale,
  "foam-fit": FoamFit,
  attenuation: Attenuation,
  "muff-seal": MuffSeal,
  "plugs-muffs": PlugsVsMuffs,
};

export default function GuideDiagram({ id }) {
  const Diagram = diagrams[id];
  if (!Diagram) return null;
  return <Diagram />;
}
