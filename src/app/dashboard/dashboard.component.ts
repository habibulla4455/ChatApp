import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AuthService } from '../common/core/services/auth.service';
import { SharedService } from '../common/core/services/shared.service';

import { NewRoomDialogComponent } from '../common/shared/components/new-room-dialog/new-room-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newRoomDialogComponent: MatDialogRef<NewRoomDialogComponent>;
  isChatMode: boolean = false;

  constructor(private router: Router, private dialog: MatDialog, private route: ActivatedRoute, private authService: AuthService, private sharedService: SharedService) { }

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
    this.authService.signOut()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

}
