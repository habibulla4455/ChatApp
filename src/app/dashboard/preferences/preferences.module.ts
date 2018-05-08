import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { Material2Module } from '../../common/core/modules/material2.module';

import { PreferenceService } from '../../common/core/services/preference.service';

import { PreferencesComponent } from './preferences.component';
import { UpdateConfirmationDialogComponent } from '../../common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component';
import { CloudQueueDialogComponent } from '../../common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component';
import { ReauthDialogComponent } from '../../common/shared/components/reauth-dialog/reauth-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PreferencesRoutingModule,
    Material2Module
  ],
  declarations: [
    PreferencesComponent,
    UpdateConfirmationDialogComponent,
    CloudQueueDialogComponent,
    ReauthDialogComponent
  ],
  entryComponents: [
    UpdateConfirmationDialogComponent,
    CloudQueueDialogComponent,
    ReauthDialogComponent
  ],
  providers: [
    PreferenceService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PreferencesModule { }
