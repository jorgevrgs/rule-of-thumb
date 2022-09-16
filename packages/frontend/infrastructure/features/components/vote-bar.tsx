import VotePercentage from './vote-percentage';

interface VoteBarProps {
  positive: number;
  negative: number;
}

export default function VoteBar({ positive, negative }: VoteBarProps) {
  const positivePercentage = (positive / (positive + negative)) * 100;
  const negativePercentage = (negative / (positive + negative)) * 100;

  return (
    <div className="flex w-full">
      <VotePercentage positive={positivePercentage} />
      <VotePercentage negative={negativePercentage} />
    </div>
  );
}
