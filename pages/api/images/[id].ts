import { getPictureStream } from '@app/backend';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file = await getPictureStream(req.query.id as string);

  res.setHeader('Content-Type', 'image/png');
  file.pipe(res);
}
