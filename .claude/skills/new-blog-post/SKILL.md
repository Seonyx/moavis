# Skill: new-blog-post

Standard checklist for adding a new blog post to moavis.nexus.

## Trigger

User asks to add, write, or publish a new blog post.

## Steps

1. **Gather required information** — ask the user for:
   - Title
   - Categories (suggest from existing: `writing-process`, `publishing-business`, `ai-and-craft`, `news-and-updates`)
   - Excerpt (~155 chars, used in listings, RSS, meta description)
   - Body content (Markdown)
   - Date (default: today)
   - Hero image (optional — if provided, save to `src/assets/images/posts/`)

2. **Derive the slug** — kebab-case from title, ASCII only.
   Example: "My First Post" → `my-first-post`

3. **Create the file** at `src/blog/posts/YYYY-MM-DD-slug.md`:
   ```markdown
   ---
   title: "Post title"
   date: YYYY-MM-DD
   categories:
     - category-slug
   excerpt: "~155 char summary."
   draft: false
   ---

   Post body in Markdown.
   ```

4. **Run the build** to confirm it produces no errors:
   ```
   npm run build
   ```
   The build command is `npm run build:eleventy && npm run build:pagefind`.

5. **Show the user** the file diff and the local URL (`/blog/posts/YYYY-MM-DD-slug/`).

6. **Wait for explicit go-ahead** before committing.

7. **Commit and push** on approval:
   ```
   git add src/blog/posts/YYYY-MM-DD-slug.md
   git commit -m 'blog: add "Post title"'
   git push
   ```

## Notes

- `draft: true` in front-matter excludes the post from the live site without deleting it.
- Category slugs not in `src/_data/categoryLabels.json` still generate pages automatically — display name is auto-derived by title-casing the slug.
- Post permalink is `/blog/posts/YYYY-MM-DD-slug/`, derived by Eleventy's default from the filename (date prefix included). There is no `permalink` override for posts. To change a single post's URL, set `permalink` in its front-matter.
- Images go in `src/assets/images/posts/` and are referenced as `/assets/images/posts/filename.jpg`.
- The `excerpt` field is optional — the build auto-derives it from the first ~155 chars of body content if omitted — but providing it explicitly produces better social cards.
