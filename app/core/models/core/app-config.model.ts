import { TypeProvider } from '@angular/core';
import { LoggingLevelEnum } from './../enum/logging-level.enum';

export type AppType = 'Ns' | 'Web';

export interface AppConfig {
  appType: AppType;
  apiEndpoint: string;
  loggingEnabled: boolean;
  loggingLevel: LoggingLevelEnum;
  storageServiceClass: TypeProvider;
}
