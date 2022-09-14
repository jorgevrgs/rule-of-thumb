import { CelebritiesType } from '@app/shared';
import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Stores } from '../../../domain';
import type { VoteProps } from '../../../domain/types';
import { useUpdateVoteCelebrities } from '../hooks';
import Veredict from './veredict';
import { VoteAgain } from './vote-again';
import { VoteNow } from './vote-now';
import VoteResult from './vote-result';

export default function Vote({ celebrityId }: VoteProps) {
  const { mutate, reset, isSuccess, isLoading, data } =
    useUpdateVoteCelebrities();

  const queryClient = useQueryClient();

  const votes = useMemo(() => {
    const current =
      data ||
      queryClient
        .getQueryData<CelebritiesType>([Stores.celebrities])
        ?.find((c) => c.celebrityId === celebrityId);

    return current?.votes;
  }, [celebrityId, queryClient, data]);

  return (
    <>
      {votes && <VoteResult {...votes} />}

      <div className="absolute inset-x-0 bottom-0">
        {votes && <Veredict {...votes} />}
      </div>

      {isSuccess ? (
        <VoteAgain onClick={reset} />
      ) : (
        <VoteNow
          mutate={mutate}
          isLoading={isLoading}
          celebrityId={celebrityId}
        />
      )}
    </>
  );
}
