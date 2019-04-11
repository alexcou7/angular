import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NewComponent } from './projects/new/new.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerComponent } from './projects/viewer/viewer.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerComponent, NewComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
