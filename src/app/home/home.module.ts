import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProjectsService } from '../projects/service/projects.service';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  providers: [ProjectsService]
})
export class HomeModule {}
