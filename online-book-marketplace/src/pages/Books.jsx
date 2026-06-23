import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/books"
      );

      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All"
        ? true
        : book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-5xl font-bold text-center mb-10">
        📚 Explore Books
      </h1>

      {/* Search + Filter */}

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

        <input
          type="text"
          placeholder="Search Books..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
          border
          p-4
          rounded-lg
          w-full
          md:w-96
          shadow"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="
          border
          p-4
          rounded-lg
          shadow"
        >
          <option>All</option>
          <option>English</option>
          <option>Hindi</option>
          <option>NCERT</option>
        </select>

      </div>

      {/* Books Grid */}

      <div
        className="
        grid
        md:grid-cols-3
        lg:grid-cols-4
        gap-8"
      >

        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book._id}
              book={book}
            />
          ))
        ) : (
          <h2 className="text-center col-span-4 text-2xl">
            No Books Found
          </h2>
        )}

      </div>

    </div>
  );
}

export default Books;