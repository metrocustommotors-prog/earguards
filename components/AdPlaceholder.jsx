// Display ad placeholder. Swap the inner markup for a real ad unit
// (e.g. Google AdSense / Mediavine / Raptive) when monetizing.
// format: "leaderboard" | "rectangle" | "inline" | "sidebar"

// Intentionally disabled until an ad network is connected — returns null so
// all ad slots are hidden site-wide without removing them from the codebase.
// To re-enable, replace the early return below with the actual ad markup.
export default function AdPlaceholder({ format = "leaderboard", label }) {
  return null;
}
