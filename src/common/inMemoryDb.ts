import User from '../resources/users/user.entity';
import Board from '../resources/boards/board.entity';
import Task from '../resources/tasks/task.entity';
import UserTable from "./DbTables/UserTable";
import TaskTable from "./DbTables/TaskTable";
import BoardTable from "./DbTables/BoardTable";

// initial state
const boards = [
  new Board(),
  new Board(),
];
const users = [
  new User(),
  new User(),
  new User(),
];
const tasks = [
  new Task(),
];



const userTable = new UserTable(users);
const boardTable = new BoardTable(boards);
const taskTable = new TaskTable(tasks);

const dB = {
  getAllUsers: userTable.getAll,
  getUser: userTable.get,
  createUser: userTable.create,
  removeUser: userTable.remove,
  updateUser: userTable.update,
  getAllBoards: boardTable.getAll,
  getBoard: boardTable.get,
  createBoard: boardTable.create,
  removeBoard: boardTable.remove,
  updateBoard: boardTable.update,
  getAllTasks: taskTable.getAllByBoardId,
  getTask: taskTable.get,
  createTask: taskTable.create,
  removeTask: taskTable.remove,
  updateTask: taskTable.update,
  removeBoardTasks: taskTable.removeTasksByBoard,
  removeUserFromTasks: taskTable.removeUserFromTasks
};

export default dB;
