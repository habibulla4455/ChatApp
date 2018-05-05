import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';

@NgModule({
  imports: [
    CommonModule,
    PreferencesRoutingModule
  ],
  declarations: [PreferencesComponent]
})
export class PreferencesModule { }
