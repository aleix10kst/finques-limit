import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { DetailComponent } from '@finques-limit/web/administrator/feature/detail';
import { ListComponent } from '@finques-limit/web/administrator/feature/list';

export const administratorRoutes: Route = {
  path: 'administradors',
  component: ShellComponent,
  children: [
    { path: ':id', loadComponent: () => DetailComponent },
    { path: '', component: ListComponent },
  ],
};
