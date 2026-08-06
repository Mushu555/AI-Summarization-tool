from fastapi import APIRouter, HTTPException
from ai_pipeline.pipeline import process_text, process_youtube

router = APIRouter()


@router.post("/text")
def summarize_text_api(body: dict):
    if "text" not in body:
        raise HTTPException(400, "Missing 'text'")
    return process_text(body["text"])


@router.post("/youtube")
def summarize_youtube_api(body: dict):
    if "url" not in body:
        raise HTTPException(400, "Missing 'url'")
    return process_youtube(body["url"])
