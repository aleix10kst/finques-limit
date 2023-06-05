import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@finques-limit/web/shared/ui/list';
import { TableColumnData } from '@finques-limit/web/shared/ui/table';
import { Employee, EmployeesService } from '@finques-limit/web/shared/api';

@Component({
  selector: 'finques-limit-employee-list',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  private readonly employeesService = inject(EmployeesService);
  readonly employees$ = this.employeesService.findAll();

  readonly displayedColumns: TableColumnData<Employee>[] = [
    { columnDef: 'name', header: 'Nom', cell: (item) => item.name },
    {
      columnDef: 'firstName',
      header: 'Cognom',
      cell: (item) => item.firstName,
    },
  ];
}
