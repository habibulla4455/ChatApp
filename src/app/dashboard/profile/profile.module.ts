import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { Material2Module } from '../../common/core/modules/material2.module';

import { ProfileComponent } from './profile.component';
import { TimestampPipe } from '../../common/shared/pipes/timestamp3.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    Material2Module
  ],
  declarations: [
    ProfileComponent,
    TimestampPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProfileModule { }
