const router = require('express').Router();
const taskService = require('./task.service');
const Task = require('./task.model');

router.route('/:boardId/tasks/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAll(boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const { boardId } = req.params;
  const { id, title, order, description, userId, columnId} = req.body;
  const newTask = await taskService.create(
    new Task({ id, title, order, description, userId, boardId, columnId })
  );
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
  const { title, order, description, userId, columnId } = req.body;
  const updatedTask = await taskService.update(
    new Task({
      id: taskId,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    })
  );
  res.json(updatedTask);
});

router.route('/:boardId/tasks/:taskId').delete((req, res) => {
  const { taskId } = req.params;
  taskService.remove(taskId);
  res.sendStatus(204);
});

module.exports = router;
