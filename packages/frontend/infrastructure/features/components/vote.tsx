import type { MouseEventHandler } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import type { VoteProps } from '../../../domain/types';
import { Icon } from '../../components';
import { useUpdateVoteCelebrities, useVoteHook } from '../hooks';

export default function Vote({ celebrityId }: VoteProps) {
  const { mutate, isLoading, isSuccess, reset } = useUpdateVoteCelebrities();
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

  return isSuccess ? (
    <button
      className="border-white bg-slate-700/60 border-2 h-full px-8"
      onClick={reset}
    >
      Vote Again
    </button>
  ) : (
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
