from os import getenv
from pydantic import BaseModel
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()


class DBConfig(BaseModel):
    url: str = getenv("DB_URL")
    echo: bool = False


class APIV1(BaseModel):
    prefix: str = "/v1"
    todo: str = "/todos"


class APIConfig(BaseModel):
    prefix: str = "/api"
    v1: APIV1 = APIV1()


class SRVConfig(BaseModel):
    host: str = "0.0.0.0"
    port: int = 8080
    reload_on_change: bool = True


class Settings(BaseSettings):
    db: DBConfig = DBConfig()
    api: APIConfig = APIConfig()
    srv: SRVConfig = SRVConfig()


settings = Settings()
