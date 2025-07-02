from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI
from fastapi.responses import ORJSONResponse

from admin import setup_admin
from core.config import settings

from api import router as api_router
from core import db_helper


@asynccontextmanager
async def lifespan(app: FastAPI):
    # startup
    yield
    #shutdown
    print("dispose engine")
    await db_helper.dispose()

main_app = FastAPI(
    default_response_class=ORJSONResponse,
    lifespan=lifespan,
)
main_app.include_router(
    api_router,
    prefix=settings.api.prefix,
    )

setup_admin(main_app, db_helper.engine)

if __name__ == "__main__":
    uvicorn.run("main:main_app",
                reload=True,
                host=settings.run.host,
                port=settings.run.port,
                )
