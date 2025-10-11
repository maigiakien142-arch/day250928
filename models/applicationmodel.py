from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from sqlalchemy import JSON, Column
from enum import Enum


class BasicModel(SQLModel):
    create_by: str = Field(description="创建人")
    # 使用SQLModel的Field定义模型字段，使用datetime.utcnow,每次创建新记录时动态生成当前时间
    create_time: datetime = Field(default=datetime.utcnow, description="创建时间")


class UrgencyLevel(str, Enum):
    """紧急程度枚举"""
    low = "low"  # 低
    medium = "medium"  # 中
    high = "high"  # 高


class GPUServer(str, Enum):
    """gpu服务器是否可用"""
    available = "available"  #可用
    unavailable = "unavailable"  #不可用


class Application(BasicModel, table=True):
    application_id: int = Field(primary_key=True, description="申请ID")
    resource_type: str = Field(description="资源类型", max_length=50)
    urgency_level: UrgencyLevel = Field(default=UrgencyLevel.low, description="紧急程度，0代表低，1代表中，2代表高",index=True)
    application_title: str = Field(description="申请标题", max_length=255)
    expected_completion: datetime = Field(description="预期完成时间")
    gpu_server: GPUServer = Field(default=GPUServer.available, description="gpu服务器是否可用，0可用，1代表不可用",index=True)
    start_number: int = Field(description="起始编号")
    description: str = Field(description="描述", max_length=255)
    contribution_score: float = Field(description="贡献得分", max_length=50)
    research_score: float = Field(description="科研得分", max_length=50)
    efficiency_score: float = Field(description="效率得分", max_length=50)
    comprehensive_score: float = Field(description="综合得分", max_length=50)
    contact_person: str = Field(description="联系人", max_length=50)
    contact_phone: str = Field(description="联系电话", max_length=50)
    contact_email: str = Field(description="联系邮箱", max_length=50)
    card_number: int = Field(description="显卡数量")