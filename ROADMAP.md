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
- [x] Hero photo: a blurred 375-byte placeholder is inlined so the tile never shows a black box; the grid has a CSS mask hole where the photo sits, and the photo rises and fades with the grid wave, and `src/lib/client/hero-entrance.js` measures the first on-screen week so the wave starts there, then copies the delay of the column behind the photo. Photo and project screenshots are served at exact widths and quality 80
- [x] Let Tech's summary links MyRentalCV (`summaryLink` on a role)
- [x] Contributions snapshot refreshed on 2026-10-27 (3,403 in the last year)
- [ ] Further ideas from the review, not started: a Linux desktop strip for Harbour, drip and emojipop with a click-to-play clip; a print stylesheet and a PDF CV; stack logos in Work's sticky column, with education on one line; an engineer's footer (last updated, page size, view source)

## Phase 2: move hosting to Cloudflare (done 2026-10-27)

- [x] Assets-only Worker `maxwilson` (`wrangler.jsonc`) on the custom domain `maxwilson.co.uk`; the workers.dev address is off
- [x] `static/_headers`: one-year immutable cache for `/_app/immutable/*`, security headers, shorter caches for icons and the logo sprite
- [x] Workers Builds connected to `main`: build `npm run build:fresh` (refreshes contributions, then builds), deploy `npx wrangler deploy`, build cache on, `GITHUB_TOKEN` build secret (classic token, `read:user`)
- [x] Daily rebuild: `.github/workflows/daily-rebuild.yml` calls the `main` deploy hook (`DEPLOY_HOOK_URL` repo secret) at 05:17 UTC. GitHub pauses scheduled workflows after 60 days without repo activity; re-enable from the Actions tab
- [x] DNS: the four GitHub Pages A records on the apex were deleted and the Worker custom domain created its own record; `www` redirects to the apex with a Cloudflare redirect rule; subdomain sites (marvel, todo, photo, mpsheet, start, woodys) are untouched and still on GitHub Pages
- [x] GitHub Pages cannot be turned off for a `username.github.io` repo, so its custom domain was removed and `docs/` now only redirects `maxjw.github.io` to maxwilson.co.uk. Project sites without subdomains (mototek, NoContextQuotes, tfthelper) work again at `maxjw.github.io/<repo>`
- [x] Lighthouse on the live domain: performance 99 to 100, accessibility 100, SEO 100. Best practices is 96 because Cloudflare Web Analytics injects a beacon that logs a console error where it is blocked; Max chose to keep analytics for now

## Phase 3: tidy up

- [x] Removed the old components, config, images (about 15 MB), favicons, `bun.lock`, `tailwind.config.ts`, `repomix-output.xml`, `src/app.d.ts`, the `@tabler/icons-svelte` dependency and the old built site in `docs/`
- [ ] Delete the `redesign` branch (identical to `main`): `git branch -d redesign && git push origin --delete redesign`

## Phase 4: keep it current

- [x] Daily contributions refresh: `npm run build:fresh` refreshes the snapshot on every Cloudflare build; the script keeps the last snapshot if GitHub is unreachable, the token is missing, or the newest 21 days are empty
- [ ] Max's intro (`intro` in `src/lib/content.ts`, hidden while empty)
- [ ] Optional: one public number for the Hertility role
