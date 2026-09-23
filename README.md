# Ear Guards — EarGuards.com

A modern, SEO-focused **content authority website** for the hearing-protection
niche. Built with **Next.js 16 (App Router)**, **React**, and **Tailwind CSS**.

> Protect Your Hearing Before It's Gone

This is a **content site**, not an ecommerce store. It is designed to earn
revenue through display ads, affiliate links, sponsored content, and lead
generation. There is no cart or checkout — affiliate actions are placeholder
buttons ("Check Price", "Read Review", "Compare Options").

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build (Bolt / Next.js, unchanged):

```bash
npm run build
npm run start
```

## Cloudflare Workers

`npm run build` still builds the Next.js app for Bolt. Workers deploys use vinext and do not change DNS.

Production publishes the Worker named `earguards` on `workers.dev` only. The script clears `CLOUDFLARE_ENV` and passes `--name earguards` with no `--env`. `npm run deploy:preview` is separate: the preview build bakes the name `earguards-preview`, then `--preview` runs `wrangler deploy --env preview` against that generated config, which appends another `-preview` and publishes `earguards-preview-preview`.

```bash
export CLOUDFLARE_API_TOKEN=...   # Edit Cloudflare Workers
export CLOUDFLARE_ACCOUNT_ID=...  # account that owns the workers.dev subdomain
npm ci
npm run deploy
```

`npm run deploy` runs:

```bash
env -u CLOUDFLARE_ENV vinext-cloudflare deploy --name earguards --config dist/server/wrangler.json
```

Wrangler prints the workers.dev URL. On the same account as the approved preview, that is `https://earguards.friscolounge.workers.dev`.

`npm run deploy:preview` is only the approved preview Worker `earguards-preview-preview`. Do not use it for production.

### Attach earguards.com and www

Do this only when HTTP cutover is approved. It does not belong in the default deploy. Leave Bolt in place until the hostnames answer from the Worker. Do not change MX, SPF, DKIM, or DMARC.

Preferred: Workers Custom Domains on zone `earguards.com`. Cloudflare creates the hostname DNS record and certificate. A Custom Domain cannot be added while that hostname still has a CNAME, so delete only the apex and `www` records that point at Bolt (`site-dns.bolt.host`) first. Then:

```bash
curl -fsS -X PUT "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/workers/domains" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"hostname":"earguards.com","service":"earguards","zone_name":"earguards.com"}'

curl -fsS -X PUT "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/workers/domains" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"hostname":"www.earguards.com","service":"earguards","zone_name":"earguards.com"}'
```

The same attachment can be done by uncommenting the `routes` block in `wrangler.jsonc` (both patterns use `"custom_domain": true` and `"zone_name": "earguards.com"`) and running `npm run deploy` again.

Zone routes are the alternative when the hostnames should stay proxied on the zone without Workers creating DNS records. They only run for orange-cloud hostnames:

```jsonc
"routes": [
  { "pattern": "earguards.com/*", "zone_name": "earguards.com" },
  { "pattern": "www.earguards.com/*", "zone_name": "earguards.com" }
]
```

## Tech stack

- **Next.js 16** — App Router, static generation, dynamic article routes
- **React 18**
- **Tailwind CSS 3** — custom brand theme (blue / gray / safety-orange)
- Fonts: self-hosted Libre Franklin (display) + Source Sans 3 (body). The range NRR card also self-hosts Barlow Condensed and EB Garamond. Files live in `public/fonts/` (latin subset, SIL Open Font License).

## Project structure

```
app/
  layout.jsx                 Root layout, global metadata, JSON-LD org schema
  page.jsx                   Homepage (hero, categories, guides, etc.)
  best-ear-protection/       Best-by-use-case hub
  hearing-safety-guides/     Educational guide hub
  noise-level-database/      Color-coded decibel reference table
  osha-hearing-protection/   OSHA compliance resource page
  blog/                      Blog index
  blog/[slug]/               Dynamic SEO article template (10 articles)
  about/  contact/           Company pages
  affiliate-disclosure/      Legal pages
  privacy-policy/  terms/
  sitemap.js  robots.js      SEO infrastructure
  not-found.jsx              Custom 404

components/                  10+ reusable components (see below)
lib/
  site.js                    Site config, nav, categories, noise data, OSHA facts
  articles.js                All 10 full articles + helpers
```

## Reusable components

Header, Footer, ArticleCard, CategoryCard, ComparisonTable,
AffiliateDisclosure, FAQAccordion, NewsletterSignup, AdPlaceholder,
ProductRecommendationCard — plus Icon, Logo, PageHero, SectionHeading,
TableOfContents, and ContactForm.

## SEO features

- Per-page metadata (title, description, canonical, Open Graph, Twitter)
- `generateMetadata` + `generateStaticParams` for article routes
- JSON-LD structured data: Organization, WebSite, Article, FAQPage, BreadcrumbList
- Clean URL structure, dynamic `sitemap.xml` and `robots.txt`
- Schema-ready article layout for fast content expansion

## Adding a new article

Add an object to the `articles` array in `lib/articles.js` following the
existing shape (slug, seoTitle, metaDescription, intro, comparison, products,
sections, faq, finalRecommendation, related). The route, metadata, sitemap
entry, and full template render automatically.

## Monetization placeholders

`AdPlaceholder` marks ad slots (leaderboard / rectangle / inline / sidebar).
`AffiliateDisclosure` and `ProductRecommendationCard` handle affiliate
compliance. Wire `ContactForm` and `NewsletterSignup` to a real email/CRM
service before launch. Replace placeholder ad slots with your ad network code.
