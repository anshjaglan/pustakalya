const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  bookId: {
    type: String,
    required: true,
  },

  title: String,
  author: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model(
  "Wishlist",
  wishlistSchema
);