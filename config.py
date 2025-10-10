"""
@release: fsray-api-alpha
@file: config.py
@author: ajax126
@desc: 项目的配置文件
@character: utf-8
"""
import os
from dotenv import load_dotenv, find_dotenv
from pydantic import BaseConfig
from typing import List


class Config(BaseConfig):
    # 加载环境变量，并覆盖同名变量
    load_dotenv(find_dotenv(), override=True)
    # 调试模式
    APP_DEBUG: bool = True
    # 项目的版本号
    VERSION: str = "0.0..1"
    PROJECT_NAME: str = "fastApiProject"
    # 静态资源的目录
    STATIC_DIR: str = os.path.join(os.getcwd(), "static")
    TEMPLATE_DIR: str = os.path.join(STATIC_DIR, "templates")
    # 跨域的请求
    CORS_ORIGINS: List[str] = ["*"]  # 所有的跨域请求都能够访问
    CROS_ALLOW_CREDENTIALS: bool = True  # 允许携带cookie
    CORS_ALLOW_METHODS: List[str] = ["*"]  # 所有的请求方法都允许
    CORS_ALLOW_HEADERS: List[str] = ["*"]  # 所有的请求头都允许

    # 数据库配置
    MYSQL_USER: str = "root"
    # 密码是Zcd@123456  但是由于@属于特殊字符，需要进行转义处理
    MYSQL_PASSWORD: str = "Zcd%40123456"
    MYSQL_DATABASE: str = "itemTestZcd"
    MYSQL_IP: str = "81.70.188.11"
    MYSQL_PORT: int = 3306

    # Redis配置
    REDIS_HOST: str = "127.0.0.1"
    REDIS_PORT: int = 6379


settings = Config()
