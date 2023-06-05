import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ClientListComponent } from '@finques-limit/web/client/feature/list';
import { DetailComponent } from '@finques-limit/web/client/feature/detail';

export const clientRoutes: Route = {
  path: 'clients',
  component: ShellComponent,
  children: [
    { path: ':id', loadComponent: () => DetailComponent },
    { path: '', component: ClientListComponent },
  ],
};
