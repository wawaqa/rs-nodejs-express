const router = require('express').Router();
const taskService = require('./task.service');

router.route('/:boardId/tasks/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAll(boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const { boardId } = req.params;
  const taskData = { ...req.body, boardId };
  const newTask = await taskService.create(taskData);
  res.status(201).json(newTask);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await taskService.get(id);
  if (task) res.json(task);
  else res.send(404);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const { taskId, boardId } = req.params;
  const taskData = { ...req.body, id: taskId, boardId };
  const updatedTask = await taskService.update(taskData);
  res.json(updatedTask);
});

router.route('/:boardId/tasks/:taskId').delete((req, res) => {
  const { taskId } = req.params;
  taskService.remove(taskId);
  res.sendStatus(204);
});

module.exports = router;
