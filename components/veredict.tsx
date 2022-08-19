import type { VeredictProps } from '../types';
import VotePercentage from './vote-percentage';

export default function Veredict({ positive, negative }: VeredictProps) {
  const positivePercentage = (positive / (positive + negative)) * 100;
  const negativePercentage = (negative / (positive + negative)) * 100;

  return (
    <>
      <div className="flex justify-between align-middle w-full">
        <VotePercentage positive={positivePercentage} />
        <VotePercentage negative={negativePercentage} />
      </div>
    </>
  );
}
