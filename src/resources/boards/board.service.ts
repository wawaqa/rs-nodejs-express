import IService from '../Interfaces/IService';
import { boardRepo } from './board.memory.repository';
import Board from './board.model';

class BoardService implements IService<Board> {
  getAll = async (): Promise<Board[]> => boardRepo.getAll();

  get = async (id: string): Promise<Board | undefined> => boardRepo.get(id);

  create = async (boardData: Board): Promise<Board | undefined> => {
    const { id, title, columns } = boardData;
    const board = new Board({ id, title, columns });
    return boardRepo.create(board);
  };

  update = async (boardData: Board): Promise<Board | undefined> => {
    const { id, title, columns } = boardData;
    const board = new Board({ id, title, columns });
    return boardRepo.update(board);
  };

  remove = async (id: string): Promise<void> => boardRepo.remove(id);
}

export const boardService = new BoardService();
