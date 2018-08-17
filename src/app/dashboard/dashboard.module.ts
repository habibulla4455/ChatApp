import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { Material2Module } from '../common/core/modules/material2.module';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { DrawerContentComponent } from './drawer-content/drawer-content.component';

import { NewRoomDialogComponent } from '../common/shared/components/new-room-dialog/new-room-dialog.component';
import { JoinRoomConfirmationDialogComponent } from '../common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component';

import { TimestampPipe } from '../common/shared/pipes/timestamp4.pipe';

import { DashboardResolver } from './dashboard.resolver';
import { RoomGuard } from '../common/core/services/route-guard.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    Material2Module
  ],
  entryComponents: [
    NewRoomDialogComponent,
    JoinRoomConfirmationDialogComponent
  ],
  declarations: [
    DashboardComponent,
    MainComponent,
    DrawerContentComponent,
    NewRoomDialogComponent,
    JoinRoomConfirmationDialogComponent,
    TimestampPipe
  ],
  providers: [
    DashboardResolver,
    RoomGuard
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
