from fastapi import APIRouter
from core.config import settings

api_router = APIRouter(prefix=settings.api.prefix)


api_router.get("/healthchecker")(lambda: {"message": "Hello World"})
