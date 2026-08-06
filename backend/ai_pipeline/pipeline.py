from .summarize_video import summarize_video
from .summarize_text import summarize_from_text
from .summarize_youtube import summarize_youtube_link
from .generate_quiz import generate_quiz
from .generate_chapters import generate_chapters


# --------------------------
# PROCESS VIDEO
# --------------------------
def process_video(video_path: str):
    """
    summarize_video returns:
    {
        "transcript": "...full text...",
        "summary": "...summary text..."
    }
    """
    result = summarize_video(video_path)

    summary_text = result["summary"]        # string
    transcript = result["transcript"]       # string

    quiz_list = generate_quiz(summary_text)
    chapters = generate_chapters(transcript)   # IMPORTANT → transcript

    return {
        "summary": summary_text,
        "transcript": transcript,
        "quiz": quiz_list,
        "chapters": chapters,
    }


# --------------------------
# PROCESS TEXT / PARAGRAPH
# --------------------------
def process_text(text: str):
    summary_text = summarize_from_text(text)   # returns summary string

    quiz_list = generate_quiz(summary_text)
    chapters = generate_chapters(text)         # transcript = original text

    return {
        "summary": summary_text,
        "transcript": text,
        "quiz": quiz_list,
        "chapters": chapters,
    }


# --------------------------
# PROCESS YOUTUBE
# --------------------------
def process_youtube(url: str):
    yt_result = summarize_youtube_link(url)

    summary_text = yt_result["summary"]
    transcript = yt_result["transcript"]

    quiz_list = generate_quiz(summary_text)
    chapters = generate_chapters(transcript)

    return {
        "summary": summary_text,
        "transcript": transcript,
        "quiz": quiz_list,
        "chapters": chapters,
    }
