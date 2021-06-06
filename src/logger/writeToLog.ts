import { ILogRecord } from './dataLog';

export function writeToLog(logRecord: ILogRecord): void {
  console.log(logRecord);
}
