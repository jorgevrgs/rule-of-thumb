import type { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { createReadStream } from 'fs';
import { GridFSBucket } from 'mongodb';
import { join } from 'path';
import { IMAGES_COLLECTION } from '../../domain/contants';

declare module 'fastify' {
  interface FastifyRequest {
    bucket?: GridFSBucket;
  }
}

export const imagesRoute: FastifyPluginAsync = async (fastify) => {
  fastify.decorateRequest('bucket', null);

  fastify.addHook('onRequest', async (request, reply) => {
    if (fastify.mongo.db) {
      request.bucket = new GridFSBucket(fastify.mongo.db, {
        bucketName: IMAGES_COLLECTION,
      });
    } else {
      throw reply.badRequest('Database not found!');
    }

    if (!request.bucket) {
      throw reply.badRequest('Bucket not found!');
    }
  });

  fastify.get(
    '/images/:imageId',
    async (request: FastifyRequest<{ Params: { imageId: string } }>, reply) => {
      request.log.info(`GET /images/${request.params.imageId}`);

      // // const writeStream = createWriteStream('image.png');
      // // const stream =
      // request.bucket
      //   ?.openDownloadStreamByName(request.params.imageId)
      //   // .pipe(writeStream)
      //   .pipe(reply.raw);

      const readStream = createReadStream(
        join(process.cwd(), '/assets/not-found.png')
      );

      let data = '';
      for await (const chunk of readStream) {
        data += chunk;
      }

      // reply.header('Content-Type', 'image/png');
      // reply.header('Content-Length', data.length);
      // reply.header('Cache-Control', 'public, max-age=86400');
      // reply.header(
      //   'Expires',
      //   new Date(Date.now() + 86400 * 1000).toUTCString()
      // );
      // reply.header('Last-Modified', new Date().toUTCString());
      // reply.header('ETag', '"123456789"');
      // reply.header('Accept-Ranges', 'bytes');
      // reply.header('Content-Range', 'bytes 0-123456789/123456789');
      // reply.header('Connection', 'keep-alive');
      // reply.header('Content-Encoding', 'gzip');

      reply.send(Buffer.from(data).toString('base64'));
    }
  );
};
