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

Production build:

```bash
npm run build
npm run start
```

## Tech stack

- **Next.js 16** — App Router, static generation, dynamic article routes
- **React 18**
- **Tailwind CSS 3** — custom brand theme (blue / gray / safety-orange)
- Fonts: Libre Franklin (display) + Source Sans 3 (body)

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
