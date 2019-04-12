import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Project } from '../../model/project.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public project: Project;
  public mensajeFail: string;
  public mensajeOk: string;

  constructor() {}

  ngOnInit() {
    this.project = {
      id: null,
      name: ''
    };
  }

  public saveProject() {
    this.mensajeOk = '';
    this.mensajeFail = '';

    for (const p of environment.projects) {
      if (p.id == this.project.id) {
        this.mensajeFail = 'Project not added because the ID is already registered in the project: ' + p.name;
        return;
      }
    }
    if (this.project.name == '') {
      this.mensajeFail = 'Project not added because you have not specified the name';
      return;
    }
    if (this.project.id == null) {
      this.mensajeFail = 'Project not added because you have not specified the id';
      return;
    }

    environment.projects.push({ ...this.project });
    this.mensajeOk = 'Project ' + this.project.name + ' added successfully';
    this.project = {
      id: null,
      name: ''
    };
  }
}

export interface Project {
  id: number;
  name: string;
}
