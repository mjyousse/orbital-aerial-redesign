# Changelog

## 0.10.0 (design-b)

- Industrial keeps its name and now carries the subtitle "Survey, mapping & building inspection" on the home fork panel, in the Services dropdown and in the mobile menu.
- New building inspection section on /industrial/: roof condition, facade and envelope survey, high-resolution imagery and an annotated findings report.
- The industrial hero, meta description and structured data now include building inspection. The home meta description mentions it too.
- Thermal: replaced the "not yet offered" note with "Thermal inspection is on our roadmap" and a "Thermal inspection coming soon" chip. Thermal is not presented as available today.

## 0.9.1 (design-b)

- Pilot wording: removed the managed aviation training, structured crew training and recurrent training claims. The copy now says the flight crew is FAA Part 107-certified and the team includes licensed manned-aviation pilots, bringing real airspace and aviation experience.
- NDAA wording: removed every claim that our aircraft or fleet is NDAA-compliant (hero facts, fact strips, standards chips, data security, credentials, process and meta descriptions). The copy now says the fleet is matched to contract requirements, with NDAA-compliant aircraft available for contracts that require them.
- Removed the "Beta redesign" banner from every page. The header now sits flush at the top. The noindex tag and robots.txt stay.
- Field record: 1,120 acres mapped every month, 3+ years of continuous operations and 130,000+ acres mapped. The total is labelled as cumulative, with repeat surveys counted.

## 0.9.0 (design-b)

- **Home restructure.** Directly under the hero there is now an equal-weight fork with two service panels, Industrial and Real Estate Media, each linking to its own page. The rest of the home is firm-level: clients, how we operate, data security, coverage and field record. Industrial-only detail (deliverables, interactive sample data, process) lives on /industrial/. The end-of-page real estate band is gone.
- **Industrial logo strip** is now labelled "Industrial clients include" and notes that it covers industrial work only. Real Estate Media has its own client-logo placeholders on its own page.
- **How we operate.** "Private pilot" wording removed everywhere; the copy now describes a managed aviation training program with structured crew training and recurrent training. The safety framework now says we handle FAA clearances and airspace authorizations, including LAANC, waivers and FAA coordination where required.
- **Credentials.** The vendor certification chips were replaced by firm attributes: Part 107-certified flight crew, NDAA-compliant fleet, $10M aviation liability coverage and documented SOPs.
- **Coverage graphic.** The tile map is replaced by a dotted, on-brand graphic with no map tiles or third-party map services: the lower 48 with Texas highlighted and Austin as home base on the home page, and Texas with the 15-mile standard coverage ring and distance rings on Real Estate Media. Leaflet is removed. The coverage text is unchanged.
- **Field record.** New count-up numbers (they animate from 0 when scrolled into view and show the final value at once with reduced motion): 560 acres mapped every month, 2+ years of continuous operations and 13,000+ acres mapped in total. The figures live in `src/data/fieldRecord.ts`. A case-study card is built but hidden behind a flag set to off, and holds placeholder text only.

## 0.8.0 (design-b)

- New navigation. **Services** is a dropdown with two separate entries: Industrial (mapping, volumetrics, reality capture and inspection, plus a "Sample deliverables" link) and Real Estate Media. **Company** is a dropdown with Operations, Data security and Coverage, which link to /#operations, /#security and /#coverage from any page. Contact, the theme toggle and Request a quote sit on the right.
- Dropdowns open on click or hover, with aria-expanded buttons. Esc, an outside click or tabbing away closes them. The panels are solid in both themes and in both header states (over the video and solid).
- The mobile menu is grouped under Services and Company headings.
- Footer columns now follow the same structure: Services, Company, Contact.
- The header logo now matches orbitalaerial.com: 68 px tall at the top of the page and 58 px once the header turns solid, inside a 96 px header. It is 60 px / 54 px on phones (84 px header) and from 768 to 1023 px.
- Section anchors leave room for the taller header.

## 0.7.1 (design-b)

- Leadership section replaced by a firm-level "How we operate" section ("The standard behind every flight."): Part 107 pilots with manned-aviation training, Safety Management System framework, airspace review, risk assessment and checklists on every mission, datasets built to hold up to engineering, owner and audit review, and "Our team holds" certifications. No names, titles or founder photo placeholder.
- Nav link "Company" is now "Operations" (#operations).
- "Made by" credit removed from the site footer (it stays in the README and LICENSE).
- Firm-voice wording pass: hero, fact strip and security copy refer to pilots rather than a single licensed pilot; quote form, contact page and confirmation say "our team replies".

## 0.7.0 (design-b)

- New Data security section on the home page (after the process) and the industrial page (before the fact strip). It has five pillars, each with an icon: NDAA-compliant platforms, air-gapped ingestion engineered for zero data leakage, controlled and documented handoffs, a Part 107 crew and licensed pilot inside an SMS framework, and $10M aviation liability coverage.
- It uses only claims already made elsewhere on the site, and names no vendors or products.
- A closing line offers a security brief or a completed vendor questionnaire on request, linking to the contact form.
- The section is dark in both themes.

## 0.6.2 (design-b)

- DroneDeploy added to the "Trusted by teams at" strip on the home and industrial pages, using the DroneDeploy wordmark from dronedeploy.com in the same single neutral color.
- Six logos now sit in one row on desktop and an even 2 × 3 grid on phones (3 × 2 on small tablets). Logos scale down proportionally on very narrow screens.
- Header link spacing tightens slightly between 768 and 1023 px so the header no longer overflows at 768 px.

## 0.6.1 (design-b)

- Client logo strip on the home and industrial pages now shows SpaceX, Samsung, Martin Marietta, Tesla and OpenAI, labeled "Trusted by teams at". Replaces the placeholders.
- Official marks stored unaltered as single-color SVGs in `public/logos/` (optimized with svgo, shapes unchanged). Shown unlinked in neutral gray in light mode and light gray at reduced opacity in dark mode, full opacity on hover. Wraps evenly on mobile.

## 0.6.0 (design-b)

- Leadership section is about Orbital only: founder and CTO role, FAA Part 107 and private pilot credentials, Azure, Jamf and DoD IAT certifications, and the approach to defensible data. No employer names or history.
- Homepage is industrial-first. Real estate wording is gone from the hero, meta description, fact strip, deliverables and coverage section; the two-division cards and the real estate deliverable row are removed.
- Real estate now appears on the homepage as one separate Real Estate Media band that links to `/real-estate/`. Real estate prices appear only on the real estate page and in the quote form.
- Footer drops real estate prices and labels the columns Industrial, Real Estate Media and Industrial sectors.
- Quote section coverage note matches the division; the contact page lists both, separately. The form keeps its division choice.
- Structured data: the real estate price list and 15-mile service area appear only on the real estate page.
- Homepage coverage map shows the Austin home base for nationwide industrial work instead of the real estate radius.

## 0.5.0 (design-b)

- Dark theme now has three surfaces instead of one flat charcoal: near-black (#060607) for the hero, sample data, coverage and closing sections; slate (#15181D) where light mode is white; graphite (#1E1C1A) where light mode is warm gray, and for cards.
- Soft orange glow behind section headings and around product mockups, and thin orange hairlines at section boundaries.
- The fact strip stays off-white in dark mode, as a single inverted band with dark text.
- Faint contour-line texture on slate sections.
- Light theme unchanged.

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
