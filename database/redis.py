"""
Author:fly
time:
redis配置
"""

import aioredis
import os
from aioredis import Redis
from config import settings


async def task_cache() -> Redis:
    """
    任务的缓存
    :return:
    """
    sys_cache_pool = aioredis.ConnectionPool.from_url(
        f"redis://{settings.REDIS_HOST}:{settings.REDIS_PORT}",
        db=os.getenv("CACHE_DB", 0),
        encoding="utf-8",
        decode_responses=True
    )
    return Redis(connection_pool=sys_cache_pool)
