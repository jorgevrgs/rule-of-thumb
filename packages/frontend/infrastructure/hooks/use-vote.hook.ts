import { useMemo, useState } from 'react';
import { VoteState } from '../../domain/contants';
import getClassNames from '../../utils/get-class-names';

export function useVoteHook() {
  const [vote, setVote] = useState<VoteState>(VoteState.neutral);
  const setPositiveVote = () => {
    if (vote !== VoteState.positive) {
      setVote(VoteState.positive);
    } else {
      setVote(VoteState.neutral);
    }
  };
  const setNegativeVote = () => {
    if (vote !== VoteState.negative) {
      setVote(VoteState.negative);
    } else {
      setVote(VoteState.neutral);
    }
  };
  const getPositiveVoteClasses = useMemo(() => {
    const classess = [
      'flex',
      'items-center',
      'justify-center',
      'w-8',
      'mr-4',
      'bg-green-positive',
    ];
    if (vote === VoteState.positive) {
      classess.push('border-white', 'border-2');
    } else {
      classess.push('border-transparent');
    }

    return getClassNames(classess);
  }, [vote]);
  const getNegativeVoteClasses = useMemo(() => {
    const classess = [
      'flex',
      'items-center',
      'justify-center',
      'w-8',
      'mr-4',
      'bg-yellow-negative',
    ];

    if (vote === VoteState.negative) {
      classess.push('border-white', 'border-2');
    } else {
      classess.push('border-transparent');
    }

    return getClassNames(classess);
  }, [vote]);
  const isButtonDisabled = useMemo(() => {
    return vote === VoteState.neutral;
  }, [vote]);

  return {
    setPositiveVote,
    setNegativeVote,
    getPositiveVoteClasses,
    getNegativeVoteClasses,
    isButtonDisabled,
  };
}
