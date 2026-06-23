const express = require("express");
const router = express.Router();

const Wishlist = require("../models/Wishlist");

// Add To Wishlist

router.post("/add", async (req, res) => {
  try {

    const { userId, bookId } = req.body;

    const existingBook =
      await Wishlist.findOne({
        userId,
        bookId,
      });

    if (existingBook) {
      return res.json({
        success: true,
        message:
          "Already In Wishlist",
      });
    }

    const wishlistItem =
      await Wishlist.create(req.body);

    res.status(201).json({
      success: true,
      message:
        "Added To Wishlist",
      wishlistItem,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

// Get User Wishlist

router.get("/:userId", async (req, res) => {
  try {

    const wishlist =
      await Wishlist.find({
        userId:
          req.params.userId,
      });

    res.json(wishlist);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

// Delete Wishlist Item

router.delete(
  "/remove/:id",
  async (req, res) => {

    try {

      await Wishlist.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Removed From Wishlist",
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  }
);

module.exports = router;