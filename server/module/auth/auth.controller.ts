import { FastifyRequest, FastifyReply } from "fastify";

export async function getAuth(request: FastifyRequest, reply: FastifyReply) {
  try {
    return reply.code(200).send({
      success: true,
      message: "Success",
    });
  } catch (err) {
    return reply.code(500).send({
      success: false,
      message: "internal server error",
    });
  }
}
