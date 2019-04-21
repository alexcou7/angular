import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public name: string;
  @Output() public applyFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public filtrar() {
    this.applyFilter.emit(this.name);
  }

  public removeFilter() {
    this.name = '';
    this.applyFilter.emit();
  }
}
