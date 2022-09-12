import classNames from 'classnames/bind';
import { roundValue } from '../../../application/utils';
import { Icon } from '../../components';

interface CelebrityDesktopUIProps {
  bgColor: string;
  ariaLabel: string;
  roundedValue: number;
  absValue: number;
  iconName: string;
}

export function VotePercentageUI({
  bgColor,
  ariaLabel,
  roundedValue,
  absValue,
  iconName,
}: CelebrityDesktopUIProps) {
  return (
    <div
      className={classNames([
        'flex',
        'items-center',
        'justify-center',
        'text-lg',
        'font-bold',
        'h-12',
        'py-2',
        'px-4',
        'text-white',
        `${bgColor}/80`,
      ])}
      aria-label={ariaLabel}
      style={{ width: `${roundedValue}%`, minWidth: '30%' }}
    >
      <Icon name={iconName} width={16} height={16} />
      <span className="ml-2 text-base font-xs">{`${absValue} %`}</span>
    </div>
  );
}

export default function VotePercentage({
  positive = 0,
  negative = 0,
}: {
  positive?: number;
  negative?: number;
}) {
  const value = positive - negative;
  const isPositive = value > 0;
  const ariaLabel = isPositive ? 'thumbs up' : 'thumbs down';
  const bgColor = isPositive ? 'bg-green-positive' : 'bg-yellow-negative';
  const iconName = isPositive ? 'thumbs-up' : 'thumbs-down';
  const absValue = roundValue(Math.abs(value), 2);
  const roundedValue = roundValue(absValue);

  return (
    <VotePercentageUI
      bgColor={bgColor}
      ariaLabel={ariaLabel}
      roundedValue={roundedValue}
      absValue={absValue}
      iconName={iconName}
    />
  );
}
