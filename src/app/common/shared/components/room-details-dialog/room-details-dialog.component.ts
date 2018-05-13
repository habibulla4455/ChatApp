import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-room-details-dialog',
  templateUrl: './room-details-dialog.component.html',
  styleUrls: ['./room-details-dialog.component.scss']
})
export class RoomDetailsDialogComponent implements OnInit {

  condition: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.condition = this.data.room.num_participants !== Infinity;
  }

}
