import { useVoteHook } from '../../infrastructure/hooks';
import type { CelebrityType } from '../types';
import Icon from './icon';

export default function Vote({
  celebrityId,
}: Pick<CelebrityType, 'celebrityId'>) {
  const {
    getPositiveVoteClasses,
    setPositiveVote,
    getNegativeVoteClasses,
    setNegativeVote,
    isButtonDisabled,
  } = useVoteHook();

  return (
    <div className="flex justify-center gap-8 my-8 w-full h-10">
      <div className="flex items-center justify-center h-[30px] w-[30px]">
        <button className={getPositiveVoteClasses} onClick={setPositiveVote}>
          <Icon name="thumbs-up" width={16} height={16} />
        </button>
      </div>

      <div className="flex items-center justify-center h-[30px] w-[30px]">
        <button className={getNegativeVoteClasses} onClick={setNegativeVote}>
          <Icon name="thumbs-down" width={16} height={16} />
        </button>
      </div>

      <div className="flex items-center justify-center h-[30px]">
        <button
          className="border-white bg-black/70 border-2 h-full px-8"
          disabled={isButtonDisabled}
        >
          Vote Now
        </button>
      </div>
    </div>
  );
}
