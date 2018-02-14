import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { NavigationOptions } from 'nativescript-angular/router/ns-location-strategy';

@Injectable()
export class NavigationService {

    constructor(private router: RouterExtensions) { }

    public navigate(commands: any[], extras?: NavigationExtras & NavigationOptions): Promise<boolean> {
        return this.router.navigate(commands, extras);
    }

    public back() {
        this.router.back();
    }

    public backToPreviousPage() {
        this.router.backToPreviousPage();
    }
}
