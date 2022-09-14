import classNames from 'classnames';
import { Icon } from '../../components';

interface VoteResultProps {
  positive: number;
  negative: number;
}

export default function VoteResult({
  positive = 0,
  negative = 0,
}: VoteResultProps) {
  const positivePercentage = (positive / (positive + negative)) * 100;

  return (
    <div
      className={classNames(
        `absolute inset-0 w-11 h-11 flex justify-center items-center`,
        {
          'bg-green-positive/80': positivePercentage >= 50,
          'bg-yellow-negative/80': positivePercentage < 50,
        }
      )}
    >
      <Icon name={positivePercentage >= 50 ? 'thumbs-up' : 'thumbs-down'} />
    </div>
  );
}
