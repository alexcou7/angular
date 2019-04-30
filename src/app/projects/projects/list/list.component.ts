import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListDataSource } from './list-datasource';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListDataSource;
  @Input() public projects$;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'actions'];
  ngOnInit() {
    this.dataSource = new ListDataSource(this.paginator, this.sort);
  }
  ngAfterViewInit() {}
}
