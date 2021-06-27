import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../common/config';

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const rawToken = req.get('Authorization');
  const tokenMatch = rawToken?.match(/(?<=Bearer )(.*)/g);
  if (!tokenMatch || tokenMatch.length !== 1 || !tokenMatch[0]) {
    res.sendStatus(401);
    return;
  }
  const secret = config.JWT_SECRET_KEY;
  const token = tokenMatch[0];
  jwt.verify(token, secret, (err) => {
    if (err) {
      res.sendStatus(401);
    } else next();
  });
}
