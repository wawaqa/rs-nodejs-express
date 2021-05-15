const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const { id, title, columns } = req.body;
  const newBoard = await boardsService.create(
    new Board({ id, title, columns })
  );
  res.status(201).json(newBoard);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.get(id);
  if (board) res.json(board);
  else res.send(404);
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const { title, columns } = req.body;
  const updatedBoard = await boardsService.update(
    new Board({ id: boardId, title, columns })
  );
  res.json(updatedBoard);
});

router.route('/:boardId').delete((req, res) => {
  const { boardId } = req.params;
  boardsService.remove(boardId);
  res.sendStatus(204);
});

module.exports = router;
