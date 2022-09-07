// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { updateCelebrityByIdCollection } from '@app/backend';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'PATCH':
      const vote: string = req.body.vote;

      const increment: Record<string, Record<string, number>> = {
        positive: { 'votes.positive': 1 },
        negative: { 'votes.negative': 1 },
      };

      const result = await updateCelebrityByIdCollection(
        req.query.id as string,
        { $inc: increment[vote] }
      );

      res.status(200).json(result);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
