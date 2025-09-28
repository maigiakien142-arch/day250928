"""
@file: Middleware.py
@author: ajax126
@desc: 中间件
@character: utf-8
"""

from starlette.middleware.base import BaseHTTPMiddleware
import logging
from starlette.requests import Request
import datetime

# 获取今天的日期
today = datetime.date.today()
logging.basicConfig(filename=f"log/api-{today}.log", level=logging.INFO)


class LogRequestMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        """
        记录请求文件
        :param request:
        :param call_next:
        :return:
        """

        add_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        BASIC_LOG_INFO = f"请求时间为{add_time},请求方法为{request.method},请求的地址为{request.url},发出请求的IP地址{request.client.host}"
        if request.method in ["POST", "PUT"]:
            body = await request.body()
            logging.info(f"{BASIC_LOG_INFO},请求体为{body}")
        else:
            logging.info(BASIC_LOG_INFO)

        response = await call_next(request)
        return response
