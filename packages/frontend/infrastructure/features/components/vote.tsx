import classNames from 'classnames';
import { useMemo } from 'react';
import type { UpdateVoteParams } from '../../../domain/types';
import { useGetCelebritiesQuery, useUpdateVoteMutation } from '../hooks';
import VoteAgain from './vote-again';
import VoteBar from './vote-bar';
import VoteInfo from './vote-info';
import VoteNow from './vote-now';
import VoteResult from './vote-result';

interface VoteProps {
  celebrityId: string;
  isList: boolean;
}

export default function Vote({ celebrityId, isList }: VoteProps) {
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

  const handleResetVote = () => {
    reset();
  };

  return (
    <>
      {celebrity && (
        <VoteInfo
          lastUpdated={celebrity.lastUpdated}
          category={celebrity.category}
          isSuccess={isSuccess}
        />
      )}

      <div
        className={classNames(
          'flex flex-wrap items-center gap-4 w-full md:flex-no-wrap',
          isList
            ? 'justify-end content-start h-full'
            : 'justify-center my-8 h-10'
        )}
      >
        {celebrity && <VoteResult {...celebrity.votes} />}

        <div className="absolute inset-x-0 bottom-0">
          {celebrity && <VoteBar {...celebrity.votes} />}
        </div>

        {isSuccess ? (
          <VoteAgain onClick={handleResetVote} />
        ) : (
          <VoteNow
            onClick={handleUpdateVote}
            isLoading={isLoading}
            celebrityId={celebrityId}
          />
        )}
      </div>
    </>
  );
}
