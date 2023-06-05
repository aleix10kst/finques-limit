import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@finques-limit/web/shared/ui/list';
import { of } from 'rxjs';
import { TableColumnData } from '@finques-limit/web/shared/ui/table';

@Component({
  selector: 'finques-limit-company-list',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  readonly companies$ = of([]);

  readonly displayedColumns: TableColumnData<any>[] = [
    { columnDef: 'name', header: 'Nom', cell: (item) => 'Hello' },
  ];
}
