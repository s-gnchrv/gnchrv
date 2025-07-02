from sqlalchemy import ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, relationship

from core import Base
from core.models.mixins.int_id_pk import IntIdPkMixin


class ProjectFeature(IntIdPkMixin, Base):
    __tablename__ = 'project_features'
    title: Mapped[str] = mapped_column()
    project_id: Mapped[int] = mapped_column(ForeignKey('projects.id'))
    project: Mapped["Project"] = relationship(back_populates="features")