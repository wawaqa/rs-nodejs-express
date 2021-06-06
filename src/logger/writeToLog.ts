export interface ILogData {
  level: 'info' | 'error' | 'uncaughtException' | 'unhandledRejection';
  date: Date;
  url?: string;
  queryParams?: string;
  body?: string;
  statusCode?: number;
  error?: string;
}

export function writeToLog(logData: ILogData): void {
  console.log(logData);
}
