import os
import subprocess
import uuid
from transformers import pipeline
import tempfile


def save_bytes_to_temp_video(video_bytes):
    """Save uploaded bytes to a temporary video file."""
    temp_path = os.path.join(tempfile.gettempdir(), f"{uuid.uuid4()}.mp4")
    with open(temp_path, "wb") as f:
        f.write(video_bytes)
    return temp_path


def extract_audio(video_path, output_dir="output"):
    os.makedirs(output_dir, exist_ok=True)

    audio_path = os.path.join(output_dir, "video_audio.wav")

    command = f'ffmpeg -i "{video_path}" -vn -acodec pcm_s16le -ar 16000 -ac 1 "{audio_path}" -y'
    subprocess.call(command, shell=True)

    return audio_path


def transcribe_audio(audio_path):
    asr = pipeline(
    "automatic-speech-recognition",
    model="openai/whisper-small",
    framework="pt",
    return_timestamps=True,
    chunk_length_s=30
    )
    result = asr(audio_path)
    return result["text"]


def summarize_text(text):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary = summarizer(text, max_length=150, min_length=50, do_sample=False)[0]["summary_text"]
    return summary


def summarize_video(video_path, input_type="path"):

    # 1. Extract Audio with FFmpeg
    audio_file = extract_audio(video_path)
    print("🎵 Audio extracted:", audio_file)

    # 2. Transcribe Audio
    transcript = transcribe_audio(audio_file)
    print("📝 Transcript generated")

    # 3. Summarize
    summary = summarize_text(transcript)
    print("📄 Summary generated")

    return {
        "transcript": transcript,
        "summary": summary
    }
