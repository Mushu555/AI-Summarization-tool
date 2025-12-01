# Dynamic JSON storage (MongoDB doesn't require strict schema)

def video_document(video_id, path, summary, quiz):
    return {
        "_id": video_id,
        "video_path": path,
        "summary": summary,
        "quiz": quiz
    }
