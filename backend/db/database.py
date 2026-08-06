from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")

client = None
db = None

async def connect_to_mongodb():
    global client, db
    client = AsyncIOMotorClient(MONGO_URL)
    db = client["video_ai"]  
    print("🟢 Connected to MongoDB")

async def close_mongodb():
    global client
    if client:
        client.close()
        print("🔴 MongoDB connection closed")

def get_db():
    return db
