# myblog

Minimal personal blog built with Astro 7, Content Layer markdown, and native CSS. Zero client-side JavaScript.

## Requirements

- Node.js >= 18
- npm

## Development

```sh
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build static output to dist/
npm run build

# Preview production build locally
npm run preview

# Run build verification tests
npm test
```

## Project Structure

```text
├── public/              # Static files (favicon, robots.txt)
├── src/
│   ├── content/blog/    # Markdown posts and local images
│   ├── layouts/         # Base HTML layout
│   ├── pages/           # Astro routes (index, about, posts, tags)
│   ├── styles/          # Global CSS
│   └── content.config.js # Content Layer collection schema
├── test/                # Build check tests
├── Dockerfile           # Multi-stage Nginx container build
└── astro.config.mjs     # Astro configuration
```

## Deployment

### Static Hosting

Run `npm run build`. Deploy contents of `dist/` to GitHub Pages, Cloudflare Pages, Vercel, or Netlify.

Set `SITE_URL` environment variable during build if setting custom domain.

### Docker

```sh
docker build -t myblog .
docker run -d -p 8080:80 myblog
```
