const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const { DateTime } = require("luxon");

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
  eleventyConfig.addFilter("isoDate", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toISO()
  );
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
