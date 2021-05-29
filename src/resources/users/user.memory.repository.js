import dB from '../../common/inMemoryDb.js';

const getAll = async () => dB.getAllUsers();

const get = async (id) => dB.getUser(id);

const create = async (user) => dB.createUser(user);

const remove = async (id) => dB.removeUser(id);

const update = async (user) => dB.updateUser(user);

export const userRepo = { getAll, get, create, update, remove };
