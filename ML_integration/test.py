from engine import BookRecommendationEngine

engine = BookRecommendationEngine()

query = "I want books about habit building and self improvement"

results = engine.recommend(query)

for book in results:
    print("\n📚 Title:", book["title"])
    print("✍ Author:", book["author"])
    print("🏷 Category:", book["category"])
    print("🖼 Image:", book["image"])
    