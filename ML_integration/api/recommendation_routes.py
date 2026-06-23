from flask import Blueprint, request, jsonify
from models.recommendation import recommend

recommendation_bp = Blueprint("recommendation", __name__)

@recommendation_bp.route("/recommend", methods=["POST"])
def recommend_books():

    data = request.json

    recommendations = recommend(data["book_title"])

    return jsonify({
        "recommendations": recommendations
    })
