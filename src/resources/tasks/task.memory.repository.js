/**
 * @module TaskRepository
 */
const dB = require('../../common/inMemoryDb');


/**
 * Returns all the tasks for the specified board from DB
 * @async
 * @param {uuid} boardId unique identifier of the board which tasks should be found
 * @returns {Promise<Array<Task>>} Promise which resolves to array of tasks
 */

const getAll = async (boardId) => dB.getAllTasks(boardId);

/**
 * Returns task with specified id from DB
 * @async
 * @param {uuid} id unique identifier for task to look for
 * @returns {Promise<Task|undefined>} Promise which resolves to found task or undefined (if no such task found)
 */
const get = async (id) => dB.getTask(id);

/**
 * Creates task in DB
 * @async
 * @param {Task} task task to create in db
 * @returns {Promise<Task>} Promise which resolves to created task
 */
const create = async (task) => dB.createTask(task);

/**
 * Removes task from DB
 * @async
 * @param {uuid} id unique identifier of task to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const remove = async (task) => dB.removeTask(task);

/**
 * Updates task with specified id
 * @async
 * @param {Task} task task to update with new data
 * @returns {Promise<Task>} Promise which resolves to updated task
 */
const update = async (task) => dB.updateTask(task);

module.exports = { getAll, get, create, update, remove };
