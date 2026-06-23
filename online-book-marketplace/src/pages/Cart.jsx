import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const deleteItem = (index) => {
    const updatedCart = cart.filter(
      (_, i) => i !== index
    );

    updateCart(updatedCart);
  };

  const increaseQty = (index) => {
    const updatedCart = [...cart];

    updatedCart[index].quantity =
      (updatedCart[index].quantity || 1) + 1;

    updateCart(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cart];

    if (
      (updatedCart[index].quantity || 1) > 1
    ) {
      updatedCart[index].quantity -= 1;
    }

    updateCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price *
        (item.quantity || 1),
    0
  );

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-r
      from-indigo-100
      via-blue-100
      to-purple-100
      p-10"
    >
      <div className="max-w-6xl mx-auto">

        <h1
          className="
          text-5xl
          font-bold
          mb-10
          text-center"
        >
          🛒 My Shopping Cart
        </h1>

        {cart.length === 0 ? (

          <div
            className="
            bg-white
            rounded-3xl
            shadow-xl
            p-16
            text-center"
          >
            <h2 className="text-3xl font-bold">
              Your Cart Is Empty 😔
            </h2>

            <p className="mt-4 text-gray-500">
              Add some amazing books to begin.
            </p>
          </div>

        ) : (

          <>
            {cart.map((book, index) => (

              <div
                key={index}
                className="
                bg-white
                rounded-2xl
                shadow-lg
                p-6
                mb-6
                flex
                justify-between
                items-center"
              >

                <div>

                  <h3
                    className="
                    text-2xl
                    font-bold"
                  >
                    📚 {book.title}
                  </h3>

                  <p className="text-gray-500">
                    {book.author}
                  </p>

                  <p
                    className="
                    text-green-600
                    font-bold
                    text-xl
                    mt-2"
                  >
                    ₹{book.price}
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      decreaseQty(index)
                    }
                    className="
                    bg-red-500
                    text-white
                    px-3
                    py-2
                    rounded-lg"
                  >
                    -
                  </button>

                  <span
                    className="
                    text-xl
                    font-bold"
                  >
                    {book.quantity || 1}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(index)
                    }
                    className="
                    bg-green-500
                    text-white
                    px-3
                    py-2
                    rounded-lg"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() =>
                    deleteItem(index)
                  }
                  className="
                  bg-red-600
                  text-white
                  px-5
                  py-2
                  rounded-lg"
                >
                  🗑 Delete
                </button>

              </div>

            ))}

            <div
              className="
              bg-white
              rounded-3xl
              shadow-xl
              p-8
              mt-10"
            >

              <h2
                className="
                text-4xl
                font-bold
                mb-6"
              >
                Total: ₹{total}
              </h2>

              <div className="flex gap-5">

                <button
                  className="
                  bg-green-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  hover:scale-105
                  transition"
                >
                  ⚡ Buy Now
                </button>

                <button
                  className="
                  bg-blue-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  hover:scale-105
                  transition"
                >
                  💳 Checkout
                </button>

              </div>

            </div>

          </>

        )}

      </div>
    </div>
  );
}

export default Cart;