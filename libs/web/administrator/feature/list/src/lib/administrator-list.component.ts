import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@finques-limit/web/shared/ui/list';
import { of } from 'rxjs';
import { TableColumnData } from '@finques-limit/web/shared/ui/table';

@Component({
  selector: 'finques-limit-administrator-list',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './administrator-list.component.html',
  styleUrls: ['./administrator-list.component.scss'],
})
export class AdministratorListComponent {
  private readonly administratorsService = null;

  readonly administrators$ = of([]);

  readonly displayedColumns: TableColumnData<any>[] = [
    { columnDef: 'name', header: 'Nom', cell: (item) => '' },
    { columnDef: 'firstName', header: 'Cognom', cell: (item) => '' },
  ];
}
