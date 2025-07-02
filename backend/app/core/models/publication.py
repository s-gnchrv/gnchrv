from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class Publication(IntIdPkMixin, Base):
    __tablename__ = 'publications'
    title: Mapped[str] = mapped_column()
    link: Mapped[str] = mapped_column()

    def __str__(self):
        return self.title