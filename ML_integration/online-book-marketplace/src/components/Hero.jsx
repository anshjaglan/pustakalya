import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="
      min-h-screen
      bg-gradient-to-r
      from-indigo-700
      via-purple-700
      to-blue-600
      text-white
      flex
      flex-col
      justify-center
      items-center
      text-center
      px-6"
    >

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl font-black"
      >
        📚 BookVerse AI
      </motion.h1>

      <p className="text-2xl mt-6 max-w-4xl">
        India's Smart Marketplace To Buy,
        Sell And Rent Books Powered By AI
      </p>

      <div className="mt-8 w-full max-w-2xl">
        <input
          placeholder="Search books..."
          className="
          w-full
          p-5
          rounded-full
          text-black
          shadow-2xl"
        />
      </div>

      <div className="flex gap-6 mt-10 flex-wrap">

        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold">
          Buy Books
        </button>

        <button className="bg-green-500 px-8 py-4 rounded-full font-bold">
          Sell Books
        </button>

        <button className="bg-yellow-500 px-8 py-4 rounded-full font-bold">
          Rent Books
        </button>

      </div>

    </section>
  );
}

export default Hero;