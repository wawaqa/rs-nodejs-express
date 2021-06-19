import { Entity, Column as ColumnORM, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

export interface IColumn {
  id?: string;
  title: string;
  order: number;
}

@Entity()
class Column implements IColumn {
  @PrimaryGeneratedColumn('uuid')
  id = uuid();

  @ColumnORM('text')
  title = 'column title';

  @ColumnORM({ type: 'int' })
  order = 0;

  @ColumnORM('uuid')
  boardId=uuid()
}

export default Column;
