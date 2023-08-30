import mongoose from "mongoose";

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

// Create and export the model based on the schema
const URLModel = mongoose.model("URL", urlSchema);

module.exports = URLModel;
