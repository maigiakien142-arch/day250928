"""
@file: api.py
@author: ajax126
@desc: 接口文件
@character: utf-8
"""
from api.endpoints import server
from api.endpoints import application
from .endpoints import user
from fastapi import APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

# 创建 FastAPI 实例
app = FastAPI()


# 跨域中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:8000"],  # 可加入监控页面的访问地址（如 http://localhost:8000）
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 原有路由聚合器（不变）
api_router = APIRouter(prefix="/fsray")

# 将user.router这个子路由挂载到主路由下
api_router.include_router(user.router, tags=["用户路由"])

# 添加 server 表的路由
api_router.include_router(server.router, tags=["服务器路由"])

# 添加 application 表的路由
api_router.include_router(application.router, tags=["申请路由"])