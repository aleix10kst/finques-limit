import { Route } from '@angular/router';
import { administratorRoutes } from '@finques-limit/web/administrator/feature/shell';
import { authGuard } from '@finques-limit/web/auth/utils';
import { clientRoutes } from '@finques-limit/web/client/feature/shell';
import { companyRoutes } from '@finques-limit/web/company/feature/shell';
import { employeeRoutes } from '@finques-limit/web/employee/feature/shell';
import { homeRoutes } from '@finques-limit/web/home/feature';
import { LayoutComponent } from '@finques-limit/web/shell/ui/layout';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      homeRoutes,
      employeeRoutes,
      companyRoutes,
      clientRoutes,
      administratorRoutes,
    ],
    canActivate: [authGuard],
  },
];
