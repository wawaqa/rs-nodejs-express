/**
 * @module InMemoryDb
 */
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

// initial state
let boards = [
  new Board({
    id: '11111111-1111-1111-1111-111111111111',
    columns: [
      {
        id: '20000000-0000-0000-0000-000000000002',
        title: 'real olumn',
        order: 2,
      },
    ],
  }),
  new Board({ id: '11111111-2222-1111-1111-111111111111' }),
];
let users = [
  new User({ id: '00000000-0000-0000-0000-000000000001' }),
  new User({ id: '00000000-0000-0000-0000-000000000002' }),
  new User(),
];
let tasks = [
  new Task({
    id: '10000000-0000-0000-0000-000000000001',
    title: 'my 1st task',
    order: 1,
    description: 'go to bed',
    userId: '00000000-0000-0000-0000-000000000001',
    boardId: '11111111-1111-1111-1111-111111111111',
    columnId: '20000000-0000-0000-0000-000000000002',
  }),
];

// Users
/**
 * Returns all the users
 * @async
 * @returns {Promise<Array<User>>} Promise which resolves to array of users
 */
const getAllUsers = async () => users;

/**
 * Returns user with specified id
 * @async
 * @param {uuid} id unique identifier for user to look for
 * @returns {Promise<User|undefined>} Promise which resolves to found user or undefined (if no such user found)
 */
const getUser = async (id) => users.find((user) => user.id === id);

/**
 * Creates user
 * @async
 * @param {User} user user to create
 * @returns {Promise<User>} Promise which resolves to created user
 */
const createUser = async (user) => {
  users.push(user);
  return getUser(user.id);
};

/**
 * Removes user
 * @async
 * @param {uuid} id unique identifier of user to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const removeUser = async (id) => {
  users = users.filter((user) => user.id !== id);
  tasks = tasks.map((task) =>
    task.userId === id ? { ...task, userId: null } : task
  );
};

/**
 * Updates user with specified id
 * @async
 * @param {User} user user to update with new data
 * @returns {Promise<User>} Promise which resolves to updated user
 */
const updateUser = async (user) => {
  removeUser(user.id);
  createUser(user);
  return getUser(user.id);
};

// Boards

/**
 * Returns all the boards
 * @async
 * @returns {Promise<Array<Board>>} Promise which resolves to array of boards
 */
const getAllBoards = async () => boards;

/**
 * Returns board with specified id  
 * @async
 * @param {uuid} id unique identifier for board to look for
 * @returns {Promise<Board|undefined>} Promise which resolves to found board or undefined (if no such board found)
 */
const getBoard = async (id) => boards.find((board) => board.id === id);

/**
 * Creates board
 * @async
 * @param {Board} board board to create in db
 * @returns {Promise<Board>} Promise which resolves to created board
 */
const createBoard = async (board) => {
  boards.push(board);
  return getBoard(board.id);
};

/**
 * Removes board
 * @async
 * @param {uuid} id unique identifier of board to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const removeBoard = async (id) => {
  boards = boards.filter((board) => board.id !== id);
  tasks = tasks.filter((task) => task.boardId !== id);
};

/**
 * Updates board with specified id
 * @async
 * @param {Board} board board to update with new data
 * @returns {Promise<Board>} Promise which resolves to updated board
 */
const updateBoard = async (board) => {
  removeBoard(board.id);
  createBoard(board);
  return getBoard(board.id);
};

// Tasks
/**
 * Returns all the tasks for the specified board
 * @async
 * @param {uuid} boardId unique identifier of the board which tasks should be found
 * @returns {Promise<Array<Task>>} Promise which resolves to array of tasks
 */
const getAllTasks = async (boardId) =>
  tasks.filter((it) => it.boardId === boardId);

/**
 * Returns task with specified id
 * @async
 * @param {uuid} id unique identifier for task to look for
 * @returns {Promise<Task|undefined>} Promise which resolves to found task or undefined (if no such task found)
 */
const getTask = async (id) => tasks.find((task) => task.id === id);

/**
 * Creates task
 * @async
 * @param {Task} task task to create
 * @returns {Promise<Task>} Promise which resolves to created task
 */
const createTask = async (task) => {
  tasks.push(task);
  return getTask(task.id);
};

/**
 * Removes task
 * @async
 * @param {uuid} id unique identifier of task to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const removeTask = async (id) => {
  tasks = tasks.filter((user) => user.id !== id);
};

/**
 * Updates task with specified id
 * @async
 * @param {Task} task task to update with new data
 * @returns {Promise<Task>} Promise which resolves to updated task
 */
const updateTask = async (task) => {
  removeTask(task.id);
  createTask(task);
  return getTask(task.id);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  removeUser,
  updateUser,
  getAllBoards,
  getBoard,
  createBoard,
  removeBoard,
  updateBoard,
  getAllTasks,
  getTask,
  createTask,
  removeTask,
  updateTask,
};
