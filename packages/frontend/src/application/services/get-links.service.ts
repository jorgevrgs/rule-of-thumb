import type { NavLinksType } from '../../domain/types';

export async function getLinksService(): Promise<NavLinksType> {
  return fetch(new URL('/api/links', process.env.NEXT_FRONTEND_URL)).then(
    (res) => res.json()
  );
}
