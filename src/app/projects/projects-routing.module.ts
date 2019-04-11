import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './projects/new/new.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerComponent } from './projects/viewer/viewer.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: ':id',
    component: ViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
