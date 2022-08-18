import { asFunction, asValue, createContainer, InjectionMode } from 'awilix';
import { getCelebritiesService, getLinksService } from '../../application';
import { Context } from '../../types';

export const servicesContainer = createContainer<Context>({
  injectionMode: InjectionMode.PROXY,
}).register({
  fetch: asValue(fetch),
  getLinksService: asFunction(getLinksService).singleton(),
  getCelebritiesService: asFunction(getCelebritiesService).singleton(),
});
