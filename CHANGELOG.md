# Changelog

## 0.4.0 (design-b)

- Dark theme: charcoal and near-black surfaces, same orange accent, dark mockups, cards and buttons, pink placeholders kept visible.
- Theme button in the header (desktop and mobile) cycles Auto, Light and Dark. Auto follows the device setting and updates live; the choice is saved in the browser.
- The theme is applied by an inline script in the head, so pages never flash the wrong theme. `color-scheme` and `theme-color` follow the active theme.
- The coverage map keeps its dark-styled USGS tiles in both themes.

## 0.3.0 (design-b)

- Design B: full-bleed aerial video hero with large type, alternating light and dark sections, sticky header that turns solid on scroll.
- Deliverable mockups: stockpile report, site viewer with design overlay toggle, asset observation card, listing preview.
- Fact band, numbered process grid, founder section, pricing cards, editorial gallery.
- Inter Tight and Inter type; scroll reveals with IntersectionObserver instead of GSAP.
- Licensed Pexels hero video and higher-resolution stock photos, credited in the footer and README.

## 0.2.0

- Every branch builds on push; only the branch named in the `PAGES_BRANCH` repository variable (default `main`) is published to GitHub Pages.
- Run workflow can publish `PAGES_BRANCH` or any branch typed in.
- README explains how to switch the live design.

## 0.1.0

- Beta redesign of orbitalaerial.com (design A): terrain hero, both divisions, interactive sample data, quote form.
