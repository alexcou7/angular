import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ListComponent } from './projects/list/list.component';
import { NewPresenterComponent } from './projects/new/new-presenter/new-presenter.component';
import { NewComponent } from './projects/new/new.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerPresenterComponent } from './projects/viewer/viewer-presenter/viewer-presenter.component';
import { ViewerComponent } from './projects/viewer/viewer.component';
import { FilterComponent } from './projects/filter/filter/filter.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerComponent,
    NewComponent,
    ListComponent,
    NewPresenterComponent,
    ViewerPresenterComponent,
    FilterComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
