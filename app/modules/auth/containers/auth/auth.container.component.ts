import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';

@Component({
    moduleId: module.id,
    selector: 'pt-auth-container',
    templateUrl: 'auth.container.component.html',
    styleUrls: ['auth.container.component.css']
})

export class AuthContainerComponent implements OnInit {

    constructor(
        private page: Page
    ) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
    }

    ngOnInit() { }
}
