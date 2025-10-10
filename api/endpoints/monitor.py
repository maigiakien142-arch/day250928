import os

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse, FileResponse
from datetime import datetime, timedelta
from sqlmodel import Session, select
from database.mysql import engine  # 复用 mysql.py 的数据库连接
from models.monitor_models import ServerInfo, ServerData

router = APIRouter(tags=["监控类接口"])


# 1. 监控面板首页
@router.get("/", response_class=HTMLResponse)
async def monitor_index():
    """监控面板首页（返回 HTML 页面）"""
    # 注意：HTML 文件路径需改为 FastAPI 可访问的静态路径（后续配置）
    try:
        return FileResponse("resources/templates/index.html")
    except Exception as e:
        raise HTTPException(status_code=404, detail="监控页面未找到")


# 2. 获取所有服务器列表
@router.get("/servers", response_model=list[ServerInfo])
async def get_servers():
    """获取所有监控服务器列表"""
    with Session(engine) as session:
        servers = session.exec(select(ServerInfo)).all()
        return servers


# 3. 获取服务器历史性能数据
@router.get("/history/{server_id}", response_model=list[ServerData])
async def get_history(server_id: str):
    """获取指定服务器最近1小时的性能数据"""
    one_hour_ago = (datetime.now() - timedelta(hours=1)).timestamp()
    with Session(engine) as session:
        statement = select(ServerData).where(
            ServerData.server_id == server_id,
            ServerData.timestamp >= one_hour_ago
        ).order_by(ServerData.timestamp)
        data = session.exec(statement).all()
        if not data:
            raise HTTPException(status_code=404, detail=f"服务器 {server_id} 无历史数据")
        return data
