const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

// Users
let users = [new User(), new User(), new User()];

const getAllUsers = async () => users;
const getUser = async (id) => users.find((user) => user.id === id);
const createUser = async (user) => {
  users.push(user);
  return getUser(user.id);
};
const removeUser = async (id) => {
  users = users.filter((user) => user.id !== id);
};
const updateUser = async (user) => {
  removeUser(user.id);
  createUser(user);
  return getUser(user.id);
};

// Boards
let boards = [new Board(), new Board()];

const getAllBoards = async () => boards;
const getBoard = async (id) => boards.find((board) => board.id === id);
const createBoard = async (board) => {
  boards.push(board);
  return getBoard(board.id);
};

const removeBoard = async (id) => {
  boards = boards.filter((user) => user.id !== id);
};

const updateBoard = async (board) => {
  removeBoard(board.id);
  createBoard(board);
  return getUser(board.id);
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
};
