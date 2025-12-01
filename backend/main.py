from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from db.database import connect_to_mongodb, close_mongodb
from routers import videos_mongo, summaries_mongo, auth_mongo

app = FastAPI(
    title="VideoAI Backend",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_mongodb()
    yield
    await close_mongodb()

app.router.lifespan_context = lifespan


@app.get("/")
def root():
    return {"message": "VideoAI Backend Running!"}

app.include_router(auth_mongo.router, prefix="/api/auth", tags=["Auth"])
app.include_router(videos_mongo.router, prefix="/api/videos", tags=["Videos"])
app.include_router(summaries_mongo.router, prefix="/api/summaries", tags=["Summaries"])
