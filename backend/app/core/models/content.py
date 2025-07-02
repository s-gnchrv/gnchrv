from sqlalchemy import Text
from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class Content(IntIdPkMixin, Base):
    __tablename__ = 'content'
    key: Mapped[str] = mapped_column(unique=True)
    value: Mapped[str] = mapped_column(Text)