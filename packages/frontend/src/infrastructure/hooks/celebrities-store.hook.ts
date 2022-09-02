import { useQuery } from '@tanstack/react-query';
import { getCelebritiesService } from '../../application/services';
import { Stores } from '../../domain/constants';
import type { CelebritiesType } from '../../domain/types';

export function useFetchCelebrities(initialData: CelebritiesType) {
  return useQuery(
    [Stores.celebrities],
    getCelebritiesService<CelebritiesType>,
    {
      initialData,
    }
  );
}
