import { v4 as uuid } from 'uuid';
import { Entity, Column as ColumnORM, PrimaryColumn } from 'typeorm';
import Column from '../columns/column.model';

export interface IBoard {
  id?: string;
  title?: string;
  columns?: Column[];
}

@Entity()
class Board implements IBoard {
  @PrimaryColumn('uuid')
  id: string;

  @ColumnORM('text')
  title: string;

  @ColumnORM({ type: 'uuid', array: true })
  columns: Column[];

  constructor(boardData: IBoard) {
    const { id = uuid(), title = 'Board', columns = [] } = boardData;
    this.id = id;
    this.title = title;
    this.columns = columns.map((columnData) => new Column(columnData));
  }
}

export default Board;
