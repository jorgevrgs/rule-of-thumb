import type { Context, NavLinks } from '../../domain/types';

export const getLinksService = ({ fetch }: Context) => {
  return (): Promise<NavLinks> =>
    fetch(new URL('/api/links', process.env.PUBLIC_API_URL)).then((res) =>
      res.json()
    );
};
