// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type {
  Celebrities,
  Celebrity,
  GetCelebritiesResponse,
  OriginCelebrity,
} from '../../types';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Celebrities>
) {
  if (
    !process.env.BACKEND_API_URL ||
    !process.env.BACKEND_API_GET_CELEBRITIES
  ) {
    throw new Error(
      'Missing either BACKEND_API_URL or BACKEND_API_GET_CELEBRITIES variable'
    );
  }

  const url = new URL(
    process.env.BACKEND_API_GET_CELEBRITIES,
    process.env.BACKEND_API_URL
  );

  const featured: Celebrity = {
    celebrityId: 'featured',
    name: 'Pope Francis',
    picture: '/assets/img/pope-francis.@2x.png',
    description:
      'Pope Francis is the head of the Catholic Church. He is the first Jesuit pope, the first from the Americas, the first from the Southern Hemisphere, and the first pope from outside Europe since the Syrian Gregory III, 1,700 years ago.',
    votes: {
      positive: 78,
      negative: 22,
    },
    active: true,
    lastUpdated: '',
    category: 'Religion',
  };

  const celebrities = await fetch(url)
    .then((data) => data.json())
    .then((data: GetCelebritiesResponse) => data.data)
    .then((data: OriginCelebrity[]) =>
      data.map(({ celebrity_id, ...rest }) => ({
        ...rest,
        active: rest.active === 'T',
        celebrityId: celebrity_id,
      }))
    )
    .then((data) => data.filter((item) => item.active));

  celebrities.unshift(featured);

  res.status(200).json(celebrities);
}
