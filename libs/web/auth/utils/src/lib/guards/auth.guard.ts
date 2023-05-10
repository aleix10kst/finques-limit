import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@finques-limit/web/auth/data-access';
import { of, switchMap, tap } from 'rxjs';

export const authGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  console.log(route, segments);
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authUser$.pipe(
    switchMap((user) => {
      console.log(user);
      /*      if (!user) {
        router.navigate(['/sign-in'], { replaceUrl: true });
        return of(false);
      } */
      return of(true);
    })
  );
};
