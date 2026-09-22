const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const { DateTime } = require("luxon");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // --- Plugins ---
  eleventyConfig.addPlugin(pluginRss);

  // --- Markdown ---
  const md = markdownIt({ html: true, linkify: true, typographer: true })
    .use(markdownItAnchor)
    .use(markdownItFootnote);

  // Open external links in a new tab.
  const defaultLinkOpen =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const href = token.attrGet("href");
    if (href && /^https?:\/\//.test(href)) {
      token.attrSet("target", "_blank");
      token.attrSet("rel", "noopener noreferrer");
    }
    return defaultLinkOpen(tokens, idx, options, env, self);
  };

  eleventyConfig.setLibrary("md", md);

  // --- Passthrough ---
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/favicon_io": "/" });
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/BingSiteAuth.xml");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // --- Date filters ---
  eleventyConfig.addFilter("readableDate", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("d LLLL yyyy")
  );
  eleventyConfig.addFilter("htmlDateString", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-LL-dd")
  );
  // Accepts a JS Date (what YAML gives for an unquoted date) or an ISO string
  // (what a quoted front-matter value gives). Throws on anything unparseable so
  // a typo fails the build instead of silently emitting null metadata.
  eleventyConfig.addFilter("isoDate", (date) => {
    const dt =
      date instanceof Date
        ? DateTime.fromJSDate(date, { zone: "utc" })
        : typeof date === "string"
          ? DateTime.fromISO(date, { zone: "utc" })
          : DateTime.invalid("unsupported value");
    if (!dt.isValid) {
      throw new Error(`isoDate: cannot parse date value ${JSON.stringify(date)}`);
    }
    return dt.toISO();
  });
  eleventyConfig.addFilter("yearMonth", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy/LL")
  );
  eleventyConfig.addFilter("monthName", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("LLLL")
  );
  eleventyConfig.addFilter("year", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy")
  );
  eleventyConfig.addFilter("month2", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("LL")
  );

  // --- autoExcerpt filter ---
  eleventyConfig.addFilter("autoExcerpt", function (excerpt, content) {
    if (excerpt) return excerpt;
    const stripped = (content || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (stripped.length <= 155) return stripped;
    return stripped.substring(0, 155).replace(/\s+\S*$/, "") + "…";
  });

  // --- categoryDisplayName filter ---
  eleventyConfig.addFilter("categoryDisplayName", function (slug) {
    const str = Array.isArray(slug) ? slug[0] : String(slug || "");
    const categories = this.ctx?.categoryLabels || {};
    if (categories[str]) return categories[str];
    return str
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  });

  // --- topicTag filter ---
  // Renders a category label as a single hashtag-style topic tag. Threads
  // disallows spaces, ampersands and periods in its intent `tag` parameter and
  // caps it at 50 characters, so strip to alphanumerics and keep the label's
  // own capitalisation ("AI & Craft" -> "AICraft").
  eleventyConfig.addFilter("topicTag", (str) =>
    String(str || "")
      .replace(/[^A-Za-z0-9]+/g, "")
      .slice(0, 50)
  );

  // --- assetUrl filter ---
  // Appends a short content hash to a local asset URL so a changed file gets a
  // new URL. Cloudflare serves /assets with max-age=14400 while HTML revalidates
  // on every request, so without this a returning reader can be handed new HTML
  // alongside a stylesheet up to four hours stale. Deliberately uncached and
  // throwing: reading a handful of small files per build is cheap, and a typo
  // should fail the build rather than quietly ship an unhashed URL.
  eleventyConfig.addFilter("assetUrl", (url) => {
    const rel = String(url || "").replace(/^\//, "");
    const file = path.join(__dirname, "src", rel);
    let contents;
    try {
      contents = fs.readFileSync(file);
    } catch (err) {
      throw new Error(`assetUrl: cannot read ${file} for "${url}"`);
    }
    const hash = crypto.createHash("sha1").update(contents).digest("hex").slice(0, 8);
    return `${url}?v=${hash}`;
  });

  // --- xmlEscape filter (RSS plugin v2 no longer registers it globally) ---
  eleventyConfig.addFilter("xmlEscape", (str) =>
    (str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;")
  );

  // --- head filter (first N items of an array) ---
  eleventyConfig.addFilter("head", (array, n) =>
    Array.isArray(array) ? array.slice(0, n) : []
  );

  // --- slugify filter ---
  eleventyConfig.addFilter("slugify", (str) =>
    str
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
  );

  // --- Collections ---

  // All published posts, newest first
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/posts/*.md")
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Posts grouped by YYYY/MM for archive pages
  eleventyConfig.addCollection("postsByYearMonth", function (collectionApi) {
    const posts = collectionApi
      .getFilteredByGlob("src/blog/posts/*.md")
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.date - a.date);

    const groups = {};
    posts.forEach((post) => {
      const key = DateTime.fromJSDate(post.date, { zone: "utc" }).toFormat(
        "yyyy/LL"
      );
      if (!groups[key]) groups[key] = [];
      groups[key].push(post);
    });

    // Return as sorted array of { key, year, month, posts }
    return Object.keys(groups)
      .sort()
      .reverse()
      .map((key) => {
        const [year, month] = key.split("/");
        return { key, year, month, posts: groups[key] };
      });
  });

  // Category slugs (one per page, used for category page generation)
  eleventyConfig.addCollection("postsByCategory", function (collectionApi) {
    const posts = collectionApi
      .getFilteredByGlob("src/blog/posts/*.md")
      .filter((p) => !p.data.draft);

    const seen = new Set();
    posts.forEach((post) => {
      const raw = post.data.categories || [];
      const cats = Array.isArray(raw) ? raw.flat() : [raw];
      cats.forEach((cat) => seen.add(String(cat)));
    });
    return [...seen].sort();
  });

  // Filter: posts belonging to a given category slug
  eleventyConfig.addFilter("postsInCategory", function (catSlug) {
    const target = Array.isArray(catSlug) ? catSlug[0] : String(catSlug || "");
    const all = this.ctx?.collections?.posts || [];
    return all.filter((post) => {
      const raw = post.data.categories || [];
      const cats = (Array.isArray(raw) ? raw : [raw]).map(String);
      return cats.includes(target);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
