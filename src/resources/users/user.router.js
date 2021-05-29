import { Router } from 'express';
import { userService } from './user.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
});

router.route('/').post(async (req, res) => {
  const userData = req.body;
  const newUser = await userService.create(userData);
  res.status(201).json(newUser);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await userService.get(id);
  if (user) res.json(user);
  else res.sendStatus(404);
});

router.route('/:userId').put(async (req, res) => {
  const { userId } = req.params;
  const userData = { ...req.body, id: userId };
  const updatedUser = await userService.update(userData);
  res.json(updatedUser);
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  await userService.remove(userId);
  res.sendStatus(204);
});

export default router;
