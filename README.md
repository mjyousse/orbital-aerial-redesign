# Orbital Aerial Solutions — beta redesign

A redesign preview of [orbitalaerial.com](https://orbitalaerial.com), built with Astro and Tailwind and published on GitHub Pages:

**https://mjyousse.github.io/orbital-aerial-redesign/**

Every page carries a `noindex` tag (and robots.txt asks crawlers to stay out), so this preview doesn't compete with the live site in search. The visible beta banner was removed in 0.9.1.

## Pages

| Path | What's on it |
| --- | --- |
| `/` | Firm-level: aerial video hero, equal-weight Industrial / Real Estate Media fork, industrial logo strip, how we operate, data security, coverage graphic, field record, quote form |
| `/industrial/` | Stockpile, progress and asset services with sample report screens, sample data, data security, credentials, process, field record |
| `/real-estate/` | Real estate media only: recent work gallery, aerial and ground packages with prices, client-logo placeholders, coverage graphic |
| `/contact/` | Multi-step quote form |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/orbital-aerial-redesign/
npm run build    # static output in dist/
```

Every push builds the site with `.github/workflows/deploy.yml`, on any branch. Only one branch is published to GitHub Pages: the one named in the `PAGES_BRANCH` repository variable (`main` if the variable isn't set).

## Choosing which design is live

Each design lives on its own branch:

| Branch | Design |
| --- | --- |
| `main` | Design A: dark, terrain-contour hero |
| `design-b` | Design B: full-bleed aerial video, light and dark sections, product-style deliverable mockups |

To switch the live site:

1. Go to **Settings → Secrets and variables → Actions → Variables** and set `PAGES_BRANCH` to the branch you want (for example `main` or `design-b`).
2. Go to **Actions → Deploy to GitHub Pages → Run workflow** and click **Run workflow** with the branch box left blank. It publishes whatever `PAGES_BRANCH` says. (Pushing to that branch also publishes it.)

To try a branch once without changing the variable, type its name in the branch box on **Run workflow**. The next push to the `PAGES_BRANCH` branch puts that branch back.

From a terminal, one line:

```bash
gh variable set PAGES_BRANCH --body design-b -R mjyousse/orbital-aerial-redesign && gh workflow run deploy.yml -R mjyousse/orbital-aerial-redesign
```

The `github-pages` environment allows deployments from `main` and from any branch named `design-*`. A new design branch only needs that name.

## Editing content

- Copy, services, packages and prices live in `src/lib/site.ts`.
- Pink dashed boxes marked **Placeholder** (stats, case study, testimonial, property film) are for real content only. Replace them once you have approved numbers, quotes or permission, or delete them.
- The quote form sends to the same FormSubmit inbox and uses the same Geoapify address autocomplete key as the live site (`src/scripts/quote.ts`).

## Light and dark themes

The theme button in the header cycles **Auto → Light → Dark**. Auto follows the device's light or dark setting and switches live when it changes. The choice is saved in the browser (`localStorage` key `oas-theme`). An inline script in `src/layouts/Base.astro` applies the theme before the page paints, and sets `color-scheme` and `theme-color` to match. Dark colors are the `[data-theme="dark"]` overrides at the end of `src/styles/global.css`.

## Performance notes

- Photos are converted to AVIF and WebP at build time with responsive sizes.
- Three.js (3D viewer) loads only when its section is near the viewport. Scroll reveals use IntersectionObserver and CSS, with no animation library.
- The hero video is a 14 s muted loop (960 px on phones, 1600 px on larger screens). It doesn't load when the visitor prefers reduced motion or has Data Saver on; the poster image shows instead.
- Fonts are self-hosted. Motion is switched off when the visitor prefers reduced motion.

## Credits and licenses

Full media attribution is in [`CREDITS.md`](CREDITS.md). It is not shown on the pages.

- Code: MIT, see `LICENSE`.
- Real estate photos: Orbital Aerial Solutions.
- Client logos (`public/logos/`): each company's own mark, single-color, trademarks of their owners. SpaceX and OpenAI from the wordmarks on spacex.com and openai.com, Martin Marietta from martinmarietta.com, Samsung from Samsung's brand identity download, Tesla from Wikimedia Commons (`Tesla_Motors_Logo.svg`), DroneDeploy from the wordmark in the logo file on dronedeploy.com (the "from Procore" line is left out because it is unreadable at strip height).
- Hero video and industrial photos: licensed from Pexels (free to use). See `CREDITS.md` for links.
- Product screens (stockpile report, site viewer, observation card, listing preview) are illustrative mockups. Their values are samples, not measurements.
- Sample data (point cloud, before/after): USGS 3DEP elevation and National Map orthoimagery (public domain). See `CREDITS.md`.
- Coverage graphic: dotted state outlines generated from U.S. Census Bureau cartographic boundaries (public domain, via the us-atlas package). No map tiles or third-party map services.
- Fonts: Inter Tight and Inter (SIL Open Font License) via Fontsource.

Made by Mohammad Youssef.
