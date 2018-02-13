import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerErrorHandlerService {

  constructor() { }


  public handleError(error: any) {
    return Observable.throw(error.json() || 'Server Error' );
  }
}
