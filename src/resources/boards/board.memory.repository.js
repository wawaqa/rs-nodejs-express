const dB = require('../../common/inMemoryDb');

const getAll = async () => dB.getAllBoards();
const get = async (id) => dB.getBoard(id);
const create = async (board) => dB.createBoard(board);

const remove = async (board) => dB.removeBoard(board);

const update = async (board) => dB.updateBoard(board);

module.exports = { getAll, get, create, update, remove };
