import { useEffect, useRef } from 'react';

interface VoteAgainProps {
  onClick: () => void;
}

export default function VoteAgain({ onClick }: VoteAgainProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <button
      className="bg-slate-700/60 border-2 h-9 px-8 focus:outline-none focus-visible:border-white"
      type="button"
      onClick={onClick}
      ref={ref}
    >
      Vote Again
    </button>
  );
}
