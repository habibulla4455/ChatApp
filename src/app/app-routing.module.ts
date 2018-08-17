import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageGuard } from './landing-page/landing-page.guard';
import { EntryGuard, ExitGuard } from './common/core/services/route-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './landing-page/landing-page.module#LandingPageModule', canActivate: [ ExitGuard ] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [ EntryGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
