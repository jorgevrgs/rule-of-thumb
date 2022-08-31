import fastifyMongoDB from '@fastify/mongodb';
import type { FastifyPluginAsync } from 'fastify';

export const mongoPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyMongoDB, {
    url: fastify.config.MONGO_URL,
  });
};
