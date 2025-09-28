"""
@file: record_schemas.py
@author: ajax126
@desc: 分页约束
@character: utf-8
"""
from pydantic import Field, BaseModel
from sqlalchemy import JSON, Column
from typing import Optional


class RecordPaginationModel(BaseModel):
    page: int = Field(1, description='页码', gt=0, le=1000000)
    page_size: int = Field(10, description='每页数量', gt=0, le=1000000)
    time_range: Optional[str] = Field(None, description="时间范围")
