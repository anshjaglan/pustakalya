function AIAssistant() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold mb-8">
        🤖 AI Assistant
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Ask about books..."
          className="w-full p-4 border rounded-lg"
        />

        <div className="mt-6 space-y-3">
          <p>
            User: Suggest self-help books
          </p>

          <p>
            AI: Atomic Habits, Deep Work, Psychology of Money
          </p>

          <p>
            User: Can I rent books?
          </p>

          <p>
            AI: Yes, books can be rented for 7, 15 or 30 days.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;