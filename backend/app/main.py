from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .dependencies.system_info import get_system_info
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(
  title="Rasp web page",
  description="Backend for Raspberry web page",
  version="0.0.1"
)

app.add_middleware(
  CORSMiddleware,
  allow_origins=[os.getenv("DEV_HOST"), os.getenv("PROD_HOST")],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get('/api/system-info')
async def root():
  return get_system_info()