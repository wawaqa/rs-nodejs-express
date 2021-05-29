const uuid = require('uuid');
const Column = require('../columns/column.model');

class Board {
  constructor({ id = uuid.v4(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((columnData) => new Column(columnData));
  }
}

module.exports = Board;
