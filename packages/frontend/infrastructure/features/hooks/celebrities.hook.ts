import { useGetCelebritiesQuery } from '../slices';

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
