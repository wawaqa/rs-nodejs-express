import {v4 as uuid} from 'uuid';
import Column from '../columns/column.model.js';

class Board {
  constructor({ id = uuid(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((columnData) => new Column(columnData));
  }
}

export default Board;
