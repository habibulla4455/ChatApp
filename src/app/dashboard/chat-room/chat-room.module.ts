import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { Material2Module } from '../../common/core/modules/material2.module';

import { ChatRoomResolver } from './chat-room.resolver';

import { ChatRoomComponent } from './chat-room.component';
import { RoomDetailsDialogComponent } from '../../common/shared/components/room-details-dialog/room-details-dialog.component';
import { TimestampPipe } from '../../common/shared/pipes/timestamp.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoomRoutingModule,
    Material2Module
  ],
  declarations: [
    ChatRoomComponent,
    RoomDetailsDialogComponent,
    TimestampPipe
  ],
  entryComponents: [
    RoomDetailsDialogComponent
  ],
  providers: [
    ChatRoomResolver
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ChatRoomModule { }
