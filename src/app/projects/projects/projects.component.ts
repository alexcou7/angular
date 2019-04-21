import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../service/projects.service';
import { Project } from './new/new.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.obtainAllProjects();
  }

  ngOnInit() {}

  public applyFilter(name: string) {
    this.projects = this.projectsService.obtainProjectsFilteredByNameLike(name);
  }
}
