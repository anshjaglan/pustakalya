import { useEffect, useState } from "react";
import axios from "axios";

function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchFeaturedBooks();
  }, []);

  const fetchFeaturedBooks = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/books"
      );

      // Show only first 8 books on homepage
      setBooks(res.data.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-5xl font-bold">
            🔥 Featured Books
          </h2>

          <button
            className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-blue-700"
          >
            View All
          </button>

        </div>

        <div
          className="
          grid
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8"
        >

          {books.map((book) => (

            <div
              key={book._id}
              className="
              bg-white
              dark:bg-gray-900
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300"
            >

              <img
  src={
    book.image?.includes("via.placeholder.com")
      ? "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
      : book.image
  }
  alt={book.title}
  className="w-full h-72 object-cover"
/>

              <div className="p-5">

                <span
                  className="
                  bg-blue-100
                  text-blue-600
                  px-3
                  py-1
                  rounded-full
                  text-sm"
                >
                  {book.category}
                </span>

                <h3
                  className="
                  text-xl
                  font-bold
                  mt-4"
                >
                  {book.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {book.author}
                </p>

                <div className="flex items-center justify-between mt-4">

                  <div>

                    <p className="text-green-600 font-bold text-xl">
                      ₹{book.price}
                    </p>

                    <p className="text-sm text-gray-500">
                      Rent ₹{book.rentPrice}
                    </p>

                  </div>

                  <div className="text-yellow-500">
                    ⭐ {book.rating}
                  </div>

                </div>

                <button
                  className="
                  mt-5
                  w-full
                  bg-blue-600
                  text-white
                  py-3
                  rounded-lg
                  hover:bg-blue-700
                  transition"
                >
                  🛒 Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedBooks;