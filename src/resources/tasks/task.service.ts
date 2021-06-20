import { taskRepo } from './task.memory.repository';
import Task from './task.model';
import IService from '../Interfaces/IService';

class TaskService implements IService<Task> {
  getAll = async (boardId?: string): Promise<Task[]> => taskRepo.getAll(boardId);

  get = async (id: string): Promise<Task | undefined> => taskRepo.get(id);

  create = async (taskData: Task): Promise<Task | undefined> => {
    const {
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    } = taskData;
    const newTask = new Task({
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    });
    return taskRepo.create(newTask);
  };

  update = async (taskData: Task): Promise<Task | undefined> => {
    const {
      title,
      order,
      description,
      userId,
      columnId,
      boardId,
      id,
    } = taskData;
    const updatedTask = new Task({
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    });
    return taskRepo.update(updatedTask);
  };

  remove = async (id: string): Promise<void> => taskRepo.remove(id);
}

export const taskService = new TaskService();
