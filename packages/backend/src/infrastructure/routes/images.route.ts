import type { FastifyPluginAsync } from 'fastify';

export const imagesRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get('/images/:imageId', async (request, reply) => {
    return 'OK';
  });
};
