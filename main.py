"""
Author:fly
time:
@desc: 程序的入口   热启动指令：uvicorn main:app --reload
"""

from fastapi import FastAPI, HTTPException, exception_handlers
from fastapi.exceptions import RequestValidationError
from starlette.responses import HTMLResponse
from starlette.staticfiles import StaticFiles

from config import settings
from tortoise.exceptions import OperationalError, DoesNotExist, IntegrityError, ValidationError
from core import Events, Middleware
from core import Exceptions
from core.Router import api_router
import os

application = FastAPI(
    debug=settings.APP_DEBUG,
)

# 新增：配置静态文件目录（托管 dist 下的 CSS、JS 等）
# 确保 dist 目录在项目根目录，与 main.py 同级
dist_dir = os.path.join(os.path.dirname(__file__), "dist")
application.mount("/", StaticFiles(directory=dist_dir, html=True), name="dist")


# 新增：前端页面路由（访问根路径时返回 index.html）
@application.get("/", response_class=HTMLResponse)
async def read_index():
    with open(os.path.join(dist_dir, "index.html"), "r", encoding="utf-8") as f:
        return f.read()



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
