export interface ILogData {
  type: 'info' | 'error' | 'uncaughtException' | 'unhandledRejection';
  url: string;
  queryParams: string;
  body: string;
  statusCode: number;
}

export function writeToLog(logData: ILogData): void {
  console.log(JSON.stringify(logData));
}
