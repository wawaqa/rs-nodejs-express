const taskRepo = require('./task.memory.repository');
const Task = require('./task.model');

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

module.exports = { getAll, get, create, update, remove };
