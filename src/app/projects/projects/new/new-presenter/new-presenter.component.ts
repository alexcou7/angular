import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../model/project.model';

@Component({
  selector: 'app-new-presenter',
  templateUrl: './new-presenter.component.html',
  styleUrls: ['./new-presenter.component.css']
})
export class NewPresenterComponent implements OnInit {
  @Input() public project: Project;
  @Input() public mensajeFail: string;
  @Input() public mensajeOk: string;
  @Output() public saveProject = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
