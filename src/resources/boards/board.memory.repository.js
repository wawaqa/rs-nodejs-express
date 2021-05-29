/**
 * @module BoardRepository
 */

const dB = require('../../common/inMemoryDb');

/**
 * Returns all the boards
 * @async
 * @returns {Promise<Array<Board>>} Promise which resolves to array of boards
 */
const getAll = async () => dB.getAllBoards();

/**
 * Returns board with specified id from DB
 * @async
 * @param {uuid} id unique identifier for board to look for
 * @returns {Promise<Board|undefined>} Promise which resolves to found board or undefined (if no such board found)
 */
const get = async (id) => dB.getBoard(id);

/**
 * Creates board in DB
 * @async
 * @param {Board} board board to create in db
 * @returns {Promise<Board>} Promise which resolves to created board
 */
const create = async (board) => dB.createBoard(board);

/**
 * Removes board from DB
 * @async
 * @param {uuid} boardId unique identifier of board to remove
 * @returns {Promise<undefined>} Promise which resolves to undefined
 */
const remove = async (boardId) => dB.removeBoard(boardId);

/**
 * Updates board with specified id
 * @async
 * @param {Board} board board to update with new data
 * @returns {Promise<Board>} Promise which resolves to updated board
 */
const update = async (board) => dB.updateBoard(board);

module.exports = { getAll, get, create, update, remove };
