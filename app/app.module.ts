import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { Http } from '@angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NSModuleFactoryLoader } from 'nativescript-angular';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppConfigModule } from './config/app-config.module';
import { BacklogModule } from './modules/backlog/backlog.module';
import { AuthModule } from './modules/auth/auth.module';

import { setAppEvents } from './globals/app-events';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { createTranslationLoader } from './utils';
import './utils/console-color';
import './rxjs-imports';

setAppEvents();

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        CoreModule,
        BacklogModule,
        AuthModule,
        AppConfigModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslationLoader),
            deps: [Http]
          }
        })
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
