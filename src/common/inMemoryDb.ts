import User from '../resources/users/user.entity';
import Board from '../resources/boards/board.model';
import Task from '../resources/tasks/task.model';
import UserTable from "./DbTables/UserTable";
import TaskTable from "./DbTables/TaskTable";
import BoardTable from "./DbTables/BoardTable";

// initial state
const boards = [
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
const users = [
  new User({ id: '00000000-0000-0000-0000-000000000001' }),
  new User({ id: '00000000-0000-0000-0000-000000000002' }),
  new User({}),
];
const tasks = [
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
