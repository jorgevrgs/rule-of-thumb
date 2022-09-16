import { useMemo, useState } from 'react';
import type { UpdateVoteParams, VoteProps } from '../../../domain/types';
import { useGetCelebritiesQuery, useUpdateVoteMutation } from '../apis';
import Veredict from './veredict';
import { VoteAgain } from './vote-again';
import { VoteNow } from './vote-now';
import VoteResult from './vote-result';

export default function Vote({ celebrityId }: VoteProps) {
  const [hasVoted, setHasVoted] = useState(false);

  const { data: celebrities, isFetching } = useGetCelebritiesQuery();
  const [mutate, { data: updatedCelebrity }] = useUpdateVoteMutation();
  const celebrity = useMemo(() => {
    return celebrities?.find((c) => c.celebrityId === celebrityId);
  }, [celebrityId, celebrities]);

  const handleUpdateVote = ({ celebrityId, vote }: UpdateVoteParams) => {
    mutate({ celebrityId, vote });
    setHasVoted(true);
  };

  return (
    <>
      {celebrity && <VoteResult {...celebrity.votes} />}

      <div className="absolute inset-x-0 bottom-0">
        {celebrity && <Veredict {...celebrity.votes} />}
      </div>

      {hasVoted ? (
        <VoteAgain onClick={() => setHasVoted(false)} />
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
