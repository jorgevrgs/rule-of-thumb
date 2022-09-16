import { MouseEventHandler } from 'react';

interface VoteAgainProps {
  onClick: MouseEventHandler;
}

export default function VoteAgain({ onClick }: VoteAgainProps) {
  return (
    <button
      className="border-white bg-slate-700/60 border-2 h-8 px-8"
      role="button"
      onClick={onClick}
    >
      Vote Again
    </button>
  );
}
