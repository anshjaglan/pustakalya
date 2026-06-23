function Marketplace() {
  return (
    <section className="py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        Marketplace For Everyone
      </h2>

      <div className="grid md:grid-cols-4 gap-10">

        <div className="shadow-xl p-8 rounded-xl text-center">
          👨‍🎓
          <h3 className="font-bold mt-4">
            Customer
          </h3>
        </div>

        <div className="shadow-xl p-8 rounded-xl text-center">
          ✍️
          <h3 className="font-bold mt-4">
            Author
          </h3>
        </div>

        <div className="shadow-xl p-8 rounded-xl text-center">
          🏢
          <h3 className="font-bold mt-4">
            Publisher
          </h3>
        </div>

        <div className="shadow-xl p-8 rounded-xl text-center">
          📚
          <h3 className="font-bold mt-4">
            Book Store
          </h3>
        </div>

      </div>

    </section>
  );
}

export default Marketplace;