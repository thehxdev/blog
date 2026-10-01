import { defineConfig } from 'astro/config';

// ponytail: static SSG. Set SITE_URL in env for custom domain deployment.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  output: 'static',
});
