import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  public projects: Project[];
  public id: number;
  public notFound: true;
  public projectMostrar: Project;

  constructor(private activateRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.activateRoute.params.subscribe(routeParams => {
      this.id = activateRoute.snapshot.params.id;
      this.projects = environment.projects;
      this.projectMostrar = projectsService.obtainOneProject(this.id);
    });
  }
  ngOnInit() {}
}
