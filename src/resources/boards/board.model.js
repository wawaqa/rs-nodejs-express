const uuid = require('uuid');
const Column = require('../columns/column.model');

/** Class representing a Board */
class Board {
  /**
   * Create a board
   * @param {Object} boardData
   * @param {uuid} [boardData.id=uuid.v4()] unique identifier for board
   * @param {string} [boardData.title=Board] title for board
   * @param {Array<Column>} [boardData.columns=[]] columns of the board
   */
  constructor({ id = uuid.v4(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((columnData) => new Column(columnData));
  }
}

module.exports = Board;
