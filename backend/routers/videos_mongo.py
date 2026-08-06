import uuid
import tempfile
from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from datetime import datetime
from db.database import get_db
from ai_pipeline.pipeline import process_video
import traceback

router = APIRouter()

@router.post("/upload")
async def upload_video(file: UploadFile = File(...), db=Depends(get_db)):

    try:
        video_bytes = await file.read()
        temp = tempfile.NamedTemporaryFile(delete=False, suffix=".mp4")
        temp.write(video_bytes)
        temp.close()

        print("💾 Temp file:", temp.name)

        # USE THE CORRECT PIPELINE (this generates quiz)
        result = process_video(temp.name)
        print("📌 Pipeline Output:", result)

        video_id = str(uuid.uuid4())

        doc = {
            "_id": video_id,
            "filename": file.filename,
            "summary": result["summary"],
            "transcript": result["transcript"],
            "quiz": result["quiz"],   # <-- NOW WILL NOT BE EMPTY
            "chapters": result.get("chapters", []),
            "processed": True,
            "created_at": datetime.utcnow()
        }

        await db.videos.insert_one(doc)

        return {
            "video_id": video_id,
            "result": result
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(500, f"Processing error: {e}")

@router.get("/list")
async def list_videos(db=Depends(get_db)):
    videos = await db.videos.find().to_list(None)
    return videos

@router.delete("/delete/{video_id}")
async def delete_video(video_id: str, db=Depends(get_db)):
    result = await db.videos.delete_one({"_id": video_id})

    if result.deleted_count == 0:
        raise HTTPException(404, "Video not found")

    return {"status": "deleted", "video_id": video_id}

@router.get("/quiz/{video_id}")
async def get_quiz(video_id: str, db=Depends(get_db)):
    video = await db.videos.find_one({"_id": video_id})
    if not video:
        raise HTTPException(404, "Video not found")

    return {
        "summary": video["summary"],
        "transcript": video["transcript"],
        "quiz": video.get("quiz", []),
        "chapters": video.get("chapters", [])   # <-- FIXED
    }

@router.post("/text/summarize")
async def summarize_text_route(data: dict, db=Depends(get_db)):
    from ai_pipeline.pipeline import process_text

    summary = process_text(data["text"])
    video_id = str(uuid.uuid4())

    await db.videos.insert_one({
        "_id": video_id,
        "summary": summary["summary"],
        "transcript": data["text"],
        "quiz": summary.get("quiz", []),
        "created_at": datetime.utcnow()
    })

    return {"video_id": video_id, **summary}

@router.post("/youtube/summarize")
async def summarize_youtube_route(data: dict, db=Depends(get_db)):
    from ai_pipeline.pipeline import process_youtube

    result = process_youtube(data["url"])
    video_id = str(uuid.uuid4())

    await db.videos.insert_one({
        "_id": video_id,
        "summary": result["summary"],
        "transcript": result.get("transcript", ""),
        "quiz": result.get("quiz", []),
        "chapters": result.get("chapters", []),
        "created_at": datetime.utcnow()
    })

    return {"video_id": video_id, **result}


from ai_pipeline.translate_text import translate_text

@router.post("/translate")
async def translate_summary(data: dict):
    try:
        text = data["text"]
        target_lang = data["target_lang"]   # <-- FIXED

        translated = translate_text(text, target_lang)

        return {"translated_text": translated}

    except Exception as e:
        print("Translation Error:", e)
        raise HTTPException(500, f"Translation failed: {e}")
