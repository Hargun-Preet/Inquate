# ✏️ Inquate — Draw. Solve. Explore. ✨

**Inquate** is your personal math & physics wizard — draw a problem, click a button, and watch it solve the toughest equations like magic! 🧙‍♂️ Whether it’s algebra, calculus, or even a tricky physics diagram, Inquate understands your scribbles and instantly returns clear, beautiful solutions rendered in LaTeX.



## ✨ Features That Feel Like Magic
- ✏️ **Draw Anything** — equations, shapes, graphs, vectors — just sketch it.
- 🔮 **One-Click AI Solve** — hit "Solve" and let AI do its thing — math, physics, and more.
- 🧮 **Instant, Accurate Answers** — get precise solutions, variables calculated, or assignments extracted.
- 💎 **Sleek & Futuristic UI** — a polished, glassmorphic design with silky-smooth interactions that make every click and swipe feel effortlessly cool.
- 🖌️ **Edit & Transform** — resize, recolor, and reposition shapes to craft perfect diagrams.
- 📐 **LaTeX Rendering** — enjoy crisp, professional math output, rendered beautifully with MathJax.
- 🔑 **Sign In Seamlessly** — powered by Clerk so your creations stay safe and private.
- 🚀 **Fast & Interactive** — built with modern tech for a fluid, responsive experience on every device.



## 🧠 How It Feels
Imagine sketching a problem and having a friendly AI math tutor **read your drawing**, figure out what you mean, and return an answer before you can blink. That’s Inquate — math & physics solved as if by magic.

## 📂 Project Structure
```
inquate/
│
├── backend/                # FastAPI backend
│   ├── main.py
│   ├── constants.py
│   ├── schema.py
│   ├── requirements.txt
│   ├── .env
│   └── apps/
│       └── calculator/
│           ├── route.py
│           └── utils.py
│
├── frontend/               # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── index.css
│   │   └── ...
│   ├── public/
│   ├── .env.local
│   ├── package.json
│   ├── tailwind.config.js
│   └── ...
│
└── README.md
```
## 🔧 Tech Stack
- Frontend: React, Vite, TypeScript, Tailwind CSS, Mantine, Clerk, MathJax, react-draggable
- Backend: FastAPI, Python, Google Generative AI, Pillow, python-dotenv
- Deployment: Railway - Backend, Vercel - Frontend

## 🎯 Getting Started
- Clone the repository:
   ```
   git clone https://github.com/Hargun-Preet/Inquate.git
   cd Inquate
   ```
# 🐣 Backend Setup
1. Install Python dependencies
```
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

pip install -r requirements.txt
```
2. Configure environment variables

Create a .env file in backend:
```
GEMINI_API_KEY=your-google-gemini-api-key
# Add other variables as needed
```
3. Run the backend server
```
uvicorn main:app --reload --host 0.0.0.0 --port 8900
```
The backend will be available at http://localhost:8900.

# 🎨 Frontend Setup
1. Install Node dependencies
```
cd frontend
npm install
# or
yarn
```
2. Configure environment variables

Create a .env.local file in frontend:
```
VITE_API_URL=http://localhost:8900
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
VITE_CLERK_SIGN_IN_URL=/sign-in
VITE_CLERK_SIGN_UP_URL=/sign-up
VITE_CLERK_AFTER_SIGN_IN_URL=/canvas
VITE_CLERK_AFTER_SIGN_UP_URL=/canvas
VITE_CLERK_AFTER_SIGN_OUT_URL=/
```
3. Run the frontend dev server
```
npm run dev
# or
yarn dev
```
The frontend will be available at http://localhost:5173 (or the port Vite chooses).

## 🌐 Environment Variables

# Backend (`.env`)
| Variable         | Description             |
|------------------|-------------------------|
| `GEMINI_API_KEY` | Google Gemini API Key   |
| `...`            | Add other backend secrets as needed |

# Frontend (`.env.local`)
| Variable                          | Description                    |
|----------------------------------|--------------------------------|
| `VITE_API_URL`                    | Backend API URL (e.g. `http://localhost:8900`) |
| `VITE_CLERK_PUBLISHABLE_KEY`      | Clerk publishable key          |
| `VITE_CLERK_SIGN_IN_URL`          | Clerk sign-in route            |
| `VITE_CLERK_SIGN_UP_URL`          | Clerk sign-up route            |
| `VITE_CLERK_AFTER_SIGN_IN_URL`    | Redirect after sign-in         |
| `VITE_CLERK_AFTER_SIGN_UP_URL`    | Redirect after sign-up         |
| `VITE_CLERK_AFTER_SIGN_OUT_URL`   | Redirect after sign-out        |

## 🚀 Development Run
- Backend:
Run uvicorn main:app --reload --host 0.0.0.0 --port 8900 in backend
- Frontend:
Run npm run dev in frontend

## 🌐 Deployment on Railway
Deploy both backend and frontend as separate services:

1. Push your code to GitHub.
2. Create a new Railway project.
3. Add a service for the backend:
- Set root directory to backend
- Start command: uvicorn main:app --host 0.0.0.0 --port $PORT
- Set environment variables (from .env)
4. Add a service for the frontend:
- Set root directory to frontend
- Build command: npm run build
- Start command: npm run preview -- --port $PORT
- Set environment variables (from .env.local)
- Set VITE_API_URL to your backend’s Railway URL
5. Each service will get its own Railway URL.
6. (Optional) Add a custom domain in Railway dashboard.

## 📜 License
MIT License.
See LICENSE for details.

---
Happy hacking! 🎉
For questions or contributions, open an issue or PR.
