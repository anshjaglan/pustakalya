const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

router.post("/add", async (req, res) => {
  try {

    const { userId, bookId } = req.body;

    const existingItem = await Cart.findOne({
      userId,
      bookId,
    });

    if (existingItem) {

      existingItem.quantity += 1;

      await existingItem.save();

      return res.json({
        success: true,
        message: "Quantity Updated",
      });
    }

    const cartItem = await Cart.create(req.body);

    res.json({
      success: true,
      message: "Book Added To Cart",
      cartItem,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

router.get("/:userId", async (req, res) => {
  try {

    const cartItems = await Cart.find({
      userId: req.params.userId,
    });

    res.json(cartItems);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});
router.delete("/remove/:id", async (req, res) => {
  try {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Item Removed From Cart",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

module.exports = router;