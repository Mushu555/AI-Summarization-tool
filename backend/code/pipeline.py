# from .summarize_video import summarize_video
# from .summarize_text import summarize_from_text
# from .summarize_youtube import summarize_youtube_link
# from .generate_quiz import generate_quiz
# from .generate_chapters import generate_chapters


# def process_video(video_path: str):
#     """
#     summarize_video returns:
#     {
#         "transcript": "...",
#         "summary": "real summary text"
#     }
#     """

#     result = summarize_video(video_path)

#     summary_text = result["summary"]   # <-- extract correct field

#     quiz = generate_quiz(summary_text)

#     return {
#         "summary": summary_text,
#         "transcript": result["transcript"],
#         "quiz": quiz
#     }

# def process_video(video_path: str):
#     result = summarize_video(video_path)

#     summary_text = result["summary"],
#     transcript= result["transcript"],
#     quiz_list = generate_quiz(summary_text)  # ← now returns ARRAY
#     chapters = generate_chapters(transcript)

#     return {
#         "summary": summary_text,
#         "transcript": result["transcript"],
#         "quiz": quiz_list ,  # ← ARRAY stored in DB
#         "chapters": chapters,
#     }


# def process_text(text: str):
#     summary = summarize_from_text(text)
#     quiz = generate_quiz(summary)
#     transcript = summary["transcript"]
#     chapters = generate_chapters(transcript)
#     return {
#         "summary": summary,
#         "quiz": quiz,
#         "chapters": chapters,

#     }


# def process_youtube(url: str):
#     yt_result = summarize_youtube_link(url)

#     summary = yt_result["summary"]
#     transcript = yt_result["transcript"]
#     chapters = generate_chapters(summary)
#     quiz = generate_quiz(summary)

#     return {
#         "summary": summary,
#         "transcript": transcript,
#         "quiz": quiz,
#         "chapters":chapters,
#     }

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
