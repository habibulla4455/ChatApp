import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { interval } from 'rxjs/observable/interval';
import { take } from 'rxjs/operators';

import { FirestoreService } from '../../common/core/services/firestore.service';
import { SharedService } from '../../common/core/services/shared.service';

import { JoinRoomConfirmationDialogComponent } from '../../common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  joinRoomConfirmationDialog: MatDialogRef<JoinRoomConfirmationDialogComponent>;
  rooms: Observable<any>;
  interval: Subscription;
  isAnonymous: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private firestore: FirestoreService, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.setEnter = false;

    this.rooms = this.firestore.rooms;

    this.route.data.subscribe((data) => {
      this.isAnonymous = data.user;
    });
  }

  ngOnDestroy() {
    if (this.interval === undefined) return;
    this.interval.unsubscribe();
  }

  onEnterRoom(room: any) {
    this.sharedService.setEnter = true;

    let i = 0;
    this.joinRoomConfirmationDialog = this.dialog.open(JoinRoomConfirmationDialogComponent, { data: { room } });
    this.joinRoomConfirmationDialog.afterClosed().subscribe((response: any) => {

      if (response !== true) return;
      this.interval = interval(1).subscribe(() => {
        this.routeToRoom(room);
      });

      this.router.events.filter(e => e instanceof NavigationEnd).subscribe((response: NavigationEnd) => {
        const route = response.urlAfterRedirects.split('/').slice(1);
        const isinRoom = route.includes('room');
        this.interval.unsubscribe();
        if (isinRoom && i === 0) {
          this.firestore.currentUser.subscribe((user) => {
            this.firestore.newRoomParticipant(user, room);
          });
          i++;
        }
      });

    });
  }

  onEnterPublic() {
    this.sharedService.setEnter = true;
    
    const publicRoom = { host: { display: "Admin", email: "q@a.com", uid: "DuEEQD2s9cbYol48a0xcfxVyE1Z2" }, num_participants: Infinity, room_name: "Public Room" };
    this.sharedService.roomDetails = publicRoom;
    this.interval = interval(1).subscribe(() => {
      this.routeToRoom(publicRoom);
    });

    let i = 0;
    this.router.events.filter(e => e instanceof NavigationEnd).subscribe((response: NavigationEnd) => {
      const route = response.urlAfterRedirects.split('/').slice(1);
      const isinRoom = route.includes('room');
      this.interval.unsubscribe();
      if (isinRoom && i === 0) {
        this.firestore.currentUser.subscribe((user) => {
          this.firestore.newRoomParticipant(user, publicRoom);
        });
        i++;
      }
    });
  }

  routeToRoom(room: any) {
    this.sharedService.roomDetails = room;
    this.router.navigate(['room'], { relativeTo: this.route });
  }

}
