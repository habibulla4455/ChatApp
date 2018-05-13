import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageProviderModule } from './landing-page-provider.module';

import { LandingPageComponent } from './landing-page.component';
import { LoginComponent } from './login/login.component';

import { LandingPageGuard } from './landing-page.guard';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    LandingPageProviderModule
  ],
  declarations: [
    LandingPageComponent,
    LoginComponent
  ],
  providers: [
    LandingPageGuard
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LandingPageModule { }
