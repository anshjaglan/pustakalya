import { useParams } from "react-router-dom";
import { books } from "../data/mockBooks";

function BookDetails() {
  const { id } = useParams();

  const book = books.find(
    (book) => book.id === parseInt(id)
  );

  if (!book) {
    return (
      <div className="p-10">
        <h1>Book Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-[500px] object-contain bg-gray-100 rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            {book.title}
          </h1>

          <p className="text-xl mt-4 text-gray-600">
            By {book.author}
          </p>

          <p className="text-3xl text-green-600 font-bold mt-6">
            ₹{book.price}
          </p>

          <p className="mt-6 text-gray-700">
            This book is available in our marketplace.
            Discover valuable knowledge and insights
            from top authors.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded">
              Add To Cart
            </button>

            <button className="bg-pink-600 text-white px-6 py-3 rounded">
              Add To Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookDetails;