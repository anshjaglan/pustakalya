import pandas as pd
import os

# -----------------------------
# LOAD DATASET
# -----------------------------

base_path = os.path.dirname(os.path.dirname(__file__))
file_path = os.path.join(base_path, "data", "books.csv")

df = pd.read_csv(file_path)

# -----------------------------
# CLEAN DATA
# -----------------------------

df["title"] = df["title"].fillna("").astype(str)
df["author"] = df["author"].fillna("").astype(str)

# genres may or may not exist safely
if "genres" in df.columns:
    df["genres"] = df["genres"].fillna("").astype(str)
else:
    df["genres"] = ""

if "description" in df.columns:
    df["description"] = df["description"].fillna("").astype(str)
else:
    df["description"] = ""

# -----------------------------
# CHATBOT FUNCTION
# -----------------------------

def chatbot_response(user_input):

    user_input = user_input.lower().strip()

    # 👋 Greeting
    if "hi" in user_input or "hello" in user_input:
        return "Hi 👋 I am your Book Assistant. Ask me for fiction, programming, or self-help books."

    # 💻 Programming / Tech
    elif "python" in user_input or "programming" in user_input or "coding" in user_input:
        books = df[df["genres"].str.lower().str.contains("program", na=False)]
        return books["title"].head(10).tolist() if not books.empty else ["No programming books found"]

    # 💰 Finance
    elif "finance" in user_input or "money" in user_input:
        books = df[df["genres"].str.lower().str.contains("finance", na=False)]
        return books["title"].head(10).tolist() if not books.empty else ["No finance books found"]

    # 📖 Fiction
    elif "fiction" in user_input:
        books = df[df["genres"].str.lower().str.contains("fiction", na=False)]
        return books["title"].head(10).tolist() if not books.empty else ["No fiction books found"]

    # 🌱 Self-help / motivation
    elif "self help" in user_input or "motivation" in user_input:
        books = df[df["genres"].str.lower().str.contains("self", na=False)]
        return books["title"].head(10).tolist() if not books.empty else ["No self-help books found"]

    # 🔍 Search by book name (NEW FEATURE)
    else:
        matches = df[df["title"].str.lower().str.contains(user_input, na=False)]

        if not matches.empty:
            return matches["title"].head(5).tolist()

        return "Sorry 😕 I couldn’t find anything. Try: fiction, programming, finance, self-help"


# -----------------------------
# TEST RUN
# -----------------------------

if __name__ == "__main__":

    print("\n🤖 Chatbot Started (type 'exit' to stop)\n")

    while True:

        user_input = input("You: ")

        if user_input.lower() == "exit":
            print("Bot: Goodbye 👋")
            break

        response = chatbot_response(user_input)
        print("Bot:", response)