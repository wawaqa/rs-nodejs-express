import Task from '../../resources/tasks/task.model.js';
import Table from './Table.js';

class TaskTable extends Table<Task> {
  getAllByBoardId = async (boardId?: string): Promise<Task[]> =>
    this.records.filter((it) => it.boardId === boardId);

  removeTasksByBoard = async (id: string): Promise<void> => {
    this.records = this.records.filter((task) => task.boardId !== id);
  };

  removeUserFromTasks = async (id: string): Promise<void> => {
    this.records = this.records.map((task) =>
      task.userId === id ? { ...task, userId: null } : task
    );
  };
}

export default TaskTable;
