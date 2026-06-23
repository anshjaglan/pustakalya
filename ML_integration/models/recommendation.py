import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

# -----------------------------
# LOAD DATA
# -----------------------------
df = pd.read_csv("data/books.csv")

# -----------------------------
# SAFE CLEANING
# -----------------------------
for col in ["title", "author", "genres", "description"]:
    if col not in df.columns:
        df[col] = ""

df["features"] = (
    df["title"].fillna("") + " " +
    df["author"].fillna("") + " " +
    df["genres"].fillna("") + " " +
    df["description"].fillna("")
).astype(str)

# -----------------------------
# TF-IDF (NO HUGE MATRIX STORAGE)
# -----------------------------
vectorizer = TfidfVectorizer(stop_words="english")
tfidf_matrix = vectorizer.fit_transform(df["features"])

# -----------------------------
# FAST RECOMMEND FUNCTION (FIXED)
# -----------------------------
def recommend(book_title, top_n=10):

    try:
        idx = df[df["title"].str.lower() == book_title.lower()].index[0]
    except IndexError:
        return []

    # compute similarity ONLY for selected book
    cosine_similarities = linear_kernel(
        tfidf_matrix[idx:idx+1],
        tfidf_matrix
    ).flatten()

    # get top matches
    related_indices = cosine_similarities.argsort()[::-1][1:top_n+1]

    results = df.iloc[related_indices][
        ["title", "author", "rating", "image_url", "genres"]
    ]

    return results.to_dict(orient="records")


# -----------------------------
# TEST
# -----------------------------
if __name__ == "__main__":
    print(recommend("The Hunger Games"))