import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { TableColumnData } from '@finques-limit/web/shared/ui/table';
import { ListComponent } from '@finques-limit/web/shared/ui/list';

@Component({
  selector: 'finques-limit-client-list',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  private readonly companiesSerice = null;

  readonly clients$ = of([]);

  readonly displayedColumns: TableColumnData<any>[] = [
    { columnDef: 'name', header: 'Nom', cell: (item) => '' },
  ];
}
