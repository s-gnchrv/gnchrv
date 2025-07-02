from sqlalchemy import Table, Column, ForeignKey

from core import Base

project_technology_association = Table(
    "project_technology_association",
    Base.metadata,
    Column("project_id", ForeignKey("projects.id"), primary_key=True),
    Column("technology_id", ForeignKey("technologies.id"), primary_key=True),
)