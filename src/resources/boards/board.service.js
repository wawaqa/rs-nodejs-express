const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const get = (id) => boardRepo.get(id);
const create = (user) => boardRepo.create(user);
const update = (user) => boardRepo.update(user);
const remove = (id) => boardRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
