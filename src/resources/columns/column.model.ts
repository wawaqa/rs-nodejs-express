import { Entity, Column as ColumnORM, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

export interface IColumn {
  id?: string;
  title: string;
  order: number;
}

@Entity()
class Column implements IColumn {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @ColumnORM({ type: 'string' })
  title: string;

  @ColumnORM({ type: "int" })
  order: number;

  constructor({ id = uuid(), title = 'Column', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export default Column;
