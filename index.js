// Import the framework and instantiate it
import Fastify from 'fastify';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import URLModel from './src/models/url.js';

const fastify = Fastify({
  logger: true,
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Declare a route
fastify.get('/', async function handler(request, reply) {
  return { hello: 'world' };
});

fastify.post('/shorten', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.code(400).send({ error: 'URL is required' });
  }
  const shortURL = nanoid();

  const newURL = new URLModel({
    shortURL,
    originalURL: url,
  });

  newURL.save();
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
