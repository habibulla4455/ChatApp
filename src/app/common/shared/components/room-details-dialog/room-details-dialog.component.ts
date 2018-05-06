import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-room-details-dialog',
  templateUrl: './room-details-dialog.component.html',
  styleUrls: ['./room-details-dialog.component.scss']
})
export class RoomDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
