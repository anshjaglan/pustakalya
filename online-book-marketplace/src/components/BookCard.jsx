import { Link } from "react-router-dom";

function BookCard({ book }) {

  const addToCart = () => {

    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    cart.push(book);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Book Added To Cart");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={book.image}
        alt={book.title}
        className="h-64 w-full object-contain bg-gray-100 p-2"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {book.title}
        </h2>

        <p className="text-gray-600">
          {book.author}
        </p>

        <p className="text-green-600 font-bold text-xl mt-2">
          ₹{book.price}
        </p>

        <div className="flex gap-3 mt-4">

          <button
            onClick={addToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
           🛒 Add To Cart
          </button>

          <Link
            to={`/book/${book.id}`}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BookCard;