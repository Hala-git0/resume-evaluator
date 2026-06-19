from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.security import OAuth2PasswordRequestForm 
from schemas import RegisterRequest, UserResponse, TokenResponse
import store
from auth_utils import hash_password, verify_password, create_access_token, get_current_user

router = APIRouter()


@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register(request: RegisterRequest):
    if request.email in store.users:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_pwd = hash_password(request.password)
    store.users[request.email] = {"email": request.email, "hashed_password": hashed_pwd, "role": "user"}
    return UserResponse(email=request.email, role="user")


@router.post("/login", response_model=TokenResponse)
def login(request: OAuth2PasswordRequestForm = Depends()):
    user = store.users.get(request.username)
    
    if not user or not verify_password(request.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )
    
    access_token = create_access_token(email=user["email"])
    return TokenResponse(access_token=access_token, token_type="bearer")


@router.get("/me")
def get_me(current_user: str = Depends(get_current_user)):
    return {"email": current_user, "role": "user", "status": "Authenticated successfully"}