from models.sentiment import analyze_sentiment

reviews = []

print("\n⭐ BOOK REVIEW SYSTEM (USER INPUT MODE)")
print("Type 'exit' to stop\n")

while True:

    book = input("Enter Book Name: ")

    if book.lower() == "exit":
        break

    rating = input("Enter Rating (1-5): ")

    review_text = input("Write your review: ")

    sentiment = analyze_sentiment(review_text)

    review = {
        "book": book,
        "rating": rating,
        "review": review_text,
        "sentiment": sentiment
    }

    reviews.append(review)

    print("\n✅ REVIEW ADDED")
    print("Book:", book)
    print("Rating:", rating)
    print("Sentiment:", sentiment)
    print("-" * 40)

print("\n📚 ALL REVIEWS:")
for r in reviews:
    print(r)