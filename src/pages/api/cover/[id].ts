import { getCoverByNameController, tryCatchAsync } from '@app/backend';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      tryCatchAsync<NodeJS.ReadableStream>(getCoverByNameController)(req, res);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
