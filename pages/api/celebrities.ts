// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type {
  Celebrities,
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

  res.status(200).json(celebrities);
}
