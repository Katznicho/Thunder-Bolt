import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationofficerRoutingModule } from './stationofficer-routing.module';
import { StationofficerComponent } from './stationofficer.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PagesCoreOfficerComponent } from './pages-core/pages-core-officer.component';
import { RightPanelOfficerComponent } from './common/right-panel/right-panel-officer.component';
import { LeftPanelOfficerComponent } from './common/left-panel/left-panel-officer.component';
import { HeaderOfficerComponent } from './common/header/header-officer.component';
import { ContentSectionOfficerComponent } from './content-section/content-section-officer.component';


@NgModule({
  declarations: [
    StationofficerComponent, 
    DashboardComponent, 
    ProfileComponent,
    PagesCoreOfficerComponent,
    RightPanelOfficerComponent,
    LeftPanelOfficerComponent,
    HeaderOfficerComponent,
    ContentSectionOfficerComponent,
  ],
  imports: [
    CommonModule,
    StationofficerRoutingModule,
    SharedModule,
    ReactiveFormsModule
=======


@NgModule({
  declarations: [StationofficerComponent],
  imports: [
    CommonModule,
    StationofficerRoutingModule
>>>>>>> 85e5d843593549c6d547c157a5974187dc1836bd
  ]
})
export class StationofficerModule { }
