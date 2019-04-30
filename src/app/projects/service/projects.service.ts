import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../projects/new/new.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects$: Observable<Project[]> = null;
  private url = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {}

  public obtainAllProjects() {
    this.obtainProjectsFromURL();
    return this.projects$;
  }

  public obtainOneProject(id: any) {
    this.obtainProjectsFromURL();
    return this.projects$.pipe(map(projects => projects.filter(projects => projects.id == id)));
  }
  private transformArray(ar: any[]) {
    if (ar != null) {
      ar.forEach(fila => {
        fila['id'] = fila['_id'];
        delete fila['_id'];
      });
    }
    return ar;
  }

  public addProject(project: Project) {
    this.httpClient.post(this.url, project).subscribe();
  }

  public obtainProjectsFilteredByNameLike(name: string) {
    this.obtainProjectsFromURL();
    if (name == null || name.trim() == '') {
      return this.projects$;
    } else {
      return this.projects$.pipe(
        map(projects =>
          projects.filter(projects => projects.name != null && projects.name.toUpperCase().includes(name.toUpperCase()))
        )
      );
    }
  }

  public obtainProjectsFromURL() {
    this.projects$ = this.httpClient.get(this.url).pipe(map(this.transformArray));
  }
}
