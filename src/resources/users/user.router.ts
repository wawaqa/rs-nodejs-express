import { Request, Response, Router } from 'express';
import { userService } from './user.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await userService.getAll();
  res.json(users);
});

router.route('/').post(async (req: Request, res: Response) => {
  const userData = req.body;
  const newUser = await userService.create(userData);
  res.status(201).json(newUser);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) res.sendStatus(404);
  else {
    const user = await userService.get(id);
    if (user) res.json(user);
    else res.sendStatus(404);
  }
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const userData = { ...req.body, id: userId };
  const updatedUser = await userService.update(userData);
  res.json(updatedUser);
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) res.sendStatus(404);
  else {
    await userService.remove(userId);
    res.sendStatus(204);
  }
});

export default router;
