# Orbital Aerial Solutions — beta redesign

A redesign preview of [orbitalaerial.com](https://orbitalaerial.com), built with Astro and Tailwind and published on GitHub Pages:

**https://mjyousse.github.io/orbital-aerial-redesign/**

Every page carries a `noindex` tag and a visible "Beta redesign" banner, so this preview doesn't compete with the live site in search.

## Pages

| Path | What's on it |
| --- | --- |
| `/` | Terrain hero, both divisions, interactive sample data, services, process, coverage map, quote form |
| `/industrial/` | Stockpile, progress and asset services, sample data, credentials, process |
| `/real-estate/` | Recent work gallery, aerial and ground packages with prices, coverage map |
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
- Pink dashed boxes marked **Editor placeholder** (stats, case study, testimonial, client logos, property video) are for real content only. Replace them once you have approved numbers, quotes or permission, or delete them.
- The quote form sends to the same FormSubmit inbox and uses the same Geoapify address autocomplete key as the live site (`src/scripts/quote.ts`).

## Performance notes

- Photos are converted to AVIF and WebP at build time with responsive sizes.
- Three.js (3D viewer), Leaflet (coverage map) and GSAP (scroll reveals) load only when their section is near the viewport.
- Fonts are self-hosted. Motion is switched off when the visitor prefers reduced motion.

## Credits and licenses

- Code: MIT, see `LICENSE`.
- Real estate photos: Orbital Aerial Solutions.
- Industrial photos: licensed from Pexels ([stockpile](https://www.pexels.com/photo/aerial-view-of-quarry-with-heavy-machinery-33122147/), [construction site](https://www.pexels.com/photo/aerial-view-of-construction-site-in-quebec-city-32211979/), [storage facility](https://www.pexels.com/photo/aerial-view-of-industrial-storage-facility-33369529/)). They show the type of site, not client work.
- Sample data (hero terrain, point cloud, before/after): elevation from USGS 3DEP via [AWS Terrain Tiles](https://registry.opendata.aws/terrain-tiles/), and imagery from the [USGS National Map](https://www.usgs.gov/programs/national-geospatial-program/national-map) orthoimagery. Both are public domain US government data. Area: west Austin, TX. Not client work.
- Coverage map tiles: USGS The National Map (public domain), rendered with [Leaflet](https://leafletjs.com/).
- Fonts: Space Grotesk, DM Sans and JetBrains Mono (SIL Open Font License) via Fontsource.

Made by Mohammad Youssef.
