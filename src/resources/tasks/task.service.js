/**
 * @module TaskService
 */
const taskRepo = require('./task.memory.repository');
const Task = require('./task.model');

/**
 * Returns all the tasks from specified board
 * @async
 * @param {uuid} boardId unique identifier of the board which tasks should be retreived
 * @returns {Promise<Array<Task>>} Promise which resolves to array of tasks
 */
const getAll = async (boardId) => taskRepo.getAll(boardId);

/**
 * Returns task with specified id
 * @async
 * @param {uuid} id unique identifier for the task to look for
 * @returns {Promise<Task|undefined>} Promise which resolves to found task or undefined (if no such task found)
 */
const get = async (id) => taskRepo.get(id);

/**
 * Triggers creating task in DB and returns created task
 * @async
 * @param {Object} taskData data to create task
 * @param {uuid} taskData.id unique identifier for task
 * @param {string} taskData.title title for task
 * @param {number} taskData.order order of the task in column
 * @param {string} taskData.description description for task
 * @param {uuid} taskData.userId unique identifier of the user whom the task is assigned to
 * @param {uuid} taskData.boardId unique identifier of the board to which the task belongs to
 * @param {uuid} taskData.columnId unique identifier of the column to which the task belongs to
 * @returns {Promise<Task>} Promise which resolves to created task
 */
const create = async (taskData) => {
  const { id, title, order, description, userId, boardId, columnId } = taskData;
  const newTask = new Task({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  return taskRepo.create(newTask);
};

/**
 * Triggers updating task in DB and returns updated task
 * @async
 * @param {Object} taskData data to update task
 * @param {uuid} taskData.id unique identifier for task to updated
 * @param {string} taskData.title updated title for task
 * @param {number} taskData.order updated order of the task in column
 * @param {string} taskData.description updated description for task
 * @param {uuid} taskData.userId updated unique identifier of the user whom the task is assigned to
 * @param {uuid} taskData.boardId updated unique identifier of the board to which the task belongs to
 * @param {uuid} taskData.columnId updated unique identifier of the column to which the task belongs to
 * @returns {Promise<Task>} Promise which resolves to updated task
 */
const update = async (taskData) => {
  const { title, order, description, userId, columnId, boardId, id } = taskData;
  const updatedTask = new Task({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  return taskRepo.update(updatedTask);
};

/**
 * Removes task with specified id
 * @async
 * @param {uuid} id unique udentifier for the task to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const remove = async (id) => taskRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
