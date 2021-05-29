const dB = require('../../common/inMemoryDb');

/**
 * @typedef {require('./user.model').User} User
 */


/**
 * Returns all the users from DB
 * @async
 * @returns {Promise<Array<User>>} Promise which resolves to array of users
 */
const getAll = async () => dB.getAllUsers();

/**
 * Returns user with specified id from DB
 * @async
 * @param {uuid} id unique identifier for user to look for
 * @returns {Promise<User|undefined>} Promise which resolves to found user or undefined (if no such user found)
 */
const get = async (id) => dB.getUser(id);

/**
 * Creates user in DB
 * @async
 * @param {User} user user to create in db
 * @returns {Promise<User>} Promise which resolves to createdUser
 */
const create = async (user) => dB.createUser(user);

/**
 * Removes user from DB
 * @async
 * @param {uuid} id unique identifier of user to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const remove = async (id) => dB.removeUser(id);

/**
 * Updates user with specified id
 * @async
 * @param {User} user user to update with new data
 * @returns {Promise<User>}
 */
const update = async (user) => dB.updateUser(user);

module.exports = { getAll, get, create, update, remove };
