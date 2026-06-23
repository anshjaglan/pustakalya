from services.voice import listen, speak
from models.chatbot import chatbot_response

print("Voice Assistant Started")

while True:

    query = listen()

    print(query)

    if query.lower() == "exit":

        speak("Goodbye")

        break

    response = chatbot_response(query)

    if isinstance(response, list):

        answer = ", ".join(response)

    else:

        answer = response

    print(answer)

    speak(answer)