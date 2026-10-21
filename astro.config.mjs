import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mjyousse.github.io',
  base: '/orbital-aerial-redesign',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
  vite: { plugins: [tailwindcss()] },
});
