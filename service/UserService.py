"""
@file: UserService.py
@author: ajax126
@desc: 用户Service层
@character: utf-8
"""
from models.models import User
from service.BaseService import BaseService
from sqlmodel import Session, select
from typing import Optional


class UserService(BaseService[User]):
    def __init__(self):
        super().__init__(User)

    def get_user_by_username(self, username: str):
        """
        select(User)：创建一个查询User模型的基础语句
        .where(User.username == username): 添加查询条件，限定值查询username字段等于传入参数的记录
        等价于： select * from user where username = '传入参数'
        """
        statement = select(User).where(User.username == username)
        return self.session.exec(statement).first()

    def get_user_list(self, page: int, page_size: int, user_status: Optional[int] = None,
                      user_id: Optional[str] = None):
        filters = []
        # 添加过了条件传参给基数service
        if user_status is not None:
            filters.append(User.user_status == user_status)
        if user_id is not None:
            filters.append(User.user_id == user_id)
        user_list, total = self.get_paginated(page, page_size, filters)
        return user_list, total

