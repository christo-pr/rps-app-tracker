import * as app from 'application';
import { setNativeEvents } from './app-events-native';

export const setAppEvents = () => {

  setNativeEvents();

  app.on(app.launchEvent, (args: app.ApplicationEventData) => {

  });
};
