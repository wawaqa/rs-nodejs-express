import { Request, Response } from 'express';

type RecordType =
  | 'info'
  | 'error'
  | 'uncaughtException'
  | 'unhandledRejection';

export interface ILogData {
  level: RecordType;
  req?: Request;
  res?: Response;
  error?: Error;
}

export interface ILogRecord {
  level: RecordType;
  date: Date;
  url?: string;
  queryParams?: string;
  body?: string;
  statusCode?: number;
  error?: string;
}

export function convertToLogRecord({
  req,
  res,
  error,
  level,
}: ILogData): ILogRecord {
  let dataLog: ILogRecord = {
    level,
    date: new Date(),
  };

  if (req) {
    dataLog = {
      ...dataLog,
      url: req.originalUrl,
      queryParams: JSON.stringify(req.query),
      body: req.body,
    };
  }

  if (res) dataLog.statusCode = res.statusCode;

  if (error) dataLog.error = error.stack;

  return dataLog;
}
