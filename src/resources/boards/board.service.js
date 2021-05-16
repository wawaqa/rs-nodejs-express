const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardRepo.getAll();
const get = (id) => boardRepo.get(id);
const create = (boardData) => {
  const { id, title, columns } = boardData;
  const board = new Board({ id, title, columns });
  return boardRepo.create(board);
};
const update = (boardData) => {
  const { id, title, columns } = boardData;
  const board = new Board({ id, title, columns });
  return boardRepo.update(board);
};
const remove = (id) => boardRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
