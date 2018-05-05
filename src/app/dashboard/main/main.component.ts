

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';

import { FirestoreService } from '../../common/core/services/firestore.service';
import { SharedService } from '../../common/core/services/shared.service';

import { JoinRoomConfirmationDialogComponent } from '../../common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  joinRoomConfirmationDialog: MatDialogRef<JoinRoomConfirmationDialogComponent>;
  rooms: Observable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private firestore: FirestoreService, private sharedService: SharedService) { }

  ngOnInit() {
    this.rooms = this.firestore.rooms;
    this.transfer();
  }

  onEnterRoom(room: any) {
    this.joinRoomConfirmationDialog = this.dialog.open(JoinRoomConfirmationDialogComponent, { data: { room } });
    this.joinRoomConfirmationDialog.afterClosed().subscribe((response) => {
      this.sharedService.roomDetails = room;
      this.router.navigate(['room'], { relativeTo: this.route });
    });
  }

  transfer(): void {
    const buffer = { host: { display: "madara", email: "q@q.com", uid: "DuEEQD2s9cbYol48a0xcfxVyE1Z2" }, num_participants: 30, room_name: "storm spirit", unix: "1525515599" };
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
