# Rasp web page

### 👉 A simple home web page for any Raspberry pi

To display data like component characteristics, uptime, CPU heat, etc.

> [!NOTE]
> - **Frontend** with React Ts and Tailwind (`Node`, `/frontend`)
> 
> - **Backend** with FastAPI (`Python`, `/backend`)

### **1. Run .backend/**  
`python -m venv .venv`  
`pip install -r requirements.txt`  
`source .venv/bin/activate`  
`make start-prod`

### **2. Run frontend/**  
`npm install`  
`npm run build`