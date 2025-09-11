from fastapi import APIRouter

router = APIRouter(prefix="/example", tags=["Example"])

@router.get("/")
async def hello():
    return {"message": "Hello from example router!"}
