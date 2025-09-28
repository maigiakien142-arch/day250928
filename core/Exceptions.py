"""
@file: Exceptions.py
@author: ajax126
@desc: 异常处理
@character: utf-8
"""

from fastapi import HTTPException, Request, status
from fastapi.responses import JSONResponse
from typing import Union
from fastapi.exceptions import RequestValidationError
from pydantic import ValidationError
from tortoise.exceptions import OperationalError, DoesNotExist, IntegrityError, ValidationError as MysqlValidationError
from schemas.response import STATUS_CODE


async def mysql_validation_error(_: Request, exc: MysqlValidationError):
    """
    数据库字段验证错误
    :param _:
    :param exc:
    :return:
    """
    return JSONResponse({
        "code": STATUS_CODE["Unprocessable Entity"],
        # __str__()是python的一个特殊方法，用于定义对象被转换成字符串时的行为
        "message": exc.__str__(),
        "success": False
    })


async def mysql_integrity_error(_: Request, exc: IntegrityError):
    """
    完整性错误
    :param _:
    :param exc:
    :return:
    """
    print("IntegrityError", exc)
    return JSONResponse({
        "code": STATUS_CODE["Unprocessable Entity"],
        "message": exc.__str__(),
        "success": False
    })


async def mysql_does_not_exist(_: Request, exc: DoesNotExist):
    """
    mysql 查询对象不存在异常处理
    :param _:
    :param exc:
    :return:
    """
    print("DoesNotExist", exc)
    return JSONResponse({
        "code": STATUS_CODE["Unprocessable Entity"],
        "message": "发出的请求针对的是不存在的记录，服务器没有进行操作。",
        "success": False
    })


async def mysql_operational_error(_: Request, exc: OperationalError):
    """
    mysql 数据库异常错误处理
    :param _:
    :param exc:
    :return:
    """
    print("OperationalError", exc)
    return JSONResponse({
        "code": STATUS_CODE["Unprocessable Entity"],
        "message": "数据操作失败",
        "success": False
    })


async def http_error_handler(_: Request, exc: HTTPException):
    """
    http异常处理
    :param _:
    :param exc:
    :return:
    """
    if exc.status_code == 401:
        return JSONResponse(
            {"code": STATUS_CODE["unauthorized"],
             "message": exc.detail, "success": False})

    return JSONResponse({
        "code": STATUS_CODE["Unprocessable Entity"],
        "message": exc.detail,
        "success": False
    })


async def http422_error_handler(_: Request, exc: Union[RequestValidationError, ValidationError], ) -> JSONResponse:
    """
    参数校验错误处理
    :param _:
    :param exc:
    :return:
    """
    print("[422]", exc.errors())
    return JSONResponse(
        {
            "code": STATUS_CODE["Unprocessable Entity"],
            "message": f"数据校验错误 {exc.errors()}",
            "success": False
        }
    )
