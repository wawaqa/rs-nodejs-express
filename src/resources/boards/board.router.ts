import { Request, Response, Router } from 'express';
import { boardService } from './board.service.js';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/').post(async (req: Request, res: Response) => {
  const boardData = req.body;
  const newBoard = await boardService.create(boardData);
  res.status(201).json(newBoard);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) res.sendStatus(404);
  else {
    const board = await boardService.get(id);
    if (board) res.json(board);
    else res.sendStatus(404);
  }
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const boardData = { ...req.body, id: boardId };
  const updatedBoard = await boardService.update(boardData);
  res.json(updatedBoard);
});

router.route('/:boardId').delete(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  if (!boardId) res.sendStatus(404);
  else {
    await boardService.remove(boardId);
    res.sendStatus(204);
  }
});

export default router;
