import { Request, Response, Router } from 'express';
import { taskService } from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAll(boardId);
  res.json(tasks);
});

router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const taskData = { ...req.body, boardId };
  const newTask = await taskService.create(taskData);
  res.status(201).json(newTask);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) res.sendStatus(404);
  else {
    const task = await taskService.get(id);
    if (task) res.json(task);
    else res.sendStatus(404);
  }
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  const { taskId, boardId } = req.params;
  const taskData = { ...req.body, id: taskId, boardId };
  const updatedTask = await taskService.update(taskData);
  res.json(updatedTask);
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  const { taskId } = req.params;
  if (!taskId) res.sendStatus(404);
  else {
    await taskService.remove(taskId);
    res.sendStatus(204);
  }
});

export default router;
