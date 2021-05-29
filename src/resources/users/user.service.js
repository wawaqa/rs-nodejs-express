const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};
const get = async (id) => {
  const user = await usersRepo.get(id);
  if (user) return User.toResponse(user);
  return undefined;
};
const create = async (userData) => {
  const { name, login, password } = userData;
  const newUser = new User({ name, login, password });
  const createdUser = await usersRepo.create(newUser);
  return User.toResponse(createdUser);
};

const update = (userData) => {
  const { name, login, password, id } = userData;
  const user = new User({ name, login, password, id });
  const updatedUser = usersRepo.update(user);
  return User.toResponse(updatedUser);
};
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
