from transformers import pipeline

def summarize_from_text(full_text):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary = summarizer(full_text, max_length=120, min_length=50, do_sample=False)[0]["summary_text"]
    return summary
