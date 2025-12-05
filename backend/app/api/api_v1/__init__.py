from fastapi import APIRouter
from core.config import settings
from .todo import todo_router

v1_router = APIRouter(prefix=settings.api.v1.prefix)

v1_router.include_router(todo_router)
