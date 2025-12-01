import os
import re
import json
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()  # <-- loads .env file!

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.0-flash")

def generate_chapters(transcript):
    prompt = f"""
    You are an AI that creates topic-based chapters from content.

    Based on the following transcript:
    ---
    {transcript}
    ---

    Generate 4–8 SMART CHAPTERS in the following JSON format ONLY:

    [
      {{
        "title": "Chapter title",
        "summary": "Short 5-6 line explanation of what this chapter contains"
      }},
      ...
    ]

    Rules:
    - Analyze the *entire transcript*, not the first lines only.
    - Titles must reflect the topics in the transcript (NOT generic like JWT).
    - Output only valid JSON.
    """

    response = model.generate_content(prompt)
    text = response.text.strip()

    # Remove ```json wrapper
    text = re.sub(r"```json|```", "", text).strip()

    try:
        chapters = json.loads(text)
        return chapters
    except:
        print("⚠ Chapter JSON error:", text)
        return []