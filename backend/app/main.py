import uvicorn
from fastapi import FastAPI
from api import api_router
from core.config import settings

app = FastAPI()

app.include_router(api_router)

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.srv.host,
        port=settings.srv.port,
        reload=settings.srv.reload_on_change,
    )
