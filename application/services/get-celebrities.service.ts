import type { Celebrities, Context } from '../../types';

export const getCelebritiesService = ({ fetch }: Context) => {
  return (): Promise<Celebrities> =>
    fetch(new URL('/api/celebrities', process.env.PUBLIC_API_URL)).then((res) =>
      res.json()
    );
};
