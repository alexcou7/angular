import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/service/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects$: any;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService.obtainAllProjects();
  }

  ngOnInit() {}
}
