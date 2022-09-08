import { CelebritiesType, CelebrityType } from '@app/shared';
import { UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { MouseEventHandler, useMemo } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { Stores } from '../../../domain';
import type { UpdateVoteParams, VoteProps } from '../../../domain/types';
import { Icon } from '../../components';
import { useUpdateVoteCelebrities, useVoteHook } from '../hooks';
import Veredict from './veredict';

interface VoteAgainProps {
  onClick: MouseEventHandler;
}

interface VoteNowProps {
  celebrityId: string;
  mutate: UseMutationResult<
    CelebrityType,
    unknown,
    UpdateVoteParams,
    unknown
  >['mutate'];
  isLoading: boolean;
}

export function VoteAgain({ onClick }: VoteAgainProps) {
  return (
    <button
      className="border-white bg-slate-700/60 border-2 h-8 px-8"
      onClick={onClick}
    >
      Vote Again
    </button>
  );
}

export function VoteNow({ celebrityId, mutate, isLoading }: VoteNowProps) {
  const {
    getPositiveVoteClasses,
    setPositiveVote,
    getNegativeVoteClasses,
    setNegativeVote,
    isButtonDisabled,
    currentVote,
  } = useVoteHook();

  const handleVoteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    mutate({ celebrityId, vote: currentVote });
  };

  return (
    <>
      <div className="flex items-center justify-center h-8 w-8">
        <button className={getPositiveVoteClasses} onClick={setPositiveVote}>
          <Icon name="thumbs-up" width={16} height={16} />
        </button>
      </div>

      <div className="flex items-center justify-center h-8 w-8">
        <button className={getNegativeVoteClasses} onClick={setNegativeVote}>
          <Icon name="thumbs-down" width={16} height={16} />
        </button>
      </div>

      <div className="flex items-center justify-center h-8">
        {isLoading ? (
          <PulseLoader />
        ) : (
          <button
            className="border-white bg-slate-700/60 border-2 h-full px-8"
            disabled={isButtonDisabled}
            onClick={handleVoteClick}
          >
            Vote Now
          </button>
        )}
      </div>
    </>
  );
}

export default function Vote({ celebrityId }: VoteProps) {
  const { mutate, reset, isSuccess, isLoading, data } =
    useUpdateVoteCelebrities();

  const queryClient = useQueryClient();

  const votes = useMemo(() => {
    const current =
      data ||
      queryClient
        .getQueryData<CelebritiesType>([Stores.celebrities])
        ?.find((c) => c.celebrityId === celebrityId);

    return current?.votes;
  }, [celebrityId, queryClient, data]);

  return (
    <>
      <div className="absolute inset-x-0 bottom-0">
        {votes && <Veredict {...votes} />}
      </div>
      {isSuccess ? (
        <VoteAgain onClick={reset} />
      ) : (
        <VoteNow
          mutate={mutate}
          isLoading={isLoading}
          celebrityId={celebrityId}
        />
      )}
    </>
  );
}
