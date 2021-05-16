const router = require('express').Router();
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users);
});

router.route('/').post(async (req, res) => {
  const userData = req.body;
  const newUser = await usersService.create(userData);
  res.status(201).json(newUser);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.get(id);
  if (user) res.json(user);
  else res.send(404);
});

router.route('/:userId').put(async (req, res) => {
  const { userId } = req.params;
  const userData = { ...req.body, id: userId };
  const updatedUser = await usersService.update(userData);
  res.json(updatedUser);
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  await usersService.remove(userId);
  res.sendStatus(204);
});

module.exports = router;
