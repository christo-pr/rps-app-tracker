import { Component } from '@angular/core';
import { Page } from 'ui/page';
import { device } from 'platform';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './core/services';
import { Store } from './core/state/app-store';
import { PtItem } from './core/models/domain';
import { BacklogService } from './modules/backlog/services/backlog.service';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  public items$ = this.store.select<PtItem[]>('backlogItems');

  constructor(
    private page: Page,
    private store: Store,
    private translateService: TranslateService,
    private logger: LoggerService,
    private backlogService: BacklogService
  ) {
    page.actionBarHidden = true;
    page.backgroundSpanUnderStatusBar = true;

    // Set the default translation to en-US
    translateService.setDefaultLang('en-US');
    // Set the device language.
    translateService.use(device.language);

    this.backlogService.fetchItems();
  }

}
