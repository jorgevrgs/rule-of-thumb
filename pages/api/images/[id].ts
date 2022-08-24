import { createReadStream } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const file = createReadStream(`assets/pictures/${req.query.id}`);
    res.setHeader('Content-Type', 'image/png');
    file.pipe(res);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ success: false, error });
  }
}
