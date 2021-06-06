import { ILogData, convertToLogRecord } from './dataLog.js';
import { writeToLog } from './writeToLog.js';

export function logIt(logData: ILogData): void {
  const logRecord = convertToLogRecord(logData);
  writeToLog(logRecord);
}
