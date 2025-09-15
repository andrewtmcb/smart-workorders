from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """
    Application settings class using Pydantic.
    Loads environment variables from .env file and performs validation.
    """
    # General app settings
    PROJECT_NAME: str = "Smart WorkOrders API"
    VERSION: str = "1.0.0"
    ENVIRONMENT: str = "local"
    API_V1_STR: str = "/api/v1"
    BACKEND_CORS_ORIGINS: list[str] = ["http://localhost:3000"]
    ALLOWED_HOSTS: list[str] = ["localhost", "127.0.0.1"]
    SECRET_KEY: str = "your_secret_key_here"

    # Database settings
    DATABASE_HOST: str
    DATABASE_PORT: str
    DATABASE_USER: str
    DATABASE_PASSWORD: str
    DATABASE_NAME: str

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8"
    )

# Create a single, shared instance of the settings class
settings = Settings()
