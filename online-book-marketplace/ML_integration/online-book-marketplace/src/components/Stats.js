function Stats() {
  return (
    <section className="py-24 bg-white">

      <div className="grid md:grid-cols-4 text-center gap-10">

        <div>
          <h1 className="text-6xl font-bold text-blue-600">
            5000+
          </h1>
          <p>Books Listed</p>
        </div>

        <div>
          <h1 className="text-6xl font-bold text-green-600">
            1000+
          </h1>
          <p>Users</p>
        </div>

        <div>
          <h1 className="text-6xl font-bold text-purple-600">
            250+
          </h1>
          <p>Authors</p>
        </div>

        <div>
          <h1 className="text-6xl font-bold text-red-600">
            150+
          </h1>
          <p>Publishers</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;