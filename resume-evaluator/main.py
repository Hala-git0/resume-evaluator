from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # استيراد أداة CORS
from routers import auth, evaluate #  راوتر التقييم الجديد
import schemas

app = FastAPI(title="Resume Evaluator API")

# إعدادات الـ CORS - السماح للـ React dev server بالاتصال
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # رابط ورقم منفذ تطبيق الـ React
    allow_credentials=True,
    allow_methods=["*"],  # السماح بجميع أنواع العمليات (POST, GET, etc.)
    allow_headers=["*"],  # السماح بجميع أنواع الهيدرز والتوجيهات
)

# ربط الموجهات (Routers)
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(evaluate.router, prefix="/evaluate", tags=["evaluate"]) 

@app.get("/")
def root():
    return {"message": "Hello from FastAPI - Backend Stage 3 Complete!"}