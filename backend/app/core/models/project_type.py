from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class ProjectType(IntIdPkMixin, Base):
    __tablename__ = 'project_types'
    title: Mapped[str] = mapped_column()
    title_plural: Mapped[str] = mapped_column()