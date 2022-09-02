import type { CelebritiesType } from '../../domain/types';

export async function getCelebritiesService(): Promise<CelebritiesType> {
  return fetch(new URL('/api/celebrities', process.env.NEXT_FRONTEND_URL)).then(
    (res) => res.json()
  );
}
