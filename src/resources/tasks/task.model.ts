import { v4 as uuid } from 'uuid';

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string|null;
  boardId: string;
  columnId: string;
}

class Task implements ITask {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string|null;

  boardId: string;

  columnId: string;

  constructor(taskData: ITask) {
    const {
      id = uuid(),
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    } = taskData;
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export default Task;
