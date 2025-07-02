from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class HashTag(IntIdPkMixin, Base):
    __tablename__ = 'hashtags'
    title: Mapped[str] = mapped_column(unique=True)
    order: Mapped[int] = mapped_column(default=0)

    def __str__(self):
        return self.title