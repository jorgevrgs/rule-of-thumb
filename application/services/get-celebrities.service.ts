import type {
  Celebrities,
  Context,
  GetCelebritiesResponse,
  OriginCelebrity,
} from '../../types';

export const getCelebritiesService = ({ fetch }: Context) => {
  if (!process.env.BACKEND_API_URL) {
    throw new Error('BACKEND_API_URL is not defined');
  }

  const url: string = process.env.BACKEND_API_URL;

  return (): Promise<Celebrities> =>
    fetch(url)
      .then((res) => res.json())
      .then((res: GetCelebritiesResponse) => res.data)
      .then((res: OriginCelebrity[]) =>
        res.map(({ celebrity_id, ...rest }) => ({
          ...rest,
          active: rest.active === 'T',
          celebrityId: celebrity_id,
        }))
      )
      .then((res) => res.filter((item) => item.active));
};
