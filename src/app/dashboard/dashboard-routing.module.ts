import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: MainComponent },
    { path: 'room', loadChildren: './chat-room/chat-room.module#ChatRoomModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
    { path: 'preferences', loadChildren: './preferences/preferences.module#PreferencesModule' },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
