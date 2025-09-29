from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from sqlalchemy import JSON, Column
from enum import Enum


class BasicModel(SQLModel):
    create_by: str = Field(description="创建人")
    # 使用SQLModel的Field定义模型字段，使用datetime.utcnow,每次创建新记录时动态生成当前时间
    create_time: datetime = Field(default=datetime.utcnow, description="创建时间")


class ServerStatus(str, Enum):
    """服务器状态枚举"""
    online = "0"      # 运行中
    offline = "1"      # 停止
    maintenance = "2"  # 维护中

class ApplyStatus(str, Enum):
        """是否可申请枚举"""
        yes = "0"  # 可以申请
        no = "1"  # 不可申请


class ServerTemp(BasicModel, table=True):
    server_id: int = Field(primary_key=True, description="服务器ID")
    status: ServerStatus = Field(default=ServerStatus.online, description="服务器状态,0代表运行中，1代表停止，2代表维护中，3代表故障", index=True)
    name: str = Field(description="服务器名称", max_length=50)
    ip_address: str = Field(description="IP地址", max_length=15)
    cpu_usage: str = Field(description="CPU使用率", max_length=10)
    memory_usage: str = Field(description="内存使用率", max_length=10)
    gpu_usage: str = Field(description="GPU使用率", max_length=10)
    available_gpu: str = Field(description="可用GPU", max_length=10)
    can_apply: ApplyStatus = Field(default=ApplyStatus.yes, description="是否可申请，0代表是，1代表否", index=True)
    operation: str = Field(description="操作", max_length=15)