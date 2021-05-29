import dB from '../../common/inMemoryDb.js';

const getAll = async () => dB.getAllBoards();

const get = async (id) => dB.getBoard(id);

const create = async (board) => dB.createBoard(board);

const remove = async (boardId) => dB.removeBoard(boardId);

const update = async (board) => dB.updateBoard(board);

export const boardRepo={ getAll, get, create, update, remove };

