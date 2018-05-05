import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material';
import { FirestoreService } from '../../../core/services/firestore.service';

@Component({
  selector: 'app-new-room-dialog',
  templateUrl: './new-room-dialog.component.html',
  styleUrls: ['./new-room-dialog.component.scss']
})
export class NewRoomDialogComponent implements OnInit {

  newRoomForm: FormGroup;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, private dialog: MatDialog, private firestore: FirestoreService) {
    this.newRoomForm = fb.group({
      'room_name': [ '', [ Validators.required, Validators.maxLength(17), Validators.minLength(5) ] ],
      'num_participants': [ '', [ Validators.required, Validators.max(50) ] ],
      'room_password': [ '', [ Validators.required, Validators.minLength(3), Validators.maxLength(6) ] ],
    })
  }

  ngOnInit() {
  }

  get room_name() {
    return this.newRoomForm.controls.room_name.errors;
  }

  get num_participants() {
    return this.newRoomForm.controls.num_participants.errors;
  }

  get room_password() {
    return this.newRoomForm.controls.room_password.errors;
  }

  onSubmit() {
    if (this.newRoomForm.invalid) return;
    this.firestore.createNewRoom(this.newRoomForm.value);
    this.dialog.closeAll();
  }

}
