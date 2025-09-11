from sqlalchemy.orm import Session
from .models import WorkOrder

class WorkOrderRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        return self.db.query(WorkOrder).all()

    def get_by_id(self, workorder_id: int):
        return self.db.query(WorkOrder).filter(WorkOrder.id == workorder_id).first()

    def create(self, title: str, description: str = None):
        workorder = WorkOrder(title=title, description=description)
        self.db.add(workorder)
        self.db.commit()
        self.db.refresh(workorder)
        return workorder

    def update(self, workorder_id: int, **kwargs):
        workorder = self.get_by_id(workorder_id)
        if not workorder:
            return None
        for key, value in kwargs.items():
            setattr(workorder, key, value)
        self.db.commit()
        self.db.refresh(workorder)
        return workorder

    def delete(self, workorder_id: int):
        workorder = self.get_by_id(workorder_id)
        if not workorder:
            return None
        self.db.delete(workorder)
        self.db.commit()
        return workorder
