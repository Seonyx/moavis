# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Author website for Maureen Avis (MOAVIS). A static single-page site with no build system — just `index.html` and image assets, deployed to Cloudflare Pages via GitHub push.

**GitHub remote**: `https://github.com/Seonyx/moavis.git` (branch: `master`)  
**Deployment**: Pushing to `master` auto-deploys to Cloudflare Pages.

## Development

No build step. To preview locally, serve `index.html` from any static file server:

```bash
python3 -m http.server 8080
```

## Architecture

Everything lives in `index.html` (273 lines):

- `<head>` — Google Analytics (`G-9DS7ZRZEF2`, gtag.js), Google Fonts (Cormorant Garamond, Special Elite), and all CSS inline.
- `<body>` — Header, author portrait, three book sections, interaction zone (Discord + agent contact), footer.

No JavaScript beyond GA event tracking. No external CSS files. No dependencies.

**Responsive breakpoint**: 600px (flexbox layout, media queries).

## Content

Three novels, in order on the page:
1. **The Mayfly Mutiny** — published; has Amazon buy link with GA event tracking (`amazon_click`).
2. **Chilli Racers** — coming Summer 2026.
3. **Carrier to Yesterday** — coming Autumn 2026.

**Discord invite**: `https://discord.gg/hXXyQsQYG8`  
**Agent contact**: `https://seonyx.com/contact`
