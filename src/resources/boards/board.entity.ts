import { v4 as uuid } from 'uuid';
import { Entity, Column as ColumnORM, PrimaryGeneratedColumn } from 'typeorm';
import Column from '../columns/column.model';

export interface IBoard {
  id?: string;
  title?: string;
  columns?: Column[];
}

@Entity()
class Board implements IBoard {
  @PrimaryGeneratedColumn('uuid')
  id = uuid();

  @ColumnORM('text')
  title = 'Board title';

  @ColumnORM({ type: 'uuid', array: true, nullable: true })
  columns!: Column[];
  /*
  constructor(boardData: IBoard) {
    const { id = uuid(), title = 'Board', columns = [] } = boardData;
    this.id = id;
    this.title = title;
    this.columns = columns.map((columnData) => new Column(columnData));
  }
  */
}

export default Board;
