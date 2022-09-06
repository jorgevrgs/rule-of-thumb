import type { VoteProps } from '../../../domain/types';
import { Icon } from '../../components';
import { useVoteHook } from '../hooks';

export default function Vote({ celebrityId }: VoteProps) {
  const {
    getPositiveVoteClasses,
    setPositiveVote,
    getNegativeVoteClasses,
    setNegativeVote,
    isButtonDisabled,
  } = useVoteHook();

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
        <button
          className="border-white bg-black/70 border-2 h-full px-8"
          disabled={isButtonDisabled}
        >
          Vote Now
        </button>
      </div>
    </>
  );
}
