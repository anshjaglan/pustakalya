from models.chatbot import chatbot_response
from models.recommendation import recommend
from models.sentiment import analyze_sentiment

print("\n🤖 ML BOOK ASSISTANT (Interactive Mode)")
print("Type 'exit' to stop\n")

while True:

    user = input("You: ")

    if user.lower() == "exit":
        print("Goodbye 👋")
        break

    if "recommend" in user:
        book = input("Enter book name: ")
        print("Bot:", recommend(book))

    elif "review" in user:
        text = input("Write review: ")
        print("Sentiment:", analyze_sentiment(text))

    else:
        print("Bot:", chatbot_response(user))