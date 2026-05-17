export const site = {
  name: "Ear Guards",
  domain: "EarGuards.com",
  url: "https://earguards.com",
  tagline: "Protect Your Hearing Before It's Gone",
  description:
    "Practical guides, product comparisons, and safety resources for choosing the right ear protection for work, sleep, shooting, concerts, travel, and everyday noise.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Best Ear Protection", href: "/best-ear-protection" },
  { label: "Hearing Safety Guides", href: "/hearing-safety-guides" },
  { label: "Noise Level Database", href: "/noise-level-database" },
  { label: "OSHA Resources", href: "/osha-hearing-protection" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export const affiliateDisclosureText =
  "EarGuards.com may earn a commission when you buy through links on our site. This helps support our free guides. We only recommend products we believe in.";

export const categories = [
  {
    title: "Ear Protection for Work",
    slug: "work",
    blurb: "Job-site, factory, and construction hearing protection rated for daily, high-decibel exposure.",
    icon: "hardhat",
    accent: "orange",
  },
  {
    title: "Ear Protection for Shooting",
    slug: "shooting",
    blurb: "Electronic and passive options for ranges, hunting, and tactical use.",
    icon: "target",
    accent: "blue",
  },
  {
    title: "Ear Protection for Sleep",
    slug: "sleep",
    blurb: "Low-profile, comfortable plugs that block snoring, traffic, and noisy neighbors.",
    icon: "moon",
    accent: "blue",
  },
  {
    title: "Ear Protection for Concerts",
    slug: "concerts",
    blurb: "High-fidelity plugs that lower volume without muffling the music.",
    icon: "music",
    accent: "orange",
  },
  {
    title: "Ear Protection for Kids",
    slug: "kids",
    blurb: "Properly sized earmuffs for infants, toddlers, and school-age children.",
    icon: "child",
    accent: "blue",
  },
  {
    title: "Ear Protection for Sensory Sensitivity",
    slug: "sensory",
    blurb: "Calming, comfortable options for autism, ADHD, and sensory processing needs.",
    icon: "heart",
    accent: "orange",
  },
  {
    title: "Ear Protection for Motorsports",
    slug: "motorsports",
    blurb: "Wind- and engine-noise solutions for riders, racers, and pit crews.",
    icon: "bike",
    accent: "blue",
  },
  {
    title: "Ear Protection for Travel",
    slug: "travel",
    blurb: "Plane, train, and hotel-ready plugs for quieter, more restful trips.",
    icon: "plane",
    accent: "orange",
  },
];

// Homepage comparison table preview
export const comparisonPreview = {
  columns: ["Product Type", "Best For", "Pros", "Cons", "Recommended Guide"],
  rows: [
    {
      type: "Foam Ear Plugs",
      bestFor: "Sleep, travel, general noise",
      pros: ["Cheap & disposable", "High NRR (up to 33 dB)", "Comfortable for sleep"],
      cons: ["Single-use", "Can muffle speech"],
      guide: { label: "Best Ear Plugs for Sleeping", href: "/blog/best-ear-plugs-for-sleeping" },
    },
    {
      type: "Earmuffs",
      bestFor: "Work sites, yard work, shooting",
      pros: ["Reusable for years", "Easy on/off", "One size fits most"],
      cons: ["Bulky", "Warm in summer"],
      guide: { label: "Ear Plugs vs Ear Muffs", href: "/blog/ear-plugs-vs-ear-muffs" },
    },
    {
      type: "Electronic Earmuffs",
      bestFor: "Shooting ranges & hunting",
      pros: ["Amplifies speech", "Blocks impulse noise", "Situational awareness"],
      cons: ["Needs batteries", "Higher cost"],
      guide: { label: "Best Ear Protection for Shooting", href: "/blog/best-ear-protection-for-shooting" },
    },
    {
      type: "Hi-Fi Concert Plugs",
      bestFor: "Live music & festivals",
      pros: ["Flat attenuation", "Reusable", "Discreet"],
      cons: ["Lower NRR", "Pricier than foam"],
      guide: { label: "Best Ear Protection for Concerts", href: "/blog/best-ear-protection-for-concerts" },
    },
  ],
};

// Noise Level Database
export const noiseLevels = [
  { source: "Normal breathing", db: 10, risk: "safe", note: "Threshold of human hearing range." },
  { source: "Whisper / quiet library", db: 30, risk: "safe", note: "No protection needed." },
  { source: "Refrigerator hum", db: 40, risk: "safe", note: "Comfortable background level." },
  { source: "Normal conversation", db: 60, risk: "safe", note: "Safe for unlimited exposure." },
  { source: "Busy city traffic", db: 75, risk: "safe", note: "Still below the risk threshold." },
  { source: "Vacuum cleaner", db: 80, risk: "caution", note: "Prolonged exposure may begin to fatigue ears." },
  { source: "Heavy city traffic / blender", db: 85, risk: "caution", note: "OSHA action level. Limit to 8 hours." },
  { source: "Lawn mower / motorcycle", db: 90, risk: "caution", note: "Safe limit drops to ~2 hours per day." },
  { source: "Hand drill / hair dryer", db: 95, risk: "danger", note: "Hearing damage possible in under 1 hour." },
  { source: "Subway train / wood shop", db: 100, risk: "danger", note: "Limit exposure to roughly 15 minutes." },
  { source: "Rock concert / chainsaw", db: 110, risk: "danger", note: "Damage possible in under 2 minutes." },
  { source: "Ambulance siren / nightclub", db: 120, risk: "danger", note: "Pain threshold. Protection required." },
  { source: "Jet engine at takeoff", db: 140, risk: "extreme", note: "Immediate, permanent damage risk." },
  { source: "Firearm / fireworks at close range", db: 150, risk: "extreme", note: "Instant hearing damage. Always wear protection." },
];

export const oshaFacts = [
  {
    title: "85 dBA Action Level",
    body: "OSHA requires a hearing conservation program when worker noise exposure reaches or exceeds an 8-hour time-weighted average of 85 decibels.",
  },
  {
    title: "90 dBA Permissible Exposure Limit (PEL)",
    body: "The legal 8-hour exposure limit is 90 dBA. Above this, employers must use engineering or administrative controls.",
  },
  {
    title: "5 dB Exchange Rate",
    body: "For every 5 dB increase in noise, the permitted exposure time is cut in half — 90 dBA for 8 hours, 95 dBA for 4 hours, 100 dBA for 2 hours.",
  },
  {
    title: "Free Hearing Protection",
    body: "Employers must provide hearing protectors at no cost to all workers exposed at or above 85 dBA, with a choice of at least one plug and one muff.",
  },
  {
    title: "Annual Audiometric Testing",
    body: "Workers in a hearing conservation program must receive a baseline and annual hearing test, provided free of charge.",
  },
  {
    title: "Training Requirements",
    body: "Employers must train exposed workers annually on the effects of noise, the use of protectors, and the purpose of audiometric testing.",
  },
];
