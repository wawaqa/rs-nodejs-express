import winston from 'winston';
import { ILogRecord} from './dataLog';

const errorRecordTypes = ['error', 'uncaughtException'];

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ level: 'error', filename: './logs/error.log' }),
    new winston.transports.File({ level: 'info', filename: './logs/info.log' }),
  ],
});

export function writeToLog(logRecord: ILogRecord): void {
  if (errorRecordTypes.includes(logRecord.recordType)) logger.error(logRecord);
  else logger.info(logRecord);
}
