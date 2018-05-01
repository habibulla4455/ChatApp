import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { Material2Module } from '../common/core/modules/material2.module';

@NgModule({
  declarations: [

  ],
  entryComponents: [

  ],
  providers: [

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    Material2Module
  ]
})
export class LandingPageProviderModule { }
