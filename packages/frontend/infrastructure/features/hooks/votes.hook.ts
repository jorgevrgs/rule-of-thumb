import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';
import { VoteState } from '../../../domain/constants';

export function useGetVoteClassesHook() {
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

  const baseClasses = useMemo(
    () => ['flex', 'items-center', 'justify-center', 'w-full', 'h-full'],
    []
  );

  const getPositiveVoteClasses = useMemo(() => {
    const classess = [
      ...baseClasses,
      'bg-green-positive/80',
      'hover:bg-green-positive',
    ];
    if (vote === VoteState.positive) {
      classess.push('border-white', 'border-2');
    } else {
      classess.push('border-transparent');
    }

    return classNames(classess);
  }, [vote, baseClasses]);
  const getNegativeVoteClasses = useMemo(() => {
    const classess = [
      ...baseClasses,
      'bg-yellow-negative/80',
      'hover:bg-yellow-negative',
    ];

    if (vote === VoteState.negative) {
      classess.push('border-white', 'border-2');
    } else {
      classess.push('border-transparent');
    }

    return classNames(classess);
  }, [vote, baseClasses]);
  const isButtonDisabled = useMemo(() => {
    return vote === VoteState.neutral;
  }, [vote]);

  return {
    setPositiveVote,
    setNegativeVote,
    getPositiveVoteClasses,
    getNegativeVoteClasses,
    isButtonDisabled,
    currentVote: vote,
  };
}
