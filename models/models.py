"""
@file: models.py
@desc: 数据库模型类  面向数据库
@character: utf-8
"""

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from sqlalchemy import JSON, Column


class BasicModel(SQLModel):
    create_by: str = Field(description="创建人")
    # 使用SQLModel的Field定义模型字段，使用datetime.utcnow,每次创建新记录时动态生成当前时间
    create_time: datetime = Field(default=datetime.utcnow, description="创建时间")


class User(BasicModel, table=True):
    user_id: str = Field(primary_key=True, description="用户ID,用户的唯一表示")
    # index=True表示为这个字段在数据库中创建一个索引
    username: str = Field(description="用户名", index=True)
    password: str = Field(description="密码")
    user_status: int = Field(default=1, description="用户状态：0-禁用，1-可用，2-正常", index=True)
