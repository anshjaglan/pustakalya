import requests

BASE = "http://127.0.0.1:5000"

print("\n🤖 CHATBOT DEMO")
res = requests.post(BASE + "/chat", json={"message": "suggest programming books"})
print(res.json())

print("\n📚 RECOMMENDATION DEMO")
res = requests.post(BASE + "/recommend", json={"book_title": "Atomic Habits"})
print(res.json())

print("\n⭐ REVIEW DEMO")
res = requests.post(BASE + "/review", json={
    "book": "Atomic Habits",
    "rating": 5,
    "review": "Excellent book"
})
print(res.json())

print("\n📖 GET REVIEWS")
res = requests.get(BASE + "/reviews")
print(res.json())