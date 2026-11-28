import { guidePages } from '../src/public/forward-together/guide-catalog.mjs';
import { renderGuide } from './render.mjs';

export function fieldGuidePages() {
  const routes = new Map(guidePages.map(page => [page.href, page]));
  return {
    name: 'field-guide-pages',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = new URL(req.url, 'http://localhost').pathname;
        const route = pathname.replace(/\/index\.html$/, '/').replace(/\/?$/, '/');
        const page = routes.get(route);
        if (!page) return next();
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(renderGuide(page));
      });
    },
    generateBundle() {
      for (const page of guidePages) {
        this.emitFile({ type: 'asset', fileName: page.href.slice(1) + 'index.html', source: renderGuide(page) });
      }
    }
  };
}
