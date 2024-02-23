import Fastify from "fastify";
import fastifyNextJs from "@fastify/nextjs";
import { parse } from "url";

import authRoutes from "./server/module/auth/auth.route";

const server = Fastify();

server.register(fastifyNextJs);

server.all("*", async (request, reply) => {
  const parsedUrl = parse(request.url, true);
  const { pathname } = parsedUrl as { pathname: string };

  try {
    await reply.nextRender(pathname);
  } catch (err) {
    console.log(err);
  }
});

server.register(authRoutes, { prefix: "api/auth" });

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
