import type { CelebrityType } from '@app/shared';
import { logger } from '@app/shared';
import type { UpdateVoteParams } from '../../domain';

export async function updateVoteService({
  celebrityId,
  vote,
}: UpdateVoteParams): Promise<CelebrityType> {
  logger.info('Running updateVoteService', celebrityId, vote);

  const response = await fetch(`/api/celebrities/${celebrityId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ vote }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
