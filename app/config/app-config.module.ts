import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { enviroment } from './../environments/environment';
import { AppConfig } from './../core/models/core/app-config.model';

const appConfig = <AppConfig> require(enviroment.appConfigFile);

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@NgModule({
  providers: [
    { provide: APP_CONFIG, useValue: appConfig }
  ],
})
export class AppConfigModule { }
