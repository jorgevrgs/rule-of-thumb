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
      queryClient.setQueryData<CelebritiesType>(
        [Stores.celebrities],
        (oldData) => {
          if (!oldData) {
            return oldData;
          }

          const index = oldData?.findIndex(
            (item) => item.celebrityId === variables.celebrityId
          );

          if (index !== -1) {
            console.log('Updating data', oldData[index].votes, data.votes);
            oldData[index] = data;
          }

          return oldData;
        }
      );
    },
  });
}
