from sqlalchemy import create_engine, Column, Integer, String, Enum
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker

# 数据库连接配置
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:your_password@localhost:3306/server_monitor"  # 替换 your_password 为你的 MySQL 密码

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# 用户模型
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    password_hash = Column(String(100))
    role = Column(Enum("normal", "admin"), default="normal")