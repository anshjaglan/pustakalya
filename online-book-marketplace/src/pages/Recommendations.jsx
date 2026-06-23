function Recommendations() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        🤖 AI Book Recommendations
      </h1>

      <div className="bg-blue-100 p-6 rounded">
        <h2 className="font-bold text-xl">
          Based on your interests
        </h2>

        <ul className="mt-4 space-y-3">
          <li>📘 The Psychology of Money</li>
          <li>📘 Think and Grow Rich</li>
          <li>📘 Rich Dad Poor Dad</li>
          <li>📘 The Hobbit</li>
        </ul>
      </div>
    </div>
  );
}

export default Recommendations;