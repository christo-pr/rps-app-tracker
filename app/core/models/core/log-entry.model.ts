import { LoggingLevelEnum } from '../enum';

export interface LogEntry {
  message: string;
  level: LoggingLevelEnum;
}
