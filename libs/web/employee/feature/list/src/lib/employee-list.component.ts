import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@finques-limit/web/shared/ui/list';
import { TableColumnData } from '@finques-limit/web/shared/ui/table';

type Employee = { name: string; email: string; phoneNumber: string };

@Component({
  selector: 'finques-limit-employee-list',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  readonly displayedColumns: TableColumnData<Employee>[] = [
    { key: 'name', label: 'Nom' },
    { key: 'email', label: 'Correu electrònic' },
    { key: 'phoneNumber', label: 'Telèfon mòbil' },
  ];
}
