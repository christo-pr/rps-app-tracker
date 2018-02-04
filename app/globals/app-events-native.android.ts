import * as app from 'application';

export const setNativeEvents = () => {
  app.android.on(app.AndroidApplication.activityCreatedEvent, (args: app.AndroidActivityBundleEventData) => {

  });
};
