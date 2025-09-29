"""
@file: api.py
@author: ajax126
@desc: 接口文件
@character: utf-8
"""
from fastapi import APIRouter
from api.endpoints import user

# 主路由
api_router = APIRouter()

# 将user.router这个子路由挂载到主路由下
api_router.include_router(user.router, tags=["用户路由"])

# 添加 server 表的路由
api_router.include_router(server.router, tags=["服务器路由"])