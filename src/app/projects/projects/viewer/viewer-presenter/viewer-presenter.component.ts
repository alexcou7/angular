import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../model/project.model';

@Component({
  selector: 'app-viewer-presenter',
  templateUrl: './viewer-presenter.component.html',
  styleUrls: ['./viewer-presenter.component.css']
})
export class ViewerPresenterComponent implements OnInit {
  @Input() public id: number;
  @Input() public notFound: true;
  @Input() public projectsMostrar: Project[];
  constructor() {}

  ngOnInit() {}
}
