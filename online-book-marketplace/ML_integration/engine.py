import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class BookRecommendationEngine:
    def __init__(self):
        self.books = pd.DataFrame([
            {
                "title": "Atomic Habits",
                "author": "James Clear",
                "category": "Self Help",
                "description": "Build good habits and break bad ones",
                "image": "https://covers.openlibrary.org/b/id/9259256-L.jpg"
            },
            {
                "title": "Rich Dad Poor Dad",
                "author": "Robert Kiyosaki",
                "category": "Finance",
                "description": "Learn financial intelligence",
                "image": "https://covers.openlibrary.org/b/id/8231996-L.jpg"
            },
            {
                "title": "Python Crash Course",
                "author": "Eric Matthes",
                "category": "Programming",
                "description": "Beginner Python programming book",
                "image": "https://covers.openlibrary.org/b/id/10523334-L.jpg"
            }
        ])

        self.vectorizer = TfidfVectorizer(stop_words='english')
        self.vectors = self.vectorizer.fit_transform(self.books['description'])

    def recommend(self, query, top_n=3):
        query_vec = self.vectorizer.transform([query])
        similarity = cosine_similarity(query_vec, self.vectors).flatten()

        top_indices = similarity.argsort()[-top_n:][::-1]

        results = []
        for i in top_indices:
            book = self.books.iloc[i]
            results.append({
                "title": book["title"],
                "author": book["author"],
                "category": book["category"],
                "image": book["image"]
            })

        return results