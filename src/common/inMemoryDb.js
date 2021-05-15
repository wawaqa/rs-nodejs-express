const User = require('../resources/users/user.model');

let users = [];

let i = 0;

while (i < 5) {
  users.push(
    new User({
      id: `${i}`,
      name: `Name${i}`,
      login: `login${i}`,
      password: `$pw${i}`,
    })
  );
  i += 1;
}

const getAllUsers = async () => users;
const getUser = async (id) => users.find((user) => user.id === id);
const createUser = async (user) => {
  users.push(user);
  return getUser(user.id);
};
const removeUser = async (id) => {
  users = users.filter((user) => user.id !== id);
};
const updateUser = async (user) => {
  removeUser(user.id);
  createUser(user);
  return getUser(user.id);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  removeUser,
  updateUser
};
