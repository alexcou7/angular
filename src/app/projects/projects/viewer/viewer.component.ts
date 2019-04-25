import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  public id: number;
  public notFound: true;
  public projectsMostrar: any;

  constructor(private activateRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.activateRoute.params.subscribe(routeParams => {
      this.id = activateRoute.snapshot.params.id;
    });
    this.projectsMostrar = projectsService.obtainOneProject(this.id);
  }
  ngOnInit() {}
}
