from models.servermodels import ServerTemp
from service.BaseService import BaseService
from sqlmodel import Session, select
from typing import Optional


class ServerService(BaseService[ServerTemp]):
    def __init__(self):
        super().__init__(ServerTemp)

    def get_server_by_id(self, server_id: int):
        """
        根据ID获取服务器
        等价于：select * from servertemp where server_id = server_id
        """
        statement = select(ServerTemp).where(ServerTemp.server_id == server_id)
        return self.session.exec(statement).first()

    def get_server_by_name(self, name: str):
        """
        根据名称获取服务器
        等价于：select * from server where name = name
        """
        statement = select(ServerTemp).where(ServerTemp.name == name)
        return self.session.exec(statement).first()

    def get_servers_by_status(self, status: str):
        """
        根据状态获取服务器列表
        等价于：select * from server where status = status
        """
        statement = select(ServerTemp).where(ServerTemp.status == status)
        return self.session.exec(statement).all()

    def get_available_servers(self):
        """
        获取可申请的服务器列表
        等价于：select * from server where can_apply = '0'
        """
        statement = select(ServerTemp).where(ServerTemp.can_apply == "0")
        return self.session.exec(statement).all()

    def get_all_servers(self, skip: int = 0, limit: int = 100):
        """
        获取所有服务器（分页）
        等价于：select * from server limit limit offset skip
        """
        statement = select(ServerTemp).offset(skip).limit(limit)
        return self.session.exec(statement).all()