import { v4 as uuid } from 'uuid';

export interface IColumn {
  id?: string;
  title: string;
  order: number;
}

class Column implements IColumn {
  id: string;

  title: string;

  order: number;

  constructor({ id = uuid(), title = 'Column', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export default Column;
