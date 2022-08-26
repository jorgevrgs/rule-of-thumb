import Icon from 'components/icon';
import useVoteHook from 'infrastructure/hooks/use-vote.hook';

export default function Vote({ celebrityId }: { celebrityId: string }) {
  const {
    getPositiveVoteClasses,
    setPositiveVote,
    getNegativeVoteClasses,
    setNegativeVote,
    isButtonDisabled,
  } = useVoteHook();

  return (
    <div className="flex justify-center my-8">
      <button className={getPositiveVoteClasses} onClick={setPositiveVote}>
        <Icon name="thumbs-up" width={16} height={16} />
      </button>

      <button className={getNegativeVoteClasses} onClick={setNegativeVote}>
        <Icon name="thumbs-down" width={16} height={16} />
      </button>

      <button
        className="border-white border-2 h-8 px-8"
        disabled={isButtonDisabled}
      >
        Vote Now
      </button>
    </div>
  );
}
