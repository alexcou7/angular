import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public project: Project;
  public mensajeFail: string;
  public mensajeOk: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.project = {
      id: null,
      name: ''
    };
  }

  public saveProject() {
    this.mensajeOk = '';
    this.mensajeFail = '';

    if (this.project.name == '') {
      this.mensajeFail = 'Project not added because you have not specified the name';
      return;
    }

    this.projectsService.addProject(this.project);

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
