"""
@file: BaseService.py
@author: ajax126
@desc: 基础service类 ORM框架：模型类和数据库一一对应；也可使用SQLAlchemy，类似Java中的MyBatis
@character: utf-8
"""

from typing import Generic, Optional, TypeVar
from sqlmodel import Session, select, SQLModel
from database.mysql import engine

T = TypeVar('T', bound=SQLModel)


class BaseService(Generic[T]):
    # self表示类的实例自身
    def __init__(self, model: T):
        self.model = model
        # 创建一个数据库会话，用于执行数据库操作
        self.session = Session(engine)

    def commit(self):
        self.session.commit()

    def close(self):
        self.session.close()

    def get_all(self):
        statement = select(self.model)
        return self.session.exec(statement).all()

    def create(self, instance: T):
        self.session.add(instance)
        self.commit()
        self.session.refresh(instance)
        return instance

    def delete(self, instance: T):
        self.session.delete(instance)
        self.commit()

    def get_paginated(self, page: int, page_size: int, filters: Optional[list] = None):
        offset = (page - 1) * page_size
        # self.model决定查找哪张表
        statement = select(self.model).offset(offset).limit(page_size)

        # 添加额外的查询条件
        if filters:
            for item_filter in filters:
                statement = statement.where(item_filter)
        # 查询分页数据
        items = self.session.exec(statement).all()

        # 查询总数
        total_statement = select(self.model)
        total = len(self.session.exec(total_statement).all())

        return items, total
