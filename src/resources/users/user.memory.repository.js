let dB = require('../../common/inMemoryDb');

const getAll = async () => dB;
const get = async (id) => dB.find((user) => user.id === id);
const create = async (user) => {
  dB.push(user);
  return get(user.id);
};

const remove = async (id) => {
  dB=dB.filter((user) => user.id !== id);
};

const update = async (user) => {
  remove(user.id);
  create(user);
  return get(user.id);
};

module.exports = { getAll, get, create, update, remove };
