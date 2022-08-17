import type { NavLinks } from './components';

export interface Context {
  fetch: typeof fetch;
  getLinksService: () => Promise<NavLinks>;
}
