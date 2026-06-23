from app import app

if __name__ == "__main__":
    print("\n🚀 ML Integration Project Starting...\n")
    print("Available APIs:")
    print("POST /chat")
    print("POST /recommend")
    print("POST /review")
    print("GET  /reviews\n")

    app.run(debug=True)