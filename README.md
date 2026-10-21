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

Pushing to `main` builds the site and deploys it with the GitHub Pages workflow in `.github/workflows/deploy.yml`.

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
