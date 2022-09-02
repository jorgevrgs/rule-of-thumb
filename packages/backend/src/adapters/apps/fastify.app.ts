import type { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import {
  envPlugin,
  httpErrorsPlugin,
  mongoPlugin,
} from '../../infrastructure/plugins';
import { celebritiesRoute, imagesRoute } from '../../infrastructure/routes';

export const fastifyApp: FastifyPluginAsync = async (fastify) => {
  fastify
    .register(fastifyPlugin(envPlugin, { name: 'env' }))
    .register(
      fastifyPlugin(mongoPlugin, { name: 'mongo', dependencies: ['env'] })
    )
    .register(fastifyPlugin(httpErrorsPlugin, { name: 'httpErrors' }))
    .register(
      fastifyPlugin(imagesRoute, {
        name: 'images',
        dependencies: ['env', 'mongo', 'httpErrors'],
      })
    )
    .register(
      fastifyPlugin(celebritiesRoute, {
        name: 'celebrities',
        dependencies: ['env', 'mongo', 'httpErrors'],
      })
    );
};
