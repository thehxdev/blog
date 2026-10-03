import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

assert(fs.existsSync(path.join(distDir, 'index.html')), 'index.html missing');
assert(fs.existsSync(path.join(distDir, 'about/index.html')), 'about/index.html missing');
assert(fs.existsSync(path.join(distDir, 'posts/hello-world/index.html')), 'hello-world post missing');
assert(fs.existsSync(path.join(distDir, 'tags/systems/index.html')), 'tag systems page missing');
assert(fs.existsSync(path.join(distDir, 'tags/intro/index.html')), 'tag intro page missing');

const postHtml = fs.readFileSync(path.join(distDir, 'posts/hello-world/index.html'), 'utf8');
assert(postHtml.includes('thehxdev'), 'github handle missing in post');
assert(postHtml.includes('/tags/systems'), 'tag link missing in post');

const tagHtml = fs.readFileSync(path.join(distDir, 'tags/systems/index.html'), 'utf8');
assert(tagHtml.includes('#systems'), 'tag title missing in tag page');
assert(tagHtml.includes('/posts/hello-world'), 'post link missing in tag page');

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
assert(indexHtml.includes('Hossein'), 'Hossein missing in index');
assert(indexHtml.includes('/posts/hello-world'), 'post link missing in index page');

const faviconSvg = fs.readFileSync(path.join(distDir, 'favicon.svg'), 'utf8');
assert(faviconSvg.includes('>H<'), 'Favicon letter H missing');

const astroDir = path.join(distDir, '_astro');
const cssFile = fs.readdirSync(astroDir).find((file) => file.endsWith('.css'));
assert(cssFile, 'CSS file missing in dist/_astro');
const cssContent = fs.readFileSync(path.join(astroDir, cssFile), 'utf8');
assert(cssContent.includes('text-decoration:underline 1px'), 'link underline missing in compiled CSS');

console.log('Build check passed.');
