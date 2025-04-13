from fastapi import FastAPI

app = FastAPI(
  title="Rasp web page",
  description="Backend for Raspberry web page",
  version="0.0.1"
)

@app.get('/')
async def root():
  return { "message": "Hello world from FastAPI" }