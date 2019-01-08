import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ResultTableItem {
  code: string;
  details: string;
  marks: number;
  grade: string;
  credits: number;
  gp: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ResultTableItem[] = [
  {code: 'AFS101', details:'African Studies I', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Introduction to Structered Programming', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Technology Mathematics', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Introduction To Computer Science IT', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Computer Hardware', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Communication Skill I', marks: 86, grade: 'A+', credits: 3, gp: 15},
];

/**
 * Data source for the ResultTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ResultTableDataSource extends DataSource<ResultTableItem> {
  data: ResultTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only upcode when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ResultTableItem[]> {
    // Combine everything that affects the rendered data into one upcode
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ResultTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ResultTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'details': return compare(a.details, b.details, isAsc);
        case 'code': return compare(+a.code, +b.code, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
