from sqlalchemy.ext.asyncio import AsyncSession
from core.models import Todo
from repository.todo import create_todo, get_todos, get_todo


async def create_new_todo(session: AsyncSession, title: str, description: str) -> Todo:
    todo = Todo(title=title, description=description)
    return await create_todo(session=session, todo=todo)


async def get_all_todos(session: AsyncSession) -> list[Todo]:
    return await get_todos(session=session)


async def get_one_todo(session: AsyncSession, todo_id: int) -> Todo:
    return await get_todo(session=session, todo_id=todo_id)
