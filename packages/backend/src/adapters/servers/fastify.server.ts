import fastify from 'fastify';
import { fastifyApp } from '../apps';

export const fastifyServer = () => {
  const server = fastify({
    logger: {
      level: 'info',
      transport: {
        target: 'pino-pretty',
        options: {
          destination: 1,
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
  });
  server.register(fastifyApp);

  server.listen({ port: 1337 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(server.printRoutes());
    console.log(server.printPlugins());

    console.log(`Server listening at ${address}`);
  });
};
