from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class Knowledge(IntIdPkMixin, Base):
    __tablename__ = 'knowledge'
    title: Mapped[str] = mapped_column()