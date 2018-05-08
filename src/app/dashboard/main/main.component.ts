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

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private firestore: FirestoreService, private sharedService: SharedService) { }

  ngOnInit() {
    this.rooms = this.firestore.rooms;
    // this.transfer();
  }

  ngOnDestroy() {
    if (this.interval === undefined) return;
    this.interval.unsubscribe();
  }

  onEnterRoom(room: any) {
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
    const publicRoom = { host: { display: "uchiha madara", email: "q@q.com", uid: "DuEEQD2s9cbYol48a0xcfxVyE1Z2" }, num_participants: Infinity, room_name: "Public Room", unix: "1525515599" };
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

  transfer(): void {
    const buffer = { host: { display: "uchiha madara", email: "q@q.com", uid: "DuEEQD2s9cbYol48a0xcfxVyE1Z2" }, num_participants: Infinity, room_name: "Public Room", unix: "1525515599" };
    this.sharedService.roomDetails = buffer;
    this.router.navigate(['room'], { relativeTo: this.route });
    setTimeout(() => {
      this.sharedService.roomDetails = buffer;
      this.router.navigate(['room'], { relativeTo: this.route });
    }, 100);
    setTimeout(() => {
      this.sharedService.roomDetails = buffer;
      this.router.navigate(['room'], { relativeTo: this.route });
    }, 200);
    setTimeout(() => {
      this.sharedService.roomDetails = buffer;
      this.router.navigate(['room'], { relativeTo: this.route });
    }, 400);
  }

}
