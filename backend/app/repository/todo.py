from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from core.models import Todo


async def create_todo(session: AsyncSession, todo: Todo) -> Todo:
    session.add(todo)
    await session.commit()
    await session.refresh(todo)
    return todo


async def get_todos(session: AsyncSession) -> list[Todo]:
    stmt = select(Todo).order_by(Todo.id)
    res = await session.execute(stmt)
    return res.scalars().all()


async def get_todo(session: AsyncSession, todo_id: int) -> Todo:
    stmt = select(Todo).where(Todo.id == todo_id)
    res = await session.execute(stmt)
    return res.scalars().one()
