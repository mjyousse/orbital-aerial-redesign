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
    body: 'Repeatable volume measurements for aggregate, material and earthwork sites. We plan each flight around your site, your control and the report format your team already uses.',
    deliverables: [
      'Volume and tonnage, using your density values',
      'Georeferenced orthomosaic and surface model',
      'Pile-by-pile PDF and CSV report',
      'Side-by-side history for recurring sites',
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
    body: 'Scheduled captures that give the whole project team the same up-to-date picture of the site, without everyone driving out to see it.',
    deliverables: [
      'High-resolution orthomosaic and 3D model',
      'Dated captures at the milestones you set',
      'Plan and design overlays',
      'Web access for office and field teams',
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
    body: 'Detailed, location-tagged imagery of roofs, structures, utilities and other hard-to-reach assets, organized so engineers and owners can review them from the office.',
    deliverables: [
      'Overview and detail imagery, organized by asset',
      'Location-tagged observations for engineering review',
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
  { title: 'Your site on any screen', body: 'Open 3D maps in a secure web workspace. Superintendents, operations teams and remote engineers can check progress from anywhere, with no GIS skills needed.' },
  { title: 'Works with the data you have', body: 'We can process drone, LiDAR and GPS rover data and align it to your agreed coordinate system, so everyone reviews the same reference model.' },
  { title: 'Plans on top of reality', body: 'Overlay PDF plans, blueprints or TIN surfaces on the site model to check progress, spot utility clashes and confirm the work matches the design.' },
  { title: 'An in-house crew', body: 'Our own team plans and flies every job and delivers processed data on the schedule set in your scope.' },
];

export const industrialCredentials = [
  { label: 'Safety', title: 'Structured flight safety', body: 'FAA Part 107 certificated pilots follow a safety management framework: preflight risk analysis, airspace review and standard mission checklists.' },
  { label: 'Coordinates', title: 'Your coordinate system', body: 'Deliverables can be tied to state plane coordinates and local ground benchmarks, so they line up with your surveyor’s data and CAD grids.' },
  { label: 'Insurance', title: 'Fully insured', body: 'Aviation liability coverage is in place for our flight operations. Project-specific insurance requirements are confirmed during scoping.' },
  { label: 'Equipment', title: 'RTK-enabled aircraft', body: 'RTK-enabled drones and high-resolution cameras give repeatable mapping flights matched to your control requirements.' },
  { label: 'Processing', title: 'Photogrammetry in-house', body: 'We turn imagery into the deliverables you agreed to: orthomosaics, point clouds, surface models and volume reports.' },
  { label: 'Handoff', title: 'Documented method', body: 'Every handoff records the capture date, coordinate system, control approach, processing method and file formats.' },
];

export const industrialProcess = [
  { step: '01', title: 'Scope', body: 'Tell us the site, the deliverables and the deadline. We confirm price and availability within one business day.' },
  { step: '02', title: 'Plan', body: 'We review site access, airspace, ground control and schedule before mobilizing.' },
  { step: '03', title: 'Fly', body: 'RTK-enabled capture, flown by our Part 107 certificated crew.' },
  { step: '04', title: 'Process', body: 'Imagery becomes orthomosaics, surface models, point clouds or volume reports.' },
  { step: '05', title: 'Deliver', body: 'Files in your formats, with method notes, plus web access for your team.' },
];

export const sectors = ['Aggregate & quarry operations', 'Critical infrastructure', 'Land & home development', 'Industrial facilities', 'Energy & utilities'];

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
  { id: '01', title: '48 MP stills', body: 'Wide boundary aerials, architectural angles and detail shots with natural color.' },
  { id: '02', title: '4K property motion', body: 'Reveals, orbits and neighborhood fly-overs formatted for MLS, YouTube and reels.' },
  { id: '03', title: 'Delivery as soon as 24 hours', body: 'Edited stills and video, often the next day. Timing is confirmed with your scope.' },
  { id: '04', title: 'One visit', body: 'Aerial and ground photography in the same session, so agents and sellers schedule once.' },
];

export const reProcess = [
  { step: '01', title: 'Arrival', body: 'A strong opening view that establishes the property.' },
  { step: '02', title: 'Context', body: 'Aerial views that show the lot, access and setting.' },
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
  { title: 'Flight logistics handled', body: 'We take care of airspace coordination and residential flight planning, so you don’t have to.' },
  { title: 'Insured and Part 107', body: 'FAA Part 107 certificated pilots, aviation liability coverage, and a site-risk review before every shoot.' },
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
