import type { Context, NavLinks } from '../../domain/types';

export const getLinksService = ({ fetch }: Context) => {
  return (): Promise<NavLinks> =>
    fetch(new URL('/api/links', process.env.NEXT_FRONTEND_URL)).then((res) =>
      res.json()
    );
};
