from sqlalchemy.orm import Mapped, mapped_column
from .base import Base


class Todo(Base):
    title: Mapped[str]
    description: Mapped[str]
    done: Mapped[bool] = mapped_column(default=False)
