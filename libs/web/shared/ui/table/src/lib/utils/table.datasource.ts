import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export class TableDataSource<T> implements DataSource<T> {
  connect(collectionViewer: CollectionViewer): Observable<readonly T[]> {
    throw new Error('Method not implemented.');
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error('Method not implemented.');
  }
}
