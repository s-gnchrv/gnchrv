from sqlalchemy.orm import Mapped, mapped_column

from core.base import Base
from .mixins.int_id_pk import IntIdPkMixin


class Contact(IntIdPkMixin, Base):
    __tablename__ = 'contacts'
    type: Mapped[str] = mapped_column(unique=True)
    nickname: Mapped[str] = mapped_column()
    link: Mapped[str] = mapped_column()