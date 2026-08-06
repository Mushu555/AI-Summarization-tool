import os
import secrets
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, validator
from passlib.context import CryptContext
from datetime import datetime, timedelta
import jwt

from db.database import get_db

router = APIRouter()

SECRET_KEY = os.getenv("JWT_SECRET_KEY")
if not SECRET_KEY:
    SECRET_KEY = secrets.token_hex(32)
    print(
        "⚠️  JWT_SECRET_KEY not set in environment — using a random secret for this "
        "process only. Tokens will be invalidated on every restart. Set JWT_SECRET_KEY "
        "in your .env before deploying to production."
    )

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class UserSignup(BaseModel):
    username: str
    email: str
    password: str

    @validator("password")
    def limit_password_length(cls, v):
        if len(v) > 72:
            raise ValueError("Password cannot exceed 72 characters")
        return v


class UserLogin(BaseModel):
    username: str
    password: str


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


@router.post("/signup")
async def signup(user: UserSignup):
    db = get_db()
    if db is None:
        raise HTTPException(status_code=500, detail="Database not initialized")

    existing = await db["users"].find_one({"username": user.username})
    if existing:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_password = pwd_context.hash(user.password[:72])

    new_user = {
        "username": user.username,
        "email": user.email,
        "password": hashed_password,
        "role": "user"
    }

    await db["users"].insert_one(new_user)

    token = create_access_token({"sub": user.username})

    return {"access_token": token, "role": "user"}


@router.post("/login")
async def login(user: UserLogin):
    db = get_db()
    if db is None:
        raise HTTPException(status_code=500, detail="Database not initialized")

    stored = await db["users"].find_one({"username": user.username})

    if not stored:
        raise HTTPException(status_code=400, detail="User not found")

    if not pwd_context.verify(user.password, stored["password"]):
        raise HTTPException(status_code=400, detail="Incorrect password")

    token = create_access_token({"sub": user.username})

    return {"access_token": token, "role": stored.get("role", "user")}
