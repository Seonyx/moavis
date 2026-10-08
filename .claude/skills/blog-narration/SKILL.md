---
name: blog-narration
description: Attach a narration MP3 to an existing moavis.nexus blog post. Use when Steve says "add narration", "attach the audio" or invokes /blog-narration with a blog page name and an MP3 file name.
---

# Blog narration

Attach a pre-made narration MP3 to one existing blog post on moavis.nexus. One post per run.

## Inputs

Steve supplies two things:

1. **Page**: the blog post to update (a file name, title or slug; resolve it to one file).
2. **MP3**: the narration file name. It will already be in `src/assets/audio/`, or Steve will say where it is.

If either is missing or matches more than one file, ask. Do not guess.

## Step 0: Pre-flight

- Run `git status`. If there are uncommitted changes unrelated to this task, stop and report them.
- Check for `.git/index.lock` and editor lock or swap files on the target page. If any exist, stop and report them.
- Confirm the MP3 exists and is non-trivial in size. If `ffprobe` is available, read the duration.

## Step 1: Find out how audio reaches the live site (first run, then reuse)

Before writing anything, establish how files under `src/assets/` end up on the deployed site. Identify the site generator and its config. Then check one thing: is `src/assets/` copied verbatim to the build output, or only processed when imported (as in Astro or Vite)?

- If it is served verbatim, a plain path such as `/assets/audio/<file>.mp3` works. Confirm the exact public path from the build config or an existing asset reference.
- If it is processed only on import, the page must import the file to get its URL. In Astro that is `import narration from '../assets/audio/<file>.mp3?url'` or the project's equivalent.
- If neither fits cleanly, stop and explain the options to Steve before changing anything.

Do not assume. Verify it with a local build, or by checking that an existing asset's reference resolves in the build output.

## Step 2: Get the slug from the page

Read the slug from the page's existing furniture, in this order of preference: an explicit `slug` field in the frontmatter, then the permalink or route definition, then the file name. Report which source you used.

If the MP3 is not already named `<slug>.mp3`, rename it with `git mv` (or a plain `mv` if it is untracked) so it follows that convention, and say that you did.

## Step 3: Narration component

Look for an existing narration component or include, such as `Narration.astro`, a partial, or a shortcode.

- If one exists, use it.
- If none exists, create one in the project's conventional components location. It must render exactly this markup:

```html
<figure class="narration">
  <figcaption>Listen to this post (narrated, {N} min)</figcaption>
  <audio controls preload="metadata" src="{URL}">
    <a href="{URL}">Download the narration (MP3)</a>
  </audio>
</figure>
```

Component rules:

- Its props are the audio URL and the duration in minutes (rounded). Omit the "{N} min" part if no duration is passed.
- Never use autoplay.
- Add minimal styling that matches the site's existing typography and colour tokens. The block should be visually quiet.
- Tell Steve a new component was created, and where, because later runs will reuse it.

## Step 4: Update the page

- Insert the component directly after the title/byline block and before the body text. If a post has a distinctive layout, find the equivalent position and say what you chose.
- **Idempotency:** if the page already has a narration block, replace it rather than adding a second one.
- If the page or layout already emits JSON-LD, add an `AudioObject` with `contentUrl`, `encodingFormat: "audio/mpeg"` and, if known, `duration` in ISO 8601 format (e.g. `PT9M12S`). If there is no JSON-LD, skip this step and do not introduce it.
- Change nothing else on the page.

## Step 5: Verify

- Run the local build or dev server and confirm the page renders. Check that the audio URL in the built output points at a file that exists in the output.
- If feasible, open the page and confirm the player shows its duration.

## Step 6: Commit, push and report

If Step 5 passed, commit and push to `master` without waiting for approval. Use the commit message `Add narration: <post title>`. The push deploys to Cloudflare Pages, and Steve reviews the change live.

If Step 5 failed, do not commit. Stop and report the failure.

After pushing, tell Steve:

- the commit hash,
- the final audio URL,
- the slug and its source,
- any rename, new component or anything unexpected.
