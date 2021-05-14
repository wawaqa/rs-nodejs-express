const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const newUser = await usersService.create(
    new User({ name, login, password })
  );
  res.status(201).json(User.toResponse(newUser));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.get(id);
  res.json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const { userId } = req.params;
  const { name, login, password } = req.body;
  const updatedUser = await usersService.update(
    new User({ id: userId, name, login, password })
  );
  res.json(User.toResponse(updatedUser));
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  await usersService.remove(userId)
  res.sendStatus(204);
});

module.exports = router;
