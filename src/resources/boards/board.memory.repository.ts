import dB from '../../common/inMemoryDb';
import IRepository from '../Interfaces/IRepository';
import Board from './board.model';

class BoardRepository implements IRepository<Board> {
  getAll = async () => dB.getAllBoards();

  get = async (id: string): Promise<Board | undefined> => dB.getBoard(id);

  create = async (board: Board): Promise<Board | undefined> =>
    dB.createBoard(board);

  remove = async (boardId: string): Promise<void> => {
    dB.removeBoardTasks(boardId);
    dB.removeBoard(boardId);
  };

  update = async (board: Board): Promise<Board | undefined> =>
    dB.updateBoard(board);
}

export const boardRepo = new BoardRepository();
