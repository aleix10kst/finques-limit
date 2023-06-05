import { Route } from '@angular/router';
import { SignInComponent } from '@finques-limit/web/auth/feature/sign-in';
import { shellRoutes } from '@finques-limit/web/shell/feature';

export const appRoutes: Route[] = [
  { path: 'auth/sign-in', component: SignInComponent },
  ...shellRoutes,
];
