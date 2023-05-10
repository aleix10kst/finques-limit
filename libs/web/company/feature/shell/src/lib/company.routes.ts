import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';

export const companyRoutes: Route = {
  path: 'empreses',
  component: ShellComponent,
  children: [],
};
