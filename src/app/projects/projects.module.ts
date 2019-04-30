import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterComponent } from './projects/filter/filter/filter.component';
import { ListComponent } from './projects/list/list.component';
import { NewPresenterComponent } from './projects/new/new-presenter/new-presenter.component';
import { NewComponent } from './projects/new/new.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerPresenterComponent } from './projects/viewer/viewer-presenter/viewer-presenter.component';
import { ViewerComponent } from './projects/viewer/viewer.component';
import { InterceptorService } from './service/interceptor.service';
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
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [ReactiveFormsModule],
  providers: [
    ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule {}
