import * as app from 'application';
import { setNativeEvents } from './app-events-native';
import { setStatusBarColor } from '../utils';

export const setAppEvents = () => {

  setNativeEvents();

  app.on(app.launchEvent, (args: app.ApplicationEventData) => {
    /** Insert your launch events here. */
  });


  app.on(app.resumeEvent, (args: app.ApplicationEventData) => {
    /** Insert your resume events here. */

    /**
     * We call it here because on android, the activity creatror
     * happens be the resume event, but after the launch event, so on
     * launch we wouldn't have the createActivity method.
     */
    setStatusBarColor();
  });
};
