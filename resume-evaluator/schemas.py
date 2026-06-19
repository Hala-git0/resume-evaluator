from pydantic import BaseModel, Field, EmailStr

# 1. نموذج التسجيل - جعل الإيميل حقيقياً والباسورد لا يقل عن 8 خانات
class RegisterRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, description="At least 8 characters")

# 2. نموذج تسجيل الدخول - جعل الإيميل يتحقق من الصيغة أيضاً
class LoginRequest(BaseModel):
    email: EmailStr
    password: str

# 3. نموذج استجابة الحساب بعد النجاح
class UserResponse(BaseModel):
    email: str
    role: str

# 4. نموذج التوكن
class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class EvaluateRequest(BaseModel):
    job_description: str
    prompt: str = ""

class EvaluateResponse(BaseModel):
    result: str

from pydantic import BaseModel, EmailStr, Field


# المخطط الجديد لاستقبال طلب التقييم
class EvaluateRequest(BaseModel):
    job_description: str
    prompt: str

# المخطط الجديد للرد على طلب التقييم
class EvaluateResponse(BaseModel):
    message: str