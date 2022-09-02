// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { findCelebritiesCollection } from '@app/backend';
import type { CelebritiesType } from '@app/shared';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CelebritiesType>
) {
  const celebrities = await findCelebritiesCollection<CelebritiesType>();

  res.status(200).json(celebrities);
}
