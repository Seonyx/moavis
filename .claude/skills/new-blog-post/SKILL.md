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
   - Hero image (optional). The user normally stages it in the filesystem
     themselves, at `src/assets/images/posts/`. Confirm it is present there
     rather than assuming you must copy it; reference it in front-matter as
     `image: "/assets/images/posts/filename.jpg"`.
     **Filename case matters.** Dev is Windows (case-insensitive) but
     Cloudflare/Linux is case-sensitive, so the front-matter `image:` value
     must match the on-disk filename *exactly*, including case, or the hero
     404s live while looking fine locally. Check the real case with
     `git ls-files` or `Get-ChildItem` (NOT `Test-Path`, which ignores case).
     If they differ, rename the file (on Windows a case-only rename needs a
     two-step through a temp name) rather than trusting the local build.
   - Image alt text (optional, goes in `imageAlt`; without it the title is used).
   - SEO keywords (optional, go in `keywords` as a list).
   - Narration MP3 (optional). The user stages it in `src/assets/audio/`,
     often with a `.clean` suffix or capital letters in the name.
   - The user often supplies a "subtitle": it becomes the italic first line
     of the body. A "meta-description" goes in `excerpt`.

2. **Derive the slug** — kebab-case from title, ASCII only, all lower case.
   Example: "My First Post" → `my-first-post`

3. **Narration audio** (if supplied). Rename the MP3 to exactly `<slug>.mp3`,
   lower case (Cloudflare is case-sensitive; a case-only rename on Windows
   needs a two-step through a temp name). Read its length with
   `ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 <file>`
   and round to whole seconds. The player, caption ("Listen to this post
   (AI-narrated, N min)") and JSON-LD `AudioObject` all come from the
   `narration` front-matter entry; see the `blog-narration` skill for how
   that plumbing works. Do not edit it.

4. **Create the file** at `src/blog/posts/YYYY-MM-DD-slug.md`. Leave out the
   optional fields that were not supplied:
   ```markdown
   ---
   title: "Post title"
   date: YYYY-MM-DD
   categories:
     - category-slug
   image: "/assets/images/posts/filename.jpg"
   imageAlt: "Description of the hero image."
   keywords:
     - Keyword one
     - Keyword two
   excerpt: "~155 char summary."
   draft: false
   narration:
     src: "/assets/audio/slug.mp3"
     seconds: 123
   ---

   *Subtitle.*

   Post body in Markdown.
   ```

5. **Run the build** to confirm it produces no errors:
   ```
   npm run build
   ```
   The build command is `npm run build:eleventy && npm run build:pagefind`.
   If there is narration, also check the built page has exactly one
   `<figure class="narration">` with the expected minutes, that
   `_site/assets/audio/<slug>.mp3` exists, and that the JSON-LD parses.

6. **Do not wait for approval.** The user reviews posts live on several
   platforms after publishing, so go straight on to commit and push.

7. **Report afterwards**: the file, the live URL
   (`https://moavis.nexus/blog/posts/YYYY-MM-DD-slug/`), the audio URL and
   any rename if there was narration, and any liberties taken with the
   supplied text (added links, reformatting).

8. **Commit and push**. Include the hero image and the MP3 in the same
   commit (they are new untracked files, so committing only the Markdown
   would leave them 404ing on the live site):
   ```
   git add src/blog/posts/YYYY-MM-DD-slug.md src/assets/images/posts/filename.jpg src/assets/audio/slug.mp3
   git commit -m 'blog: add "Post title"'
   git push
   ```
   After committing, confirm the image and MP3 are actually tracked
   (`git ls-files --error-unmatch <path>`). On a case-insensitive dev box a
   `git add` with the wrong case can silently stage nothing.

## Notes

- `draft: true` in front-matter excludes the post from the live site without deleting it.
- Category slugs not in `src/_data/categoryLabels.json` still generate pages automatically — display name is auto-derived by title-casing the slug.
- Post permalink is `/blog/posts/YYYY-MM-DD-slug/`, derived by Eleventy's default from the filename (date prefix included). There is no `permalink` override for posts. To change a single post's URL, set `permalink` in its front-matter.
- Images go in `src/assets/images/posts/` and are referenced as `/assets/images/posts/filename.jpg`.
- The `excerpt` field is optional — the build auto-derives it from the first ~155 chars of body content if omitted — but providing it explicitly produces better social cards.
