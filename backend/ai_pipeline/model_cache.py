from functools import lru_cache
from transformers import pipeline


@lru_cache(maxsize=1)
def get_summarizer():
    return pipeline("summarization", model="facebook/bart-large-cnn")


@lru_cache(maxsize=1)
def get_asr():
    return pipeline(
        "automatic-speech-recognition",
        model="openai/whisper-small",
        return_timestamps=True,
        chunk_length_s=30,
    )


@lru_cache(maxsize=None)
def get_translator(model_name: str):
    return pipeline("translation", model=model_name)
