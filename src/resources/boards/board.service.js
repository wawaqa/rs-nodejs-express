/**
 * @module BoardService
 */
const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');
/**
 * Returns all the boards
 * @async
 * @returns {Promise<Array<Board>>} Promise which resolves to array of boards
 */
const getAll = async () => boardRepo.getAll();

/**
 * Returns board with specified id
 * @async
 * @param {uuid} id unique identifier for the board to look for
 * @returns {Promise<Board|undefined>} Promise which resolves to found board or undefined (if no such board found)
 */
const get = async (id) => boardRepo.get(id);

/**
 * Triggers creating board in DB and returns created board
 * @async
 * @param {Object} boardData data to create board
 * @param {uuid} boardData.id unique identifier for board
 * @param {string} boardData.title title for board
 * @param {Array<Column>} boardData.columns columns of the board
 * @returns {Promise<Board>} Promise which resolves to created board
 */
const create = async (boardData) => {
  const { id, title, columns } = boardData;
  const board = new Board({ id, title, columns });
  return boardRepo.create(board);
};

/**
 * Triggers updating board in DB and returns updated board
 * @async
 * @param {Object} boardData data to update board
 * @param {uuid} boardData.id unique identifier for board to update
 * @param {string} boardData.title updated title for board
 * @param {Array<Column>} boardData.columns updated columns of the board
 * @returns {Promise<Board>} Promise which resolves to updated board
 */
const update = async (boardData) => {
  const { id, title, columns } = boardData;
  const board = new Board({ id, title, columns });
  return boardRepo.update(board);
};

/**
 * Removes board with specified id
 * @async
 * @param {uuid} id unique udentifier for the board to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const remove = async (id) => boardRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
