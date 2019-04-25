import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterComponent } from './projects/filter/filter/filter.component';
import { ListComponent } from './projects/list/list.component';
import { NewPresenterComponent } from './projects/new/new-presenter/new-presenter.component';
import { NewComponent } from './projects/new/new.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerPresenterComponent } from './projects/viewer/viewer-presenter/viewer-presenter.component';
import { ViewerComponent } from './projects/viewer/viewer.component';
import { ProjectsService } from './service/projects.service';

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
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, HttpClientModule],
  providers: [ProjectsService]
})
export class ProjectsModule {}
