"""
@file: user.py
@author: ajax126
@desc: 用户行为的接口
@character: utf-8
"""

from fastapi import APIRouter

from schemas.record_schemas import RecordPaginationModel
from schemas.response import ReturnNoneDataModel, STATUS_CODE, ReturnDataModel
from service.UserService import UserService

router = APIRouter()


@router.get("/check", summary="用户存在检查", response_model=ReturnNoneDataModel)
async def check_user(username: str):
    """
    检查用户是否存在
    :param username:
    :return:
    """
    user_service = UserService()
    user = user_service.get_user_by_username(username)
    user_service.close()
    if user:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="用户存在", success=True)
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="用户不存在", success=False)


# dependencies为定义接口的依赖，Depends(check_permission)表示在执行接口逻辑前，会执行check_permission函数
@router.post("/user_list", summary="获取用户列表", response_model=ReturnDataModel)
async def get_user_list(query: RecordPaginationModel):
    """
    获取用户列表，可根据状态&角色筛选
    :param query:
    :return:
    """
    print(query)
    user_service = UserService()
    user_list, total = user_service.get_user_list(
        page=query.page,
        page_size=query.page_size,
        user_status=query.user_status,
        user_id=query.user_id
    )
    print(user_list)
    if total <= 0:
        return ReturnDataModel(code=STATUS_CODE["error"], message="查询用户列表错误", success=False, data=[], total=0)
    user_service.close()
    return ReturnDataModel(code=STATUS_CODE["success"], message="查询用户列表成功", success=True, data=user_list, total=total)
