from fastapi import FastAPI
from .dependencies.system_info import get_system_info

app = FastAPI(
  title="Rasp web page",
  description="Backend for Raspberry web page",
  version="0.0.1"
)

@app.get('/system-info')
async def root():
  return get_system_info()