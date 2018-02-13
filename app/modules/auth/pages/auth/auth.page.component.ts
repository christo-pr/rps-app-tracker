import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

import { PtUser } from '../../../../core/models/domain';
import { PtLoginModel } from '../../../../core/models/domain';

@Component({
  moduleId: module.id,
  selector: 'pt-auth-page',
  templateUrl: 'auth.page.component.html'
})
export class AuthPageComponent {

  public loggedIn = false;
  public loggedInName = '';

  constructor(
    private authService: AuthService
  ) { }

  public onLogin(loginModel: PtLoginModel) {
    this.authService.login(loginModel)
      .subscribe((user: PtUser) => {
        this.loggedIn = true;
        this.loggedInName = user ? user.fullName : '';

        // navigate to backlog;
      });
  }

  public logout() {
    this.authService.logout();
    this.loggedIn = false;
    this.loggedInName = '';
  }

}
