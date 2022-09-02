import type { FastifyPluginAsync } from 'fastify';
import { CELEBRITY_COLLECTION } from '../../domain/contants';

export const celebritiesRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get('/celebrities', async (_request, reply) => {
    const celebrityCollection =
      fastify?.mongo?.db?.collection(CELEBRITY_COLLECTION);

    if (!celebrityCollection) {
      throw reply.badRequest('Collection not found!');
    }

    return celebrityCollection.find().toArray();
  });
};
