import { roundValue } from '../../../application/utils';
import { Icon } from '../../components';

interface VotePercentageProps {
  positive?: number;
  negative?: number;
}

export default function VotePercentage({
  positive = 0,
  negative = 0,
}: VotePercentageProps) {
  const value = positive - negative;
  const isPositive = value > 0;
  const ariaLabel = isPositive ? 'thumbs up' : 'thumbs down';
  const bgColor = isPositive ? 'bg-green-positive' : 'bg-yellow-negative';
  const iconName = isPositive ? 'thumbs-up' : 'thumbs-down';
  const absValue = roundValue(Math.abs(value), 2);
  const roundedValue = roundValue(absValue);

  return (
    <div
      className={`flex items-center justify-center text-lg font-bold h-12 py-2 px-4 text-white ${bgColor}/80`}
      style={{ width: `${roundedValue}%`, minWidth: '30%' }}
    >
      <span className="sr-only">={ariaLabel}</span>
      <Icon name={iconName} width={16} height={16} />
      <span className="ml-2 text-base font-xs">{`${absValue} %`}</span>
    </div>
  );
}
