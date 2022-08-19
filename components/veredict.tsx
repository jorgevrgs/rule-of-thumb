import type { VeredictProps } from '../types';
import Icon from './icon';

export default function Veredict({ positive, negative }: VeredictProps) {
  const positivePercentage = (positive / (positive + negative)) * 100;
  const negativePercentage = (negative / (positive + negative)) * 100;

  return (
    <>
      <div className="flex justify-between align-middle w-full">
        <div
          className={`flex align-middle text-lg font-bold h-12 py-2 px-4 text-white bg-green-positive/80 w-full`}
          style={{ maxWidth: `${positivePercentage.toFixed(0)}%` }}
          aria-label="thumbs up"
        >
          <Icon name="thumbs-up" width={16} height={16} />
          <span className="ml-2 text-base font-normal">
            {positivePercentage.toFixed(2)} %
          </span>
        </div>
        <div
          className={`flex align-middle text-lg font-bold h-12 py-2 px-4 text-white bg-yellow-negative/80 w-full`}
          style={{ maxWidth: `${negativePercentage.toFixed(0)}%` }}
          aria-label="thumbs down"
        >
          <Icon name="thumbs-down" width={16} height={16} />
          <span className="ml-2 text-base font-normal">
            {negativePercentage.toFixed(2)} %
          </span>
        </div>
      </div>
    </>
  );
}
