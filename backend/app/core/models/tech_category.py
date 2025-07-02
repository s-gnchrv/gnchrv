from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class TechCategory(IntIdPkMixin, Base):
    __tablename__ = 'tech_categories'
    title: Mapped[str] = mapped_column()

    technologies: Mapped[list["Technology"]] = relationship(back_populates="category")

    def __str__(self):
        return self.title