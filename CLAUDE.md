# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Author website for Maureen Avis (MOAVIS) — `https://moavis.nexus`. Started as a single
static `index.html` and has since grown into an [Eleventy](https://www.11ty.dev/) (11ty v3)
static site with a blog. Still a flat site: no database, no server, no runtime — every page
is generated to static HTML at build time.

**GitHub remote**: `https://github.com/Seonyx/moavis.git` (branch: `master`)
**Deployment**: Pushing to `master` auto-deploys to Cloudflare Pages. Cloudflare runs the
build (`npm run build`) and serves the `_site/` output.

## Build & Develop

Node version pinned in `.nvmrc`. Eleventy builds `src/` → `_site/`. Pagefind then indexes
`_site/` for client-side search.

```bash
npm install
npm run dev      # eleventy --serve, live preview at http://localhost:8080
npm run build    # eleventy build + pagefind index (what Cloudflare runs)
```

`npm run build:eleventy` and `npm run build:pagefind` run the two stages individually.

`_site/`, `node_modules/`, and `package-lock.json` are gitignored — never commit build output.

## Architecture

Eleventy config in `.eleventy.js`. Input `src/`, output `_site/`, includes `src/_includes`,
global data `src/_data`. Template engine is Nunjucks (`.njk`); Markdown for posts.

```
src/
  index.njk              # home page (the three books)
  bio.njk                # author bio page
  links.njk              # links page
  feed.njk               # RSS feed  -> /blog/feed.xml
  sitemap.njk            # sitemap   -> /sitemap.xml
  robots.txt             # passthrough-copied to root
  BingSiteAuth.xml       # Bing Webmaster verification, passthrough-copied to root
  _data/
    site.json            # site-wide metadata (name, url, GA id, feed url, OG image)
    categoryLabels.json  # slug -> display name map for blog categories
  _includes/
    layouts/             # base.njk, page.njk, post.njk
    partials/            # header, footer, sidebar, post-card, JSON-LD blocks
  blog/
    blog.njk             # blog index
    archive.njk          # year/month archive pages
    category.njk         # per-category pages
    posts/
      *.md               # one Markdown file per post (date-prefixed filename)
      posts.json         # shared front-matter defaults for all posts
  assets/
    css/                 # site.css, home.css, blog.css, bio.css, links.css
    images/              # covers, portraits, post images, og-default.jpg
  favicon_io/            # favicons + site.webmanifest, passthrough-copied to root
```

### Passthrough copies (served at site root)

Files outside the template pipeline are copied verbatim via `addPassthroughCopy` in
`.eleventy.js`. To add a file that must live at the deployed root (e.g. a search-engine
verification file), put it in `src/` and add a passthrough line — do **not** drop it in the
project root, where Eleventy ignores it. Current passthroughs: `src/assets`,
`src/assets/images`, `src/favicon_io` (→ `/`), `src/robots.txt`, `src/BingSiteAuth.xml`.

### Custom filters & collections

`.eleventy.js` defines date filters (Luxon), `autoExcerpt`, `categoryDisplayName`,
`slugify`, `head`, `xmlEscape`, and a `postsInCategory` filter, plus collections `posts`,
`postsByYearMonth`, and `postsByCategory`. Posts with `draft: true` are excluded.

## Content

Three novels, in order on the home page:
1. **The Mayfly Mutiny** — published; has Amazon buy link with GA event tracking (`amazon_click`).
2. **Chilli Racers** — coming Summer 2026.
3. **Carrier to Yesterday** — coming Autumn 2026.

Blog posts live in `src/blog/posts/` as date-prefixed Markdown files. Use the
`new-blog-post` skill to scaffold one. Remember: no em dashes in post content.

**Analytics**: Google Analytics `G-9DS7ZRZEF2` (gtag.js).
**Substack**: `https://maureenavis.substack.com`
**Discord invite**: `https://discord.gg/hXXyQsQYG8`
**Agent contact**: `https://seonyx.com/contact`
