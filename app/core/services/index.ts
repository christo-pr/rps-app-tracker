import { AuthService,
         LoggerService,
         ServerErrorHandlerService,
         AuthTokenService,
         StorageNsService,
         StorageWebService,
         NavigationService,
         AuthGuard
} from './';

export * from './auth.service';
export * from './auth-guard.service';
export * from './auth-token.service';
export * from './logger.service';

export * from './ns/storage-ns.service';
export * from './web/storage-web.service';
export * from './storage.service';

export * from './navigation.service';

export * from './server-error-handler.service';

export const SERVICES = [
  AuthGuard,
  AuthService,
  AuthTokenService,
  LoggerService,
  ServerErrorHandlerService,
  StorageNsService,
  StorageWebService,
  NavigationService
];

