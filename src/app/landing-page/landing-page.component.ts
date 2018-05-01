import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <mat-drawer-container>
      <div style="height: 100vh">
        <router-outlet></router-outlet>
      </div>
    </mat-drawer-container>
  `
})
export class LandingPageComponent { }
