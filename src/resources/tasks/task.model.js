const uuid = require('uuid');

/** Class representing a Task */
class Task {
  /**
   * Create a task
   * @param {Object} taskData
   * @param {uuid} [taskData.id=uuid.v4()] unique identifier for task
   * @param {string} taskData.title title for task
   * @param {number} taskData.order order of the task in column
   * @param {string} taskData.description description for task
   * @param {uuid} taskData.userId unique identifier of the user whom the task is assigned to
   * @param {uuid} taskData.boardId unique identifier of the board to which the task belongs to
   * @param {uuid} taskData.columnId unique identifier of the column to which the task belongs to
   */
  constructor({
    id = uuid.v4(),
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  }) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
