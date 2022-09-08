import type { CelebritiesType } from '@app/shared';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getCelebritiesService,
  updateVoteService,
} from '../../../application/services';
import { Stores } from '../../../domain/constants';

export function useFetchCelebrities(initialData?: CelebritiesType) {
  return useQuery({
    queryKey: [Stores.celebrities],
    queryFn: getCelebritiesService,
    initialData,
  });
}

export function useUpdateVoteCelebrities() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateVoteService,
    onSuccess: (data, variables) => {
      queryClient.setQueryData([Stores.celebrities], (oldData: any) =>
        oldData.map((oldCelebrity: any) => {
          if (oldCelebrity.celebrityId === variables.celebrityId) {
            return data;
          }

          return oldCelebrity;
        })
      );
    },
  });
}
