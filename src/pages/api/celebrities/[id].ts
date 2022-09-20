// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { tryCatchAsync, updateVoteController } from '@app/backend';
import { CelebrityType } from '@app/shared';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'PATCH':
      tryCatchAsync<CelebrityType>(updateVoteController)(req, res);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
