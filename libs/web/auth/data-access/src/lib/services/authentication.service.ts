import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants';
import { decodeJwt, isTokenValid } from '../functions';
import { AuthService } from '@finques-limit/web/shared/api';

type User = { name: string; sub: string; email: string };

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly authService = inject(AuthService);

  private readonly authUser = new BehaviorSubject<User | null>(null);
  readonly authUser$ = this.authUser.asObservable();

  constructor() {
    console.log('Initializing authentication service...');
    const accessToken = this.getAccessToken();
    if (isTokenValid(accessToken)) {
      const token = decodeJwt(accessToken) as User;
      this.authUser.next(token);
    }
  }

  signIn(email: string, password: string) {
    return this.authService.signIn({ email, password }).pipe(
      tap({
        next: ({ accessToken, refreshToken }) => {
          this.setAccessToken(accessToken);
          this.setRefreshToken(refreshToken);
        },
        error: (error) => {
          console.error(error);
        },
      }),
      tap(({ accessToken }) => {
        const decodedToken = decodeJwt(accessToken) as User;
        this.authUser.next(decodedToken);
      })
    );
  }

  signOut() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    this.authUser.next(null);
  }

  getAccessToken() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) ?? '';
    if (!accessToken) {
      console.warn('No access token found.');
    }
    return accessToken;
  }

  getRefreshToken() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY) ?? '';
    if (!refreshToken) {
      console.warn('No refresh token found.');
    }
    return refreshToken;
  }

  private setAccessToken(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  private setRefreshToken(refreshToken: string) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
}
