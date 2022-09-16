import { useMemo } from 'react';
import type { UpdateVoteParams, VoteProps } from '../../../domain/types';
import { useGetCelebritiesQuery, useUpdateVoteMutation } from '../hooks';
import Veredict from './veredict';
import { VoteAgain } from './vote-again';
import { VoteNow } from './vote-now';
import VoteResult from './vote-result';

export default function Vote({ celebrityId }: VoteProps) {
  const { data: celebrities, isLoading } = useGetCelebritiesQuery();
  const {
    mutate,
    data: updatedCelebrity,
    reset,
    isSuccess,
  } = useUpdateVoteMutation();
  const celebrity = useMemo(() => {
    return (
      updatedCelebrity ??
      celebrities?.find((c) => c.celebrityId === celebrityId)
    );
  }, [celebrityId, celebrities, updatedCelebrity]);

  const handleUpdateVote = ({ celebrityId, vote }: UpdateVoteParams) => {
    mutate({ celebrityId, vote });
  };

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
          isLoading={isLoading}
          celebrityId={celebrityId}
        />
      )}
    </>
  );
}
