import type { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { envPlugin, mongoPlugin } from '../../infrastructure/plugins';
import { celebritiesRoute, imagesRoute } from '../../infrastructure/routes';

export const fastifyApp: FastifyPluginAsync = async (fastify) => {
  fastify
    .register(fastifyPlugin(envPlugin, { name: 'env' }))
    .register(
      fastifyPlugin(mongoPlugin, { name: 'mongo', dependencies: ['env'] })
    )
    .register(
      fastifyPlugin(imagesRoute, {
        name: 'images',
        dependencies: ['env', 'mongo'],
      })
    )
    .register(
      fastifyPlugin(celebritiesRoute, {
        name: 'celebrities',
        dependencies: ['env', 'mongo'],
      })
    );
};
