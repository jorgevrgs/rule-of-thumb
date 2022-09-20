// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getCelebritiesController, tryCatchAsync } from '@app/backend';
import { CelebritiesType } from '@app/shared';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      tryCatchAsync<CelebritiesType>(getCelebritiesController)(req, res);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
