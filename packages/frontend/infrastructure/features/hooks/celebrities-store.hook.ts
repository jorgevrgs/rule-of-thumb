import type { CelebritiesType } from '@app/shared';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getCelebritiesService,
  updateVoteService,
} from '../../../application/services';
import { Stores } from '../../../domain/constants';

export function useFetchCelebrities(initialData: CelebritiesType) {
  return useQuery([Stores.celebrities], getCelebritiesService, {
    initialData,
  });
}

export function useUpdateVoteCelebrities() {
  const queryClient = useQueryClient();

  return useMutation(updateVoteService, {
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        [Stores.celebrities, { celebrityId: variables.celebrityId }],
        data
      );
    },
  });
}
