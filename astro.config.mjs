import { defineConfig } from 'astro/config';

// ponytail: static SSG for GitHub Pages. Override SITE_URL or BASE_PATH in env for custom domain deployment.
export default defineConfig({
  site: process.env.SITE_URL || 'https://thehxdev.github.io',
  base: process.env.BASE_PATH || '/blog',
  output: 'static',
});
