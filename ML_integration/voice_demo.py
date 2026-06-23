import speech_recognition as sr
import pyttsx3

# Initialize text-to-speech engine
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

# Sample book dataset (you will replace this with database later)
BOOKS = {
    "programming": [
        "Python Crash Course by Eric Matthes",
        "Automate the Boring Stuff with Python by Al Sweigart",
        "Clean Code by Robert C. Martin"
    ],
    "self help": [
        "Atomic Habits by James Clear",
        "The Power of Habit by Charles Duhigg",
        "Think and Grow Rich by Napoleon Hill"
    ],
    "finance": [
        "Rich Dad Poor Dad by Robert Kiyosaki",
        "The Intelligent Investor by Benjamin Graham",
        "Think and Grow Rich by Napoleon Hill"
    ],
    "ai": [
        "Hands-On Machine Learning by Aurélien Géron",
        "Deep Learning by Ian Goodfellow",
        "Artificial Intelligence: A Modern Approach"
    ],
    "fantasy": [
        "Harry Potter Series by J.K. Rowling",
        "The Hobbit by J.R.R. Tolkien",
        "Game of Thrones by George R.R. Martin"
    ]
}

def recommend_books(category):
    category = category.lower()

    for key in BOOKS:
        if key in category:
            return BOOKS[key]

    return [
        "Atomic Habits by James Clear",
        "Rich Dad Poor Dad by Robert Kiyosaki",
        "Python Crash Course by Eric Matthes"
    ]

def listen():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("\n🎤 Say something (e.g., 'recommend programming books')...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio)
        print("🧠 You said:", text)
        return text.lower()

    except sr.UnknownValueError:
        print("❌ Could not understand audio")
        return ""

    except sr.RequestError:
        print("❌ Speech service error")
        return ""

def process_command(command):
    if not command:
        speak("Sorry, I could not understand you.")
        return

    books = recommend_books(command)

    response = "I recommend these books: " + ", ".join(books)

    print("\n🤖 AI:", response)
    speak(response)

if __name__ == "__main__":
    speak("Voice book assistant is ready")

    while True:
        command = listen()

        if "exit" in command:
            speak("Goodbye!")
            break

        process_command(command)