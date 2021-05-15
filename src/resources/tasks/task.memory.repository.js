const dB = require('../../common/inMemoryDb');

const getAll = async (boardId) => dB.getAllTasks(boardId);
const get = async (id) => dB.getTask(id);
const create = async (task) => dB.createTask(task);
const remove = async (task) => dB.removeTask(task);
const update = async (task) => dB.updateTask(task);

module.exports = { getAll, get, create, update, remove };
