function Wishlist() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        My Wishlist ❤️
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="shadow-lg p-5 rounded">
          <h2 className="font-bold">Atomic Habits</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
            Add To Cart
          </button>
        </div>

        <div className="shadow-lg p-5 rounded">
          <h2 className="font-bold">Deep Work</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;