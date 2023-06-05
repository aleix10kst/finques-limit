import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { DetailComponent } from '@finques-limit/web/employee/feature/detail';
import { EmployeeListComponent } from '@finques-limit/web/employee/feature/list';

export const employeeRoutes: Route = {
  path: 'treballadors',
  component: ShellComponent,
  children: [
    {
      path: 'crea',
      loadChildren: () => DetailComponent,
      data: { type: 'create' },
    },
    { path: ':id', loadComponent: () => DetailComponent },
    { path: '', component: EmployeeListComponent },
  ],
};
