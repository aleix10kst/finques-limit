import {
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '@finques-limit/web/auth/data-access';

export const jwtInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authenticationService = inject(AuthenticationService);
  const accessToken = authenticationService.getAccessToken();
  if (accessToken) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
    req = req.clone({ headers });
  }
  return next(req);
};
