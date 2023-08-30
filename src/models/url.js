import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const URLModel = mongoose.model('URL', urlSchema);

export default URLModel;
