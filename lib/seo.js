import { site } from "./site";

/** Stable share image. Relative so metadataBase turns it into an absolute URL. */
export const shareImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Ear Guards — hearing protection guides for work, shooting, concerts, sleep, and kids",
};

/**
 * Build page metadata whose Open Graph and Twitter tags match that page.
 * Next replaces the parent openGraph object instead of deep-merging it, so a
 * partial override drops site name and images, and omitting openGraph keeps
 * the homepage title and URL. Always set the full block here.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  ogType = "website",
  robots,
  canonical = true,
  publishedTime,
  modifiedTime,
}) {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const openGraph = {
    title,
    description,
    url,
    siteName: site.name,
    locale: "en_US",
    type: ogType,
    images: [shareImage],
  };
  if (publishedTime) openGraph.publishedTime = publishedTime;
  if (modifiedTime) openGraph.modifiedTime = modifiedTime;

  const meta = {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };

  if (canonical) {
    meta.alternates = { canonical: path === "/" ? "/" : path };
  }
  if (robots) meta.robots = robots;
  return meta;
}

/** JSON-LD safe to embed in a script tag. */
export function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
