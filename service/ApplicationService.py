from models.applicationmodel import Application
from service.BaseService import BaseService
from sqlmodel import Session, select
from typing import Optional


class ApplicationService(BaseService[Application]):
    def __init__(self):
        super().__init__(Application)

    def get_application_by_id(self, application_id: int):
        """
        根据ID获取申请
        等价于：select * from application where application_id = application_id
        """
        statement = select(Application).where(Application.application_id == application_id)
        return self.session.exec(statement).first()

    def get_application_by_title(self, title: str):
        """
        根据标题获取申请
        等价于：select * from application where application_title = title
        """
        statement = select(Application).where(Application.application_title == title)
        return self.session.exec(statement).first()

    def get_applications_by_urgency(self, urgency_level: str):
        """
        根据紧急程度获取申请列表
        等价于：select * from application where urgency_level = urgency_level
        """
        statement = select(Application).where(Application.urgency_level == urgency_level)
        return self.session.exec(statement).all()

    def get_available_gpu_servers(self):
        """
        获取可用的GPU服务器申请列表
        等价于：select * from application where gpu_server = '0'
        """
        statement = select(Application).where(Application.gpu_server == "0")
        return self.session.exec(statement).all()

    def get_all_applications(self, skip: int = 0, limit: int = 100):
        """
        获取所有申请（分页）
        等价于：select * from application limit limit offset skip
        """
        statement = select(Application).offset(skip).limit(limit)
        return self.session.exec(statement).all()

    def get_applications_by_resource_type(self, resource_type: str):
        """
        根据资源类型获取申请列表
        等价于：select * from application where resource_type = resource_type
        """
        statement = select(Application).where(Application.resource_type == resource_type)
        return self.session.exec(statement).all()

    def get_applications_by_contact_email(self, email: str):
        """
        根据联系邮箱获取申请列表
        等价于：select * from application where contact_email = email
        """
        statement = select(Application).where(Application.contact_email == email)
        return self.session.exec(statement).all()

    def get_applications_by_contact_phone(self, phone: str):
        """
        根据联系电话获取申请列表
        等价于：select * from application where contact_phone = phone
        """
        statement = select(Application).where(Application.contact_phone == phone)
        return self.session.exec(statement).all()