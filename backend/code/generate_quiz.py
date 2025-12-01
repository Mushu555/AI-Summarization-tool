import os
import re
import json
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()  # <-- loads .env file!

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.0-flash")  # free tier safe

def generate_quiz(summary):
    prompt = f"""
    You are an AI that generates multiple-choice quizzes.

    Based ONLY on this summary:
    ---
    {summary}
    ---

    Generate exactly **5 MCQ questions** in **valid JSON array** format:

    [
      {{
        "question": "What is ...?",
        "options": ["A", "B", "C", "D"],
        "answer": "A"
      }},
      ...
    ]

    Rules:
    - Make questions clear and based only on the provided summary.
    - Options must be meaningful and not random.
    - Ensure the answer appears exactly in the options.
    - Output ONLY JSON. NO explanation.
    """

    response = model.generate_content(prompt)

    raw = response.text.strip()

    # Remove unwanted formatting like ```json ... ```
    raw = re.sub(r"```json|```", "", raw).strip()

    try:
        quiz = json.loads(raw)   # safer than eval
        return quiz

    except Exception:
        print("\n⚠ Gemini returned malformed JSON:\n", raw)
        return []
