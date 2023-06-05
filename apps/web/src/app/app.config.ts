import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { BASE_PATH } from '@finques-limit/web/shared/api';
import { environment } from '../environments/environment';
import { jwtInterceptor } from '@finques-limit/web/auth/utils';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
  ],
};
