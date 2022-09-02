import VotePercentage from '../components/vote-percentage';
import type { VeredictProps } from '../domain/types';

export default function Veredict({ positive, negative }: VeredictProps) {
  const positivePercentage = (positive / (positive + negative)) * 100;
  const negativePercentage = (negative / (positive + negative)) * 100;

  return (
    <div className="flex w-full">
      <VotePercentage positive={positivePercentage} />
      <VotePercentage negative={negativePercentage} />
    </div>
  );
}
