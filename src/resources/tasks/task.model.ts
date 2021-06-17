import { Entity, Column, PrimaryColumn } from 'typeorm';

import { v4 as uuid } from 'uuid';

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
}

@Entity()
class Task implements ITask {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'string' })
  title: string;

  @Column({ type: "int" })
  order: number;

  @Column({ type: 'string' })
  description: string;

  @Column({ type: 'uuid', nullable: true })
  userId: string | null;

  @Column({ type: 'uuid'})
  boardId: string;

  @Column({ type: 'uuid'})
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
