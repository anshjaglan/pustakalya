from flask import Blueprint, request, jsonify
from models.sentiment import analyze_sentiment

review_bp = Blueprint("review", __name__)

reviews = []

@review_bp.route("/review", methods=["POST"])
def add_review():

    data = request.json

    sentiment = analyze_sentiment(data["review"])

    review = {
        "book": data["book"],
        "rating": data["rating"],
        "review": data["review"],
        "sentiment": sentiment
    }

    reviews.append(review)

    return jsonify(review)


@review_bp.route("/reviews", methods=["GET"])
def get_reviews():
    return jsonify(reviews)