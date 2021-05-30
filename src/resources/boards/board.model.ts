import { v4 as uuid } from 'uuid';
import Column from '../columns/column.model';

export interface IBoard {
  id?: string;
  title?: string;
  columns?: Column[];
}

class Board implements IBoard {
  id: string;

  title: string;

  columns: Column[];

  constructor(boardData: IBoard) {
    const { id = uuid(), title = 'Board', columns = [] } = boardData;
    this.id = id;
    this.title = title;
    this.columns = columns.map((columnData) => new Column(columnData));
  }
}

export default Board;
