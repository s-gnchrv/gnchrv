from sqlalchemy import ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core import Base
from core.models.mixins.int_id_pk import IntIdPkMixin


class ProjectDetail(IntIdPkMixin, Base):
    __tablename__ = 'project_details'
    title: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column(Text)
    image: Mapped[str] = mapped_column()
    project_id: Mapped[int] = mapped_column(ForeignKey('projects.id'))
    project: Mapped["Project"] = relationship(back_populates="details")

    def __str__(self):
        return self.title