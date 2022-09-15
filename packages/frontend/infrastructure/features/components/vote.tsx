import { useEffect } from 'react';
import type { UpdateVoteParams, VoteProps } from '../../../domain/types';
import { useAppDispatch } from '../../hooks';
import { useGetCelebrityById } from '../hooks';
import { celebritiesSlice, useUpdateVoteMutation } from '../slices';
import Veredict from './veredict';
import { VoteAgain } from './vote-again';
import { VoteNow } from './vote-now';
import VoteResult from './vote-result';

export default function Vote({ celebrityId }: VoteProps) {
  const [mutate, result] = useUpdateVoteMutation();
  const { reset, isSuccess, isLoading, data: updatedCelebrity } = result;
  const { data: celebrity } = useGetCelebrityById(celebrityId);
  const dispatch = useAppDispatch();

  const updateVote = ({ celebrityId, vote }: UpdateVoteParams) => {
    mutate({ celebrityId, vote });
  };

  useEffect(() => {
    console.log('Detecting changes in the vote result', updatedCelebrity);
    if (updatedCelebrity) {
      dispatch(
        celebritiesSlice.util.updateQueryData(
          'getCelebrities',
          undefined,
          (celebrities) => {
            const index = celebrities.findIndex(
              (celebrity) => celebrity.celebrityId === celebrityId
            );

            if (index > -1 && updatedCelebrity) {
              const celebrity = celebrities[index];
              celebrity.votes = updatedCelebrity.votes;
            }

            return celebrities;
          }
        )
      );
    }
  }, [updatedCelebrity, celebrityId, dispatch]);

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
          updateVote={updateVote}
          isLoading={isLoading}
          celebrityId={celebrityId}
        />
      )}
    </>
  );
}
