import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Project } from '../../model/project.model';

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

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(routeParams => {
      this.id = activateRoute.snapshot.params.id;
      this.projects = environment.projects;
      this.projectMostrar = this.projects.filter(project => project.id == this.id)[0];
      console.log('aaaaaaaaaaaaaaaaaa');
    });
  }
  ngOnInit() {}
}
