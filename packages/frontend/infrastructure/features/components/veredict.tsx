import type { VeredictProps } from '../../../domain/types';
import VotePercentage from './vote-percentage';

export default function Veredict({ positive, negative }: VeredictProps) {
  const positivePercentage = (positive / (positive + negative)) * 100;
  const negativePercentage = (negative / (positive + negative)) * 100;

  return (
    <div className="flex w-full" role="list">
      <VotePercentage positive={positivePercentage} />
      <VotePercentage negative={negativePercentage} />
    </div>
  );
}
