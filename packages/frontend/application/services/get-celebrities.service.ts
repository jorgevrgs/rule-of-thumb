import type { CelebritiesType } from '@app/shared';

export async function getCelebritiesService(): Promise<CelebritiesType> {
  const response = await fetch('/api/celebrities');

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
