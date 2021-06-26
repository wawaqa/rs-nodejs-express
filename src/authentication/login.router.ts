import { Request, Response, Router } from 'express';
import { userService } from '../resources/users/user.service';

const router = Router();

router.route('/').post(async (req: Request, res: Response) => {
  const { login, password } = req.body;
  const isAuthenticated = await userService.authenticate({ login, password });
  if (isAuthenticated) {
    // TODO - send token
    res.send(isAuthenticated);
  } else {
    res.sendStatus(403);
  }
});

export default router;
