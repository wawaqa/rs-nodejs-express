const User = require('../resources/users/user.model');

const dB = [];

let i = 0;

while (i < 5) {
  dB.push(
    new User({
      id: `${i}`,
      name: `Name${i}`,
      login: `login${i}`,
      password: `$pw${i}`,
    })
  );
  i += 1;
}

module.exports = dB;
