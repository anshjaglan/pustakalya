const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  publisher: {
    type: String,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  rentPrice: {
    type: Number,
    default: 0,
  },

  rating: {
    type: Number,
    default: 0,
  },

  stock: {
    type: Number,
    default: 1,
  },

  availableForRent: {
    type: Boolean,
    default: false,
  },

  seller: {
    type: String,
  },

  sellerId: {
    type: String,
  },

  sellerName: {
    type: String,
  },

  language: {
    type: String,
    default: "English",
  },

  condition: {
    type: String,
    enum: [
      "New",
      "Like New",
      "Good",
      "Fair",
      "Used",
    ],
    default: "New",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", bookSchema);