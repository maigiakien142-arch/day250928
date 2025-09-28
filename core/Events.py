"""
Author:fly
time:
@desc: FastAPI应用事件
"""

from typing import Callable
import aioredis
from aioredis import Redis
from fastapi import FastAPI
# from database.mysql import register
from database.redis import task_cache


def startup(app: FastAPI) -> Callable:
    """
    FastAPI应用启动事件
    :param app:
    :return: start_app
    """

    async def app_start() -> None:
        print("------app start------")
        # 数据库注册
        # await register()

        #redis连接
        app.state.task_cache = await task_cache()
        pass

    return app_start


def stopping(app: FastAPI) -> Callable:
    """
    FastAPI应用停止事件
    :param app:
    :return: stop_app
    """

    async def stop_app() -> None:
        # 关闭redis连接
        task: Redis = app.state.task_cache
        await task.close()
        print("------app stop------")

    return stop_app
