---
name: blog-narration
description: Attach a narration MP3 to an existing moavis.nexus blog post. Use when Steve says "add narration", "attach the audio" or invokes /blog-narration with a blog page name and an MP3 file name.
---

# Blog narration

Attach a pre-made narration MP3 to one existing blog post on moavis.nexus. One post per run.

## Inputs

Steve supplies two things:

1. **Page**: the blog post to update (a file name, title or slug; resolve it to one file in `src/blog/posts/`).
2. **MP3**: the narration file name. It will already be in `src/assets/audio/`, or Steve will say where it is.

If either is missing or matches more than one file, ask. Do not guess.

## How narration works on this site

The plumbing already exists. A run only adds the MP3 and a front-matter entry to the post. Do not edit these files unless something is broken:

- `src/_includes/partials/narration.njk` renders the player: a `<figure class="narration">` with a caption, `<audio controls preload="metadata">` and a download link as fallback. No autoplay.
- `src/_includes/layouts/post.njk` includes the partial between the post header (title, date, categories) and the hero image/body, whenever the post has a `narration` front-matter entry. It sets the player URL via the `assetUrl` filter, so the src carries a `?v=<hash>` and a re-recorded MP3 is not held back by Cloudflare's 4-hour asset cache. It shows the duration as rounded minutes, with a minimum of 1 min.
- `src/_includes/partials/jsonld-post.njk` adds an `AudioObject` (`contentUrl` as the plain absolute URL without the hash, `encodingFormat: "audio/mpeg"`, ISO 8601 `duration`) to the post's `BlogPosting` JSON-LD.
- `src/assets/css/blog.css` styles `.narration` (quiet grey caption, full-width dark player).
- `src/assets` is passthrough-copied by `.eleventy.js`, so `src/assets/audio/<file>.mp3` is served at `/assets/audio/<file>.mp3`.

## Step 0: Pre-flight

- Run `git status`. The new MP3 showing as untracked is expected. If there are other uncommitted changes, stop and report them.
- Check for `.git/index.lock` and editor lock or swap files on the target post. If any exist, stop and report them.
- Confirm the MP3 exists and is non-trivial in size. Read its duration in seconds with `ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 <file>`, and round to whole seconds.

## Step 1: Get the slug

Use, in order of preference: an explicit `slug` field in the front matter, then a `permalink`, then the file name with its `YYYY-MM-DD-` prefix removed (Eleventy's `page.fileSlug`). Report which source you used.

If the MP3 is not already named `<slug>.mp3`, rename it so it follows that convention (`git mv` if tracked, otherwise a plain move), and say that you did.

## Step 2: Update the post

Add a `narration` entry to the post's front matter, after the existing fields:

```yaml
narration:
  src: "/assets/audio/<slug>.mp3"
  seconds: <duration in whole seconds>
```

- **Idempotency:** if the post already has a `narration` entry, replace it rather than adding a second one.
- Omit `seconds` only if the duration could not be read; the caption and JSON-LD then leave the duration out.
- Change nothing else in the post.

## Step 3: Verify

Run `npm run build`, then check the built page at `_site/blog/posts/<file name without .md>/index.html`:

- exactly one `<figure class="narration">`, with the expected caption and minutes,
- the audio `src` points at `/assets/audio/<slug>.mp3?v=...`, and `_site/assets/audio/<slug>.mp3` exists,
- the JSON-LD block parses as valid JSON and contains the `AudioObject`.

If feasible, open the page and confirm the player shows its duration.

## Step 4: Commit, push and report

If Step 3 passed, commit the MP3 and the post (and nothing else) and push to `master` without waiting for approval. Use the commit message `Add narration: <post title>`. The push deploys to Cloudflare Pages, and Steve reviews the change live.

If Step 3 failed, do not commit. Stop and report the failure.

After pushing, tell Steve:

- the commit hash,
- the final audio URL and the page URL,
- the slug and its source,
- any rename or anything unexpected.
