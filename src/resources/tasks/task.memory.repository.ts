import dB from '../../common/inMemoryDb.js';
import IRepository from '../Interfaces/IRepository.js';
import Task from './task.model.js';

class TaskRepository implements IRepository<Task> {
  getAll = async (id?: string): Promise<Task[]> => dB.getAllTasks(id);

  get = async (id: string): Promise<Task | undefined> => dB.getTask(id);

  create = async (task: Task): Promise<Task | undefined> => dB.createTask(task);

  remove = async (id: string): Promise<void> => dB.removeTask(id);

  update = async (task: Task): Promise<Task | undefined> => dB.updateTask(task);
}

export const taskRepo = new TaskRepository();
