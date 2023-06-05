export type TableColumnData<T> = {
  columnDef: string;
  header: string;
  cell: (item: T) => T[keyof T];
};
