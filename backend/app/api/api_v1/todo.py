from typing import Annotated
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends, APIRouter
from service.todo import create_new_todo, get_all_todos, get_one_todo
from core.schemas.todo import TodoCreate, Todo
from core.models import db_helper
from core.config import settings

todo_router = APIRouter(prefix=settings.api.v1.todo)


@todo_router.post("/", response_model=Todo)
async def create_todo(
    todo: TodoCreate,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
):
    return await create_new_todo(
        session=session, title=todo.title, description=todo.description
    )


@todo_router.get("/", response_model=list[Todo])
async def get_all(
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
):
    return await get_all_todos(session=session)


@todo_router.get("/{todo_id}", response_model=Todo)
async def get_one(
    todo_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
):
    return await get_one_todo(session=session, todo_id=todo_id)
