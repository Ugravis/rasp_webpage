from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .dependencies.system_info import get_system_info

app = FastAPI(
  title="Rasp web page",
  description="Backend for Raspberry web page",
  version="0.0.1"
)

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:5173"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get('/system-info')
async def root():
  return get_system_info()