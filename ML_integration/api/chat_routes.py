from flask import Blueprint, request, jsonify
from models.chatbot import chatbot_response

chat_bp = Blueprint("chat", __name__)

@chat_bp.route("/chat", methods=["POST"])
def chat():

    data = request.json

    response = chatbot_response(data["message"])

    return jsonify({
        "response": response
    })