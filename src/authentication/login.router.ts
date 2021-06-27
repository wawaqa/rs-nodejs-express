import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import { userService } from '../resources/users/user.service';
import config from '../common/config';

const router = Router();

router.route('/').post(async (req: Request, res: Response) => {
  const { login, password } = req.body;
  const authenticatedUser = await userService.authenticate({ login, password });
  if (authenticatedUser) {
    const token = jwt.sign(
      { login, userId: authenticatedUser.id },
      config.JWT_SECRET_KEY,
      { expiresIn: 3600 }
    );
    res.send({ token });
  } else {
    res.sendStatus(403);
  }
});

export default router;
