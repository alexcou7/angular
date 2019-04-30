import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-presenter',
  templateUrl: './new-presenter.component.html',
  styleUrls: ['./new-presenter.component.css']
})
export class NewPresenterComponent implements OnInit {
  @Input() public mensajeOk: string;
  @Input() public formGroup: FormGroup;
  @Input() public errors: any;
  @Output() public saveProject = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
