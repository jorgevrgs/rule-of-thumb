import { asFunction, asValue, createContainer, InjectionMode } from 'awilix';
import { Context } from 'domain/types';
import { getCelebritiesService, getLinksService } from '../../application';

export const servicesContainer = createContainer<Context>({
  injectionMode: InjectionMode.PROXY,
}).register({
  fetch: asValue(fetch),
  getLinksService: asFunction(getLinksService).singleton(),
  getCelebritiesService: asFunction(getCelebritiesService).singleton(),
});
