import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatRoomResolver } from './chat-room.resolver';

import { ChatRoomComponent } from './chat-room.component';

const routes: Routes = [
  { path: '', component: ChatRoomComponent, resolve: { room: ChatRoomResolver }, children: [
    { path: '', loadChildren: './participants/participants.module#ParticipantsModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoomRoutingModule { }
