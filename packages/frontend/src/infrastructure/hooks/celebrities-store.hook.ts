import { useQuery } from '@tanstack/react-query';
import { getCelebritiesService } from '../../application';
import { Stores } from '../../domain/constants';
import type { Celebrities } from '../../domain/types';

export function useFetchCelebrities(initialData: Celebrities) {
  return useQuery([Stores.celebrities], getCelebritiesService, {
    initialData,
  });
}
