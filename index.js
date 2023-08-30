// Import the framework and instantiate it
import Fastify from "fastify";
import mongoose from "mongoose";

const fastify = Fastify({
  logger: true,
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
