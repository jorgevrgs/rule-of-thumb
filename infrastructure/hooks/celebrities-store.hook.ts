import { useQuery } from '@tanstack/react-query';
import { Stores } from '../../domain/contants';
import type { Celebrities } from '../../domain/types';
import { servicesContainer } from '../../infrastructure/containers';

export function useFetchCelebrities(initialData: Celebrities) {
  const getCelebritiesService = servicesContainer.cradle.getCelebritiesService;

  return useQuery([Stores.celebrities], getCelebritiesService, {
    initialData,
  });
}
