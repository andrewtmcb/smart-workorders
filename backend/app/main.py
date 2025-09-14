"""
FastAPI main application module.
"""
from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from sqlalchemy import text
from sqlalchemy.exc import OperationalError

from app.api.api_v1.api import api_router
from app.core.config import settings
from app.database import engine, get_db

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """
    Lifespan context manager for FastAPI application.
    Handles startup and shutdown events.
    """
    # Startup
    print("🚀 Starting up Smart WorkOrders API...")
    
    # Test database connection
    print("Connecting to the database...")
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        print("✅ Database connection successful!")
    except OperationalError as e:
        print(f"❌ Database connection failed: {e}")
        # In a real-world scenario, you might want to raise an exception
        # or handle this failure more gracefully.
        
    yield
    
    # Shutdown
    print("🛑 Shutting down Smart WorkOrders API...")
    if engine:
        print("Closing database connection pool...")
        engine.dispose()
        print("Database connection pool closed.")

def create_application() -> FastAPI:
    """
    Application factory pattern for creating FastAPI instance.
    """
    application = FastAPI(
        title=settings.PROJECT_NAME,
        description="Smart WorkOrders Management System API",
        version=settings.VERSION,
        openapi_url=f"{settings.API_V1_STR}/openapi.json" if settings.ENVIRONMENT != "production" else None,
        docs_url="/docs" if settings.ENVIRONMENT != "production" else None,
        redoc_url="/redoc" if settings.ENVIRONMENT != "production" else None,
        lifespan=lifespan,
    )

    # Security middleware
    if settings.BACKEND_CORS_ORIGINS:
        application.add_middleware(
            CORSMiddleware,
            allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

    if settings.ALLOWED_HOSTS:
        application.add_middleware(
            TrustedHostMiddleware, 
            allowed_hosts=settings.ALLOWED_HOSTS
        )

    # Add a health check endpoint to the root URL
    @application.get("/", tags=["health"])
    async def read_root():
        return {"status": "ok", "message": "API is running"}

    # Include API router
    application.include_router(api_router, prefix=settings.API_V1_STR)

    return application

# Create the FastAPI application instance
app = create_application()