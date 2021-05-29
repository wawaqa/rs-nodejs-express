import {Router} from 'express';
import { boardService } from './board.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const boardData = req.body;
  const newBoard = await boardService.create(boardData);
  res.status(201).json(newBoard);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.get(id);
  if (board) res.json(board);
  else res.sendStatus(404);
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const boardData = { ...req.body, id: boardId };
  const updatedBoard = await boardService.update(boardData);
  res.json(updatedBoard);
});

router.route('/:boardId').delete((req, res) => {
  const { boardId } = req.params;
  boardService.remove(boardId);
  res.sendStatus(204);
});

export default router;
