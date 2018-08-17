import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from "@angular/cdk/overlay";

import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import * as firebase from 'firebase';

import { AuthService } from './common/core/services/auth.service';
import { FirestoreService } from './common/core/services/firestore.service';
import { SharedService } from './common/core/services/shared.service';
import { DashboardResolver } from './dashboard/dashboard.resolver';
import { LandingPageGuard } from './landing-page/landing-page.guard';
import { EntryGuard, ExitGuard } from './common/core/services/route-guard.service';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    FirestoreService,
    SharedService,
    DashboardResolver,
    LandingPageGuard,
    EntryGuard,
    ExitGuard
  ]
})
export class AppProviderModule {

  constructor(private app: FirebaseApp) {
    app.firestore().settings({ timestampsInSnapshots: true });
  }

}
