import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { CompanyListComponent } from '@finques-limit/web/company/feature/list';

export const companyRoutes: Route = {
  path: 'empreses',
  component: ShellComponent,
  children: [{ path: '', loadComponent: () => CompanyListComponent }],
};
