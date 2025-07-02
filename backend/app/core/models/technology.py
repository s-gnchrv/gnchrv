from sqlalchemy import CheckConstraint, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class Technology(IntIdPkMixin, Base):
    __tablename__ = 'technologies'
    __table_args__ = (
        CheckConstraint('level >= 0 AND level <= 5', name='check_level_range'),
    )
    title: Mapped[str] = mapped_column()
    level: Mapped[int] = mapped_column()

    category_id: Mapped[int] = mapped_column(ForeignKey('tech_categories.id'))
    category: Mapped["TechCategory"] = relationship(back_populates="technologies")
    projects: Mapped[list["Project"]] = relationship(
        secondary="project_technology_association",
        back_populates="technologies"
    )