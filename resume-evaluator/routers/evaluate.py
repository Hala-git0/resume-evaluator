from fastapi import APIRouter, Depends
from schemas import EvaluateRequest, EvaluateResponse
from auth_utils import get_current_user # استيراد دالة الفحص الأمني المحمية

router = APIRouter()

# مسار محمي ومقفل لا يدخله إلا من يملك التوكن
@router.post("/", response_model=EvaluateResponse)
def evaluate_resume(request: EvaluateRequest, current_user: str = Depends(get_current_user)):
    return EvaluateResponse(
        message=f"Evaluation requested by {current_user}. ChatGPT integration coming in Stage 5."
    )