from .model_cache import get_summarizer

def summarize_from_text(full_text):
    summarizer = get_summarizer()
    summary = summarizer(full_text, max_length=120, min_length=50, do_sample=False)[0]["summary_text"]
    return summary
