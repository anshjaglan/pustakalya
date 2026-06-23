const express = require("express");
const router = express.Router();

const Book = require("../models/Book");


const NGROK_ML_URL = "https://curliness-enforced-dormitory.ngrok-free.dev";
// GET ALL BOOKS
router.get("/", async (req, res) => {
try {
const books = await Book.find();
res.status(200).json(books);
} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
});

// ADD NEW BOOK
router.post("/", async (req, res) => {
  try {

    console.log("BODY RECEIVED:");
    console.log(req.body);

    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book Added Successfully",
      book,
    });

  } catch (error) {

    console.error("BOOK CREATE ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

// GET SINGLE BOOK
router.get("/:id", async (req, res) => {
try {
const book = await Book.findById(req.params.id);

```
if (!book) {
  return res.status(404).json({
    success: false,
    message: "Book Not Found",
  });
}

res.status(200).json(book);
```

} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
});

// DELETE BOOK
router.delete("/:id", async (req, res) => {
try {
await Book.findByIdAndDelete(req.params.id);

```
res.status(200).json({
  success: true,
  message: "Book Deleted Successfully",
});
```

} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
});

module.exports = router;
