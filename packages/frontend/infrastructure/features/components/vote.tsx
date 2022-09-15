import type { VoteProps } from '../../../domain/types';
import { useGetCelebrityById, useUpdateVoteById } from '../hooks';
import Veredict from './veredict';
import { VoteAgain } from './vote-again';
import { VoteNow } from './vote-now';
import VoteResult from './vote-result';

export default function Vote({ celebrityId }: VoteProps) {
  const { data: celebrity, isFetching } = useGetCelebrityById(celebrityId);
  const { handleUpdateVote, isSuccess, reset } = useUpdateVoteById(celebrityId);

  return (
    <>
      {celebrity && <VoteResult {...celebrity.votes} />}

      <div className="absolute inset-x-0 bottom-0">
        {celebrity && <Veredict {...celebrity.votes} />}
      </div>

      {isSuccess ? (
        <VoteAgain onClick={reset} />
      ) : (
        <VoteNow
          onClick={handleUpdateVote}
          isLoading={isFetching}
          celebrityId={celebrityId}
        />
      )}
    </>
  );
}
