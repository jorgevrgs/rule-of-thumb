import { CelebritiesType, CelebrityType } from '@app/shared';
import assert from 'assert';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  findCelebritiesCollection,
  updateCelebrityByIdCollection,
} from '../../application';

export async function getCelebritiesController(
  _req: NextApiRequest,
  res: NextApiResponse<CelebritiesType>
) {
  const celebrities = await findCelebritiesCollection();

  res.status(200).json(celebrities);
}

export async function updateVoteController(
  req: NextApiRequest,
  res: NextApiResponse<CelebrityType>
) {
  const vote: string = req.body.vote;
  const id = req.query.id;

  assert(id, 'id is required');
  assert(typeof id === 'string', 'id must be a string');
  assert(vote, 'vote is required');

  const increment: Record<string, Record<string, number>> = {
    positive: { 'votes.positive': 1 },
    negative: { 'votes.negative': 1 },
  };

  const result = await updateCelebrityByIdCollection(id, {
    $inc: increment[vote],
  });

  res.status(200).json(result);
}
