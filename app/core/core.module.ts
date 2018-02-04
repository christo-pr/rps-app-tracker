import { NgModule, Optional, SkipSelf } from '@angular/core';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {

  /**
   * Creates an instance of CoreModule and prevent any other instance
   * @param {CoreModule} parentModule
   * @memberof CoreModule
   */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('Core Modules has already been loaded. Import CoreModule into the AppModule only');
    }
  }

}
