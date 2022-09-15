import { useEffect } from 'react';
import { UpdateVoteParams } from '../../../domain';
import { useAppDispatch } from '../../hooks';
import {
  celebritiesSlice,
  useGetCelebritiesQuery,
  useUpdateVoteMutation,
} from '../slices';

export function useGetCelebrityById(celebrityId: string) {
  const { data, isFetching } = useGetCelebritiesQuery();

  if (!data) {
    return { data: null, isFetching };
  }

  const celebrity = data.find(
    (celebrity) => celebrity.celebrityId === celebrityId
  );

  return { data: celebrity, isFetching };
}

export function useUpdateVoteById(celebrityId: string) {
  const [mutate, result] = useUpdateVoteMutation();
  const dispatch = useAppDispatch();

  const handleUpdateVote = ({ celebrityId, vote }: UpdateVoteParams) => {
    mutate({ celebrityId, vote });
  };

  const { data: updatedCelebrity } = result;

  useEffect(() => {
    if (updatedCelebrity) {
      dispatch(
        celebritiesSlice.util.updateQueryData(
          'getCelebrities',
          undefined,
          (celebrities) => {
            const index = celebrities.findIndex(
              (celebrity) => celebrity.celebrityId === celebrityId
            );

            if (index > -1 && updatedCelebrity) {
              Object.assign(celebrities[index], updatedCelebrity);
            }

            return celebrities;
          }
        )
      );
    }
  }, [updatedCelebrity, celebrityId, dispatch]);

  return { handleUpdateVote, isSuccess: result.isSuccess, reset: result.reset };
}
