# summarize_youtube.py
import os
import yt_dlp
from pydub import AudioSegment
from transformers import pipeline


# 1) Download audio with yt-dlp (Python version)
def download_youtube_audio(url):
    os.makedirs("video_input", exist_ok=True)

    ydl_opts = {
        "format": "bestaudio/best",
        "outtmpl": "video_input/%(id)s.%(ext)s"
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        file_path = f"video_input/{info['id']}.{info['ext']}"
        print("Downloaded:", file_path)
        return file_path


# 2) Convert audio → WAV
def convert_to_wav(path):
    os.makedirs("output", exist_ok=True)
    audio = AudioSegment.from_file(path)
    wav_path = "output/audio.wav"
    audio.export(wav_path, format="wav")
    return wav_path


# 3) Split WAV into 25 sec chunks
def split_audio_chunks(wav_path, chunk_ms=25000):
    audio = AudioSegment.from_file(wav_path)
    chunks = []

    for i in range(0, len(audio), chunk_ms):
        chunk = audio[i:i + chunk_ms]
        cpath = f"output/chunk_{i // chunk_ms}.wav"
        chunk.export(cpath, format="wav")
        chunks.append(cpath)

    return chunks


# 4) Transcribe chunks (CORRECT FUNCTION NAME)
def transcribe_chunks(chunks):
    asr = pipeline(
        "automatic-speech-recognition",
        model="openai/whisper-small",
        return_timestamps=False
    )

    full_text = ""

    for c in chunks:
        print("Transcribing:", c)
        text = asr(c)["text"]
        full_text += text + " "

    return full_text.strip()


# 5) Summarize text (BART)
def summarize_text(text):
    summarizer = pipeline(
        "summarization",
        model="facebook/bart-large-cnn"
    )

    result = summarizer(
        text,
        max_length=180,
        min_length=60,
        do_sample=False
    )

    return result[0]["summary_text"]


# 6) Main function
def summarize_youtube_link(url):
    print("📥 Downloading YouTube audio...")
    mp3 = download_youtube_audio(url)

    print("🎧 Converting to WAV...")
    wav = convert_to_wav(mp3)

    print("✂ Splitting into chunks...")
    chunks = split_audio_chunks(wav)

    print("📝 Transcribing chunks...")
    transcript = transcribe_chunks(chunks)  # <-- FIXED HERE

    print("📄 Summarizing text...")
    summary = summarize_text(transcript)

    return {
        "summary": summary,
        "transcript": transcript
    }
