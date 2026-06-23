const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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

  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Cart", cartSchema);