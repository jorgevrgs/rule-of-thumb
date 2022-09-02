import type { Celebrities, Context } from '../../domain/types';

export const getCelebritiesService = ({ fetch }: Context) => {
  return (): Promise<Celebrities> =>
    fetch(new URL('/api/celebrities', process.env.NEXT_FRONTEND_URL)).then(
      (res) => res.json()
    );
};
