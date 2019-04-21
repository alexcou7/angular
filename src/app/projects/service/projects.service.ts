import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../projects/new/new.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects = environment.projects;
  private projectsFiltered: Project[] = new Array();
  private nameUpper = '';

  constructor() {}

  public obtainAllProjects() {
    return this.projects;
  }

  public obtainOneProject(id: any) {
    return this.projects.filter(project => project.id == id)[0];
  }

  public addProject(project: Project) {
    environment.projects.push(project);
  }

  public obtainProjectsFilteredByNameLike(name: string) {
    if (name == null || name.trim() == '') {
      return this.projects;
    } else {
      this.projectsFiltered = new Array();
      for (const project of environment.projects) {
        if (project.name.toUpperCase().includes(name.toUpperCase())) {
          this.projectsFiltered.push(project);
        }
      }
      return this.projectsFiltered;
    }
  }
}
