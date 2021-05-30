import { userRepo } from './user.memory.repository';
import User from './user.model';

const getAll = async () => {
  const users = await userRepo.getAll();
  return users.map(User.toResponse);
};

const get = async (id) => {
  const user = await userRepo.get(id);
  if (user) return User.toResponse(user);
  return undefined;
};

const create = async (userData) => {
  const { name, login, password } = userData;
  const newUser = new User({ name, login, password });
  const createdUser = await userRepo.create(newUser);
  return User.toResponse(createdUser);
};

const update = async (userData) => {
  const { name, login, password, id } = userData;
  const user = new User({ name, login, password, id });
  const updatedUser = userRepo.update(user);
  return User.toResponse(updatedUser);
};

const remove = async (id) => userRepo.remove(id);

export const userService = { getAll, get, create, update, remove };
