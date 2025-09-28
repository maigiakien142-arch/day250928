"""
Author:fly
time:
@desc: 项目的mysql数据库配置文件
"""

from sqlmodel import SQLModel, create_engine
from config import settings
from models.models import User

engine = create_engine(
    # 字符串之前的f表示这是一个f-string（格式化字符串），作用是在字符串中直接嵌入变量或表达式的值
    f"mysql+pymysql://{settings.MYSQL_USER}:{settings.MYSQL_PASSWORD}@{settings.MYSQL_IP}:{settings.MYSQL_PORT}/{settings.MYSQL_DATABASE}")


# async def register():
#     # 根据定义的SQLModel模型类，自动创建对应的表结构
#     SQLModel.metadata.create_all(engine)
