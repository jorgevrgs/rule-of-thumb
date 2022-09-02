import fastifySensible from '@fastify/sensible';
import type { FastifyPluginAsync } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      MONGO_URL: string;
    };
  }
}

export const httpErrorsPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifySensible);
};
