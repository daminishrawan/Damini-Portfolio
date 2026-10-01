"""
FastAPI Backend for Damini Shrawan's Portfolio AI Assistant
Run with:
    pip install fastapi uvicorn
    python main.py
or:
    uvicorn main:app --reload --port 8000
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="Damini Portfolio AI Assistant Backend")

# Enable CORS for local dev and frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

KNOWLEDGE = {
    "exp": (
        "Damini Shrawan is a Software Developer with 2.5+ years of experience specializing in "
        "React 18, Next.js 14, and TypeScript. She focuses on modern state management, high-performance "
        "UI architecture, and Generative AI workflows."
    ),
    "perf": (
        "At Lohono Stays, Damini engineered the core luxury rental booking funnel and dynamic inventory calendar. "
        "Key metrics include 30%+ performance gains via WebP optimization and refactoring 1,100+ lines of legacy code."
    ),
    "projects": (
        "Damini has shipped 5 enterprise-grade assets:\n"
        "1. Lohono Rentals (luxury villa booking platform at lohono.com)\n"
        "2. AI Personalized Trip Planner\n"
        "3. Isprava Lead Management System (LMS)\n"
        "4. Solene Architectural Exhibition Portal\n"
        "5. Chapter Community Publishing Platform"
    ),
    "stack": (
        "Damini's active engineering stack:\n"
        "- Frontend: React 18, Next.js 14, TypeScript, Tailwind CSS, Recoil, Redux Toolkit, Framer Motion\n"
        "- Backend: Node.js, Express, PostgreSQL, RESTful APIs, FastAPI\n"
        "- AI & LLM: Gemini API, Prompt Engineering, RAG Pipelines, LangChain, ChromaDB"
    ),
    "contact": (
        "Damini is located in Mumbai, Maharashtra, India. "
        "You can reach her directly at damini1998shrawan29@gmail.com."
    )
}

@app.post("/chat")
async def chat_endpoint(req: ChatRequest):
    msg = req.message.lower().strip()

    if any(k in msg for k in ["exp", "experience", "role", "years", "who is", "about damini", "background"]):
        reply = KNOWLEDGE["exp"]
    elif any(k in msg for k in ["perf", "performance", "gain", "lohono", "refactor", "30%"]):
        reply = KNOWLEDGE["perf"]
    elif any(k in msg for k in ["project", "shipped", "built", "work"]):
        reply = KNOWLEDGE["projects"]
    elif any(k in msg for k in ["stack", "tech", "skill", "language", "framework", "library"]):
        reply = KNOWLEDGE["stack"]
    elif any(k in msg for k in ["contact", "email", "reach", "hire", "mumbai", "location"]):
        reply = KNOWLEDGE["contact"]
    else:
        reply = (
            "Thanks for reaching out! Damini is a Software Developer with 2.5+ years of experience in "
            "React 18, Next.js 14, and TypeScript based in Mumbai. Ask me about her work at Lohono Stays, "
            "her 30%+ performance gains, or her tech stack!"
        )

    return {"reply": reply}

@app.get("/")
async def root():
    return {"status": "ok", "message": "Damini Portfolio AI Assistant API is running. POST to /chat."}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
