export const SITE = {
  name: 'Orbital Aerial Solutions',
  email: 'contact@orbitalaerial.com',
  liveUrl: 'https://orbitalaerial.com',
  city: 'Austin, TX',
  center: { lat: 30.2672, lon: -97.7431 },
  radiusMiles: 15,
};

export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
};

export type Division = 'industrial' | 'realestate';

export const industrialServices = [
  {
    id: 'stockpile',
    number: '01',
    tag: 'Inventory',
    title: 'Stockpile Measurement',
    body: 'Repeatable aerial inventory measurement for aggregate, material and earthwork operations. Every flight is planned around site conditions, control requirements and the reporting format your team already runs on.',
    deliverables: [
      'Volume and tonnage calculated with your density values',
      'Georeferenced orthomosaic and surface model',
      'Pile-by-pile PDF and CSV report',
      'Historical comparisons for recurring sites',
    ],
    formats: 'PDF · CSV · GeoTIFF',
    image: 'stockpile',
    imageAlt: 'Aerial view of excavators working around aggregate stockpiles',
    imageSource: 'https://www.pexels.com/photo/aerial-view-of-quarry-with-heavy-machinery-33122147/',
  },
  {
    id: 'progress',
    number: '02',
    tag: 'Construction',
    title: 'Site Progress & Digital Twins',
    body: 'Scheduled reality capture that gives every stakeholder one consistent visual and spatial record of changing site conditions, without putting the whole team in the field.',
    deliverables: [
      'High-resolution orthomosaic and interactive 3D model',
      'Timestamped captures at defined milestones',
      'Design and plan overlays for visual coordination',
      'Cloud access for office and field stakeholders',
    ],
    formats: 'Web · GeoTIFF · LAS',
    image: 'progress',
    imageAlt: 'Top-down aerial view of an active construction site',
    imageSource: 'https://www.pexels.com/photo/aerial-view-of-construction-site-in-quebec-city-32211979/',
  },
  {
    id: 'assets',
    number: '03',
    tag: 'Engineering',
    title: 'Asset & Infrastructure Documentation',
    body: 'High-resolution, coordinate-aware documentation of roofs, structures, utilities and other difficult-to-access assets, organized for engineers, owners and maintenance teams.',
    deliverables: [
      'Overview and detail imagery, organized by asset',
      'Coordinate-tagged observations for engineering review',
      'Orthomosaic or 3D context where useful',
      'Controlled file delivery and access',
    ],
    formats: 'PDF · JPEG · GeoJSON',
    image: 'infrastructure',
    imageAlt: 'Aerial view of an industrial storage facility',
    imageSource: 'https://www.pexels.com/photo/aerial-view-of-industrial-storage-facility-33369529/',
  },
];

export const industrialPoints = [
  { title: 'Your entire site in your pocket', body: 'High-fidelity 3D maps in a secure, cloud-hosted workspace. Operations teams, superintendents and remote engineers track completed work from anywhere, with no GIS expertise required.' },
  { title: 'Hardware-agnostic data engine', body: 'Drone, LiDAR and GPS rover inputs are aligned to the agreed coordinate framework, so every team works from one consistent reference model.' },
  { title: 'Design overlays on reality', body: 'PDF plans, blueprints and TIN surfaces overlaid directly on the reality model to verify progress, surface utility clashes and inspect design conformance.' },
  { title: 'Air-gapped by design', body: 'Datasets move through air-gapped ingestion pipelines, engineered for zero data leakage from capture to handoff.' },
];

export const industrialCredentials = [
  { label: 'Safety', title: 'Aviation SMS framework', body: 'FAA Part 107 certificated remote pilots operate inside a Safety Management System framework: preflight risk analysis, airspace review and standardized mission checklists. We also handle FAA clearances and airspace authorizations, including LAANC and waivers where required.' },
  { label: 'Geospatial control', title: 'Unified coordinate engine', body: 'Deliverables align to state plane coordinates and local ground benchmarks, integrating with existing surveyor coordinates and CAD grids.' },
  { label: 'Coverage', title: '$10M aviation liability', body: '$10M in specialized aviation liability coverage backs our flight operations. Project-specific insurance requirements are confirmed during scoping.' },
  { label: 'Enterprise fleet', title: 'RTK-enabled, matched to the contract', body: 'RTK-enabled aircraft and high-resolution imaging systems flying repeatable mapping missions matched to your control requirements. NDAA-compliant aircraft are available for contracts that require them.' },
  { label: 'Processing', title: 'AI-driven photogrammetry', body: 'Imagery moves through air-gapped ingestion into AI-driven processing pipelines that produce orthomosaics, point clouds, surface models and volumetric reports.' },
  { label: 'Handoff', title: 'Method-aware handoffs', body: 'Every handoff documents the capture date, coordinate framework, control approach, processing method and agreed output formats. Data you can defend.' },
];

export const industrialProcess = [
  { step: '01', title: 'Scope', body: 'Define the site, deliverables and deadline. Pricing and availability within one business day.' },
  { step: '02', title: 'Plan', body: 'Site access, airspace, ground control and schedule are evaluated before every mobilization. We handle FAA authorizations, including LAANC and waivers where required.' },
  { step: '03', title: 'Capture', body: 'RTK-enabled flights executed by our in-house FAA Part 107 crew, on aircraft matched to the contract.' },
  { step: '04', title: 'Process', body: 'AI-driven photogrammetry converts raw imagery into orthomosaics, surface models, point clouds and volumetric reports.' },
  { step: '05', title: 'Deliver', body: 'Georeferenced, metadata-tagged outputs in your formats, with method notes and secure cloud access.' },
];

export const sectors = ['Aggregate & quarry operations', 'Critical infrastructure', 'Land & site development', 'Industrial facilities', 'Energy & utilities'];

export const aerialPackages = [
  { id: 'aerial-photos', badge: 'Aerial stills', title: 'Aerial Photos', subtitle: '12–18 edited aerial photos', price: 230, features: ['Edited aerial photo set', 'Wide, medium and detail views', 'Property, lot and surrounding context', 'Full-resolution and web-ready JPEGs'] },
  { id: 'aerial-complete', badge: 'Most complete', title: 'Aerial Photo + Video', subtitle: 'Photos and a short film, one flight', price: 435, featured: true, features: ['Edited aerial photo set', 'Short aerial property film', 'Full-resolution, web and social exports', 'One flight, one delivery'] },
  { id: 'aerial-video', badge: 'Aerial motion', title: 'Aerial Video', subtitle: '45–60 second aerial film', price: 315, features: ['Aerial film built around the property', 'Reveals, orbits and context shots', 'Web and social-ready MP4', 'Edited with clean transitions'] },
];

export const groundPackages = [
  { id: 'ground-essential', badge: 'Ground', title: 'Ground Essential', subtitle: 'About 20 photos, straightforward listings', price: 150, features: ['Interior and exterior photo set', 'Main rooms and curb appeal', 'Natural color and straightened perspective', 'Full-resolution and listing-ready files'] },
  { id: 'ground-complete', badge: 'Most requested', title: 'Ground Complete', subtitle: '30–35 photos, most homes', price: 210, featured: true, features: ['Expanded interior and exterior coverage', 'Main rooms, details and outdoor spaces', 'Natural color and straightened perspective', 'Full-resolution and listing-ready files'] },
  { id: 'ground-expanded', badge: 'Ground', title: 'Ground Expanded', subtitle: '50+ photos, larger or feature-rich homes', price: 330, features: ['Extra time and room coverage', 'Architectural details and features', 'Interior, exterior and outdoor living', 'Full-resolution and listing-ready files'] },
];

export const reStandards = [
  { id: '01', title: '48 MP high-resolution stills', body: 'Architectural perspectives, wide boundary aerials and contextual detail shots with natural color grading.' },
  { id: '02', title: '4K cinematic property motion', body: 'Intentional reveals, orbits and community fly-overs formatted for MLS listings, YouTube and reels.' },
  { id: '03', title: 'Delivery as soon as 24 hours', body: 'Curated listing-ready stills plus web and social video exports. Timing is confirmed with your approved scope.' },
  { id: '04', title: 'Single-visit capture', body: 'Aerial flight and ground photography coordinated in one session, so agents and sellers schedule once.' },
];

export const reProcess = [
  { step: '01', title: 'Arrival', body: 'A strong opening view that establishes the property.' },
  { step: '02', title: 'Context', body: 'Aerial perspective that clarifies the lot, access and setting.' },
  { step: '03', title: 'Detail', body: 'Ground coverage of the rooms and features that matter.' },
  { step: '04', title: 'Delivery', body: 'Files ready for MLS and social, as soon as 24 hours after the shoot.' },
];

export const reAddons = [
  { title: '3D tours', body: 'Walkthrough coverage for listings that need more than stills and video.' },
  { title: 'Floor plans', body: 'Clean marketing plans so buyers understand the layout at a glance.' },
  { title: 'Virtual staging', body: 'Furnished views for vacant rooms.' },
  { title: 'Listing websites', body: 'A dedicated property page when MLS photos aren’t enough.' },
];

export const rePoints = [
  { title: 'Boundary overlays', body: 'For land tracts and subdivisions, we can draw marketing boundaries and amenity callouts on aerial photos. These are for marketing only, not a licensed survey.' },
  { title: 'Ready for MLS', body: 'Files are sized for MLS, builder websites and social channels, so you can publish without reformatting.' },
  { title: 'Flight logistics handled', body: 'We handle FAA clearances and airspace authorizations, including LAANC and waivers where required, and plan residential flights so you don’t have to.' },
  { title: 'Part 107 and $10M insured', body: 'FAA Part 107 certificated pilots, $10M in specialized aviation liability coverage, and a site-risk review before every shoot around occupied properties.' },
];

export const serviceOptions: Record<Division, string[]> = {
  realestate: [
    'Aerial Photos (12–18 photos) - $230',
    'Aerial Video (45–60s) - $315',
    'Aerial Photo + Video - $435',
    'Ground Essential (20 photos) - $150',
    'Ground Complete (30–35 photos) - $210',
    'Ground Expanded (50+ photos) - $330',
    'Combined Scope: Aerial Photos + Ground Complete',
    'Custom Property or Multi-Location Scope',
    'Not sure, I need guidance',
  ],
  industrial: [
    'Stockpile Measurement',
    'Site Progress & Digital Twins',
    'Asset & Infrastructure Documentation',
    'Not sure, I need guidance',
  ],
};
