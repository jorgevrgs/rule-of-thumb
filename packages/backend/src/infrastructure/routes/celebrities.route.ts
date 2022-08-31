import type { FastifyPluginAsync } from 'fastify';

export const celebritiesRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get('/celebrities', async (request, reply) => {
    const celebrities = await fastify?.mongo?.db
      ?.collection('celebrities')
      .find()
      .toArray();

    return celebrities;
  });
};
