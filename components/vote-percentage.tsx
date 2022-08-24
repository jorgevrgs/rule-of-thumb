import Icon from 'components/icon';

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

  return (
    <div
      className={`flex items-center justify-center text-lg font-bold h-12 py-2 px-4 text-white ${bgColor}/80 w-full`}
      style={{ maxWidth: `${value.toFixed(0)}%` }}
      aria-label={ariaLabel}
    >
      <Icon name={iconName} width={16} height={16} />
      <span className="ml-2 text-base font-xs">{value.toFixed(2)} %</span>
    </div>
  );
}
