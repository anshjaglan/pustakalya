import { useEffect, useState } from "react";
import axios from "axios";

function Seller() {
  const [books, setBooks] = useState([]);

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publisher: "",
    category: "Technology",
    description: "",
    image: "",
    price: "",
    rentPrice: "",
    stock: "",
    language: "English",
    condition: "New",
  });

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

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/books",
        bookData
      );

      console.log(response.data);

      alert("✅ Book Added Successfully");

      fetchBooks();

      setBookData({
        title: "",
        author: "",
        publisher: "",
        category: "Technology",
        description: "",
        image: "",
        price: "",
        rentPrice: "",
        stock: "",
        language: "English",
        condition: "New",
      });

    } catch (error) {
      console.log(error);

      alert("❌ Failed To Add Book");
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/books/${id}`
      );

      fetchBooks();

    } catch (error) {
      console.log(error);
    }
  };

  const totalInventoryValue = books.reduce(
    (sum, book) =>
      sum + Number(book.price || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-5xl font-bold text-center mb-10">
        📚 NEW Seller Dashboard
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold">
            {books.length}
          </h2>
          <p>Total Books</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold">
            ₹{totalInventoryValue}
          </h2>
          <p>Inventory Value</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold">
            Active
          </h2>
          <p>Seller Status</p>
        </div>

      </div>

      {/* Add Book Form */}

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">

        <h2 className="text-3xl font-bold mb-6">
          ➕ Add New Book
        </h2>

        <form
          onSubmit={addBook}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            name="title"
            value={bookData.title}
            onChange={handleChange}
            placeholder="Book Title"
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="author"
            value={bookData.author}
            onChange={handleChange}
            placeholder="Author"
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="publisher"
            value={bookData.publisher}
            onChange={handleChange}
            placeholder="Publisher"
            className="border p-3 rounded-lg"
          />

          <select
            name="category"
            value={bookData.category}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option>Technology</option>
            <option>Business</option>
            <option>Education</option>
            <option>Fiction</option>
            <option>Self Help</option>
            <option>NCERT</option>
          </select>

          <input
            name="price"
            value={bookData.price}
            onChange={handleChange}
            placeholder="Price"
            type="number"
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="rentPrice"
            value={bookData.rentPrice}
            onChange={handleChange}
            placeholder="Rent Price"
            type="number"
            className="border p-3 rounded-lg"
          />

          <input
            name="stock"
            value={bookData.stock}
            onChange={handleChange}
            placeholder="Stock Quantity"
            type="number"
            className="border p-3 rounded-lg"
          />

          <select
            name="language"
            value={bookData.language}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option>English</option>
            <option>Hindi</option>
          </select>

          <select
            name="condition"
            value={bookData.condition}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option>New</option>
            <option>Like New</option>
            <option>Good</option>
            <option>Fair</option>
            <option>Used</option>
          </select>

          <input
            name="image"
            value={bookData.image}
            onChange={handleChange}
            placeholder="Book Cover Image URL"
            className="border p-3 rounded-lg"
          />

          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            placeholder="Book Description"
            className="border p-3 rounded-lg md:col-span-2"
            rows="4"
          />

          {bookData.image && (
            <div className="md:col-span-2 flex justify-center">
              <img
                src={bookData.image}
                alt="preview"
                className="h-72 rounded-xl shadow-xl object-cover"
              />
            </div>
          )}

          <button
            type="submit"
            className="
            md:col-span-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-4
            rounded-xl
            font-bold
            text-lg"
          >
            ➕ Add Book
          </button>

        </form>

      </div>

      {/* My Books */}

      <div className="bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          📖 My Listed Books
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {books.map((book) => (

            <div
              key={book._id}
              className="
              bg-white
              rounded-xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition"
            >

              <img
                src={
                  book.image ||
                  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
                }
                alt={book.title}
                className="
                h-72
                w-full
                object-cover"
              />

              <div className="p-4">

                <span
                  className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-sm"
                >
                  {book.category}
                </span>

                <h3 className="font-bold text-xl mt-3">
                  {book.title}
                </h3>

                <p className="text-gray-600">
                  {book.author}
                </p>

                <p className="text-green-600 text-xl font-bold mt-2">
                  ₹{book.price}
                </p>

                <p>
                  📦 Stock: {book.stock}
                </p>

                <p>
                  🌐 {book.language}
                </p>

                <p>
                  📖 Condition:
                  <span className="font-semibold ml-1">
                    {book.condition}
                  </span>
                </p>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Delete this book?"
                      )
                    ) {
                      deleteBook(book._id);
                    }
                  }}
                  className="
                  mt-4
                  w-full
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  py-2
                  rounded-lg"
                >
                  🗑 Delete Book
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Seller;