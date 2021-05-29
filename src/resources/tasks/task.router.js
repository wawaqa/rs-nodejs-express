const router = require('express').Router({mergeParams:true});
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAll(boardId);
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const taskData = { ...req.body, boardId };
  const newTask = await taskService.create(taskData);
  res.status(201).json(newTask);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await taskService.get(id);
  if (task) res.json(task);
  else res.send(404);
});

router.route('/:taskId').put(async (req, res) => {
  const { taskId, boardId } = req.params;
  const taskData = { ...req.body, id: taskId, boardId };
  const updatedTask = await taskService.update(taskData);
  res.json(updatedTask);
});

router.route('/:taskId').delete((req, res) => {
  const { taskId } = req.params;
  taskService.remove(taskId);
  res.sendStatus(204);
});

module.exports = router;
