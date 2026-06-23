function SellerDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Seller Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-100 p-6 rounded shadow">
          <h2 className="text-2xl font-bold">120</h2>
          <p>Total Books</p>
        </div>

        <div className="bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-bold">54</h2>
          <p>Books Sold</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded shadow">
          <h2 className="text-2xl font-bold">
            ₹45,000
          </h2>
          <p>Revenue</p>
        </div>
      </div>

      <div className="shadow-lg p-6 rounded">
        <h2 className="text-2xl font-bold mb-4">
          Add New Book
        </h2>

        <form className="flex flex-col gap-4">
          <input
            className="border p-3 rounded"
            placeholder="Book Title"
          />

          <input
            className="border p-3 rounded"
            placeholder="Author"
          />

          <input
            className="border p-3 rounded"
            placeholder="Price"
          />

          <button className="bg-blue-600 text-white p-3 rounded">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellerDashboard;