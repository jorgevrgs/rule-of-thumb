import fastify from 'fastify';
import { fastifyApp } from '../apps';

export const fastifyServer = () => {
  const server = fastify();
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
