import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ResultTableDataSource } from './result-table-datasource';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ResultTableDataSource;

  semester = '2017/2018 First semester';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['code', 'details', 'marks', 'grade', 'credits', 'gp'];

  ngOnInit() {
    this.dataSource = new ResultTableDataSource(this.paginator, this.sort);
  }
}
