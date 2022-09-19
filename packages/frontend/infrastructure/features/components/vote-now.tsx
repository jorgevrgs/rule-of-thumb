import classNames from 'classnames';
import { MouseEventHandler, useMemo, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { VoteState } from '../../../domain';
import type { UpdateVoteParams } from '../../../domain/types';
import { Icon } from '../../components';

interface VoteNowProps {
  celebrityId: string;
  onClick: ({ celebrityId, vote }: UpdateVoteParams) => void;
  isLoading: boolean;
}

export default function VoteNow({
  celebrityId,
  onClick,
  isLoading,
}: VoteNowProps) {
  const [vote, setVote] = useState<VoteState>(VoteState.neutral);

  const handleSetPositiveVote = () => {
    if (vote !== VoteState.positive) {
      setVote(VoteState.positive);
    } else {
      setVote(VoteState.neutral);
    }
  };
  const hadleSetNegativeVote = () => {
    if (vote !== VoteState.negative) {
      setVote(VoteState.negative);
    } else {
      setVote(VoteState.neutral);
    }
  };

  const { isPositiveVote, isNegativeVote, isNeutralVote } = useMemo(
    () => ({
      isPositiveVote: vote === VoteState.positive,
      isNegativeVote: vote === VoteState.negative,
      isNeutralVote: vote === VoteState.neutral,
    }),
    [vote]
  );

  const handleVoteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    onClick({ celebrityId, vote });
  };

  return (
    <>
      <div className="flex items-center justify-center h-8 w-8">
        <button
          className={classNames(
            'flex items-center justify-center w-full h-full border-2 outline-none focus-visible:outline-black bg-green-positive/80 hover:bg-green-positive',
            {
              'border-white': isPositiveVote,
              'border-none': !isPositiveVote,
            }
          )}
          onClick={handleSetPositiveVote}
          type="button"
        >
          <span className="sr-only">Vote positive with thumbs up</span>
          <Icon name="thumbs-up" width={16} height={16} />
        </button>
      </div>

      <div className="flex items-center justify-center h-8 w-8">
        <button
          className={classNames(
            'flex items-center justify-center w-full h-full border-2 outline-none focus-visible:outline-black bg-yellow-negative/80 hover:bg-yellow-negative',
            {
              'border-white': isNegativeVote,
              'border-none': !isNegativeVote,
            }
          )}
          onClick={hadleSetNegativeVote}
          type="button"
        >
          <span className="sr-only">Vote negative with thumbs down</span>
          <Icon name="thumbs-down" width={16} height={16} />
        </button>
      </div>

      <div className="flex items-center justify-center h-8">
        {isLoading ? (
          <PulseLoader />
        ) : (
          <button
            className={classNames(
              'border-slate-700 bg-slate-700/60 border-2 h-full px-8 focus:outline-none focus-visible:border-white',
              {
                'text-slate-400 cursor-not-allowed': isNeutralVote,
                'text-white hover:bg-slate-700': !isNeutralVote,
              }
            )}
            disabled={isNeutralVote}
            onClick={handleVoteClick}
            type="button"
          >
            Vote Now
          </button>
        )}
      </div>
    </>
  );
}
