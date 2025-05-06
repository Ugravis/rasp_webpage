module.exports = {
  apps: [
    {
      name: 'rasp',
      script: '.venv/bin/uvicorn',
      args: 'app.main:app --host 0.0.0.0 --port 8000',
      interpreter: '.venv/bin/python', 
      env: {
        ENVIRONMENT: 'production',
      },
    },
  ],
};