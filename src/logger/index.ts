import { ILogData, convertToLogRecord } from './dataLog.js';
import { writeToLog } from './writeToLog.js';

export function logIt(logData: ILogData, exitOnFinishCode?: number): void {
  const logRecord = convertToLogRecord(logData);
  writeToLog(logRecord, exitOnFinishCode);
}
