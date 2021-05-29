const taskRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = (boardId) => taskRepo.getAll(boardId);
const get = (id) => taskRepo.get(id);
const create = (taskData) => {
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
const update = (taskData) => {
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
const remove = (id) => taskRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
