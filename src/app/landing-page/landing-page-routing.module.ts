import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { LoginComponent } from './login/login.component';

import { LandingPageGuard } from './landing-page.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent, children:[
    { path: '', component: LoginComponent },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
