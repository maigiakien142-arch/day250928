"""
Author:fly
time:
@desc: 程序的入口   热启动指令：uvicorn main:app --reload
"""

from fastapi import FastAPI, HTTPException, exception_handlers
from fastapi.exceptions import RequestValidationError

from config import settings
from tortoise.exceptions import OperationalError, DoesNotExist, IntegrityError, ValidationError
from core import Events, Middleware
from core import Exceptions
from core.Router import api_router
from pathlib import Path  # 用于生成绝对路径
from fastapi.staticfiles import StaticFiles  # 导入静态文件服务工具

application = FastAPI(
    debug=settings.APP_DEBUG,
)

# --------------------- 新增：挂载静态文件 ---------------------
# 生成静态文件目录的**绝对路径**（避免相对路径歧义）
static_dir = Path(__file__).parent / "resources" / "static"
# 将 URL 前缀 `/static` 映射到本地 static_dir 目录
application.mount("/static", StaticFiles(directory=static_dir.resolve()), name="static")
# -------------------------------------------------------------

# 事件监听
application.add_event_handler("startup", Events.startup(application))
application.add_event_handler("shutdown", Events.stopping(application))

# 异常处理
application.add_exception_handler(HTTPException, Exceptions.http_error_handler)
application.add_exception_handler(RequestValidationError, Exceptions.http422_error_handler)
application.add_exception_handler(DoesNotExist, Exceptions.mysql_does_not_exist)
application.add_exception_handler(IntegrityError, Exceptions.mysql_integrity_error)
application.add_exception_handler(ValidationError, Exceptions.mysql_validation_error)
application.add_exception_handler(OperationalError, Exceptions.mysql_operational_error)

# 添加自定义日志中间件
application.add_middleware(Middleware.LogRequestMiddleware)

# 路由挂载
application.include_router(api_router)

app = application
