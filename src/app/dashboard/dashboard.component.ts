import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef, MatDrawer } from '@angular/material';
import * as _ from "lodash";

import { AuthService } from '../common/core/services/auth.service';
import { FirestoreService } from '../common/core/services/firestore.service';
import { SharedService } from '../common/core/services/shared.service';

import { NewRoomDialogComponent } from '../common/shared/components/new-room-dialog/new-room-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;

  newRoomDialogComponent: MatDialogRef<NewRoomDialogComponent>;
  inOtherRoute: boolean = false;
  isChatMode: boolean = false;
  isDrawerOpened: boolean = false;
  isAnonymous: boolean = false;

  constructor(private router: Router, private dialog: MatDialog, private route: ActivatedRoute, private authService: AuthService, private firestore: FirestoreService, private auth: AuthService, private sharedService: SharedService) { }

  ngOnInit() {

    this.isChatMode = false;

    this.router.events.filter(e => e instanceof NavigationEnd).subscribe((response: NavigationEnd) => {
      const route = response.urlAfterRedirects.split('/').slice(1);
      const isinRoom = route.includes('room');
      this.isChatMode = isinRoom ? true : false;
    });

    this.sharedService.modeChanged.subscribe((response) => {
      setTimeout(() => (this.isChatMode = response), 50);
    });

    this.router.events.filter(e => e instanceof NavigationEnd).subscribe((response: NavigationEnd) => {
      const route = response.urlAfterRedirects.split('/').slice(1);
      const isinRoom = route.includes('room');

      const a = route.includes('room');
      const b = route.includes('profile');
      const c = route.includes('preferences');
      this.inOtherRoute = a || b || c;
    });

    this.drawer.openedStart.subscribe(() => {
      this.isDrawerOpened = true;
    });

    this.drawer.closedStart.subscribe(() => {
      this.isDrawerOpened = false;
    });

    this.route.data.subscribe((data) => {
      this.isAnonymous = data.user;
    });

    // this.firestore.removeAnonymousData();

  }

  onProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  onPreferences() {
    this.router.navigate(['preferences'], { relativeTo: this.route });
  }

  newRoom() {
    this.newRoomDialogComponent = this.dialog.open(NewRoomDialogComponent, {
      data: { }
    });
  }

  onSignout() {

    this.firestore.setUserStatus(false, false);

  }

}
