# Rasp Web Page 
![Version](https://img.shields.io/badge/version-1.0.0-blue)

### 👉 A simple home web page for any Raspberry pi

## Presentation
Rasp Web Page **displays data like component characteristics**, uptime, CPU heat, and other system metrics, the application should collect and present real-time information about the system's performance and health.

> [!NOTE]
> - **Frontend** with React Ts and Tailwind (`Node`, `frontend/`)
> 
> - **Backend** with FastAPI (`Python`, `backend/`)

## Quick start

**1. Run the backend**
```sh
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
make start-prod
```

**2. Run the frontend**
```sh
cd frontend
npm install 
npm run build
```

## Showcase
![Aperçu](https://zupimages.net/up/25/19/tdle.png)

## Tree project
```
rasp_webpage
├─ backend
│  ├─ Makefile
│  ├─ app
│  │  ├─ __init__.py
│  │  ├─ dependencies
│  │  │  ├─ __init__.py
│  │  │  └─ system_info.py
│  │  └─ main.py
│  ├─ ecosystem.config.js
│  └─ requirements.txt
└─ frontend
   ├─ eslint.config.js
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ images
   │     └─ logos
   │        └─ raspberry.png
   ├─ src
   │  ├─ App.tsx
   │  ├─ components
   │  │  ├─ content
   │  │  │  └─ SystemInfo.tsx
   │  │  ├─ layout
   │  │  │  ├─ Footer.tsx
   │  │  │  └─ Navbar.tsx
   │  │  └─ ui
   │  │     └─ ThemeSwitch.tsx
   │  ├─ config
   │  │  └─ axios.ts
   │  ├─ main.tsx
   │  ├─ router.tsx
   │  ├─ routes
   │  │  ├─ Home.tsx
   │  │  └─ More.tsx
   │  ├─ store
   │  │  ├─ modules
   │  │  │  └─ systemInfo
   │  │  │     ├─ api.ts
   │  │  │     ├─ store.ts
   │  │  │     └─ types.ts
   │  │  └─ useStore.ts
   │  ├─ styles
   │  │  └─ globals.css
   │  ├─ utils
   │  │  └─ functions
   │  │     └─ basics.ts
   │  └─ vite-env.d.ts
   ├─ tsconfig.app.json
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   └─ vite.config.ts

```