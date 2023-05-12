import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  TableColumnData,
  TableComponent,
  TableDataSource,
} from '@finques-limit/web/shared/ui/table';

@Component({
  selector: 'finques-limit-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TableComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T> {
  @Input({ required: true }) title = '';
  @Input() showSearch = true;
  @Input({ required: true }) columns: TableColumnData<T>[] = [];

  readonly searchControl = new FormControl('', { nonNullable: true });

  handleAddItem() {
    console.log('a');
  }
}
