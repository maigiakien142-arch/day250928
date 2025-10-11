from fastapi import APIRouter
from schemas.response import ReturnNoneDataModel, STATUS_CODE
from service.ApplicationService import ApplicationService

router = APIRouter()


@router.get("/application_check", summary="申请存在检查", response_model=ReturnNoneDataModel)
async def check_application(application_id: int):
    """
    检查申请是否存在
    :param application_id: 申请ID
    :return:
    """
    application_service = ApplicationService()
    application = application_service.get_application_by_id(application_id)
    application_service.close()
    if application:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="申请存在", success=True)
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="申请不存在", success=False)


@router.get("/application_title", summary="申请标题检查", response_model=ReturnNoneDataModel)
async def check_application_title(title: str):
    """
    检查申请标题是否存在
    :param title: 申请标题
    :return:
    """
    application_service = ApplicationService()
    application = application_service.get_application_by_title(title)
    application_service.close()
    if application:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="申请标题已存在", success=True)
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="申请标题不存在", success=False)


@router.get("/urgency_level", summary="紧急程度检查", response_model=ReturnNoneDataModel)
async def check_urgency_level(application_id: int):
    """
    检查申请紧急程度
    :param application_id: 申请ID
    :return:
    """
    application_service = ApplicationService()
    application = application_service.get_application_by_id(application_id)
    application_service.close()
    if application:
        urgency_map = {
            "low": "低",
            "medium": "中",
            "high": "高"
        }
        urgency_text = urgency_map.get(application.urgency_level, "未知紧急程度")
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"申请紧急程度: {urgency_text}",
            success=True
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="申请不存在", success=False)


@router.get("/gpu_server_status", summary="GPU服务器可用性检查", response_model=ReturnNoneDataModel)
async def check_gpu_server_status():
    """
    检查GPU服务器是否可用
    :return:
    """
    application_service = ApplicationService()
    available_applications = application_service.get_available_gpu_servers()
    application_service.close()
    if available_applications:
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"有 {len(available_applications)} 个申请可使用GPU服务器",
            success=True
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="暂无可用GPU服务器", success=False)


@router.get("/application_list", summary="申请列表", response_model=ReturnNoneDataModel)
async def get_application_list(skip: int = 0, limit: int = 100):
    """
    获取申请列表
    :param skip: 跳过数量
    :param limit: 限制数量
    :return:
    """
    application_service = ApplicationService()
    applications = application_service.get_all_applications(skip, limit)
    application_service.close()
    if applications:
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"获取到 {len(applications)} 个申请",
            success=True,
            data=applications
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message="暂无申请数据", success=False)


@router.get("/urgency_list", summary="按紧急程度获取申请", response_model=ReturnNoneDataModel)
async def get_applications_by_urgency(urgency_level: str):
    """
    根据紧急程度获取申请列表
    :param urgency_level: 紧急程度
    :return:
    """
    application_service = ApplicationService()
    applications = application_service.get_applications_by_urgency(urgency_level)
    application_service.close()
    if applications:
        urgency_map = {
            "low": "低",
            "medium": "中",
            "high": "高"
        }
        urgency_text = urgency_map.get(urgency_level, "未知")
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"找到 {len(applications)} 个紧急程度为 {urgency_text} 的申请",
            success=True,
            data=applications
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message=f"没有找到紧急程度为 {urgency_level} 的申请", success=False)


@router.get("/resource_type_list", summary="按资源类型获取申请", response_model=ReturnNoneDataModel)
async def get_applications_by_resource_type(resource_type: str):
    """
    根据资源类型获取申请列表
    :param resource_type: 资源类型
    :return:
    """
    application_service = ApplicationService()
    applications = application_service.get_applications_by_resource_type(resource_type)
    application_service.close()
    if applications:
        return ReturnNoneDataModel(
            code=STATUS_CODE["success"],
            message=f"找到 {len(applications)} 个资源类型为 {resource_type} 的申请",
            success=True,
            data=applications
        )
    else:
        return ReturnNoneDataModel(code=STATUS_CODE["success"], message=f"没有找到资源类型为 {resource_type} 的申请", success=False)