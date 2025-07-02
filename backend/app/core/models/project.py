from datetime import date
from typing import Optional

from sqlalchemy import ForeignKey, Text, Date
from sqlalchemy.orm import mapped_column, Mapped, relationship

from core import Base
from core.models.mixins.int_id_pk import IntIdPkMixin


class Project(IntIdPkMixin, Base):
    __tablename__ = 'projects'
    title: Mapped[str] = mapped_column()
    image: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column(Text)
    date: Mapped[date] = mapped_column(Date)
    code_link: Mapped[Optional[str]] = mapped_column(nullable=True)
    demo_link: Mapped[Optional[str]] = mapped_column(nullable=True)

    type_id: Mapped[int] = mapped_column(ForeignKey('project_types.id'))
    type: Mapped["ProjectType"] = relationship(back_populates="projects")
    details: Mapped[list["ProjectDetail"]] = relationship(back_populates="project")
    features: Mapped[list["ProjectFeature"]] = relationship(back_populates="project")
    technologies: Mapped[list["Technology"]] = relationship(
        secondary="project_technology_association",
        back_populates="projects"
    )