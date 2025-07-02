from fastapi import FastAPI
from sqladmin import ModelView, Admin
from sqlalchemy.ext.asyncio import AsyncEngine

from core.models import *


class ContactAdmin(ModelView, model=Contact):
    column_list = [Contact.type, Contact.nickname]

class ContentAdmin(ModelView, model=Content):
    column_list = [Content.key, Content.value]

class DateAdmin(ModelView, model=Date):
    column_list = [Date.start, Date.end, Date.title]

class HashTagAdmin(ModelView, model=HashTag):
    column_list = [HashTag.title, HashTag.order]

class KnowledgeAdmin(ModelView, model=Knowledge):
    column_list = [Knowledge.title]

class ProjectAdmin(ModelView, model=Project):
    column_list = [Project.title]

class ProjectDetailAdmin(ModelView, model=ProjectDetail):
    column_list = [ProjectDetail.project, ProjectDetail.title]

class ProjectFeatureAdmin(ModelView, model=ProjectFeature):
    column_list = [ProjectFeature.project, ProjectFeature.title]

class ProjectTypeAdmin(ModelView, model=ProjectType):
    column_list = [ProjectType.title]

class PublicationAdmin(ModelView, model=Publication):
    column_list = [Publication.title]

class SoftSkillAdmin(ModelView, model=SoftSkill):
    column_list = [SoftSkill.title]

class TechCategoryAdmin(ModelView, model=TechCategory):
    column_list = [TechCategory.title]

class TechnologyAdmin(ModelView, model=Technology):
    column_list = [Technology.category, Technology.title, Technology.level]

def setup_admin(app: FastAPI, engine: AsyncEngine) -> Admin:
    admin = Admin(app, engine)
    admin.add_view(ContactAdmin)
    admin.add_view(ContentAdmin)
    admin.add_view(DateAdmin)
    admin.add_view(HashTagAdmin)
    admin.add_view(KnowledgeAdmin)
    admin.add_view(ProjectAdmin)
    admin.add_view(ProjectDetailAdmin)
    admin.add_view(ProjectFeatureAdmin)
    admin.add_view(ProjectTypeAdmin)
    admin.add_view(PublicationAdmin)
    admin.add_view(SoftSkillAdmin)
    admin.add_view(TechCategoryAdmin)
    admin.add_view(TechnologyAdmin)

    return admin