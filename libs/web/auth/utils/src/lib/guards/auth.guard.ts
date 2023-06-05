import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import {
  AuthenticationService,
  isTokenValid,
} from '@finques-limit/web/auth/data-access';

export const authGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  const accessToken = authService.getAccessToken();
  if (!isTokenValid(accessToken)) {
    router.navigate(['/auth/sign-in'], { replaceUrl: true });
    return false;
  }

  return true;
};
