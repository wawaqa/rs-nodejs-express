const uuid = require('uuid');

/** Class representing a User */
class User {
  /**
   * Create a user
   * @param {Object} userData
   * @param {uuid} [userData.id=uuid.v4()] unique identifier for user
   * @param {string} [userData.name=USER] user's name
   * @param {string} [userData.login=user] user's login
   * @param {string} [userData.password=P@55w0rd] user's password
   */
  constructor({
    id = uuid.v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * User data-transfer-object - user data without password
   * @typedef {Object} UserDTO
   * @property {uuid} id - unique identifier for user
   * @property {string} name - user's name
   * @property {string} login - user's login
   */

  /**
   * Returns user data without password for transfer
   * @static
   * @param {User} user user to transfer
   * @returns {UserDTO} user transfer object
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
