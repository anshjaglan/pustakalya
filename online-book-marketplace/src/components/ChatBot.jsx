function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 text-center">
        <h1 className="text-6xl font-bold">
          BookVerse AI
        </h1>

        <p className="mt-5 text-xl">
          Buy, Sell & Discover Books with AI-Powered Recommendations
        </p>

        <input
          type="text"
          placeholder="Search books..."
          className="mt-8 p-4 rounded text-black w-96"
        />

        <div className="mt-6">
          <button className="bg-white text-blue-600 px-6 py-3 rounded font-bold">
            Explore Books
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Categories
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="shadow-lg p-6 rounded text-center">Fiction</div>
          <div className="shadow-lg p-6 rounded text-center">Technology</div>
          <div className="shadow-lg p-6 rounded text-center">Business</div>
          <div className="shadow-lg p-6 rounded text-center">Education</div>
        </div>
      </section>

      {/* AI Recommendations */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          AI Recommended Books
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded shadow">
            Atomic Habits
          </div>

          <div className="bg-white p-5 rounded shadow">
            Deep Work
          </div>

          <div className="bg-white p-5 rounded shadow">
            The Hobbit
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;