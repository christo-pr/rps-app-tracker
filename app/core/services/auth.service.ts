import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../config/app-config.module';
import { AppConfig } from './../models/core/app-config.model';
import { Store } from './../state/app-store';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServerErrorHandlerService } from './server-error-handler.service';

import { PtAuthToken } from './../models/domain';
import { PtUser } from './../models/domain';
import { PtLoginModel } from './../models/domain';

@Injectable()
export class AuthService {

  private get loginUrl() { return `${this.config.apiEndpoint}/auth`; }

  public get currentUser(): PtUser {
    return this.store.value.currentUser;
  }

  public set currentUser(ptUser: PtUser) {
    this.store.set<PtUser>('currentUser', ptUser);
  }

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private store: Store,
    private http: Http,
    private errorHandlerService: ServerErrorHandlerService
  ) { }

  public isLoggedIn(): boolean {
    return !!this.currentUser;
  }


  public login(loginModel: PtLoginModel): Observable<PtUser> {
    this.loginInternal(loginModel)
        .subscribe();
    return this.store.select<PtUser>('currentUser');
  }

  public logout() {
    this.currentUser = undefined;
  }

  private loginInternal(loginModel: PtLoginModel) {
    return this.http.post(
      this.loginUrl,
      {
        loginModel: loginModel,
        grant_type: 'password'
      }
    )
      .map( res => res.json())
      .do( (data: {authToken: PtAuthToken, user: PtUser} ) => {
        this.currentUser = data.user;
      })
      .catch(this.errorHandlerService.handleError);
  }
}
