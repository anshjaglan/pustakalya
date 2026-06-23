import pandas as pd
import os


class BookEngine:

    def __init__(self, csv_path):

        base_dir = os.path.dirname(os.path.abspath(__file__))
        full_path = os.path.join(base_dir, csv_path)

        print("Loading dataset from:", full_path)

        self.df = pd.read_csv(full_path, encoding="utf-8-sig")

        # IMPORTANT FIX: remove hidden spaces in column names
        self.df.columns = self.df.columns.str.strip()

        print("Columns loaded:", list(self.df.columns))
        print("Total books:", len(self.df))

        # safe cleanup
        self.df["genres"] = self.df["genres"].fillna("")
        self.df["book_available"] = self.df["book_available"].fillna(1)
        self.df["rating"] = self.df["rating"].fillna(0)
        self.df["image_url"] = self.df["image_url"].fillna("")

    # -------------------------------------------------
    # SAFE FORMATTER (FIXED FOR YOUR CSV)
    # -------------------------------------------------
    def _format(self, df):

        books = []

        for _, row in df.iterrows():

            books.append({
                # 🔥 FIX: DO NOT USE "d" directly (causes crash)
                "id": row.iloc[0],   # first column safely

                "title": row["title"],
                "author": row["author"],
                "rating": float(row["rating"]) if row["rating"] else 0,
                "genres": row["genres"],
                "image_url": row["image_url"],
                "price": row["price"],
                "available": int(row["book_available"]) if "book_available" in row else 1
            })

        return books

    # -------------------------------------------------
    # SEARCH FUNCTION
    # -------------------------------------------------
    def search_books(self, query, limit=10):

        print(f"🔍 Searching: {query}")

        query = query.lower()

        result = self.df[
            (self.df["title"].str.lower().str.contains(query, na=False)) |
            (self.df["author"].str.lower().str.contains(query, na=False)) |
            (self.df["genres"].str.lower().str.contains(query, na=False))
        ]

        # only available books
        if "book_available" in self.df.columns:
            result = result[result["book_available"] == 1]

        print(f"📊 Found: {len(result)} books")

        return self._format(result.head(limit))

    # -------------------------------------------------
    # RECOMMENDATION SYSTEM
    # -------------------------------------------------
    def recommend_books(self, book_title, limit=10):

        print(f"🎯 Recommendations for: {book_title}")

        book = self.df[self.df["title"].str.lower() == book_title.lower()]

        if book.empty:
            print("❌ Book not found")
            return []

        base_genres = book.iloc[0]["genres"]

        recommendations = self.df[
            (self.df["genres"].str.contains(base_genres, na=False)) &
            (self.df["title"].str.lower() != book_title.lower())
        ]

        if "book_available" in self.df.columns:
            recommendations = recommendations[recommendations["book_available"] == 1]

        recommendations = recommendations.sort_values(
            by="rating",
            ascending=False
        )

        print(f"📚 Recommendations found: {len(recommendations)}")

        return self._format(recommendations.head(limit))

    # -------------------------------------------------
    # GET BOOK BY ID
    # -------------------------------------------------
    def get_book_by_id(self, book_id):

        result = self.df[self.df.iloc[:, 0] == book_id]

        if result.empty:
            return None

        return self._format(result)[0]

    # -------------------------------------------------
    # TEST FUNCTION
    # -------------------------------------------------
    def test(self):

        print("\n🚀 RUNNING TEST...\n")

        results = self.search_books("harry")

        print("\n📚 SAMPLE OUTPUT:")
        for b in results[:3]:
            print(b)

        return results