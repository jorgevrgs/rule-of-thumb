import type { NextApiRequest, NextApiResponse } from 'next';
import getPictureStream from '../../../utils/get-picture-stream';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file = await getPictureStream(req.query.id as string);

  res.setHeader('Content-Type', 'image/png');
  file.pipe(res);
}
