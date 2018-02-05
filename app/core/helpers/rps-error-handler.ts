import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { LoggerService } from '../services';

@Injectable()
export class RpsErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {}
  /**
   *
   * @description Since Error hanlder starts almost at the begging of the application
   * we still dont have the dependency injection working but we have the injector
   * which we use here to inject the logger service so we can log the error.
   * We throw the error at last so we nativescript can handle it in the UncaughtError event
   * cuz angular has it's own error handler AKA ErrorHandler.
   * @param {*} error
   * @memberof RpsErrorHandler
   */
  handleError(error: any): void {
    const logger = this.injector.get(LoggerService);

    const message = error.message ? error.message : error.toString();

    logger.error(message);

    throw error;
  }

}
