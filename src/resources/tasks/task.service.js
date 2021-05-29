import {taskRepo} from './task.memory.repository.js';
import Task from './task.model.js';

const getAll = async (boardId) => taskRepo.getAll(boardId);

const get = async (id) => taskRepo.get(id);

const create = async (taskData) => {
  const { id, title, order, description, userId, boardId, columnId } = taskData;
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

const update = async (taskData) => {
  const { title, order, description, userId, columnId, boardId, id } = taskData;
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

const remove = async (id) => taskRepo.remove(id);

export const taskService = { getAll, get, create, update, remove };
