import { Route } from '@angular/router';
import { authGuard } from '@finques-limit/web/auth/utils';
import { HomeComponent } from '@finques-limit/web/home/feature';
import { LayoutComponent } from '@finques-limit/web/shell/ui/layout';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', loadComponent: () => HomeComponent }],
    canActivate: [authGuard],
  },
];
