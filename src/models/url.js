import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const urlSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
    default: nanoid(),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const URLModel = mongoose.model('URL', urlSchema);

module.exports = URLModel;
