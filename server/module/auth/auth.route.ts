import { FastifyInstance } from "fastify";

import { getAuth } from "./auth.controller";

async function authRoutes(server: FastifyInstance) {
  server.get(
    "/",
    {
      config: {
        rateLimit: {
          max: 12,
        },
      },
    },
    getAuth
  );
}

export default authRoutes;
