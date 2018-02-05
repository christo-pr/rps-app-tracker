import { Component } from '@angular/core';
import { Page } from 'ui/page';
import { device } from 'platform';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './core/services';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  myText: string;

  constructor(
    private page: Page,
    private translateService: TranslateService,
    private logger: LoggerService
  ) {
    page.actionBarHidden = true;
    page.backgroundSpanUnderStatusBar = true;

    // Set the default translation to en-US
    translateService.setDefaultLang('en-US');
    // Set the device language.
    translateService.use(device.language);
  }

}
