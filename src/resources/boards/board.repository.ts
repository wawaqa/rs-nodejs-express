import { getRepository } from 'typeorm';
import IRepository from '../Interfaces/IRepository';
import Board from './board.entity';
import Task from '../tasks/task.entity';
import Column from '../columns/column.entity';

class BoardRepository implements IRepository<Board> {
  getAll = async () => {
    const repo = getRepository(Board);
    return repo.find();
  };

  get = async (id: string): Promise<Board | undefined> => {
    const repo = getRepository(Board);
    const board = await repo.findOne({ id });
    const columnsRepo = getRepository(Column);
    const columns = await await columnsRepo.find({ boardId: id });
    if (board) board.columns=columns;
    return board
  };

  create = async (boardData: Board): Promise<Board | undefined> => {
    const repo = getRepository(Board);
    const newBoard = repo.create(boardData);
    await repo.insert(newBoard);
    const columnRepo = getRepository(Column);
    boardData.columns.forEach((column) =>
      columnRepo.insert({ ...column, boardId: boardData.id })
    );
    return { ...newBoard, columns: boardData.columns };
  };

  remove = async (id: string): Promise<void> => {
    const taskRepo = getRepository(Task);
    await taskRepo.delete({ boardId: id });
    const repo = getRepository(Board);
    await repo.delete(id);
  };

  update = async (board: Board): Promise<Board | undefined> => {
    const repo = getRepository(Board);
    await repo.update({ id: board.id }, { ...board });
    return repo.findOne(board.id);
  };
}

export const boardRepo = new BoardRepository();
