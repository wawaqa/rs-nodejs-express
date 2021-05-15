const taskRepo = require('./task.memory.repository');

const getAll = (boardId) => taskRepo.getAll(boardId);
const get = (id) => taskRepo.get(id);
const create = (task) => taskRepo.create(task);
const update = (task) => taskRepo.update(task);
const remove = (id) => taskRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
