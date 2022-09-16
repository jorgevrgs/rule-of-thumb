import { getTimeAgo } from '../../../application';

interface VoteInfoProps {
  lastUpdated: string;
  isSuccess: boolean;
  category: string;
}

export default function VoteInfo({
  lastUpdated,
  isSuccess,
  category,
}: VoteInfoProps) {
  return (
    <p className="text-right text-sm mt-4 w-full">
      {isSuccess
        ? 'Thank you for your vote!'
        : `${getTimeAgo(lastUpdated)} in ${category}`}
    </p>
  );
}
