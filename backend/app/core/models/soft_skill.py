from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class SoftSkill(IntIdPkMixin, Base):
    __tablename__ = 'soft_skills'
    title: Mapped[str] = mapped_column()
