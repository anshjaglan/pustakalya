const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  bookId: String,
  price: Number,
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);