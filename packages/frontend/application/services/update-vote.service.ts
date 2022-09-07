import { CelebrityType, logger } from '@app/shared';
import type { UpdateVoteParams } from '../../domain';

export async function updateVoteService({
  celebrityId,
  vote,
}: UpdateVoteParams): Promise<CelebrityType> {
  logger.info('Running updateVoteService', celebrityId, vote);

  return fetch(
    new URL(`/api/celebrities/${celebrityId}`, process.env.NEXT_FRONTEND_URL),
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vote }),
    }
  ).then((res) => res.json());
}
