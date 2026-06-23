from flask import Flask, request, jsonify, render_template
from models.recommendation import recommend

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/recommend", methods=["POST"])
def recommend_api():

    data = request.get_json(silent=True)

    if not data:
        return jsonify({"error": "No data received"}), 400

    book = data.get("book_title", "")

    if not book:
        return jsonify({"error": "book_title missing"}), 400

    results = recommend(book)

    return jsonify({
        "recommended_books": results
    })


if __name__ == "__main__":
    app.run(debug=True)