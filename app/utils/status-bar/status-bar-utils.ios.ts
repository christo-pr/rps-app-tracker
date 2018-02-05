import * as utils from 'utils/utils';  // Nativescript utils.

declare var UIApplication: any;

/**
 * When run ios, this function will change the status bar content
 * to be a ligth color.
 * @export
 */
export function setStatusBarColor() {
  utils.ios.getter(UIApplication, UIApplication.sharedApplication)
    .statusBarStyle = UIStatusBarStyle.LightContent;
}
