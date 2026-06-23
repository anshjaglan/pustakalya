const express = require("express");

const router = express.Router();

router.get("/recommend", (req, res) => {
  res.json({
    recommendations: [
      "Atomic Habits",
      "Deep Work",
      "Psychology of Money",
    ],
  });
});

router.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `You asked: ${message}`,
  });
});

module.exports = router;