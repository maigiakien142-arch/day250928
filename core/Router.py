"""
@file: Router.py
@author: ajax126
@desc: FastAPI 路由聚合
@character: utf-8
"""

from api.api import api_router
from fastapi import APIRouter


router = APIRouter()
# 将主路由注册到应用（告诉FastAPI应用，这些接口可以访问了
router.include_router(api_router)