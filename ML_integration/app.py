from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

from models.chatbot import chatbot_response
from models.recommendation import recommend
from models.sentiment import analyze_sentiment

app = Flask(__name__)
CORS(app)

# ---------- HOME PAGE ----------
@app.route("/")
def home():
    return render_template("index.html")


# ---------- CHATBOT ----------
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_msg = data["message"]

    response = chatbot_response(user_msg)

    return jsonify({"response": response})


# ---------- RECOMMENDATION ----------
@app.route("/recommend", methods=["POST"])
def recommend_api():
    data = request.get_json()
    book = data["book_title"]

    result = recommend(book)

    return jsonify({"books": result})


# ---------- REVIEW + SENTIMENT ----------
reviews = []

@app.route("/review", methods=["POST"])
def review():
    data = request.get_json()

    sentiment = analyze_sentiment(data["review"])

    review_obj = {
        "book": data["book"],
        "rating": data["rating"],
        "review": data["review"],
        "sentiment": sentiment
    }

    reviews.append(review_obj)

    return jsonify(review_obj)


@app.route("/reviews", methods=["GET"])
def get_reviews():
    return jsonify(reviews)


if __name__ == "__main__":
    app.run(debug=True)