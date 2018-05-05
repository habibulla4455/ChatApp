import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { Material2Module } from '../../../common/core/modules/material2.module';

import { ParticipantsComponent } from './participants.component';

@NgModule({
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    Material2Module
  ],
  declarations: [ParticipantsComponent]
})
export class ParticipantsModule { }
