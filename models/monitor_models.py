"""
@file: api.py
@author: ajax126
@desc: 接口文件
@character: utf-8
"""
from sqlmodel import Field, SQLModel, create_engine
from typing import Optional


# 监控服务器基础信息表
class ServerInfo(SQLModel, table=True):
    __tablename__ = "server_info"  # 与原表名一致，避免数据丢失
    id: Optional[int] = Field(default=None, primary_key=True)
    server_id: str = Field(index=True, nullable=False)  # 服务器唯一标识
    last_seen: float = Field(nullable=False)  # 最后在线时间戳（秒）
    cpu_cores: int = Field(nullable=False)  # CPU核心数
    memory_total: float = Field(nullable=False)  # 总内存（字节）
    gpu_count: int = Field(default=0)  # GPU数量


# 监控服务器性能数据表
class ServerData(SQLModel, table=True):
    __tablename__ = "server_data"  # 与原表名一致
    id: Optional[int] = Field(default=None, primary_key=True)
    server_id: str = Field(index=True, nullable=False)  # 关联服务器
    timestamp: float = Field(nullable=False)  # 数据采集时间戳（秒）
    cpu_usage: float = Field(nullable=False)  # CPU使用率（%）
    memory_usage: float = Field(nullable=False)  # 内存使用率（%）
    gpu_usage: Optional[float] = Field(default=None)  # GPU使用率（%，可选）
