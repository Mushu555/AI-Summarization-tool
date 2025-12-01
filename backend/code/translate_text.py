from transformers import pipeline

translator_map = {
    "hi": "Helsinki-NLP/opus-mt-en-hi",
    "te": "Helsinki-NLP/opus-mt-en-te",
    "ta": "Helsinki-NLP/opus-mt-en-ta",
    "bn": "Helsinki-NLP/opus-mt-en-bn",
    "ur": "Helsinki-NLP/opus-mt-en-ur",
    "kn": "Helsinki-NLP/opus-mt-en-kn",
    "ml": "Helsinki-NLP/opus-mt-en-ml",
}

def translate_text(text, lang):
    if lang not in translator_map:
        return "Language not supported."

    model = translator_map[lang]
    translator = pipeline("translation", model=model)

    result = translator(text, max_length=400)
    return result[0]["translation_text"]
