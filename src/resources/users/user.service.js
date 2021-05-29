/**
 * @module UserService
 */
const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

/**
 * Returns all the users as user data-transfer-objects (without passwords)
 * @async
 * @returns {Promise<Array<UserDTO>>} Promise which resolves to array of user data-transfer-objects
 */
const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};
/**
 * Returns user with specified id as data-transfer-object (without password)
 * @async
 * @param {uuid} id unique identifier for user to look for
 * @returns {Promise<UserDTO|undefined>} Promise which resolves to found user or undefined (if no such user found)
 */
const get = async (id) => {
  const user = await usersRepo.get(id);
  if (user) return User.toResponse(user);
  return undefined;
};

/**
 * Triggers creating user in DB and returns created user as data-transfer-object
 * @async
 * @param {Object} userData data to create user
 * @param {string} userData.name name for user to create
 * @param {string} userData.login login for user to create
 * @param {string} userData.password password for user to create
 * @returns {Promise<UserDTO>} Promise which resolves to data-transfer-object for created user
 */
const create = async (userData) => {
  const { name, login, password } = userData;
  const newUser = new User({ name, login, password });
  const createdUser = await usersRepo.create(newUser);
  return User.toResponse(createdUser);
};

/**
 * Triggers updating user in DB and returns updated user as data-transfer-object
 * @async
 * @param {Object} userData new user data for user to update
 * @param {uuid} userData.id unique identifier for user to update
 * @param {string} userData.name name for user to update
 * @param {string} userData.login login for user to update
 * @param {string} userData.password password for user to update
 * @returns {Promise<UserDTO>} Promise which resolves to updated user as data-transfer-object
 */
const update = async (userData) => {
  const { name, login, password, id } = userData;
  const user = new User({ name, login, password, id });
  const updatedUser = usersRepo.update(user);
  return User.toResponse(updatedUser);
};

/**
 * Removes user with specified id
 * @async
 * @param {uuid} id unique udentifier for user to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const remove = async (id) => usersRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
