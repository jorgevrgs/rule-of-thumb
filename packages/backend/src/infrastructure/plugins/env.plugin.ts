import fastifyEnv from '@fastify/env';
import type { FastifyPluginAsync } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      MONGO_URL: string;
    };
  }
}

export const envPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyEnv, {
    schema: {
      type: 'object',
      required: ['MONGO_URL'],
      properties: {
        MONGO_URL: {
          type: 'string',
        },
      },
    },
  });
};
