"""
@file: Utils.py
@author: ajax126
@desc: 项目的工具类
@character: utf-8
"""

import uuid
from passlib.handlers.pbkdf2 import pbkdf2_sha256

# 生成uuid
def generate_uuid():
    """
    生成uuid
    :return: uuid
    """
    return str(uuid.uuid4())

def en_password(psw:str):
    """
    密码加密
    :param psw: 用户输入的密码
    :return: 加密后的密码
    """
    password = pbkdf2_sha256.hash(psw)
    return password


def check_password(password: str, old: str):
    """
    密码校验
    :param password: 用户输入的密码
    :param old: 数据库密码
    :return: Boolean
    """
    check = pbkdf2_sha256.verify(password, old)
    if check:
        return True
    else:
        return False

