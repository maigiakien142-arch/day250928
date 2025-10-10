"""
@file: api.py
@author: ajax126
@desc: 接口文件
@character: utf-8
"""

from .endpoints import user, monitor
from .endpoints.monitor import router as monitor_router  # 导入新的监控路由
from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

# 创建 FastAPI 实例
app = FastAPI()


# 跨域中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # 可加入监控页面的访问地址（如 http://localhost:8000）
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 原有路由聚合器（不变）
api_router = APIRouter(prefix="/fsray")

# 原有子路由（不变）
api_router.include_router(user.router, tags=["用户行为类接口"])

# 新增：加入监控子路由（前缀 /monitor，与其他接口区分）
api_router.include_router(monitor_router, prefix="/monitor", tags=["监控类接口"])

# 原有挂载聚合路由（不变）
app.include_router(api_router)
