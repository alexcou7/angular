import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: any;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService.obtainAllProjects();
  }

  ngOnInit() {}

  public applyFilter(name: string) {
    this.projects$ = this.projectsService.obtainProjectsFilteredByNameLike(name);
  }
}
