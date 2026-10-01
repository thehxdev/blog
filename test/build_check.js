import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

assert(fs.existsSync(path.join(distDir, 'index.html')), 'index.html missing');
assert(fs.existsSync(path.join(distDir, 'about/index.html')), 'about/index.html missing');
assert(fs.existsSync(path.join(distDir, 'posts/hello-world/index.html')), 'hello-world post missing');
assert(fs.existsSync(path.join(distDir, 'posts/image-demo/index.html')), 'image-demo post missing');
assert(fs.existsSync(path.join(distDir, 'tags/astro/index.html')), 'tag astro page missing');
assert(fs.existsSync(path.join(distDir, 'tags/meta/index.html')), 'tag meta page missing');

const postHtml = fs.readFileSync(path.join(distDir, 'posts/image-demo/index.html'), 'utf8');
assert(postHtml.includes('<img'), 'img tag missing in post');
assert(postHtml.includes('href="/tags/astro"'), 'tag link missing in post');

const tagHtml = fs.readFileSync(path.join(distDir, 'tags/astro/index.html'), 'utf8');
assert(tagHtml.includes('#astro'), 'tag title missing in tag page');
assert(tagHtml.includes('href="/posts/hello-world"'), 'post link missing in tag page');
assert(tagHtml.includes('href="/posts/image-demo"'), 'post link missing in tag page');

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
assert(indexHtml.includes('Hossein'), 'Hossein missing in index');

const faviconSvg = fs.readFileSync(path.join(distDir, 'favicon.svg'), 'utf8');
assert(faviconSvg.includes('>H<'), 'Favicon letter H missing');

const astroDir = path.join(distDir, '_astro');
const cssFile = fs.readdirSync(astroDir).find((file) => file.endsWith('.css'));
assert(cssFile, 'CSS file missing in dist/_astro');
const cssContent = fs.readFileSync(path.join(astroDir, cssFile), 'utf8');
assert(cssContent.includes('text-decoration:underline 1px'), 'link underline missing in compiled CSS');

console.log('Build check passed.');
