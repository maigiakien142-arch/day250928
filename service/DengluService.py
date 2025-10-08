from passlib.context import CryptContext
from sqlalchemy.orm import Session
from api.endpoints.denglu import User

# 密码哈希工具
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# 获取用户
def get_user(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

# 创建用户
def create_user(db: Session, username: str, password: str, role: str):
    # 密码哈希
    hashed_password = pwd_context.hash(password)
    db_user = User(username=username, password_hash=hashed_password, role=role)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# 验证密码
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)