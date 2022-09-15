import { MouseEventHandler } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import type { UpdateVoteParams } from '../../../domain/types';
import { Icon } from '../../components';
import { useGetVoteClassesHook } from '../hooks';

interface VoteNowProps {
  celebrityId: string;
  updateVote: ({ celebrityId, vote }: UpdateVoteParams) => void;
  isLoading: boolean;
}

export function VoteNow({ celebrityId, updateVote, isLoading }: VoteNowProps) {
  const {
    getPositiveVoteClasses,
    setPositiveVote,
    getNegativeVoteClasses,
    setNegativeVote,
    isButtonDisabled,
    currentVote,
  } = useGetVoteClassesHook();

  const handleVoteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    updateVote({ celebrityId, vote: currentVote });
  };

  return (
    <>
      <div
        className="flex items-center justify-center h-8 w-8"
        role="img"
        aria-label="Vote positive"
      >
        <button
          className={getPositiveVoteClasses}
          onClick={setPositiveVote}
          role="button"
          aria-label="Thumbs up"
        >
          <Icon name="thumbs-up" width={16} height={16} />
        </button>
      </div>

      <div
        className="flex items-center justify-center h-8 w-8"
        role="img"
        aria-label="Vote negative"
      >
        <button
          className={getNegativeVoteClasses}
          onClick={setNegativeVote}
          role="button"
          aria-label="Thumbs down"
        >
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
            role="button"
          >
            Vote Now
          </button>
        )}
      </div>
    </>
  );
}
