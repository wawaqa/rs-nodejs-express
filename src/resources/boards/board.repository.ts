import { getRepository } from 'typeorm';
import IRepository from '../Interfaces/IRepository';
import Board from './board.entity';
import Task from '../tasks/task.entity';

class BoardRepository implements IRepository<Board> {
  getAll = async () => {
    const repo = getRepository(Board);
    return repo.find();
  };

  get = async (id: string): Promise<Board | undefined> => {
    const repo = getRepository(Board);
    return repo.findOne({ id });
  };

  create = async (boardData: Board): Promise<Board | undefined> => {
    const repo = getRepository(Board);
    const newBoard = repo.create(boardData);
    await repo.insert(newBoard);
    return newBoard;
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
