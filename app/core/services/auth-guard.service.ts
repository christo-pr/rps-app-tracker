import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: RouterExtensions,
    private authService: AuthService
  ) { }

  canActivate() {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/auth/login'], { clearHistory: true });
      return false;
    }
  }
}
