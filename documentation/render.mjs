import { guidePages } from '../src/public/forward-together/guide-catalog.mjs';
import { articles } from './articles.mjs';

const assetRoot = '/forward-together/assets/';
const hubs = guidePages.filter(page => page.href.split('/').filter(Boolean).length === 1);
const members = hub => guidePages.filter(page => page !== hub && page.href.startsWith(hub.href));
const anchorId = title => title.toLowerCase().replace(/\W+/g, '-');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const illustrations = {
  '/foundations/': 'agricultural-frontier.webp',
  '/components/': 'design-together.webp',
  '/workflows/': 'people-and-purpose.webp',
  '/resources/': 'ranching-valley-turbines.webp'
};

function guideMenu(active) {
  const link = page => `<a href="${page.href}"${page === active ? ' aria-current="page"' : ''}>${page.title}</a>`;
  return hubs.map(hub => `<div class="guide-group">${link(hub)}<ul>${members(hub).map(page =>
    `<li>${link(page)}</li>`).join('')}</ul></div>`).join('');
}

function codeSample(code, language) {
  return `<figure class="code-sample"><figcaption>${language}</figcaption><pre><code>${escape(code)}</code></pre></figure>`;
}

const buttonMarkup = '<button type="button">Save draft</button>\n<p role="status"></p>';
const fieldMarkup = '<label for="workspace">Workspace name</label>\n<input id="workspace" name="workspace" required\n       maxlength="60" aria-describedby="name-hint">\n<p id="name-hint">Use a name your team will recognize.</p>';

const examples = {
  children: page => `<div class="guide-cards">${members(page).map(child =>
    `<a href="${child.href}"><strong>${child.title}</strong><span aria-hidden="true">↗</span><p>${child.description}</p></a>`).join('')}</div>`,
  palette: () => `<div class="palette-grid">${[
    ['Midnight', '#102B3F'], ['Evergreen', '#126C62'], ['Growth', '#B6E96B'], ['Cloud', '#F3F7F9']
  ].map(([name, value]) => `<div><i style="background:${value}"></i><strong>${name}</strong><code>${value}</code></div>`).join('')}</div>`,
  'spacing-code': () => codeSample('.task-group {\n  display: grid;\n  gap: clamp(1rem, 2vw, 2rem);\n  max-inline-size: 65ch;\n}', 'CSS'),
  'button-demo': () => '<div class="guide-demo"><button type="button" class="button" data-draft>Save draft</button><p role="status" data-draft-status>Try saving a sample draft.</p></div>',
  'field-demo': () => `<form class="guide-demo" data-field-example novalidate>${fieldMarkup}<button class="button" type="submit">Check name</button><p role="status" id="field-status"></p></form>`,
  'button-code': () => codeSample(buttonMarkup, 'HTML'),
  'field-code': () => codeSample(fieldMarkup, 'HTML')
};

export function renderGuide(page) {
  const hub = hubs.find(item => page.href.startsWith(item.href));
  const sections = articles[page.href];
  const brand = `<a class="brand" href="/" aria-label="CoBank Design System home"><img class="brand-logo" src="${assetRoot}cobank-logo.svg" width="140" height="22" alt="CoBank"><span class="brand-divider"></span><span class="brand-label">Design<br>System</span></a>`;
  const menu = guideMenu(page);
  const siblingPages = [hub, ...members(hub)];
  const next = siblingPages[siblingPages.indexOf(page) + 1] ?? hubs[(hubs.indexOf(hub) + 1) % hubs.length];
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${page.title} | CoBank Design System</title><meta name="description" content="${page.description}">
<link rel="icon" href="${assetRoot}favicon.svg"><link rel="stylesheet" href="/forward-together/styles.css">
<link rel="stylesheet" href="/forward-together/documentation.css"><script type="module" src="/forward-together/documentation.mjs"></script></head>
<body class="guide-page"><a class="skip-link" href="#main">Skip to content</a>
<header class="guide-header">${brand}<button class="search-trigger" data-search aria-label="Search the design system"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></svg>Search</button></header>
<div class="guide-shell">
<nav class="guide-sidebar" aria-label="Documentation">${menu}</nav>
<details class="guide-mobile-menu"><summary>Browse field guides</summary><nav aria-label="Documentation">${menu}</nav></details>
<main id="main" tabindex="-1">
<nav aria-label="Breadcrumb" class="guide-crumb"><a href="/">Design system</a><span aria-hidden="true">/</span>${page === hub ? hub.title : `<a href="${hub.href}">${hub.title}</a><span aria-hidden="true">/</span>${page.title}`}</nav>
<h1>${page.title}</h1><p class="guide-lead">${page.description}</p>
${page === hub ? `<img class="guide-landscape" src="${assetRoot}${illustrations[hub.href]}" alt="">` : ''}
${sections.map(([title, body]) => `<section class="guide-section" aria-labelledby="${anchorId(title)}"><h2 id="${anchorId(title)}">${title}</h2>${examples[body] ? examples[body](page) : body}</section>`).join('\n')}
<a class="next-guide" href="${next.href}"><span>Read next</span><strong>${next.title} →</strong></a>
</main>
<nav class="guide-outline" aria-label="On this page"><strong>On this page</strong>${sections.map(([title]) => `<a href="#${anchorId(title)}">${title}</a>`).join('')}</nav>
</div>
<footer>${brand}<div><a href="/resources/">Field guides</a><a href="/archive/bootstrap/">Bootstrap archive</a><a href="https://www.cobank.com/">CoBank.com ↗</a></div></footer>
<system-search></system-search></body></html>`;
}
