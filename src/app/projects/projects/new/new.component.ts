import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public project: Project;
  public mensajeOk: string;
  public formGroup: FormGroup;

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.project = {
      id: null,
      name: ''
    };
    this.buildForm();
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.nullValidator, this.validateName]],
      id: null
    });
  }

  private validateName(control: AbstractControl) {
    const name = control.value;
    let error = null;
    if (name.length < 5) {
      error = { ...error, tamMin: '*Min size is 5 letters. Current size: ' + name.length + ' letters*' };
    }
    if (name.length > 20) {
      error = { ...error, tamMax: '*Max size is 20 letters. Current size: ' + name.length + ' letters*' };
    }
    return error;
  }
  public getError(controlName: string): any {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.dirty && control.errors != null) {
      error = JSON.stringify(control.errors);
      error = error.split('*')[1];
    }
    return error;
  }

  public saveProject() {
    const projectReact = this.formGroup.value;
    this.mensajeOk = '';

    this.project = {
      id: null,
      name: projectReact.name
    };
    this.projectsService.addProject(this.project);

    this.mensajeOk = 'Project ' + projectReact.name + ' added successfully';
  }
}

export interface Project {
  id: number;
  name: string;
}
