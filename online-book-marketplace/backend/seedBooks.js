require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/Book");

const books = [];

const englishBooks = [
  "Atomic Habits",
  "Deep Work",
  "Clean Code",
  "The Alchemist",
  "Rich Dad Poor Dad",
  "Think and Grow Rich",
  "Ikigai",
  "The Psychology of Money",
  "Zero to One",
  "The Power of Habit"
];

const hindiBooks = [
  "गोदान",
  "गुनाहों का देवता",
  "राग दरबारी",
  "निर्मला",
  "कामायनी",
  "मधुशाला",
  "मैला आँचल",
  "चित्रलेखा",
  "तमस",
  "सूरज का सातवाँ घोड़ा"
];

for (let i = 1; i <= 100; i++) {
  let category;
  let title;

  if (i <= 40) {
    category = "English";
    title = englishBooks[i % englishBooks.length] + " " + i;
  } else if (i <= 80) {
    category = "Hindi";
    title = hindiBooks[i % hindiBooks.length] + " " + i;
  } else {
    category = "NCERT";
    title = `NCERT Class ${6 + (i % 7)} Book ${i}`;
  }

  books.push({
    title,
    author: `Author ${i}`,
    publisher: `Publisher ${i}`,
    category,
    description: `This is a sample description for ${title}.`,
    image: "https://via.placeholder.com/300x450?text=Book+Cover",
    price: 200 + (i * 10),
    rentPrice: 20 + (i * 2),
    rating: (4 + (i % 10) / 10),
    stock: 10 + (i % 20),
    availableForRent: true,
    seller: i % 2 === 0 ? "ABC Book Store" : "XYZ Books",
  });
}

async function seedBooks() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Book.deleteMany({});

    await Book.insertMany(books);

    console.log("100 Books Inserted Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedBooks();