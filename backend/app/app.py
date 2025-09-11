from fastapi import FastAPI
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
import os

class App:
    def __init__(self, title: str = "Demo API"):
        self.app = FastAPI(title=title)
        self.engine = create_async_engine(self.database_url, echo=True)
        self.async_session = sessionmaker(
            self.engine, expire_on_commit=False, class_=AsyncSession
        )
        self.register_events()
        self.register_routers()

    @property
    def database_url(self) -> str:
        user = os.environ.get("DATABASE_USER", "postgres")
        password = os.environ.get("DATABASE_PASSWORD", "postgres")
        host = os.environ.get("DATABASE_HOST", "localhost")
        port = os.environ.get("DATABASE_PORT", 5432)
        db = os.environ.get("DATABASE_NAME", "smartops")
        return f"postgresql+asyncpg://{user}:{password}@{host}:{port}/{db}"

    def register_routers(self):
        from routers import example
        self.app.include_router(example.router)

    def register_events(self):
        @self.app.on_event("startup")
        async def startup():
            async with self.engine.begin() as conn:
                await conn.run_sync(lambda conn: print("DB connected"))

        @self.app.on_event("shutdown")
        async def shutdown():
            await self.engine.dispose()
