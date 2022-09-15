import { useMemo } from 'react';
import type { UpdateVoteParams, VoteProps } from '../../../domain/types';
import { useGetCelebrityById } from '../hooks';
import { useUpdateVoteMutation } from '../slices';
import Veredict from './veredict';
import { VoteAgain } from './vote-again';
import { VoteNow } from './vote-now';
import VoteResult from './vote-result';

export default function Vote({ celebrityId }: VoteProps) {
  const [mutate, result] = useUpdateVoteMutation();
  const { reset, isSuccess, isLoading, data } = result;
  const { data: celebrity } = useGetCelebrityById(celebrityId);

  const votes = useMemo(() => {
    const current = data || celebrity;

    return current?.votes;
  }, [celebrity, data]);

  const updateVote = ({ celebrityId, vote }: UpdateVoteParams) => {
    mutate({ celebrityId, vote });
  };

  return (
    <>
      {votes && <VoteResult {...votes} />}

      <div className="absolute inset-x-0 bottom-0">
        {votes && <Veredict {...votes} />}
      </div>

      {isSuccess ? (
        <VoteAgain onClick={reset} />
      ) : (
        <VoteNow
          updateVote={updateVote}
          isLoading={isLoading}
          celebrityId={celebrityId}
        />
      )}
    </>
  );
}
