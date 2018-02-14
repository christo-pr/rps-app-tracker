import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routing';

@NgModule({
    imports: [
        SettingsRoutingModule
    ],
    exports: [],
    declarations: [SettingsComponent],
    providers: [],
})
export class SettingsModule { }
