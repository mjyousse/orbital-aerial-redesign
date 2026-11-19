import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the preview under /orbital-aerial-redesign. The
// Cloudflare copy (orbital-redesign.mjyousse.workers.dev) is built with
// SITE_URL and BASE_PATH set so it serves from the root instead.
export default defineConfig({
  site: process.env.SITE_URL || 'https://mjyousse.github.io',
  base: process.env.BASE_PATH || '/orbital-aerial-redesign',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
  vite: { plugins: [tailwindcss()] },
});
