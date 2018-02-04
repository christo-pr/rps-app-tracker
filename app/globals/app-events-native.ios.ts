import * as app from 'application';

class MyDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  /**
   *
   * @description This is a ios native event.
   * @param {UIApplication} application
   * @param {NSDictionary<any, any>} launchOptions
   * @returns {boolean}
   * @memberof MyDelegate
   */
  applicationWillFinishLaunchingWithOptions(
    application: UIApplication,
    launchOptions: NSDictionary<any, any>): boolean {
      console.log('applicationWillFinishLaunchingWithOptions');
    return true;
  }
}


export const setNativeEvents = () => {
  app.ios.delegate = MyDelegate;
};
