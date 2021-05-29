const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = async () => boardRepo.getAll();

const get = async (id) => boardRepo.get(id);

const create = async (boardData) => {
  const { id, title, columns } = boardData;
  const board = new Board({ id, title, columns });
  return boardRepo.create(board);
};


const update = async (boardData) => {
  const { id, title, columns } = boardData;
  const board = new Board({ id, title, columns });
  return boardRepo.update(board);
};

const remove = async (id) => boardRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
