# AGENTS.md

Minimal personal blog built with Astro 7, native CSS, and Content Layer markdown.

## Environment & Commands

- Runtime: Node >= 18 (Node 26+ verified)
- Package manager: `npm`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Test suite: `npm test` (`node test/build_check.js`)

## Architecture

- `astro.config.mjs`: Astro project configuration.
- `src/content.config.js`: Content Layer collections and frontmatter schema (`blog`).
- `src/content/blog/`: Markdown posts (`.md`) and co-located local images.
- `src/layouts/BaseLayout.astro`: Base HTML shell, navigation (`.site-header`), and footer (`.site-footer`).
- `src/pages/index.astro`: Homepage listing writing entries sorted by `pubDate`.
- `src/pages/about.astro`: Static about page.
- `src/pages/posts/[id].astro`: Dynamic post route using `getStaticPaths` and Astro `render()`.
- `src/styles/global.css`: Single CSS file with CSS custom properties, light/dark scheme, typography, layout classes.
- `test/build_check.js`: Minimal assertion check verifying static build output (`dist/`).
- `.github/workflows/deploy.yml`: GitHub Actions automated deployment to GitHub Pages.
- `Dockerfile`: Multi-stage Docker build with Nginx for container hosting.
- `public/`: Static assets (`favicon.svg`, `robots.txt`).

## Deployment

- **GitHub Pages**: Push to `main`. Workflow builds and publishes `dist/`.
- **Cloudflare Pages / Vercel / Netlify**: Connect repo, set build command `npm run build`, output directory `dist`.
- **Docker**: `docker build -t myblog . && docker run -p 8080:80 myblog`.

## Conventions & Rules

1. **Zero Client JS Bloat**: Do not add frontend JavaScript frameworks (React, Vue, Svelte) unless requested. Keep output purely static HTML/CSS.
2. **Style Consistency**: Centralize styling in `src/styles/global.css`. Never use inline styles in `.astro` components. Use scoped component classes (`.site-header`, `.intro`, `.post-header`, `.post-cover`, `.back-nav`).
3. **Typography & Layout**: Keep centered container (`--max-w: 680px`), system font stack, and native `color-scheme: light dark`.
4. **Images**:
   - Use relative image paths inside markdown: `![Alt](./image.png)`.
   - Use `schema: ({ image }) => ...` in `src/content.config.js`.
   - Render frontmatter cover images with Astro's `<Image />` component from `astro:assets`.
5. **Testing**: Run `npm run build && npm test` before finishing changes.
