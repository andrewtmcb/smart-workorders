from fastapi import APIRouter

api_router = APIRouter()

# You would include your various endpoint files here, like so:
# from app.api.endpoints import users, items

# api_router.include_router(users.router, prefix="/users", tags=["users"])
# api_router.include_router(items.router, prefix="/items", tags=["items"])

@api_router.get("/")
def read_root():
    return {"message": "Welcome to the backend API!"}