// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Celebrities } from 'domain/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Celebrities>
) {
  const { data } = await import('assets/data.json');

  res.status(200).json(data as Celebrities);
}
