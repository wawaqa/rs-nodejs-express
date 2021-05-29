const uuid = require('uuid');

/** Class representing a Column */
class Column {
/**
   * Create a column
   * @param {Object} columnData
   * @param {uuid} [columnData.id=uuid.v4()] unique identifier for column
   * @param {string} [columnData.title=Column] title for column
   * @param {number} [columnData.order=0] order of the column in board
   */
  constructor({ id = uuid.v4(), title = 'Column', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
