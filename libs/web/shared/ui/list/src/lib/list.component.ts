import {
  AfterViewInit,
  Component,
  DestroyRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  TableColumnData,
  TableComponent,
} from '@finques-limit/web/shared/ui/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'finques-limit-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T extends { id: string; name: string }>
  implements OnChanges, AfterViewInit
{
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @Input({ required: true }) title = '';
  @Input() showSearch = true;
  @Input({ required: true }) columns: TableColumnData<T>[] = [];
  @Input({ required: true }) items: T[] = [];

  displayedColumns: string[] = [];
  readonly dataSource = new MatTableDataSource<T>([]);
  readonly searchControl = new FormControl('', { nonNullable: true });

  ngOnChanges(changes: SimpleChanges): void {
    if ('columns' in changes) {
      this.displayedColumns = [
        ...this.columns.map(({ columnDef }) => columnDef),
        'actions',
      ];
    }
    if ('items' in changes) {
      this.dataSource.data = changes['items'].currentValue;
    }
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  handleAddItem() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  handleViewItemDetails(item: T) {
    this.router.navigate([item.id], { relativeTo: this.activatedRoute });
  }

  handleDeleteItem(item: T) {
    console.log('Delete item', item);
  }
}
