import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { TableColumnData } from './types';

@Component({
  selector: 'finques-limit-table',
  standalone: true,
  imports: [CommonModule, CdkTableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @Input({ required: true }) displayedColumns: TableColumnData<T>[] = [];
}
