from fastapi import APIRouter
from schemas.response import ReturnNoneDataModel, STATUS_CODE
from service.ServerService import ServerService


router = APIRouter()


@router.get("/server_check", summary="服务器存在检查", response_model=ReturnNoneDataModel)
async def check_server(server_id: int):
    """
    检查服务器是否存在
    :param server_id: 服务器ID
    :return:
    """
    server_service = ServerService()
    server = server_service.get_server_by_id(server_id)
    server_service.close()
    if server:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="服务器存在", success=True)
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="服务器不存在", success=False)


@router.get("/server_name", summary="服务器名称检查", response_model=ReturnNoneDataModel)
async def check_server_name(name: str):
    """
    检查服务器名称是否存在
    :param name: 服务器名称
    :return:
    """
    server_service = ServerService()
    server = server_service.get_server_by_name(name)
    server_service.close()
    if server:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="服务器名称已存在", success=True)
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="服务器名称不存在", success=False)


@router.get("/server_status", summary="服务器状态检查", response_model=ReturnNoneDataModel)
async def check_server_status(server_id: int):
    """
    检查服务器状态
    :param server_id: 服务器ID
    :return:
    """
    server_service = ServerService()
    server = server_service.get_server_by_id(server_id)
    server_service.close()
    if server:
        status_map = {
            "0": "运行中",
            "1": "停止",
            "2": "维护中",
            "3": "故障"
        }
        status_text = status_map.get(server.status, "未知状态")
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"服务器状态: {status_text}",
            success=True
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="服务器不存在", success=False)


@router.get("/server_available", summary="可申请服务器检查", response_model=ReturnNoneDataModel)
async def check_available_servers():
    """
    检查是否有可申请的服务器
    :return:
    """
    server_service = ServerService()
    servers = server_service.get_available_servers()
    server_service.close()
    if servers:
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"有 {len(servers)} 台服务器可申请",
            success=True
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="暂无可用服务器", success=False)


@router.get("/server_list", summary="服务器列表", response_model=ReturnNoneDataModel)
async def get_server_list(skip: int = 0, limit: int = 100):
    """
    获取服务器列表
    :param skip: 跳过数量
    :param limit: 限制数量
    :return:
    """
    server_service = ServerService()
    servers = server_service.get_all_servers(skip, limit)
    server_service.close()
    if servers:
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"获取到 {len(servers)} 台服务器",
            success=True,
            data=servers
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="暂无服务器数据", success=False)


@router.get("/status_list", summary="按状态获取服务器", response_model=ReturnNoneDataModel)
async def get_servers_by_status(status: str):
    """
    根据状态获取服务器列表
    :param status: 服务器状态
    :return:
    """
    server_service = ServerService()
    servers = server_service.get_servers_by_status(status)
    server_service.close()
    if servers:
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"找到 {len(servers)} 台状态为 {status} 的服务器",
            success=True,
            data=servers
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message=f"没有找到状态为 {status} 的服务器", success=False)