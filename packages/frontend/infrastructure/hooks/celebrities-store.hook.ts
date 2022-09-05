import type { CelebritiesType } from '@app/shared';
import { useQuery } from '@tanstack/react-query';
import { getCelebritiesService } from '../../application/services';
import { Stores } from '../../domain/constants';

export function useFetchCelebrities(initialData: CelebritiesType) {
  return useQuery(
    [Stores.celebrities],
    getCelebritiesService<CelebritiesType>,
    {
      initialData,
    }
  );
}
