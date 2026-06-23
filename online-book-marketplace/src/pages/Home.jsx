function Home() {
  return (
   <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen">

      {/* Hero */}

      <section
        className="
        min-h-screen
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-blue-500
        text-white
        flex flex-col
        justify-center
        items-center
        text-center
        px-6"
      >

        <h1
          className="
          text-7xl
          font-black
          animate-pulse"
        >
          📚 BookVerse AI
        </h1>

        <p className="mt-6 text-2xl max-w-3xl">

          Buy Books • Sell Books • Rent Books

          <br />

          Powered by AI Recommendations

        </p>

        <div className="mt-8 w-full max-w-2xl">

          <input
            placeholder="Search books, authors..."
            className="
            w-full
            p-5
            rounded-full
            text-black
            shadow-2xl"
          />

        </div>

        <div
          className="
          flex flex-wrap
          gap-6
          mt-10"
        >

          <button
            className="
            bg-white
            text-blue-600
            px-8 py-4
            rounded-full
            font-bold
            hover:scale-110
            transition"
          >
            Buy Books
          </button>

          <button
            className="
            bg-green-500
            px-8 py-4
            rounded-full
            font-bold
            hover:scale-110
            transition"
          >
            Sell Books
          </button>

          <button
            className="
            bg-yellow-500
            px-8 py-4
            rounded-full
            font-bold
            hover:scale-110
            transition"
          >
            Rent Books
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="py-24 px-10">

        <h2
          className="
          text-5xl
          font-bold
          text-center
          mb-16"
        >
          Why BookVerse?
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-10"
        >

          <div
            className="
            shadow-xl
            rounded-xl
            p-8
            hover:scale-105
            transition"
          >
            🤖 AI Recommendations
          </div>

          <div
            className="
            shadow-xl
            rounded-xl
            p-8
            hover:scale-105
            transition"
          >
            💰 Sell Used Books
          </div>

          <div
            className="
            shadow-xl
            rounded-xl
            p-8
            hover:scale-105
            transition"
          >
            🔄 Affordable Rentals
          </div>

        </div>

      </section>

      <section className="py-20 px-10">

  <h2 className="text-5xl font-bold text-center mb-16">
    Featured Books
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 transition">
      <img
        src="https://via.placeholder.com/200x300"
        alt="book"
        className="w-full rounded-lg"
      />
      <h3 className="font-bold mt-4">
        Atomic Habits
      </h3>
      <p>₹499</p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 transition">
      <img
        src="https://via.placeholder.com/200x300"
        alt="book"
        className="w-full rounded-lg"
      />
      <h3 className="font-bold mt-4">
        Deep Work
      </h3>
      <p>₹399</p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 transition">
      <img
        src="https://via.placeholder.com/200x300"
        alt="book"
        className="w-full rounded-lg"
      />
      <h3 className="font-bold mt-4">
        The Hobbit
      </h3>
      <p>₹550</p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 transition">
      <img
        src="https://via.placeholder.com/200x300"
        alt="book"
        className="w-full rounded-lg"
      />
      <h3 className="font-bold mt-4">
        Rich Dad Poor Dad
      </h3>
      <p>₹350</p>
    </div>

  </div>

</section>
<section className="bg-gray-100 py-20 px-10">

  <h2 className="text-5xl font-bold text-center mb-16">
    Platform For Everyone
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-white shadow-lg p-8 rounded-xl text-center">
      👨‍🎓
      <h3 className="font-bold mt-4">
        Customer
      </h3>
    </div>

    <div className="bg-white shadow-lg p-8 rounded-xl text-center">
      ✍️
      <h3 className="font-bold mt-4">
        Author
      </h3>
    </div>

    <div className="bg-white shadow-lg p-8 rounded-xl text-center">
      🏢
      <h3 className="font-bold mt-4">
        Publisher
      </h3>
    </div>

    <div className="bg-white shadow-lg p-8 rounded-xl text-center">
      📚
      <h3 className="font-bold mt-4">
        Book Store
      </h3>
    </div>

  </div>

</section>
<section className="bg-green-600 text-white py-20 text-center">

  <h2 className="text-5xl font-bold">
    Rent Books At Affordable Prices
  </h2>

  <p className="mt-6 text-xl">
    Rent books for 7, 15 or 30 days
  </p>

  <button
    className="
    mt-8
    bg-white
    text-green-600
    px-8
    py-4
    rounded-full
    font-bold"
  >
    Explore Rentals
  </button>

</section>

      {/* Categories */}

      <section
        className="
        bg-gray-100
        dark:bg-gray-800
        py-20 px-10"
      >

        <h2
          className="
          text-5xl
          text-center
          font-bold
          mb-16"
        >
          Explore Categories
        </h2>

        <div
          className="
          grid
          md:grid-cols-4
          gap-8"
        >

          <div className="bg-white dark:bg-gray-700 p-10 rounded-xl text-center shadow-lg">
            📖 Fiction
          </div>

          <div className="bg-white dark:bg-gray-700 p-10 rounded-xl text-center shadow-lg">
            💻 Technology
          </div>

          <div className="bg-white dark:bg-gray-700 p-10 rounded-xl text-center shadow-lg">
            💼 Business
          </div>

          <div className="bg-white dark:bg-gray-700 p-10 rounded-xl text-center shadow-lg">
            🎓 Education
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section
        className="
        py-24
        bg-indigo-600
        text-white"
      >

        <div
          className="
          grid
          md:grid-cols-3
          text-center"
        >

          <div>
            <h1 className="text-6xl font-bold">
              5000+
            </h1>

            <p className="mt-2">
              Books Available
            </p>
          </div>

          <div>
            <h1 className="text-6xl font-bold">
              1000+
            </h1>

            <p className="mt-2">
              Active Users
            </p>
          </div>

          <div>
            <h1 className="text-6xl font-bold">
              AI
            </h1>

            <p className="mt-2">
              Smart Suggestions
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;