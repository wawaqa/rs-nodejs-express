import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { finished } from 'stream';
import userRouter from './resources/users/user.router.js';
import boardRouter from './resources/boards/board.router.js';
import taskRouter from './resources/tasks/task.router.js';
import { ILogData, writeToLog } from './logger/writeToLog.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const app = express();
const swaggerDocument = YAML.load(path.join(dirName, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/', (req, res, next) => {
  next();
  finished(res, () => {
    const logData: ILogData = {
      level: 'info',
      date: new Date(),
      url: req.originalUrl,
      queryParams: JSON.stringify(req.query),
      body: req.body,
      statusCode: res.statusCode,
    };
    writeToLog(logData);
  });
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardId/tasks/', taskRouter);

// TODO commment or remove after dev
app.use('/error', () => {
  throw new Error('error path');
});

app.use((err: Error, req: Request, res: Response, _next?: NextFunction) => {
  const logData: ILogData = {
    level: 'error',
    date: new Date(),
    url: req.originalUrl,
    queryParams: JSON.stringify(req.query),
    body: req.body,
    statusCode: res.statusCode,
    error: err.stack,
  };
  writeToLog(logData);
  res.sendStatus(500);
});

process.on('uncaughtException', (err: Error) => {
  const logData: ILogData = {
    level: 'uncaughtException',
    date: new Date(),
    error: err.stack,
  };
  writeToLog(logData);
  process.exit(1);
});

process.on('unhandledRejection', (err: Error) => {
  const logData: ILogData = {
    level: 'unhandledRejection',
    date: new Date(),
    error: err.stack,
  };
  writeToLog(logData);
});

export default app;
