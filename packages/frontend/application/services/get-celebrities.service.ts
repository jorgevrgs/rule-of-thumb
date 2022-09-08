import type { CelebritiesType } from '@app/shared';

export async function getCelebritiesService(): Promise<CelebritiesType> {
  const response = await fetch(
    new URL('/api/celebrities', process.env.NEXT_FRONTEND_URL)
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
