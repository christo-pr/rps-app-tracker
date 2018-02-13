import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { enviroment } from './../environments/environment';
import { AppConfig } from './../core/models/core/app-config.model';

import { StorageService } from '../core/services/storage.service';
import { StorageWebService } from '../core/services/web/storage-web.service';
import { StorageNsService } from '../core/services/ns/storage-ns.service';

const appConfig = <AppConfig> require(enviroment.appConfigFile);

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// Chose the storage class to use depending on the app type
switch (appConfig.appType) {
  case 'Web':
    appConfig.storageServiceClass = StorageWebService;
  break;

  case 'Ns':
    appConfig.storageServiceClass = StorageNsService;
    break;
};

@NgModule({
  providers: [
    { provide: APP_CONFIG, useValue: appConfig },
    { provide: StorageService, useClass: appConfig.storageServiceClass }
  ],
})
export class AppConfigModule { }
