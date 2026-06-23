function Testimonials() {
  return (
    <section className="bg-gray-100 py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        What Readers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-10">

        <div className="bg-white p-8 rounded-xl shadow-lg">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Best platform for buying books.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            AI recommendations are amazing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Great NCERT collection.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;