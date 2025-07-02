from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class Date(IntIdPkMixin, Base):
    __tablename__ = 'dates'
    start: Mapped[int] = mapped_column()
    end: Mapped[Optional[int]] = mapped_column(nullable=True)
    title: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column()

    def __str__(self):
        return self.title