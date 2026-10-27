# Roadmap

The 2026 redesign of maxwilson.co.uk. Design reference: the "A1.2a" board on the
[design canvas](https://claude.ai/artifact/LdGkjzKYSzqLEPdvVRSi95).

## Phase 1: rebuild the page (done, on the `redesign` branch, not committed)

- [x] SvelteKit 3.1, Svelte 5.57, Vite 8, Tailwind 4.3, TypeScript 6.0 (newest that SvelteKit and svelte-check support), ESLint 10
- [x] Config moved from `svelte.config.js` into `vite.config.ts`, as SvelteKit 3 requires
- [x] Single prerendered page with `csr = false`: CSS inlined; the only script is `src/lib/client/reveal.js` (about 15 lines, inlined at build) that starts the odometer when the stats appear
- [x] Self-hosted Figtree and JetBrains Mono; images built to AVIF and WebP by `@sveltejs/enhanced-img`
- [x] Hero: two years of real contributions (`npm run contributions`), anchored on today so wide screens show more history; the newest weeks fill in on load; the photo, name and links animate in. The hero is sized to its content so the stats show on the first screen; on phones the grid runs edge to edge above the photo like a cover image
- [x] Docking header (pure CSS, follows the hero links out of view) with scroll progress; sticky company column and a reading line per role in Work
- [x] Content in `src/lib/content.ts`; Toolkit, Open source and the separate Skills section removed
- [x] Skills shown where they were used: each role's and project's stack has monochrome logos (Simple Icons sprite at `/brand-icons.svg`) that take their brand colour on hover; stats numbers roll like an odometer
- [x] Each project has its own accent colour on a short bar, the screenshot frame and the link; one static screenshot each
- [x] Lighthouse 13.5 against `wrangler dev`: 100 on all four categories, mobile and desktop

## Phase 1b: design review round (2026-10-27)

- [x] Contribution grid reaches the right edge on every screen; only older history fades out on the left
- [x] Fixes from the review: docked header lines up with the content, Also built dividers are straight, stats line up with Work, headings and paragraphs wrap without lone words
- [x] Projects: Monch leads on its own panel with its screenshot inside it; Fantasy Steam, Invites and paintnotnet (kept last on purpose) sit in a row of cards underneath (screenshot first on phones). Every screenshot has a hairline frame and soft shadow, no bezel
- [x] Hero: the grid (30px cells on a 35px step) runs to one cell-gap from the right edge, with the photo (240px) as a 7 x 7 block of it at the content's left edge, snapped with `round()`; a big left-aligned name; role and links on one row under a rule. The square under the pointer bubbles up (plain `<rect>`s, since `<use>` scales about the wrong origin; the SVG overflows and the fade mask has room above and below, so edge squares aren't clipped); no ping on today. The previous centred hero is backed up in scratch
- [x] Placeholder intro in `content.ts` for Max to rewrite; Adarma's two team-lead lines merged into one bullet; title and meta descriptions; Instagram and YouTube in the footer only; Monch's stack corrected to Cloudflare (no Firebase)
- [x] MW favicon set from `scripts/icons.mjs` (`npm run icons`): white lettering on ink, each letter's inner stroke running into the other so the mark reads as one; heavier strokes at tab sizes. `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, and manifest icons in `static/icons/` (any and maskable, 192 and 512)
- [x] Stack logos for every technology: wgpu and WGSL (WebGPU) from Simple Icons; D1, R2 and egui as plain glyphs (database, bucket, window) since Simple Icons has none
- [x] Optimisation pass: no comments; components in `src/lib/components`, imported via `#lib/*` (SvelteKit 3's replacement for `$lib`, mapped in package.json `imports`); shared tokens and `page`/`label` utilities in `app.css`; Tailwind scans only routes and components; Latin-only fonts; `hooks.server.ts` inlines the reveal script and strips hydration markers. Page 23.8 KB to 16.8 KB gzipped, visually identical
- [x] Stats: the third cell is a slow monochrome marquee of the main stack (`mainStack` in `content.ts`); it pauses on hover and stays still with reduced motion
- [x] Copy finished by Max; site email is `me@maxwilson.co.uk` (Email Routing route added). New photo from `~/Pictures/Profile.jpg`, cropped to 960px with metadata stripped, served at exact widths and quality 80; new share image from the hero
- [x] Hero photo: a blurred 375-byte placeholder is inlined so the tile never shows a black box; the grid has a CSS mask hole where the photo sits, and the photo rises and fades with the grid wave, its delay copied from the column behind it by `src/lib/client/sync-photo.js`. Photo and project screenshots are served at exact widths and quality 80
- [x] Let Tech's summary links MyRentalCV (`summaryLink` on a role)
- [x] Contributions snapshot refreshed on 2026-10-27 (3,403 in the last year)
- [ ] Further ideas from the review, not started: a Linux desktop strip for Harbour, drip and emojipop with a click-to-play clip; a print stylesheet and a PDF CV; stack logos in Work's sticky column, with education on one line; an engineer's footer (last updated, page size, view source)

## Phase 2: move hosting to Cloudflare (config ready, nothing deployed)

- [x] `wrangler.jsonc`: assets-only Worker named `maxwilson`, serving `./build`. The `maxwilson.co.uk` custom domain route is left out on purpose so test deploys only reach workers.dev; add `"routes": [{ "pattern": "maxwilson.co.uk", "custom_domain": true }]` back at the switch
- [x] `static/_headers`: one-year immutable cache for `/_app/immutable/*`, security headers, noindex on workers.dev
- [ ] First deploy (`npm run deploy`) and check it on the workers.dev URL
- [ ] Before switching DNS, confirm in Cloudflare that the subdomain sites (marvel, todo, photo, mpsheet, start, woodys) have their own records; the Worker only claims the apex, so they stay on GitHub Pages
- [x] The three project sites served under the apex path (`/mototek/`, `/NoContextQuotes/`, `/tfthelper/`) are retired: Max is happy for them to stop working after the switch
- [ ] Redirect `www.maxwilson.co.uk` to the apex with a Cloudflare redirect rule on the zone (Max agreed); GitHub Pages does this today, and an assets-only Worker cannot redirect by hostname
- [ ] Optional, before launch: switch the site email to `me@maxwilson.co.uk` (one line, `email` in `content.ts`) once Email Routing has a `me@` route; keep the `max@` route, since accounts use it
- [ ] Move `maxwilson.co.uk` to the Worker (replaces the DNS records that point at GitHub Pages)
- [ ] GitHub Actions workflow: build and `wrangler deploy` on every push to `main`, plus a daily run that refreshes the contributions snapshot first (public repo, so standard runners are free). Secrets: a Cloudflare API token and account ID, and a GitHub token for the contributions script
- [ ] Turn off GitHub Pages and stop committing `docs/`

## Phase 3: tidy up

- [x] Removed the old components, `src/lib/config/`, `src/lib/utils/`, `static/images/` (about 15 MB), `static/CNAME`, `static/.nojekyll`, the old favicons, `bun.lock`, `tailwind.config.ts`, `repomix-output.xml`, the empty `src/app.d.ts` and the `@tabler/icons-svelte` dependency (2026-10-27; a backup tarball is in the session scratchpad and everything tracked is in git history)
- [ ] Remove `docs/` once Cloudflare is serving the site, along with its entries in `.prettierignore` and `eslint.config.js`

## Phase 4: keep it current

- [ ] Daily contributions refresh, via the Phase 2 workflow: it deploys directly rather than committing the JSON. The script keeps the last snapshot when the newest 21 days are empty
- [ ] Max's intro (`intro` in `src/lib/content.ts`, hidden while empty)
- [ ] Optional: one public number for the Hertility role
